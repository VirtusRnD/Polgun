// ============================================================
// HISTORY PAGE — Tarihçemiz
// ============================================================
import { useEffect } from 'react'

import bursaFactory from '../assets/factories/bursa-factory.avif'
import istanbulFactory from '../assets/factories/istanbul-factory.avif'
import muglaFactory from '../assets/factories/mugla-factory.avif'

const FACTORIES = [
  { city: 'Muğla', label: 'Merkez Üretim Tesisi', desc: 'Ana üretim ve Ar-Ge merkezi. Çelik konstrüksiyon, kompozit üretim ve dijital imalat altyapısının bulunduğu merkez tesis.', img: muglaFactory },
  { city: 'Bursa', label: 'Bursa Üretim Tesisi', desc: 'Polgün\'ün kuzey üretim merkezi. Çelik parça imalatı ve yarı mamul üretiminin yapıldığı tesis.', img: bursaFactory },
  { city: 'İstanbul', label: 'Marmara Teknopark', desc: 'Ar-Ge ve inovasyon çalışmalarının yürütüldüğü Marmara Teknopark ofisi. Yeni ürün geliştirme ve teknik analiz merkezi.', img: istanbulFactory },
]

const MILESTONES = [
  { year: '2002', event: 'Polgün, Muğla-Menteşe\'de faaliyete başladı.' },
  { year: '2008', event: 'İlk uluslararası proje teslimatı gerçekleştirildi.' },
  { year: '2015', event: 'Üretim kapasitesi artırılarak yeni tesisler devreye alındı.' },
  { year: '2021', event: 'Bakanlık onaylı Ar-Ge Merkezi statüsü kazanıldı — Muğla\'nın ilk ve tek Ar-Ge Merkezi.' },
  { year: '2022', event: 'Antalya fabrikası kuruldu, İspanya ofisi açıldı.' },
  { year: '2024', event: 'Bursa fabrika yatırımıyla toplam 120.000 m² üretim alanına ulaşıldı.' },
  { year: '2025', event: 'Marmara Teknopark ofisi ile üniversite-sanayi iş birliği güçlendirildi.' },
]

export default function HistoryPage({ setActivePage }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Tarihçemiz</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
            2002'den Bugüne<br />Polgün Yolculuğu
          </h1>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Kilometre Taşları</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>Büyüme Hikayemiz</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 20%, transparent)' }} />

            <div className="flex flex-col gap-10">
              {MILESTONES.map((m, i) => (
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
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Tesislerimiz</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>Büyüyen Üretim Gücü</h2>
          </div>
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              Polgün, artan kapasite ihtiyacını karşılamak ve üretim kabiliyetlerini ileriye taşımak amacıyla altyapı yatırımlarını kesintisiz sürdürmekte; Muğla'daki mevcut tesislerinde polyester, termoplastik kaplama ve boyama süreçlerine yönelik yeni üretim alanları oluştururken, Bursa'daki yeni fabrika yatırımıyla birlikte toplam 120.000 m² üretim alanına ulaşarak uluslararası ölçekte büyüyen operasyonel gücünü pekiştirmektedir.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              Ar-Ge ve Tasarım yetkinliğini daha da ileri taşımak amacıyla Marmara Teknokent ofisi için başvuru süreci tamamlanmış ve sözleşme imzalanarak yapılanma resmiyet kazanmıştır. Bu yapılanma ile üniversite iş birliklerinin güçlendirilmesi hedeflenmektedir.
            </p>
            <p className="leading-relaxed font-bold" style={{ color: 'var(--th-polgun-blue)' }}>
              Bugün Polgün, Türkiye'deki üretim yapılanması ve İspanya'daki satış ofisiyle, uluslararası pazardaki konumunu güçlendirmektedir.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACTORIES.map((fac, i) => (
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
