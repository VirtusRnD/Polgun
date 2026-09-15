import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getLocalizedBlog, getLocalizedBlogs, getLocalizedText } from '../constants/blogData'

export default function KnowledgeCenterDetailPage() {
  const { t, i18n } = useTranslation()
  const { slug } = useParams()
  const [activeFaq, setActiveFaq] = useState(null)
  const [rawBlog, setRawBlog] = useState(null)
  const [allBlogs, setAllBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    async function loadData() {
      try {
        const [blogRes, allRes] = await Promise.all([
          fetch(`/api/blog/slug/${encodeURIComponent(slug)}`),
          fetch('/api/blog/visible'),
        ])

        let fetchedBlog = null
        let fetchedAll = []

        if (blogRes.ok) {
          const ct = blogRes.headers.get('content-type') ?? ''
          if (ct.includes('json')) {
            const data = await blogRes.json()
            if (data && !data.error && data.id) {
              fetchedBlog = data
            }
          }
        }

        if (allRes.ok) {
          const ct = allRes.headers.get('content-type') ?? ''
          if (ct.includes('json')) {
            const data = await allRes.json()
            if (Array.isArray(data)) {
              fetchedAll = data
              if (!fetchedBlog) {
                fetchedBlog = data.find((b) => b.slug === slug || String(b.id) === slug) || null
              }
            }
          }
        }

        if (!cancelled) {
          setRawBlog(fetchedBlog)
          setAllBlogs(fetchedAll)
        }
      } catch (err) {
        console.error('Failed to load blog from CMS:', err)
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadData()
    return () => { cancelled = true }
  }, [slug])

  const blog = getLocalizedBlog(rawBlog, i18n.language)
  const allLocalizedBlogs = getLocalizedBlogs(allBlogs, i18n.language)

  // SEO updates
  useEffect(() => {
    if (blog) {
      document.title = getLocalizedText(blog.seoTitle || blog.title, i18n.language)
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', getLocalizedText(blog.metaDesc || blog.description, i18n.language))
      }
    }
  }, [blog, i18n.language])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-[var(--th-primary)] border-t-transparent animate-spin" />
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="text-center space-y-6 max-w-md px-6">
          <h1 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>
            {t('common.not_found', { defaultValue: 'İçerik Bulunamadı' })}
          </h1>
          <p style={{ color: 'var(--th-text-muted)' }}>
            {t('knowledgeCenter.not_found_desc', { defaultValue: "Aradığınız makale veya içerik Bilgi Merkezi'mizde mevcut değil." })}
          </p>
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs text-left leading-relaxed">
            💡 <strong>İpucu:</strong> Makaleyi Admin Paneli'nde yeni oluşturduysanız, <strong>"Yayın Durumu: Herkese Açık (Yayında)"</strong> seçeneğinin açık (is_visible = true) olduğundan emin olun.
          </div>
          <Link
            to="/knowledge-center"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white transition-all hover:bg-opacity-90"
            style={{ backgroundColor: 'var(--th-primary)' }}
          >
            {t('knowledgeCenter.back_to_list', { defaultValue: "Bilgi Merkezi'ne Dön" })}
          </Link>
        </div>
      </div>
    )
  }

  // Resolve internal links (supports both blog matches and custom link objects)
  const internalLinkItems = (Array.isArray(blog?.internalLinks) ? blog.internalLinks : [])
    .map((item, idx) => {
      if (!item) return null;

      let rawTitle = typeof item === 'string' ? item : (item.title || item.label || item.text || item.name || '');
      let rawUrl = typeof item === 'object' ? (item.url || item.link || item.href || item.path || item.slug || '') : '';

      const titleStr = getLocalizedText(rawTitle, i18n.language);
      const urlStr = getLocalizedText(rawUrl, i18n.language);

      // Check if title or url matches an existing blog post
      const matchedBlog = allLocalizedBlogs.find(
        (b) =>
          b &&
          b.id !== blog.id &&
          ((titleStr && getLocalizedText(b.title, i18n.language).toLowerCase().includes(titleStr.toLowerCase())) ||
           (titleStr && titleStr.toLowerCase().includes(getLocalizedText(b.title, i18n.language).toLowerCase())) ||
           (b.slug && urlStr && (b.slug === urlStr || urlStr.endsWith(`/${b.slug}`))))
      );

      if (matchedBlog) {
        return {
          id: matchedBlog.id || idx,
          title: getLocalizedText(matchedBlog.title, i18n.language),
          url: `/knowledge-center/${matchedBlog.slug}`,
          image: matchedBlog.image,
          altText: getLocalizedText(matchedBlog.altText, i18n.language),
          isBlog: true,
        };
      }

      if (titleStr || urlStr) {
        let finalUrl = urlStr || '#';
        if (urlStr && !urlStr.startsWith('http') && !urlStr.startsWith('/')) {
          finalUrl = `/knowledge-center/${urlStr}`;
        }
        return {
          id: idx,
          title: titleStr || urlStr,
          url: finalUrl,
          image: blog.image,
          altText: titleStr,
          isBlog: false,
        };
      }

      return null;
    })
    .filter(Boolean);

  // Sidebar blogs: matched blog items from internal links or fallback to recent blogs
  const matchedBlogItems = internalLinkItems.filter((i) => i.isBlog);
  const displaySidebarBlogs = matchedBlogItems.length > 0
    ? matchedBlogItems
    : allLocalizedBlogs.filter((b) => b && b.id !== blog?.id).slice(0, 4).map((b) => ({
        id: b.id,
        title: getLocalizedText(b.title, i18n.language),
        url: `/knowledge-center/${b.slug}`,
        image: b.image,
        altText: getLocalizedText(b.altText, i18n.language),
      }));

  // Filter valid FAQs containing at least a non-empty question
  const validFaqs = (Array.isArray(blog?.faqs) ? blog.faqs : []).filter((faq) => {
    if (!faq) return false;
    const q = getLocalizedText(typeof faq === 'string' ? faq : (faq.question || faq.q), i18n.language);
    return Boolean(q && q.trim());
  });

  const titleText = getLocalizedText(blog.title, i18n.language)
  const focusKeywordText = getLocalizedText(blog.focusKeyword, i18n.language)

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold mb-4 text-white/70">
            <Link to="/knowledge-center" className="hover:text-white transition-colors">
              {t('nav.knowledge_center', { defaultValue: 'Bilgi Merkezi' })}
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{titleText}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            {focusKeywordText && (
              <p
                className="text-lg lg:text-3xl font-black block text-white tracking-normal mb-2"
                style={{
                  WebkitTextStroke: '0.8px #FFFFFF',
                  paintOrder: 'stroke fill',
                }}
              >
                {focusKeywordText}
              </p>
            )}
            {/* H1 Heading */}
            <h1 className="text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              <span
                className="block"
                style={{
                  color: 'var(--th-primary)',
                  WebkitTextStroke: '15.5px var(--th-polgun-antrasit)',
                  paintOrder: 'stroke fill',
                }}
              >
                {titleText}
              </span>
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
              {Array.isArray(blog.intro) && blog.intro.length > 0 && (
                <div className="text-lg font-medium leading-relaxed space-y-4" style={{ color: 'var(--th-text-muted)' }}>
                  {blog.intro.map((p, idx) => (
                    <p key={idx}>{getLocalizedText(p, i18n.language)}</p>
                  ))}
                </div>
              )}

              {/* Document Body Sections (Rendered as H2 with H3 list details) */}
              {Array.isArray(blog.sections) && blog.sections.length > 0 && (
                <div className="space-y-10">
                  {blog.sections.map((section, sIdx) => {
                    if (!section) return null;

                    if (typeof section === 'string') {
                      const text = getLocalizedText(section, i18n.language);
                      return (
                        <div key={sIdx} className="space-y-4">
                          <div className="text-sm leading-relaxed" style={{ color: 'var(--th-text-muted)' }}>
                            <p>{text}</p>
                          </div>
                        </div>
                      );
                    }

                    const heading = getLocalizedText(section.heading || section.title || section.name, i18n.language);
                    const rawP = section.paragraphs ?? section.content ?? section.text ?? [];
                    const paragraphs = Array.isArray(rawP)
                      ? rawP
                      : (typeof rawP === 'string' ? [rawP] : []);

                    return (
                      <div key={sIdx} className="space-y-4">
                        {heading && (
                          <h2 className="text-2xl font-black pt-4 border-t" style={{ color: 'var(--th-text)', borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)' }}>
                            {heading}
                          </h2>
                        )}
                        <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--th-text-muted)' }}>
                          {paragraphs.map((p, pIdx) => {
                            const pStr = getLocalizedText(p, i18n.language);
                            if (!pStr) return null;
                            // Check if paragraph is list item
                            if (pStr.startsWith('•') || pStr.startsWith('-')) {
                              return (
                                <ul key={pIdx} className="list-disc pl-5 space-y-1 my-2">
                                  {pStr.split(/•|-/).map((item, itemIdx) => {
                                    const trimmed = item.trim();
                                    if (!trimmed) return null;
                                    return <li key={itemIdx}>{trimmed}</li>;
                                  })}
                                </ul>
                              );
                            }
                            return <p key={pIdx}>{pStr}</p>;
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Sık Sorulan Sorular (FAQs) */}
              {validFaqs.length > 0 && (
                <div className="pt-12 border-t" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 15%, transparent)' }}>
                  <h2 className="text-2xl font-black mb-8" style={{ color: 'var(--th-text)' }}>
                    {t('knowledgeCenter.faqs_title', { defaultValue: 'Sık Sorulan Sorular' })}
                  </h2>
                  <div className="space-y-4">
                    {validFaqs.map((faq, idx) => {
                      const q = getLocalizedText(typeof faq === 'string' ? faq : (faq.question || faq.q), i18n.language);
                      const a = getLocalizedText(typeof faq === 'string' ? '' : (faq.answer || faq.a), i18n.language);
                      return (
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
                            <span>{q}</span>
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {activeFaq === idx && a && (
                            <div className="px-6 pb-5 text-xs leading-relaxed" style={{ color: 'var(--th-text-muted)' }}>
                              {a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-[160px] space-y-8">
              {/* Cover Image Box */}
              {blog.image && (
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
                      alt={getLocalizedText(blog.altText, i18n.language)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* İlgili Yazılar (Sidebar) */}
              {displaySidebarBlogs.length > 0 && (
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
                    {displaySidebarBlogs.map((related) => (
                      <Link
                        key={related.id}
                        to={related.url}
                        className="group flex gap-4 items-center"
                      >
                        <div className="w-16 h-12 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                          <img
                            src={related.image}
                            alt={related.altText || related.title}
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

