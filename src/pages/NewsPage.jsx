// ============================================================
// NEWS PAGE — Haberler & Etkinlikler
// ============================================================
import { useEffect } from 'react'

import rdconf2025 from '../assets/awards/rdconf-2025.png'
import rdconf2024 from '../assets/awards/rdconf-2024.png'
import iaapaBrassRing1 from '../assets/awards/iaapa-brass-ring-1.png'
import egekafVisit from '../assets/awards/egekaf-visit.jpeg'
import mskuRectorVisit from '../assets/awards/msku-rector-visit.jpeg'
import designInnovation from '../assets/awards/design-innovation-award.jpeg'

const NEWS = [
  {
    date: '2025',
    tag: 'Ödül',
    title: 'Eclipse ile RDCONF 2025 En İnovatif Proje Ödülü',
    desc: 'Polgün, Eclipse su kaydırağı projesiyle RDCONF Ar-Ge ve İnovasyon Ödülleri\'nde En İnovatif Proje kategorisinde üçüncülük elde etti.',
    img: rdconf2025,
  },
  {
    date: '2024',
    tag: 'Ödül',
    title: 'RDCONF 2024 Ar-Ge ve İnovasyon Başarısı',
    desc: 'Polgün, Ar-Ge ve inovasyon odaklı ürün geliştirme çalışmalarıyla RDCONF 2024 kapsamında ödüle layık görüldü.',
    img: rdconf2024,
  },
  {
    date: '2024',
    tag: 'Uluslararası',
    title: 'IAAPA Expo Orlando — Brass Ring Ödülü',
    desc: 'Polgün bünyesindeki Navatu markası, IAAPA Expo Orlando\'da Brass Ring ödülüne layık görüldü. Bu ödül, küresel eğlence endüstrisinin en prestijli ödülleri arasında yer almaktadır.',
    img: iaapaBrassRing1,
  },
  {
    date: '2024',
    tag: 'Etkinlik',
    title: 'Tasarım ve İnovasyon Zirvesi',
    desc: 'Polgün, yenilikçi ürün geliştirme ve tasarım odaklı yaklaşımıyla Tasarım ve İnovasyon Zirvesi kapsamında ödüle layık görüldü.',
    img: designInnovation,
  },
  {
    date: '2024',
    tag: 'Ziyaret',
    title: 'EGEKAF Kapsamında Polgün Ziyareti',
    desc: 'EGEKAF kapsamında gerçekleşen ziyarette; Polgün\'ün proje maketleri, ürün geliştirme yaklaşımı ve sektörel deneyimi katılımcılarla paylaşıldı.',
    img: egekafVisit,
  },
  {
    date: '2023',
    tag: 'Ziyaret',
    title: 'Muğla Sıtkı Koçman Üniversitesi Rektör Ziyareti',
    desc: 'MSKÜ yönetiminin Polgün ziyareti kapsamında; şirketin proje geliştirme, Ar-Ge, üretim ve tasarım faaliyetleri yerinde incelendi.',
    img: mskuRectorVisit,
  },
]

export default function NewsPage({ setActivePage }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Medya</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
            Haberler &<br />Etkinlikler
          </h1>
        </div>
      </section>

      {/* ── News Grid ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl overflow-hidden group flex flex-col"
                style={{
                  backgroundColor: 'var(--th-bg)',
                  border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                <div className="overflow-hidden aspect-[16/10]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)',
                        color: 'var(--th-polgun-blue)',
                      }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-black text-lg mb-3 leading-snug" style={{ color: 'var(--th-text)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
