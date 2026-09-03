import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import bursaFactory from '../assets/factories/bursa-factory.avif'
import istanbulFactory from '../assets/factories/istanbul-factory.png'
import muglaFactory from '../assets/factories/mugla-factory.avif'

export default function HistoryPage({ setActivePage }) {
  const { t } = useTranslation()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const milestones = [
    {
      year: '2002',
      step: '01',
      tag: t('history.tags.2002', { defaultValue: 'Kuruluş' }),
      event: t('history.milestones.2002', { defaultValue: 'Polgün, Muğla-Menteşe\'de faaliyete başladı.' }),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5" />
        </svg>
      )
    },
    {
      year: '2008',
      step: '02',
      tag: t('history.tags.2008', { defaultValue: 'İlk İhracat' }),
      event: t('history.milestones.2008', { defaultValue: 'İlk uluslararası proje teslimatı gerçekleştirildi.' }),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14.4 14.4 0 010 18M12 3a14.4 14.4 0 000 18" />
        </svg>
      )
    },
    {
      year: '2015',
      step: '03',
      tag: t('history.tags.2015', { defaultValue: 'Kapasite Artışı' }),
      event: t('history.milestones.2015', { defaultValue: 'Üretim kapasitesi artırılarak yeni tesisler devreye alındı.' }),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      year: '2019',
      step: '04',
      tag: t('history.tags.2019', { defaultValue: 'İspanya Ofisi' }),
      event: t('history.milestones.2019', { defaultValue: 'İspanya ofisi açıldı.' }),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      year: '2021',
      step: '05',
      tag: t('history.tags.2021', { defaultValue: 'Ar-Ge Merkezi' }),
      event: t('history.milestones.2021', { defaultValue: 'Bakanlık onaylı Ar-Ge Merkezi statüsü kazanıldı — Muğla\'nın ilk ve tek Ar-Ge Merkezi.' }),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942a4.5 4.5 0 01-4.46 0L12 15.2M19.8 15.3A2.25 2.25 0 0121 17.25v1.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18.75v-1.5a2.25 2.25 0 011.2-1.95l.8-.48" />
        </svg>
      )
    },
    {
      year: '2025',
      step: '06',
      tag: t('history.tags.2025', { defaultValue: 'Bursa Fabrikası' }),
      event: t('history.milestones.2025', { defaultValue: 'Bursa fabrika yatırımıyla toplam 120.000 m² üretim alanına ulaşıldı.' }),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      )
    },
    {
      year: '2026',
      step: '07',
      tag: t('history.tags.2026', { defaultValue: 'Teknopark Ofisi' }),
      event: t('history.milestones.2026', { defaultValue: 'Marmara Teknopark ofisi ile üniversite-sanayi iş birliği güçlendirildi.' }),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      )
    }
  ]

  const factories = [
    { city: t('factories.names.mugla'), label: t('about.factories.mugla.label'), desc: t('about.factories.mugla.desc'), img: muglaFactory },
    { city: t('factories.names.bursa'), label: t('about.factories.bursa.label'), desc: t('about.factories.bursa.desc'), img: bursaFactory },
    { city: t('factories.names.istanbul'), label: t('about.factories.istanbul.label'), desc: t('about.factories.istanbul.desc'), img: istanbulFactory },
  ]

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('nav.history')}
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                {t('history.title').includes(' Yolculuğu') ? <>{t('history.title').split(' Yolculuğu')[0]}<br />{t('history.title').split(' Yolculuğu')[1]}</> : t('history.title')}
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed text-justify">
              {t('history.desc', { defaultValue: 'Yıllar içinde üretim gücümüzü, mühendislik yetkinliğimizi ve global proje deneyimimizi sürekli geliştirerek büyüdük. Attığımız her adım; daha güçlü bir üretim altyapısının, yenilikçi ürünlerin ve bugün 70’ten fazla ülkeye ulaşan Polgün yolculuğunun bir parçası oldu.' })}
            </p>
          </div>
        </div>
      </section>

      {/* ── Modern Milestones Journey Section ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--th-surface)' }}>
        {/* Subtle Decorative Ambient Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22ABE6]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0284c7]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-12 relative z-10">

          {/* Header Area */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>
              {t('history.milestones_tag', { defaultValue: 'Kilometre Taşları' })}
            </p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>
              {t('history.growth_title', { defaultValue: 'Büyüme Hikayemiz' })}
            </h2>
          </div>

          {/* ── Timeline Stage Grid ── */}
          <div className="relative mb-16 lg:mb-24">

            {/* Horizontal Continuous Track Line (Desktop Only) */}
            <div className="hidden xl:block absolute top-7 left-8 right-8 h-[3px] bg-gradient-to-r from-[#22ABE6]/10 via-[#22ABE6] to-[#22ABE6]/10 z-0 pointer-events-none" />

            {/* 7 Interactive Stage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-5 lg:gap-3.5 relative z-10">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col rounded-3xl p-5 xl:p-4.5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                  style={{
                    backgroundColor: 'var(--th-bg)',
                    border: '1px solid color-mix(in srgb, var(--th-border) 14%, transparent)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  {/* Subtle Big Year Watermark in Background */}
                  <div className="absolute -right-2 -bottom-3 text-6xl font-black text-[var(--th-text)] opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none group-hover:scale-110 group-hover:opacity-[0.07] transition-all duration-300">
                    {m.year.slice(-2)}
                  </div>

                  {/* Top Node Indicator & Year Pill */}
                  <div className="flex items-center justify-between mb-3.5 relative z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-black text-white bg-gradient-to-r from-[#22ABE6] to-[#0284c7] shadow-sm shadow-[#22ABE6]/30 group-hover:scale-105 transition-transform">
                      {m.year}
                    </span>
                    <span className="text-[11px] font-black tracking-widest text-[#22ABE6] opacity-70 group-hover:opacity-100">
                      #{m.step}
                    </span>
                  </div>

                  {/* Icon & Milestone Tag */}
                  <div className="flex items-center gap-2 mb-3 relative z-10 min-h-[30px]">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[#22ABE6] bg-[#22ABE6]/10 border border-[#22ABE6]/20 group-hover:bg-[#22ABE6] group-hover:text-white transition-colors duration-300">
                      {m.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--th-text-muted)] leading-tight line-clamp-2">
                      {m.tag}
                    </span>
                  </div>

                  {/* Event Text */}
                  <p className="text-xs sm:text-[13px] font-medium leading-relaxed text-[var(--th-text)] opacity-90 group-hover:opacity-100 relative z-10">
                    {m.event}
                  </p>

                  {/* Bottom Hover Glow Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#22ABE6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Stats Showcase Card ── */}
          <div
            className="rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            style={{
              backgroundColor: 'var(--th-bg)',
              border: '1px solid color-mix(in srgb, var(--th-border) 16%, transparent)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)'
            }}
          >
            {/* Top accent border bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22ABE6] via-[#0284c7] to-[#22ABE6]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[color-mix(in srgb,var(--th-border)12%,transparent)]">

              {/* Stat 1: Ülke */}
              <div className="flex items-center gap-4 lg:px-6 first:pl-0">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[#22ABE6] bg-[#22ABE6]/10 border border-[#22ABE6]/20 shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-black tracking-tight text-[var(--th-text)]">
                    70+
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#22ABE6] block mb-0.5">
                    {t('history.stats.countries', { defaultValue: 'Ülke' })}
                  </span>
                  <span className="text-[11px] text-[var(--th-text-muted)] font-medium block">
                    {t('history.stats.countries_sub', { defaultValue: 'Küresel İhracat & Varlık' })}
                  </span>
                </div>
              </div>

              {/* Stat 2: Proje */}
              <div className="flex items-center gap-4 pt-6 sm:pt-0 lg:px-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[#22ABE6] bg-[#22ABE6]/10 border border-[#22ABE6]/20 shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-black tracking-tight text-[var(--th-text)]">
                    3000+
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#22ABE6] block mb-0.5">
                    {t('history.stats.projects', { defaultValue: 'Proje' })}
                  </span>
                  <span className="text-[11px] text-[var(--th-text-muted)] font-medium block">
                    {t('history.stats.projects_sub', { defaultValue: 'Tamamlanan Su Parkı' })}
                  </span>
                </div>
              </div>

              {/* Stat 3: Entegre Üretim */}
              <div className="flex items-center gap-4 pt-6 sm:pt-0 lg:px-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[#22ABE6] bg-[#22ABE6]/10 border border-[#22ABE6]/20 shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-black tracking-tight text-[var(--th-text)] whitespace-nowrap">
                    120.000 m²
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#22ABE6] block mb-0.5">
                    {t('history.stats.production', { defaultValue: 'Entegre Üretim' })}
                  </span>
                  <span className="text-[11px] text-[var(--th-text-muted)] font-medium block">
                    {t('history.stats.production_sub', { defaultValue: '3 İleri Düzey Fabrika' })}
                  </span>
                </div>
              </div>

              {/* Stat 4: Çalışan */}
              <div className="flex items-center gap-4 pt-6 sm:pt-0 lg:px-6 last:pr-0">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[#22ABE6] bg-[#22ABE6]/10 border border-[#22ABE6]/20 shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-black tracking-tight text-[var(--th-text)]">
                    425
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#22ABE6] block mb-0.5">
                    {t('history.stats.team', { defaultValue: 'Çalışan' })}
                  </span>
                  <span className="text-[11px] text-[var(--th-text-muted)] font-medium block">
                    {t('history.stats.team_sub', { defaultValue: 'Mühendis & Üretim Kadrosu' })}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Tarihçe & Fabrikalarımız detay ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('history.facilities')}</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>{t('history.growing_power')}</h2>
          </div>
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('history.desc1')}
            </p>
            <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('history.desc2')}
            </p>
            <p className="leading-relaxed font-bold" style={{ color: 'var(--th-polgun-blue)' }}>
              {t('history.bold_summary')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {factories.map((fac, i) => (
              <div key={i} className="rounded-2xl overflow-hidden group" style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <div className="overflow-hidden h-52">
                  <img src={fac.img} alt={fac.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: 'color-mix(in srgb, var(--th-primary) 10%, transparent)', color: 'var(--th-primary)' }}>{fac.city}</span>
                  <h4 className="font-black text-base mb-2" style={{ color: 'var(--th-text)' }}>{fac.label}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
