import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const DESIGNS_DATA = [
  {
    id: 1,
    projectName: 'Bağımsız Tasarım',
    workName: 'Su Kaydırağı',
    numberKey: 'registration_no',
    numberVal: '2017/07547',
    scope: 'Ulusal',
    appDate: '14.03.2017',
    regDate: '08.06.2017',
    year: 2017,
    isProjectBound: false,
    link: '/contact'
  },
  {
    id: 2,
    projectName: 'Bağımsız Tasarım',
    workName: 'Su Parkı Yerleşim Dizaynı',
    numberKey: 'registration_no',
    numberVal: '2018/07656',
    scope: 'Ulusal',
    appDate: '02.05.2018',
    regDate: '29.08.2018',
    year: 2018,
    isProjectBound: false,
    link: '/contact'
  },
  {
    id: 3,
    projectName: 'Babochka',
    workName: 'Su Kaydırağı',
    numberKey: 'registration_no',
    numberVal: '2019/01948',
    scope: 'Ulusal',
    appDate: '10.01.2019',
    regDate: '15.04.2019',
    year: 2019,
    isProjectBound: true,
    link: '/products'
  },
  {
    id: 4,
    projectName: 'Bağımsız Tasarım',
    workName: 'Su Kaydırağı',
    numberKey: 'registration_no',
    numberVal: '2020/00300',
    scope: 'Ulusal',
    appDate: '12.02.2020',
    regDate: '20.05.2020',
    year: 2020,
    isProjectBound: false,
    link: '/contact'
  },
  {
    id: 5,
    projectName: 'Hydra Kaydırak',
    workName: 'Su Kaydırağı',
    numberKey: 'registration_no',
    numberVal: '2020/02369',
    scope: 'Ulusal',
    appDate: '18.04.2020',
    regDate: '03.09.2020',
    year: 2020,
    isProjectBound: true,
    link: '/products'
  },
  {
    id: 6,
    projectName: 'Bağımsız Tasarım',
    workName: 'Su Kaydırağı',
    numberKey: 'registration_no',
    numberVal: '2020/09165',
    scope: 'Ulusal',
    appDate: '04.09.2020',
    regDate: '18.12.2020',
    year: 2020,
    isProjectBound: false,
    link: '/contact'
  },
  {
    id: 7,
    projectName: 'Bağımsız Tasarım',
    workName: 'Su Parkı Elemanları Seti',
    numberKey: 'registration_no',
    numberVal: '2021/011347',
    scope: 'Ulusal',
    appDate: '11.05.2021',
    regDate: '30.08.2021',
    year: 2021,
    isProjectBound: false,
    link: '/contact'
  },
  {
    id: 8,
    projectName: 'Mini Splash',
    workName: 'Su Kaydırağı Aksesuarı',
    numberKey: 'registration_no',
    numberVal: '2022/014871',
    scope: 'Ulusal',
    appDate: '15.06.2022',
    regDate: '12.10.2022',
    year: 2022,
    isProjectBound: true,
    link: '/splash-tower'
  },
  {
    id: 9,
    projectName: 'ECLIPSE',
    workName: 'Su Kaydırağı',
    numberKey: 'application_no',
    numberVal: '2024/006893',
    scope: 'Ulusal',
    appDate: '05.02.2024',
    regDate: '28.05.2024',
    year: 2024,
    isProjectBound: true,
    link: '/products'
  },
  {
    id: 10,
    projectName: 'Navatu',
    workName: 'Su Kaydırağı',
    numberKey: 'application_no',
    numberVal: '2021/006893',
    scope: 'Ulusal',
    appDate: '10.02.2021',
    regDate: '20.06.2021',
    year: 2021,
    isProjectBound: true,
    link: '/arge'
  },
  {
    id: 11,
    projectName: 'Savana',
    workName: 'Su Kaydırağı',
    numberKey: 'registration_no',
    numberVal: '2024/007025',
    scope: 'Ulusal',
    appDate: '12.03.2024',
    regDate: '25.07.2024',
    year: 2024,
    isProjectBound: true,
    link: '/arge'
  },
  {
    id: 12,
    projectName: 'Monarch Butterfly',
    workName: 'Su Kaydırağı',
    numberKey: 'registration_no',
    numberVal: '2024/007026',
    scope: 'Ulusal',
    appDate: '15.03.2024',
    regDate: '29.07.2024',
    year: 2024,
    isProjectBound: true,
    link: '/products'
  }
]

const YEARS = ['Tümü', 2017, 2018, 2019, 2020, 2021, 2022, 2024]

export default function DesignsPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [filterType, setFilterType] = useState('all') // 'all' | 'project' | 'independent'
  const [filterYear, setFilterYear] = useState('Tümü')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filters logic
  const filteredData = DESIGNS_DATA.filter((item) => {
    const matchesType =
      filterType === 'all' ||
      (filterType === 'project' && item.isProjectBound) ||
      (filterType === 'independent' && !item.isProjectBound)

    const matchesYear = filterYear === 'Tümü' || item.year.toString() === filterYear.toString()

    return matchesType && matchesYear
  })

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('nav.arge')} · {t('nav.designs', { defaultValue: 'Endüstriyel Tasarımlar' })}
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                {t('designsPage.title', { defaultValue: 'Endüstriyel Tasarımlarımız' })}
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('designsPage.desc', {
                defaultValue: 'Polgün, Ar-Ge ve tasarım süreçleri doğrultusunda tescillenmiş özgün endüstriyel tasarımlarıyla su parkı sektörüne yön vermektedir.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ── Filtre Şeridi ── */}
      <div
        className="sticky top-[72px] z-30 border-b"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--th-bg) 95%, transparent)',
          backdropFilter: 'blur(12px)',
          borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Tip Filtreleri */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {[
              { id: 'all', label: t('designsPage.filters.all', { defaultValue: 'Tümü' }) },
              { id: 'project', label: t('designsPage.filters.project_bound', { defaultValue: 'Projeye Bağlı Tasarımlar' }) },
              { id: 'independent', label: t('designsPage.filters.independent', { defaultValue: 'Bağımsız Tasarımlar' }) },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setFilterType(type.id)}
                className="shrink-0 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200"
                style={
                  filterType === type.id
                    ? {
                      backgroundColor: 'var(--th-primary)',
                      color: '#fff',
                      boxShadow: '0 4px 16px var(--th-primary)4D',
                    }
                    : { color: 'var(--th-text-muted)' }
                }
                onMouseEnter={(e) => {
                  if (filterType !== type.id) {
                    e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-primary) 8%, transparent)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (filterType !== type.id) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Yıl Filtresi */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 55%, transparent)' }}>
              {t('designsPage.filters.by_year', { defaultValue: 'Yıla Göre' })}:
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
                  paddingRight: '2.5rem', // Force reserved space for arrow
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none'
                }}
              >
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y === 'Tümü' ? t('designsPage.filters.all', { defaultValue: 'Tümü' }) : y}
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

      {/* ── Tasarım Grid ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          {filteredData.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-semibold" style={{ color: 'var(--th-text-muted)' }}>
                {t('common.no_content', { defaultValue: 'Gösterilecek kayıt bulunamadı.' })}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-3xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                  style={{
                    backgroundColor: 'var(--th-bg)',
                    border: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)',
                  }}
                >
                  {/* Sol dikey aksent şeridi */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1.5 rounded-r-lg"
                    style={{ backgroundColor: item.isProjectBound ? 'var(--th-primary)' : 'var(--th-polgun-blue)' }}
                  />

                  {/* Üst Satır: Başlık & Tescilli Etiketi */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-black leading-tight" style={{ color: 'var(--th-text)' }}>
                          {item.projectName === 'Bağımsız Tasarım'
                            ? t('designsPage.card.independent_label', { defaultValue: 'Bağımsız Tasarım' })
                            : item.projectName}
                        </h3>
                        <p className="text-[11px] font-bold uppercase tracking-wider mt-1" style={{ color: 'var(--th-polgun-blue)' }}>
                          {t('designsPage.card.scope', { defaultValue: 'Kapsam' })}: {t('designsPage.card.national', { defaultValue: 'Ulusal' })}
                        </p>
                      </div>
                      {/* Tescilli Etiketi */}
                      <span className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {t('designsPage.card.registered', { defaultValue: 'Tescilli' })}
                      </span>
                    </div>

                    {/* Detay Bilgileri */}
                    <div className="space-y-3.5 my-5 pt-4 border-t border-dashed" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 15%, transparent)' }}>
                      <div>
                        <span className="block text-[10px] font-bold tracking-wider uppercase mb-0.5" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 55%, transparent)' }}>
                          {t('designsPage.card.design_name', { defaultValue: 'Hak / Çalışma Adı' })}
                        </span>
                        <span className="text-sm font-semibold" style={{ color: 'var(--th-text)' }}>
                          {item.workName}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold tracking-wider uppercase mb-0.5" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 55%, transparent)' }}>
                          {t(`designsPage.card.${item.numberKey}`, { defaultValue: item.numberKey === 'registration_no' ? 'Tescil No' : 'Başvuru No' })}
                        </span>
                        <span className="text-sm font-black px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--th-surface)', color: 'var(--th-text)' }}>
                          {item.numberVal}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Alt Kısım: Tarihler ve Yönlendirme */}
                  <div>
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)' }}>
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                          {t('designsPage.card.app_date', { defaultValue: 'Başvuru' })}
                        </span>
                        <span className="text-xs font-bold flex items-center gap-1.5" style={{ color: 'var(--th-text)' }}>
                          <svg className="w-3.5 h-3.5" style={{ color: 'var(--th-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {item.appDate}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                          {t('designsPage.card.reg_date', { defaultValue: 'Tescil' })}
                        </span>
                        <span className="text-xs font-bold flex items-center gap-1.5" style={{ color: 'var(--th-text)' }}>
                          <svg className="w-3.5 h-3.5" style={{ color: 'var(--th-polgun-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          {item.regDate}
                        </span>
                      </div>
                    </div>
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
