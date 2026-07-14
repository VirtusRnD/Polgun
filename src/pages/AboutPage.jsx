// ============================================================
// ABOUT PAGE — Gerçek metinler + Ödüller & Ziyaretler bölümü
// ============================================================
import heroImage from '../assets/polgun-featured-projects-4.jpeg'

// Ödüller görselleri
import rdconf2024 from '../assets/awards/rdconf-2024.png'
import rdconf2025 from '../assets/awards/rdconf-2025.png'
import bestBusinessman from '../assets/awards/best-businessman-award.jpg'
import designInnovation from '../assets/awards/design-innovation-award.jpeg'
import iaapaBrassRing1 from '../assets/awards/iaapa-brass-ring-1.png'
import iaapaBrassRing2 from '../assets/awards/iaapa-brass-ring-2.png'
import egekafVisit from '../assets/awards/egekaf-visit.jpeg'
import mskuRectorVisit from '../assets/awards/msku-rector-visit.jpeg'

// Üretim görselleri
import cncOperator from '../assets/production/cnc-operator.png'
import pipeCutting from '../assets/production/pipe-cutting.png'
import paintApplication from '../assets/production/paint-application.png'
import inotekCnc from '../assets/production/inotek-cnc.png'
import compositeControl from '../assets/production/composite-control.png'
import mechanicalOperator from '../assets/production/mechanical-operator.png'
import cncCutting from '../assets/production/cnc-cutting.png'

// Fabrika görselleri
import bursaFactory from '../assets/factories/bursa-factory.png'
import istanbulFactory from '../assets/factories/istanbul-factory.png'
import muglaFactory from '../assets/factories/mugla-factory.png'

// ── Ödüller Verisi ─────────────────────────────────────────
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

const FACTORIES = [
  { city: 'Muğla', label: 'Merkez Üretim Tesisi', desc: 'Ana üretim ve Ar-Ge merkezi. Çelik konstrüksiyon, kompozit üretim ve dijital imalat altyapısının bulunduğu merkez tesis.', img: muglaFactory },
  { city: 'Bursa', label: 'Bursa Üretim Tesisi', desc: 'Polgün’ün kuzey üretim merkezi. Çelik parça imalatı ve yarı mamul üretiminin yapıldığı tesis.', img: bursaFactory },
  { city: 'İstanbul', label: 'Marmara Teknopark', desc: 'Ar-Ge ve inovasyon çalışmalarının yürütüldüğü Marmara Teknopark ofisi. Yeni ürün geliştirme ve teknik analiz merkezi.', img: istanbulFactory },
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

export default function AboutPage({ setActivePage }) {
  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                Hakkımızda
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
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>Hakkımızda</p>
              <h2 className="text-4xl font-black leading-tight mb-8" style={{ color: 'var(--th-text)' }}>
                Uluslararası Sahnede<br />Büyüyen Güç
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                Polgün, 2002 yılında Muğla-Menteşe’de faaliyete başlamıştır. Bugün Muğla’daki 4 ana üretim merkezi ile birlikte İstanbul ve İspanya ofisleri, 2022 yılında kurulan Antalya fabrikası ve yeni Bursa yatırımıyla faaliyetlerini sürdürmektedir.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                120.000 m²’lik entegre üretim altyapısı, tam otomatik makine parkuru ve uzman kadrosuyla; çelik konstrüksiyon ve polyester imalatını aynı çatı altında gerçekleştirebilen sektörün öncü firmalarından biridir.
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
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
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
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
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

      {/* ── Ödüller & Ziyaretler ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Başarılarımız</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>Ödüller ve Ziyaretler</h2>
          </div>

          {/* Ödüller */}
          <div className="mb-20">
            <h3 className="text-xl font-black mb-10" style={{ color: 'var(--th-text)' }}>🏆 Ödüllerimiz</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AWARDS.map((award, i) => (
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
            <h3 className="text-xl font-black mb-10" style={{ color: 'var(--th-text)' }}>🤝 Kurumsal Ziyaretler</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {VISITS.map((visit, i) => (
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

      {/* ── Tarihçe ve Fabrikalarımız ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Tarihçe & Tesislerimiz</p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>Büyüyen Üretim Gücü</h2>
          </div>
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              Polgün, artan kapasite ihtiyacını karşılamak ve üretim kabiliyetlerini ileriye taşımak amacıyla altyapı yatırımlarını kesintisiz sürdürmekte; Muğla’daki mevcut tesislerinde polyester, termoplastik kaplama ve boyama süreçlerine yönelik yeni üretim alanları oluştururken, Bursa’daki yeni fabrika yatırımıyla birlikte toplam 120.000 m² üretim alanına ulaşarak uluslararası ölçekte büyüyen operasyonel gücünü pekiştirmektedir.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
              Ar-Ge ve Tasarım yetkinliğini daha da ileri taşımak amacıyla Marmara Teknokent ofisi için başvuru süreci tamamlanmış ve sözleşme imzalanarak yapılanma resmiyet kazanmıştır. Bu yapılanma ile üniversite iş birliklerinin güçlendirilmesi hedeflenmektedir.
            </p>
            <p className="leading-relaxed font-bold" style={{ color: 'var(--th-polgun-blue)' }}>
              Bugün Polgün, Türkiye’deki üretim yapılanması ve İspanya’daki satış ofisiyle, uluslararası pazardaki konumunu güçlendirmektedir.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACTORIES.map((fac, i) => (
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
