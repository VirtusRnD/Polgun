// ============================================================
// NOT FOUND (404) PAGE — Polgün Waterparks
// ============================================================
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const recommendedRoutes = [
    {
      icon: (
        <svg className="w-7 h-7 text-[#22ABE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      tag: t('notFound.card1_tag', { defaultValue: t('nav.products', { defaultValue: 'Ürünlerimiz' }) }),
      title: t('notFound.card1_title', { defaultValue: t('products.title', { defaultValue: 'Su Kaydırakları & Splash Sistemleri' }) }),
      desc: t('notFound.card1_desc', { defaultValue: 'En popüler adrenalin kaydıraklarımızı, aile eğlence sistemlerimizi ve Splash Tower parkurlarımızı inceleyin.' }),
      link: '/products',
      cta: t('notFound.card1_cta', { defaultValue: t('common.learn_more', { defaultValue: 'Ürünleri İncele' }) }),
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#22ABE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tag: t('notFound.card2_tag', { defaultValue: t('nav.projects', { defaultValue: 'Projelerimiz' }) }),
      title: t('notFound.card2_title', { defaultValue: t('projects.hero_title_2', { defaultValue: 'Global Proje Portföyümüz' }) }),
      desc: t('notFound.card2_desc', { defaultValue: "70'ten fazla ülkede hayata geçirdiğimiz 3000'i aşkın referans projemizi ve tematik su parklarını keşfedin." }),
      link: '/projects',
      cta: t('notFound.card2_cta', { defaultValue: t('common.explore_projects', { defaultValue: 'Projeleri Gör' }) }),
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#22ABE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      tag: t('notFound.card3_tag', { defaultValue: t('nav.arge', { defaultValue: 'Ar-Ge Merkezi' }) }),
      title: t('notFound.card3_title', { defaultValue: t('arge.header_title', { defaultValue: 'Tasarım & İnovasyon' }) }),
      desc: t('notFound.card3_desc', { defaultValue: "Bakanlık onaylı Ar-Ge merkezimizde geliştirilen tescilli tasarımlar, patentler ve teknolojik çözümler." }),
      link: '/r-and-d',
      cta: t('notFound.card3_cta', { defaultValue: t('common.learn_more', { defaultValue: 'Ar-Ge’yi Keşfet' }) }),
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#22ABE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tag: t('notFound.card4_tag', { defaultValue: t('nav.contact', { defaultValue: 'İletişim' }) }),
      title: t('notFound.card4_title', { defaultValue: t('contact.hero_title', { defaultValue: 'Bize Ulaşın' }) }),
      desc: t('notFound.card4_desc', { defaultValue: 'Yeni bir su parkı yatırımı veya ürün talebi için uzman mühendis ve proje ekibimizle iletişime geçin.' }),
      link: '/contact',
      cta: t('notFound.card4_cta', { defaultValue: t('common.contact', { defaultValue: 'İletişime Geç' }) }),
    },
  ]

  const quickLinks = [
    { name: t('nav.about', { defaultValue: 'Hakkımızda' }), path: '/about' },
    { name: t('nav.factories', { defaultValue: 'Fabrikalarımız' }), path: '/factories' },
    { name: t('nav.history', { defaultValue: 'Tarihçe' }), path: '/history' },
    { name: t('nav.knowledge_center', { defaultValue: 'Bilgi Merkezi' }), path: '/knowledge-center' },
    { name: t('nav.career', { defaultValue: 'Kariyer' }), path: '/career' },
    { name: t('nav.awards', { defaultValue: 'Ödüller & Kalite' }), path: '/awards' },
    { name: t('nav.news', { defaultValue: 'Haberler' }), path: '/news' },
    { name: t('nav.services', { defaultValue: 'Hizmetlerimiz' }), path: '/services' },
  ]

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p
                className="text-lg lg:text-4xl font-black block text-white tracking-normal mb-2"
                style={{
                  WebkitTextStroke: '0.8px #FFFFFF',
                  paintOrder: 'stroke fill',
                }}
              >
                {t('notFound.tag', { defaultValue: '404 · Sayfa Bulunamadı' })}
              </p>
              <h1 className="text-3xl lg:text-5xl font-black leading-[1.05] tracking-tight">
                <span
                  className="block"
                  style={{
                    color: 'var(--th-primary)',
                    WebkitTextStroke: '15.5px var(--th-polgun-antrasit)',
                    paintOrder: 'stroke fill',
                  }}
                >
                  {t('notFound.hero_title', { defaultValue: 'Rotadan Çıktınız!' })}
                </span>
              </h1>
            </div>
            <div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {t('notFound.hero_desc', {
                  defaultValue: 'Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya sularımıza kapılıp gitmiş olabilir. Sizi ana rotaya güvenle geri döndürelim.'
                })}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  style={{ backgroundColor: 'var(--th-polgun-antrasit)', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {t('notFound.home_btn', { defaultValue: 'Ana Sayfaya Dön' })}
                </Link>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white border border-white/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {t('notFound.back_btn', { defaultValue: 'Geri Dön' })}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 404 Visual Banner Section ── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--th-surface)' }}>
        {/* Subtle Ambient Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22ABE6]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Water Wave Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-black tracking-wider uppercase border border-[#22ABE6]/30 bg-[#22ABE6]/10 text-[#0F2B5B]">
              <span className="text-base">🌊</span>
              <span>{t('notFound.badge', { defaultValue: 'Su Parkuru Rotası Kayıp' })}</span>
            </div>

            {/* Giant 404 Stroke Typography */}
            <div className="relative my-4 select-none flex items-center justify-center">
              <span
                className="text-8xl sm:text-9xl lg:text-[13rem] font-black leading-none tracking-tight block"
                style={{
                  color: 'var(--th-primary)',
                  WebkitTextStroke: '20px var(--th-polgun-antrasit)',
                  paintOrder: 'stroke fill',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
                }}
              >
                404
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-6 mb-4" style={{ color: 'var(--th-text)' }}>
              {t('notFound.heading', { defaultValue: 'Bu Kaydırağın Sonu Açık Sulara Çıkıyor!' })}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 85%, transparent)' }}>
              {t('notFound.message', {
                defaultValue: 'Aradığınız bağlantı taşınmış, güncellenmiş veya yanlış yazılmış olabilir. Aşağıdaki popüler bölümlerden yolculuğunuza devam edebilirsiniz.'
              })}
            </p>
          </div>

          {/* ── 4 Recommended Hub Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {recommendedRoutes.map((route, idx) => (
              <Link
                key={idx}
                to={route.link}
                className="group p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between border hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--th-bg)',
                  borderColor: 'color-mix(in srgb, var(--th-border) 40%, transparent)',
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22ABE6]/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                    {route.icon}
                  </div>
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--th-polgun-blue)' }}>
                    {route.tag}
                  </p>
                  <h3 className="text-xl font-black mb-3 group-hover:text-[#22ABE6] transition-colors" style={{ color: 'var(--th-text)' }}>
                    {route.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
                    {route.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#22ABE6] group-hover:translate-x-1 transition-transform">
                  <span>{route.cta}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Quick Navigation Links Bar ── */}
          <div className="mt-16 pt-10 border-t" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 30%, transparent)' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--th-text-muted)' }}>
                {t('notFound.quick_links', { defaultValue: 'Hızlı Erişim:' })}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {quickLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-white/70 hover:bg-white border border-black/5 hover:border-[#22ABE6]/40 hover:text-[#22ABE6] transition-all duration-200"
                    style={{ color: 'var(--th-text)' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
