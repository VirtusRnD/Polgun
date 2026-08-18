import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import bursaFactory from '../assets/factories/bursa-factory.avif'
import istanbulFactory from '../assets/factories/istanbul-factory.avif'
import muglaFactory from '../assets/factories/mugla-factory.avif'

export default function HistoryPage({ setActivePage }) {
  const { t } = useTranslation()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const milestones = [
    { year: '2002', event: t('history.milestones.2002') },
    { year: '2008', event: t('history.milestones.2008') },
    { year: '2015', event: t('history.milestones.2015') },
    { year: '2021', event: t('history.milestones.2021') },
    { year: '2022', event: t('history.milestones.2022') },
    { year: '2024', event: t('history.milestones.2024') },
    { year: '2025', event: t('history.milestones.2025') },
  ]

  const factories = [
    { city: t('factories.names.mugla'), label: t('about.factories.mugla.label'), desc: t('about.factories.mugla.desc'), img: muglaFactory },
    { city: t('factories.names.bursa'), label: t('about.factories.bursa.label'), desc: t('about.factories.bursa.desc'), img: bursaFactory },
    { city: t('factories.names.istanbul'), label: t('about.factories.istanbul.label'), desc: t('about.factories.istanbul.desc'), img: istanbulFactory },
  ]

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('nav.history')}</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
            {t('history.title').includes(' Yolculuğu') ? <>{t('history.title').split(' Yolculuğu')[0]}<br />{t('history.title').split(' Yolculuğu')[1]}</> : t('history.title')}
          </h1>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('history.milestones_tag', {defaultValue: 'Kilometre Taşları'})}</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>{t('history.growth_title', {defaultValue: 'Büyüme Hikayemiz'})}</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 20%, transparent)' }} />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-8 relative">
                  {/* Dot */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-sm font-black z-10"
                    style={{ backgroundColor: 'var(--th-polgun-blue)', color: '#fff' }}>
                    {m.year}
                  </div>
                  <div className="pt-3">
                    <p className="text-base leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
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
