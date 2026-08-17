// ============================================================
// ARGE SAYFASI — ArGe Metni
// ============================================================
import React, { useState, useEffect, useRef } from 'react'
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
  const [isNavatuModalOpen, setIsNavatuModalOpen] = useState(false);
  const [isSavanaModalOpen, setIsSavanaModalOpen] = useState(false); // Yeni State eklendi

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
                <p className="text-sm mb-4" style={{ color: 'var(--th-polgun-blue)' }}>IAAPA Brass Ring Ödüllü Dalga Sistemi</p>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>Doğal dalga deneyimini yeni bir boyuta taşıyan yenilikçi su parkı sistemi.</p>
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
                <p className="text-sm mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Çoklu Kayma Yollu Temalı Su Kaydırağı</p>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}>Aynı gövdede dört farklı kayma yolunu bir araya getiren yenilikçi Ar-Ge projesi.</p>
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