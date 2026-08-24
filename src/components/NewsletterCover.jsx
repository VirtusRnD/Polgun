import { useEffect, useRef, useState } from 'react'

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

export default function NewsletterCover({ pdfUrl, alt = 'Bülten Kapağı' }) {
  const canvasRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function renderCover() {
      try {
        setLoading(true)
        setError(false)
        
        const pdfjs = await loadPdfjs()
        if (cancelled) return

        const loadingTask = pdfjs.getDocument({
          url: pdfUrl,
          disableRange: false,
          disableAutoFetch: true,
        })
        
        const pdf = await loadingTask.promise
        if (cancelled) return

        const page = await pdf.getPage(1)
        if (cancelled) return

        const canvas = canvasRef.current
        if (!canvas) return

        const context = canvas.getContext('2d')
        if (!context) return

        // Calculate scaling to render a crisp image
        const viewport = page.getViewport({ scale: 1 })
        const desiredWidth = 400
        const scale = desiredWidth / viewport.width
        const scaledViewport = page.getViewport({ scale })

        canvas.width = scaledViewport.width
        canvas.height = scaledViewport.height

        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        }

        await page.render(renderContext).promise
        if (!cancelled) {
          setLoading(false)
        }
      } catch (err) {
        console.error('Error rendering cover page:', err)
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
      }
    }

    renderCover()

    return () => {
      cancelled = true
    }
  }, [pdfUrl])

  return (
    <div className="w-full aspect-[1/1.41] rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'var(--th-surface)' }}>
      {/* Shimmering Skeleton Loader */}
      {loading && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 animate-pulse select-none"
          style={{
            background: 'linear-gradient(90deg, var(--th-surface) 25%, color-mix(in srgb, var(--th-border) 40%, transparent) 50%, var(--th-surface) 75%)',
            backgroundSize: '200% 100%',
          }}>
          <div className="w-16 h-4 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="space-y-3">
            <div className="w-3/4 h-6 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="w-1/2 h-4 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      )}

      {/* Error Fallback Cover State */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none"
          style={{ background: 'linear-gradient(135deg, var(--th-polgun-blue) 0%, var(--th-primary) 100%)' }}>
          <span className="text-white/20 text-6xl font-black tracking-widest mb-4">POLGÜN</span>
          <svg className="w-12 h-12 text-white/50 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span className="text-xs text-white/60 font-semibold">{alt}</span>
        </div>
      )}

      {/* Rendered PDF Page Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${loading || error ? 'invisible' : 'visible'}`}
      />
    </div>
  )
}
