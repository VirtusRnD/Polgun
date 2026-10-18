import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import istanbulImg from '../assets/factories/istanbul-factory.avif'
import bursaImg from '../assets/factories/bursa-factory.avif'
import muglaImg from '../assets/factories/mugla-factory.avif'

const FACTORIES = [
  {
    id: 'istanbul',
    image: istanbulImg,
  },
  {
    id: 'bursa',
    image: bursaImg,
  },
  {
    id: 'mugla',
    image: muglaImg,
  },
]

export default function FactoriesPage({ setActivePage }) {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
                {t('nav.about')} · {t('nav.factories', { defaultValue: 'Fabrikalarımız' })}
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
                  {t('factories.title')}
                </span>
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('factories.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Factories Grid */}
      <section className="container mx-auto px-6 max-w-7xl py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACTORIES.map((factory) => (
            <div 
              key={factory.id}
              className="group overflow-hidden rounded-3xl cursor-pointer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={factory.image} 
                  alt={t('factories.names.' + factory.id)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--th-primary-darker)' }}
                >
                  {t('factories.names.' + factory.id)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
