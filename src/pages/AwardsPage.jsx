// ============================================================
// AWARDS PAGE — Ödüller & Patent
// ============================================================
import { useEffect } from 'react'

// Ödüller görselleri
import rdconf2024 from '../assets/awards/rdconf-2024.png'
import rdconf2025 from '../assets/awards/rdconf-2025.png'
import bestBusinessman from '../assets/awards/best-businessman-award.jpg'
import designInnovation from '../assets/awards/design-innovation-award.jpeg'
import iaapaBrassRing1 from '../assets/awards/iaapa-brass-ring-1.png'
import iaapaBrassRing2 from '../assets/awards/iaapa-brass-ring-2.png'
import egekafVisit from '../assets/awards/egekaf-visit.jpeg'
import mskuRectorVisit from '../assets/awards/msku-rector-visit.jpeg'

const AWARDS = [
  {
    tag: 'IAAPA Expo Orlando – Brass Ring',
    title: 'IAAPA Brass Ring Ödülü',
    desc: 'Polgün bünyesindeki Navatu markası, IAAPA Expo Orlando\'da Brass Ring ödülüne layık görüldü. IAAPA Brass Ring Ödülleri, küresel eğlence endüstrisinin en prestijli ödülleri arasında yer almaktadır.',
    img: iaapaBrassRing1,
    img2: iaapaBrassRing2,
  },
  {
    tag: 'RDCONF Ar-Ge ve İnovasyon Ödülleri 2025',
    title: 'Eclipse ile En İnovatif Proje Ödülü',
    desc: 'Polgün, Eclipse su kaydırağı projesiyle RDCONF Ar-Ge ve İnovasyon Ödülleri\'nde En İnovatif Proje kategorisinde üçüncülük elde etti. Eclipse; hidrodinamik akış kontrolü, geometri odaklı tasarım ve kullanıcı deneyimini bir araya getiren yeni nesil bir su kaydırağı yaklaşımını temsil etmektedir.',
    img: rdconf2025,
  },
  {
    tag: 'RDCONF 2024',
    title: 'RDCONF Ar-Ge ve İnovasyon Başarısı',
    desc: 'Polgün, Ar-Ge ve inovasyon odaklı ürün geliştirme çalışmalarıyla RDCONF 2024 kapsamında ödüle layık görüldü. Bu başarı; tasarım, mühendislik ve kullanıcı deneyimini bütüncül biçimde ele alan proje geliştirme yaklaşımımızı yansıtmaktadır.',
    img: rdconf2024,
  },
  {
    tag: 'Ege\'nin Enleri Ödül Töreni',
    title: 'En İyi İş İnsanı Ödülü',
    desc: 'Polgün\'ün üretim, yatırım, istihdam ve yenilik odaklı büyüme yaklaşımı; Ege\'nin Enleri Ödül Töreni\'nde En İyi İş İnsanı Ödülü ile takdir edildi. Ödül, şirketin bölgesel kalkınmaya ve sürdürülebilir değer üretimine sağladığı katkıyı temsil etmektedir.',
    img: bestBusinessman,
  },
  {
    tag: 'Tasarım ve İnovasyon Zirvesi',
    title: 'Tasarım ve İnovasyon Alanında Takdir',
    desc: 'Polgün, yenilikçi ürün geliştirme ve tasarım odaklı yaklaşımıyla Tasarım ve İnovasyon Zirvesi kapsamında ödüle layık görüldü. Bu başarı; Ar-Ge kültürümüzün, ekip çalışmasının ve özgün ürün geliştirme vizyonumuzun bir sonucudur.',
    img: designInnovation,
  },
]

const VISITS = [
  {
    title: 'EGEKAF Kapsamında Polgün Ziyareti',
    desc: 'EGEKAF kapsamında gerçekleşen ziyarette; Polgün\'ün proje maketleri, ürün geliştirme yaklaşımı ve sektörel deneyimi katılımcılarla paylaşıldı. Ziyaret süresince tasarım ve üretim süreçleri hakkında bilgi verildi.',
    img: egekafVisit,
  },
  {
    title: 'Muğla Sıtkı Koçman Üniversitesi Ziyareti',
    desc: 'Muğla Sıtkı Koçman Üniversitesi yönetiminin Polgün ziyareti kapsamında; şirketin proje geliştirme, Ar-Ge, üretim ve tasarım faaliyetleri yerinde incelendi. Ziyaret, üniversite-sanayi iş birliği ve bilgi paylaşımı açısından değerli bir buluşma niteliği taşıdı.',
    img: mskuRectorVisit,
  },
]

const TESCILLER = [
  { title: 'Benelux Tescil Kesinlik Kararı', country: 'Benelux', file: '/documents/tesciller/Benelux-Tescil.pdf' },
  { title: 'Fransa Tescil Kesinlik Kararı', country: 'Fransa', file: '/documents/tesciller/Fransa-Tescil.pdf' },
  { title: 'İspanya Tescil Kesinlik Kararı', country: 'İspanya', file: '/documents/tesciller/Ispanya-Tescil.pdf' },
  { title: 'Mısır Tescil Kesinlik Kararı', country: 'Mısır', file: '/documents/tesciller/Misir-Tescil.pdf' },
  { title: 'Yunanistan Tescil Kesinlik Kararı', country: 'Yunanistan', file: '/documents/tesciller/Yunanistan-Tescil.pdf' },
  { title: 'Polgün Başvuru Formu', country: 'Türkiye', file: '/documents/tesciller/Polgun-Basvuru-Formu.pdf' },
  { title: 'Floresans Işıklandırma Patent Belgesi', country: 'Türkiye', file: '/documents/tesciller/Floresans-Patent.pdf' },
  { title: 'Su Kaydırağı Tasarım Tescil Onaylı', country: 'Türkiye', file: '/documents/tesciller/Su-Kaydiragi-Tasarim-Tescil.pdf' },
]

const KALITE_BELGELERI = [
  { title: 'ISO 9001:2015', desc: 'Kalite Yönetim Sistemi', file: '/documents/kalite/ISO-9001.pdf' },
  { title: 'ISO 14001:2015', desc: 'Çevre Yönetim Sistemi', file: '/documents/kalite/ISO-14001.pdf' },
  { title: 'ISO 45001:2018', desc: 'İş Sağlığı ve Güvenliği', file: '/documents/kalite/ISO-45001.pdf' },
]

export default function AwardsPage({ setActivePage }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Başarılarımız</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
            Ödüller, Patentler<br />& Sertifikalar
          </h1>
        </div>
      </section>

      {/* ── Ödüller ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Başarılarımız</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>Ödüller ve Ziyaretler</h2>
          </div>

          {/* Ödüller */}
          <div className="mb-20">
            <h3 className="text-xl font-black mb-10" style={{ color: 'var(--th-text)' }}>🏆 Ödüllerimiz</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AWARDS.map((award, i) => (
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
            <h3 className="text-xl font-black mb-10" style={{ color: 'var(--th-text)' }}>🤝 Kurumsal Ziyaretler</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {VISITS.map((visit, i) => (
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
            <h3 className="text-2xl font-black text-white mb-3">Yenilikçi Projelerle Geleceği Tasarlıyoruz.</h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Polgün, tasarım ve mühendislik yetkinliğini Ar-Ge çalışmalarıyla birleştirerek su parkı sektörüne değer katan yenilikçi çözümler geliştirmeye devam etmektedir.</p>
            <button
              onClick={() => setActivePage('contact')}
              className="px-8 py-3.5 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#fff', color: 'var(--th-primary-darker)' }}
            >
              İletişime Geç
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
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Fikri Mülkiyet</p>
              <h2 className="text-3xl font-black mb-8" style={{ color: 'var(--th-text)' }}>Tasarım Tescilleri &amp; Patentler</h2>
              <div className="flex flex-col gap-3">
                {TESCILLER.map((t, i) => (
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
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Sertifikalar</p>
              <h2 className="text-3xl font-black mb-8" style={{ color: 'var(--th-text)' }}>Kalite Belgelerimiz</h2>
              <div className="flex flex-col gap-4">
                {KALITE_BELGELERI.map((kb, i) => (
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
