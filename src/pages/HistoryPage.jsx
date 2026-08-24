import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import bursaFactory from '../assets/factories/bursa-factory.avif'
import istanbulFactory from '../assets/factories/istanbul-factory.png'
import muglaFactory from '../assets/factories/mugla-factory.avif'

export default function HistoryPage({ setActivePage }) {
  const { t } = useTranslation()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const milestones = [
    { year: '2002', event: t('history.milestones.2002') },
    { year: '2008', event: t('history.milestones.2008') },
    { year: '2015', event: t('history.milestones.2015') },
    { year: '2019', event: t('history.milestones.2019') },
    { year: '2021', event: t('history.milestones.2021') },
    { year: '2025', event: t('history.milestones.2025') },
    { year: '2026', event: t('history.milestones.2026') },
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
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('history.milestones_tag', { defaultValue: 'Kilometre Taşları' })}</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>{t('history.growth_title', { defaultValue: 'Büyüme Hikayemiz' })}</h2>
          </div>

          <div className="relative">
            {/* Mobile Vertical Dashed Line */}
            <div className="block md:hidden absolute left-1/2 top-8 bottom-8 w-0.5 border-l-2 border-dashed -translate-x-1/2 pointer-events-none"
              style={{ borderColor: 'color-mix(in srgb, var(--th-polgun-blue) 25%, transparent)' }} />

            {/* 2 Milestones per Row Grid on Desktop, Vertical Stack on Mobile */}
            <div className="flex flex-col gap-y-20 relative">

              {/* ── Row 1 (2002 & 2008) ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 relative">
                {/* Horizontal Dashed Connection Line */}
                <div className="hidden md:block absolute top-[52px] left-[25%] w-[50%] h-0.5 border-t-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'color-mix(in srgb, var(--th-polgun-blue) 25%, transparent)' }} />

                {/* Horizontal Arrow Badge (Right) */}
                <div className="hidden md:flex absolute top-[52px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm text-[var(--th-polgun-blue)] z-20 pointer-events-none">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>

                {/* 2002 (Left) */}
                <div className="flex flex-col items-center w-full relative group">
                  <div className="flex flex-col items-center p-6 text-center relative z-10 w-full max-w-md">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-4 shrink-0 select-none shadow-sm group-hover:-translate-y-1 transition-transform duration-300 z-10"
                      style={{
                        background: 'linear-gradient(135deg, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 80%, #000))',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(40, 116, 178, 0.25)'
                      }}>
                      {milestones[0].year}
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'var(--th-text)' }}>
                      {milestones[0].event}
                    </p>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="flex md:hidden justify-center mt-4 w-full text-[var(--th-polgun-blue)] shrink-0 z-20">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2008 (Right) */}
                <div className="flex flex-col items-center w-full relative group">
                  <div className="flex flex-col items-center p-6 text-center relative z-10 w-full max-w-md">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-4 shrink-0 select-none shadow-sm group-hover:-translate-y-1 transition-transform duration-300 z-10"
                      style={{
                        background: 'linear-gradient(135deg, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 80%, #000))',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(40, 116, 178, 0.25)'
                      }}>
                      {milestones[1].year}
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'var(--th-text)' }}>
                      {milestones[1].event}
                    </p>
                  </div>
                  {/* Desktop Vertical Down Arrow to Row 2 */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-20 h-20 w-0.5 border-l-2 border-dashed pointer-events-none"
                    style={{ borderColor: 'color-mix(in srgb, var(--th-polgun-blue) 25%, transparent)' }} />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-14 w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm text-[var(--th-polgun-blue)] z-20 pointer-events-none">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="flex md:hidden justify-center mt-4 w-full text-[var(--th-polgun-blue)] shrink-0 z-20">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Row 2 (2015 & 2019 - Zigzag Left/Right swap) ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 relative">
                {/* Horizontal Dashed Connection Line */}
                <div className="hidden md:block absolute top-[52px] left-[25%] w-[50%] h-0.5 border-t-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'color-mix(in srgb, var(--th-polgun-blue) 25%, transparent)' }} />

                {/* Horizontal Arrow Badge (Left) */}
                <div className="hidden md:flex absolute top-[52px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm text-[var(--th-polgun-blue)] z-20 pointer-events-none">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>

                {/* 2015 (Right in Grid, comes before 2019 chronologically) */}
                <div className="flex flex-col items-center w-full relative group md:col-start-2 md:row-start-1">
                  <div className="flex flex-col items-center p-6 text-center relative z-10 w-full max-w-md">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-4 shrink-0 select-none shadow-sm group-hover:-translate-y-1 transition-transform duration-300 z-10"
                      style={{
                        background: 'linear-gradient(135deg, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 80%, #000))',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(40, 116, 178, 0.25)'
                      }}>
                      {milestones[2].year}
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'var(--th-text)' }}>
                      {milestones[2].event}
                    </p>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="flex md:hidden justify-center mt-4 w-full text-[var(--th-polgun-blue)] shrink-0 z-20">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2019 (Left in Grid, follows 2015 chronologically) */}
                <div className="flex flex-col items-center w-full relative group md:col-start-1 md:row-start-1">
                  <div className="flex flex-col items-center p-6 text-center relative z-10 w-full max-w-md">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-4 shrink-0 select-none shadow-sm group-hover:-translate-y-1 transition-transform duration-300 z-10"
                      style={{
                        background: 'linear-gradient(135deg, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 80%, #000))',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(40, 116, 178, 0.25)'
                      }}>
                      {milestones[3].year}
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'var(--th-text)' }}>
                      {milestones[3].event}
                    </p>
                  </div>
                  {/* Desktop Vertical Down Arrow to Row 3 */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-20 h-20 w-0.5 border-l-2 border-dashed pointer-events-none"
                    style={{ borderColor: 'color-mix(in srgb, var(--th-polgun-blue) 25%, transparent)' }} />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-14 w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm text-[var(--th-polgun-blue)] z-20 pointer-events-none">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="flex md:hidden justify-center mt-4 w-full text-[var(--th-polgun-blue)] shrink-0 z-20">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Row 3 (2021 & 2025) ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 relative">
                {/* Horizontal Dashed Connection Line */}
                <div className="hidden md:block absolute top-[52px] left-[25%] w-[50%] h-0.5 border-t-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'color-mix(in srgb, var(--th-polgun-blue) 25%, transparent)' }} />

                {/* Horizontal Arrow Badge (Right) */}
                <div className="hidden md:flex absolute top-[52px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm text-[var(--th-polgun-blue)] z-20 pointer-events-none">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>

                {/* 2021 (Left) */}
                <div className="flex flex-col items-center w-full relative group">
                  <div className="flex flex-col items-center p-6 text-center relative z-10 w-full max-w-md">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-4 shrink-0 select-none shadow-sm group-hover:-translate-y-1 transition-transform duration-300 z-10"
                      style={{
                        background: 'linear-gradient(135deg, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 80%, #000))',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(40, 116, 178, 0.25)'
                      }}>
                      {milestones[4].year}
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'var(--th-text)' }}>
                      {milestones[4].event}
                    </p>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="flex md:hidden justify-center mt-4 w-full text-[var(--th-polgun-blue)] shrink-0 z-20">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2025 (Right) */}
                <div className="flex flex-col items-center w-full relative group">
                  <div className="flex flex-col items-center p-6 text-center relative z-10 w-full max-w-md">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-4 shrink-0 select-none shadow-sm group-hover:-translate-y-1 transition-transform duration-300 z-10"
                      style={{
                        background: 'linear-gradient(135deg, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 80%, #000))',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(40, 116, 178, 0.25)'
                      }}>
                      {milestones[5].year}
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'var(--th-text)' }}>
                      {milestones[5].event}
                    </p>
                  </div>
                  {/* Desktop Vertical Down Arrow to Row 4 */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-20 h-20 w-0.5 border-l-2 border-dashed pointer-events-none"
                    style={{ borderColor: 'color-mix(in srgb, var(--th-polgun-blue) 25%, transparent)' }} />
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-14 w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm text-[var(--th-polgun-blue)] z-20 pointer-events-none">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="flex md:hidden justify-center mt-4 w-full text-[var(--th-polgun-blue)] shrink-0 z-20">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-0 items-center justify-center shadow-sm">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Row 4 (2026) ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 relative">
                {/* Empty Col 1 */}
                <div className="pointer-events-none hidden md:block" />

                {/* 2026 (Right) */}
                <div className="flex flex-col items-center w-full relative group">
                  <div className="flex flex-col items-center p-6 text-center relative z-10 w-full max-w-md">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-4 shrink-0 select-none shadow-sm group-hover:-translate-y-1 transition-transform duration-300 z-10"
                      style={{
                        background: 'linear-gradient(135deg, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 80%, #000))',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(40, 116, 178, 0.25)'
                      }}>
                      {milestones[6].year}
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'var(--th-text)' }}>
                      {milestones[6].event}
                    </p>
                  </div>
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
