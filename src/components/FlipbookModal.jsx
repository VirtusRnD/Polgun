import { useEffect, useRef, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const PDFJS_CDN_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js'
const PDFJS_WORKER_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js'

let pdfjsPromise = null

function loadPdfjs() {
  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib)
  }
  if (pdfjsPromise) {
    return pdfjsPromise
  }

  pdfjsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = PDFJS_CDN_SRC
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC
      resolve(window.pdfjsLib)
    }
    script.onerror = (err) => {
      pdfjsPromise = null
      reject(err)
    }
    document.head.appendChild(script)
  })

  return pdfjsPromise
}

export default function FlipbookModal({ pdfUrl, title, onClose }) {
  const { t } = useTranslation()
  const [pdfDoc, setPdfDoc] = useState(null)
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1) // 1-based index
  const [loading, setLoading] = useState(true)
  const [loadingPercent, setLoadingPercent] = useState(0)
  const [error, setError] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)
  const [zoom, setZoom] = useState(1) // 1x, 1.25x, 1.5x, 1.75x, 2x
  const [viewMode, setViewMode] = useState('single') // 'single' (Large Reading) | 'dual' (Magazine Spread)

  // Canvas refs for rendering pages
  const leftCanvasRef = useRef(null)
  const rightCanvasRef = useRef(null)
  const singleCanvasRef = useRef(null)

  // Load PDF Document
  useEffect(() => {
    let cancelled = false
    let loadingTask = null

    async function loadPdf() {
      try {
        setLoading(true)
        setError(false)
        setLoadingPercent(0)

        const pdfjs = await loadPdfjs()
        if (cancelled) return

        loadingTask = pdfjs.getDocument({
          url: pdfUrl,
          disableRange: false,
          disableAutoFetch: true,
        })

        // Track loading progress
        loadingTask.onProgress = (progress) => {
          if (progress.total > 0) {
            const percent = Math.round((progress.loaded / progress.total) * 100)
            if (!cancelled) setLoadingPercent(percent)
          }
        }

        const pdf = await loadingTask.promise
        if (cancelled) return

        setPdfDoc(pdf)
        setNumPages(pdf.numPages)
        setLoading(false)
      } catch (err) {
        console.error('Error loading PDF:', err)
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
      }
    }

    loadPdf()

    // Disable copy / print shortcuts
    const preventShortcuts = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'c' || e.key === 's')) {
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', preventShortcuts)

    return () => {
      cancelled = true
      if (loadingTask) {
        loadingTask.destroy()
      }
      window.removeEventListener('keydown', preventShortcuts)
    }
  }, [pdfUrl])

  // Helper to render a specific page onto a canvas with High-DPI Retina sharpness
  const renderPageOnCanvas = useCallback(async (pageNum, canvas) => {
    if (!pdfDoc || !canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    try {
      const page = await pdfDoc.getPage(pageNum)
      const baseViewport = page.getViewport({ scale: 1.0 })

      // Calculate dynamic display height to maximize screen estate
      const isMobile = window.innerWidth < 768
      const availableHeight = isMobile ? window.innerHeight * 0.72 : window.innerHeight * 0.82
      const targetHeight = Math.max(availableHeight, 600) * zoom
      const cssScale = targetHeight / baseViewport.height

      // Render at high-DPR for ultra crisp vector & text clarity
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5)
      const renderViewport = page.getViewport({ scale: cssScale * dpr })

      canvas.width = renderViewport.width
      canvas.height = renderViewport.height

      // CSS display size
      canvas.style.width = `${renderViewport.width / dpr}px`
      canvas.style.height = `${renderViewport.height / dpr}px`

      const renderContext = {
        canvasContext: context,
        viewport: renderViewport,
      }

      await page.render(renderContext).promise
    } catch (err) {
      console.error(`Error rendering page ${pageNum}:`, err)
    }
  }, [pdfDoc, zoom])

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false
  const isActualSingleMode = isMobile || viewMode === 'single' || currentPage === 1 || currentPage > numPages

  // Triggers rendering when current page, zoom, viewMode, or viewport changes
  useEffect(() => {
    if (loading || error || !pdfDoc) return

    if (isActualSingleMode) {
      // Single Page layout
      if (singleCanvasRef.current) {
        renderPageOnCanvas(currentPage, singleCanvasRef.current)
      }
    } else {
      // Dual Spread layout (Left & Right pages)
      if (leftCanvasRef.current) {
        renderPageOnCanvas(currentPage, leftCanvasRef.current)
      }
      if (rightCanvasRef.current && currentPage + 1 <= numPages) {
        renderPageOnCanvas(currentPage + 1, rightCanvasRef.current)
      }
    }

    // Preload adjacent pages into memory for instantaneous flipping
    const adjacent = [currentPage - 2, currentPage - 1, currentPage + 1, currentPage + 2, currentPage + 3].filter(
      (p) => p >= 1 && p <= numPages
    )
    adjacent.forEach((p) => {
      pdfDoc.getPage(p).catch(() => {})
    })
  }, [currentPage, pdfDoc, loading, error, numPages, renderPageOnCanvas, isActualSingleMode, zoom, viewMode])

  // Navigation handlers
  const handleNext = () => {
    if (isFlipping) return
    const step = isActualSingleMode ? 1 : 2

    if (currentPage + step <= numPages) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev + step)
        setIsFlipping(false)
      }, 200)
    }
  }

  const handlePrev = () => {
    if (isFlipping) return
    const step = isActualSingleMode ? 1 : 2

    if (currentPage - step >= 1) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => Math.max(1, prev - step))
        setIsFlipping(false)
      }, 200)
    }
  }

  // Zoom handlers
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 2.0))
  }
  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.75))
  }
  const handleZoomReset = () => {
    setZoom(1.0)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === '+' || e.key === '=') handleZoomIn()
      if (e.key === '-' || e.key === '_') handleZoomOut()
      if (e.key === '0') handleZoomReset()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeys)
    return () => window.removeEventListener('keydown', handleKeys)
  }, [currentPage, numPages, isFlipping, isActualSingleMode, zoom])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Strict CSS overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { display: none !important; }
          html { display: none !important; }
        }
        canvas {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      ` }} />

      {/* ── Top Bar with Title & Enhanced Zoom/View Controls ── */}
      <header className="px-4 lg:px-8 py-3.5 flex items-center justify-between border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md z-40 gap-4">
        {/* Title */}
        <div className="flex items-center gap-3 min-w-0">
          <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wide truncate">
            {title}
          </h3>
          {!loading && !error && (
            <span className="hidden md:inline-flex items-center text-xs font-bold text-neutral-400 px-2.5 py-0.5 rounded-full bg-white/10 shrink-0">
              {currentPage} / {numPages}
            </span>
          )}
        </div>

        {/* Center / Right Control Toolbar */}
        {!loading && !error && (
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* View Mode Toggle (Desktop only) */}
            <div className="hidden md:flex items-center p-0.5 rounded-xl bg-neutral-800 border border-neutral-700">
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${viewMode === 'single' ? 'bg-[#22ABE6] text-white shadow-md' : 'text-neutral-400 hover:text-white'}`}
                title="Tek Sayfa (Büyük Okuma)"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Büyük Boyut</span>
              </button>
              <button
                onClick={() => setViewMode('dual')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${viewMode === 'dual' ? 'bg-[#22ABE6] text-white shadow-md' : 'text-neutral-400 hover:text-white'}`}
                title="Çift Sayfa (Dergi Görünümü)"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Çift Sayfa</span>
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-neutral-800 border border-neutral-700 rounded-xl p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.75}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:bg-neutral-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Küçült (-)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
              <button
                onClick={handleZoomReset}
                className="px-2 text-xs font-black text-white hover:text-[#22ABE6] transition-colors"
                title="Yakınlaştırmayı Sıfırla (0)"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 2.0}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:bg-neutral-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Büyüt (+)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Actions: Open in new tab + Close */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all text-white shrink-0 hover:scale-105"
            title="PDF'i Yeni Sekmede Aç / İndir"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all text-white shrink-0 hover:scale-105"
            title={t('news.flipbook_close', { defaultValue: 'Kapat (Esc)' })}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Main Book Viewer Panel (Scrollable when zoomed) ── */}
      <div className="flex-1 flex items-center justify-center relative p-2 sm:p-4 overflow-auto scrollbar-thin">
        
        {/* Loading Progress State */}
        {loading && (
          <div className="flex flex-col items-center gap-4 text-white">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="34" className="stroke-white/10" strokeWidth="6" fill="transparent" />
                <circle cx="40" cy="40" r="34" className="stroke-[#22ABE6] transition-all duration-300" strokeWidth="6" fill="transparent"
                  strokeDasharray={213.6} strokeDashoffset={213.6 - (213.6 * loadingPercent) / 100} />
              </svg>
              <span className="absolute text-xs font-black">{loadingPercent}%</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              {t('news.flipbook_loading', { defaultValue: 'Bülten Yükleniyor...' })}
            </p>
          </div>
        )}

        {/* Error Fallback State */}
        {error && (
          <div className="text-center text-white max-w-sm px-6">
            <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <p className="text-sm font-semibold mb-4">
              {t('news.flipbook_error', { defaultValue: 'Bülten yüklenemedi. Lütfen tekrar deneyin.' })}
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              {t('news.flipbook_close', { defaultValue: 'Kapat' })}
            </button>
          </div>
        )}

        {/* ── Rendered Canvases Frame ── */}
        {!loading && !error && (
          <div className="flex items-center justify-center w-full min-h-full py-4 relative">
            
            {/* Left Navigation Chevron Button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/85 border border-white/15 text-white backdrop-blur-md shadow-2xl hover:scale-105 transition-all ${currentPage === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              title={t('news.flipbook_prev', { defaultValue: 'Önceki Sayfa (Sol Ok)' })}
              aria-label="Önceki Sayfa"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Book Body Viewport */}
            <div className={`relative flex items-center justify-center transition-all duration-200 ${isFlipping ? 'scale-98 opacity-90' : 'scale-100 opacity-100'}`}>
              
              {isActualSingleMode ? (
                /* Single Page View (Large reading format) */
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-neutral-800">
                  <canvas ref={singleCanvasRef} className="block object-contain" />
                  {currentPage > 1 && (
                    <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
                  )}
                </div>
              ) : (
                /* Dual Spread Magazine Page Layout */
                <div className="flex relative shadow-2xl rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
                  {/* Left Side Page */}
                  <div className="relative bg-white border-r border-neutral-200">
                    <canvas ref={leftCanvasRef} className="block object-contain" />
                    <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Right Side Page */}
                  <div className="relative bg-white">
                    <canvas ref={rightCanvasRef} className="block object-contain" />
                    <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>
              )}
            </div>

            {/* Right Navigation Chevron Button */}
            <button
              onClick={handleNext}
              disabled={isActualSingleMode ? currentPage >= numPages : currentPage >= numPages - 1}
              className={`fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/85 border border-white/15 text-white backdrop-blur-md shadow-2xl hover:scale-105 transition-all ${(isActualSingleMode ? currentPage >= numPages : currentPage >= numPages - 1) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              title={t('news.flipbook_next', { defaultValue: 'Sonraki Sayfa (Sağ Ok)' })}
              aria-label="Sonraki Sayfa"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>
        )}
      </div>

      {/* ── Footer Navigation Panel ── */}
      {!loading && !error && (
        <footer className="px-4 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between border-t border-neutral-800 bg-neutral-900/90 backdrop-blur-md gap-3 z-40">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
            <span>{t('news.flipbook_pages', { defaultValue: 'Sayfa' })}</span>
            <span className="text-white font-extrabold text-sm">
              {isActualSingleMode
                ? `${currentPage} / ${numPages}`
                : `${currentPage}-${Math.min(numPages, currentPage + 1)} / ${numPages}`}
            </span>
          </div>

          {/* Quick page thumbnails/navigator track */}
          <div className="flex items-center gap-1.5 max-w-lg overflow-x-auto py-1">
            {Array.from({ length: Math.ceil(numPages / (isActualSingleMode ? 1 : 2)) }).map((_, idx) => {
              const pageNum = isActualSingleMode ? idx + 1 : (idx === 0 ? 1 : idx * 2)
              const isActive = isActualSingleMode
                ? currentPage === pageNum
                : (currentPage === pageNum || currentPage + 1 === pageNum || (pageNum === 1 && currentPage === 1))

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setIsFlipping(true)
                    setTimeout(() => {
                      setCurrentPage(pageNum)
                      setIsFlipping(false)
                    }, 150)
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${isActive ? 'w-8 bg-[#22ABE6]' : 'w-2.5 bg-neutral-700 hover:bg-neutral-500'}`}
                  title={`${t('news.flipbook_pages', { defaultValue: 'Sayfa' })} ${pageNum}`}
                />
              )
            })}
          </div>

          {/* Info Badge on right */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-500">
            <span>Klavye: ← / →</span>
            <span>·</span>
            <span>Yakınlaştır: + / -</span>
          </div>
        </footer>
      )}
    </div>
  )
}
