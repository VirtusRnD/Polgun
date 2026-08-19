import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BLOG_DATA } from '../constants/blogData'

export default function KnowledgeCenterDetailPage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeFaq, setActiveFaq] = useState(null)

  const blog = BLOG_DATA.find((b) => b.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // SEO updates
  useEffect(() => {
    if (blog) {
      document.title = blog.seoTitle
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', blog.metaDesc)
      }
    }
  }, [blog])

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>
            {t('common.not_found', { defaultValue: 'İçerik Bulunamadı' })}
          </h1>
          <p style={{ color: 'var(--th-text-muted)' }}>
            Aradığınız makale veya içerik Bilgi Merkezi'mizde mevcut değil.
          </p>
          <Link
            to="/bilgi-merkezi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white transition-all hover:bg-opacity-90"
            style={{ backgroundColor: 'var(--th-primary)' }}
          >
            Bilgi Merkezi'ne Dön
          </Link>
        </div>
      </div>
    )
  }

  // Match internal links to other actual BLOG_DATA items
  const matchedRelated = blog.internalLinks
    .map((linkText) => {
      return BLOG_DATA.find(
        (b) =>
          b.title.toLowerCase().includes(linkText.toLowerCase()) ||
          linkText.toLowerCase().includes(b.title.toLowerCase())
      )
    })
    .filter(Boolean)

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="py-20 border-b" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold mb-6" style={{ color: 'var(--th-text-muted)' }}>
            <Link to="/bilgi-merkezi" className="hover:text-[var(--th-primary)] transition-colors">
              {t('nav.knowledge_center', { defaultValue: 'Bilgi Merkezi' })}
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--th-text)' }}>{blog.title}</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            {blog.focusKeyword && (
              <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                {blog.focusKeyword}
              </span>
            )}
            {/* H1 Heading */}
            <h1 className="text-4xl lg:text-5xl font-black leading-tight" style={{ color: 'var(--th-text)' }}>
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Content Layout ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left/Main Column: Content (H2 & H3 structures) */}
            <article className="lg:col-span-8 space-y-12">
              
              {/* Introduction paragraphs */}
              {blog.intro && blog.intro.length > 0 && (
                <div className="text-lg font-medium leading-relaxed space-y-4" style={{ color: 'var(--th-text-muted)' }}>
                  {blog.intro.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Document Body Sections (Rendered as H2 with H3 list details) */}
              <div className="space-y-10">
                {blog.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    {/* H2 Heading */}
                    <h2 className="text-2xl font-black pt-4 border-t" style={{ color: 'var(--th-text)', borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)' }}>
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--th-text-muted)' }}>
                      {section.paragraphs.map((p, pIdx) => {
                        // Check if paragraph is list item
                        if (p.startsWith('•') || p.startsWith('-')) {
                          return (
                            <ul key={pIdx} className="list-disc pl-5 space-y-1 my-2">
                              {p.split('•').map((item, itemIdx) => {
                                const trimmed = item.strip ? item.strip() : item.trim();
                                if (!trimmed) return null;
                                return <li key={itemIdx}>{trimmed}</li>;
                              })}
                            </ul>
                          );
                        }
                        return <p key={pIdx}>{p}</p>;
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sık Sorulan Sorular (FAQs) */}
              {blog.faqs && blog.faqs.length > 0 && (
                <div className="pt-12 border-t" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 15%, transparent)' }}>
                  <h2 className="text-2xl font-black mb-8" style={{ color: 'var(--th-text)' }}>
                    {t('knowledgeCenter.faqs_title', { defaultValue: 'Sık Sorulan Sorular' })}
                  </h2>
                  <div className="space-y-4">
                    {blog.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border transition-all"
                        style={{
                          backgroundColor: 'var(--th-bg)',
                          borderColor: activeFaq === idx ? 'var(--th-primary)' : 'color-mix(in srgb, var(--th-border) 10%, transparent)'
                        }}
                      >
                        <button
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm"
                          style={{ color: 'var(--th-text)' }}
                        >
                          <span>{faq.question}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeFaq === idx && (
                          <div className="px-6 pb-5 text-xs leading-relaxed" style={{ color: 'var(--th-text-muted)' }}>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-[160px] space-y-8">
              {/* Cover Image Box */}
              <div
                className="rounded-3xl overflow-hidden border p-3"
                style={{
                  backgroundColor: 'var(--th-bg)',
                  borderColor: 'color-mix(in srgb, var(--th-border) 8%, transparent)'
                }}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-50">
                  <img
                    src={blog.image}
                    alt={blog.altText}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* İlgili Yazılar (Related/Internal Links) */}
              {matchedRelated.length > 0 && (
                <div
                  className="rounded-3xl p-6 border space-y-6"
                  style={{
                    backgroundColor: 'var(--th-bg)',
                    borderColor: 'color-mix(in srgb, var(--th-border) 8%, transparent)'
                  }}
                >
                  <h3 className="text-sm font-black uppercase tracking-wider" style={{ color: 'var(--th-text)' }}>
                    {t('knowledgeCenter.related_title', { defaultValue: 'İlgili Yazılar' })}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {matchedRelated.map((related) => (
                      <Link
                        key={related.id}
                        to={`/bilgi-merkezi/${related.slug}`}
                        className="group flex gap-4 items-center"
                      >
                        <div className="w-16 h-12 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                          <img
                            src={related.image}
                            alt={related.altText}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold leading-snug line-clamp-2 group-hover:text-[var(--th-primary)] transition-colors" style={{ color: 'var(--th-text)' }}>
                            {related.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>

          </div>
        </div>
      </section>
    </main>
  )
}
