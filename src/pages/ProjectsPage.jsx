// ============================================================
// PROJECTS PAGE — Gerçek görseller + CSS değişkenleri + glass efekt
// ============================================================
import { useState } from 'react'
import heroImage from '../assets/polgun-featured-projects-4.jpeg'
import eftaliaBlue from '../assets/products/eftalia-blue-antalya.png'
import nirvana from '../assets/products/nirvana-cosmopolitan-antalya.jpg'
import seignosse from '../assets/products/SeignosseAtlanticPark-fransa.webp'
import delphinPalace from '../assets/products/delphin-palace-antalya.jpg'

// ── Proje Verisi ───────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: 'AquaDream Water Park',
    location: 'İstanbul, Türkiye',
    year: '2023',
    type: 'Açık Hava Su Parkı',
    region: 'Türkiye & Orta Doğu',
    scope: ['12 Su Kaydırağı', 'Dalga Havuzu', 'Lazy River', 'Çocuk Alanı'],
    desc: 'İstanbul\'un en büyük su parkı projelerinden biri: 12 farklı kaydırak, dev dalga havuzu ve aile dostu tasarımıyla 2023 sezonunun gözdesi.',
    img: eftaliaBlue,
    imgAlt: 'AquaDream Water Park İstanbul',
  },
  {
    id: 2,
    name: 'OceanSplash Resort',
    location: 'Antalya, Türkiye',
    year: '2022',
    type: 'Otel & Tatil Köyü',
    region: 'Türkiye & Orta Doğu',
    scope: ['8 Kaydırak', 'Infinity Pool', 'Çocuk Parkı'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: seignosse,
    imgAlt: 'OceanSplash Resort Antalya',
  },
  {
    id: 3,
    name: 'Mega Wave Indoor Park',
    location: 'Varşova, Polonya',
    year: '2022',
    type: 'Kapalı Su Parkı',
    region: 'Avrupa',
    scope: ['Dalga Havuzu', '10 Kaydırak', 'FlowRider'],
    desc: 'Polonya\'nın ilk büyük ölçekli kapalı su parkı: dört mevsim açık, çocuklardan yetişkinlere her yaşa hitap eden etkinlikleri.',
    img: nirvana,
    imgAlt: 'Mega Wave Indoor Park Varşova',
  },
  {
    id: 4,
    name: 'Desert Oasis Water World',
    location: 'Dubai, BAE',
    year: '2021',
    type: 'Açık Hava Su Parkı',
    region: 'Türkiye & Orta Doğu',
    scope: ['20 Kaydırak', '2 Dalga Havuzu', 'Lazy River', 'Sörf Alanı'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: delphinPalace,
    imgAlt: 'Desert Oasis Water World Dubai',
  },
  {
    id: 5,
    name: 'AquaVenture Cruise',
    location: 'Akdeniz',
    year: '2021',
    type: 'Cruise Gemisi',
    region: 'Avrupa',
    scope: ['6 Kaydırak', 'Splash Zone', 'FlowRider'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: heroImage,
    imgAlt: 'AquaVenture Cruise gemisi',
  },
]

const REGIONS = ['Tümü', 'Türkiye & Orta Doğu', 'Avrupa', 'Asya Pasifik', 'Amerika']
const TYPES   = ['Tümü', 'Açık Hava Su Parkı', 'Kapalı Su Parkı', 'Otel & Tatil Köyü', 'Cruise Gemisi', 'Belediye & Kamu']

// ── Glass Etiket ───────────────────────────────────────────
function GlassTag({ children }) {
  return (
    <span
      className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
      style={{
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.2)',
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      {children}
    </span>
  )
}

export default function ProjectsPage({ setActivePage}) {
  const [region, setRegion] = useState('Tümü')
  const [type, setType]     = useState('Tümü')

  const filtered = PROJECTS.filter((p) =>
    (region === 'Tümü' || p.region === region) &&
    (type   === 'Tümü' || p.type   === type)
  )


  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                Proje Portföyümüz
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                Dünyaya<br />İz Bırakan<br />Projeler
              </h1>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      

      {/* ── Filtreler ── */}
      <div className=" top-[72px] z-30 border-b"
        style={{ backgroundColor: 'color-mix(in srgb,var(--th-bg) 97%,transparent)', backdropFilter: 'blur(12px)', borderColor: 'color-mix(in srgb,var(--th-border) 10%,transparent)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-4 flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black tracking-widest uppercase shrink-0"
              style={{ color: 'color-mix(in srgb,var(--th-text-muted) 50%,transparent)' }}>Bölge</span>
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={region === r
                  ? { backgroundColor: 'var(--th-primary)', color: '#fff' }
                  : { color: 'var(--th-text-muted)' }
                }
                onMouseEnter={(e) => { if (region !== r) e.currentTarget.style.backgroundColor = 'color-mix(in srgb,var(--th-primary) 10%,transparent)' }}
                onMouseLeave={(e) => { if (region !== r) e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="w-px h-5 hidden sm:block" style={{ backgroundColor: 'color-mix(in srgb,var(--th-border) 20%,transparent)' }} />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black tracking-widest uppercase shrink-0"
              style={{ color: 'color-mix(in srgb,var(--th-text-muted) 50%,transparent)' }}>Mekan</span>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={type === t
                  ? { backgroundColor: 'var(--th-polgun-blue)', color: '#fff' }
                  : { color: 'var(--th-text-muted)' }
                }
                onMouseEnter={(e) => { if (type !== t) e.currentTarget.style.backgroundColor = 'color-mix(in srgb,var(--th-polgun-blue) 10%,transparent)' }}
                onMouseLeave={(e) => { if (type !== t) e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projeler ── */}
      
        <section className="py-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
            <div className="grid lg:grid-cols-2 gap-6">
              {filtered.map((proj) => (
                <article
                  key={proj.id}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 24px 72px rgba(0,0,0,0.18)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'}
                >
                  {/* Gerçek görsel */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={proj.img}
                      alt={proj.imgAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.2) 50%,transparent 100%)' }} />
                  {/* İçerik */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full text-white"
                        style={{ backgroundColor: 'var(--th-polgun-blue)' }}>
                        {proj.type}
                      </span>
                      <GlassTag>{proj.year}</GlassTag>
                    </div>
                    <h2 className="text-2xl font-black text-white mb-1 transition-colors group-hover:opacity-90">
                      {proj.name}
                    </h2>
                    <p className="text-sm text-white/50 mb-4">{proj.location}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.scope.map((s) => (
                        <span key={s} className="text-[10px] text-white/60 border border-white/20 px-2.5 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-24" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 50%,transparent)' }}>
                <p className="text-lg font-semibold">Bu filtrede proje bulunamadı.</p>
              </div>
            )}
          </div>
        </section>


      {/* ── CTA ── */}
      <section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
          <div className="relative rounded-3xl overflow-hidden px-12 py-20" style={{ background: 'linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 1400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <circle cx="200" cy="150" r="250" fill="white"/>
                <circle cx="1200" cy="150" r="200" fill="white"/>
              </svg>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div>
                <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-3 text-white/50">Sonraki Proje</p>
                <h2 className="text-3xl font-black text-white">Projeniz bu listede olsun.</h2>
                <p className="text-white/40 mt-2 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <button
                onClick={() => setActivePage('contact')}
                className="shrink-0 px-10 py-4 text-white font-bold text-sm rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', color: 'var(--th-primary-darker)', boxShadow: '0 0 40px rgba(0,0,0,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Projeyi Başlat
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
