import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
// ============================================================
// ABOUT PAGE — Gerçek metinler + Ödüller & Ziyaretler bölümü
// ============================================================
import heroImage from '../assets/polgun-featured-projects-4.avif'

// Ziyaret görselleri
import egekafVisit from '../assets/awards/egekaf-visit.avif'
import mskuRectorVisit from '../assets/awards/msku-rector-visit.avif'
import techVisit from '../assets/awards/tech-visit.png'

// Üretim görselleri
import entegre_depo from '../assets/production/1.jpg'
import model_kalıp from '../assets/production/2.png'
import elyaf from '../assets/production/3.jpg'
import kompozit from '../assets/production/4.jpg'
import çelik_işleme from '../assets/production/5.png'
import çelik_konstrüksiyon from '../assets/production/6.png'
import mekanik from '../assets/production/7.png'
import boya from '../assets/production/8.png'
import kalite from '../assets/production/9.jpg'
import paketleme from '../assets/production/10.jpeg'



// Fabrika görselleri
import bursaFactory from '../assets/factories/bursa-factory.avif'
import istanbulFactory from '../assets/factories/istanbul-factory.png'
import muglaFactory from '../assets/factories/mugla-factory.avif'

import logoPolgunDefault from '../assets/brands/Polgün.avif'
import logoEuropeWaterparks from '../assets/brands/Polgün Europe Waterparks&Attractions.avif'
import logoEurope from '../assets/brands/Polgün Europe.avif'
import logoKids from '../assets/brands/Polgün Kids.avif'
import logoWaterparks from '../assets/brands/Polgün Waterparks&Attractions.avif'

const BRANDS_DATA = [
  {
    id: 1,
    name: 'Polgün Su Kaydırakları İmalatı',
    appNo: '2013/29561',
    scope: 'national',
    country: '',
    status: 'registered',
    appDate: '22.11.2013',
    regDate: '24.09.2014',
    logo: logoPolgunDefault
  },
  {
    id: 2,
    name: 'Polgün',
    appNo: '2019/29569',
    scope: 'national',
    country: '',
    status: 'registered',
    appDate: '22.03.2019',
    regDate: '02.09.2019',
    logo: logoPolgunDefault
  },
  {
    id: 3,
    name: 'Polgün Waterparks & Attractions',
    appNo: '2019/29565',
    scope: 'national',
    country: '',
    status: 'registered',
    appDate: '22.03.2019',
    regDate: '03.09.2019',
    logo: logoWaterparks
  },
  {
    id: 4,
    name: 'Polgün EUROPE',
    appNo: '2019/29561',
    scope: 'national',
    country: '',
    status: 'registered',
    appDate: '22.03.2019',
    regDate: '10.09.2019',
    logo: logoEurope
  },
  {
    id: 5,
    name: 'Polgün EUROPE Waterparks & Attractions',
    appNo: '2019/29566',
    scope: 'national',
    country: '',
    status: 'registered',
    appDate: '22.03.2019',
    regDate: '06.11.2019',
    logo: logoEuropeWaterparks
  },
  {
    id: 6,
    name: 'WIPO Madrid – Yunanistan',
    appNo: '2023-GE-613330',
    scope: 'international',
    country: 'Yunanistan',
    status: 'registered',
    appDate: '19.09.2023',
    regDate: '19.09.2023',
    logo: logoPolgunDefault
  },
  {
    id: 7,
    name: 'WIPO Madrid – Mısır',
    appNo: '2023-GE-613330',
    scope: 'international',
    country: 'Mısır',
    status: 'registered',
    appDate: '19.09.2023',
    regDate: '19.09.2023',
    logo: logoPolgunDefault
  },
  {
    id: 8,
    name: 'WIPO Madrid – İspanya',
    appNo: '2023-GE-613330',
    scope: 'international',
    country: 'İspanya',
    status: 'registered',
    appDate: '19.09.2023',
    regDate: '19.09.2023',
    logo: logoPolgunDefault
  },
  {
    id: 9,
    name: 'WIPO Madrid – Fransa',
    appNo: '2023-GE-613330',
    scope: 'international',
    country: 'Fransa',
    status: 'registered',
    appDate: '19.09.2023',
    regDate: '19.09.2023',
    logo: logoPolgunDefault
  },
  {
    id: 10,
    name: 'WIPO Madrid – Benelüks',
    appNo: '2023-GE-613330',
    scope: 'international',
    country: 'Benelüks',
    status: 'registered',
    appDate: '19.09.2023',
    regDate: '19.09.2023',
    logo: logoPolgunDefault
  },
  {
    id: 11,
    name: 'Polgün Kids',
    appNo: '2023/124959',
    scope: 'national',
    country: '',
    status: 'registered',
    appDate: '22.09.2023',
    regDate: '19.01.2024',
    logo: logoKids
  },
  {
    id: 12,
    name: 'ABD',
    appNo: '2024/21388717',
    scope: 'international',
    country: 'ABD',
    status: 'pending',
    appDate: '18.11.2024',
    regDate: '—',
    logo: logoPolgunDefault
  }
]

export default function AboutPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [liveAwards, setLiveAwards] = useState([])
  const [brandFilter, setBrandFilter] = useState('all')

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

  useEffect(() => {
    const anchor = searchParams.get('anchor') || (location.hash ? location.hash.replace('#', '') : null)
    if (anchor) {
      const timer = setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) {
          const yOffset = -100
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.pageYOffset + yOffset,
            behavior: 'smooth'
          })
        }
      }, 150)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [searchParams, location.search, location.hash])

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


  const productionSections = [
    { id: 'entegre_depo', img: entegre_depo },
    { id: 'model_kalıp', img: model_kalıp },
    { id: 'elyaf', img: elyaf },
    { id: 'kompozit', img: kompozit },
    { id: 'çelik_işleme', img: çelik_işleme },
    { id: 'çelik_konstrüksiyon', img: çelik_konstrüksiyon },
    { id: 'mekanik', img: mekanik },
    { id: 'boya', img: boya },
    { id: 'kalite', img: kalite },
    { id: 'paketleme', img: paketleme },
  ]

  const factories = [
    { city: t('factories.names.mugla'), label: t('about.factories.mugla.label'), desc: t('about.factories.mugla.desc'), img: muglaFactory },
    { city: t('factories.names.bursa'), label: t('about.factories.bursa.label'), desc: t('about.factories.bursa.desc'), img: bursaFactory },
    { city: t('factories.names.istanbul'), label: t('about.factories.istanbul.label'), desc: t('about.factories.istanbul.desc'), img: istanbulFactory },
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
    { title: 'ISO 3834-2', desc: t('awards.kalite.iso3834', { defaultValue: 'Çelik Konstrüksiyon İmalatı' }), file: '/documents/kalite/ISO-3834-2.pdf', icon: 'ISO' },
    { title: 'ASTM F2376-22', desc: t('awards.kalite.astm', { defaultValue: 'Ürün Standart Belgesi' }), file: '/documents/kalite/ASTM-F2376-22.pdf', icon: 'ASTM' },
    { title: 'CPR 15473-1090', desc: t('awards.kalite.cpr', { defaultValue: 'Kaynak Sertifikası' }), file: '/documents/kalite/CPR-15473-1090.pdf', icon: 'CPR' },
    { title: 'TS-EN 1069', desc: t('awards.kalite.ts_en_1069', { defaultValue: 'Ürün Standart Belgesi' }), file: '/documents/kalite/TS-EN-1069.pdf', icon: 'TS-EN' },
    { title: 'TS-EN 1176-1', desc: t('awards.kalite.ts_en_1176', { defaultValue: 'Ürün Standart Belgesi' }), file: '/documents/kalite/TS-EN-1176-1.pdf', icon: 'TS-EN' },
    { title: 'TS-EN 17232', desc: t('awards.kalite.ts_en_17232', { defaultValue: 'Ürün Standart Belgesi' }), file: '/documents/kalite/TS-EN-17232.pdf', icon: 'TS-EN' },
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
                {t('nav.about')}
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
                  {t('about.experience')}
                </span>
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed text-justify">
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
              <p className="text-xs  font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>{t('nav.about')}</p>
              <h2 className="text-4xl font-black leading-tight mb-8" style={{ color: 'var(--th-text)' }}>
                {t('about.power_title')}
              </h2>
              <p className="text-justify leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.power_desc1')}
              </p>
              <p className="text-justify leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.power_desc2')}
              </p>
              <p className="text-justify leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.power_desc3')}
              </p>
            </div>
            <img src={heroImage} alt="Polgün Waterpark" className="w-full aspect-[4/3] rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* ── Üretim Altyapımız ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('about.production_title')}</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>{t('about.production_subtitle')}</h2>
            <p className="max-w-2xl mx-auto text-justify leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('about.production_desc')}
            </p>
          </div>
          <div className="flex flex-col gap-24">
            {productionSections.map((sec, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <h3 className="text-2xl font-black mb-5" style={{ color: 'var(--th-text)' }}>{t('about.production_sections.' + sec.id + '.title')}</h3>
                  <p className="text-justify leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{t('about.production_sections.' + sec.id + '.desc')}</p>
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
            <p className="mb-8 max-w-lg mx-auto text-center" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('about.production_power_desc')}
            </p>
            <button
              onClick={() => navigate('/projects')}
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

      {/* ── Ar-Ge Merkezi ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>{t('nav.arge')}</p>
              <h2 className="text-3xl font-black leading-tight mb-6" style={{ color: 'var(--th-text)' }}>
                {t('about.arge_title')}
              </h2>
              <p className="text-justify leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.arge_desc1')}
              </p>
              <p className="text-justify leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.arge_desc2')}
              </p>
              <p className="text-justify leading-relaxed mb-8" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                {t('about.arge_desc3')}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--th-polgun-blue) 15%, transparent)' }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: 'var(--th-polgun-blue)' }}>{t('about.misyon')}</p>
                  <p className="text-sm text-justify leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                    {t('about.misyon_desc')}
                  </p>
                </div>
                <div className="p-5 rounded-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--th-primary) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--th-primary) 15%, transparent)' }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: 'var(--th-primary)' }}>{t('about.vizyon')}</p>
                  <p className="text-sm text-justify leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
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


      {/* ── Markalarımız Bölümü ── */}
      <section id="markalar" className="py-28" style={{ backgroundColor: 'var(--th-surface)', borderTop: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)', borderBottom: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">

          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>
              {t('arge.brands_tag', { defaultValue: 'FİKRİ MÜLKİYET' })}
            </p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>
              {t('arge.brands_title', { defaultValue: 'Markalarımız' })}
            </h2>
            <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              {t('arge.brands_desc', { defaultValue: 'Polgün’ün ulusal ve uluslararası tescilli marka kayıtları, küresel pazardaki özgün kimliğimizi ve güvenirliğimizi temsil etmektedir.' })}
            </p>
          </div>

          {/* Filtre Yapısı */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { key: 'all', label: t('patentsPage.filter.all', { defaultValue: 'Tümü' }) },
              { key: 'national', label: t('arge.national', { defaultValue: 'Ulusal' }) },
              { key: 'international', label: t('arge.international', { defaultValue: 'Uluslararası' }) },
              { key: 'registered', label: t('arge.registered', { defaultValue: 'Tescilli' }) },
              { key: 'pending', label: t('arge.pending', { defaultValue: 'Başvuru Aşamasında' }) }
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setBrandFilter(f.key)}
                className="px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border"
                style={{
                  backgroundColor: brandFilter === f.key ? 'var(--th-primary)' : 'var(--th-bg)',
                  color: brandFilter === f.key ? '#fff' : 'var(--th-text)',
                  borderColor: brandFilter === f.key ? 'var(--th-primary)' : 'color-mix(in srgb, var(--th-border) 10%, transparent)',
                  boxShadow: brandFilter === f.key ? '0 4px 14px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Marka Kartları Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRANDS_DATA.filter((b) => {
              if (brandFilter === 'all') return true;
              if (brandFilter === 'national') return b.scope === 'national';
              if (brandFilter === 'international') return b.scope === 'international';
              if (brandFilter === 'registered') return b.status === 'registered';
              if (brandFilter === 'pending') return b.status === 'pending';
              return true;
            }).map((brand) => (
              <div
                key={brand.id}
                className="group rounded-3xl overflow-hidden flex flex-row transition-all duration-300 hover:shadow-2xl hover:shadow-black/5"
                style={{
                  backgroundColor: 'var(--th-bg)',
                  border: '1px solid color-mix(in srgb, var(--th-border) 10%, transparent)'
                }}
              >
                {/* Sol Kısım: Logo */}
                <div className="w-[110px] sm:w-[140px] shrink-0 p-4 flex items-center justify-center bg-white border-r" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 8%, transparent)' }}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-[50px] max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Sağ Kısım: Detaylar */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Kapsam & Durum */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                        {brand.scope === 'national' ? t('arge.national', { defaultValue: 'Ulusal' }) : t('arge.international', { defaultValue: 'Uluslararası' })}
                      </span>

                      <span
                        className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${brand.status === 'registered'
                          ? 'bg-emerald-500/10 text-emerald-600'
                          : 'bg-amber-500/10 text-amber-600'
                          }`}
                      >
                        {brand.status === 'registered' ? t('arge.registered', { defaultValue: 'Tescilli' }) : t('arge.pending', { defaultValue: 'Başvuru Aşamasında' })}
                      </span>
                    </div>

                    {/* Marka Adı */}
                    <h3 className="text-sm font-black leading-snug" style={{ color: 'var(--th-text)' }}>
                      {brand.name}
                    </h3>

                    {/* Uluslararası Kapsanan Ülke */}
                    {brand.scope === 'international' && brand.country && (
                      <div className="flex items-center gap-1.5 text-[10px] font-bold" style={{ color: 'var(--th-polgun-blue)' }}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m-4-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        <span>{brand.country}</span>
                      </div>
                    )}
                  </div>

                  {/* Properties Table */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-3 border-t text-[10px]" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 8%, transparent)' }}>
                    <div>
                      <span className="block text-[8px] font-bold uppercase tracking-wider mb-0.5" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                        {t('patentsPage.card.app_no', { defaultValue: 'Başvuru No' })}
                      </span>
                      <span className="font-extrabold" style={{ color: 'var(--th-text)' }}>
                        {brand.appNo}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] font-bold uppercase tracking-wider mb-0.5" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                        {t('arge.app_date', { defaultValue: 'Başvuru Tarihi' })}
                      </span>
                      <span className="font-extrabold" style={{ color: 'var(--th-text)' }}>
                        {brand.appDate}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="block text-[8px] font-bold uppercase tracking-wider mb-0.5" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                        {t('arge.reg_date', { defaultValue: 'Tescil Tarihi' })}
                      </span>
                      <span className="font-extrabold" style={{ color: 'var(--th-text)' }}>
                        {brand.regDate}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
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
            <h3 className="text-xl font-black mb-10" style={{ color: 'var(--th-text)' }}>🤝 {t('awards.visits.title', { defaultValue: 'Kurumsal Ziyaretler' })}</h3>
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
              onClick={() => navigate('/contact')}
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
            <p className="leading-relaxed text-justify mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('history.desc1')}
            </p>
            <p className="leading-relaxed text-justify mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              {t('history.desc2')}
            </p>
            <p className="leading-relaxed text-justify font-bold" style={{ color: 'var(--th-polgun-blue)' }}>
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
                  <p className="text-sm text-justify  leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{fac.desc}</p>
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
            <div id="sertifikalar" className="scroll-mt-28">
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
