// ============================================================
// TEAM PAGE — Ekibimiz (About/Team)
// ============================================================
import { useEffect } from 'react'
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
    title: 'CNC Model ve Kalıp Hazırlama',
    desc: 'CNC destekli model ve kalıp hazırlama süreçlerimiz, özgün ürün geometrilerinin hassas şekilde oluşturulmasına olanak sağlar. Bu altyapı; kompozit parçaların üretim öncesi hazırlık süreçlerini, yüzey kalitesini ve ürün formunun doğruluğunu destekler.',
    img: inotekCnc,
  },
  {
    title: 'Çelik İşleme ve Kesim Teknolojileri',
    desc: 'Çelik konstrüksiyon sistemlerinin üretiminde CNC kesim, boru ve profil işleme teknolojilerinden yararlanıyoruz. Projeye özel hazırlanan parçalar, üretim ve montaj süreçlerine uygun hassasiyetle işlenerek bir sonraki imalat aşamasına aktarılır.',
    img: cncCutting,
    img2: pipeCutting,
  },
  {
    title: 'Mekanik İşleme ve Parça Üretimi',
    desc: 'Bağlantı elemanları, özel mekanik parçalar ve fonksiyonel bileşenler; projelerin teknik ihtiyaçlarına uygun şekilde üretim sürecinde işlenir. Mekanik imalat altyapımız, farklı ürün gruplarına uygun çözümler geliştirmemizi destekler.',
    img: mechanicalOperator,
  },
  {
    title: 'Kompozit Üretim ve Yüzey Uygulamaları',
    desc: 'Su kaydırakları, temalı ürünler ve özel tasarım parçalar için yürütülen kompozit üretim süreçleri; yüzey hazırlama, boya uygulamaları ve son kat işlemleriyle tamamlanır. Bu süreçler, ürünlerin estetik bütünlüğünü, dayanımını ve uzun dönem kullanım performansını destekler.',
    img: paintApplication,
    img2: compositeControl,
  },
  {
    title: 'Dijital Üretim ve Süreç Kontrolü',
    desc: 'Bilgisayar destekli üretim sistemleri, imalat süreçlerinin planlı, kontrollü ve tekrarlanabilir şekilde ilerlemesini sağlar. Dijital takip ve operatör kontrolü sayesinde üretimde hassasiyet, süreklilik ve süreç izlenebilirliği desteklenir.',
    img: cncOperator,
  },
]

export default function TeamPage({ setActivePage }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                Ekibimiz
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                20 Yılı Aşkın<br />Waterpark<br />Deneyimi
              </h1>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              Polgün, su parkı projelerinde tasarım, mühendislik, üretim ve uygulama süreçlerini tek çatı altında yöneten güçlü bir çözüm ortağıdır. Yirmi yılı aşkın sektör tecrübemiz, yüksek üretim kapasitemiz ve uluslararası proje deneyimimizle her ölçekte projeye güvenilir, yenilikçi ve sürdürülebilir çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* ── Misyon & Görsel ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>Hakkımızda</p>
              <h2 className="text-4xl font-black leading-tight mb-8" style={{ color: 'var(--th-text)' }}>
                Uluslararası Sahnede<br />Büyüyen Güç
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                Polgün, 2002 yılında Muğla-Menteşe'de faaliyete başlamıştır. Bugün Muğla'daki 4 ana üretim merkezi ile birlikte İstanbul ve İspanya ofisleri, 2022 yılında kurulan Antalya fabrikası ve yeni Bursa yatırımıyla faaliyetlerini sürdürmektedir.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                120.000 m²'lik entegre üretim altyapısı, tam otomatik makine parkuru ve uzman kadrosuyla; çelik konstrüksiyon ve polyester imalatını aynı çatı altında gerçekleştirebilen sektörün öncü firmalarından biridir.
              </p>
              <p className="leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                425 çalışanı ve 30 kişilik Ar-Ge ekibiyle Polgün, tasarımdan üretime kadar tüm süreçleri yöneterek anahtar teslim projeler gerçekleştirmektedir.
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
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>Ar-Ge Merkezimiz</p>
              <h2 className="text-3xl font-black leading-tight mb-6" style={{ color: 'var(--th-text)' }}>
                Muğla'nın İlk ve Tek<br />Ar-Ge Merkezi
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                Polgün Waterparks olarak Ar-Ge yaklaşımımızın temelinde; güvenli, yenilikçi, sürdürülebilir ve yüksek katma değerli su eğlence teknolojileri geliştirmek yer almaktadır. 2021 yılında Bakanlık onayıyla Ar-Ge Merkezi statüsü kazanan merkezimiz, Muğla'nın ilk ve tek Ar-Ge Merkezi olma niteliğiyle sektörümüzde özgün ürün geliştirme, yerlileştirme ve teknoloji üretme çalışmalarına öncülük etmektedir.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                Ar-Ge Merkezimizde; araştırmacı, teknisyen ve destek personeli statüsünde görev yapan 30 tam zaman eşdeğer nitelikli Ar-Ge personelimiz ile yeni ürün tasarımı, mühendislik analizleri, prototipleme, test, doğrulama, üretim yöntemi geliştirme ve fikri mülkiyet süreçlerini bütüncül bir yaklaşımla yürütüyoruz.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                Navatu, Savanna, Monarch Butterfly ve Eclipse gibi yenilikçi ürün projelerimiz; Polgün'ün tasarım, mühendislik ve üretim gücünü uluslararası pazarda temsil eden önemli Ar-Ge çıktıları arasında yer almaktadır.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--th-polgun-blue) 15%, transparent)' }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: 'var(--th-polgun-blue)' }}>Misyonumuz</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                    Yüksek kaliteli, güvenli, uygun maliyetli ve yenilikçi Ar-Ge projeleri geliştirerek su eğlence sektörüne özgün çözümler kazandırmak.
                  </p>
                </div>
                <div className="p-5 rounded-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--th-primary) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--th-primary) 15%, transparent)' }}>
                  <p className="text-xs font-black tracking-widest uppercase mb-2" style={{ color: 'var(--th-primary)' }}>Vizyonumuz</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                    Su eğlence teknolojilerine yön veren, alanında lider ve öncü bir Ar-Ge merkezi olmak; teknoloji üreten, sektöre ilham veren ve sürdürülebilir gelecek için değer yaratan bir marka olmak.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { num: '30+', label: 'Ar-Ge Personeli', desc: 'Tam zaman eşdeğer nitelikli uzman ekip' },
                { num: '2021', label: 'Ar-Ge Merkezi Statüsü', desc: 'Bakanlık onaylı, Muğla\'nın ilk ve tek merkezi' },
                { num: '4+', label: 'Özgün Ürün Projesi', desc: 'Navatu, Savanna, Eclipse, Monarch Butterfly' },
                { num: '70+', label: 'Ülke', desc: 'Global proje ve pazar deneyimi' },
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
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Üretim Altyapımız</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>Tasarımdan üretime,<br />tüm süreçleri tek çatı altında yönetiyoruz.</h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              Polgün; su parkı ve eğlence sistemleri için geliştirdiği çözümleri, çelik konstrüksiyon, mekanik işleme, kompozit üretim, yüzey uygulamaları ve dijital üretim teknolojilerini bir araya getiren entegre üretim altyapısıyla hayata geçirir.
            </p>
          </div>
          <div className="flex flex-col gap-24">
            {PRODUCTION_SECTIONS.map((sec, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <h3 className="text-2xl font-black mb-5" style={{ color: 'var(--th-text)' }}>{sec.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{sec.desc}</p>
                </div>
                <div className={sec.img2 ? 'grid grid-cols-2 gap-3' : ''}>
                  <img src={sec.img} alt={sec.title} className="w-full aspect-[4/3] rounded-2xl object-cover" />
                  {sec.img2 && <img src={sec.img2} alt={sec.title + ' 2'} className="w-full aspect-[4/3] rounded-2xl object-cover" />}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-black mb-4" style={{ color: 'var(--th-text)' }}>Üretim Gücümüzü Projelerimize Yansıtıyoruz.</h3>
            <p className="mb-8 max-w-lg mx-auto" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              Mühendislik, üretim ve kalite kontrol süreçlerini aynı çatı altında yöneterek; her projeye özel, güvenilir ve yüksek kaliteli çözümler geliştiriyoruz.
            </p>
            <button
              onClick={() => setActivePage('projects')}
              className="px-8 py-3.5 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--th-primary)', color: '#fff' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Projelerimizi İnceleyin
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
