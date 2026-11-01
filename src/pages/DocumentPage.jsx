import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { loadPdfjs } from '../utils/pdfjs'

// Telefon tarayıcıları PDF'i göstermek yerine indirdiği için belgeler site içinde pdf.js ile çiziliyor
export default function DocumentPage() {
  const { t } = useTranslation()
  const [params] = useSearchParams()
  const src = params.get('src') || ''
  // Yalnızca sitedeki /documents/ altındaki PDF'ler açılabilir
  const valid = /^\/documents\/[\w/-]+\.pdf$/.test(src)
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!valid) return
    let cancelled = false
    const container = containerRef.current
    ;(async () => {
      try {
        const pdfjs = await loadPdfjs()
        const pdf = await pdfjs.getDocument(src).promise
        if (cancelled) return
        container.innerHTML = ''
        const width = container.clientWidth
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          if (cancelled) return
          const scale = (width / page.getViewport({ scale: 1 }).width) * (window.devicePixelRatio || 1)
          const viewport = page.getViewport({ scale })
          const canvas = document.createElement('canvas')
          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.className = 'w-full h-auto bg-white shadow-md rounded'
          container.appendChild(canvas)
          await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
        }
        if (!cancelled) setStatus('done')
      } catch {
        if (!cancelled) setStatus('error')
      }
    })()
    return () => { cancelled = true }
  }, [src, valid])

  return (
    <main className="pt-28 pb-16 min-h-screen" style={{ backgroundColor: 'var(--th-bg)' }}>
      <div className="max-w-3xl mx-auto px-4">
        {!valid && (
          <p className="text-center py-20" style={{ color: 'var(--th-text-muted)' }}>{t('common.not_found', { defaultValue: 'İçerik Bulunamadı' })}</p>
        )}
        {valid && status === 'loading' && (
          <div className="flex justify-center py-20" role="status">
            <div className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: 'var(--th-polgun-blue)', borderTopColor: 'transparent' }} />
          </div>
        )}
        {valid && status === 'error' && (
          <p className="text-center py-20">
            <a href={src} className="font-bold hover:underline" style={{ color: 'var(--th-polgun-blue)' }}>{t('common.view', { defaultValue: 'İncele' })} (PDF)</a>
          </p>
        )}
        <div ref={containerRef} className="flex flex-col gap-4" />
      </div>
    </main>
  )
}
