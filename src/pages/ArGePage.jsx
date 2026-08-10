// ============================================================
// ARGE SAYFASI — ArGe Metni
// ============================================================
import heroImage from '../assets/polgun-featured-projects-4.avif'
import navatu1 from '../assets/navatu/navatu1.avif'
import savana1 from '../assets/savana/savana1.avif'

export default function ArGePage({ setActivePage }) {
  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                İnovasyon
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                Ar-Ge<br />Merkezi
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Polgün Waterparks olarak Ar-Ge yaklaşımımızın temelinde; güvenli, yenilikçi, sürdürülebilir ve yüksek katma değerli su eğlence teknolojileri geliştirmek yer almaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* ── İçerik ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="prose prose-lg">
            <h2 className="text-3xl font-black mb-6" style={{ color: 'var(--th-text)' }}>Geleceği Tasarlıyoruz</h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              2021 yılında Bakanlık onayıyla Ar-Ge Merkezi statüsü kazanan merkezimiz, Muğla’nın ilk ve tek Ar-Ge Merkezi olma niteliğiyle sektörümüzde özgün ürün geliştirme, yerlileştirme ve teknoloji üretme çalışmalarına öncülük etmektedir.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              Ar-Ge Merkezimizde; araştırmacı, teknisyen ve destek personeli statüsünde görev yapan 30 tam zaman eşdeğer nitelikli Ar-Ge personelimiz ile yeni ürün tasarımı, mühendislik analizleri, prototipleme, test, doğrulama, üretim yöntemi geliştirme ve fikri mülkiyet süreçlerini bütüncül bir yaklaşımla yürütüyoruz.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              Ülkemiz için millileştirme ve yerlileştirme çalışmalarını stratejik bir sorumluluk olarak görüyor; dışa bağımlılığı azaltan, hızlı uygulanabilir ve müşteri ihtiyaçlarına doğrudan yanıt veren çözümler geliştiriyoruz. Tasarımdan üretime, analizden saha uygulamasına kadar tüm Ar-Ge süreçlerimizde güvenlik, kalite, uluslararası standartlara uygunluk ve sürdürülebilirlik ilkelerini esas alıyoruz.
            </p>

            <h3 className="text-2xl font-black mt-12 mb-4" style={{ color: 'var(--th-text)' }}>Yenilikçi Ürünler</h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              Polgün Ar-Ge Merkezi’nde geliştirilen projeler; su tasarrufu, kullanıcı güvenliği, kapasite artışı, tematik deneyim, modüler üretim, kompozit malzeme teknolojileri ve yeni nesil su kaydırağı geometrileri gibi alanlarda sektöre değer katmaktadır. Navatu, Savanna, Monarch Butterfly ve Eclipse gibi yenilikçi ürün projelerimiz; Polgün’ün tasarım, mühendislik ve üretim gücünü uluslararası pazarda temsil eden önemli Ar-Ge çıktıları arasında yer almaktadır.
            </p>

            <h3 className="text-2xl font-black mt-12 mb-4" style={{ color: 'var(--th-text)' }}>Sürekli Gelişim</h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              Ar-Ge faaliyetlerimiz yalnızca yeni ürün geliştirme ile sınırlı değildir. Aynı zamanda mevcut ürünlerin performansını artırmak, üretim süreçlerini iyileştirmek, çevresel etkileri azaltmak, malzeme verimliliğini yükseltmek ve uluslararası pazarlarda rekabet gücümüzü artırmak amacıyla sürekli geliştirme çalışmaları yürütüyoruz. Akademik iş birlikleri, bilimsel yayınlar, patent ve tasarım tescili süreçleri ile kurumsal bilgi birikimimizi güçlendiriyor; elde edilen çıktıları sürdürülebilir bir inovasyon kültürüne dönüştürüyoruz.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--th-bg)', border: '1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)' }}>
                <h4 className="text-xl font-black mb-4" style={{ color: 'var(--th-primary)' }}>Misyonumuz</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
                  Yüksek kaliteli, güvenli, uygun maliyetli ve yenilikçi Ar-Ge projeleri geliştirerek su eğlence sektörüne özgün çözümler kazandırmak; ulusal ve uluslararası pazarlarda ülkemizi temsil eden öncü ürünlere imza atmaktır. Ar-Ge süreçlerimizde iş zaman planlarına, mühendislik doğrulamalarına, standart uygunluğuna ve sürdürülebilir üretim prensiplerine bağlı kalarak sektörümüze nitelikli bilgi, teknoloji ve insan kaynağı kazandırmayı hedefliyoruz.
                </p>
              </div>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--th-bg)', border: '1px solid color-mix(in srgb, var(--th-polgun-blue) 20%, transparent)' }}>
                <h4 className="text-xl font-black mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Vizyonumuz</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
                  Polgün Waterparks Ar-Ge Merkezi olarak vizyonumuz; özgün tasarımları, yenilikçi mühendislik çözümleri, güçlü üretim kabiliyeti ve uluslararası standartlara uygun projeleriyle su eğlence teknolojilerine yön veren, alanında lider ve öncü bir Ar-Ge merkezi olmaktır. Kaliteden ödün vermeden geliştirdiğimiz projelerle hem ulusal hem de uluslararası platformlarda tanınan bir marka olmayı amaçlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ar-Ge Çıktıları ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>Ar-Ge Projelerimiz</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setActivePage('products')} style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)' }}>
              <div className="h-64 overflow-hidden">
                <img src={navatu1} alt="Navatu" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--th-text)' }}>Navatu</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--th-polgun-blue)' }}>IAAPA Brass Ring Ödüllü Dalga Sistemi</p>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>Doğal dalga deneyimini yeni bir boyuta taşıyan yenilikçi su parkı sistemi.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setActivePage('products')} style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)' }}>
              <div className="h-64 overflow-hidden">
                <img src={savana1} alt="Savana" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--th-text)' }}>Savana</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Çoklu Kayma Yollu Temalı Su Kaydırağı</p>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>Aynı gövdede dört farklı kayma yolunu bir araya getiren yenilikçi Ar-Ge projesi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
