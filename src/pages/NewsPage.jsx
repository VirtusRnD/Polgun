import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import NewsletterCover from '../components/NewsletterCover'
import FlipbookModal from '../components/FlipbookModal'

// Static Fairs Stand Images
import iaapaBarcelona2025 from '../assets/fairs/iaapa-barcelona-2025.jpg'
import iaapaOrlando2025 from '../assets/fairs/iaapa-orlando-2025.jpg'
import iaapaOrlando2024 from '../assets/fairs/iaapa-orlando-2024.jpeg'
import dealDubai2026 from '../assets/fairs/deal-dubai-2026.jpeg'
import tashkentUzbekistan2026 from '../assets/fairs/tashkent-uzbekistan-2026.jpeg'
import piscinaWellnessBarcelona2025 from '../assets/fairs/piscina-wellness-barcelona-2025.jpg'

// Static News & Events Images
import gunesBakimEvi from '../assets/news/gunes-bakim-evi.jpg'
import aileSosyalHizmetler from '../assets/news/aile-ve-sosyal-hizmetler.jpeg'
import mskuKariyerFuari from '../assets/news/msku-kariyer-fuari.jpg'
import iftar1 from '../assets/news/iftar-2026-1.png'
import iftar2 from '../assets/news/iftar-2026-2.png'
import iftar3 from '../assets/news/iftar-2026-3.png'
import iftar4 from '../assets/news/iftar-2026-4.png'
import iftar5 from '../assets/news/iftar-2026-5.png'

// Static Newsletter Data (PDFs served secure-fetch from /public/newsletter)
const BULLETINS_DATA = [
  { id: 6, file: '/newsletter/newsletter-6.pdf', cover: '/newsletter/covers/cover-6.jpg', year: 2026, monthKey: 'months.july', issue: 6 },
  { id: 5, file: '/newsletter/newsletter-5.pdf', cover: '/newsletter/covers/cover-5.jpg', year: 2026, monthKey: 'months.june', issue: 5 },
  { id: 4, file: '/newsletter/newsletter-4.pdf', cover: '/newsletter/covers/cover-4.jpg', year: 2026, monthKey: 'months.may', issue: 4 },
  { id: 3, file: '/newsletter/newsletter-3.pdf', cover: '/newsletter/covers/cover-3.jpg', year: 2026, monthKey: 'months.april', issue: 3 },
  { id: 2, file: '/newsletter/newsletter-2.pdf', cover: '/newsletter/covers/cover-2.jpg', year: 2026, monthKey: 'months.march', issue: 2 },
  { id: 1, file: '/newsletter/newsletter-1.pdf', cover: '/newsletter/covers/cover-1.jpg', year: 2026, monthKey: 'months.february', issue: 1 },
]

// Static Fairs Stand Data Array
const FAIRS_DATA = [
  { id: 1, img: dealDubai2026, key: 'deal_dubai_2026', title: 'Deal Dubai 2026' },
  { id: 2, img: tashkentUzbekistan2026, key: 'tashkent_2026', title: 'Tashkent Uzbekistan 2026' },
  { id: 3, img: piscinaWellnessBarcelona2025, key: 'piscina_barcelona_2025', title: 'Piscina & Wellness Barcelona 2025' },
  { id: 4, img: iaapaOrlando2025, key: 'iaapa_orlando_2025', title: 'IAAPA Expo Orlando 2025' },
  { id: 5, img: iaapaBarcelona2025, key: 'iaapa_barcelona_2025', title: 'IAAPA Expo Barcelona 2025' },
  { id: 6, img: iaapaOrlando2024, key: 'iaapa_orlando_2024', title: 'IAAPA Expo Orlando 2024' },
]

// Static News & Events Data Array
const NEWS_DATA = [
  {
    id: 'msku_kariyer_fuari',
    tagId: 'event',
    date: '2026',
    img: mskuKariyerFuari,
    images: [mskuKariyerFuari]
  },
  {
    id: 'iftar_programi',
    tagId: 'event',
    date: '14 Mart 2026',
    img: iftar1,
    images: [iftar1, iftar2, iftar3, iftar4, iftar5]
  },
  {
    id: 'gunes_bakim_evi',
    tagId: 'social',
    date: '2026',
    img: gunesBakimEvi,
    images: [gunesBakimEvi]
  },
  {
    id: 'aile_sosyal_hizmetler',
    tagId: 'social',
    date: '2026',
    img: aileSosyalHizmetler,
    images: [aileSosyalHizmetler]
  }
]

export default function NewsPage() {
  const { t, i18n } = useTranslation()
  const [searchParams] = useSearchParams()
  const tabParam = searchParams.get('tab')

  // Tab State: 'articles' (News & Events) | 'fairs' (Fairs) | 'bulletins' (E-Newsletters)
  const [activeTab, setActiveTab] = useState(
    tabParam === 'bulletin' ? 'bulletins' : (tabParam === 'fairs' ? 'fairs' : 'articles')
  )
  const [selectedBulletin, setSelectedBulletin] = useState(null)

  // Article Lightbox States
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  // Sync tab active selection if query param changes dynamically
  useEffect(() => {
    if (tabParam === 'bulletin') {
      setActiveTab('bulletins')
    } else if (tabParam === 'fairs') {
      setActiveTab('fairs')
    } else {
      setActiveTab('articles')
    }
  }, [tabParam])

  // Scroll to top on mount / tab change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  // Open article viewer
  const openArticle = (article) => {
    setGalleryIndex(0)
    setSelectedArticle(article)
  }

  // Gallery Navigation inside Lightbox
  const nextGalleryImg = () => {
    if (!selectedArticle) return
    setGalleryIndex((prev) => (prev + 1) % selectedArticle.images.length)
  }

  const prevGalleryImg = () => {
    if (!selectedArticle) return
    setGalleryIndex((prev) => (prev - 1 + selectedArticle.images.length) % selectedArticle.images.length)
  }

  // Keyboard support for Gallery Lightbox
  useEffect(() => {
    const handleGalleryKeys = (e) => {
      if (!selectedArticle) return
      if (e.key === 'ArrowRight') nextGalleryImg()
      if (e.key === 'ArrowLeft') prevGalleryImg()
      if (e.key === 'Escape') setSelectedArticle(null)
    }
    window.addEventListener('keydown', handleGalleryKeys)
    return () => window.removeEventListener('keydown', handleGalleryKeys)
  }, [selectedArticle])

  // Localized Tag helper (event | social)
  const getLocalizedTag = (tagId) => {
    const tags = {
      event: {
        tr: 'Etkinlik',
        en: 'Event',
        es: 'Evento',
        ru: 'Событие',
        ar: 'فعالية'
      },
      social: {
        tr: 'Sosyal Sorumluluk',
        en: 'Social Responsibility',
        es: 'Responsabilidad Social',
        ru: 'Социальная ответственность',
        ar: 'المسؤولية الاجتماعية'
      }
    }
    const currentLang = i18n.language || 'tr'
    return tags[tagId]?.[currentLang] || tags[tagId]?.tr
  }

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero Banner ── */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {activeTab === 'bulletins'
                  ? t('news.tabs.bulletins')
                  : (activeTab === 'fairs' ? t('news.tabs.fairs') : t('news.title'))
                }
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                {activeTab === 'bulletins'
                  ? t('news.bulletins_title', { defaultValue: 'Kurumsal E-Bültenler' })
                  : (activeTab === 'fairs' ? t('news.fairs_title', { defaultValue: 'Katıldığımız Fuarlar' }) : t('news.title'))
                }
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('news.desc', { defaultValue: 'Polgün ile ilgili en son haberler, sektörel gelişmeler, bültenler ve etkinlikler.' })}
            </p>
          </div>
        </div>
      </section>

      {/* ── Tabs & Archive Grid Content ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Modern Category Tab Switcher */}
          <div className="flex justify-center border-b mb-16" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)' }}>
            <div className="flex gap-8 md:gap-12 overflow-x-auto py-1">
              <button
                onClick={() => setActiveTab('articles')}
                className={`pb-4 text-xs font-bold tracking-[0.15em] uppercase transition-all whitespace-nowrap relative ${activeTab === 'articles' ? 'text-[var(--th-polgun-blue)]' : 'text-neutral-400 dark:text-neutral-500 hover:text-[var(--th-text)]'}`}
              >
                {t('news.tabs.articles')}
                {activeTab === 'articles' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--th-polgun-blue)] rounded-full animate-fade-in" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('fairs')}
                className={`pb-4 text-xs font-bold tracking-[0.15em] uppercase transition-all whitespace-nowrap relative ${activeTab === 'fairs' ? 'text-[var(--th-polgun-blue)]' : 'text-neutral-400 dark:text-neutral-500 hover:text-[var(--th-text)]'}`}
              >
                {t('news.tabs.fairs')}
                {activeTab === 'fairs' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--th-polgun-blue)] rounded-full animate-fade-in" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('bulletins')}
                className={`pb-4 text-xs font-bold tracking-[0.15em] uppercase transition-all whitespace-nowrap relative ${activeTab === 'bulletins' ? 'text-[var(--th-polgun-blue)]' : 'text-neutral-400 dark:text-neutral-500 hover:text-[var(--th-text)]'}`}
              >
                {t('news.tabs.bulletins')}
                {activeTab === 'bulletins' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--th-polgun-blue)] rounded-full animate-fade-in" />
                )}
              </button>
            </div>
          </div>

          {/* TAB 1: Local News & Events List */}
          {activeTab === 'articles' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {NEWS_DATA.map((item) => (
                <article
                  key={item.id}
                  onClick={() => openArticle(item)}
                  className="rounded-2xl overflow-hidden group flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--th-bg)',
                    border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Image wrapper */}
                  <div className="overflow-hidden aspect-[16/10]">
                    <img
                      src={item.img}
                      alt={t(`news.articles.${item.id}.title`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)',
                          color: 'var(--th-polgun-blue)',
                        }}
                      >
                        {getLocalizedTag(item.tagId)}
                      </span>
                      <span className="text-xs font-semibold" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                        {item.date}
                      </span>
                    </div>

                    <h3 className="font-black text-lg mb-3 leading-snug group-hover:text-[var(--th-polgun-blue)] transition-colors" style={{ color: 'var(--th-text)' }}>
                      {t(`news.articles.${item.id}.title`)}
                    </h3>

                    <p className="text-sm leading-relaxed flex-1 line-clamp-3" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                      {t(`news.articles.${item.id}.desc`)}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--th-polgun-blue)]">
                      {t('common.read_more')} ➔
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 2: Fuar Katılımları (Fairs Archive) */}
          {activeTab === 'fairs' && (
            <div className="space-y-12 animate-fade-in">

              {/* Context Header */}
              <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--th-text)' }}>
                  {t('news.fairs_title', { defaultValue: 'Katıldığımız Fuarlar' })}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--th-text-muted)' }}>
                  {t('news.fairs_desc', { defaultValue: 'Sektörümüzün küresel ölçekteki en önemli buluşma noktalarında Polgün olarak yerimizi alıyoruz.' })}
                </p>
              </div>

              {/* Grid of Fair Stand Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {FAIRS_DATA.map((fair) => (
                  <div
                    key={fair.id}
                    className="group rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--th-bg)',
                      border: '1px solid color-mix(in srgb, var(--th-border) 10%, transparent)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    }}
                  >
                    {/* Stand Image Container */}
                    <div className="overflow-hidden aspect-[4/3] relative">
                      <img
                        src={fair.img}
                        alt={`${t(`news.fairs.${fair.key}`, { defaultValue: fair.title })} stand`} // SEO alt tag format requirement
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Centered Caption matching corporate style */}
                    <div className="p-6 text-center">
                      <h4 className="font-black text-base leading-snug tracking-wide" style={{ color: 'var(--th-text)' }}>
                        {t(`news.fairs.${fair.key}`, { defaultValue: fair.title })}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Secure E-Newsletters Magazine Archive */}
          {activeTab === 'bulletins' && (
            <div className="space-y-12 animate-fade-in">

              {/* Context Header */}
              <div className="text-center max-w-xl mx-auto mb-16">
                <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--th-text)' }}>
                  {t('news.bulletins_subtitle', { defaultValue: 'Aylık Kurumsal Bülten Arşivimiz' })}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--th-text-muted)' }}>
                  {t('news.bulletins_desc', { defaultValue: 'Geçmişten günümüze şirket içi gelişmeleri ve yayınlarımızı derlediğimiz aylık e-bültenlerimiz.' })}
                </p>
              </div>

              {/* Grid Layout of Magazine Covers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {BULLETINS_DATA.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedBulletin(item)}
                    className="group cursor-pointer rounded-2xl overflow-hidden relative flex flex-col hover:shadow-2xl transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--th-bg)',
                      border: '1px solid color-mix(in srgb, var(--th-border) 10%, transparent)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    }}
                  >
                    {/* Rendered PDF Cover Page */}
                    <div className="relative overflow-hidden aspect-[1/1.41]">
                      <NewsletterCover pdfUrl={item.file} coverImg={item.cover} alt={t('news.issue_format', { number: item.issue })} />

                      {/* Dark Overlay Hover Actions */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-20">
                        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-white/20 text-white self-start backdrop-blur-xs">
                          PDF · SECURE
                        </span>

                        <div className="w-12 h-12 rounded-full bg-white text-[var(--th-polgun-blue)] flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 self-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                          </svg>
                        </div>

                        <span className="text-white text-xs font-bold uppercase tracking-wider text-center">
                          {t('news.open_flipbook', { defaultValue: 'Bülteni Oku' })}
                        </span>
                      </div>
                    </div>

                    {/* Meta Info Displayed Under Cover */}
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <h4 className="font-black text-base leading-snug" style={{ color: 'var(--th-text)' }}>
                          {t('news.issue_format', { number: item.issue })}
                        </h4>
                        <span className="text-[11px] font-bold mt-1 block text-neutral-400 uppercase tracking-wide">
                          {t(`news.${item.monthKey}`)} {item.year}
                        </span>
                      </div>
                      <div className="text-[var(--th-polgun-blue)] opacity-60 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Flipbook Secure Reader Overlay Modal ── */}
      {selectedBulletin && (
        <FlipbookModal
          pdfUrl={selectedBulletin.file}
          title={`${t('news.bulletins_title', { defaultValue: 'Kurumsal E-Bültenler' })} - ${t('news.issue_format', { number: selectedBulletin.issue })} (${t(`news.${selectedBulletin.monthKey}`)} ${selectedBulletin.year})`}
          onClose={() => setSelectedBulletin(null)}
        />
      )}

      {/* ── Local News & Events Lightbox Reader Overlay Modal ── */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 overflow-y-auto select-none"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          {/* Strict CSS overrides to prevent printing/screenshot styling */}
          <style dangerouslySetInnerHTML={{
            __html: `
            @media print {
              body { display: none !important; }
              html { display: none !important; }
            }
          ` }} />

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative max-h-[90vh]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 text-white transition-colors border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: Image / Slideshow Section */}
            <div className="w-full md:w-1/2 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-0">
              <img
                src={selectedArticle.images[galleryIndex]}
                alt={t(`news.articles.${selectedArticle.id}.title`)}
                className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
              />

              {/* Gallery Controls (if multiple images) */}
              {selectedArticle.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevGalleryImg(); }}
                    className="absolute left-3 w-10 h-10 rounded-full flex items-center justify-center bg-black/60 text-white border border-white/10 hover:bg-neutral-800 hover:scale-105 transition-all shadow-md z-30"
                  >
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextGalleryImg(); }}
                    className="absolute right-3 w-10 h-10 rounded-full flex items-center justify-center bg-black/60 text-white border border-white/10 hover:bg-neutral-800 hover:scale-105 transition-all shadow-md z-30"
                  >
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 flex gap-1.5 justify-center left-0 right-0">
                    {selectedArticle.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGalleryIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === galleryIndex ? 'w-6 bg-[var(--th-polgun-blue)]' : 'bg-white/40'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right: Text Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between overflow-y-auto" style={{ maxHeight: '90vh' }}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/10 text-white/80">
                    {getLocalizedTag(selectedArticle.tagId)}
                  </span>
                  <span className="text-xs font-semibold text-neutral-400">
                    {selectedArticle.date}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white mb-4 leading-snug">
                  {t(`news.articles.${selectedArticle.id}.title`)}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed whitespace-pre-line" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
                  {t(`news.articles.${selectedArticle.id}.desc`)}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </main>
  )
}
