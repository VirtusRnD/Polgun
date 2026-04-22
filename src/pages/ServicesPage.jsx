// ============================================================
// SERVICES PAGE — Gerçek görseller + CSS değişkenleri + glass efekt
// ============================================================
import heroImage from '../assets/polgun-featured-projects-4.jpeg'
import { COLOR_PALETTES } from '../constants/colorPalettes'

// ── Hizmet Adımları ────────────────────────────────────────
const STEPS = [
	{
		number: '01',
		title: 'Tasarım & Mühendislik',
		sub: 'Design & Engineering',
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
		bullets: [
			'Konsept ve fizibilite çalışmaları',
			'Master plan ve 3D modelleme',
			'Yapısal ve hidrolik mühendislik',
			'Tema entegrasyonu ve görsel tasarım',
		],
		img: heroImage,
		imgAlt: 'Su parkı tasarım çalışması',
	},
	{
		number: '02',
		title: 'Üretim & İnşaat',
		sub: 'Manufacturing & Build',
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
		bullets: [
			'ISO sertifikalı üretim tesisleri',
			'GRP / HDPE kompozit üretim',
			'Kalite kontrol ve test süreçleri',
			'Zamanında teslimat garantisi',
		],
		img: heroImage,
		imgAlt: 'Su parkı üretim tesisi',
	},
	{
		number: '03',
		title: 'Montaj & Devreye Alma',
		sub: 'Installation & Commissioning',
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
		bullets: [
			'Uzman saha ekipleri',
			'Güvenlik testleri ve sertifikasyon',
			'Personel eğitim programları',
			'Devreye alma desteği',
		],
		img: heroImage,
		imgAlt: 'Su parkı montaj sahnesi',
	},
	{
		number: '04',
		title: 'Bakım & Onarım',
		sub: 'Maintenance & Repair',
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
		bullets: [
			'Yıllık bakım sözleşmeleri',
			'Yedek parça stok yönetimi',
			'7/24 teknik destek hattı',
			'Uzaktan izleme sistemi',
		],
		img: heroImage,
		imgAlt: 'Su parkı bakım ekibi',
	},
	{
		number: '05',
		title: 'Yenileme Hizmetleri',
		sub: 'Refurbishment & Renovation',
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
		bullets: [
			'Mevcut kaydırak yüzey yenileme',
			'Teknik güncelleme ve modernizasyon',
			'Tema yenileme ve renk değişimi',
			'Enerji verimliliği iyileştirme',
		],
		img: heroImage,
		imgAlt: 'Su parkı yenileme projesi',
	},
	{
		number: '06',
		title: 'Park Yönetim Yazılımı',
		sub: 'Park Management Software',
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
		bullets: [
			'Gerçek zamanlı kapasite yönetimi',
			'Ziyaretçi deneyim platformu',
			'Gelir optimizasyon araçları',
			' kapsamlı raporlama ve analitik',
		],
		img: heroImage,
		imgAlt: 'Park yönetim yazılımı ekranı',
	},
];

const WHY = [
	{  title: 'Tam Hizmet', desc: 'Tasarımdan montaja, bakımdan yazılıma — her adımda.' },
	{  title: '70+ Ülke', desc: 'Global proje deneyimi ve yerel uzmanlık.' },
	{  title: 'ISO 9001', desc: 'Sertifikalı üretim ve kalite süreçleri.' },
	{  title: 'Ömür Boyu', desc: 'Uzun vadeli teknik destek ve yedek parça garantisi.' },
];

// ── Glass Kart bileşeni ────────────────────────────────────
function GlassCard({ children, className = '', style = {} }) {
	return (
		<div
			className={`relative rounded-2xl overflow-hidden ${className}`}
			style={{
				background: 'rgba(255,255,255,0.08)',
				backdropFilter: 'blur(20px)',
				WebkitBackdropFilter: 'blur(20px)',
				border: '1px solid rgba(255,255,255,0.15)',
				boxShadow: '0 8px 32px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.1)',
				...style,
			}}
		>
			{children}
		</div>
	);
}

export default function ServicesPage({ setActivePage, colorPalette = 1 }) {
	const palette = COLOR_PALETTES[colorPalette] || COLOR_PALETTES[1]
	
	return (
		<main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                Servislerimiz
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                Başından<br />Sonuna<br />Tam Destek
              </h1>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
							<div className="flex gap-4 flex-wrap">
								<button
									onClick={() => setActivePage('contact')}
									className="px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
									style={{ backgroundColor: palette.secondary, boxShadow: `0 0 32px ${palette.secondary}66` }}
									onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-text-muted)'}
									onMouseLeave={(e) => e.currentTarget.style.backgroundColor = palette.secondary}
								>
									Teklif Al
								</button>
								<button
									onClick={() => setActivePage('contact')}
									className="px-8 py-4 font-bold rounded-full transition-all duration-300 border-2"
									style={{ color: palette.secondary, borderColor: palette.secondary, backgroundColor: `${palette.accent}0D`, backdropFilter: 'blur(8px)' }}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = `${palette.secondary}26`;
										e.currentTarget.style.transform = 'translateY(-4px)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = `${palette.accent}0D`;
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>
									Daha Fazla Bilgi
								</button>
							</div>
						</div>

					</div>
				
			</section>

			{/* ── Neden Polgün Band ── */}
			<section style={{ backgroundColor: 'var(--th-surface)', borderBottom: '1px solid color-mix(in srgb,var(--th-border) 8%,transparent)' }}>
				<div className="max-w-[1400px] mx-auto px-6 lg:px-14">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'color-mix(in srgb,var(--th-border) 8%,transparent)' }}>
						{WHY.map((w) => (
							<div key={w.title} className="px-8 py-10" style={{ backgroundColor: 'var(--th-surface)' }}>
								<div className="text-3xl mb-4">{w.icon}</div>
								<h3 className="font-bold mb-2" style={{ color: 'var(--th-text)' }}>{w.title}</h3>
								<p className="text-sm" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 65%,transparent)' }}>{w.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Adım Adım Hizmetler ── */}
			<section className="py-24 lg:py-32">
				<div className="max-w-[1400px] mx-auto px-6 lg:px-14">
					<div className="text-center mb-20">
						<p className="text-[11px] font-black tracking-[0.3em] uppercase mb-5 flex items-center justify-center gap-3" style={{ color: 'var(--th-accent)' }}>
							<span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-accent)' }} />
							Hizmet Sürecimiz
							<span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-accent)' }} />
						</p>
						<h2 className="font-black leading-tight" style={{ color: 'var(--th-text)', fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
							Başından sonuna<br />her adımda yanınızdayız
						</h2>
					</div>

					<div className="flex flex-col gap-28">
						{STEPS.map((step, i) => (
							<div
								key={i}
								className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
							>
								{/* Metin */}
								<div>
									<div className="flex items-center gap-4 mb-7">
										<span className="text-6xl font-black leading-none select-none"
											style={{ color: 'color-mix(in srgb,var(--th-accent) 15%,transparent)' }}>
											{step.number}
										</span>
										<div>
											<p className="text-[10px] font-black tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--th-accent)' }}>{step.sub}</p>
											<h2 className="font-black leading-tight" style={{ color: 'var(--th-text)', fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>{step.title}</h2>
										</div>
									</div>
									<p className="leading-relaxed mb-8" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 70%,transparent)' }}>{step.desc}</p>
									<div className="flex flex-col gap-3">
										{step.bullets.map((b) => (
											<div key={b} className="flex items-center gap-3">
												<div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
													style={{ backgroundColor: 'color-mix(in srgb,var(--th-accent) 15%,transparent)' }}>
													<svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
														style={{ color: 'var(--th-accent)' }}>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
													</svg>
												</div>
												<span className="text-sm" style={{ color: 'color-mix(in srgb,var(--th-text) 75%,transparent)' }}>{b}</span>
											</div>
										))}
									</div>
								</div>

								{/* Gerçek Görsel */}
								<div className="overflow-hidden rounded-2xl aspect-[4/3] relative group">
									<img
										src={step.img}
										alt={step.imgAlt}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									{/* Subtle overlay */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.3),transparent)' }} />
									{/* Adım numarası */}
									<div className="absolute top-5 right-5">
										<GlassCard className="px-3 py-1.5">
											<span className="text-xs font-black text-white tracking-widest">{step.number}</span>
										</GlassCard>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

		{/* ── CTA ── */}
		<section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
			<div className="max-w-[1400px] mx-auto px-6 lg:px-14">
				<div className="relative rounded-3xl overflow-hidden px-12 py-20 text-center" style={{ background: 'linear-gradient(135deg,var(--th-primary-darker) 0%,var(--th-primary) 50%,var(--th-accent) 100%)' }}>
					<div className="absolute inset-0 opacity-10">
						<svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
							<circle cx="100" cy="150" r="200" fill="white"/>
							<circle cx="700" cy="150" r="180" fill="white"/>
						</svg>
					</div>
					<div className="relative z-10 max-w-3xl mx-auto">
						<p className="text-[11px] font-black tracking-[0.35em] uppercase mb-6 text-white/50"></p>
						<h2 className="font-black text-white mb-8 leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
							Hayalinizi birlikte<br />inşa edelim
						</h2>
						<p className="text-white/50 mb-12 max-w-lg mx-auto leading-relaxed">
							Proje büyüklüğü ne olursa olsun, ilk günden son güne kadar yanınızdayız.
						</p>
						<button
							onClick={() => setActivePage('contact')}
							className="px-10 py-4 text-white font-bold text-sm rounded-full transition-all duration-300 hover:-translate-y-1"
							style={{ backgroundColor: '#FFFFFF', color: 'var(--th-primary-darker)', boxShadow: '0 0 40px rgba(0,0,0,0.2)' }}
							onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
							onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
						>
							Hemen Teklif Al
						</button>
					</div>
				</div>
			</div>
		</section>
		</main>
	)
}
