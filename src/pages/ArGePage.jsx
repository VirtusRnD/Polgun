// ============================================================
// ARGE SAYFASI — ArGe Metni
// ============================================================
import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/polgun-featured-projects-4.avif'
import navatu1 from '../assets/navatu/navatu1.avif'
import savana1 from '../assets/savana/savana5.avif'
import n1 from '../assets/navatu/1.avif'
import n2 from '../assets/navatu/2.avif'
import n3 from '../assets/navatu/3.avif'
import n4 from '../assets/navatu/4.avif'
import n5 from '../assets/navatu/5.avif'
import n6 from '../assets/navatu/6.avif'
import n7 from '../assets/navatu/7.avif'
import n8 from '../assets/navatu/8.avif'
import n9 from '../assets/navatu/9.avif'
import n10 from '../assets/navatu/10.avif'
import n11 from '../assets/navatu/11.avif'
import s1 from '../assets/savana/1.avif'
import s2 from '../assets/savana/2.avif'
import s3 from '../assets/savana/3.avif'
import s4 from '../assets/savana/4.avif'
import s6 from '../assets/savana/6.avif'


// Navatu projesi için modal verisi
const navatuProjectData = {
  id: 'navatu',
  name: 'Navatu',
  location: 'IAAPA Brass Ring Ödüllü Dalga Sistemi',
  type: 'Ar-Ge Projesi',
  slides: [
    { img: n1, title: 'Navatu Tasarım 1', location: 'Ar-Ge Merkezi' },
    { img: n2, title: 'Navatu Tasarım 2', location: 'Ar-Ge Merkezi' },
    { img: n3, title: 'Navatu Tasarım 3', location: 'Ar-Ge Merkezi' },
    { img: n4, title: 'Navatu Tasarım 4', location: 'Ar-Ge Merkezi' },
    { img: n5, title: 'Navatu Tasarım 5', location: 'Ar-Ge Merkezi' },
    { img: n6, title: 'Navatu Tasarım 6', location: 'Ar-Ge Merkezi' },
    { img: n7, title: 'Navatu Tasarım 7', location: 'Ar-Ge Merkezi' },
    { img: n8, title: 'Navatu Tasarım 8', location: 'Ar-Ge Merkezi' },
    { img: n9, title: 'Navatu Tasarım 9', location: 'Ar-Ge Merkezi' },
    { img: n10, title: 'Navatu Tasarım 10', location: 'Ar-Ge Merkezi' },
    { img: n11, title: 'Navatu Tasarım 11', location: 'Ar-Ge Merkezi' },
  ]
}

// Savana projesi için modal verisi
const savanaProjectData = {
  id: 'savana',
  name: 'Savana',
  location: 'Çoklu Kayma Yollu Temalı Su Kaydırağı',
  type: 'Ar-Ge Projesi',
  slides: [
    { img: s1, title: 'Savana Tasarım 1', location: 'Ar-Ge Merkezi' },
    { img: s2, title: 'Savana Tasarım 2', location: 'Ar-Ge Merkezi' },
    { img: s3, title: 'Savana Tasarım 3', location: 'Ar-Ge Merkezi' },
    { img: s4, title: 'Savana Tasarım 4', location: 'Ar-Ge Merkezi' },
    { img: s6, title: 'Savana Tasarım 6', location: 'Ar-Ge Merkezi' },
  ]
}

function ProjectSliderModal({ project, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    setCurrentIndex(0)
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.slides.length)
    }, 2500)
    return () => clearInterval(autoplayRef.current)
  }, [isOpen, project.id])

  const go = (dir) => {
    clearInterval(autoplayRef.current)
    setCurrentIndex((prev) => {
      if (dir === 'prev') return prev === 0 ? project.slides.length - 1 : prev - 1
      return (prev + 1) % project.slides.length
    })
  }

  if (!isOpen) return null
  const slide = project.slides[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl"
        style={{ width: 'min(96vw,1200px)', maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Görsel */}
        <div className="relative bg-gray-900" style={{ height: 'min(76vh,65vw)', minHeight: '260px' }}>
          <img
            key={slide.img}
            src={slide.img}
            alt={slide.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.15) 55%,transparent 100%)' }} />

          {/* Bilgi */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-1.5 opacity-60">{slide.location}</p>
            <h3 className="text-2xl font-black leading-tight">{slide.title}</h3>
          </div>

          {/* Nav butonlar */}
          {project.slides.length > 1 && (<>
            <button onClick={() => go('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => go('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 flex-wrap justify-center px-4 max-w-full">
              {project.slides.map((_, idx) => (
                <button key={idx} onClick={() => { clearInterval(autoplayRef.current); setCurrentIndex(idx) }}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ backgroundColor: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.35)', width: idx === currentIndex ? '20px' : '6px' }}
                />
              ))}
            </div>
          </>)}
        </div>

        {/* Alt bar */}
        <div className="px-6 py-4 bg-neutral-900 flex items-center justify-between text-white gap-4">
          <div>
            <p className="font-black text-base">{project.name}</p>
            <p className="text-sm text-white/45 mt-0.5">{project.location} · {project.type}</p>
          </div>
          {project.slides.length > 1 && (
            <span className="text-sm text-white/35 shrink-0">{currentIndex + 1} / {project.slides.length}</span>
          )}
        </div>

        {/* Kapat */}
        <button onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function ArGePage({ setActivePage }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isNavatuModalOpen, setIsNavatuModalOpen] = useState(false);
  const [isSavanaModalOpen, setIsSavanaModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const anchor = params.get('anchor');
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          const yOffset = -100;
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.pageYOffset + yOffset,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p
                className="text-lg lg:text-4xl font-black block text-white tracking-normal mb-2"
                style={{
                  WebkitTextStroke: '0.8px #FFFFFF',
                  paintOrder: 'stroke fill',
                }}
              >
                {t('nav.arge')}
              </p>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span
                  className="block"
                  style={{
                    color: 'var(--th-primary)',
                    WebkitTextStroke: '15.5px var(--th-polgun-antrasit)',
                    paintOrder: 'stroke fill',
                  }}
                >
                  {t('arge.header_title', { defaultValue: 'Ar-Ge Merkezi' })}
                </span>
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('arge.hero_desc', { defaultValue: 'Polgün Waterparks olarak Ar-Ge yaklaşımımızın temelinde; güvenli, yenilikçi, sürdürülebilir ve yüksek katma değerli su eğlence teknolojileri geliştirmek yer almaktadır.' })}
            </p>
          </div>
        </div>
      </section>

      {/* ── İçerik ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="prose prose-lg">
            <h2 className="text-3xl font-black mb-6" style={{ color: 'var(--th-text)' }}>{t('about.story_title', { defaultValue: 'Geleceği Tasarlıyoruz' })}</h2>
            <p className="mb-6 leading-relaxed text-justify" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              {t('arge.p1', { defaultValue: '2021 yılında Bakanlık onayıyla Ar-Ge Merkezi statüsü kazanan merkezimiz, Muğla’nın ilk ve tek Ar-Ge Merkezi olma niteliğiyle sektörümüzde özgün ürün geliştirme, yerlileştirme ve teknoloji üretme çalışmalarına öncülük etmektedir.' })}
            </p>
            <p className="mb-6 leading-relaxed text-justify" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              {t('arge.p2', { defaultValue: 'Ar-Ge Merkezimizde; araştırmacı, teknisyen ve destek personeli statüsünde görev yapan 30 tam zaman eşdeğer nitelikli Ar-Ge personelimiz ile yeni ürün tasarımı, mühendislik analizleri, prototipleme, test, doğrulama, üretim yöntemi geliştirme ve fikri mülkiyet süreçlerini bütüncül bir yaklaşımla yürütüyoruz.' })}
            </p>
            <p className="mb-6 leading-relaxed text-justify" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              {t('arge.p3', { defaultValue: 'Ülkemiz için millileştirme ve yerlileştirme çalışmalarını stratejik bir sorumluluk olarak görüyor; dışa bağımlılığı azaltan, hızlı uygulanabilir ve müşteri ihtiyaçlarına doğrudan yanıt veren çözümler geliştiriyoruz. Tasarımdan üretime, analizden saha uygulamasına kadar tüm Ar-Ge süreçlerimizde güvenlik, kalite, uluslararası standartlara uygunluk ve sürdürülebilirlik ilkelerini esas alıyoruz.' })}
            </p>

            <h3 className="text-2xl font-black mt-12 mb-4" style={{ color: 'var(--th-text)' }}>{t('arge.innovative_title', { defaultValue: 'Yenilikçi Ürünler' })}</h3>
            <p className="mb-6 leading-relaxed text-justify" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              {t('arge.p4', { defaultValue: 'Polgün Ar-Ge Merkezi’nde geliştirilen projeler; su tasarrufu, kullanıcı güvenliği, kapasite artışı, tematik deneyim, modüler üretim, kompozit malzeme teknolojileri ve yeni nesil su kaydırağı geometrileri gibi alanlarda sektöre değer katmaktadır. Navatu, Savanna, Monarch Butterfly ve Eclipse gibi yenilikçi ürün projelerimiz; Polgün’ün tasarım, mühendislik og üretim gücünü uluslararası pazarda temsil eden önemli Ar-Ge çıktıları arasında yer almaktadır.' })}
            </p>

            <h3 className="text-2xl font-black mt-12 mb-4" style={{ color: 'var(--th-text)' }}>{t('arge.continuous_title', { defaultValue: 'Sürekli Gelişim' })}</h3>
            <p className="mb-6 leading-relaxed text-justify" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              {t('arge.p5', { defaultValue: 'Ar-Ge faaliyetlerimiz yalnızca yeni ürün geliştirme ile sınırlı değildir. Aynı zamanda mevcut ürünlerin performansını artırmak, üretim süreçlerini iyileştirmek, çevresel etkileri azaltmak, malzeme verimliliğini yükseltmek ve uluslararası pazarlarda rekabet gücümüzü artırmak amacıyla sürekli geliştirme çalışmaları yürütüyoruz. Akademik iş birlikleri, bilimsel yayınlar, patent og tasarım tescili süreçleri ile kurumsal bilgi birikimimizi güçlendiriyor; elde edilen çıktıları sürdürülebilir bir inovasyon kültürüne dönüştürüyoruz.' })}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--th-bg)', border: '1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)' }}>
                <h4 className="text-xl font-black mb-4" style={{ color: 'var(--th-primary)' }}>{t('arge.misyon', { defaultValue: 'Misyonumuz' })}</h4>
                <p className="text-sm leading-relaxed text-justify" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
                  {t('arge.misyon_desc')}
                </p>
              </div>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--th-bg)', border: '1px solid color-mix(in srgb, var(--th-polgun-blue) 20%, transparent)' }}>
                <h4 className="text-xl font-black mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('arge.vizyon', { defaultValue: 'Vizyonumuz' })}</h4>
                <p className="text-sm leading-relaxed text-justify" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
                  {t('arge.vizyon_desc')}
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
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>{t('arge.projects_title', { defaultValue: 'Ar-Ge Projelerimiz' })}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Navatu Modal Tetikleyicisi */}
            <div
              className="rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setIsNavatuModalOpen(true)}
              style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)' }}
            >
              <div className="h-64 overflow-hidden">
                <img src={navatu1} alt="Navatu" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--th-text)' }}>Navatu</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--th-polgun-blue)' }}>IAAPA Brass Ring {t('awards.patent_title', { defaultValue: 'Ödüllü Dalga Sistemi' })}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>{t('arge.navatu_desc', { defaultValue: 'Doğal dalga deneyimini yeni bir boyuta taşıyan yenilikçi su parkı sistemi.' })}</p>
              </div>
            </div>

            {/* Savana Modal Tetikleyicisi */}
            <div
              className="rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setIsSavanaModalOpen(true)}
              style={{ backgroundColor: 'var(--th-surface)', border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)' }}
            >
              <div className="h-64 overflow-hidden">
                <img src={savana1} alt="Savana" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--th-text)' }}>Savana</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('arge.savana_sub', { defaultValue: 'Çoklu Kayma Yollu Temalı Su Kaydırağı' })}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>{t('arge.savana_desc', { defaultValue: 'Aynı gövdede dört farklı kayma yolunu bir araya getiren yenilikçi Ar-Ge projesi.' })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fikrî ve Sınai Mülkiyet Haklarımız ── */}
      <section id="fikri-ve-sinai-mulkiyet-haklari" className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>
              {t('arge.fikri_sinai_tag', { defaultValue: 'FİKRİ MÜLKİYET' })}
            </p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>
              {t('arge.fikri_sinai_title')}
            </h2>
            <p className="leading-relaxed text-sm md:text-base" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>
              {t('arge.fikri_sinai_desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                key: 'patent', count: 4, onClick: () => navigate('/patents'), icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ), color: 'var(--th-primary)'
              },
              {
                key: 'utility_model', count: 1, onClick: () => {
                  const el = document.getElementById('faydali-modeller');
                  if (el) {
                    const yOffset = -100;
                    window.scrollTo({
                      top: el.getBoundingClientRect().top + window.pageYOffset + yOffset,
                      behavior: 'smooth'
                    });
                  }
                }, icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ), color: 'var(--th-polgun-blue)'
              },
              {
                key: 'design', count: 12, onClick: () => navigate('/designs'), icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ), color: 'var(--th-primary)'
              },
              {
                key: 'brand', count: 12, onClick: () => navigate('/about?anchor=markalar'), icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ), color: 'var(--th-polgun-blue)'
              },
              {
                key: 'publication', count: 13, onClick: () => navigate('/publications'), icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ), color: 'var(--th-primary)'
              },
              {
                key: 'total', count: 42, icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ), color: 'var(--th-polgun-blue)', isTotal: true
              },
            ].map((item) => (
              <div
                key={item.key}
                onClick={item.onClick}
                className={`p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${item.onClick ? 'cursor-pointer hover:-translate-y-1.5 hover:shadow-xl' : 'hover:-translate-y-1'}`}
                style={{
                  backgroundColor: item.isTotal ? 'color-mix(in srgb, var(--th-primary) 6%, var(--th-surface))' : 'var(--th-bg)',
                  border: item.isTotal
                    ? '2px dashed var(--th-primary)'
                    : '1.5px solid color-mix(in srgb, var(--th-border) 10%, transparent)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300"
                  style={{
                    backgroundColor: 'color-mix(in srgb, ' + item.color + ' 10%, transparent)',
                    color: item.color
                  }}
                >
                  {item.icon}
                </div>
                <span className="text-4xl lg:text-5xl font-black mb-2" style={{ color: 'var(--th-text)' }}>
                  {item.count}
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-white/50" style={{ color: 'var(--th-text-muted)' }}>
                  {t(`arge.stats.${item.key}`, { defaultValue: item.key === 'patent' ? 'Patent' : item.key === 'utility_model' ? 'Faydalı Model' : item.key === 'design' ? 'Tasarım' : item.key === 'brand' ? 'Marka' : item.key === 'publication' ? 'Yayın / Makale' : 'Toplam' })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Faydalı Modeller ── */}
      <section id="faydali-modeller" className="py-28" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>
              {t('arge.utility_models_tag', { defaultValue: 'RESMİ KAYITLAR' })}
            </p>
            <h2 className="text-4xl font-black mb-6" style={{ color: 'var(--th-text)' }}>
              {t('arge.utility_models_title')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Kurumsal Bilgi Kartı */}
            <div
              className="relative rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/5"
              style={{
                backgroundColor: 'var(--th-surface)',
                border: '1px solid color-mix(in srgb, var(--th-border) 12%, transparent)',
              }}
            >
              {/* Sol dikey aksent şeridi */}
              <div className="absolute left-0 top-8 bottom-8 w-1.5 rounded-r-lg" style={{ backgroundColor: 'var(--th-primary)' }} />

              {/* Üst Kısım: Başlık ve Tescilli Etiketi */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-1.5" style={{ color: 'var(--th-text)' }}>
                    {t('arge.dag_kizagi')}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--th-polgun-blue)' }}>
                    {t('nav.arge')} · {t('arge.scope')}: {t('arge.national')}
                  </p>
                </div>
                {/* Tescilli Etiketi */}
                <div className="self-start flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t('arge.registered')}
                </div>
              </div>

              {/* Orta Kısım: Detaylar */}
              <div className="grid sm:grid-cols-2 gap-8 py-6 my-6 border-y border-dashed" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 15%, transparent)' }}>
                {/* Kodlar */}
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                      {t('arge.project_code')}
                    </span>
                    <span className="text-base font-black px-2.5 py-1 rounded-md" style={{ backgroundColor: 'var(--th-bg)', color: 'var(--th-text)' }}>
                      ADV-001
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                      {t('arge.work_name')}
                    </span>
                    <span className="text-base font-black px-2.5 py-1 rounded-md" style={{ backgroundColor: 'var(--th-bg)', color: 'var(--th-text)' }}>
                      FLG-MR1
                    </span>
                  </div>
                </div>

                {/* Tarih Blokları */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: 'var(--th-bg)' }}>
                    <span className="block text-[10px] font-bold tracking-wider uppercase mb-2" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                      {t('arge.app_date')}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-black" style={{ color: 'var(--th-text)' }}>
                      <svg className="w-4 h-4" style={{ color: 'var(--th-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      01.04.2020
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: 'var(--th-bg)' }}>
                    <span className="block text-[10px] font-bold tracking-wider uppercase mb-2" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                      {t('arge.reg_date')}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-black" style={{ color: 'var(--th-text)' }}>
                      <svg className="w-4 h-4" style={{ color: 'var(--th-polgun-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      10.07.2020
                    </div>
                  </div>
                </div>
              </div>

              {/* Alt Bilgi */}
              <div className="flex items-center justify-between text-xs mt-4" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                <span>{t('arge.patent_management', { defaultValue: '© Polgün Waterparks Patent Management' })}</span>
                <span className="font-bold uppercase tracking-wider" style={{ color: 'var(--th-primary)' }}>
                  {t('arge.official_record', { defaultValue: 'Official Record' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal Component Bağlantıları ── */}
      <ProjectSliderModal
        project={navatuProjectData}
        isOpen={isNavatuModalOpen}
        onClose={() => setIsNavatuModalOpen(false)}
      />
      <ProjectSliderModal
        project={savanaProjectData}
        isOpen={isSavanaModalOpen}
        onClose={() => setIsSavanaModalOpen(false)}
      />
    </main>
  )
}