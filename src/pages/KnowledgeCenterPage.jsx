import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BLOG_DATA } from '../constants/blogData'

export default function KnowledgeCenterPage() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('nav.about')} · {t('nav.knowledge_center', { defaultValue: 'Bilgi Merkezi' })}
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                {t('knowledgeCenter.title', { defaultValue: 'Bilgi Merkezi' })}
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('knowledgeCenter.desc', {
                defaultValue: "Polgün'ün sektörel tecrübesini, teknik makalelerini, standart analizlerini ve inovasyon çözümlerini paylaştığı bilgi havuzu."
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ── Grid of Blog Cards ── */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_DATA.map((blog) => (
              <article
                key={blog.id}
                className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-black/5"
                style={{
                  backgroundColor: 'var(--th-bg)',
                  border: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)'
                }}
              >
                {/* Kapak Görseli */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <img
                    src={blog.image}
                    alt={blog.altText}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* İçerik */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Odak Kelime / Kategori */}
                    {blog.focusKeyword && (
                      <span className="inline-block text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                        {blog.focusKeyword}
                      </span>
                    )}

                    {/* Blog Başlığı */}
                    <h2 className="text-xl font-black leading-snug group-hover:text-[var(--th-primary)] transition-colors duration-300" style={{ color: 'var(--th-text)' }}>
                      {blog.title}
                    </h2>

                    {/* Kısa Açıklama */}
                    <p className="text-xs leading-relaxed line-clamp-3" style={{ color: 'var(--th-text-muted)' }}>
                      {blog.description || (blog.sections[0]?.paragraphs[0] || '')}
                    </p>
                  </div>

                  {/* Devamını Oku */}
                  <div className="pt-6 border-t mt-6" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)' }}>
                    <Link
                      to={`/bilgi-merkezi/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold transition-colors"
                      style={{ color: 'var(--th-primary)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--th-polgun-blue)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--th-primary)'}
                    >
                      {t('knowledgeCenter.read_more', { defaultValue: 'Devamını Oku' })}
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
