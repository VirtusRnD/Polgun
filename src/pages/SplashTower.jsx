// ============================================================
// SPLASH TOWER — Pirate, Underwater & Candy Tema kategorileri
// Yeni gerçek görseller ile güncellenmiştir
// ============================================================
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

// Pirate Theme — yeni görseller
import pirate1 from '../assets/splashTower/pirateThemeNew/pirate1.avif'
import pirate2 from '../assets/splashTower/pirateThemeNew/pirate2.avif'
import pirate3 from '../assets/splashTower/pirateThemeNew/pirate3.avif'
import pirate4 from '../assets/splashTower/pirateThemeNew/pirate4.avif'
import pirate5 from '../assets/splashTower/pirateThemeNew/pirate5.avif'
import pirate6 from '../assets/splashTower/pirateThemeNew/pirate6.avif'
import pirate7 from '../assets/splashTower/pirateThemeNew/pirate7.avif'
import pirate8 from '../assets/splashTower/pirateThemeNew/pirate8.avif'

// Underwater Theme — yeni görseller
import underwater1 from '../assets/splashTower/underwaterThemeNew/underwater1.avif'
import underwater2 from '../assets/splashTower/underwaterThemeNew/underwater2.avif'
import underwater3 from '../assets/splashTower/underwaterThemeNew/underwater3.avif'
import underwater4 from '../assets/splashTower/underwaterThemeNew/underwater4.avif'
import underwater5 from '../assets/splashTower/underwaterThemeNew/underwater5.avif'
import underwater6 from '../assets/splashTower/underwaterThemeNew/underwater6.avif'
import underwater7 from '../assets/splashTower/underwaterThemeNew/underwater7.avif'

// Candy Theme — yeni görseller
import candy1 from '../assets/splashTower/candyTheme/candy1.avif'
import candy2 from '../assets/splashTower/candyTheme/candy2.avif'
import candy3 from '../assets/splashTower/candyTheme/candy3.avif'

import carnaval1 from '../assets/splashTower/carnavalTheme/carnaval1.avif'
import carnaval2 from '../assets/splashTower/carnavalTheme/carnaval2.avif'
import carnaval3 from '../assets/splashTower/carnavalTheme/carnaval3.avif'

import jurassic1 from '../assets/splashTower/jurassicTheme/j1.avif'
import jurassic2 from '../assets/splashTower/jurassicTheme/j2.avif'
import jurassic3 from '../assets/splashTower/jurassicTheme/j3.avif'

import jungle1 from '../assets/splashTower/jungleTheme/jungle1.avif'
import jungle2 from '../assets/splashTower/jungleTheme/jungle2.avif'
import jungle3 from '../assets/splashTower/jungleTheme/jungle3.avif'
import jungle4 from '../assets/splashTower/jungleTheme/jungle4.avif'

import galaxy1 from '../assets/splashTower/galaxyTheme/galaxy1.avif'
import galaxy2 from '../assets/splashTower/galaxyTheme/galaxy2.avif'
import galaxy3 from '../assets/splashTower/galaxyTheme/galaxy3.avif'
import galaxy4 from '../assets/splashTower/galaxyTheme/galaxy4.avif'

import custom1 from '../assets/splashTower/customTheme/c1.avif'
import custom2 from '../assets/splashTower/customTheme/c2.avif'
import custom3 from '../assets/splashTower/customTheme/c3.avif'
import custom4 from '../assets/splashTower/customTheme/c4.avif'

// ── Tema Verisi ────────────────────────────────────────────
const THEMES = [
  {
    id: 'pirate',
    name: 'Pirate Theme',
    location: 'Antalya, Türkiye',
    year: '2022',
    desc: 'Polgün\'ün imza teması olan ve pek çok su parkı tarafından tercih edilen Korsan Tema çocukların korsanlarla dolu açık denizlerde yelken açmaları ve bu hayal dünyasında eğlenmeleri için tasarlanmıştır. Her boyutta ve istenen her renk seçeneğinde tamamen özelleştirilebilen Korsan Tema\'da dev papağanlar, ikonik köpekbalığı, interaktif su oyunları, palmiye ağaçları ve korsan kafalı dev bir su kovası bulunuyor. Minik misafirlerin eğlendiği kadar yetişkinlerin de eğlendiğini gördüğünüzde su parkınız için Polgün Korsan Tema\'sını tercih etmeniz kaçınılmaz olacaktır.',
    thumbnail: pirate1,
    slides: [
      { id: 1, title: 'Pirate Theme', location: 'Nirvana Dolce Vita', img: pirate4 },
      { id: 2, title: 'Pirate Theme', location: 'Nirvana Dolce Vita', img: pirate5 },
      { id: 3, title: 'Pirate Theme', location: 'SY Hotel', img: pirate6 },
      { id: 4, title: 'Pirate Theme', location: 'SY Hotel', img: pirate7 },
      { id: 5, title: 'Pirate Theme', location: 'Proje', img: pirate1 },
      { id: 6, title: 'Pirate Theme', location: 'Proje', img: pirate2 },
      { id: 7, title: 'Pirate Theme', location: 'Proje', img: pirate3 },
      { id: 8, title: 'Pirate Theme', location: 'Proje', img: pirate8 },
    ],
  },
  {
    id: 'underwater',
    name: 'Underwater Theme',
    location: 'Antalya, Türkiye',
    year: '2022',
    desc: 'Okyanuslar, denizler ve su altı dünyası çocuklar için her zaman gizemli, heyecan verici ve büyülü bir dünya olmuştur. Sualtı dünyasında keşfedilmeyi bekleyen farklı türler ve rengarenk mercanlardan yola çıkılarak Polgün Sualtı Teması ile tasarlanan su parkı, çocukların hayal gücünü destekleyen, heyecanlandıran ve eğlenmelerini sağlayan renkli bir ortamdır. Su parkında kullanılan tüm renkler su altı dünyasında bulunan canlı türlerinden ve mercan renklerinden esinlenmiştir.',
    thumbnail: underwater1,
    slides: [
      { id: 1, title: 'Underwater Theme', location: 'Proje', img: underwater1 },
      { id: 2, title: 'Underwater Theme', location: 'Proje', img: underwater2 },
      { id: 3, title: 'Underwater Theme', location: 'Proje', img: underwater3 },
      { id: 4, title: 'Underwater Theme', location: 'Proje', img: underwater4 },
      { id: 5, title: 'Underwater Theme', location: 'Proje', img: underwater5 },
      { id: 6, title: 'Underwater Theme', location: 'Proje', img: underwater6 },
      { id: 7, title: 'Underwater Theme', location: 'Proje', img: underwater7 },
    ],
  },
  {
    id: 'candy',
    name: 'Candy Theme',
    location: 'Türkiye',
    year: '2024',
    desc: 'Şeker ve tatlı dünyasından ilham alan Candy Theme, canlı renkler ve eğlenceli tasarımıyla su parklarına neşe katıyor. Çocukların hayal gücünü besleyen renk paleti ve özgün animasyon ürünleriyle Candy Theme, su parkınıza farklı bir kimlik kazandırır. Pembe, sarı ve pastel tonların buluştuğu bu tematik yapı, küçük misafirlerin unutamayacakları anlar yaşamasını sağlar.',
    thumbnail: candy1,
    slides: [
      { id: 1, title: 'Candy Theme', location: 'Proje', img: candy1 },
      { id: 2, title: 'Candy Theme', location: 'Proje', img: candy2 },
      { id: 3, title: 'Candy Theme', location: 'Proje', img: candy3 },
    ],
  },
    {
    id: 'carnaval',
    name: 'Carnaval Theme',
    location: 'Türkiye',
    year: '2024',
    desc: 'Çocukların hayal gücünü harekete geçirmek ve unutulmaz aile anları yaratmak için tasarlanmış canlı bir su oyun alanı olan Polgün Carnival Splash Tower ile karnavalın neşeli ruhunu hayata geçirin. Şenlikli bir panayırın büyülü atmosferinden ilham alan Karnaval Teması; renkli balonlar, şekerlemeleri andıran detaylar, devasa lolipoplar ve oyun alanını rüya gibi bir kutlama ortamına dönüştüren eğlenceli çadır tarzı dekorasyonlar içerir. Etkileşimli su unsurları ve canlı tematik öğeler, çocukları keşfetmeye, oynamaya ve sürükleyici bir su macerasının tadını çıkarmaya teşvik eder.Göz alıcı görselliği ve neşeli karakteriyle Carnival Splash Tower; tatil köyleri, oteller, su parkları ve aile eğlence merkezleri için büyüleyici bir odak noktası haline gelir. Boyut, yerleşim ve renk açısından tamamen özelleştirilebilir yapısıyla, her projenin kendine özgü konseptine ve kapasite ihtiyaçlarına göre uyarlanabilir.',
    thumbnail: carnaval1,
    slides: [
      { id: 1, title: 'Carnaval Theme', location: 'Proje', img: carnaval1 },
      { id: 2, title: 'Carnaval Theme', location: 'Proje', img: carnaval2 },
      { id: 3, title: 'Carnaval Theme', location: 'Proje', img: carnaval3 },
    ],
  },
   {
    id: 'jurassic',
    name: 'Jurassic Theme',
    location: 'Türkiye',
    year: '2024',
    desc: 'Merak, heyecan ve macera duygularını harekete geçirmek üzere tasarlanan temalı bir su oyun alanı olan Polgün Jurassic Splash Tower ile tarih öncesi dünyayı canlandırın. Dinozorların büyüleyici çağından ilham alan Jurassic teması; Apatosaurus figürleri, dinozor yumurtaları, vahşi doğa bitkileri ve sevimli yavru T-Rex karakterleri gibi etkileyici unsurları, Mezozoik Çağ\'ı anımsatan bir atmosferde bir araya getiriyor. Bu yaratıcı detaylar, çocukların tarih öncesi biyoçeşitlilikten ilham alan bir dünyayı keşfederken hareketli su oyunlarının keyfini çıkarabilecekleri ilgi çekici bir ortam yaratıyor. Macera dolu görselleri interaktif su özellikleriyle birleştiren Jurassic Splash Tower; su parkları, tatil köyleri ve aile eğlence merkezleri için büyüleyici bir odak noktası haline geliyor. Boyut, yerleşim düzeni, renk paleti ve tematik bileşenler açısından tamamen özelleştirilebilir yapısıyla, her projenin konseptine ve kapasite ihtiyaçlarına göre uyarlanabiliyor.',
    thumbnail: jurassic1,
    slides: [
      { id: 1, title: 'Jurassic Theme', location: 'Proje', img: jurassic1 },
      { id: 2, title: 'Jurassic Theme', location: 'Proje', img: jurassic2 },
      { id: 3, title: 'Jurassic Theme', location: 'Proje', img: jurassic3 },
    ],
  },
   {
    id: 'jungle',
    name: 'Jungle Theme',
    location: 'Türkiye',
    year: '2024',
    desc: 'Tropikal yağmur ormanlarının güzelliğinden, enerjisinden ve gizeminden ilham alan temalı bir su oyun alanı olan Polgün Jungle Splash Tower ile vahşi doğaya adım atın. Fil, papağan, baykuş, sincap ve dev ağaçlar gibi hayal gücünü harekete geçiren orman karakterleriyle hayat bulan bu tema; çocukların keşfedebileceği, oyun oynayabileceği ve hayal güçlerini özgürce kullanabileceği heyecan verici bir ortam yaratıyor. Doğadan ilham alan detaylar, interaktif su özellikleri ve macera dolu dekoratif unsurlar, oyun alanını canlı bir orman yolculuğuna dönüştürüyor. Toprak tonları, ahşap görünümlü yüzeyler ve zengin doğa temalı grafiklerle tasarlanan Jungle Splash Tower; su parkları, tatil köyleri ve aile eğlence merkezleri için özgün bir görsel kimlik sunuyor. Boyut, yerleşim düzeni, renk paleti ve tematik detaylar açısından tamamen özelleştirilebilir yapısıyla, her projenin konseptine ve kapasite ihtiyaçlarına göre uyarlanabiliyor.',
    thumbnail: jungle1,
    slides: [
      { id: 1, title: 'Jungle Theme', location: 'Proje', img: jungle1 },
      { id: 2, title: 'Jungle Theme', location: 'Proje', img: jungle2 },
      { id: 3, title: 'Jungle Theme', location: 'Proje', img: jungle3 },
      { id: 4, title: 'Jungle Theme', location: 'Proje', img: jungle4 },
    ],
  },
  {
    id: 'galaxy',
    name: 'Galaxy Theme',
    location: 'Türkiye',
    year: '2024',
    desc: 'Çocukları evrenin harikaları arasında heyecan verici bir yolculuğa çıkarmak için tasarlanmış temalı bir su oyun alanı olan Polgün Galaxy Splash Tower ile kalkışa hazır olun. Uzayın gizeminden ilham alan Galaxy teması; roketler, gezegenler, uzaylılar ve kozmik esintili animasyonlar gibi hayal gücünü harekete geçiren unsurları çarpıcı sanatsal detaylarla bir araya getiriyor. İnteraktif su özellikleri ve macera dolu tematik bileşenler; çocukları oynamaya, kaymaya ve keşfetmeye teşvik ederken, aynı zamanda hayal güçlerini ve bilinmeyene dair meraklarını canlandırıyor. Dinamik konsepti ve uzaydan ilham alan, görsel açıdan büyüleyici tasarımıyla Galaxy Splash Tower; su parkları, tatil köyleri ve aile eğlence merkezleri için unutulmaz bir cazibe noktası oluşturuyor. Boyut, yerleşim düzeni, renk paleti ve tematik detaylar açısından tamamen özelleştirilebilir yapısıyla, her projenin konseptine ve kapasite ihtiyaçlarına uyarlanabiliyor.',
    thumbnail: galaxy1,
    slides: [
      { id: 1, title: 'Galaxy Theme', location: 'Proje', img: galaxy1 },
      { id: 2, title: 'Galaxy Theme', location: 'Proje', img: galaxy2 },
      { id: 3, title: 'Galaxy Theme', location: 'Proje', img: galaxy3 },
      { id: 4, title: 'Galaxy Theme', location: 'Proje', img: galaxy4 },
    ],
  },
  {
    id: 'custom',
    name: 'Custom Theme',
    location: 'Türkiye',
    year: '2024',
    desc: 'Polgün\'de her proje, eşsiz bir hikayeye dönüştürülebilir. Özel Tema hizmetimiz; yaratıcı tasarımı, kavramsal geliştirmeyi ve özenle seçilmiş renk paletlerini bir araya getirerek, her bir mekanın kimliğini ve vizyonunu yansıtan su oyun alanları yaratır. Onlarca yıllık sektör deneyimi, şirket içi Ar-Ge ekibi ve gelişmiş CAD tasarım yetkinlikleriyle desteklenen tasarımcılarımız, her projenin gereksinimlerine özel özgün konseptler geliştirir. İlk fikirden nihai temalı eğlence alanına kadar her ayrıntı, ziyaretçiler için ilgi çekici, görsel açıdan etkileyici ve unutulmaz bir deneyim sunmak üzere titizlikle ele alınır. İster doğadan, fantastik dünyalardan veya maceradan ilham alsın, isterse tamamen özgün bir konseptten yola çıksın; Polgün; su parkları, tatil köyleri, oteller ve aile eğlence merkezleri için tamamen kişiselleştirilmiş tematik çözümler üretir.',
    thumbnail: custom1,
    slides: [
      { id: 1, title: 'Custom Theme', location: 'Proje', img: custom1 },
      { id: 2, title: 'Custom Theme', location: 'Proje', img: custom2 },
      { id: 3, title: 'Custom Theme', location: 'Proje', img: custom3 },
      { id: 4, title: 'Custom Theme', location: 'Proje', img: custom4 },
    ],
  },
]

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

// ── Slider Modal Bileşeni ──────────────────────────────────
function SliderModal({ theme, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayInterval = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    autoplayInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % theme.slides.length)
    }, 2000)
    return () => clearInterval(autoplayInterval.current)
  }, [isOpen, theme.slides.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? theme.slides.length - 1 : prev - 1)
  }
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % theme.slides.length)
  }

  if (!isOpen) return null
  const currentSlide = theme.slides[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-none rounded-2xl overflow-hidden bg-black shadow-2xl"
        style={{ width: 'min(96vw, var(--layout-max))' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gray-900 h-[min(78vh,64vw)]">
          <img
            src={currentSlide.img}
            alt={currentSlide.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
          }} />
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all backdrop-blur-sm flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all backdrop-blur-sm flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {theme.slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: idx === currentIndex ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.4)',
                  width: idx === currentIndex ? '24px' : '8px',
                }}
              />
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 transition-all backdrop-blur-sm flex items-center justify-center text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="px-6 py-3 bg-white/5 border-t border-white/10 flex items-center justify-between text-white text-sm">
          <span>{currentIndex + 1} / {theme.slides.length}</span>
          <span className="font-bold">{theme.name}</span>
        </div>
      </div>
    </div>
  )
}

export default function SplashTowerPage({ setActivePage }) {
  const { t } = useTranslation()
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [sliderOpen, setSliderOpen] = useState(false)

  // Map theme descriptions and names dynamically
  const translatedThemes = THEMES.map((theme) => {
    let desc = theme.desc
    if (theme.id === 'pirate') desc = t('splashtower.themes.pirate.desc', {defaultValue: theme.desc})
    else if (theme.id === 'underwater') desc = t('splashtower.themes.underwater.desc', {defaultValue: theme.desc})
    else if (theme.id === 'candy') desc = t('splashtower.themes.candy.desc', {defaultValue: theme.desc})
    else if (theme.id === 'carnaval') desc = t('splashtower.themes.carnaval.desc', {defaultValue: theme.desc})
    else if (theme.id === 'jurassic') desc = t('splashtower.themes.jurassic.desc', {defaultValue: theme.desc})
    else if (theme.id === 'jungle') desc = t('splashtower.themes.jungle.desc', {defaultValue: theme.desc})
    else if (theme.id === 'galaxy') desc = t('splashtower.themes.galaxy.desc', {defaultValue: theme.desc})
    else if (theme.id === 'custom') desc = t('splashtower.themes.custom.desc', {defaultValue: theme.desc})

    return {
      ...theme,
      name: t(`splashtower.themes.${theme.id}.name`, {defaultValue: theme.name}),
      location: t(`splashtower.themes.${theme.id}.location`, {defaultValue: theme.location}),
      desc
    }
  })

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('products.tower.title', { defaultValue: 'Splash Tower' })}
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                Splash<br />Tower
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('splashtower.hero_subtitle', {defaultValue: 'Farklı temalar ile tasarlanmış su kaydırakları ve eğlence alanları'})}
            </p>
          </div>
        </div>
      </section>

      {/* ── Tema Kategorileri ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12 space-y-28">

          {translatedThemes.map((theme, i) => (
            <div key={theme.id} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Metin */}
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>{t('splashtower.theme_categories', {defaultValue: 'Tema Kategorileri'})}</p>
                <h2 className="text-4xl font-black leading-tight mb-8" style={{ color: 'var(--th-text)' }}>
                  {theme.name}
                </h2>
                <p className="leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                  {theme.desc}
                </p>
              </div>

              {/* Görsel Kart */}
              <article
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                onClick={() => {
                  setSelectedTheme(theme)
                  setSliderOpen(true)
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 24px 72px rgba(0,0,0,0.18)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={theme.thumbnail}
                    alt={theme.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <GlassTag>{theme.slides.length} {t('common.images', {defaultValue: 'Görsel'})}</GlassTag>
                    <GlassTag>{theme.year}</GlassTag>
                  </div>
                  <h2 className="text-2xl font-black text-white mb-1">{theme.name}</h2>
                  <p className="text-sm text-white/50 mb-4">{theme.location}</p>
                  <div className="flex items-center gap-2 text-white/60 text-xs font-semibold group-hover:text-white group-hover:gap-3 transition-all duration-200">
                    {t('common.view', {defaultValue: 'İncele'})}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </article>
            </div>
          ))}

        </div>
      </section>

      {/* ── Slider Modal ── */}
      {selectedTheme && (
        <SliderModal
          theme={selectedTheme}
          isOpen={sliderOpen}
          onClose={() => setSliderOpen(false)}
        />
      )}

    </main>
  )
}
