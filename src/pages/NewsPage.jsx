import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// CMS API — uses relative paths (frontend and backend are on the same server)
const API_URL = ''

/**
 * Maps a CMS journal entry to the card shape used by the UI.
 * Resolves translation based on active language or falls back.
 */
function mapCmsEntry(item, langCode) {
  const tr =
    item.translations?.find((t) => t.language === langCode) ||
    item.translations?.find((t) => t.language === 'tr') ||
    item.translations?.find((t) => t.language === 'en') ||
    item.translations?.[0] ||
    {}
  return {
    date: item.date ? new Date(item.date).getFullYear().toString() : '',
    tag: item.video_url ? 'Video' : 'Haber',
    title: tr.title || 'Başlıksız',
    desc: tr.content || '',
    img: null, // CMS entries carry no image; a branded placeholder is rendered instead
    video_url: item.video_url || null,
  }
}

export default function NewsPage({ setActivePage }) {
  const { t, i18n } = useTranslation()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    let cancelled = false
    async function loadJournal() {
      try {
        const res = await fetch(`${API_URL}/api/journal/list?lang=${i18n.language}`)
        if (!res.ok) throw new Error('API error')
        const data = await res.json()
        if (!cancelled && Array.isArray(data)) {
          setNews(data.map(item => mapCmsEntry(item, i18n.language)))
        }
      } catch {
        // Keep the list empty when the CMS is unavailable.
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    loadJournal()
    return () => { cancelled = true }
  }, [i18n.language])

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('news.title')}</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
            {t('news.title')}
          </h1>
        </div>
      </section>

      {/* ── News Grid ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.length === 0 && !loading && (
              <p className="md:col-span-2 lg:col-span-3 text-center text-sm" style={{ color: 'var(--th-text-muted)' }}>
                {t('common.no_content')}
              </p>
            )}
            {news.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl overflow-hidden group flex flex-col"
                style={{
                  backgroundColor: 'var(--th-bg)',
                  border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                <div className="overflow-hidden aspect-[16/10]">
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, var(--th-primary) 0%, #22ABE6 100%)',
                      }}
                    >
                      <span className="text-white/25 text-5xl font-black tracking-widest select-none">POLGÜN</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)',
                        color: 'var(--th-polgun-blue)',
                      }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-black text-lg mb-3 leading-snug" style={{ color: 'var(--th-text)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                    {item.desc}
                  </p>

                  {/* Video link for CMS entries that carry a video_url */}
                  {item.video_url && (
                    <a
                      href={item.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold"
                      style={{ color: 'var(--th-polgun-blue, #22ABE6)' }}
                    >
                      ► {t('common.read_more')}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
