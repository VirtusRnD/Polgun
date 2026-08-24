import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import eclipseImg from '../assets/patents/eclipse/Eclipse.avif'
import floresanImg from '../assets/patents/floresan_aydınlatma/Floresan Aydınlatma.avif'
import navatuImg from '../assets/patents/navatu/Navatu.3.avif'
import slipandflyImg from '../assets/brands/Polgün Waterparks&Attractions.avif'
const PATENTS_DATA = [

  {
    id: 1,
    projectName: 'Floresan Aydınlatma',
    patentName: 'Floresan Işıklandırmaya Sahip Su Kaydırağı',
    appNo: '2022/001778',
    isPct: false,
    scope: 'Ulusal',
    status: 'Tescilli', // registered
    appDate: '11.02.2022',
    regDate: '11.02.2022',
    image: floresanImg
  },
  {
    id: 4,
    projectName: 'Eclipse',
    patentName: 'Çift Kayma Yüzeyine Sahip Çanak Tipi Su Kaydırağı',
    appNo: '2025/016021',
    isPct: false,
    scope: 'Ulusal',
    status: 'Başvuru Aşamasında', // pending
    appDate: '27.10.2025',
    regDate: '—',
    image: eclipseImg
  },
  {
    id: 3,
    projectName: 'Navatu',
    patentName: 'A Water Slide',
    appNo: 'TR2024/051001',
    isPct: true,
    scope: 'Uluslararası',
    status: 'Başvuru Aşamasında',
    appDate: '26.08.2024',
    regDate: '—',
    image: navatuImg
  },
  {
    id: 2,
    projectName: '',
    patentName: 'Açık ve Kapalı Kesitli Formlar Arasında Çift Yönlü Dönüştürülebilen Modüler Vücut Kaydırağı ',
    appNo: '2026/010391',
    isPct: false,
    scope: 'Ulusal',
    status: 'Başvuru Aşamasında',
    appDate: '14.07.2026',
    regDate: '—',
    image: slipandflyImg
  }
]

export default function PatentsPage() {
  const { t } = useTranslation()
  const [filterStatus, setFilterStatus] = useState('all') // 'all' | 'registered' | 'pending'
  const [filterScope, setFilterScope] = useState('all') // 'all' | 'national' | 'international'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filtering
  const filteredData = PATENTS_DATA.filter((item) => {
    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'registered' && item.status === 'Tescilli') ||
      (filterStatus === 'pending' && item.status === 'Başvuru Aşamasında')

    const matchesScope =
      filterScope === 'all' ||
      (filterScope === 'national' && item.scope === 'Ulusal') ||
      (filterScope === 'international' && item.scope === 'Uluslararası')

    return matchesStatus && matchesScope
  })

  // Normalize labels
  const getStatusBadge = (status) => {
    if (status === 'Tescilli') {
      return (
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/15">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {t('patentsPage.card.registered_badge', { defaultValue: 'Tescilli' })}
        </span>
      )
    }
    return (
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 border border-amber-500/15">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        {t('patentsPage.card.pending_badge', { defaultValue: 'Başvuru Aşamasında' })}
      </span>
    )
  }

  const getScopeLabel = (scope) => {
    return scope === 'Uluslararası'
      ? t('patentsPage.filters.international', { defaultValue: 'Uluslararası' })
      : t('patentsPage.filters.national', { defaultValue: 'Ulusal' })
  }

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('nav.arge')} · {t('nav.patents', { defaultValue: 'Patentler' })}
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                {t('patentsPage.title', { defaultValue: 'Patentlerimiz' })}
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('patentsPage.desc', {
                defaultValue: "Polgün'ün sektöre öncülük eden ve teknolojik inovasyonu koruma altına alan resmi patent ve buluş kayıtları."
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ── Filtreler Şeridi ── */}
      <div
        className="sticky top-[72px] z-30 border-b"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--th-bg) 95%, transparent)',
          backdropFilter: 'blur(12px)',
          borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-6 items-center">

              {/* Durum Filtresi */}
              <div className="flex gap-1.5 flex-wrap items-center">
                <span className="text-[10px] font-black uppercase tracking-wider mr-2" style={{ color: 'var(--th-text-muted)' }}>
                  {t('patentsPage.card.status', { defaultValue: 'Güncel Durum' })}:
                </span>
                {[
                  { id: 'all', label: t('patentsPage.filters.all', { defaultValue: 'Tümü' }) },
                  { id: 'registered', label: t('patentsPage.filters.registered', { defaultValue: 'Tescilli' }) },
                  { id: 'pending', label: t('patentsPage.filters.pending', { defaultValue: 'Başvuru Aşamasında' }) }
                ].map((status) => (
                  <button
                    key={status.id}
                    onClick={() => setFilterStatus(status.id)}
                    className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                    style={
                      filterStatus === status.id
                        ? { backgroundColor: 'var(--th-primary)', color: '#fff' }
                        : { color: 'var(--th-text-muted)', backgroundColor: 'transparent' }
                    }
                    onMouseEnter={(e) => {
                      if (filterStatus !== status.id) e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-primary) 8%, transparent)'
                    }}
                    onMouseLeave={(e) => {
                      if (filterStatus !== status.id) e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    {status.label}
                  </button>
                ))}
              </div>

              <div className="hidden md:block w-px h-4" style={{ backgroundColor: 'color-mix(in srgb, var(--th-border) 20%, transparent)' }} />

              {/* Kapsam Filtresi */}
              <div className="flex gap-1.5 flex-wrap items-center">
                <span className="text-[10px] font-black uppercase tracking-wider mr-2" style={{ color: 'var(--th-text-muted)' }}>
                  {t('patentsPage.card.scope', { defaultValue: 'Kapsam' })}:
                </span>
                {[
                  { id: 'all', label: t('patentsPage.filters.all', { defaultValue: 'Tümü' }) },
                  { id: 'national', label: t('patentsPage.filters.national', { defaultValue: 'Ulusal' }) },
                  { id: 'international', label: t('patentsPage.filters.international', { defaultValue: 'Uluslararası' }) }
                ].map((scope) => (
                  <button
                    key={scope.id}
                    onClick={() => setFilterScope(scope.id)}
                    className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                    style={
                      filterScope === scope.id
                        ? { backgroundColor: 'var(--th-polgun-blue)', color: '#fff' }
                        : { color: 'var(--th-text-muted)', backgroundColor: 'transparent' }
                    }
                    onMouseEnter={(e) => {
                      if (filterScope !== scope.id) e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 8%, transparent)'
                    }}
                    onMouseLeave={(e) => {
                      if (filterScope !== scope.id) e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    {scope.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Patent Listesi (50-50 Split Cards) ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          {filteredData.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-semibold" style={{ color: 'var(--th-text-muted)' }}>
                {t('common.no_content', { defaultValue: 'Gösterilecek patent kaydı bulunamadı.' })}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              {filteredData.map((item, index) => (
                <div
                  key={item.id}
                  className={`group rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                    }`}
                  style={{
                    backgroundColor: 'var(--th-bg)',
                    border: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)'
                  }}
                >
                  {/* Sol Yarı: Görsel */}
                  <div className="lg:w-1/2 relative overflow-hidden bg-neutral-50 h-[300px] lg:h-auto">
                    <img
                      src={item.image}
                      alt={item.projectName}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Hover Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Sağ Yarı: Kart Detayları */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between relative">
                    <div className="space-y-6">
                      {/* Üst Satır: Kapsam & Durum Badgesi */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                          {getScopeLabel(item.scope)}
                        </span>
                        {getStatusBadge(item.status)}
                      </div>

                      {/* Başlıklar */}
                      <div className="space-y-2">
                        <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400">
                          {item.projectName}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-black leading-tight" style={{ color: 'var(--th-text)' }}>
                          {item.patentName}
                        </h3>
                      </div>

                      {/* Bilgi Grid */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)' }}>
                        <div>
                          <span className="block text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                            {item.isPct ? t('patentsPage.card.pct_no', { defaultValue: 'PCT No' }) : t('patentsPage.card.app_no', { defaultValue: 'Başvuru No' })}
                          </span>
                          <span className="text-xs font-extrabold" style={{ color: 'var(--th-text)' }}>
                            {item.appNo}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                            {t('patentsPage.card.status', { defaultValue: 'Güncel Durum' })}
                          </span>
                          <span className="text-xs font-bold" style={{ color: 'var(--th-text)' }}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tarih Şeridi */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t mt-8" style={{ borderColor: 'color-mix(in srgb, var(--th-border) 10%, transparent)' }}>
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                          {t('patentsPage.card.app_date', { defaultValue: 'Başvuru Tarihi' })}
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
                          {t('patentsPage.card.reg_date', { defaultValue: 'Tescil Tarihi' })}
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
