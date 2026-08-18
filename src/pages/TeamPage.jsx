import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/polgun-featured-projects-4.avif'

// Üretim görselleri
import cncOperator from '../assets/production/cnc-operator.avif'
import pipeCutting from '../assets/production/pipe-cutting.avif'
import paintApplication from '../assets/production/paint-application.avif'
import inotekCnc from '../assets/production/inotek-cnc.avif'
import compositeControl from '../assets/production/composite-control.avif'
import mechanicalOperator from '../assets/production/mechanical-operator.avif'
import cncCutting from '../assets/production/cnc-cutting.avif'

const PRODUCTION_SECTIONS = [
  {
    id: 'cnc_mold',
    img: inotekCnc,
  },
  {
    id: 'steel',
    img: cncCutting,
    img2: pipeCutting,
  },
  {
    id: 'mechanical',
    img: mechanicalOperator,
  },
  {
    id: 'composite',
    img: paintApplication,
    img2: compositeControl,
  },
  {
    id: 'digital',
    img: cncOperator,
  },
]

export default function TeamPage({ setActivePage }) {
  const { t } = useTranslation()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('nav.team')}
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                {t('about.experience')}
              </h1>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              {t('about.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Misyon & Görsel ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>{t('nav.about')}</p>
              <h2 className="text-4xl font-black leading-tight mb-8" style={{ color: 'var(--th-text)' }}>
                {t('about.power_title')}
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.power_desc1')}
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.power_desc2')}
              </p>
              <p className="leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.power_desc3')}
              </p>
            </div>
            <img src={heroImage} alt="Polgün Waterpark" className="w-full aspect-[4/3] rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* ── Ar-Ge Merkezi ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>{t('nav.arge')}</p>
              <h2 className="text-3xl font-black leading-tight mb-6" style={{ color: 'var(--th-text)' }}>
                {t('about.arge_title')}
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.arge_desc1')}
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.arge_desc2')}
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.arge_desc3')}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--th-polgun-blue) 15%, transparent)' }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: 'var(--th-polgun-blue)' }}>{t('about.misyon')}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                    {t('about.misyon_desc')}
                  </p>
                </div>
                <div className="p-5 rounded-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--th-primary) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--th-primary) 15%, transparent)' }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: 'var(--th-primary)' }}>{t('about.vizyon')}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                    {t('about.vizyon_desc')}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { num: '30+', label: t('about.stats.staff'), desc: t('about.stats.staff_desc') },
                { num: '2021', label: t('about.stats.status'), desc: t('about.stats.status_desc') },
                { num: '4+', label: t('about.stats.projects'), desc: t('about.stats.projects_desc') },
                { num: '70+', label: t('about.stats.countries'), desc: t('about.stats.countries_desc') },
              ].map((s) => (
                <div key={s.num} className="flex gap-5 items-center p-6 rounded-2xl" style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)' }}>
                  <span className="text-4xl font-black shrink-0" style={{ color: 'var(--th-primary)' }}>{s.num}</span>
                  <div>
                    <div className="font-bold" style={{ color: 'var(--th-text)' }}>{s.label}</div>
                    <div className="text-sm mt-0.5" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Üretim Altyapımız ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('about.production_title')}</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>{t('about.production_subtitle')}</h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('about.production_desc')}
            </p>
          </div>
          <div className="flex flex-col gap-24">
            {PRODUCTION_SECTIONS.map((sec, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <h3 className="text-2xl font-black mb-5" style={{ color: 'var(--th-text)' }}>{t('about.production_sections.' + sec.id + '.title')}</h3>
                  <p className="leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{t('about.production_sections.' + sec.id + '.desc')}</p>
                </div>
                <div className={sec.img2 ? 'grid grid-cols-2 gap-3' : ''}>
                  <img src={sec.img} alt={t('about.production_sections.' + sec.id + '.title')} className="w-full aspect-[4/3] rounded-2xl object-cover" />
                  {sec.img2 && <img src={sec.img2} alt={t('about.production_sections.' + sec.id + '.title') + ' 2'} className="w-full aspect-[4/3] rounded-2xl object-cover" />}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-black mb-4" style={{ color: 'var(--th-text)' }}>{t('about.production_power')}</h3>
            <p className="mb-8 max-w-lg mx-auto" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('about.production_power_desc')}
            </p>
            <button
              onClick={() => setActivePage('projects')}
              className="px-8 py-3.5 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--th-primary)', color: '#fff' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {t('about.btn_projects')}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
