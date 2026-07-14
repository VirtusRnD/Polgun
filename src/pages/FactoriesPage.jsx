import { useEffect } from 'react'

import istanbulImg from '../assets/factories/istanbul-factory.png'
import bursaImg from '../assets/factories/bursa-factory.png'
import muglaImg from '../assets/factories/mugla-factory.png'

const FACTORIES = [
  {
    id: 'istanbul',
    name: 'İstanbul Fabrika',
    image: istanbulImg,
  },
  {
    id: 'bursa',
    name: 'Bursa Fabrika',
    image: bursaImg,
  },
  {
    id: 'mugla',
    name: 'Muğla Fabrika',
    image: muglaImg,
  },
]

export default function FactoriesPage({ setActivePage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ backgroundColor: 'var(--th-bg)' }} className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 xl:px-0 max-w-7xl mb-16">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          style={{ color: 'var(--th-primary-darker)' }}
        >
          Fabrikalarımız
        </h1>
        <p 
          className="text-lg md:text-xl max-w-3xl"
          style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}
        >
          Üretim gücümüzü yansıtan modern tesislerimizde, en yüksek kalite standartlarında, 
          doğaya ve insana saygılı bir şekilde üretim yapıyoruz.
        </p>
      </section>

      {/* Factories Grid */}
      <section className="container mx-auto px-6 xl:px-0 max-w-7xl">
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
                  alt={factory.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--th-primary-darker)' }}
                >
                  {factory.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
