// ============================================================
// CONTACT PAGE — Form + Lokasyon + İletişim Bilgileri
// ============================================================
import { useState } from 'react'

// ── Input Bileşeni ─────────────────────────────────────────
function Field({ label, type = 'text', placeholder, name, value, onChange, required = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-wide uppercase"
        style={{ color: 'color-mix(in srgb, var(--th-text) 60%, transparent)' }}
      >
        {label}{required && <span className="ml-0.5" style={{ color: 'var(--th-polgun-blue)' }}>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-5 py-3.5 bg-white border rounded-xl text-sm transition-all duration-200
          text-[var(--th-text)]
          border-[color-mix(in_srgb,var(--th-border)_20%,transparent)]
          placeholder:text-[color-mix(in_srgb,var(--th-text-muted)_35%,transparent)]
          focus:outline-none focus:border-[var(--th-polgun-blue-polgun-blue-polgun-blue)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--th-polgun-blue)_10%,transparent)]"
      />
    </div>
  )
}

// ── Select Bileşeni ────────────────────────────────────────
function SelectField({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-wide uppercase"
        style={{ color: 'color-mix(in srgb, var(--th-text) 60%, transparent)' }}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-3.5 bg-white border rounded-xl text-sm transition-all duration-200 appearance-none cursor-pointer
          text-[var(--th-text)]
          border-[color-mix(in_srgb,var(--th-border)_20%,transparent)]
          focus:outline-none focus:border-[var(--th-polgun-blue)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--th-polgun-blue)_10%,transparent)]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

// ── İletişim Kartı ─────────────────────────────────────────
function ContactCard({ icon, title, lines }) {
  return (
    <div className="flex gap-5 items-start">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg"
        style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)' }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: 'var(--th-polgun-blue)' }}>{title}</p>
        {lines.map((line, i) => (
          <p key={i} className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{line}</p>
        ))}
      </div>
    </div>
  )
}

const OFFICES = [
  {
    id: 'mugla',
    name: 'Merkez',
    country: 'Türkiye',
    address: 'Salihpaşalar Mh. Köyiçi Sokak 241 A Blok S.Room Menteşe/MUĞLA',
    phone: '+90 (252) 225 58 88',
    mobile: '+90 (555) 800 34 76',
    email: 'info@polgun.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50800.393605116005!2d28.22280050951588!3d37.27084374291052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7c286e8d07e2efa!2sPolg%C3%BCn%20Waterparks%20%26%20Attractions!5e0!3m2!1str!2str!4v1581819551188!5m2!1str!2str',
  },
  {
    id: 'antalya',
    name: 'Antalya Ofis',
    country: 'Türkiye',
    address: 'Soğucaksu Mahallesi, Serik Caddesi No:113 Antalya/Turkey',
    phone: '+90 (252) 225 58 88',
    mobile: '+90 (555) 800 34 76',
    email: 'info@polgun.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.0991793070643!2d30.812185015594952!3d36.935797167754224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38358c24efb21%3A0xd7d5e2e7cc816194!2sPolgun%20Waterparks%20%26%20Attractions%20Antalya!5e0!3m2!1str!2str!4v1595760966578!5m2!1str!2str',
  },
  {
    id: 'valencia',
    name: 'Avrupa Ofis',
    country: 'İspanya',
    address: 'Calle Isabel la Catolica No:6/8, 46004 Piso:4, Valencia, Spain',
    phone: '+34 962 024 439',
    mobile: null,
    email: 'info@polgun.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3079.9872521394327!2d-0.3726334!3d39.4696167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6049f05c99fa7d%3A0x39e397a9f05f448!2sPolgun%20Europe%20Waterparks%20%26%20Attractions!5e0!3m2!1str!2str!4v1595760948220!5m2!1str!2str',
  },
]

export default function ContactPage({ setActivePage }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    interest: 'Su Kaydırakları', message: '',
  })
  const [sent, setSent] = useState(false)
  const [activeMap, setActiveMap] = useState('mugla')

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                İletişim
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                Sizinle<br />Tanışalım
              </h1>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* ── Ana İçerik ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)]  lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* ── Form Bölümü (3/5) ── */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--th-text)' }}>Proje Talebi</h2>
              <p className="text-sm mb-10" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {sent ? (
                /* Başarı Durumu */
                <div
                  className="rounded-2xl p-10 text-center"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 8%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--th-polgun-blue) 20%, transparent)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 15%, transparent)' }}
                  >
                    <svg className="w-8 h-8" style={{ color: 'var(--th-polgun-blue)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black mb-3" style={{ color: 'var(--th-text)' }}>Mesajınız Alındı</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Ad - Soyad / E-posta */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Ad Soyad" name="name" placeholder="Lorem Ipsum"
                      value={form.name} onChange={handleChange} required />
                    <Field label="E-posta" name="email" type="email" placeholder="lorem@ipsum.com"
                      value={form.email} onChange={handleChange} required />
                  </div>

                  {/* Telefon / Şirket */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Telefon" name="phone" type="tel" placeholder="+90 5XX XXX XX XX"
                      value={form.phone} onChange={handleChange} />
                    <Field label="Şirket / Proje Adı" name="company" placeholder="Lorem Ipsum A.Ş."
                      value={form.company} onChange={handleChange} />
                  </div>

                  {/* İlgi Alanı */}
                  <SelectField
                    label="İlgilendiğiniz Ürün"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    options={['Su Kaydırakları', 'Dalga Havuzları', 'Lazy River', 'Çocuk Parkları', 'Özel Proje', 'Bakım & Servis']}
                  />

                  {/* Mesaj */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'color-mix(in srgb, var(--th-text) 60%, transparent)' }}>
                      Mesajınız <span style={{ color: 'var(--th-polgun-blue)' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                      required
                      className="w-full px-5 py-3.5 bg-white border rounded-xl text-sm transition-all duration-200 resize-none
                        text-[var(--th-text)]
                        border-[color-mix(in_srgb,var(--th-border)_20%,transparent)]
                        placeholder:text-[color-mix(in_srgb,var(--th-text-muted)_35%,transparent)]
                        focus:outline-none focus:border-[var(--th-polgun-blue)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--th-polgun-blue)_10%,transparent)]"
                    />
                  </div>

                  {/* KVKK */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" required
                      className="mt-0.5 w-4 h-4 rounded cursor-pointer shrink-0 border-[color-mix(in_srgb,var(--th-border)_30%,transparent)] accent-[var(--th-polgun-blue)]" />
                    <span className="text-xs leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                      <a href="#" className="hover:underline" style={{ color: 'var(--th-polgun-blue)' }}>KVKK Aydınlatma Metni</a>'ni okudum ve onaylıyorum.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto sm:self-start px-10 py-4 text-white text-sm font-semibold rounded-full transition-all duration-200
                      bg-[var(--th-polgun-blue)] hover:opacity-90 hover:shadow-xl hover:shadow-[color-mix(in_srgb,var(--th-polgun-blue)_25%,transparent)] hover:-translate-y-0.5"
                  >
                    Talebi Gönder
                  </button>
                </form>
              )}
            </div>

            {/* ── Sağ Panel: İletişim Bilgileri (2/5) ── */}
            <div className="lg:col-span-2 max-w-[var(--layout-max)] flex flex-col gap-12">
              {/* İletişim Bilgileri */}
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-8 border border-[color-mix(in_srgb,var(--th-border)_25%,transparent)]">
                <h3 className="text-lg font-black" style={{ color: 'var(--th-text)' }}>İletişim Bilgileri</h3>
                <ContactCard
                  icon="📍"
                  title="Merkez Adres"
                  lines={['Salihpaşalar Mh. Köyiçi Sokak', '241 A Blok S.Room Menteşe/MUĞLA']}
                />
                <ContactCard
                  icon="📞"
                  title="Telefon"
                  lines={['+90 (252) 225 58 88', '+90 (555) 800 34 76']}
                />
                <ContactCard
                  icon="✉️"
                  title="E-posta"
                  lines={['info@polgun.com']}
                />
                <ContactCard
                  icon="🕐"
                  title="Çalışma Saatleri"
                  lines={['Pzt–Cmt: 08:30–18:00', 'Pazar: Kapalı']}
                />
              </div>

              {/* Ofisler */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'color-mix(in srgb, var(--th-text) 40%, transparent)' }}>
                  Ofislerimiz
                </h3>
                <div className="flex flex-col gap-3">
                  {OFFICES.map((office) => (
                    <div key={office.id}
                      className="flex flex-col gap-1 py-3.5 border-b last:border-0"
                      style={{ borderColor: 'color-mix(in srgb, var(--th-border) 35%, transparent)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--th-polgun-blue)' }} />
                        <span className="text-sm font-bold" style={{ color: 'var(--th-text)' }}>{office.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)', color: 'var(--th-polgun-blue)' }}>{office.country}</span>
                      </div>
                      <p className="text-xs ml-[18px] leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>{office.address}</p>
                      <p className="text-xs ml-[18px]" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>{office.phone}{office.mobile ? ` / ${office.mobile}` : ''}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Haritalar ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-7xl max-w-[var(--layout-max)] mx-auto px-6 lg:px-12">
          {/* Ofis Sekmeleri */}
          <div className="flex flex-wrap gap-2 mb-6">
            {OFFICES.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveMap(office.id)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
                style={
                  activeMap === office.id
                    ? {
                        backgroundColor: 'var(--th-polgun-blue)',
                        color: '#fff',
                        boxShadow: '0 4px 16px color-mix(in srgb, var(--th-polgun-blue) 30%, transparent)',
                      }
                    : {
                        color: 'var(--th-text-muted)',
                        backgroundColor: 'color-mix(in srgb, var(--th-border) 15%, transparent)',
                      }
                }
                onMouseEnter={(e) => {
                  if (activeMap !== office.id)
                    e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 12%, transparent)'
                }}
                onMouseLeave={(e) => {
                  if (activeMap !== office.id)
                    e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-border) 15%, transparent)'
                }}
              >
                📍 {office.name} — {office.country}
              </button>
            ))}
          </div>

          {/* Harita */}
          <div className="overflow-hidden rounded-3xl" style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.10)' }}>
            {OFFICES.map((office) => (
              <iframe
                key={office.id}
                src={office.mapSrc}
                width="100%"
                height="500"
                style={{ border: 0, display: activeMap === office.id ? 'block' : 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Polgün ${office.name}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
