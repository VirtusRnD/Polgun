// ============================================================
// FOOTER — Kurumsal 5 Kolonlu, E-Bülten & İletişim Alanlı Yapı
// ============================================================
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import polgunLogoBeyaz from '../assets/polgun-logo-beyaz2.avif'
import polgunLogo from '../assets/logoPolgun.png'

const LANGUAGES = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'zh', label: 'ZH', name: '中文' },
  { code: 'ar', label: 'AR', name: 'العربية' },
]

export default function Footer({ setActivePage }) {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const currentLang = LANGUAGES.find((l) => l.code === (i18n.language || 'tr')) || LANGUAGES[0]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const handleNav = (path) => {
    navigate(path)
    if (!path.includes('anchor=')) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="text-white relative overflow-hidden" style={{ backgroundColor: 'var(--th-polgun-blue)' }}>
      {/* ── Üst Ana Gövde ── */}
      <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-8 justify-between">

          {/* Sol: Logo & Marka Tanıtımı */}
          <div className="xl:w-96 shrink-0 flex flex-col items-start justify-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block">
              <img
                src={polgunLogo}
                alt="Polgün Waterparks"
                loading="lazy"
                className="h-56 sm:h-64 xl:h-72 w-auto object-contain drop-shadow-2xl"
              />
            </Link>
          </div>

          {/* Orta: 5 Navigasyon Kolonu */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 xl:gap-6 flex-1">

            {/* Kolon 1: ÜRÜNLER */}
            <div>
              <div className="mb-4">
                <h4 className="text-xs font-black tracking-widest text-white uppercase inline-block">
                  {t('footer.products_title', { defaultValue: 'ÜRÜNLER' })}
                </h4>
                <div className="w-8 h-0.5 bg-[#22ABE6] mt-1.5 rounded-full" />
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-white/70">
                <li>
                  <button onClick={() => handleNav('/products?category=Su Kaydırakları')} className="hover:text-white transition-colors text-left">
                    {t('nav.slides', { defaultValue: 'Su Kaydırakları' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/splash-tower')} className="hover:text-white transition-colors text-left">
                    {t('nav.splash_tower', { defaultValue: 'Splash Tower' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/splash-zone')} className="hover:text-white transition-colors text-left">
                    {t('nav.splash_zone', { defaultValue: 'Splash Zone' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/products?category=Ar-Ge Ürünleri')} className="hover:text-white transition-colors text-left">
                    {t('nav.arge_products', { defaultValue: 'Ar-Ge Ürünleri' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/products')} className="hover:text-white transition-colors text-left">
                    {t('nav.all_products', { defaultValue: 'Tüm Ürünler' })}
                  </button>
                </li>
              </ul>
            </div>

            {/* Kolon 2: HİZMETLER */}
            <div>
              <div className="mb-4">
                <h4 className="text-xs font-black tracking-widest text-white uppercase inline-block">
                  {t('footer.services_title', { defaultValue: 'HİZMETLER' })}
                </h4>
                <div className="w-8 h-0.5 bg-[#22ABE6] mt-1.5 rounded-full" />
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-white/70">
                <li>
                  <button onClick={() => handleNav('/services?anchor=urun-tasarimi-ve-temalandirma')} className="hover:text-white transition-colors text-left">
                    {t('nav.planning', { defaultValue: 'Ürün Tasarımı ve Temalandırma' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/services?anchor=muhendislik-ve-projelendirme')} className="hover:text-white transition-colors text-left">
                    {t('nav.design', { defaultValue: 'Mühendislik ve Projelendirme' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/services?anchor=uretim')} className="hover:text-white transition-colors text-left">
                    {t('nav.engineering', { defaultValue: 'Üretim' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/services?anchor=proje-yonetimi-ve-sevkiyat')} className="hover:text-white transition-colors text-left">
                    {t('nav.installation', { defaultValue: 'Proje Yönetimi ve Sevkiyat' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/services?anchor=montaj-ve-devreye-alma')} className="hover:text-white transition-colors text-left">
                    {t('nav.maintenance', { defaultValue: 'Montaj ve Devreye Alma' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/services')} className="hover:text-white transition-colors text-left">
                    {t('services.all', { defaultValue: 'Tüm Hizmetler' })}
                  </button>
                </li>
              </ul>
            </div>

            {/* Kolon 3: PROJELER */}
            <div>
              <div className="mb-4">
                <h4 className="text-xs font-black tracking-widest text-white uppercase inline-block">
                  {t('footer.projects_title', { defaultValue: 'PROJELER' })}
                </h4>
                <div className="w-8 h-0.5 bg-[#22ABE6] mt-1.5 rounded-full" />
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-white/70">
                <li>
                  <button onClick={() => handleNav('/projects?type=Açık Alan Su Parkı')} className="hover:text-white transition-colors text-left">
                    {t('projects.types.outdoor', { defaultValue: 'Açık Alan Su Parkı' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/projects?type=Otel & Su Parkı')} className="hover:text-white transition-colors text-left">
                    {t('projects.types.hotel', { defaultValue: 'Otel & Su Parkı' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/projects?type=Kapalı Alan Su Parkı')} className="hover:text-white transition-colors text-left">
                    {t('projects.types.indoor', { defaultValue: 'Kapalı Alan Su Parkı' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/projects?type=Resort Tatil Köyü')} className="hover:text-white transition-colors text-left">
                    {t('projects.types.resort', { defaultValue: 'Resort Tatil Köyü' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/projects')} className="hover:text-white transition-colors text-left">
                    {t('common.all_projects', { defaultValue: 'Tüm Projeler' })}
                  </button>
                </li>
              </ul>
            </div>

            {/* Kolon 4: KURUMSAL */}
            <div>
              <div className="mb-4">
                <h4 className="text-xs font-black tracking-widest text-white uppercase inline-block">
                  {t('footer.corporate_title', { defaultValue: 'KURUMSAL' })}
                </h4>
                <div className="w-8 h-0.5 bg-[#22ABE6] mt-1.5 rounded-full" />
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-white/70">
                <li>
                  <button onClick={() => handleNav('/about')} className="hover:text-white transition-colors text-left">
                    {t('nav.about', { defaultValue: 'Hakkımızda' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/news')} className="hover:text-white transition-colors text-left">
                    {t('nav.news', { defaultValue: 'Haberler' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/career')} className="hover:text-white transition-colors text-left">
                    {t('nav.career', { defaultValue: 'Kariyer' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors text-left">
                    {t('common.contact', { defaultValue: 'İletişim' })}
                  </button>
                </li>
              </ul>
            </div>

            {/* Kolon 5: KALİTE & GÜVEN */}
            <div>
              <div className="mb-4">
                <h4 className="text-xs font-black tracking-widest text-white uppercase inline-block">
                  {t('footer.quality_title', { defaultValue: 'KALİTE & GÜVEN' })}
                </h4>
                <div className="w-8 h-0.5 bg-[#22ABE6] mt-1.5 rounded-full" />
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-white/70">

                <li>
                  <button onClick={() => handleNav('/about?anchor=sertifikalar')} className="hover:text-white transition-colors text-left">
                    {t('awards.certificates', { defaultValue: 'Sertifikalar' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/patents')} className="hover:text-white transition-colors text-left">
                    {t('nav.patents', { defaultValue: 'Patentler' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/awards')} className="hover:text-white transition-colors text-left">
                    {t('nav.awards', { defaultValue: 'Ödüller' })}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('/about')} className="hover:text-white transition-colors text-left">
                    {t('footer.sustainability', { defaultValue: 'Sürdürülebilirlik' })}
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Dikey Ayırıcı Çizgi (Masaüstü) */}
          <div className="hidden xl:block w-[1px] bg-white/15 self-stretch" />

          {/* Sağ: İletişim, E-Bülten & Sosyal Medya */}
          <div className="xl:w-80 shrink-0 flex flex-col gap-6">

            {/* İletişim Bilgileri */}
            <div className="flex flex-col gap-3 text-xs">
              <a
                href="tel:+902626566467"
                className="flex items-center gap-3 text-white/85 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[#22ABE6] bg-white/10 group-hover:bg-[#22ABE6] group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="font-semibold">+90 262 656 64 67</span>
              </a>

              <a
                href="mailto:info@polgun.com.tr"
                className="flex items-center gap-3 text-white/85 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[#22ABE6] bg-white/10 group-hover:bg-[#22ABE6] group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span>info@polgun.com.tr</span>
              </a>

              <div className="flex items-center gap-3 text-white/85">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[#22ABE6] bg-white/10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span>Muğla, Türkiye</span>
              </div>
            </div>

            {/* E-Bülten Formu */}
            <div className="pt-2">
              <h5 className="text-xs font-black tracking-widest uppercase text-white mb-1.5">
                {t('footer.newsletter_title', { defaultValue: 'E-BÜLTEN' })}
              </h5>
              <p className="text-[11px] text-white/70 leading-relaxed mb-3">
                {t('footer.newsletter_desc', {
                  defaultValue: 'Yenilikler, projeler ve etkinliklerden haberdar olmak için abone olun.'
                })}
              </p>

              {subscribed ? (
                <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs font-medium">
                  ✓ {t('footer.newsletter_success', { defaultValue: 'Aboneliğiniz alındı! Teşekkür ederiz.' })}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.newsletter_placeholder', { defaultValue: 'E-posta adresiniz' })}
                    required
                    className="flex-1 bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#22ABE6] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#22ABE6] hover:bg-[#1D75BD] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shrink-0 shadow-sm"
                  >
                    {t('footer.newsletter_btn', { defaultValue: 'ABONE OL' })}
                  </button>
                </form>
              )}
            </div>

            {/* Sosyal Medya İkonları */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                {
                  name: 'Facebook',
                  url: 'https://www.facebook.com/polgunwaterparks/?locale=tr_TR',
                  icon: (
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )
                },
                {
                  name: 'Instagram',
                  url: 'https://www.instagram.com/polgunwaterparks/',
                  icon: (
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  url: 'https://www.linkedin.com/company/polgün-waterparks-waterslides/?originalSubdomain=tr',
                  icon: (
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.665 1.199-1.61 2.925-1.61 2.135 0 3.735 1.39 3.735 4.374v5.518zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.954-1.71 1.185 0 1.915.759 1.915 1.71 0 .951-.73 1.71-1.954 1.71zm1.946 11.597H3.392V9.861h3.891v10.591zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )
                },
                {
                  name: 'YouTube',
                  url: 'https://www.youtube.com/@polgunwaterparks4024',
                  icon: (
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#22ABE6] hover:border-[#22ABE6] transition-all hover:scale-105"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* ── Alt Çubuk / Copyright & Yasal Linkler ── */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/60">

          {/* Sol: Telif Hakkı */}
          <p>© 2026 Polgun Waterparks, {t('footer.all_rights_reserved', { defaultValue: 'Tüm hakları saklıdır.' })}</p>

          {/* Orta: Yasal Politikalar */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <a
              href="/documents/kvkk/calisan-adayi-aydinlatma.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t('footer.disclosure', { defaultValue: 'Aydınlatma Metni' })}
            </a>
            <span className="text-white/25">|</span>
            <a
              href="/documents/kvkk/cerez-aydinlatma.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t('footer.cookie_policy', { defaultValue: 'Çerez Politikası' })}
            </a>
            <span className="text-white/25">|</span>
            <a
              href="/documents/kvkk/musteri-tedarikci-aydinlatma.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t('footer.terms', { defaultValue: 'Kullanım Koşulları' })}
            </a>
            <span className="text-white/25">|</span>
            <a
              href="/documents/kvkk/musteri-tedarikci-aydinlatma.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              KVKK
            </a>
            <span className="text-white/25">|</span>
            <a
              href="/documents/kvkk/musteri-tedarikci-aydinlatma.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t('footer.ethics', { defaultValue: 'Etik İlkeler' })}
            </a>
            <span className="text-white/25">|</span>
            <a
              href="/documents/kvkk/musteri-tedarikci-aydinlatma.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t('footer.info_security', { defaultValue: 'Bilgi Güvenliği' })}
            </a>
          </div>



        </div>

      </div>
    </footer>
  )
}
