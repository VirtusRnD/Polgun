// ============================================================
// HOMEPAGE — WWW tarzı büyük tipografi + Apple glass efect
// "Let's color the water" hero
// ============================================================
import { useState } from 'react'
import { COLOR_PALETTES } from '../constants/colorPalettes'

// ── Referans Logo İmportları ───────────────────────────────
import refAmara        from '../assets/references/amara-prestige-elite-logo.jpg'
import refCemi         from '../assets/references/cemi-logo.jpg'
import refCrystal      from '../assets/references/crystal-hotels-logo.jpg'
import refDelphin      from '../assets/references/delphin-logo.jpg'
import refIsaba        from '../assets/references/isaba-logo.jpg'
import refLimak        from '../assets/references/limak-logo.jpg'
import refNg           from '../assets/references/ng-hotels.jpg'
import refOtium        from '../assets/references/otium-logo.jpg'
import refPegasos      from '../assets/references/pegasos-logo.jpg'
import refPickalbatros from '../assets/references/pickalbatros-logo.jpg'
import refRixos        from '../assets/references/rixos-logo.jpg'
import refSelectum     from '../assets/references/selectum-logo.jpg'
import refSherwood     from '../assets/references/sherwood-logo.jpg'
import refTitanic      from '../assets/references/titanic-hotels-logo.jpg'
import refValamar      from '../assets/references/valamar-logo.jpg'
import refVoyage       from '../assets/references/voyage-logo.jpg'
import heroImage       from '../assets/polgun-featured-projects-4.jpeg'

const REFS = [
  { src: refAmara,        alt: 'Amara Prestige Elite' },
  { src: refCemi,         alt: 'Cemi' },
  { src: refCrystal,      alt: 'Crystal Hotels' },
  { src: refDelphin,      alt: 'Delphin' },
  { src: refIsaba,        alt: 'İsaba' },
  { src: refLimak,        alt: 'Limak' },
  { src: refNg,           alt: 'NG Hotels' },
  { src: refOtium,        alt: 'Otium' },
  { src: refPegasos,      alt: 'Pegasos' },
  { src: refPickalbatros, alt: 'Pickalbatros' },
  { src: refRixos,        alt: 'Rixos' },
  { src: refSelectum,     alt: 'Selectum' },
  { src: refSherwood,     alt: 'Sherwood' },
  { src: refTitanic,      alt: 'Titanic Hotels' },
  { src: refValamar,      alt: 'Valamar' },
  { src: refVoyage,       alt: 'Voyage' },
]

const STATS = [
  { num: '1450+', label: 'Tamamlanan Proje' },
  { num: '48+',   label: 'Ülke' },
  { num: '2002',  label: 'Kuruluş Yılı' },
  { num: '98%',   label: 'Müşteri Memnuniyeti' },
]

// ── Glass Kart bileşeni ────────────────────────────────────
function GlassCard({ children, className = '', style = {} }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.7)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,0.9)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// ── Marquee — hover'da duran kayan şerit ──────────────────
function MarqueeStrip() {
  const [paused, setPaused] = useState(false)
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-5 shrink-0"
        style={{
          animation: 'marquee 32s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {[...REFS, ...REFS].map((r, i) => (
          <div
            key={i}
            className="shrink-0 h-32 w-56 rounded-2xl flex items-center justify-center px-6 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={(e) => {
              setPaused(true)
              e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.25)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              setPaused(false)
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <img
              src={r.src}
              alt={r.alt}
              className="max-h-16 max-w-full object-contain transition-opacity duration-300"
              style={{ opacity: 0.9 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Sayfa bileşeni ─────────────────────────────────────────
export default function HomePage({ setActivePage, colorPalette = 1 }) {
  const palette = COLOR_PALETTES[colorPalette] || COLOR_PALETTES[1]

  return (
    <main style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ══════════════════════════════════════════════════════
          HERO — WWW layout: Sol büyük yazı + Sağ teal-kenarlı video kartı
          Açık arka plan, minimal Apple glass
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: 'var(--th-surface)' }}
      >
        {/* Çok hafif arka plan gradient — neredeyse beyaz */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% 50%, color-mix(in srgb,var(--th-accent) 6%,transparent), transparent)',
          }}
        />

        {/* İçerik grid */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pt-28 pb-20
          grid lg:grid-cols-[1fr_1fr] gap-10 xl:gap-16 items-center">

          {/* ── Sol: Tipografi ── */}
          <div className="flex flex-col gap-8">

            <h1
              className="font-black leading-[1.0] tracking-tight"
              style={{ color: 'var(--th-primary-darker)', fontSize: 'clamp(3rem,6vw,5.5rem)' }}
            >
              Let's <span
                style={{
                  background: 'linear-gradient(135deg, var(--th-primary) 0%, var(--th-accent) 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 8px 16px color-mix(in srgb, var(--th-primary) 25%, transparent)',
                  filter: 'drop-shadow(0 2px 4px color-mix(in srgb, var(--th-primary-darker) 30%, transparent))',
                }}
              >
                color
              </span><br />the water.
            </h1>

            {/* Stat satırı */}
            <div
              className="flex gap-10 pt-8"
              style={{ borderTop: '1px solid color-mix(in srgb,var(--th-border) 10%,transparent)' }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-black leading-none"
                    style={{ color: 'var(--th-primary-darker)' }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-[10px] mt-1 tracking-widest uppercase"
                    style={{ color: 'color-mix(in srgb,var(--th-text-muted) 55%,transparent)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Sağ: Glass efektli premium video kartı ── */}
          <div className="relative flex items-center justify-center">

            {/* Dış glass çerçeve — premium shadow */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[2.5rem]"
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--th-primary) 18%, transparent) 0%, color-mix(in srgb, var(--th-primary) 8%, transparent) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)',
                transform: 'translate(16px, 16px)',
                boxShadow: '0 20px 60px color-mix(in srgb, var(--th-primary) 25%, transparent)',
              }}
            />

            {/* Ana video kartı — premium styling */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: '2.5rem',
                aspectRatio: '16/10',
                background: 'linear-gradient(135deg, rgba(92,163,225,0.08) 0%, rgba(21,101,192,0.04) 100%)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                border: '2px solid rgba(21,101,192,0.40)',
                boxShadow:
                  '0 60px 120px rgba(21,101,192,0.30), 0 0 0 1px rgba(92,163,225,0.25), inset 0 1px 0 rgba(255,255,255,0.30), inset 0 -2px 8px rgba(21,101,192,0.08)',
              }}
            >
              {/* YouTube iframe — kartın içinde, tam kaplı */}
              <iframe
                src="https://www.youtube.com/embed/toORLlZ_F00?autoplay=1&mute=1&loop=1&playlist=toORLlZ_F00&controls=0&modestbranding=1&showinfo=0&rel=0"
                title="Polgün Waterpark Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          KATEGORİLER — 4 büyük gradient kart
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
                style={{ color: 'var(--th-accent)' }}>
                <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-accent)' }} />
                Ürün Kategorileri
              </p>
              <h2 className="font-black leading-tight" style={{ color:'var(--th-text)', fontSize:'clamp(2rem,4vw,3.5rem)' }}>
                Su parkının her<br />köşesi için çözüm
              </h2>
            </div>
            <button
              onClick={() => setActivePage('products')}
              className="shrink-0 px-7 py-3.5 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor:'var(--th-primary)', color:'#fff' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity='0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity='1'}
            >
              Tüm Ürünler
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title:'Su Kaydırakları', sub:'Tüp, açık & thrill', g:'linear-gradient(135deg, var(--th-primary-darker), var(--th-primary), var(--th-accent))' },
              { title:'Dalga Havuzları',  sub:'Pnömatik & mekanik',  g:'linear-gradient(135deg, var(--th-primary-dark), var(--th-accent), var(--th-accent-dark))' },
              { title:'Aquatik Oyun',    sub:'Çocuk & aile',         g:'linear-gradient(135deg, var(--th-accent-dark), var(--th-accent), var(--th-primary))' },
              { title:'Lazy River',      sub:'Sakin akış sistemleri', g:'linear-gradient(135deg, var(--th-primary), color-mix(in srgb, var(--th-primary) 60%, var(--th-accent)), var(--th-accent))' },
            ].map((cat, i) => (
              <button
                key={i}
                onClick={() => setActivePage('products')}
                className="group relative h-72 rounded-2xl overflow-hidden text-left"
                style={{ background: cat.g }}
              >
                {/* Dekoratif dalgalar */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <path d="M0 120 Q50 90 100 120 Q150 150 200 120 L200 200 L0 200Z" fill="white" opacity="0.3"/>
                    <path d="M0 140 Q50 110 100 140 Q150 170 200 140 L200 200 L0 200Z" fill="white" opacity="0.2"/>
                    <circle cx="160" cy="50" r="60" fill="white" opacity="0.05"/>
                  </svg>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background:'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' }} />
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.2)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-2">{cat.sub}</div>
                    <div className="text-white font-black text-xl leading-tight">{cat.title}</div>
                    <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-semibold
                      group-hover:text-white group-hover:gap-3 transition-all duration-200">
                      İncele
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ÖZELLIK — Sol koyu glass panel + Sağ metin (Apple tarzı)
      ══════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor:'var(--th-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden"
            style={{ boxShadow:'0 24px 80px rgba(0,0,0,0.10)' }}>

            {/* Sol — Koyu gradient panel */}
            <div className="relative min-h-[380px] flex items-end p-10"
              style={{ background:'linear-gradient(135deg,var(--th-primary-darker) 0%,var(--th-primary) 100%)' }}>
              <div className="absolute inset-0 overflow-hidden opacity-15">
                <svg viewBox="0 0 500 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <circle cx="400" cy="80" r="200" fill="white"/>
                  <path d="M0 300 Q125 220 250 300 Q375 380 500 300 L500 400 L0 400Z" fill="white"/>
                </svg>
              </div>
              <div className="relative z-10 w-full">
                <GlassCard className="p-5">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-2 text-white/50">Mühendislik</p>
                  <h3 className="text-xl font-black text-white leading-tight mb-3">
                    Tasarımdan<br />Sahaya, Eksiksiz
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['ISO Sertifikalı','GRP Üretim','3D Tasarım','Anahtar Teslim'].map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full"
                        style={{ background:'rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.8)', border:'1px solid rgba(255,255,255,0.15)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Sağ — Metin */}
            <div className="p-6 lg:p-8 flex flex-col justify-center" style={{ backgroundColor:'var(--th-surface)' }}>
              <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
                style={{ color:'var(--th-accent)' }}>
                <span className="inline-block w-6 h-px" style={{ backgroundColor:'var(--th-accent)' }} />
                Neden Polgün?
              </p>
              <h2 className="font-black leading-tight mb-6" style={{ color:'var(--th-text)', fontSize:'clamp(1.5rem,2.5vw,2.25rem)' }}>
                20+ yıllık deneyimle ikonik su parkı deneyimleri yaratıyoruz
              </h2>
              <p className="leading-relaxed mb-6 text-base" style={{ color:'color-mix(in srgb,var(--th-text-muted) 70%,transparent)' }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label:'Tam Hizmet', desc:'Tasarım & üretim & montaj' },
                  { label:'48 Ülke',    desc:'Global deneyim' },
                  { label:'ISO Kalitesi',desc:'Sertifikalı üretim' },
                  { label:'Sürdürülebilir',desc:'Çevre dostu tasarım' },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3 p-3 rounded-2xl"
                    style={{ backgroundColor:'color-mix(in srgb,var(--th-border) 20%,transparent)' }}>
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <div className="text-sm font-bold" style={{ color:'var(--th-text)' }}>{f.label}</div>
                      <div className="text-xs mt-0.5" style={{ color:'color-mix(in srgb,var(--th-text-muted) 55%,transparent)' }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setActivePage('about')}
                className="self-start px-7 py-3 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor:'var(--th-primary)', color:'#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity='0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity='1'}
              >
                Hakkımızda
              </button>
            </div>
          </div>
        </div>
      </section>

      

      {/* ══════════════════════════════════════════════════════
          REFERANSLAR — Kayan marquee, belirgin
      ══════════════════════════════════════════════════════ */}
        <section className="py-24 overflow-hidden" style={{ backgroundColor: 'var(--th-accent)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 mb-14 text-center">
          <p className="text-[11px] font-black tracking-[0.35em] uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}>
            Referanslarımız
          </p>
          <h2 className="font-black text-white leading-tight" style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)' }}>
            Dünyaca ünlü markalar<br />bize güveniyor
          </h2>
        </div>

        {/* Kayan şerit */}
        <div className="relative">
          {/* Sol silik geçiş */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right,var(--th-accent),transparent)' }} />
          {/* Sağ silik geçiş */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left,var(--th-accent),transparent)' }} />

          {/* Marquee container */}
          <MarqueeStrip />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — Apple tarzı büyük gradient panel
      ══════════════════════════════════════════════════════ */}
      <section className="py-32" style={{ backgroundColor:'var(--th-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
          <div className="relative rounded-3xl overflow-hidden px-12 py-20 text-center"
            style={{ background:'linear-gradient(135deg,var(--th-accent) 0%,var(--th-primary) 50%,var(--th-primary) 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <circle cx="100" cy="150" r="200" fill="white"/>
                <circle cx="700" cy="150" r="180" fill="white"/>
              </svg>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-[11px] font-black tracking-[0.35em] uppercase mb-6 text-white/50">
                Projenizi Birlikte Tasarlayalım
              </p>
              <h2 className="font-black text-white leading-tight mb-8" style={{ fontSize:'clamp(2rem,4.5vw,3.75rem)' }}>
                Hayalinizdeki su parkını<br />hayata geçiriyoruz
              </h2>
              <p className="text-white/50 mb-12 max-w-lg mx-auto leading-relaxed">
                Dünyanın dört bir yanındaki su parklarında hayatı renklendiriyoruz. Sıradaki projeniz için bizimle iletişime geçin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActivePage('contact')}
                  className="px-10 py-4 font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor:'#FFFFFF', color:'var(--th-primary-darker)', boxShadow:'0 0 40px rgba(0,0,0,0.2)' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity='0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity='1'}
                >
                  Hemen Teklif Al
                </button>
                <button
                  onClick={() => setActivePage('projects')}
                  className="px-10 py-4 font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background:'rgba(255,255,255,0.2)', backdropFilter:'blur(12px)', border:'2px solid rgba(255,255,255,0.4)', color:'rgba(255,255,255,0.95)' }}
                  onMouseEnter={(e) => e.currentTarget.style.background='rgba(255,255,255,0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background='rgba(255,255,255,0.2)'}
                >
                  Projelerimizi İncele
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}