import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// ============================================================
// ABOUT PAGE — Gerçek metinler + Ödüller & Ziyaretler bölümü
// ============================================================
import heroImage from '../assets/polgun-featured-projects-4.avif'

// Ziyaret görselleri
import egekafVisit from '../assets/awards/egekaf-visit.avif'
import mskuRectorVisit from '../assets/awards/msku-rector-visit.avif'

// Üretim görselleri
import cncOperator from '../assets/production/cnc-operator.avif'
import pipeCutting from '../assets/production/pipe-cutting.avif'
import paintApplication from '../assets/production/paint-application.avif'
import inotekCnc from '../assets/production/inotek-cnc.avif'
import compositeControl from '../assets/production/composite-control.avif'
import mechanicalOperator from '../assets/production/mechanical-operator.avif'
import cncCutting from '../assets/production/cnc-cutting.avif'

// Fabrika görselleri
import bursaFactory from '../assets/factories/bursa-factory.avif'
import istanbulFactory from '../assets/factories/istanbul-factory.avif'
import muglaFactory from '../assets/factories/mugla-factory.avif'

export default function AboutPage({ setActivePage }) {
  const { t } = useTranslation()
  const [liveAwards, setLiveAwards] = useState([])

  useEffect(() => {
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

  const productionSections = [
    { id: 'cnc_mold', img: inotekCnc },
    { id: 'steel', img: cncCutting, img2: pipeCutting },
    { id: 'mechanical', img: mechanicalOperator },
    { id: 'composite', img: paintApplication, img2: compositeControl },
    { id: 'digital', img: cncOperator },
  ]

  const factories = [
    { city: t('factories.names.mugla'), label: t('about.factories.mugla.label'), desc: t('about.factories.mugla.desc'), img: muglaFactory },
    { city: t('factories.names.bursa'), label: t('about.factories.bursa.label'), desc: t('about.factories.bursa.desc'), img: bursaFactory },
    { city: t('factories.names.istanbul'), label: t('about.factories.istanbul.label'), desc: t('about.factories.istanbul.desc'), img: istanbulFactory },
  ]

  const tesciller = [
    { title: t('awards.tesciller.benelux'), country: t('factories.names.france', {defaultValue: 'Benelux'}), file: '/documents/tesciller/Benelux-Tescil.pdf' },
    { title: t('awards.tesciller.france'), country: t('factories.names.france'), file: '/documents/tesciller/Fransa-Tescil.pdf' },
    { title: t('awards.tesciller.spain'), country: t('factories.names.spain'), file: '/documents/tesciller/Ispanya-Tescil.pdf' },
    { title: t('awards.tesciller.egypt'), country: t('factories.names.egypt'), file: '/documents/tesciller/Misir-Tescil.pdf' },
    { title: t('awards.tesciller.greece'), country: t('factories.names.greece'), file: '/documents/tesciller/Yunanistan-Tescil.pdf' },
    { title: t('awards.tesciller.form'), country: t('factories.names.turkey'), file: '/documents/tesciller/Polgun-Basvuru-Formu.pdf' },
    { title: t('awards.tesciller.fluorescent'), country: t('factories.names.turkey'), file: '/documents/tesciller/Floresans-Patent.pdf' },
    { title: t('awards.tesciller.slides'), country: t('factories.names.turkey'), file: '/documents/tesciller/Su-Kaydiragi-Tasarim-Tescil.pdf' },
  ]

  const kaliteBelgeleri = [
    { title: 'ISO 9001:2015', desc: t('awards.kalite.iso9001'), file: '/documents/kalite/ISO-9001.pdf' },
    { title: 'ISO 14001:2015', desc: t('awards.kalite.iso14001'), file: '/documents/kalite/ISO-14001.pdf' },
    { title: 'ISO 45001:2018', desc: t('awards.kalite.iso45001'), file: '/documents/kalite/ISO-45001.pdf' },
  ]

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('nav.about')}
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
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
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
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
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
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('about.production_title')}</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>{t('about.production_subtitle')}</h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('about.production_desc')}
            </p>
          </div>
          <div className="flex flex-col gap-24">
            {productionSections.map((sec, i) => (
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

      {/* ── Ödüller & Ziyaretler ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
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
                <div key={i} className="rounded-2xl overflow-hidden group" style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
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
            <h3 className="text-xl font-black mb-10" style={{ color: 'var(--th-text)' }}>🤝 {t('awards.visits.title', {defaultValue: 'Kurumsal Ziyaretler'})}</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {visits.map((visit, i) => (
                <div key={i} className="rounded-2xl overflow-hidden group" style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
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

      {/* ── Tarihçe ve Fabrikalarımız ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
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
              <div key={i} className="rounded-2xl overflow-hidden group" style={{ backgroundColor: 'var(--th-bg)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
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

      {/* ── Tesciller & Kalite Belgeleri ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Tesciller */}
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('awards.patent_title', {defaultValue: 'Fikri Mülkiyet'})}</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Kalite Belgeleri */}
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('awards.cert_title', {defaultValue: 'Sertifikalar'})}</p>
              <h2 className="text-3xl font-black mb-8" style={{ color: 'var(--th-text)' }}>{t('awards.cert_subtitle', {defaultValue: 'Kalite Belgelerimiz'})}</h2>
              <div className="flex flex-col gap-4">
                {kaliteBelgeleri.map((kb, i) => (
                  <a key={i} href={kb.file} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 group"
                    style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-xl font-black" style={{ backgroundColor: 'color-mix(in srgb, var(--th-primary) 10%, transparent)', color: 'var(--th-primary)' }}>
                      ISO
                    </div>
                    <div>
                      <div className="font-black" style={{ color: 'var(--th-text)' }}>{kb.title}</div>
                      <div className="text-sm mt-0.5" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>{kb.desc}</div>
                    </div>
                    <svg className="w-4 h-4 ml-auto shrink-0 group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--th-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
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
