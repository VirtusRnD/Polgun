import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import FlipbookModal from '../components/FlipbookModal'

const PUBLICATIONS_DATA = [
  {
    id: 13,
    projectCode: 'GRP-012',
    projectName: 'Eclipse',
    title: 'Experience Design Through Hydrodynamic Flow Control and Geometric Innovations: ECLIPSE Water Slide',
    scope: 'Uluslararası',
    status: 'Yayımlandı', // 'published'
    pubDate: '31.12.2025',
    year: 2025,
    type: 'Bildiri', // 'proceedings'
    identifierKey: 'e_issn',
    identifierVal: '',
    authors: 'Kübra Tuna',
    sourceUrl: '/documents/makale/1.pdf',
    buttonType: 'view_proceedings'
  },
  {
    id: 12,
    projectCode: 'GRP-010',
    projectName: 'Kompozit Atıkların Geri Dönüştürülmesi',
    title: 'Mechanical and Environmental Comparison of Natural Fibers and Glass Fiber in the L-RTM Method',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '29.06.2025',
    year: 2025,
    type: 'Makale', // 'article'
    identifierKey: 'online_issn',
    identifierVal: '2822-2296',
    authors: 'Nazmi Türkhan, Kübra Tuna, Hüseyin Arıkan, Yusuf Uzun',
    sourceUrl: 'https://scholar.google.com/scholar?hl=tr&as_sdt=0%2C5&q=Mechanical+and+Environmental+Comparison+of+Natural+Fibers+and+Glass+Fiber+in+the+L-RTM+Method&btnG=',
    buttonType: 'inspect'
  },
  {
    id: 11,
    projectCode: 'GRP-006',
    projectName: 'Body River',
    title: 'R&D Studies in the Water Slides Industry',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '25.12.2024',
    year: 2024,
    type: 'Kitap Bölümü', // 'book_chapter'
    identifierKey: 'isbn',
    identifierVal: '978-625-6959-40-8',
    authors: 'Yusuf Uzun, Hüseyin Arıkan, Nazmi Türkhan, Dila Yaz',
    sourceUrl: 'https://scholar.google.com/scholar?hl=tr&as_sdt=0%2C5&q=R%26D+Studies+in+the+Water+Slides+Industry&btnG=',
    buttonType: 'open_doc',
  },
  {
    id: 10,
    projectCode: 'GRP-009',
    projectName: 'Savana',
    title: 'Su Parklarında Yenilikçi Temalı Kaydırak Tasarımı: Savanna',
    scope: 'Ulusal',
    status: 'Yayımlandı',
    pubDate: '20.12.2024',
    year: 2024,
    type: 'Makale',
    identifierKey: 'issn',
    identifierVal: '2980-020X',
    authors: 'Nazmi Türkhan, Dila Yaz, Hüseyin Arıkan, Yusuf Uzun',
    sourceUrl: 'https://scholar.google.com/scholar?hl=tr&as_sdt=0%2C5&q=Su+Parklar%C4%B1nda+Yenilik%C3%A7i+Temal%C4%B1+Kayd%C4%B1rak+Tasar%C4%B1m%C4%B1%3A+Savanna&btnG=',
    buttonType: 'inspect'
  },
  {
    id: 9,
    projectCode: 'GRP-010',
    projectName: 'Kompozit Atıkların Geri Dönüştürülmesi',
    title: 'The Role of Polgün in the Historical Development of Water Slides',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '01.12.2024',
    year: 2024,
    type: 'Kitap Bölümü',
    identifierKey: 'isbn',
    identifierVal: '978-625-6959-42-2',
    authors: 'Yusuf Uzun, Hüseyin Arıkan, Nazmi Türkhan, Dila Yaz',
    sourceUrl: '/documents/makale/3.pdf',
    buttonType: 'open_doc'
  },
  {
    id: 8,
    projectCode: 'GRP-007',
    projectName: 'Floresan Aydınlatma',
    title: 'Su Kaydıraklarında Enerji Verimliliği ve Aydınlatma Çözümleri',
    scope: 'Ulusal',
    status: 'Yayımlandı',
    pubDate: '29.11.2024',
    year: 2024,
    type: 'Bildiri',
    identifierKey: '',
    identifierVal: '',
    authors: 'Yusuf Uzun, Hüseyin Arıkan, Nazmi Türkhan, Dila Yaz',
    sourceUrl: 'https://usimp.org.tr',
    buttonType: 'view_proceedings'
  },
  {
    id: 7,
    projectCode: 'GRP-005',
    projectName: 'Monarch Butterfly',
    title: 'Water Park of the Future: Monarch Butterfly Slide with Eco-Friendly Design and Smart Water Management',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '22.05.2024',
    year: 2024,
    type: 'Makale',
    identifierKey: 'e_issn',
    identifierVal: '2587-1110',
    authors: 'Yusuf Uzun, Mehmet Kayrıcı, Nazmi Türkhan, Dila Yaz',
    sourceUrl: 'https://dergipark.org.tr/en/pub/ems/article/1430128',
    buttonType: 'inspect'
  },
  {
    id: 6,
    projectCode: '116197',
    projectName: 'Beş Eksenli Kayma Davranışına Sahip Temalı Kaydırak Geliştirme',
    title: 'Themed Slide Development Project with 5-Axis Sliding Behavior',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '30.06.2022',
    year: 2022,
    type: 'Bildiri',
    identifierKey: 'isbn',
    identifierVal: '978-605-71214-1-7',
    authors: 'Furkan Çakır, Yusuf Uzun, Mehmet Kayrıcı',
    sourceUrl: 'https://www.researchgate.net',
    buttonType: 'view_proceedings'
  },
  {
    id: 5,
    projectCode: 'GRP-002',
    projectName: 'Kompozit Malzemelere Uygulanabilir Doğal Işık Efekti Desenlerinin Geliştirilmesi',
    title: 'Fluorescent Lighting at Glass Reinforced Plastic Material',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '30.06.2022',
    year: 2022,
    type: 'Bildiri',
    identifierKey: 'isbn',
    identifierVal: '978-605-71214-1-7',
    authors: 'Furkan Çakır, Yusuf Uzun, Hüseyin Arıkan',
    sourceUrl: 'https://www.researchgate.net',
    buttonType: 'view_proceedings'
  },
  {
    id: 4,
    projectCode: 'GRP-004',
    projectName: 'Kompozit Malzeme İç Yüzeylerine Dijital Baskı Uygulaması',
    title: 'Su Kaydıraklarında Özel Polyester Bazlı Kumaş ile Dijital Baskı',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '26.03.2022',
    year: 2022,
    type: 'Bildiri',
    identifierKey: 'e_isbn',
    identifierVal: '978-625-69690-478-0',
    authors: 'Nazmi Türkhan, Yusuf Uzun, Mehmet Kayrıcı',
    sourceUrl: '/documents/makale/4.pdf',
    buttonType: 'view_proceedings'
  },
  {
    id: 3,
    projectCode: 'GRP-003',
    projectName: 'Babochka',
    title: 'Özgün Geometriye Sahip Ekstrem Kaydırak Babochka',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '25.03.2022',
    year: 2022,
    type: 'Bildiri',
    identifierKey: 'e_isbn',
    identifierVal: '978-625-69690-478-0',
    authors: 'Nazmi Türkhan, Yusuf Uzun, Mehmet Kayrıcı',
    sourceUrl: '/documents/makale/2.pdf',
    buttonType: 'view_proceedings'
  },
  {
    id: 2,
    projectCode: 'INT-001',
    projectName: 'Splash Adventure',
    title: 'Islak Zeminli Oyun Parkuru ve Çocuk Gelişimindeki Rolü',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '25.03.2022',
    year: 2022,
    type: 'Bildiri',
    identifierKey: 'e_isbn',
    identifierVal: '978-625-69690-478-0',
    authors: 'Nazmi Türkhan, Yusuf Uzun, Hüseyin Arıkan',
    sourceUrl: '/documents/makale/5.pdf',
    buttonType: 'view_proceedings'
  },
  {
    id: 1,
    projectCode: 'INT-001',
    projectName: 'Splash Adventure',
    title: 'Su Parkı ve Su Kaydırakları Üreticilerinin Otel İşletmeleri İçin Çocuklara Yönelik Ürettiği Ürünler: Polgün Örneği',
    scope: 'Uluslararası',
    status: 'Yayımlandı',
    pubDate: '23.04.2018',
    year: 2018,
    type: 'Makale',
    identifierKey: '',
    identifierVal: '',
    authors: 'Jale Kahvecioğlu, Cafer Topaloğlu',
    sourceUrl: 'https://dergipark.org.tr/en/download/article-file/601581',
    buttonType: 'inspect'
  }
]

const YEARS = ['Tümü', 2018, 2022, 2024, 2025]

export default function PublicationsPage() {
  const { t } = useTranslation()
  const [filterScope, setFilterScope] = useState('all') // 'all' | 'national' | 'international'
  const [filterType, setFilterType] = useState('all') // 'all' | 'article' | 'proceedings' | 'book_chapter'
  const [filterYear, setFilterYear] = useState('Tümü')
  const [selectedPdf, setSelectedPdf] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filtering Logic
  const filteredData = PUBLICATIONS_DATA.filter((pub) => {
    // Scope filter
    const matchesScope =
      filterScope === 'all' ||
      (filterScope === 'national' && pub.scope === 'Ulusal') ||
      (filterScope === 'international' && pub.scope === 'Uluslararası')

    // Type filter
    const matchesType =
      filterType === 'all' ||
      (filterType === 'article' && pub.type === 'Makale') ||
      (filterType === 'proceedings' && pub.type === 'Bildiri') ||
      (filterType === 'book_chapter' && pub.type === 'Kitap Bölümü')

    // Year filter
    const matchesYear =
      filterYear === 'Tümü' || pub.year.toString() === filterYear.toString()

    return matchesScope && matchesType && matchesYear
  })

  // Normalize translations for badges
  const getScopeLabel = (scope) => {
    return scope === 'Uluslararası'
      ? t('publicationsPage.filters.international', { defaultValue: 'Uluslararası' })
      : t('publicationsPage.filters.national', { defaultValue: 'Ulusal' })
  }

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('nav.arge')} · {t('nav.publications', { defaultValue: 'Akademik Yayınlar' })}
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                {t('publicationsPage.title', { defaultValue: 'Akademik Yayınlarımız' })}
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('publicationsPage.desc', {
                defaultValue: "Polgün'ün akademik, teknik ve sektörel yayın çalışmaları; yeni nesil mühendislik çözümleri ve sektörel literatüre katkı sağlamaktadır."
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ── Filtreler ve Arama Şeridi ── */}
      <div
        className="sticky top-[72px] z-30 border-b"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--th-bg) 95%, transparent)',
          backdropFilter: 'blur(12px)',
          borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            {/* Kapsam & Tür Filtreleri */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Kapsam Filtresi */}
              <div className="flex gap-1.5 flex-wrap items-center">
                <span className="text-[10px] font-black uppercase tracking-wider mr-2" style={{ color: 'var(--th-text-muted)' }}>
                  {t('publicationsPage.card.scope', { defaultValue: 'Kapsam' })}:
                </span>
                {[
                  { id: 'all', label: t('publicationsPage.filters.all', { defaultValue: 'Tümü' }) },
                  { id: 'national', label: t('publicationsPage.filters.national', { defaultValue: 'Ulusal' }) },
                  { id: 'international', label: t('publicationsPage.filters.international', { defaultValue: 'Uluslararası' }) }
                ].map((scope) => (
                  <button
                    key={scope.id}
                    onClick={() => setFilterScope(scope.id)}
                    className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                    style={
                      filterScope === scope.id
                        ? { backgroundColor: 'var(--th-primary)', color: '#fff' }
                        : { color: 'var(--th-text-muted)', backgroundColor: 'transparent' }
                    }
                    onMouseEnter={(e) => {
                      if (filterScope !== scope.id) e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-primary) 8%, transparent)'
                    }}
                    onMouseLeave={(e) => {
                      if (filterScope !== scope.id) e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    {scope.label}
                  </button>
                ))}
              </div>

              <div className="hidden md:block w-px h-4" style={{ backgroundColor: 'color-mix(in srgb, var(--th-border) 20%, transparent)' }} />

              {/* Tür Filtresi */}
              <div className="flex gap-1.5 flex-wrap items-center">
                <span className="text-[10px] font-black uppercase tracking-wider mr-2" style={{ color: 'var(--th-text-muted)' }}>
                  {t('publicationsPage.card.type', { defaultValue: 'Tür' })}:
                </span>
                {[
                  { id: 'all', label: t('publicationsPage.filters.all', { defaultValue: 'Tümü' }) },
                  { id: 'article', label: t('publicationsPage.filters.article', { defaultValue: 'Makale' }) },
                  { id: 'proceedings', label: t('publicationsPage.filters.proceedings', { defaultValue: 'Bildiri' }) },
                  { id: 'book_chapter', label: t('publicationsPage.filters.book_chapter', { defaultValue: 'Kitap Bölümü' }) }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFilterType(type.id)}
                    className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                    style={
                      filterType === type.id
                        ? { backgroundColor: 'var(--th-polgun-blue)', color: '#fff' }
                        : { color: 'var(--th-text-muted)', backgroundColor: 'transparent' }
                    }
                    onMouseEnter={(e) => {
                      if (filterType !== type.id) e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 8%, transparent)'
                    }}
                    onMouseLeave={(e) => {
                      if (filterType !== type.id) e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Yıl Filtresi */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 55%, transparent)' }}>
                {t('publicationsPage.filters.by_year', { defaultValue: 'Yıla Göre' })}:
              </span>
              <div className="relative">
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="appearance-none pl-4 py-2 rounded-xl text-xs font-bold border transition-colors outline-none cursor-pointer"
                  style={{
                    backgroundColor: 'var(--th-surface)',
                    borderColor: 'color-mix(in srgb, var(--th-border) 20%, transparent)',
                    color: 'var(--th-text)',
                    paddingRight: '2.5rem',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none'
                  }}
                >
                  {YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y === 'Tümü' ? t('publicationsPage.filters.all', { defaultValue: 'Tümü' }) : y}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--th-polgun-blue)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Yayın Listesi ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          {filteredData.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-semibold" style={{ color: 'var(--th-text-muted)' }}>
                {t('common.no_content', { defaultValue: 'Gösterilecek yayın kaydı bulunamadı.' })}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {filteredData.map((pub) => (
                <div
                  key={pub.id}
                  className="relative rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row justify-between lg:items-center gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/5"
                  style={{
                    backgroundColor: 'var(--th-bg)',
                    border: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)'
                  }}
                >
                  {/* Sol aksent şeridi */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1.5 rounded-r-lg"
                    style={{
                      backgroundColor:
                        pub.type === 'Makale'
                          ? 'var(--th-primary)'
                          : pub.type === 'Bildiri'
                            ? 'var(--th-polgun-blue)'
                            : 'var(--th-text-muted)'
                    }}
                  />

                  {/* Sol/Orta İçerik */}
                  <div className="space-y-4 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Proje Kodu & Adı */}
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-800 dark:bg-neutral-800" style={{ color: '#fff' }}>
                        {pub.projectCode} · {pub.projectName}
                      </span>
                      {/* Tür Badgesi */}
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded"
                        style={{
                          backgroundColor: pub.type === 'Makale' ? 'color-mix(in srgb, var(--th-primary) 10%, transparent)' : 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)',
                          color: pub.type === 'Makale' ? 'var(--th-primary)' : 'var(--th-polgun-blue)'
                        }}
                      >
                        {pub.type}
                      </span>
                      {/* Kapsam Badgesi */}
                      <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 20%, transparent)', color: 'var(--th-text-muted)' }}>
                        {getScopeLabel(pub.scope)}
                      </span>
                      {/* Durum Badgesi */}
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {t('publicationsPage.card.published', { defaultValue: 'Yayımlandı' })}
                      </span>
                    </div>

                    {/* Yayın Başlığı */}
                    <h3 className="text-lg lg:text-xl font-black leading-tight" style={{ color: 'var(--th-text)' }}>
                      {pub.title}
                    </h3>

                    {/* Yazarlar & Kod Tanımlayıcılar */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>
                      <div>
                        <span className="font-bold">Yazarlar:</span> {pub.authors}
                      </div>
                      {pub.identifierVal && (
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold uppercase">{pub.identifierKey.replace('_', '-')}:</span>
                          <span className="font-black px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-800 text-[10px]">
                            {pub.identifierVal}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sağ Kısım: Tarih & Buton */}
                  <div className="flex flex-row lg:flex-col lg:items-end justify-between lg:justify-center gap-4 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-dashed" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 15%, transparent)' }}>
                    {/* Tarih */}
                    <div className="text-right">
                      <span className="block text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 55%, transparent)' }}>
                        {t('publicationsPage.card.pub_date', { defaultValue: 'Yayın Tarihi' })}
                      </span>
                      <span className="text-xs font-bold flex items-center gap-1.5 justify-end" style={{ color: 'var(--th-text)' }}>
                        <svg className="w-3.5 h-3.5" style={{ color: 'var(--th-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {pub.pubDate}
                      </span>
                    </div>

                    {/* Aksiyon Butonu */}
                    {pub.sourceUrl && (
                      <a
                        href={pub.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-5 text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border hover:shadow-lg hover:shadow-black/5"
                        style={{
                          backgroundColor: 'color-mix(in srgb, var(--th-primary) 6%, transparent)',
                          borderColor: 'color-mix(in srgb, var(--th-primary) 20%, transparent)',
                          color: 'var(--th-primary)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--th-primary)'
                          e.currentTarget.style.color = '#fff'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-primary) 6%, transparent)'
                          e.currentTarget.style.color = 'var(--th-primary)'
                        }}
                      >
                        {t(`publicationsPage.card.${pub.buttonType}`, {
                          defaultValue:
                            pub.buttonType === 'inspect'
                              ? 'Yayını İncele'
                              : pub.buttonType === 'view_proceedings'
                                ? 'Bildiriyi Görüntüle'
                                : pub.buttonType === 'open_doc'
                                  ? 'Dokümanı Aç'
                                  : 'Detaylı Bilgi'
                        })}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
