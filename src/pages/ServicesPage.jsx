// ============================================================
// SERVICES PAGE — Gerçek görseller + CSS değişkenleri + glass efekt
// =======================================================
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/polgun-featured-projects-4.avif'
import concept_design from '../assets/production/concept_design.avif'
import assemble from '../assets/production/assemble.avif'
import engineering from '../assets/production/engineering.avif'
import management from '../assets/production/management.avif'
import ppw from '../assets/production/production_polgun_waterslides.avif'

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

export default function ServicesPage({ setActivePage }) {
	const { t } = useTranslation()

	const steps = [
		{
			id: 'urun-tasarimi-ve-temalandirma',
			number: '01',
			title: t('services.steps.step1.title'),
			sub: 'Product Desıgn & Themıng',
			desc: t('services.steps.step1.desc'),
			img: concept_design,
			imgAlt: t('services.steps.step1.title'),
		},
		{
			id: 'muhendislik-ve-projelendirme',
			number: '02',
			title: t('services.steps.step2.title'),
			sub: 'Engıneerıng & Projectıng',
			desc: t('services.steps.step2.desc'),
			img: engineering,
			imgAlt: t('services.steps.step2.title'),
		},
		{
			id: 'uretim',
			number: '03',
			title: t('services.steps.step3.title'),
			sub: 'Productıon',
			desc: t('services.steps.step3.desc'),
			img: ppw,
			imgAlt: t('services.steps.step3.title'),
		},
		{
			id: 'proje-yonetimi-ve-sevkiyat',
			number: '04',
			title: t('services.steps.step4.title'),
			sub: 'Project Management & Shıppıng',
			desc: t('services.steps.step4.desc'),
			img: management,
			imgAlt: t('services.steps.step4.title'),
		},
		{
			id: 'montaj-ve-devreye-alma',
			number: '05',
			title: t('services.steps.step5.title'),
			sub: 'Installatıon & Commıssıonıng',
			desc: t('services.steps.step5.desc'),
			img: assemble,
			imgAlt: t('services.steps.step5.title'),
		}
	];

	const why = [
		{ title: t('services.why.service.title'), desc: t('services.why.service.desc') },
		{ title: t('services.why.countries.title'), desc: t('services.why.countries.desc') },
		{ title: t('services.why.iso.title'), desc: t('services.why.iso.desc') },
		{ title: t('services.why.lifetime.title'), desc: t('services.why.lifetime.desc') },
	];

	return (
		<main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

			{/* ── Page Hero ── */}
			<section className="py-10" style={{ backgroundColor: 'var(--th-primary)' }}>
				<div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-end">
						<div>
							<p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
								{t('nav.services')}
							</p>
							<h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
								{t('services.subtitle').includes(' Tam ') ? <>{t('services.subtitle').split(' Tam ')[0]}<br />{t('services.subtitle').split(' Tam ')[1]}</> : t('services.subtitle')}
							</h1>
						</div>
						<p className="text-white/50 text-lg leading-relaxed text-justify">
							{t('services.desc')}

						</p>
						<div className="flex gap-4 flex-wrap">
							<button
								onClick={() => setActivePage('contact')}
								className="px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
								style={{ backgroundColor: 'var(--th-polgun-antrasit)', boxShadow: `0 0 32px var(--th-polgun-antrasit)66` }}
								onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-text-muted)'}
								onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)'}
							>
								{t('common.quote')}
							</button>
							<button
								onClick={() => setActivePage('contact')}
								className="px-8 py-4 font-bold rounded-full transition-all duration-300 border-2"
								style={{ color: 'var(--th-polgun-antrasit)', borderColor: 'var(--th-polgun-antrasit)', backgroundColor: 'var(--th-primary)', backdropFilter: 'blur(8px)' }}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)26';
									e.currentTarget.style.transform = 'translateY(-4px)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor = 'var(--th-primary)';
									e.currentTarget.style.transform = 'translateY(0)';
								}}
							>
								{t('common.learn_more')}
							</button>
						</div>
					</div>

				</div>

			</section>

			{/* ── Neden Polgün Band ── */}
			<section style={{ backgroundColor: 'var(--th-surface)', borderBottom: '1px solid color-mix(in srgb,var(--th-border) 8%,transparent)' }}>
				<div className="py-16 max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'color-mix(in srgb,var(--th-border) 8%,transparent)' }}>
						{why.map((w) => (
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
			<section className="py-24 lg:py-32 ">
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="text-center mb-20">
						<p className="text-[11px] font-black tracking-[0.3em] uppercase mb-5 flex items-center justify-center gap-3" style={{ color: 'var(--th-polgun-blue)' }}>
							<span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-polgun-blue)' }} />
							{t('services.process_tag', { defaultValue: 'Hizmet Sürecimiz' })}
							<span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-polgun-blue)' }} />
						</p>
						<h2 className="font-black leading-tight" style={{ color: 'var(--th-text)', fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
							{t('services.process_title', { defaultValue: 'Başından sonuna her adımda yanınızdayız' })}
						</h2>
					</div>

					<div className="flex flex-col gap-28">
						{steps.map((step, i) => (
							<div
								key={i}
								id={step.id}
								className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
							>
								{/* Metin */}
								<div>
									<div className="flex items-center gap-4 mb-7">
										<span className="text-6xl font-black leading-none select-none"
											style={{ color: 'color-mix(in srgb,var(--th-polgun-blue) 15%,transparent)' }}>
											{step.number}
										</span>
										<div>
											<p className="text-[10px] font-black tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--th-primary)' }}>{step.sub}</p>
											<h2 className="font-black leading-tight" style={{ color: 'var(--th-text)', fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>{step.title}</h2>
										</div>
									</div>
									<p className="leading-relaxed mb-8 text-justify" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 70%,transparent)' }}>{step.desc}</p>

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
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="relative rounded-3xl overflow-hidden px-12 py-20 text-center" style={{ background: 'linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)' }}>
						<div className="absolute inset-0 opacity-10">
							<svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
								<circle cx="100" cy="150" r="200" fill="white" />
								<circle cx="700" cy="150" r="180" fill="white" />
							</svg>
						</div>
						<div className="relative z-10 max-w-3xl mx-auto">
							<p className="text-[11px] font-black tracking-[0.35em] uppercase mb-6 text-white/50"></p>
							<h2 className="font-black text-white mb-8 leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
								{t('services.cta_title', { defaultValue: 'Hayalinizi birlikte inşa edelim' })}
							</h2>
							<p className="text-white/50 mb-12 max-w-lg mx-auto leading-relaxed">
								{t('services.cta_desc', { defaultValue: 'Proje büyüklüğü ne olursa olsun, ilk günden son güne kadar yanınızdayız.' })}
							</p>
							<button
								onClick={() => setActivePage('contact')}
								className="px-10 py-4 text-white font-bold text-sm rounded-full transition-all duration-300 hover:-translate-y-1"
								style={{ backgroundColor: '#FFFFFF', color: 'var(--th-primary-darker)', boxShadow: '0 0 40px rgba(0,0,0,0.2)' }}
								onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
								onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
							>
								{t('common.quote')}
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
