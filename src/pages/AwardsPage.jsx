import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Ziyaret görselleri
import egekafVisit from '../assets/awards/egekaf-visit.avif'
import mskuRectorVisit from '../assets/awards/msku-rector-visit.avif'
import techVisit from '../assets/awards/tech-visit.png'

export default function AwardsPage({ setActivePage }) {
  const { t } = useTranslation()
  const [liveAwards, setLiveAwards] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    let cancelled = false

    async function fetchAwards() {
      try {
        const res = await fetch('/api/award/visible')
        if (!res.ok) return
        const contentType = res.headers.get('content-type') ?? ''
        if (!contentType.includes('json')) return
        const data = await res.json()
        if (!cancelled && Array.isArray(data)) {
          const mapped = data.map(item => ({
            tag: item.tag,
            title: item.title,
            desc: item.description,
            img: item.image_path
          }))
          setLiveAwards(mapped)
        }
      } catch {
        // Keep the list empty when the CMS is unavailable.
      }
    }

    fetchAwards()
    return () => { cancelled = true }
  }, [])

  const visits = [
    {
      title: t('awards.visits.minister.title'),
      desc: t('awards.visits.minister.desc'),
      img: techVisit,
    },
    {
      title: t('awards.visits.egekaf.title'),
      desc: t('awards.visits.egekaf.desc'),
      img: egekafVisit,
    },
    {
      title: t('awards.visits.msku.title'),
      desc: t('awards.visits.msku.desc'),
      img: mskuRectorVisit,
    },
  ]

  const tesciller = [
    { title: t('awards.tesciller.benelux'), country: t('factories.names.france', { defaultValue: 'Benelux' }), file: '/documents/tesciller/Benelux-Tescil.pdf' },
    { title: t('awards.tesciller.france'), country: t('factories.names.france'), file: '/documents/tesciller/Fransa-Tescil.pdf' },
    { title: t('awards.tesciller.spain'), country: t('factories.names.spain'), file: '/documents/tesciller/Ispanya-Tescil.pdf' },
    { title: t('awards.tesciller.egypt'), country: t('factories.names.egypt'), file: '/documents/tesciller/Misir-Tescil.pdf' },
    { title: t('awards.tesciller.greece'), country: t('factories.names.greece'), file: '/documents/tesciller/Yunanistan-Tescil.pdf' },
    { title: t('awards.tesciller.form'), country: t('factories.names.turkey'), file: '/documents/tesciller/Polgun-Basvuru-Formu.pdf' },
    { title: t('awards.tesciller.fluorescent'), country: t('factories.names.turkey'), file: '/documents/tesciller/Floresans-Patent.pdf' },
    { title: t('awards.tesciller.slides'), country: t('factories.names.turkey'), file: '/documents/tesciller/Su-Kaydiragi-Tasarim-Tescil.pdf' },
  ]

  const kaliteBelgeleri = [
    { title: 'ISO 9001:2015', desc: t('awards.kalite.iso9001'), file: '/documents/kalite/ISO-9001.pdf', icon: 'ISO' },
    { title: 'ISO 14001:2015', desc: t('awards.kalite.iso14001'), file: '/documents/kalite/ISO-14001.pdf', icon: 'ISO' },
    { title: 'ISO 45001:2018', desc: t('awards.kalite.iso45001'), file: '/documents/kalite/ISO-45001.pdf', icon: 'ISO' },
    { title: 'ISO 3834-2', desc: 'Çelik Konstrüksiyon İmalatı', file: '/documents/kalite/ISO-3834-2.pdf', icon: 'ISO' },
    { title: 'ASTM F2376-22', desc: 'Ürün Standart Belgesi', file: '/documents/kalite/ASTM-F2376-22.pdf', icon: 'ASTM' },
    { title: 'CPR 15473-1090', desc: 'Kaynak Sertifikası', file: '/documents/kalite/CPR-15473-1090.pdf', icon: 'CPR' },
    { title: 'TS-EN 1069', desc: 'Ürün Standart Belgesi', file: '/documents/kalite/TS-EN-1069.pdf', icon: 'TS-EN' },
    { title: 'TS-EN 1176-1', desc: 'Ürün Standart Belgesi', file: '/documents/kalite/TS-EN-1176-1.pdf', icon: 'TS-EN' },
    { title: 'TS-EN 17232', desc: 'Ürün Standart Belgesi', file: '/documents/kalite/TS-EN-17232.pdf', icon: 'TS-EN' },

  ]
  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Hero ── */}
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
                {t('awards.title')}
              </p>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span
                  className="block"
                  style={{
                    color: 'var(--th-primary)',
                    WebkitTextStroke: '15.5px var(--th-polgun-antrasit)',
                    paintOrder: 'stroke fill',
                  }}
                >
                  {t('nav.awards')}
                </span>
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('awards.desc', { defaultValue: 'Polgün’ün ulusal ve uluslararası arenada kazandığı başarılar, tesciller ve kalite standartları.' })}
            </p>
          </div>
        </div>
      </section>

      {/* ── Ödüller ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('awards.title')}</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>{t('awards.title')}</h2>
          </div>

          {/* Ödüller */}
          <div className="mb-20">
            <h3 className="text-xl font-black mb-10" style={{ color: 'var(--th-text)' }}>🏆 {t('awards.title')}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveAwards.length === 0 && (
                <p className="sm:col-span-2 lg:col-span-3 text-center text-sm" style={{ color: 'var(--th-text-muted)' }}>
                  {t('common.no_content')}
                </p>
              )}
              {liveAwards.map((award, i) => (
                <div key={i} className="rounded-2xl overflow-hidden group" style={{ backgroundColor: 'var(--th-bg)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div className={`overflow-hidden ${award.img2 ? 'grid grid-cols-2' : ''}`} style={{ aspectRatio: award.img2 ? 'auto' : '16/10' }}>
                    <img src={award.img} alt={award.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                    {award.img2 && <img src={award.img2} alt={award.title + ' 2'} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />}
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)', color: 'var(--th-polgun-blue)' }}>
                      {award.tag}
                    </span>
                    <h4 className="font-black text-base mb-3" style={{ color: 'var(--th-text)' }}>{award.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ziyaretler */}
          <div>
            <h3 className="text-xl font-black mb-10" style={{ color: 'var(--th-text)' }}>🤝 {t('awards.visits.title', { defaultValue: 'Kurumsal Ziyaretler' })}</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {visits.map((visit, i) => (
                <div key={i} className="rounded-2xl overflow-hidden group" style={{ backgroundColor: 'var(--th-bg)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div className="overflow-hidden">
                    <img src={visit.img} alt={visit.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-black text-base mb-3" style={{ color: 'var(--th-text)' }}>{visit.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{visit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, var(--th-polgun-blue), var(--th-primary))' }}>
            <h3 className="text-2xl font-black text-white mb-3">{t('home.cta_title')}</h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">{t('about.production_power_desc')}</p>
            <button
              onClick={() => setActivePage('contact')}
              className="px-8 py-3.5 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#fff', color: 'var(--th-primary-darker)' }}
            >
              {t('common.contact')}
            </button>
          </div>
        </div>
      </section>

      {/* ── Tesciller & Kalite Belgeleri ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Tesciller */}
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('awards.patent_title', { defaultValue: 'Fikri Mülkiyet' })}</p>
              <h2 className="text-3xl font-black mb-8" style={{ color: 'var(--th-text)' }}>{t('nav.awards')}</h2>
              <div className="flex flex-col gap-3">
                {tesciller.map((t, i) => (
                  <a key={i} href={t.file} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)' }}>
                    <div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full mr-2" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)', color: 'var(--th-polgun-blue)' }}>{t.country}</span>
                      <span className="text-sm font-semibold" style={{ color: 'var(--th-text)' }}>{t.title}</span>
                    </div>
                    <svg className="w-4 h-4 shrink-0 ml-3 group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--th-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Kalite Belgeleri */}
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('awards.cert_title', { defaultValue: 'Sertifikalar' })}</p>
              <h2 className="text-3xl font-black mb-8" style={{ color: 'var(--th-text)' }}>{t('awards.cert_subtitle', { defaultValue: 'Kalite Belgelerimiz' })}</h2>
              <div className="flex flex-col gap-3">
                {kaliteBelgeleri.map((kb, i) => (
                  <a key={i} href={kb.file} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-xs font-black tracking-wider" style={{ backgroundColor: 'color-mix(in srgb, var(--th-primary) 10%, transparent)', color: 'var(--th-primary)' }}>
                      {kb.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-black text-sm truncate" style={{ color: 'var(--th-text)' }}>{kb.title}</div>
                      <div className="text-xs mt-0.5 truncate" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>{kb.desc}</div>
                    </div>
                    <svg className="w-4 h-4 ml-auto shrink-0 group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--th-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
