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
            title="Kapat"
            aria-label="Kapat"
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

  const locationTranslations = {
    // Cities
    'girit': { tr: 'Girit', en: 'Crete', es: 'Creta', ru: 'Крит', ar: 'كريت', fr: 'Crète', zh: '克里特岛' },
    'hanya': { tr: 'Hanya', en: 'Chania', es: 'La Canea', ru: 'Ханья', ar: 'خانية', fr: 'La Canée', zh: '哈尼亚' },
    'kefalonya': { tr: 'Kefalonya', en: 'Kefalonia', es: 'Cefalonia', ru: 'Кефалония', ar: 'كفالونيا', fr: 'Céphalonie', zh: '凯法利尼亚' },
    'moravya': { tr: 'Moravya', en: 'Moravia', es: 'Moravia', ru: 'Моравия', ar: 'مورافيا', fr: 'Moravie', zh: '摩拉维亚' },
    'rethymno': { tr: 'Rethymno', en: 'Rethymno', es: 'Rétino', ru: 'Ретимно', ar: 'ريثيمنو', fr: 'Rethymnon', zh: '雷斯蒙' },
    'selangor': { tr: 'Selangor', en: 'Selangor', es: 'Selangor', ru: 'Селангор', ar: 'سيلانجور', fr: 'Selangor', zh: '雪兰莪' },
    'timisoara': { tr: 'Timișoara', en: 'Timișoara', es: 'Timișoara', ru: 'Тимишоара', ar: 'تيميشوارا', fr: 'Timișoara', zh: '蒂米什瓦拉' },
    'benidorm': { tr: 'Benidorm', en: 'Benidorm', es: 'Benidorm', ru: 'Бенидорм', ar: 'بينيدورم', fr: 'Benidorm', zh: '贝尼多姆' },
    'tenerife': { tr: 'Tenerife', en: 'Tenerife', es: 'Tenerife', ru: 'Тенерифе', ar: 'تينيريفي', fr: 'Tenerife', zh: '特内里费' },
    'gran canaria': { tr: 'Gran Canaria', en: 'Gran Canaria', es: 'Gran Canaria', ru: 'Гран-Канария', ar: 'جران كناريا', fr: 'Grande Canarie', zh: '大加那利岛' },
    'mallorca': { tr: 'Mallorca', en: 'Mallorca', es: 'Mallorca', ru: 'Мальорка', ar: 'مايوركا', fr: 'Majorque', zh: '马略卡岛' },
    'torremolinos': { tr: 'Torremolinos', en: 'Torremolinos', es: 'Torremolinos', ru: 'Торремолинос', ar: 'توريمولينوس', fr: 'Torremolinos', zh: '托雷莫利诺斯' },
    'saint-cyprien': { tr: 'Saint-Cyprien', en: 'Saint-Cyprien', es: 'Saint-Cyprien', ru: 'Сен-Сиприен', ar: 'سان سيبريان', fr: 'Saint-Cyprien', zh: '圣西普里安' },
    'torreilles': { tr: 'Torreilles', en: 'Torreilles', es: 'Torreilles', ru: 'Торрей', ar: 'توريي', fr: 'Torreilles', zh: '托雷耶' },
    'saint-jean-de-monts': { tr: 'Saint-Jean-de-Monts', en: 'Saint-Jean-de-Monts', es: 'Saint-Jean-de-Monts', ru: 'Сен-Жан-де-Мон', ar: 'سان جان دي مونتس', fr: 'Saint-Jean-de-Monts', zh: '圣让德蒙' },
    'marsa alam': { tr: 'Marsa Alam', en: 'Marsa Alam', es: 'Marsa Alam', ru: 'Марса-Алам', ar: 'مرسى علم', fr: 'Marsa Alam', zh: '马萨阿拉姆' },
    'hurghada': { tr: 'Hurghada', en: 'Hurghada', es: 'Hurghada', ru: 'Хургада', ar: 'الغردقة', fr: 'Hurghada', zh: '赫尔格达' },
    'hurgada': { tr: 'Hurghada', en: 'Hurghada', es: 'Hurghada', ru: 'Хургада', ar: 'الغردقة', fr: 'Hurghada', zh: '赫尔格达' },
    'sharm el sheikh': { tr: 'Sharm El Sheikh', en: 'Sharm El Sheikh', es: 'Sharm El Sheikh', ru: 'Шарм-эль-Шейх', ar: 'شرم الشيخ', fr: 'Charm el-Cheikh', zh: '沙姆沙伊赫' },
    'sarm el-seyh': { tr: 'Şarm El-Şeyh', en: 'Sharm El Sheikh', es: 'Sharm El Sheikh', ru: 'Шарм-эль-Шейх', ar: 'شرم الشيخ', fr: 'Charm el-Cheikh', zh: '沙姆沙伊赫' },
    'bigacs': { tr: 'Bogács', en: 'Bogács', es: 'Bogács', ru: 'Богач', ar: 'بوغاتش', fr: 'Bogács', zh: '博加奇' },
    'bogacs': { tr: 'Bogács', en: 'Bogács', es: 'Bogács', ru: 'Богач', ar: 'بوغاتش', fr: 'Bogács', zh: '博加奇' },
    'gyula': { tr: 'Gyula', en: 'Gyula', es: 'Gyula', ru: 'Дьюла', ar: 'جيولا', fr: 'Gyula', zh: '久洛' },
    'nyiregyhaza': { tr: 'Nyíregyháza', en: 'Nyíregyháza', es: 'Nyíregyháza', ru: 'Ньиредьхаза', ar: 'نيريغيهازا', fr: 'Nyíregyháza', zh: '尼赖吉哈佐' },
    'sarvar': { tr: 'Sárvár', en: 'Sárvár', es: 'Sárvár', ru: 'Шарвар', ar: 'شارفار', fr: 'Sárvár', zh: '沙尔瓦尔' },
    'zalakaros': { tr: 'Zalakaros', en: 'Zalakaros', es: 'Zalakaros', ru: 'Залакарош', ar: 'زالاكاروس', fr: 'Zalakaros', zh: '佐洛考罗什' },
    'jakovo': { tr: 'Jakovo', en: 'Jakovo', es: 'Jakovo', ru: 'Яково', ar: 'ياكوفو', fr: 'Jakovo', zh: '雅科沃' },
    'novi sad': { tr: 'Novi Sad', en: 'Novi Sad', es: 'Novi Sad', ru: 'Нови-Сад', ar: 'نوفي ساد', fr: 'Novi Sad', zh: '诺维萨德' },
    'vrnjacka banja': { tr: 'Vrnjačka Banja', en: 'Vrnjačka Banja', es: 'Vrnjačka Banja', ru: 'Врнячка-Баня', ar: 'فرنياتشكا بانيا', fr: 'Vrnjačka Banja', zh: '弗尔尼亚奇卡矿泉镇' },
    'jeddah': { tr: 'Cidde', en: 'Jeddah', es: 'Yeda', ru: 'Джидда', ar: 'جدة', fr: 'Djeddah', zh: '吉达' },
    'cidde': { tr: 'Cidde', en: 'Jeddah', es: 'Yeda', ru: 'Джидда', ar: 'جدة', fr: 'Djeddah', zh: '吉达' },
    'riyadh': { tr: 'Riyad', en: 'Riyadh', es: 'Riad', ru: 'Эр-Рияд', ar: 'الرياض', fr: 'Riyad', zh: '利雅得' },
    'doha': { tr: 'Doha', en: 'Doha', es: 'Doha', ru: 'Доха', ar: 'الدوحة', fr: 'Doha', zh: '多哈' },
    'seoul': { tr: 'Seul', en: 'Seoul', es: 'Seúl', ru: 'Сеул', ar: 'سيول', fr: 'Séoul', zh: '首尔' },
    'almaty': { tr: 'Almatı', en: 'Almaty', es: 'Almatí', ru: 'Алматы', ar: 'ألماتي', fr: 'Almaty', zh: '阿拉木图' },
    'tashkent': { tr: 'Taşkent', en: 'Tashkent', es: 'Taskent', ru: 'Ташкент', ar: 'طشقند', fr: 'Tachkent', zh: '塔什干' },
    'baku': { tr: 'Bakü', en: 'Baku', es: 'Bakú', ru: 'Баку', ar: 'باكو', fr: 'Bakou', zh: '巴库' },
    'budva': { tr: 'Budva', en: 'Budva', es: 'Budva', ru: 'Будва', ar: 'بودفا', fr: 'Budva', zh: '布德瓦' },
    'zakopane': { tr: 'Zakopane', en: 'Zakopane', es: 'Zakopane', ru: 'Закопане', ar: 'زاكوباني', fr: 'Zakopane', zh: '扎科帕内' },
    'senec': { tr: 'Senec', en: 'Senec', es: 'Senec', ru: 'Сенец', ar: 'سينيتس', fr: 'Senec', zh: '塞内茨' },
    'chisinau': { tr: 'Kişinev', en: 'Chisinau', es: 'Chisinau', ru: 'Кишинёв', ar: 'كيشيناو', fr: 'Chișinău', zh: '基希讷乌' },
    'tbilisi': { tr: 'Tiflis', en: 'Tbilisi', es: 'Tiflis', ru: 'Тбилиси', ar: 'تبليسي', fr: 'Tbilissi', zh: '第比利斯' },
    'kyrenia': { tr: 'Girne', en: 'Kyrenia', es: 'Kyrenia', ru: 'Кирения', ar: 'كيرينيا', fr: 'Kyrenia', zh: '凯里尼亚' },
    'oran': { tr: 'Vahran', en: 'Oran', es: 'Orán', ru: 'Оран', ar: 'وهران', fr: 'Oran', zh: '奥兰' },
    'marrakech': { tr: 'Marakeş', en: 'Marrakech', es: 'Marrakech', ru: 'Марракеш', ar: 'مراكش', fr: 'Marrakech', zh: '马拉喀什' },
    'marakes': { tr: 'Marakeş', en: 'Marrakech', es: 'Marrakech', ru: 'Марракеш', ar: 'مراكش', fr: 'Marrakech', zh: '马拉喀什' },
    'agadir': { tr: 'Agadir', en: 'Agadir', es: 'Agadir', ru: 'Агадир', ar: 'أكادير', fr: 'Agadir', zh: '阿加迪尔' },
    'sousse': { tr: 'Susa', en: 'Sousse', es: 'Susa', ru: 'Сус', ar: 'سوسة', fr: 'Sousse', zh: '苏塞' },
    'antalya': { tr: 'Antalya', en: 'Antalya', es: 'Antalya', ru: 'Анталья', ar: 'أنطاليا', fr: 'Antalya', zh: '安塔利亚' },
    'mugla': { tr: 'Muğla', en: 'Muğla', es: 'Muğla', ru: 'Мугла', ar: 'موغla', fr: 'Muğla', zh: '穆拉' },
    'izmir': { tr: 'İzmir', en: 'Izmir', es: 'Esmirna', ru: 'Измир', ar: 'إزمير', fr: 'Izmir', zh: '伊兹密尔' },
    'bodrum': { tr: 'Bodrum', en: 'Bodrum', es: 'Bodrum', ru: 'Бодрум', ar: 'بودروم', fr: 'Bodrum', zh: '博德鲁姆' },
    'fethiye': { tr: 'Fethiye', en: 'Fethiye', es: 'Fethiye', ru: 'Фетхие', ar: 'فتحية', fr: 'Fethiye', zh: '费特希耶' },
    'didim': { tr: 'Didim', en: 'Didim', es: 'Didim', ru: 'Дидим', ar: 'ديديم', fr: 'Didim', zh: '迪迪姆' },
    'aydin': { tr: 'Aydın', en: 'Aydin', es: 'Aydın', ru: 'Айдын', ar: 'أيدين', fr: 'Aydın', zh: '艾登' },
    'aydın': { tr: 'Aydın', en: 'Aydin', es: 'Aydın', ru: 'Айдын', ar: 'أيدين', fr: 'Aydın', zh: '艾登' },
    'asan': { tr: 'Asan', en: 'Asan', es: 'Asan', ru: 'Асан', ar: 'أسان', fr: 'Asan', zh: '牙山' },
    'bagdat': { tr: 'Bağdat', en: 'Baghdad', es: 'Bagdad', ru: 'Багдад', ar: 'بغداد', fr: 'Bagdad', zh: '巴格达' },
    'bangalore': { tr: 'Bangalore', en: 'Bangalore', es: 'Bangalore', ru: 'Бангалор', ar: 'بنغالور', fr: 'Bangalore', zh: '班加罗尔' },
    'd city': { tr: 'D City', en: 'D City', es: 'D City', ru: 'D City', ar: 'دي سيتي', fr: 'D City', zh: 'D City' },
    'fafe': { tr: 'Fafe', en: 'Fafe', es: 'Fafe', ru: 'Фафе', ar: 'فافي', fr: 'Fafe', zh: '法菲' },
    'karayipler': { tr: 'Karayipler', en: 'Caribbean', es: 'Caribe', ru: 'Карибы', ar: 'الكاريبي', fr: 'Caraïbes', zh: '加勒比' },
    'makadi bay': { tr: 'Makadi Bay', en: 'Makadi Bay', es: 'Makadi Bay', ru: 'Макади Бэй', ar: 'خليج مكادي', fr: 'Makadi Bay', zh: '马卡迪湾' },
    'nasiriye': { tr: 'Nasıriye', en: 'Nasiriyah', es: 'Nasiriya', ru: 'Эн-Насирия', ar: 'الناصرية', fr: 'Nassiriya', zh: '纳西里耶' },
    'nasıriye': { tr: 'Nasıriye', en: 'Nasiriyah', es: 'Nasiriya', ru: 'Эн-Насирия', ar: 'الناصرية', fr: 'Nassiriya', zh: '纳西里耶' },
    'porec': { tr: 'Poreč', en: 'Porec', es: 'Poreč', ru: 'Пореч', ar: 'بوريتش', fr: 'Poreč', zh: '波雷奇' },
    'port ghalib': { tr: 'Port Ghalib', en: 'Port Ghalib', es: 'Port Ghalib', ru: 'Порт Галиб', ar: 'بورت غالب', fr: 'Port Ghalib', zh: '加利卜港' },
    'seignosse': { tr: 'Seignosse', en: 'Seignosse', es: 'Seignosse', ru: 'Сеньос', ar: 'سينيوس', fr: 'Seignosse', zh: '塞尼奥斯' },
    'skikda': { tr: 'Skikda', en: 'Skikda', es: 'Skikda', ru: 'Скикда', ar: 'سكيكدة', fr: 'Skikda', zh: '斯基克达' },
    'sofya': { tr: 'Sofya', en: 'Sofia', es: 'Sofía', ru: 'София', ar: 'صوفيا', fr: 'Sofia', zh: '索菲亚' },
    'soma bay': { tr: 'Soma Bay', en: 'Soma Bay', es: 'Soma Bay', ru: 'Сома Бэй', ar: 'خليج سوما', fr: 'Soma Bay', zh: '索马湾' },
    'sterlitamak': { tr: 'Sterlitamak', en: 'Sterlitamak', es: 'Sterlitamak', ru: 'Стерлитамак', ar: 'ستيرليتاماك', fr: 'Sterlitamak', zh: '斯捷尔利塔马克' },
    'vendays-montalivet': { tr: 'Vendays-Montalivet', en: 'Vendays-Montalivet', es: 'Vendays-Montalivet', ru: 'Ванде-Монталиве', ar: 'فانديه مونتاليفيه', fr: 'Vendays-Montalivet', zh: '旺代蒙塔利韦' },
    'volgograd': { tr: 'Volgograd', en: 'Volgograd', es: 'Volgogrado', ru: 'Волгоград', ar: 'فولغوغراد', fr: 'Volgograd', zh: '伏尔加格勒' },

    // Countries
    'türkiye': { tr: 'Türkiye', en: 'Turkey', es: 'Turquía', ru: 'Турция', ar: 'تركيا', fr: 'Turquie', zh: '土耳其' },
    'romanya': { tr: 'Romanya', en: 'Romania', es: 'Rumania', ru: 'Румыния', ar: 'رومانيا', fr: 'Roumanie', zh: '罗马尼亚' },
    'yunanistan': { tr: 'Yunanistan', en: 'Greece', es: 'Grecia', ru: 'Греция', ar: 'اليونان', fr: 'Grèce', zh: '希腊' },
    'fransa': { tr: 'Fransa', en: 'France', es: 'Francia', ru: 'Франция', ar: 'فرنسا', fr: 'France', zh: '法国' },
    'malezya': { tr: 'Malezya', en: 'Malaysia', es: 'Malasia', ru: 'Малайзия', ar: 'ماليزيا', fr: 'Malaisie', zh: '马来西亚' },
    'mısır': { tr: 'Mısır', en: 'Egypt', es: 'Egipto', ru: 'Египет', ar: 'مصر', fr: 'Égypte', zh: '埃及' },
    'macaristan': { tr: 'Macaristan', en: 'Hungary', es: 'Hungría', ru: 'Венгрия', ar: 'المجر', fr: 'Hongrie', zh: '匈牙利' },
    'bulgaristan': { tr: 'Bulgaristan', en: 'Bulgaria', es: 'Bulgaria', ru: 'Богария', ar: 'بلغاريا', fr: 'Bulgarie', zh: '保加利亚' },
    'sırbistan': { tr: 'Sırbistan', en: 'Serbia', es: 'Serbia', ru: 'Сербия', ar: 'صربيا', fr: 'Serbie', zh: '塞尔维亚' },
    'katar': { tr: 'Katar', en: 'Qatar', es: 'Qatar', ru: 'Катар', ar: 'قطر', fr: 'Qatar', zh: '卡塔尔' },
    'vietnam': { tr: 'Vietnam', en: 'Vietnam', es: 'Vietnam', ru: 'Вьетнам', ar: 'فيتنام', fr: 'Vietnam', zh: '越南' },
    'özbekistan': { tr: 'Özbekistan', en: 'Uzbekistan', es: 'Uzbekistán', ru: 'Узбекистан', ar: 'أوزبكستان', fr: 'Ouzbékistan', zh: '乌兹别克斯坦' },
    'güney kore': { tr: 'Güney Kore', en: 'South Korea', es: 'Corea del Sur', ru: 'Южная Корея', ar: 'كوريا الجنوبية', fr: 'Corée du Sud', zh: '韩国' },
    'kuzey kıbrıs': { tr: 'Kuzey Kıbrıs', en: 'Northern Cyprus', es: 'Chipre del Norte', ru: 'Северный Кипр', ar: 'قبرص الشمالية', fr: 'Chypre du Nord', zh: '北塞浦路斯' },
    'kazakistan': { tr: 'Kazakistan', en: 'Kazakhstan', es: 'Kazajistán', ru: 'Казахстан', ar: 'كازاخستان', fr: 'Kazakhstan', zh: '哈萨克斯坦' },
    'karadağ': { tr: 'Karadağ', en: 'Montenegro', es: 'Montenegro', ru: 'Черногория', ar: 'الجبل الأسود', fr: 'Monténégro', zh: '黑山' },
    'curaçao': { tr: 'Curaçao', en: 'Curaçao', es: 'Curaçao', ru: 'Кюрасао', ar: 'كوراساو', fr: 'Curaçao', zh: '库拉索' },
    'irak': { tr: 'Irak', en: 'Iraq', es: 'Irak', ru: 'Ирак', ar: 'العراق', fr: 'Irak', zh: '伊拉克' },
    'azerbaycan': { tr: 'Azerbaycan', en: 'Azerbaijan', es: 'Azerbaiyán', ru: 'Азербайджан', ar: 'أذربيجان', fr: 'Azerbaïdjan', zh: '阿塞拜疆' },
    'polonya': { tr: 'Polonya', en: 'Poland', es: 'Polonia', ru: 'Польша', ar: 'بولندا', fr: 'Pologne', zh: '波兰' },
    'slovakya': { tr: 'Slovakya', en: 'Slovakia', es: 'Eslovaquia', ru: 'Словакия', ar: 'سلوفاкия', fr: 'Slovaquie', zh: '斯洛伐克' },
    'moldova': { tr: 'Moldova', en: 'Moldova', es: 'Moldova', ru: 'Молдова', ar: 'مولدوفا', fr: 'Moldavie', zh: '摩尔多瓦' },
    'gürcistan': { tr: 'Gürcistan', en: 'Georgia', es: 'Georgia', ru: 'Грузия', ar: 'جورجيا', fr: 'Géorgie', zh: '格鲁吉亚' },
    'cezayir': { tr: 'Cezayir', en: 'Algeria', es: 'Argelia', ru: 'Алжир', ar: 'الجزائر', fr: 'Algérie', zh: '阿尔及利亚' },
    'fas': { tr: 'Fas', en: 'Morocco', es: 'Marruecos', ru: 'Марокко', ar: 'المغرب', fr: 'Maroc', zh: '摩洛哥' },
    'tunus': { tr: 'Tunus', en: 'Tunisia', es: 'Túnez', ru: 'Тунис', ar: 'تونس', fr: 'Tunisie', zh: '突尼斯' },
    'ispanya': { tr: 'İspanya', en: 'Spain', es: 'España', ru: 'Испания', ar: 'إسبانيا', fr: 'Espagne', zh: '西班牙' },
    'suudi arabistan': { tr: 'Suudi Arabistan', en: 'Saudi Arabia', es: 'Arabia Saudita', ru: 'Саудовская Аравия', ar: 'المملكة العربية السعودية', fr: 'Arabie Saoudite', zh: '沙特阿拉伯' },
    'portekiz': { tr: 'Portekiz', en: 'Portugal', es: 'Portugal', ru: 'Португалия', ar: 'البرتغال', fr: 'Portugal', zh: '葡萄牙' },
    'hirvatistan': { tr: 'Hırvatistan', en: 'Croatia', es: 'Croacia', ru: 'Хорватия', ar: 'كرواتيا', fr: 'Croatie', zh: '克罗地亚' },
    'hırvatistan': { tr: 'Hırvatistan', en: 'Croatia', es: 'Croacia', ru: 'Хорватия', ar: 'كرواتيا', fr: 'Croatie', zh: '克罗地亚' },
    'rusya': { tr: 'Rusya', en: 'Russia', es: 'Rusia', ru: 'Россия', ar: 'روسيا', fr: 'Russie', zh: '俄罗斯' },
    'hindistan': { tr: 'Hindistan', en: 'India', es: 'India', ru: 'Индия', ar: 'الهند', fr: 'Inde', zh: '印度' }
  };

  const translateLocation = (locStr) => {
    if (!locStr) return '';
    const currentLangCode = i18n.language || 'tr';
    const cleanStr = locStr.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

    // Split by comma
    const parts = locStr.split(', ');
    const translatedParts = parts.map(part => {
      // Normalize part to matching key (removing accents/diacritics to map correctly)
      const key = part.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (locationTranslations[key] && locationTranslations[key][currentLangCode]) {
        return locationTranslations[key][currentLangCode];
      }
      return part;
    });

    let result = translatedParts.join(', ');
    if (currentLangCode !== 'tr' && parts.length === 1 && (cleanStr === 'antalya' || cleanStr === 'mugla' || cleanStr === 'izmir' || cleanStr === 'bodrum' || cleanStr === 'fethiye')) {
      // If it is just a Turkish city, add Turkey suffix in non-Turkish languages
      result += `, ${locationTranslations['türkiye'][currentLangCode]}`;
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
                    color: 'var(--th-primary)',
                    WebkitTextStroke: '15.5px var(--th-polgun-antrasit)',
                    paintOrder: 'stroke fill',
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
