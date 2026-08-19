// ============================================================
// NAVBAR — WhiteWater West mimarisiyle birebir 4 mega-menü
// Hizmetlerimiz / Projelerimiz / Ürünlerimiz / Hakkımızda /Ar-Ge
// ============================================================
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import polgunLogo from '../assets/logoPolgun.png';

// ── Menü Yapısı (WWW ile birebir karşılıklı) ───────────────
const LANGUAGES = [
  { code: 'tr', name: 'Türkçe', flag: '/src/assets/flags/tr.svg' },
  { code: 'en', name: 'English', flag: '/src/assets/flags/en.svg' },
  { code: 'es', name: 'Español', flag: '/src/assets/flags/es.svg' },
  { code: 'ar', name: 'العربية', flag: '/src/assets/flags/ar.svg' },
  { code: 'ru', name: 'Русский', flag: '/src/assets/flags/ru.svg' },
];

export default function Navbar({ activePage, setActivePage, colorPalette, location }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)   // mega açık menü id'si
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  // ── Dil Seçimi State'leri ──
  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]
  const [langOpen, setLangOpen] = useState(false)

  const NAV_ITEMS = [
    {
      id: 'services',
      label: t('nav.services'),
      page: 'services',
      mega: true,
      sections: [
        {
          title: null,
          links: [
            { label: t('nav.planning'), desc: '', page: 'services', anchor: 'urun-tasarimi-ve-temalandirma', to: '/services?anchor=urun-tasarimi-ve-temalandirma  ' },
            { label: t('nav.design'), desc: '', page: 'services', anchor: 'muhendislik-ve-projelendirme', to: '/services?anchor=muhendislik-ve-projelendirme' },
            { label: t('nav.engineering'), desc: '', page: 'services', anchor: 'uretim', to: '/services?anchor=uretim' },
            { label: t('nav.installation'), desc: '', page: 'services', anchor: 'proje-yonetimi-ve-sevkiyat', to: '/services?anchor=proje-yonetimi-ve-sevkiyat' },
            { label: t('nav.maintenance'), desc: '', page: 'services', anchor: 'montaj-ve-devreye-alma', to: '/services?anchor=montaj-ve-devreye-alma' },

          ],
        },
      ],
    },
    {
      id: 'projects',
      label: t('nav.projects'),
      page: 'projects',
      mega: false,
      to: '/projects',
    },
    {
      id: 'products',
      label: t('nav.products'),
      page: 'products',
      mega: true,
      sections: [
        {
          title: t('nav.categories'),
          links: [
            { label: t('nav.slides'), desc: '', page: 'products', to: '/products' },
            { label: t('nav.splash_tower'), desc: '', page: 'splash-tower', to: '/splash-tower' },
            { label: t('nav.splash_zone'), desc: '', page: 'splash-zone', to: '/splash-zone' },
          ],
        },
      ],
    },
    {
      id: 'about',
      label: t('nav.about'),
      page: 'about',
      mega: true,
      sections: [
        {
          title: null,
          links: [
            { label: t('nav.team'), desc: '', page: 'team', to: '/team' },
            { label: t('nav.history'), desc: '', page: 'history', to: '/history' },
            { label: t('nav.awards'), desc: '', page: 'awards', to: '/awards' },
            { label: t('nav.brands', { defaultValue: 'Markalarımız' }), desc: '', page: 'about', anchor: 'markalar', to: '/about?anchor=markalar' },
            { label: t('nav.factories'), desc: '', page: 'factories', to: '/factories' },
            { label: t('nav.news'), desc: '', page: 'news', to: '/news' },
            { label: t('nav.knowledge_center', { defaultValue: 'Bilgi Merkezi' }), desc: '', page: 'knowledge-center', to: '/bilgi-merkezi' },
          ],
        },
      ],
    },
    {
      id: 'arge',
      label: t('nav.arge'),
      page: 'arge',
      mega: true,
      sections: [
        {
          title: null,
          links: [
            { label: t('nav.arge_center', { defaultValue: 'Ar-Ge Merkezi' }), desc: '', page: 'arge', to: '/arge' },
            { label: t('nav.fikri_sinai_haklar', { defaultValue: 'Fikrî & Sınai Haklar' }), desc: '', page: 'arge', anchor: 'fikri-ve-sinai-mulkiyet-haklari', to: '/arge?anchor=fikri-ve-sinai-mulkiyet-haklari' },
            { label: t('nav.utility_models', { defaultValue: 'Faydalı Modeller' }), desc: '', page: 'arge', anchor: 'faydali-modeller', to: '/arge?anchor=faydali-modeller' },
            { label: t('nav.patents', { defaultValue: 'Patentler' }), desc: '', page: 'patents', to: '/patents' },
            { label: t('nav.designs', { defaultValue: 'Endüstriyel Tasarımlar' }), desc: '', page: 'designs', to: '/designs' },
            { label: t('nav.publications', { defaultValue: 'Akademik Yayınlar' }), desc: '', page: 'publications', to: '/publications' },
          ],
        },
      ],
    },
    {
      id: 'career',
      label: t('nav.career'),
      page: 'career',
      mega: false,
      to: '/career',
    },
  ]

  const closeTimer = useRef(null)
  const langCloseTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (page, anchor = null) => {
    setActivePage(page, anchor);
    setMobileOpen(false)
    setOpenMenu(null)
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const anchor = params.get('anchor');
    if (anchor) {
      const el = document.getElementById(anchor);
      const yOffset = -100; // adjust for navbar height
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset + yOffset, behavior: 'smooth' });
    }
  }, [location.search])

  // hover ile açma — kısa gecikme ile kapanma (UX)
  const onEnter = (id) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(id)
  }
  const onLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

  // Dil menüsü için hover metodları
  const onLangEnter = () => {
    clearTimeout(langCloseTimer.current)
    setLangOpen(true)
  }
  const onLangLeave = () => {
    langCloseTimer.current = setTimeout(() => setLangOpen(false), 120)
  }

  // Navbar stil durumu
  const isHomepage = activePage === 'home'
  const isLightNavbar = isHomepage && !scrolled  // Glass effect maksimum
  const isDarkNavbar = !isLightNavbar              // Glass effect daha opak

  const glassOpacity = isLightNavbar ? 0.08 : 0.12
  const blurAmount = isLightNavbar ? '32px' : '16px'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:backdrop-blur-md`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${glassOpacity})`,
        borderBottom: `1px solid color-mix(in srgb, var(--th-polgun-blue) ${scrolled ? 15 : 20}%, transparent)`,
      }}
    >
      <nav className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14 flex items-center justify-between h-[72px]">

        {/* ══ Logo ══ */}
        <Link to="/" onClick={() => setOpenMenu(null)} className="shrink-0 flex items-center">
          {isLightNavbar ? (
            /* Glass navbar */
            <img
              src={polgunLogo}
              alt="Polgün Waterparks"
              className="h-60 object-contain"
              style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))' }}
            />
          ) : (
            /* Opaque navbar */
            <img
              src={polgunLogo}
              alt="Polgün Waterparks"
              className="h-60 object-contain"
              style={{ filter: 'drop-shadow(0 0 4px rgba(134, 134, 134, 0.5))' }}
            />
          )}
        </Link>

        {/* ══ Desktop Nav ══ */}
        <ul className="hidden lg:flex items-center h-full">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className="relative h-full flex items-center"
              onMouseEnter={() => item.mega && onEnter(item.id)}
              onMouseLeave={() => item.mega && onLeave()}
            >
              <Link
                to={item.to || `/${item.page}`}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide transition-colors`}
                style={isLightNavbar ? {
                  color: activePage === item.page ? 'var(--th-polgun-blue)' : 'var(--th-text)',
                  textShadow: '0 1px 2px rgba(255,255,255,0.5)',
                } : {
                  color: activePage === item.page ? 'var(--th-polgun-blue)' : 'var(--th-text)',
                }}
                onMouseEnter={(e) => {
                  if (isLightNavbar) e.currentTarget.style.color = 'var(--th-polgun-blue)'
                  else e.currentTarget.style.color = 'var(--th-polgun-blue)'
                }}
                onMouseLeave={(e) => {
                  if (isLightNavbar) e.currentTarget.style.color = activePage === item.page ? 'var(--th-polgun-blue)' : 'var(--th-text)'
                  else e.currentTarget.style.color = activePage === item.page ? 'var(--th-polgun-blue)' : 'var(--th-text)'
                }}
              >
                {item.label}
                {item.mega && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === item.id ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* ── Mega Menü Paneli ── */}
              {item.mega && (
                <div
                  className={`absolute top-[72px] left-1/2 -translate-x-1/2
                    shadow-2xl shadow-black/10 rounded-2xl overflow-hidden
                    transition-all duration-200 origin-top
                    ${openMenu === item.id
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  style={{
                    minWidth: item.sections?.length > 1 ? '700px' : '520px',
                    backgroundColor: 'var(--th-surface)',
                    border: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)',
                  }}
                  onMouseEnter={() => onEnter(item.id)}
                  onMouseLeave={() => onLeave()}
                >
                  {/* Üst aksent çizgisi */}
                  <div className="h-0.5" style={{ background: 'linear-gradient(to right, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 60%, transparent), transparent)' }} />

                  <div className={`p-3 ${item.sections?.length > 1 ? 'grid grid-cols-2 gap-3' : ''}`}>
                    {item.sections?.map((section, si) => (
                      <div key={si}>
                        {section.title && (
                          <p className="px-4 pt-3 pb-2 text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--th-polgun-blue)' }}>
                            {section.title}
                          </p>
                        )}
                        <div className="flex flex-col">
                          {section.links.map((link) => (
                            <Link
                              key={link.label}
                              to={link.to}
                              className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors text-left group"
                              style={{ '--hover-bg': 'var(--th-bg)' }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-bg)'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                              onClick={() => handleNav(link.page, link.anchor)}
                            >
                              {/* Aksent bullet */}
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
                                style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 30%, transparent)' }}
                              />
                              <div>
                                <span className="block text-sm font-semibold leading-snug transition-colors" style={{ color: 'var(--th-text)' }}>
                                  {link.label}
                                </span>
                                {link.desc && (
                                  <span className="block text-xs mt-0.5 leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                                    {link.desc}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Alt CTA şeridi */}
                  <div
                    className="border-t px-6 py-3.5 flex items-center justify-between"
                    style={{
                      borderColor: 'color-mix(in srgb, var(--th-border) 45%, transparent)',
                      backgroundColor: 'color-mix(in srgb, var(--th-bg) 70%, transparent)',
                    }}
                  >
                    <span className="text-xs" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 55%, transparent)' }}>
                      {item.id === 'products' && 'Tüm ürün ve mekan tiplerini keşfedin'}
                      {item.id === 'services' && 'Anahtar teslim proje süreçlerimizi inceleyin'}
                      {item.id === 'about' && "Polgün'ün 40 yıllık hikayesini keşfedin"}
                      {item.id === 'arge' && "Yenilikçi su parkı teknolojileri ve tescillerimiz"}
                    </span>
                    <Link
                      to={item.to || `/${item.page}`}
                      className="text-xs font-bold flex items-center gap-1.5 transition-colors"
                      style={{
                        color: 'var(--th-polgun-blue)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--th-primary)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--th-polgun-blue)'
                      }}
                    >
                      Tümünü Gör
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ══ Sağ: CTA ve Dil Seçimi ══ */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">

          {/* ══ Dil Seçeneği Dropdown ══ */}
          <div
            className="relative flex items-center h-full"
            onMouseEnter={onLangEnter}
            onMouseLeave={onLangLeave}
          >
            <button className="flex items-center gap-2 px-2 py-2 rounded-full transition-all duration-200 opacity-90 hover:opacity-100">
              <img
                src={currentLang.flag}
                alt={currentLang.name}
                className="w-6 h-4 rounded-sm object-cover border"
                style={{ borderColor: 'color-mix(in srgb, var(--th-border) 30%, transparent)' }}
              />
              <span
                className="text-sm font-semibold uppercase"
                style={isLightNavbar ? {
                  color: 'var(--th-text)',
                  textShadow: '0 1px 2px rgba(255,255,255,0.5)',
                } : {
                  color: 'var(--th-text)',
                }}
              >
                {currentLang.code}
              </span>
            </button>

            {/* Dil Menü Paneli */}
            <div
              className={`absolute top-[45px] right-0 shadow-lg rounded-xl overflow-hidden transition-all duration-200 origin-top
                ${langOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
              style={{
                backgroundColor: 'var(--th-surface)',
                border: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)',
                minWidth: '130px'
              }}
            >
              <div className="p-1.5 flex flex-col gap-0.5">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium w-full text-left"
                    style={{
                      color: 'var(--th-text)',
                      backgroundColor: currentLang.code === lang.code ? 'var(--th-bg)' : 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-bg)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = currentLang.code === lang.code ? 'var(--th-bg)' : 'transparent'}
                  >
                    <img src={lang.flag} alt={lang.name} className="w-5 h-3.5 rounded-sm object-cover border" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 30%, transparent)' }} />
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* ═════════════════════════════ */}

          {/* İletişim & Teklif Al */}
          <Link
            to="/contact"
            className={`text-sm font-semibold px-2 py-2 rounded-full transition-all duration-200`}
            style={isLightNavbar ? {
              color: 'var(--th-text)',
              textShadow: '0 1px 2px rgba(255,255,255,0.5)',
            } : {
              color: 'var(--th-text)',
            }}
          >
            {t('common.contact')}
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2.5 text-sm font-bold tracking-wide rounded-full hover:shadow-lg hover:-translate-y-px transition-all duration-200"
            style={isLightNavbar ? {
              backgroundColor: 'var(--th-primary)',
              color: 'var(--th-surface)',
              boxShadow: '0 4px 12px color-mix(in srgb, var(--th-primary) 30%, transparent)',
            } : {
              backgroundColor: 'var(--th-polgun-blue)',
              color: 'var(--th-surface)',
              boxShadow: '0 4px 12px color-mix(in srgb, var(--th-polgun-blue) 30%, transparent)',
            }}
            onMouseEnter={(e) => {
              if (isLightNavbar) {
                e.currentTarget.style.backgroundColor = 'var(--th-polgun-blue)'
              } else if (isDarkNavbar) {
                e.currentTarget.style.backgroundColor = 'var(--th-primary)'
                e.currentTarget.style.boxShadow = '0 6px 16px color-mix(in srgb, var(--th-polgun-blue) 38%, transparent)'
              }
            }}
            onMouseLeave={(e) => {
              if (isLightNavbar) {
                e.currentTarget.style.backgroundColor = 'var(--th-primary)'
              } else if (isDarkNavbar) {
                e.currentTarget.style.backgroundColor = 'var(--th-polgun-blue)'
                e.currentTarget.style.boxShadow = '0 4px 12px color-mix(in srgb, var(--th-primary) 30%, transparent)'
              }
            }}
          >
            {t('common.quote')}
          </Link>
        </div>

        {/* ══ Mobile Burger ══ */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 flex flex-col gap-[5px] justify-center"
          aria-label="Menü"
        >
          <span className={`block w-6 h-[2px] transition-all duration-200 ${isLightNavbar ? 'bg-[var(--th-text)]' : 'bg-[var(--th-text)]'} ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] transition-all duration-200
            ${isLightNavbar ? 'bg-[var(--th-text)]' : 'bg-[var(--th-text)]'}
            ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[2px] transition-all duration-200
            ${isLightNavbar ? 'bg-[var(--th-text)]' : 'bg-[var(--th-text)]'}
            ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* ══ Mobile Menü Paneli ══ */}
      <div
        className={`lg:hidden fixed left-0 right-0 z-40 overflow-hidden transition-all duration-300 ease-in-out
        ${mobileOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          top: '72px', // Position below the main header
          backgroundColor: 'var(--th-surface)',
        }}
      >
        <div className="px-5 py-4 flex flex-col h-full overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className="border-b last:border-0"
              style={{ borderColor: 'color-mix(in srgb, var(--th-border) 45%, transparent)' }}
            >
              {item.mega ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-sm font-bold"
                    style={{ color: 'var(--th-text)' }}
                  >
                    {item.label}
                    <svg
                      className="w-4 h-4 transition-transform duration-200"
                      style={{
                        color: 'var(--th-polgun-blue)',
                        transform: mobileExpanded === item.id ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
                      }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === item.id ? 'max-h-150 pb-3' : 'max-h-0'}`}>
                    {item.sections?.map((section, si) => (
                      <div key={si} className="mb-2">
                        {section.title && (
                          <p className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase"
                            style={{ color: 'var(--th-polgun-blue)' }}
                          >
                            {section.title}
                          </p>
                        )}
                        {section.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.to}
                            className="block w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors"
                            style={{
                              color: 'var(--th-text-muted)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--th-polgun-blue)'
                              e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 6%, transparent)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'var(--th-text-muted)'
                              e.currentTarget.style.backgroundColor = 'transparent'
                            }}
                            onClick={() => handleNav(link.page, link.anchor)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to || `/${item.page}`}
                  className="w-full text-left py-4 text-sm font-bold transition-colors"
                  style={{ color: 'var(--th-text)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--th-polgun-blue)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--th-text)'
                  }}
                  onClick={() => handleNav(item.page)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA & Dil Seçimi */}
          <div className="flex flex-col gap-4 pt-5 pb-2">

            {/* Mobil Dil Seçimi */}
            <div className="flex gap-2 justify-center mb-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className="p-1 rounded-full transition-transform"
                  style={{
                    transform: currentLang.code === lang.code ? 'scale(1.15)' : 'scale(1)',
                    opacity: currentLang.code === lang.code ? 1 : 0.6
                  }}
                >
                  <img src={lang.flag} alt={lang.name} className="w-7 h-5 rounded-sm object-cover shadow-sm" />
                </button>
              ))}
            </div>

            <Link
              to="/contact"
              className="w-full py-3.5 ps-6 text-white text-sm font-bold rounded-full transition-all duration-300 text-center"
              style={{
                backgroundColor: 'var(--th-polgun-blue)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--th-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--th-polgun-blue)'
              }}
            >
              {t('common.quote')}
            </Link>
            <Link
              to="/contact"
              className="w-full py-3.5 ps-6 text-sm font-semibold rounded-full transition-all duration-300 border-2 text-center"
              style={{
                borderColor: 'var(--th-polgun-blue)',
                color: 'var(--th-polgun-blue)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {t('common.contact')}
            </Link>
          </div>
        </div>
      </div>
    </header>)
}