import { useState, useRef } from 'react'
import careerCover from '../assets/career/career-cover.png'
import careerSample from '../assets/career/career-sample.png'

// Positions array reflecting the mockup exactly
const POSITIONS = [
  {
    id: 'arge-muh',
    title: 'Ar-Ge Mühendisi',
    department: 'Ar-Ge',
    location: 'Muğla',
    type: 'Tam Zamanlı',
    date: '22 Mayıs 2025',
    desc: 'Yeni ürün geliştirme projelerinde görev almak üzere Ar-Ge Mühendisi arıyoruz.',
    icon: 'arge',
  },
  {
    id: 'proje-muh',
    title: 'Proje Mühendisi',
    department: 'Proje Yönetimi',
    location: 'Muğla',
    type: 'Tam Zamanlı',
    date: '20 Mayıs 2025',
    desc: 'Yurt içi ve yurt dışı projelerde planlama, koordinasyon ve uygulama süreçlerini yürütecek.',
    icon: 'proje',
  },
  {
    id: 'teknik-ressam',
    title: 'Teknik Ressam',
    department: 'Tasarım',
    location: 'Muğla',
    type: 'Tam Zamanlı',
    date: '19 Mayıs 2025',
    desc: 'Teknik çizim, 3D modelleme ve üretim dokümantasyonu süreçlerinde görev alacak.',
    icon: 'tasarim',
  },
  {
    id: 'uretim-tek',
    title: 'Kompozit Üretim Teknikeri',
    department: 'Üretim',
    location: 'Muğla',
    type: 'Tam Zamanlı',
    date: '13 Mayıs 2025',
    desc: 'Kompozit üretim süreçlerinde görev alacak takım arkadaşı arıyoruz.',
    icon: 'uretim',
  },
  {
    id: 'satin-alma',
    title: 'Satın Alma Uzmanı',
    department: 'Satın Alma',
    location: 'Muğla',
    type: 'Tam Zamanlı',
    date: '10 Mayıs 2025',
    desc: 'Yurt içi ve yurt dışı tedarik süreçlerinde görev alacak satın alma uzmanı arıyoruz.',
    icon: 'satinalma',
  },
]

// 6 core pillars for "Neden Polgün?"
const WHY_POLGUN = [
  {
    title: 'Uluslararası Projeler',
    desc: 'Dünyanın dört bir yanında heyecan verici projelerde çalışma fırsatı.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Ar-Ge ve İnovasyon',
    desc: 'Yenilikçi fikirlerin desteklendiği, gelişime açık bir çalışma ortamı.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Güçlü Ekip Ruhu',
    desc: 'Uzman ve dinamik ekibimizle birlikte üretimden başarıya uzanan yolculuk.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Kariyer ve Gelişim',
    desc: 'Eğitimler, mentorluk ve terfi imkânlarıyla kariyerinizi birlikte büyütüyoruz.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Güvenli ve Sürdürülebilir Çalışma',
    desc: 'İş sağlığı ve güvenliği önceliğimiz, çevreye duyarlı üretim anlayışımız.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Çeşitli Alanlarda Deneyim',
    desc: 'Mühendislikten tasarıma, üretimden sahaya birçok alanda deneyim kazanma fırsatı.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

// Testimonial data for slider
const TESTIMONIALS = [
  {
    quote: "Polgün'de her gün yeni şeyler öğreniyor ve kendimi geliştiriyorum. Ekip ruhu ve destekleyici ortam beni motive ediyor.",
    name: 'Selin K.',
    role: 'Ar-Ge Mühendisi',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250',
  },
  {
    quote: "Üretimden sahaya uzanan projelerde yer almak, kariyerimde büyük bir deneyim kazanmamı sağladı.",
    name: 'Mehmet A.',
    role: 'Proje Mühendisi',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250&h=250',
  },
  {
    quote: "Uluslararası projelerde görev almak ve farklı kültürlerle çalışmak, en keyif aldığım yanlardan biri.",
    name: 'Emre T.',
    role: 'Saha Şefi',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250',
  },
]

// Staj program elements
const INTERNSHIPS = [
  {
    title: 'Yaz Stajı Programı',
    desc: 'Üniversite öğrencileri için yaz dönemi staj fırsatları.',
    icon: (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: 'Uzun Dönem Staj',
    desc: 'Akademik yıl boyunca uzun dönem staj imkânı.',
    icon: (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Yeni Mezun Programı',
    desc: 'Yeni mezunlar için gelişim ve kariyer programı.',
    icon: (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Teknik Okul Stajı',
    desc: 'Meslek lisesi ve teknik okul öğrencileri için staj imkânı.',
    icon: (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

// 5 Step Process
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Başvuru',
    desc: 'Başvurunuzu online olarak tamamlayın.',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Ön Değerlendirme',
    desc: 'Başvurunuz ilgili departman tarafından incelenir.',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Görüşmeler',
    desc: 'İK ve teknik görüşmelerle sürecimiz devam eder.',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Teklif',
    desc: 'Uygun görülen adaylara teklif sunulur.',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Hoş Geldiniz!',
    desc: 'Ekibimize katılımınızla birlikte yolculuğumuz başlar.',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function CareerPage() {
  // Testimonial Carousel State
  const [currentSlide, setCurrentSlide] = useState(0)

  // Filters State
  const [selectedDept, setSelectedDept] = useState('All')
  const [selectedLoc, setSelectedLoc] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Form State
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    department: '',
    locationPreference: '',
    note: '',
    kvkk: false,
    cvConsent: false,
  })
  const [cvFile, setCvFile] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Form reference for smooth scrolling
  const applyFormRef = useRef(null)
  const fileInputRef = useRef(null)

  // Handler for regular inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  // File Upload Handlers
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const fileExtension = file.name.split('.').pop().toLowerCase()
      if (['pdf', 'docx'].includes(fileExtension) && file.size <= 10 * 1024 * 1024) {
        setCvFile(file)
      } else {
        alert('Lütfen geçerli formatta (PDF, DOCX) ve 10 MB\'tan küçük bir dosya yükleyin.')
      }
    }
  }

  const removeCvFile = () => {
    setCvFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.kvkk) {
      alert('Lütfen Aday Çalışan Aydınlatma Metni\'ni onaylayın.')
      return
    }
    if (!cvFile) {
      alert('Lütfen CV belgenizi yükleyin.')
      return
    }
    setSubmitted(true)
  }

  // Filter dynamic logic
  const filteredPositions = POSITIONS.filter((pos) => {
    const deptMatch = selectedDept === 'All' || pos.department === selectedDept
    const locMatch = selectedLoc === 'All' || pos.location === selectedLoc
    const typeMatch = selectedType === 'All' || pos.type === selectedType
    const searchMatch = pos.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        pos.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return deptMatch && locMatch && typeMatch && searchMatch
  })

  // Action: Clicking "Başvur" on a specific card
  const handleApplyToPosition = (position) => {
    setForm((prev) => ({
      ...prev,
      department: position.department,
      note: `Sayın Yetkili,\n\n${position.title} pozisyonu için başvuruda bulunmak istiyorum.`,
    }))
    
    // Smooth scroll to the general application form
    applyFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  // Carousel control triggers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  // Unique lists from data for filters
  const uniqueDepartments = ['All', ...new Set(POSITIONS.map(p => p.department))]
  const uniqueLocations = ['All', 'Muğla', 'Marmara Teknopark']
  const uniqueTypes = ['All', 'Tam Zamanlı', 'Yarı Zamanlı']

  // Position-specific icon selectors
  const getPositionIcon = (key) => {
    const baseStyle = "w-7 h-7 text-[#22ABE6]"
    switch (key) {
      case 'arge':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      case 'proje':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        )
      case 'tasarim':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        )
      case 'uretim':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      case 'satinalma':
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      default:
        return (
          <svg className={baseStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
    }
  }

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--th-bg)' }}>
      
      {/* ── 1. HERO SECTION ── */}
      <section 
        className="relative py-32 lg:py-48 flex items-center bg-cover bg-center overflow-hidden" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(15, 43, 91, 0.95) 40%, rgba(15, 43, 91, 0.4) 100%), url(${careerCover})`
        }}
      >
        {/* Abstract Background Accent Light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22ABE6] opacity-10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-12 w-full z-10">
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Polgün'de <br />
              <span className="text-[#22ABE6]">Kariyer</span>
            </h1>
            <p className="text-white/80 text-base lg:text-lg mt-6 leading-relaxed max-w-xl font-light">
              Su eğlence sektörüne yön veren projelerde yer almak, üretimden tasarıma, Ar-Ge'den saha uygulamalarına uzanan güçlü bir ekibin parçası olmak için bize katılın.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a 
                href="#positions" 
                className="px-8 py-4 bg-[#22ABE6] hover:bg-[#1a8fc2] text-white font-semibold rounded-full shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Açık Pozisyonları Gör
              </a>
              <a 
                href="#apply" 
                className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white hover:text-[#0F2B5B] transition-all duration-300 transform hover:-translate-y-1"
              >
                Genel Başvuru Yap
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. NEDEN POLGÜN SECTION ── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Neden Polgün?</h2>
            <div className="w-16 h-1 bg-[#22ABE6] mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {WHY_POLGUN.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-5 p-2 transition-transform duration-300 hover:translate-y-[-4px]"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-md shadow-blue-500/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE SECTION: AÇIK POZİSYONLAR & GENEL BAŞVURU ── */}
      <section id="positions" className="py-24 bg-gray-50/50">
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Açık Pozisyonlar (List) */}
            <div className="col-span-1 lg:col-span-7">
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Açık Pozisyonlar</h2>
                <p className="text-sm text-gray-500 mt-2">Sizin için uygun pozisyonları keşfedin.</p>
              </div>

              {/* Dynamic Filter Controls */}
              <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm mb-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Departman Filter */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Departman</label>
                    <select 
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="w-full text-xs font-semibold bg-gray-50 text-gray-700 px-3 py-2.5 rounded-lg border border-gray-200 outline-none focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {uniqueDepartments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept === 'All' ? 'Tüm Departmanlar' : dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Lokasyon Filter */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Lokasyon</label>
                    <select 
                      value={selectedLoc}
                      onChange={(e) => setSelectedLoc(e.target.value)}
                      className="w-full text-xs font-semibold bg-gray-50 text-gray-700 px-3 py-2.5 rounded-lg border border-gray-200 outline-none focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {uniqueLocations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc === 'All' ? 'Tüm Lokasyonlar' : loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Çalışma Tipi Filter */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Çalışma Tipi</label>
                    <select 
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full text-xs font-semibold bg-gray-50 text-gray-700 px-3 py-2.5 rounded-lg border border-gray-200 outline-none focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {uniqueTypes.map((type) => (
                        <option key={type} value={type}>
                          {type === 'All' ? 'Tüm Çalışma Tipleri' : type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Pozisyon ara..."
                    className="w-full text-xs bg-gray-50 text-gray-800 pl-10 pr-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Job Listings List */}
              <div className="flex flex-col gap-4">
                {filteredPositions.length > 0 ? (
                  filteredPositions.map((pos) => (
                    <div 
                      key={pos.id}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 flex flex-col md:flex-row gap-5 items-start justify-between"
                    >
                      <div className="flex items-start gap-4">
                        {/* Job Icon */}
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50/65 rounded-xl flex items-center justify-center border border-blue-100">
                          {getPositionIcon(pos.icon)}
                        </div>
                        {/* Job Details */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 transition-colors hover:text-[#22ABE6]">{pos.title}</h3>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#22ABE6] border border-blue-100">
                              {pos.department}
                            </span>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                              {pos.location}
                            </span>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                              {pos.type}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-3 font-light leading-relaxed">
                            {pos.desc}
                          </p>
                        </div>
                      </div>

                      {/* Right Hand Actions */}
                      <div className="flex md:flex-col items-end justify-between md:justify-center w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 gap-4">
                        <button 
                          onClick={() => handleApplyToPosition(pos)}
                          className="px-6 py-2 border-2 border-[#22ABE6] text-[#22ABE6] font-semibold text-xs rounded-full hover:bg-[#22ABE6] hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
                        >
                          Başvur
                        </button>
                        <span className="text-[10px] text-gray-400 font-light">
                          {pos.date}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white py-16 text-center rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-400 text-sm">Arama kriterlerinize uygun açık pozisyon bulunamadı.</p>
                    <button 
                      onClick={() => { setSelectedDept('All'); setSelectedLoc('All'); setSelectedType('All'); setSearchQuery(''); }}
                      className="text-[#22ABE6] text-xs font-semibold underline mt-2 hover:text-[#1a8fc2] cursor-pointer"
                    >
                      Filtreleri Temizle
                    </button>
                  </div>
                )}
                
                {filteredPositions.length > 0 && (
                  <button 
                    onClick={() => { setSelectedDept('All'); setSelectedLoc('All'); setSelectedType('All'); setSearchQuery(''); }}
                    className="w-full py-3 border border-gray-300 text-gray-600 font-semibold text-xs rounded-full hover:bg-gray-50 transition-colors mt-2 text-center cursor-pointer"
                  >
                    Tüm Pozisyonları Gör
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Genel Başvuru (Form) */}
            <div ref={applyFormRef} className="col-span-1 lg:col-span-5" id="apply">
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-gray-200 shadow-lg">
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Genel Başvuru</h2>
                  <p className="text-xs text-gray-500 mt-2 font-light leading-relaxed">
                    Size uygun bir pozisyon yoksa genel başvurunuzu bırakabilir, uygun fırsatlarda sizinle iletişime geçebiliriz.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-16 px-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-emerald-500/20">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Başvurunuz Alındı!</h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-light max-w-sm mx-auto">
                      Kariyer başvurunuz veritabanımıza kaydedilmiştir. İnsan Kaynakları ekibimiz profilinizi değerlendirerek sizinle iletişime geçecektir.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false)
                        setForm({
                          name: '', email: '', phone: '', city: '',
                          department: '', locationPreference: '', note: '',
                          kvkk: false, cvConsent: false
                        })
                        setCvFile(null)
                      }}
                      className="mt-6 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full shadow transition-all duration-200 cursor-pointer"
                    >
                      Yeni Başvuru Yap
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Ad Soyad *</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full text-xs bg-gray-50 text-gray-800 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1.5">E-posta *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full text-xs bg-gray-50 text-gray-800 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Telefon *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="0 (555) 555-5555"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full text-xs bg-gray-50 text-gray-800 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* City Dropdown Selection */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Yaşadığınız Şehir *</label>
                      <select 
                        name="city" 
                        value={form.city}
                        onChange={handleChange}
                        required
                        className="w-full text-xs bg-gray-50 text-gray-800 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 cursor-pointer"
                      >
                        <option value="">Seçiniz</option>
                        <option value="Muğla">Muğla</option>
                        <option value="İstanbul">İstanbul</option>
                        <option value="Ankara">Ankara</option>
                        <option value="İzmir">İzmir</option>
                        <option value="Antalya">Antalya</option>
                        <option value="Bursa">Bursa</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>

                    {/* Target Department Selection */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Başvurmak İstediğiniz Departman *</label>
                      <select 
                        name="department" 
                        value={form.department}
                        onChange={handleChange}
                        required
                        className="w-full text-xs bg-gray-50 text-gray-800 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 cursor-pointer"
                      >
                        <option value="">Seçiniz</option>
                        <option value="Ar-Ge">Ar-Ge</option>
                        <option value="Proje Yönetimi">Proje Yönetimi</option>
                        <option value="Tasarım">Tasarım</option>
                        <option value="Üretim">Üretim</option>
                        <option value="Satın Alma">Satın Alma</option>
                        <option value="İdari İşler">İdari İşler</option>
                        <option value="Staj / Yeni Mezun">Staj / Yeni Mezun</option>
                      </select>
                    </div>

                    {/* Workplace Choice Dropdown */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Çalışma Lokasyonu Tercihiniz</label>
                      <select 
                        name="locationPreference" 
                        value={form.locationPreference}
                        onChange={handleChange}
                        className="w-full text-xs bg-gray-50 text-gray-800 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 cursor-pointer"
                      >
                        <option value="">Seçiniz</option>
                        <option value="Muğla Merkez">Muğla Merkez</option>
                        <option value="Marmara Teknopark">Marmara Teknopark</option>
                        <option value="Saha (Şantiyeler)">Saha (Şantiyeler)</option>
                        <option value="Fark etmez">Fark etmez</option>
                      </select>
                    </div>

                    {/* Motivation Note Area */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Kısa Ön Yazı (Opsiyonel)</label>
                      <textarea 
                        name="note" 
                        rows="3" 
                        value={form.note}
                        onChange={handleChange}
                        placeholder="Yeteneklerinizden ve hedeflerinizden kısaca bahsedin..."
                        className="w-full text-xs bg-gray-50 text-gray-800 px-4 py-3 rounded-xl border border-gray-200 outline-none resize-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Drag and Drop CV File Upload Area */}
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1.5">CV Yükleyin *</label>
                      <div 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`w-full py-6 px-4 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
                          isDragOver 
                            ? 'border-[#22ABE6] bg-blue-50/20' 
                            : cvFile 
                              ? 'border-emerald-400 bg-emerald-50/10' 
                              : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50/50'
                        }`}
                      >
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.docx"
                          className="hidden" 
                        />
                        
                        {cvFile ? (
                          <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 text-emerald-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-xs font-bold text-gray-800 max-w-[200px] truncate">{cvFile.name}</p>
                            <p className="text-[10px] text-gray-400 mt-1">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                            <button 
                              type="button" 
                              onClick={(e) => { e.stopPropagation(); removeCvFile(); }}
                              className="text-red-500 hover:text-red-700 text-[10px] font-bold mt-2 hover:underline focus:outline-none cursor-pointer"
                            >
                              Dosyayı Kaldır
                            </button>
                          </div>
                        ) : (
                          <>
                            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-xs text-gray-700 font-semibold">Dosyanızı sürükleyin veya <span className="text-[#22ABE6] underline">seçin</span></p>
                            <p className="text-[10px] text-gray-400 mt-1">PDF, DOCX (Maks. 10 MB)</p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* KVKK and Agreement Checkboxes */}
                    <div className="pt-2 space-y-3">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="kvkk"
                          checked={form.kvkk}
                          onChange={handleChange}
                          required
                          className="mt-0.5 rounded text-blue-500 focus:ring-blue-400 w-3.5 h-3.5 border-gray-300 cursor-pointer"
                        />
                        <span className="text-[10px] text-gray-500 leading-normal">
                          <a href="#" className="text-blue-500 hover:underline font-semibold">Aday Çalışan Aydınlatma Metni</a>'ni okudum.
                        </span>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="cvConsent"
                          checked={form.cvConsent}
                          onChange={handleChange}
                          className="mt-0.5 rounded text-blue-500 focus:ring-blue-400 w-3.5 h-3.5 border-gray-300 cursor-pointer"
                        />
                        <span className="text-[10px] text-gray-500 leading-normal">
                          Mevcut ilan dışında doğabilecek uygun pozisyonlar için CV bilgilerimin değerlendirilmesine izin veriyorum.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      className="w-full py-3.5 bg-[#22ABE6] hover:bg-[#1a8fc2] text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg transition-all duration-200 transform active:scale-[0.98] cursor-pointer"
                    >
                      Başvuruyu Gönder
                    </button>
                    
                    {/* Security Info */}
                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 text-center pt-2">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Kişisel verileriniz KVKK kapsamında güvenli bir şekilde korunmaktadır.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. STAJ PROGRAMLARI & ÇALIŞANLARIMIZ ANLATIYOR ── */}
      <section className="py-24 bg-white border-t border-b border-gray-150">
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT COLUMN: Staj Programları */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Staj ve Yeni Mezun Programları</h2>
                <p className="text-xs text-gray-500 mt-2 font-light">Geleceğin profesyonellerini yetiştiriyoruz.</p>
              </div>

              {/* Programs List */}
              <div className="space-y-4">
                {INTERNSHIPS.map((prog, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        department: 'Staj / Yeni Mezun',
                        note: `Sayın Yetkili,\n\n${prog.title} programı hakkında başvuruda bulunmak istiyorum.`,
                      }))
                      applyFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-150 hover:border-blue-200 bg-white shadow-sm transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 flex-shrink-0">
                        {prog.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{prog.title}</h4>
                        <p className="text-xs text-gray-400 font-light mt-0.5">{prog.desc}</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => {
                  setForm((prev) => ({
                    ...prev,
                    department: 'Staj / Yeni Mezun',
                    note: 'Sayın Yetkili,\n\nStaj programı / Yeni mezun gelişim programı hakkında başvuruda bulunmak istiyorum.',
                  }))
                  applyFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
                className="mt-6 px-6 py-2.5 border border-[#22ABE6] text-[#22ABE6] font-semibold text-xs rounded-full hover:bg-[#22ABE6] hover:text-white transition-all duration-200 cursor-pointer"
              >
                Staj Başvurusu Yap
              </button>
            </div>

            {/* RIGHT COLUMN: Çalışanlarımız Anlatıyor (Interactive Slider) */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Çalışanlarımız Anlatıyor</h2>
                <p className="text-xs text-gray-500 mt-2 font-light">Polgün'de çalışmak nasıl bir deneyim? Onlardan dinleyin.</p>
              </div>

              {/* Slider Area */}
              <div className="relative">
                {/* Navigation Buttons (Prev / Next) */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-150 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#22ABE6] z-10 transition-colors focus:outline-none cursor-pointer animate-pulse"
                  aria-label="Önceki Yorum"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-150 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#22ABE6] z-10 transition-colors focus:outline-none cursor-pointer animate-pulse"
                  aria-label="Sonraki Yorum"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Testimonial Active Display Card */}
                <div className="bg-gray-50/50 border border-gray-200 rounded-3xl p-6 lg:p-8 min-h-[290px] flex flex-col justify-between shadow-sm transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    {/* Circle Avatar Image */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md mb-4 bg-gray-200 relative">
                      <img 
                        src={TESTIMONIALS[currentSlide].img} 
                        alt={TESTIMONIALS[currentSlide].name}
                        className="w-full h-full object-cover" 
                      />
                    </div>

                    {/* Testimonial Quote */}
                    <div className="relative px-4 animate-fade-in">
                      <span className="absolute top-[-10px] left-0 text-3xl text-blue-200 font-serif">“</span>
                      <p className="text-xs lg:text-sm text-gray-700 italic leading-relaxed font-light py-2">
                        {TESTIMONIALS[currentSlide].quote}
                      </p>
                      <span className="absolute bottom-[-20px] right-0 text-3xl text-blue-200 font-serif">”</span>
                    </div>
                  </div>

                  {/* Profile Signature Details */}
                  <div className="text-center mt-6 pt-4 border-t border-gray-100">
                    <h5 className="text-xs font-bold text-gray-900">{TESTIMONIALS[currentSlide].name}</h5>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase mt-0.5 tracking-wider">
                      {TESTIMONIALS[currentSlide].role}
                    </p>
                  </div>
                </div>

                {/* Dots indicators */}
                <div className="flex items-center justify-center gap-1.5 mt-5">
                  {TESTIMONIALS.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                        currentSlide === index 
                          ? 'w-6 bg-[#22ABE6]' 
                          : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Slayt ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. BAŞVURU SÜRECİMİZ STEPPER ── */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Başvuru Sürecimiz</h2>
            <p className="text-xs text-gray-500 mt-2 font-light">Şeffaf ve hızlı bir süreç ile adaylarimizi değerlendiriyoruz.</p>
            <div className="w-16 h-1 bg-[#22ABE6] mx-auto mt-4 rounded-full" />
          </div>

          {/* Stepper Flow Layout */}
          <div className="relative">
            {/* Background Line Connecting Steps on Desktop */}
            <div className="absolute top-10 left-8 right-8 h-0.5 border-t border-dashed border-gray-300 hidden lg:block -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center px-4 group">
                  {/* Step Ring */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 group-hover:border-[#22ABE6] transition-colors flex items-center justify-center shadow-sm relative mb-4">
                    {step.icon}
                    
                    {/* Index Tag */}
                    <span className="absolute -top-1 -right-1 bg-[#22ABE6] text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#22ABE6] transition-colors mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed max-w-[160px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CALL TO ACTION BANNER ── */}
      <section className="py-16" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-12">
          <div 
            className="p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8"
            style={{ 
              background: 'linear-gradient(135deg, var(--th-polgun-blue) 0%, var(--th-primary) 100%)'
            }}
          >
            <div className="max-w-2xl text-white">
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
                Sizin yeteneğiniz, bizim geleceğimiz.
              </h2>
              <p className="text-sm text-white/80 font-light mt-3 leading-relaxed">
                Polgün ailesine katılmak ve geleceğin projelerinde yer almak için bugün başvurunuzu yapın.
              </p>
            </div>
            <a 
              href="#apply"
              className="px-8 py-3.5 bg-white text-[#2874B2] hover:text-[#22ABE6] hover:bg-gray-50 font-bold text-xs rounded-full transition-all duration-300 shrink-0 shadow-lg shadow-black/10 transform active:scale-95 cursor-pointer text-center"
            >
              Genel Başvuru Yap
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
