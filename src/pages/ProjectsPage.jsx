// ============================================================
// PROJECTS PAGE — Virtus ArGe Gerçek Proje Verileri (88 proje)
// ============================================================
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const API_URL = import.meta.env.VITE_API_URL || '';
const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('data:') || path.startsWith('blob:') || path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${API_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};
const findLatestTranslation = (translations, targetLang) => {
  if (!Array.isArray(translations)) return null;
  const matches = translations.filter(
    (t) => (t.language || '').toLowerCase() === targetLang.toLowerCase()
  );
  if (matches.length === 0) return null;
  matches.sort((a, b) => {
    const timeA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
    const timeB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
    if (timeA !== timeB) return timeB - timeA;
    return (b.id || 0) - (a.id || 0);
  });
  return matches[0];
};



// ── Proje Verisi ───────────────────────────────────────────

const REGIONS = ['Tümü', 'Asya', 'Avrupa', 'Afrika', 'Amerika']
const TYPES = ['Tümü', 'Açık Alan Su Parkı', 'Otel & Su Parkı', 'Kapalı Alan Su Parkı', 'Resort Tatil Köyü']

// ── Slider Modal Bileşeni ──────────────────────────────────
function ProjectSliderModal({ project, isOpen, onClose, translateLocation }) {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const autoplayRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    setCurrentIndex(0)
    setIsPlaying(true)
  }, [isOpen, project?.id])

  useEffect(() => {
    if (!isOpen || !isPlaying || !project?.slides?.length || project.slides.length <= 1) {
      clearInterval(autoplayRef.current)
      return
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.slides.length)
    }, 4500)
    return () => clearInterval(autoplayRef.current)
  }, [isOpen, isPlaying, project?.id, project?.slides?.length])

  const go = (dir) => {
    setCurrentIndex((prev) => {
      if (dir === 'prev') return prev === 0 ? project.slides.length - 1 : prev - 1
      return (prev + 1) % project.slides.length
    })
  }

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
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
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-1.5 opacity-60">{translateLocation ? translateLocation(slide.location) : slide.location}</p>
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
                <button key={idx} onClick={() => setCurrentIndex(idx)}
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

        {/* Üst Sağ Kontroller (Durdur/Oynat + Kapat) */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          {project.slides.length > 1 && (
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all shadow-md"
              title={isPlaying ? 'Durdur' : 'Oynat'}
              aria-label={isPlaying ? 'Durdur' : 'Oynat'}
            >
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          )}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all shadow-md"
            title={t('common.close', { defaultValue: 'Kapat' })}
            aria-label={t('common.close', { defaultValue: 'Kapat' })}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage({ setActivePage }) {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  const getMatchedRegion = () => {
    const raw = searchParams.get('region') || searchParams.get('bolge') || location.state?.region;
    if (raw) {
      try {
        const decoded = decodeURIComponent(raw).trim();
        const normalizedParam = decoded.toLowerCase().replace(/[-_\s]/g, '');
        const matched = REGIONS.find((r) => {
          const normR = r.toLowerCase().replace(/[-_\s]/g, '');
          return normR === normalizedParam || r.toLowerCase() === decoded.toLowerCase();
        });
        if (matched) return matched;
      } catch (e) {
        // fallback
      }
    }
    return 'Tümü';
  };

  const getMatchedType = () => {
    const raw = searchParams.get('type') || searchParams.get('tur') || searchParams.get('category') || location.state?.type;
    if (raw) {
      try {
        const decoded = decodeURIComponent(raw).trim();
        const normalizedParam = decoded.toLowerCase().replace(/[-_&\s]/g, '');
        const matched = TYPES.find((typ) => {
          const normT = typ.toLowerCase().replace(/[-_&\s]/g, '');
          if (normT === normalizedParam || typ.toLowerCase() === decoded.toLowerCase()) return true;
          if (normalizedParam.includes('otel') && typ.includes('Otel')) return true;
          if (normalizedParam.includes('kapali') && typ.includes('Kapalı')) return true;
          if (normalizedParam.includes('acik') && typ.includes('Açık')) return true;
          if (normalizedParam.includes('resort') && typ.includes('Resort')) return true;
          return false;
        });
        if (matched) return matched;
      } catch (e) {
        // fallback
      }
    }
    return 'Tümü';
  };

  const [region, setRegion] = useState(getMatchedRegion)
  const [type, setType] = useState(getMatchedType)
  const [selectedProject, setSelectedProject] = useState(null)
  const [sliderOpen, setSliderOpen] = useState(false)
  const [liveProjects, setLiveProjects] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchProjects() {
      try {
        const res = await fetch(`${API_URL}/api/project/visible?t=${Date.now()}`, {
          cache: 'no-store'
        })
        if (!res.ok) return
        const contentType = res.headers.get('content-type') ?? ''
        if (!contentType.includes('json')) return
        const data = await res.json()
        if (!cancelled && Array.isArray(data)) {
          setLiveProjects(data)
        }
      } catch (err) {
        console.error('Failed to fetch projects from CMS:', err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProjects()

    const handleFocus = () => {
      fetchProjects()
    }
    window.addEventListener('focus', handleFocus)

    return () => {
      cancelled = true
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
    const newParams = {};
    if (newRegion !== 'Tümü') newParams.region = newRegion;
    if (type !== 'Tümü') newParams.type = type;
    setSearchParams(newParams);
  };

  const handleTypeChange = (newType) => {
    setType(newType);
    const newParams = {};
    if (region !== 'Tümü') newParams.region = region;
    if (newType !== 'Tümü') newParams.type = newType;
    setSearchParams(newParams);
  };

  useEffect(() => {
    const targetRegion = getMatchedRegion();
    setRegion(targetRegion);
    const targetType = getMatchedType();
    setType(targetType);
  }, [searchParams, location.search, location.state]);

  const regionTranslationMap = {
    'Tümü': t('common.all'),
    'Asya': t('regions.asia', { defaultValue: 'Asya' }),
    'Avrupa': t('regions.europe', { defaultValue: 'Avrupa' }),
    'Afrika': t('regions.africa', { defaultValue: 'Afrika' }),
    'Amerika': t('regions.america', { defaultValue: 'Amerika' })
  }

  const typeTranslationMap = {
    'Tümü': t('common.all'),
    'Açık Alan Su Parkı': t('projects.types.outdoor', { defaultValue: 'Açık Alan Su Parkı' }),
    'Otel & Su Parkı': t('projects.types.hotel', { defaultValue: 'Otel & Su Parkı' }),
    'Kapalı Alan Su Parkı': t('projects.types.indoor', { defaultValue: 'Kapalı Alan Su Parkı' }),
    'Resort Tatil Köyü': t('projects.types.resort', { defaultValue: 'Resort Tatil Köyü' })
  }

  const translateLocation = (locStr) => {
    if (!locStr) return '';
    const currentLangCode = i18n.language || 'tr';
    const cleanStr = locStr.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

    // Split by comma
    const parts = locStr.split(', ');
    const translatedParts = parts.map(part => {
      // Normalize part to matching key (removing accents/diacritics to map correctly)
      const key = part.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const slug = key.replace(/ı/g, 'i').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
      return t(`projects.locations.${slug}`, { defaultValue: part });
    });

    let result = translatedParts.join(', ');
    if (currentLangCode !== 'tr' && parts.length === 1 && (cleanStr === 'antalya' || cleanStr === 'mugla' || cleanStr === 'izmir' || cleanStr === 'bodrum' || cleanStr === 'fethiye')) {
      // If it is just a Turkish city, add Turkey suffix in non-Turkish languages
      result += `, ${t('projects.locations.turkiye')}`;
    }
    return result;
  }

  const resolveLocalizedField = (item, field, fallback = '') => {
    const rawLang = (i18n.language || 'tr').toLowerCase();
    const lang = rawLang.split('-')[0];
    const translation = findLatestTranslation(item.translations, lang)
      || (lang !== 'tr' ? findLatestTranslation(item.translations, 'tr') : null);

    const itemTime = item.updated_at ? new Date(item.updated_at).getTime() : 0;
    const transTime = translation?.updated_at ? new Date(translation.updated_at).getTime() : 0;

    if (itemTime >= transTime && item[field]) {
      return item[field];
    }
    return translation?.[field] || item[field] || fallback;
  };

  const mapApiProject = (item) => {
    const name = resolveLocalizedField(item, 'title') || item.client || ''
    const location = resolveLocalizedField(item, 'location')
    const type = resolveLocalizedField(item, 'category') || 'Otel & Su Parkı'
    const region = item.tags || 'Asya'

    let gallery = []
    if (Array.isArray(item.gallery_images)) {
      gallery = item.gallery_images
    } else if (typeof item.gallery_images === 'string' && item.gallery_images.trim().startsWith('[')) {
      try {
        gallery = JSON.parse(item.gallery_images)
      } catch {
        gallery = []
      }
    }

    if (!gallery.length && item.image_path) {
      gallery = [item.image_path]
    }

    const coverImg = getImageUrl(item.image_path || gallery[0] || '')

    const slides = gallery.map((imgUrl, idx) => ({
      id: idx + 1,
      title: name,
      location: location,
      img: getImageUrl(imgUrl)
    }))

    return {
      id: item.id,
      name,
      location,
      type,
      region,
      img: coverImg,
      imgAlt: `${name} - ${location}`,
      slides: slides.length > 0 ? slides : [{ id: 1, title: name, location, img: coverImg }]
    }
  }

  const getProjectTranslated = (p) => {
    return {
      ...p,
      region: regionTranslationMap[p.region] || p.region,
      type: typeTranslationMap[p.type] || p.type,
      location: translateLocation(p.location)
    }
  }

  const projectList = (liveProjects || []).map(mapApiProject)

  const filtered = projectList.filter((p) =>
    (region === 'Tümü' || p.region === region) &&
    (type === 'Tümü' || p.type === type)
  ).map(getProjectTranslated)

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* Hero */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-[var(--layout-max)] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p
                className="text-lg lg:text-4xl font-black block text-white tracking-normal mb-2"
                style={{
                  WebkitTextStroke: '0.8px #FFFFFF',
                  paintOrder: 'stroke fill',
                }}
              >
                {t('projects.portfolio_tag', { defaultValue: 'Proje Portföyümüz' })}
              </p>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">

                <span
                  className="block"
                  style={{
                    color: 'var(--th-polgun-antrasit)',
                  }}
                >
                  {t('projects.hero_title_2', { defaultValue: 'Projelerimiz' })}
                </span>
              </h1>
            </div>
            <div>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                {t('projects.desc')}
              </p>
              <div className="flex gap-8 flex-wrap">
                <div>
                  <p className="text-3xl font-black text-white">3000+</p>
                  <p className="text-[11px] text-white/50 tracking-wider uppercase mt-1">{t('projects.stats.completed', { defaultValue: 'Tamamlanan Proje' })}</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">70+</p>
                  <p className="text-[11px] text-white/50 tracking-wider uppercase mt-1">{t('projects.stats.countries', { defaultValue: 'Ülke' })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtreler */}
      <div className="border-b sticky top-[72px] z-30"
        style={{ backgroundColor: 'color-mix(in srgb,var(--th-bg) 97%,transparent)', backdropFilter: 'blur(14px)', borderColor: 'color-mix(in srgb,var(--th-border) 10%,transparent)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14 py-3.5 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black tracking-widest uppercase shrink-0"
              style={{ color: 'color-mix(in srgb,var(--th-text-muted) 50%,transparent)' }}>{t('projects.filters.region', { defaultValue: 'Bölge' })}</span>
            {REGIONS.map((r) => (
              <button key={r} onClick={() => handleRegionChange(r)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={region === r ? { backgroundColor: 'var(--th-primary)', color: '#fff' } : { color: 'var(--th-text-muted)' }}
                onMouseEnter={(e) => { if (region !== r) e.currentTarget.style.backgroundColor = 'color-mix(in srgb,var(--th-primary) 10%,transparent)' }}
                onMouseLeave={(e) => { if (region !== r) e.currentTarget.style.backgroundColor = 'transparent' }}
              >{regionTranslationMap[r] || r}</button>
            ))}
          </div>
          <div className="w-px h-5 hidden sm:block" style={{ backgroundColor: 'color-mix(in srgb,var(--th-border) 20%,transparent)' }} />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black tracking-widest uppercase shrink-0"
              style={{ color: 'color-mix(in srgb,var(--th-text-muted) 50%,transparent)' }}>{t('projects.filters.type', { defaultValue: 'Tür' })}</span>
            {TYPES.map((t) => (
              <button key={t} onClick={() => handleTypeChange(t)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={type === t ? { backgroundColor: 'var(--th-polgun-blue)', color: '#fff' } : { color: 'var(--th-text-muted)' }}
                onMouseEnter={(e) => { if (type !== t) e.currentTarget.style.backgroundColor = 'color-mix(in srgb,var(--th-polgun-blue) 10%,transparent)' }}
                onMouseLeave={(e) => { if (type !== t) e.currentTarget.style.backgroundColor = 'transparent' }}
              >{typeTranslationMap[t] || t}</button>
            ))}
          </div>
          <div className="ml-auto text-xs font-bold shrink-0" style={{ color: 'var(--th-text-muted)' }}>
            {filtered.length} {t('projects.stats.project_count', { defaultValue: 'proje' })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-14">
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>{t('nav.projects')}</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>
              {t('projects.list_title', { defaultValue: 'Tamamlanan Projelerimizden Bazıları' })}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((proj) => (
              <article
                key={proj.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
                onClick={() => { setSelectedProject(proj); setSliderOpen(true) }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.16)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={proj.img} alt={proj.imgAlt} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.78) 0%,rgba(0,0,0,0.12) 52%,transparent 100%)' }} />
                {proj.slides.length > 1 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[10px] font-bold"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {proj.slides.length}
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>{proj.type}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="text-lg font-black text-white leading-tight mb-0.5">{proj.name}</h2>
                  <p className="text-sm text-white/55">{proj.location}</p>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-24" style={{ color: 'var(--th-text-muted)' }}>
              <p className="text-lg font-semibold">{t('common.no_content')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Slider Modal */}
      {selectedProject && (
        <ProjectSliderModal project={selectedProject} isOpen={sliderOpen} onClose={() => setSliderOpen(false)} translateLocation={translateLocation} />
      )}

      {/* CTA */}
      <section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="relative rounded-3xl overflow-hidden px-12 py-20"
            style={{ background: 'linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 1400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <circle cx="200" cy="150" r="300" fill="white" />
                <circle cx="1200" cy="150" r="200" fill="white" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div>
                <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-3 text-white/50">{t('projects.cta_tag', { defaultValue: 'Sonraki Proje' })}</p>
                <h2 className="text-3xl font-black text-white">{t('projects.cta_title', { defaultValue: 'Projeniz bu listede olsun.' })}</h2>
                <p className="text-white/40 text-sm mt-2 max-w-md">{t('projects.cta_desc', { defaultValue: 'Hayalinizdeki su parkını veya eğlence merkezini tasarlamak için uzman mühendis ve mimar kadromuzla iletişime geçin.' })}</p>
              </div>
              <button onClick={() => navigate('/contact')}
                className="shrink-0 px-10 py-4 font-bold text-sm rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', color: 'var(--th-primary-darker)', boxShadow: '0 0 40px rgba(0,0,0,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {t('projects.cta_btn', { defaultValue: 'Projeyi Başlat' })}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
