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

  // Helper to render a specific page onto a canvas
  const renderPageOnCanvas = useCallback(async (pageNum, canvas) => {
    if (!pdfDoc || !canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    try {
      const page = await pdfDoc.getPage(pageNum)
      const viewport = page.getViewport({ scale: 1.5 }) // crisp render size

      // Fit to container dynamically
      const desiredHeight = window.innerHeight * 0.7
      const scale = desiredHeight / viewport.height
      const scaledViewport = page.getViewport({ scale })

      canvas.width = scaledViewport.width
      canvas.height = scaledViewport.height

      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport,
      }

      await page.render(renderContext).promise
    } catch (err) {
      console.error(`Error rendering page ${pageNum}:`, err)
    }
  }, [pdfDoc])

  // Triggers rendering when current page or viewport changes
  useEffect(() => {
    if (loading || error || !pdfDoc) return

    const isMobile = window.innerWidth < 768

    if (isMobile) {
      // Mobile: Single page layout
      if (singleCanvasRef.current) {
        renderPageOnCanvas(currentPage, singleCanvasRef.current)
      }
    } else {
      // Desktop: Spread layout (Left & Right pages)
      // Page 1 is the cover (shown alone in center)
      if (currentPage === 1) {
        if (singleCanvasRef.current) {
          renderPageOnCanvas(1, singleCanvasRef.current)
        }
      } else if (currentPage > numPages) {
        // Last page shown alone if odd, or check boundary
        if (singleCanvasRef.current) {
          renderPageOnCanvas(numPages, singleCanvasRef.current)
        }
      } else {
        // Left page = currentPage, Right page = currentPage + 1
        if (leftCanvasRef.current) {
          renderPageOnCanvas(currentPage, leftCanvasRef.current)
        }
        if (rightCanvasRef.current && currentPage + 1 <= numPages) {
          renderPageOnCanvas(currentPage + 1, rightCanvasRef.current)
        }
      }
    }
  }, [currentPage, pdfDoc, loading, error, numPages, renderPageOnCanvas])

  // Navigation handlers
  const handleNext = () => {
    if (isFlipping) return
    const isMobile = window.innerWidth < 768
    const step = isMobile ? 1 : (currentPage === 1 ? 1 : 2)
    
    if (currentPage + step <= numPages) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev + step)
        setIsFlipping(false)
      }, 300)
    }
  }

  const handlePrev = () => {
    if (isFlipping) return
    const isMobile = window.innerWidth < 768
    const step = isMobile ? 1 : (currentPage <= 3 ? 1 : 2)

    if (currentPage - step >= 1) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => Math.max(1, prev - step))
        setIsFlipping(false)
      }, 300)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeys)
    return () => window.removeEventListener('keydown', handleKeys)
  }, [currentPage, numPages, isFlipping])

  const isMobile = window.innerWidth < 768
  const isSinglePageMode = isMobile || currentPage === 1 || currentPage > numPages

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between select-none"
      onContextMenu={(e) => e.preventDefault()} // Disable right-click completely
      onDragStart={(e) => e.preventDefault()} // Disable canvas/image dragging
    >
      {/* Strict CSS overrides to prevent printing/screenshot styling */}
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
          pointer-events: none;
        }
      ` }} />

      {/* ── Top Bar ── */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
        <h3 className="text-white font-bold text-sm tracking-wide truncate max-w-md">
          {title}
        </h3>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white"
          title={t('news.flipbook_close', { defaultValue: 'Kapat' })}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      {/* ── Main Book Viewer Panel ── */}
      <div className="flex-1 flex items-center justify-center relative p-6 overflow-hidden">
        
        {/* Loading Progress State */}
        {loading && (
          <div className="flex flex-col items-center gap-4 text-white">
            <div className="relative w-20 h-20 flex items-center justify-center">
              {/* Circular progress loader */}
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="34" className="stroke-white/10" strokeWidth="6" fill="transparent" />
                <circle cx="40" cy="40" r="34" className="stroke-[var(--th-polgun-blue)] transition-all duration-300" strokeWidth="6" fill="transparent"
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

        {/* ── Flipbook Book Frame (Rendered Canvases) ── */}
        {!loading && !error && (
          <div className="flex items-center justify-center w-full h-full max-w-6xl max-h-[75vh]">
            
            {/* Left Chevron Button */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`absolute left-4 lg:left-8 z-30 w-12 h-12 rounded-full flex items-center justify-center bg-black/60 border border-neutral-800 text-white hover:bg-neutral-800 hover:scale-105 transition-all ${currentPage === 1 ? 'opacity-20 cursor-default' : 'opacity-100'}`}
              title={t('news.flipbook_prev', { defaultValue: 'Önceki Sayfa' })}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Book Body Viewport */}
            <div className={`relative flex items-center justify-center transition-all duration-300 ${isFlipping ? 'scale-98 opacity-90 rotate-y-[-2deg]' : 'scale-100 opacity-100'}`}
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
              }}>
              
              {isSinglePageMode ? (
                /* Single Page View (Cover, back page, or mobile layout) */
                <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white border border-neutral-800">
                  <canvas ref={singleCanvasRef} className="max-w-full max-h-[70vh] object-contain block" />
                  {/* Subtle middle binding shadow overlay (for back cover realism) */}
                  {currentPage > 1 && (
                    <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                  )}
                </div>
              ) : (
                /* Dual Spread Magazine Page Layout (Desktop Only) */
                <div className="flex relative shadow-2xl rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
                  
                  {/* Left Side Page */}
                  <div className="relative bg-white border-r border-neutral-200">
                    <canvas ref={leftCanvasRef} className="max-w-full max-h-[70vh] object-contain block" />
                    {/* Shadow overlay representing page binding depth */}
                    <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-black/25 to-transparent pointer-events-none" />
                  </div>

                  {/* Right Side Page */}
                  <div className="relative bg-white">
                    <canvas ref={rightCanvasRef} className="max-w-full max-h-[70vh] object-contain block" />
                    {/* Shadow overlay representing page binding depth */}
                    <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
                  </div>
                </div>
              )}
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={handleNext}
              disabled={isMobile ? currentPage >= numPages : currentPage >= numPages - 1}
              className={`absolute right-4 lg:right-8 z-30 w-12 h-12 rounded-full flex items-center justify-center bg-black/60 border border-neutral-800 text-white hover:bg-neutral-800 hover:scale-105 transition-all ${ (isMobile ? currentPage >= numPages : currentPage >= numPages - 1) ? 'opacity-20 cursor-default' : 'opacity-100'}`}
              title={t('news.flipbook_next', { defaultValue: 'Sonraki Sayfa' })}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>
        )}
      </div>

      {/* ── Footer Navigation Panel ── */}
      {!loading && !error && (
        <footer className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-neutral-800 bg-neutral-900/50 backdrop-blur-md gap-4">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            {t('news.flipbook_pages', { defaultValue: 'Sayfa' })} {
              isMobile
                ? `${currentPage} / ${numPages}`
                : (currentPage === 1 ? `1 / ${numPages}` : `${currentPage}-${Math.min(numPages, currentPage + 1)} / ${numPages}`)
            }
          </div>

          {/* Quick page thumbnails/navigator track */}
          <div className="flex items-center gap-1.5 max-w-lg overflow-x-auto py-1">
            {Array.from({ length: Math.ceil(numPages / (isMobile ? 1 : 2)) }).map((_, idx) => {
              const pageNum = isMobile ? idx + 1 : (idx === 0 ? 1 : idx * 2)
              const isActive = isMobile
                ? currentPage === pageNum
                : (currentPage === 1 ? pageNum === 1 : (currentPage === pageNum || currentPage + 1 === pageNum || currentPage - 1 === pageNum))

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setIsFlipping(true)
                    setTimeout(() => {
                      setCurrentPage(pageNum)
                      setIsFlipping(false)
                    }, 250)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${isActive ? 'w-8 bg-[var(--th-polgun-blue)]' : 'w-2 bg-neutral-700 hover:bg-neutral-500'}`}
                  title={`${t('news.flipbook_pages', { defaultValue: 'Sayfa' })} ${pageNum}`}
                />
              )
            })}
          </div>

          {/* Empty spacer on desktop to balance layout */}
          <div className="hidden sm:block w-32" />
        </footer>
      )}
    </div>
  )
}
