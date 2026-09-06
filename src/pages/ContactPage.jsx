// ============================================================
// CONTACT PAGE — Form + Lokasyon + İletişim Bilgileri
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// CMS API — uses relative paths (frontend and backend are on the same server)
const API_URL = ''

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
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

// ── İletişim Kartı ─────────────────────────────────────────
function formatContactLine(line) {
  if (typeof line !== 'string') return line

  // E-posta kontrolü
  if (line.includes('@')) {
    return (
      <a
        href={`mailto:${line.trim()}`}
        className="text-sm leading-relaxed block transition-colors hover:underline font-medium"
        style={{ color: 'var(--th-polgun-blue)' }}
      >
        {line}
      </a>
    )
  }

  // Telefon kontrolü (uluslararası veya yerel numara formatı)
  if (line.startsWith('+') || /^\+?[\d\s\(\)-]{7,}$/.test(line.trim())) {
    const rawNumber = line.replace(/[\s\(\)-]/g, '')
    return (
      <a
        href={`tel:${rawNumber}`}
        className="text-sm leading-relaxed block transition-colors hover:underline"
        style={{ color: 'color-mix(in srgb, var(--th-text-muted) 85%, transparent)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--th-polgun-blue)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--th-text-muted) 85%, transparent)')}
      >
        {line}
      </a>
    )
  }

  return (
    <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
      {line}
    </p>
  )
}

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
          <div key={i}>{formatContactLine(line)}</div>
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
  const { t } = useTranslation()

  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    interest: 'Su Kaydırakları', message: '',
  })
  const [sent, setSent] = useState(false)
  const [activeMap, setActiveMap] = useState('mugla')

  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')

    try {
      const payload = {
        company_name: form.company,
        contact_name: form.name,
        email: form.email,
        phone: form.phone,
        interest_area: form.interest,
        message: form.message,
      }

      const response = await fetch(`${API_URL}/api/partnership/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || t('contact.form.submit_error', { defaultValue: 'Mesaj gönderilemedi, lütfen tekrar deneyin.' }))
      }

      setSent(true)
    } catch (err) {
      setSubmitError(err.message || t('career.form.general_error', { defaultValue: 'Bir hata oluştu.' }))
    } finally {
      setSubmitting(false)
    }
  }

  const interestOptions = [
    { value: 'Su Kaydırakları', label: t('contact.form.interest.slides', { defaultValue: 'Su Kaydırakları' }) },
    { value: 'Dalga Havuzları', label: t('contact.form.interest.wave_pools', { defaultValue: 'Dalga Havuzları' }) },
    { value: 'Lazy River', label: t('contact.form.interest.lazy_river', { defaultValue: 'Lazy River' }) },
    { value: 'Çocuk Parkları', label: t('contact.form.interest.kids_parks', { defaultValue: 'Çocuk Parkları' }) },
    { value: 'Özel Proje', label: t('contact.form.interest.custom_project', { defaultValue: 'Özel Proje' }) },
    { value: 'Bakım & Servis', label: t('contact.form.interest.maintenance', { defaultValue: 'Bakım & Servis' }) },
  ]

  const translatedOffices = OFFICES.map(office => {
    let name = office.name
    let country = office.country
    if (office.id === 'mugla') {
      name = t('contact.offices.hq', { defaultValue: 'Merkez' })
      country = t('common.turkey', { defaultValue: 'Türkiye' })
    } else if (office.id === 'antalya') {
      name = t('contact.offices.antalya', { defaultValue: 'Antalya Ofis' })
      country = t('common.turkey', { defaultValue: 'Türkiye' })
    } else if (office.id === 'valencia') {
      name = t('contact.offices.europe', { defaultValue: 'Avrupa Ofis' })
      country = t('common.spain', { defaultValue: 'İspanya' })
    }
    return {
      ...office,
      name,
      country
    }
  })

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
                {t('contact.title', { defaultValue: 'İletişim' })}
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
                  {t('contact.hero_title', { defaultValue: 'Sizinle Tanışalım' })}
                </span>
              </h1>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('contact.hero_desc', { defaultValue: 'Yeni bir su parkı projesi geliştirmek, mevcut tesisinizi yenilemek veya ürünlerimiz hakkında detaylı bilgi almak için uzman ekibimizle iletişime geçebilirsiniz. Projenizin her aşamasında size destek olmaktan memnuniyet duyarız.' })}
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
              <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--th-text)' }}>{t('contact.project_request', { defaultValue: 'Proje Talebi' })}</h2>
              <p className="text-sm mb-10" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                {t('contact.form.sub_desc', { defaultValue: 'Tüm alanları eksiksiz doldurarak bize ulaşabilirsiniz.' })}
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
                  <h3 className="text-xl font-black mb-3" style={{ color: 'var(--th-text)' }}>{t('contact.form.success_title', { defaultValue: 'Mesajınız Alındı' })}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                    {t('contact.form.success_desc', { defaultValue: 'Talebiniz alınmıştır, uzman ekibimiz en kısa sürede size dönüş yapacaktır.' })}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Ad - Soyad / E-posta */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label={t('contact.form.name', { defaultValue: 'Ad Soyad' })} name="name" placeholder="Ahmet Yılmaz"
                      value={form.name} onChange={handleChange} required />
                    <Field label={t('contact.form.email', { defaultValue: 'E-posta' })} name="email" type="email" placeholder="ornek@sirketiniz.com"
                      value={form.email} onChange={handleChange} required />
                  </div>

                  {/* Telefon / Şirket */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label={t('contact.form.phone', { defaultValue: 'Telefon' })} name="phone" type="tel" placeholder="+90 5XX XXX XX XX"
                      value={form.phone} onChange={handleChange} />
                    <Field label={t('contact.form.company', { defaultValue: 'Şirket / Proje Adı' })} name="company" placeholder="Polgün Waterparks"
                      value={form.company} onChange={handleChange} />
                  </div>

                  {/* İlgi Alanı */}
                  <SelectField
                    label={t('contact.form.interest_label', { defaultValue: 'İlgilendiğiniz Ürün' })}
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    options={interestOptions}
                  />

                  {/* Mesaj */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'color-mix(in srgb, var(--th-text) 60%, transparent)' }}>
                      {t('contact.form.message', { defaultValue: 'Mesajınız' })} <span style={{ color: 'var(--th-polgun-blue)' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.message_placeholder', { defaultValue: 'Projeniz veya talebiniz hakkında detaylı bilgi verebilirsiniz...' })}
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
                      {t('contact.form.kvkk_desc_prefix', { defaultValue: 'Müşteri - Tedarikçi' })}{' '}
                      <a href="/documents/kvkk/musteri-tedarikci-aydinlatma.doc" target="_blank" className="hover:underline" style={{ color: 'var(--th-polgun-blue)' }}>{t('career.form.kvkk_link', { defaultValue: 'Aday Çalışan Aydınlatma Metni' })}</a>'{t('contact.form.kvkk_desc_suffix', { defaultValue: 'ni okudum ve onaylıyorum.' })}
                    </span>
                  </label>

                  {/* Error Message */}
                  {submitError && (
                    <div className="text-red-500 text-xs font-bold px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
                      {submitError}
                    </div>
                  )}

                  {/* Gönder Butonu */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto self-start px-8 py-3.5 bg-[#22ABE6] hover:bg-[#1a8fc2] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg transition-all duration-200 transform active:scale-[0.98] cursor-pointer"
                  >
                    {submitting ? t('common.sending', { defaultValue: 'Gönderiliyor...' }) : t('contact.form.submit_btn', { defaultValue: 'Mesajı Gönder' })}
                  </button>
                </form>
              )}
            </div>

            {/* ── Sağ Panel: İletişim Bilgileri (2/5) ── */}
            <div className="lg:col-span-2 max-w-[var(--layout-max)] flex flex-col gap-12">
              {/* İletişim Bilgileri */}
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-8 border border-[color-mix(in_srgb,var(--th-border)_25%,transparent)]">
                <h3 className="text-lg font-black" style={{ color: 'var(--th-text)' }}>{t('contact.info_title', { defaultValue: 'İletişim Bilgileri' })}</h3>
                <ContactCard
                  icon="📍"
                  title={t('contact.offices.hq_address_label', { defaultValue: 'Merkez Adres' })}
                  lines={['Salihpaşalar Mh. Köyiçi Sokak', '241 A Blok S.Room Menteşe/MUĞLA']}
                />
                <ContactCard
                  icon="📞"
                  title={t('contact.form.phone', { defaultValue: 'Telefon' })}
                  lines={['+90 (252) 225 58 88', '+90 (555) 800 34 76']}
                />
                <ContactCard
                  icon="✉️"
                  title={t('contact.form.email', { defaultValue: 'E-posta' })}
                  lines={['info@polgun.com']}
                />
                <ContactCard
                  icon="🕐"
                  title={t('contact.hours_label', { defaultValue: 'Çalışma Saatleri' })}
                  lines={[t('contact.hours_val1', { defaultValue: 'Pzt–Cmt: 08:30–18:00' }), t('contact.hours_val2', { defaultValue: 'Pazar: Kapalı' })]}
                />
              </div>

              {/* Ofisler */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: 'color-mix(in srgb, var(--th-text) 40%, transparent)' }}>
                  {t('contact.offices_title', { defaultValue: 'Ofislerimiz' })}
                </h3>
                <div className="flex flex-col gap-3">
                  {translatedOffices.map((office) => (
                    <div key={office.id}
                      className="flex flex-col gap-1 py-3.5 border-b last:border-0"
                      style={{ borderColor: 'color-mix(in srgb, var(--th-border) 35%, transparent)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--th-polgun-blue)' }} />
                        <span className="text-sm font-bold" style={{ color: 'var(--th-text)' }}>{office.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)', color: 'var(--th-polgun-blue)' }}>{office.country}</span>
                      </div>
                      <p className="text-xs ml-[18px] flex flex-wrap items-center gap-x-2 gap-y-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>
                        <a
                          href={`tel:${office.phone.replace(/[\s\(\)-]/g, '')}`}
                          className="hover:underline transition-colors"
                          style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--th-polgun-blue)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)')}
                        >
                          {office.phone}
                        </a>
                        {office.mobile && (
                          <>
                            <span>/</span>
                            <a
                              href={`tel:${office.mobile.replace(/[\s\(\)-]/g, '')}`}
                              className="hover:underline transition-colors"
                              style={{ color: 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)' }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--th-polgun-blue)')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = 'color-mix(in srgb, var(--th-text-muted) 80%, transparent)')}
                            >
                              {office.mobile}
                            </a>
                          </>
                        )}
                        {office.email && (
                          <>
                            <span>•</span>
                            <a
                              href={`mailto:${office.email}`}
                              className="hover:underline transition-colors font-medium"
                              style={{ color: 'var(--th-polgun-blue)' }}
                            >
                              {office.email}
                            </a>
                          </>
                        )}
                      </p>
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
            {translatedOffices.map((office) => (
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
            {translatedOffices.map((office) => (
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
