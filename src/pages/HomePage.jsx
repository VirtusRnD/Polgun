// ============================================================
// HOMEPAGE — WWW tarzı büyük tipografi + Apple glass efect
// "Let's color the water" hero
// ============================================================
import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ── Referans Logo İmportları ───────────────────────────────
import refAmara from '../assets/references/amara-prestige-elite-logo.avif'
import refCemi from '../assets/references/cemi-logo.avif'
import refCrystal from '../assets/references/crystal-hotels-logo.avif'
import refDelphin from '../assets/references/delphin-logo.avif'
import refIsaba from '../assets/references/isaba-logo.avif'
import refLimak from '../assets/references/limak-logo.avif'
import refNg from '../assets/references/ng-hotels.avif'
import refOtium from '../assets/references/otium-logo.avif'
import refPegasos from '../assets/references/pegasos-logo.avif'
import refPickalbatros from '../assets/references/pickalbatros-logo.avif'
import refRixos from '../assets/references/rixos-logo.avif'
import refSelectum from '../assets/references/selectum-logo.avif'
import refSherwood from '../assets/references/sherwood-logo.avif'
import refTitanic from '../assets/references/titanic-hotels-logo.avif'
import refValamar from '../assets/references/valamar-logo.avif'
import refVoyage from '../assets/references/voyage-logo.avif'
import guralPremier from '../assets/kategori/GüralPremierBelek.avif'
import syHotel from '../assets/kategori/SYHotel.avif'
import frenzy from '../assets/kategori/FrenzyWaterpark.avif'
import curaCao from '../assets/products/Kunuku-Aqua-Resort-CuraCao.avif'
import aqualand1 from '../assets//products/AqualandTorremolInos-Spain.avif'
import aqualand2 from '../assets//products/AqualandTorremolInos-Spain2.avif'
import kaec from '../assets/products/KAEC-RixosJeddah-SaudiArabia.avif'
import navatu from '../assets/products/navatu.avif'
import nickelodeon from '../assets/products/NickelodeonHotel-Antalya.avif'
import navatu1 from '../assets/navatu/navatu1.avif'
import pirate1 from '../assets/splashTower/pirateTheme/1001.avif'

import rixosKaec from '../assets/hero/3.RixosKAEC.avif'
import pantheon from '../assets/hero/4.PantheonWaterpark.avif'
import theLandOfLegends from '../assets/hero/5.TheLandofLegends.avif'
import sClub from '../assets/hero/6.SClubResortHotelAquaPark.avif'
import kunuku from '../assets/hero/7.KunukuAquaResort.avif'
import movenpick from '../assets/hero/9MövenpickResort.avif'
import delphinPalace from '../assets/hero/11.DelphinPalace.avif'
import nirvana from '../assets/hero/12.NirvanaCosmopolitan.avif'

import fantazia from '../assets/hero/14.FantaziaResortMarsaAlam.avif'
import pickalbatros from '../assets/hero/15.PickalbatrosSungoClub.avif'
import aquila from '../assets/hero/16.AquilaRithymnaBeach.avif'
import ethno from '../assets/hero/17.EthnoHotels.avif'
import syHotelAntalya from '../assets/hero/10.SYHotel.avif'
import frenzyFrance from '../assets/hero/Frenzy Water Park - France.avif'
import guralBelek from '../assets/hero/Gural Belek - Turkiye.avif'
import movenpickNew from '../assets/hero/Movenpick Resort - Turkiye.avif'
import nirvanaDolce from '../assets/hero/Nirvana Dolce Vita - Turkiye.avif'
import pineBeach from '../assets/hero/Pine Beach - Turkiye.avif'
import sClubJakovo from '../assets/hero/S Club Jakovo - Serbia.avif'
import seignosseNew from '../assets/hero/Seignosse Atlantic - France.avif'
import landLegendsNew from '../assets/hero/The Land of Legends - Turkiye.avif'
import hero1 from '../assets/hero/1.avif'
import hero2 from '../assets/hero/2.avif'
import hero3 from '../assets/hero/3.avif'
import hero4 from '../assets/hero/4.avif'
import hero5 from '../assets/hero/5.avif'
import hero6 from '../assets/hero/6.avif'
import hero7 from '../assets/hero/7.avif'
import hero8 from '../assets/hero/8.avif'
import hero9 from '../assets/hero/9.avif'
import hero10 from '../assets/hero/10.avif'
import hero11 from '../assets/hero/11.avif'
import hero12 from '../assets/hero/12.avif'
import hero13 from '../assets/hero/13.avif'
import hero14 from '../assets/hero/14.avif'
import hero15 from '../assets/hero/15.avif'
import hero16 from '../assets/hero/16.avif'

const REFS = [
  { src: refAmara, alt: 'Amara Prestige Elite' },
  { src: refCemi, alt: 'Cemi' },
  { src: refCrystal, alt: 'Crystal Hotels' },
  { src: refDelphin, alt: 'Delphin' },
  { src: refIsaba, alt: 'Isaba' },
  { src: refLimak, alt: 'Limak' },
  { src: refNg, alt: 'NG Hotels' },
  { src: refOtium, alt: 'Otium' },
  { src: refPegasos, alt: 'Pegasos' },
  { src: refPickalbatros, alt: 'Pickalbatros' },
  { src: refRixos, alt: 'Rixos' },
  { src: refSelectum, alt: 'Selectum' },
  { src: refSherwood, alt: 'Sherwood' },
  { src: refTitanic, alt: 'Titanic Hotels' },
  { src: refValamar, alt: 'Valamar' },
  { src: refVoyage, alt: 'Voyage' },
]

// ── Glass Kart bileşeni ────────────────────────────────────
function GlassCard({ children, className = '', style = {} }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
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
          animation: 'marquee 64s linear infinite',
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
              loading="lazy"
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
// Hero görselleri
const HERO_IMAGES = [
  { title: 'Frenzy Water Park', location: 'Fransa', img: hero1 },
  { title: 'Seignosse Atlantic Park', location: 'Fransa', img: hero2 },
  { title: 'Rixos Murjana Park', location: 'Suudi Arabistan', img: hero3 },
  { title: 'S Club Park', location: 'Serbia', img: hero4 },
  { title: 'Nirvana Dolce Vita', location: 'Türkiye', img: hero5 },
  { title: 'Pine Beach', location: 'Türkiye', img: hero6 },
  { title: 'The Land of Legends', location: 'Türkiye', img: hero7 },
  { title: 'Aqualand Mallorca', location: 'İspanya', img: hero8 },
  { title: 'Mövenpick Resort', location: 'Türkiye', img: hero9 },
  { title: 'Güral Premier', location: 'Türkiye', img: hero10 },
  { title: 'Fantazia Resort Marsa Alam', location: 'Mısır', img: hero11 },
  { title: 'Sarvar Fürdö', location: 'Macaristan', img: hero12 },
  { title: 'Paradise Spa Dogo', location: 'Güney Kore', img: hero13 },
  { title: 'Aquila Rithymna Beach', location: 'Yunanistan', img: hero14 },
  { title: 'Kirman Sidera', location: 'Türkiye', img: hero15 },
  { title: 'Port-Valais', location: 'İsviçre', img: hero16 },

]

// ── Carousel Görselleri ────────────────────────────────────
const CAROUSEL_IMAGES = [
  { src: curaCao, alt: 'Kunuku Aqua Resort - Curaçao' },
  { src: aqualand1, alt: 'Aqualand Torremolinos - İspanya' },
  { src: aqualand2, alt: 'Aqualand Torremolinos - İspanya 2' },
  { src: frenzy, alt: 'Frenzy Waterpark - Fransa' },
  { src: kaec, alt: 'KAEC Rixos Jeddah - Suudi Arabistan' },
  { src: navatu, alt: 'Navatu Su Parkı' },
  { src: syHotelAntalya, alt: 'SY Hotel Antalya' },
  { src: nickelodeon, alt: 'Nickelodeon Hotel - Antalya' },
]

// ── Sayfa bileşeni ─────────────────────────────────────────
// ── Sayfa bileşeni ─────────────────────────────────────────
export default function HomePage() {
  const { t } = useTranslation()
  const { setActivePage } = useOutletContext();
  const [heroImageIndex, setHeroImageIndex] = useState(0)
  const [carouselImageIndex, setCarouselImageIndex] = useState(0)

  // Location translation mapping helper
  const translateLocation = (loc) => {
    const mapping = {
      'Fransa': t('factories.names.france', { defaultValue: 'France' }),
      'Suudi Arabistan': t('factories.names.saudi_arabia', { defaultValue: 'Saudi Arabia' }),
      'Serbia': t('factories.names.serbia', { defaultValue: 'Serbia' }),
      'Türkiye': t('factories.names.turkey', { defaultValue: 'Turkey' }),
      'İspanya': t('factories.names.spain', { defaultValue: 'Spain' }),
      'Mısır': t('factories.names.egypt', { defaultValue: 'Egypt' }),
      'Macaristan': t('factories.names.hungary', { defaultValue: 'Hungary' }),
      'Güney Kore': t('factories.names.south_korea', { defaultValue: 'South Korea' }),
      'Yunanistan': t('factories.names.greece', { defaultValue: 'Greece' }),
    };
    return mapping[loc] || loc;
  }

  // ── Otomatik resim değiştirme
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 1500) // Her 1.5 saniyede bir resim değişimi
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])


  return (
    <main style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: 'var(--th-bg)' }}
      >

        {/* Büyük blur baloncuklar */}
        <div
          className="absolute -top-28 -left-28 w-130 h-130 rounded-full pointer-events-none"
          style={{
            background: 'var(--th-primary-light)',
            filter: 'blur(90px)',
            opacity: 0.9,
          }}
        />


        {/* İçerik grid */}
        <div className="relative z-10 w-full max-w-[var(--layout-max)] mx-auto px-6 lg:px-16 pt-28 pb-20
          grid lg:grid-cols-[0.6fr_1.4fr] gap-10 xl:gap-16 items-center">

          {/* ── Sol: Tipografi ── */}
          <div className="flex flex-col gap-8">

            <h1
              className="font-black leading-[1.05] tracking-tight"
              style={{ color: 'var(--th-polgun-antrasit)', fontSize: 'clamp(2.4rem,2.8vw,3.2rem)' }}
            >
              {t('home.hero_title')}

            </h1>
            <hr
              className="w-1/4 h-1 border-0 "
              style={{
                background: 'linear-gradient(90deg, #e04020 0%, #c05080 22.5%, #8878b8 37.5%, #7a90c8 50%, #48c8e0 65%, #68d8a8 80%, #a8e040 100%)'

              }}
            />
            <h2
              className="font-black leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(1.1rem,2vw,2.2rem)', letterSpacing: '-0.01em' }}
            >
              {/* LET'S */}
              {["L", "E", "T", "'", "S"].map((char, i) => (
                <span key={`lets-${i}`} style={{ color: '#29a8e0' }}>{char}</span>
              ))}
              {/* boşluk */}
              &nbsp;
              {/* COLOR */}
              {["C", "O", "L", "O", "R"].map((char, i) => (
                <span key={`color-${i}`} style={{ color: '#29a8e0' }}>{char}</span>
              ))}
              {/* boşluk */}
              &nbsp;
              {/* THE — tek gradient span */}
              <span
                style={{
                  background: 'linear-gradient(90deg, #e04020 0%, #c05080 45%, #8878b8 75%, #7a90c8 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                THE
              </span>
              {/* boşluk */}
              &nbsp;
              {/* WATER — tek gradient span */}
              <span
                style={{
                  background: 'linear-gradient(90deg, #7a90c8 0%, #48c8e0 30%, #68d8a8 60%, #a8e040 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                WATER
              </span>
            </h2>
            <p className='text-gray-400'>{t('home.hero_desc')}</p>

            <div className='grid grid-cols-2 divide-x divide-gray-300'>

              {/* 1. Kısım: Yenilikçi Tasarım & Mühendislik */}
              <div
                className='flex items-center justify-center gap-4 px-4'
                style={{ color: 'var(--th-polgun-antrasit)' }}
              >
                {/* Çark / Mühendislik İkonu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 shrink-0"
                  style={{ color: 'var(--th-polgun-blue)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span className="text-sm font-medium leading-relaxed">
                  {t('home.eng_tag').includes(' / ') ? <>{t('home.eng_tag').split(' / ')[0]} <br className="hidden sm:block" /> {t('home.eng_tag').split(' / ')[1]}</> : t('home.eng_tag')}
                </span>
              </div>
              {/* 2. Kısım: Anahtar Teslim & Dünya Çapında Deneyim */}
              <div
                className='flex items-center justify-center gap-4 px-4'
                style={{ color: 'var(--th-polgun-antrasit)' }}
              >
                {/* Yeni, Daha Temiz Küre / Dünya İkonu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 shrink-0"
                  style={{ color: 'var(--th-polgun-blue)' }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>

                <span className="text-sm font-medium leading-relaxed">
                  {t('home.turnkey_tag').includes(' / ') ? <>{t('home.turnkey_tag').split(' / ')[0]} <br className="hidden sm:block" /> {t('home.turnkey_tag').split(' / ')[1]}</> : t('home.turnkey_tag')}
                </span>
              </div>

            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold tracking-wide rounded-full hover:shadow-lg hover:-translate-y-px transition-all duration-200"
              style={{
                backgroundColor: 'var(--th-polgun-blue)',
                color: 'var(--th-surface)',
                boxShadow: '0 4px 12px color-mix(in srgb, var(--th-polgun-blue) 30%, transparent)',
              }}
            >
              {/* Play İkonu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1"
              >
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 20.005c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>

              {t('common.explore_projects')}
            </Link>
          </div>

          {/* ── Sağ: Büyük proje görseli ── */}
          <div className="relative flex items-center justify-center">


            {/* Görsel çerçevesi */}
            <div
              className="relative w-full"
              style={{
                maxWidth: 'clamp(700px, 88vw, 1800px)',
                borderRadius: '2.5rem',
                padding: '12px',
                background: 'rgba(34,171,230,0.18)',
                border: '5px solid var(--th-primary)',
                boxShadow: '0 30px 90px var(--th-primary), inset 0 1px 0 var(--th-primary-light)',
              }}
            >
              <div
                className="rounded-[2.05rem]"
                style={{
                  padding: '8px',
                  background: 'rgba(255,255,255,0.92)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
                <div
                  className="relative overflow-hidden rounded-[1.75rem]"
                  style={{
                    aspectRatio: '16 / 9',
                    background: 'rgba(15,43,91,0.12)',
                  }}
                >
                  {HERO_IMAGES.map((img, idx) => (
                    <img
                      key={`${img.title}-${idx}`}
                      src={img.img}
                      alt={img.title}
                      loading={idx === heroImageIndex ? 'eager' : 'lazy'}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                      style={{ opacity: idx === heroImageIndex ? 1 : 0 }}
                    />
                  ))}

                  {/* Hafif mavi glass overlay (yoğun beyazlığı kırmak için) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(34,171,230,0.08) 0%, transparent 35%, transparent 65%, rgba(40,116,178,0.10) 100%)',
                    }}
                  />

                  {/* Sol-alt başlık overlay */}
                  <div
                    className="absolute left-6 bottom-6 z-20 flex items-center gap-3"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      maxWidth: 'min(560px, calc(100% - 2rem))',
                      background:
                        'linear-gradient(180deg, rgba(32, 32, 32, 0.52) 0%, rgba(77, 77, 77, 0.22) 55%, rgba(79, 79, 79, 0.1) 100%)',
                      backdropFilter: 'blur(4px)',
                      WebkitBackdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.18)',
                      boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
                    }}
                  >
                    {/* Lokasyon İkonu */}
                    <div className="shrink-0 text-white/90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Metin İçeriği */}
                    <div className="flex flex-col">
                      <h2
                        className="text-sm font-black text-white mb-0.5"
                        style={{ textShadow: '0 10px 26px rgba(0,0,0,0.65)' }}
                      >
                        {HERO_IMAGES[heroImageIndex].title}
                      </h2>
                      <p
                        className="text-xs text-white/90"
                        style={{ textShadow: '0 8px 18px rgba(0,0,0,0.55)' }}
                      >
                        {translateLocation(HERO_IMAGES[heroImageIndex].location)}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          KATEGORİLER — 4 büyük gradient kart
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
                style={{ color: 'var(--th-primary)' }}>
                <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-primary)' }} />
                {t('home.categories_title')}
              </p>
              <h2 className="font-black leading-tight" style={{ color: 'var(--th-text)', fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
                {t('home.categories_subtitle').includes(' her ') ? <>{t('home.categories_subtitle').split(' her ')[0]}<br />{t('home.categories_subtitle').split(' her ')[1]}</> : t('home.categories_subtitle')}
              </h2>
            </div>
            <Link
              to="/products"
              className="shrink-0 px-7 py-3.5 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--th-primary)', color: '#fff' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {t('common.all_products')}
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: t('products.slides.title'), sub: t('home.slides_sub'), img: guralPremier, g: 'linear-gradient(to top,rgba(0,0,0,0.4),transparent)', link_to: "/products" },
              { title: t('products.tower.title'), sub: t('home.tower_sub'), img: pirate1, g: 'linear-gradient(to top,rgba(0,0,0,0.4),transparent)', link_to: "/splash-tower" },
              { title: t('nav.arge') + ' ' + t('footer.products'), sub: t('home.arge_sub'), img: navatu1, g: 'linear-gradient(to top,rgba(0,0,0,0.4),transparent)', link_to: "/products?category=Ar-Ge Ürünleri" },
              { title: t('products.zone.title'), sub: t('home.zone_sub'), img: frenzy, g: 'linear-gradient(to top,rgba(0,0,0,0.4),transparent)', link_to: "/splash-zone" },
            ].map((cat, i) => (
              <Link
                key={i}
                to={cat.link_to}
                className="group relative h-72 rounded-2xl overflow-hidden text-left"
                style={{
                  backgroundImage: `${cat.g}, url(${cat.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgba(0,0,0,0.2)'
                }}
              >
                {/* Dekoratif dalgalar */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' }} />
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  </div>
                  <div>
                    <div className="text-white text-xs mb-2">{cat.sub}</div>
                    <div className="text-white font-black text-xl leading-tight">{cat.title}</div>
                    <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-semibold
                      group-hover:text-white group-hover:gap-3 transition-all duration-200">
                      {t('common.learn_more')}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── &Ouml;ZELLIK ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-(--layout-max) mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.10)' }}>

            {/* Sol — Carousel Panel */}
            <div className="relative min-h-95 flex items-end p-10 group"
              style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' }}>
              {/* Carousel G&ouml;rselleri */}
              <div className="absolute inset-0 overflow-hidden">
                {CAROUSEL_IMAGES.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    loading={idx === carouselImageIndex ? 'eager' : 'lazy'}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ opacity: idx === carouselImageIndex ? 1 : 0 }}
                  />
                ))}
              </div>

              <div className="relative z-10 w-full">
                <GlassCard className="p-5">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-2 text-white">{t('home.engineering_tag')}</p>
                  <h3 className="text-xl font-black text-white leading-tight mb-3" style={{ textShadow: '0 4px 12px rgba(97, 97, 97, 0.6)' }}>
                    {t('home.design_to_field').includes(', ') ? <>{t('home.design_to_field').split(', ')[0]}<br />{t('home.design_to_field').split(', ')[1]}</> : t('home.design_to_field')}
                  </h3>
                  <div className="flex flex-wrap gap-2 --th-text-muted">
                    {[t('home.tags.iso'), t('home.tags.grp'), t('home.tags.design3d'), t('home.tags.turnkey')].map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(110, 110, 110, 0.8)', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 2px 6px rgba(76, 76, 76, 0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>

              {/* Carousel Navigasyon Noktaları */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {CAROUSEL_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselImageIndex(idx)}
                    className="transition-all duration-1200 rounded-full"
                    style={{
                      width: idx === carouselImageIndex ? 'clamp(40px, 3vw, 56px)' : 'clamp(12px, 1vw, 16px)',
                      height: 'clamp(12px, 1vw, 16px)',
                      backgroundColor: idx === carouselImageIndex ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(255,255,255,0.6)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sağ — Metin */}
            <div className="p-6 lg:p-8 flex flex-col justify-center" style={{ backgroundColor: 'var(--th-surface)' }}>
              <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
                style={{ color: 'var(--th-primary)' }}>
                <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-primary)' }} />
                {t('home.why_title')}
              </p>
              <h2 className="font-black leading-tight mb-6" style={{ color: 'var(--th-text)', fontSize: 'clamp(1.5rem,2.5vw,2.25rem)' }}>
                {t('home.why_subtitle')}
              </h2>
              <p className="leading-relaxed mb-6 text-base" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 70%,transparent)' }}>
                {t('home.why_desc')}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: t('home.why_pillars.service'), desc: t('home.why_pillars.service_desc') },
                  { label: t('home.why_pillars.countries'), desc: t('home.why_pillars.countries_desc') },
                  { label: t('home.why_pillars.quality'), desc: t('home.why_pillars.quality_desc') },
                  { label: t('home.why_pillars.sustainable'), desc: t('home.why_pillars.sustainable_desc') },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3 p-3 rounded-2xl"
                    style={{ backgroundColor: 'color-mix(in srgb,var(--th-border) 20%,transparent)' }}>
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <div className="text-sm font-bold" style={{ color: 'var(--th-text)' }}>{f.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 55%,transparent)' }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="self-start px-7 py-3 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--th-primary)', color: '#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {t('nav.about')}
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════════════════
          REFERANSLAR — Kayan marquee, belirgin
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: 'var(--th-polgun-antrasit)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14 mb-14 text-center">
          <p className="text-[11px] font-black tracking-[0.35em] uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}>
            {t('home.refs_title')}
          </p>
          <h2 className="font-black text-white leading-tight" style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)' }}>
            {t('home.refs_subtitle').includes(' bize ') ? <>{t('home.refs_subtitle').split(' bize ')[0]}<br />{t('home.refs_subtitle').split(' bize ')[1]}</> : t('home.refs_subtitle')}
          </h2>
        </div>

        {/* Kayan şerit */}
        <div className="relative">
          {/* Sol silik geçiş */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right,var(--th-polgun-antrasit),transparent)' }} />
          {/* Sağ silik geçiş */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left,var(--th-polgun-antrasit),transparent)' }} />

          {/* Marquee container */}
          <MarqueeStrip />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — Apple tarzı büyük gradient panel
      ══════════════════════════════════════════════════════ */}
      <section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="relative rounded-3xl overflow-hidden px-12 py-20 text-center"
            style={{ background: 'linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <circle cx="100" cy="150" r="200" fill="white" />
                <circle cx="700" cy="150" r="180" fill="white" />
              </svg>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-[11px] font-black tracking-[0.35em] uppercase mb-6 text-white/80">
                {t('home.cta_tag')}
              </p>
              <h2 className="font-black text-white leading-tight mb-8" style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)' }}>
                {t('home.cta_title').includes(' hayata ') ? <>{t('home.cta_title').split(' hayata ')[0]}<br />{t('home.cta_title').split(' hayata ')[1]}</> : t('home.cta_title')}
              </h2>
              <p className="text-white/80 mb-12 max-w-lg mx-auto leading-relaxed">
                {t('home.cta_desc')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-10 py-4 font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: '#FFFFFF', color: 'var(--th-primary-darker)', boxShadow: '0 0 40px rgba(0,0,0,0.2)' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  {t('home.cta_btn_quote')}
                </Link>
                <Link
                  to="/projects"
                  className="px-10 py-4 font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)', border: '2px solid rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.95)' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                >
                  {t('home.cta_btn_projects')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}