// ============================================================
// SERVICES PAGE — Gerçek görseller + CSS değişkenleri + glass efekt
// ============================================================
import heroImage from '../assets/polgun-featured-projects-4.avif'
import concept_design from '../assets/production/concept_design.avif'
import assemble from '../assets/production/assemble.avif'
import engineering from '../assets/production/engineering.avif'
import management from '../assets/production/management.avif'
import ppw from '../assets/production/production_polgun_waterslides.avif'
// ── Hizmet Adımları ────────────────────────────────────────
const STEPS = [
    {
        id: 'urun-tasarimi-ve-temalandirma',
        number: '01',
        title: 'Ürün Tasarımı ve Temalandırma',
        sub: 'Product Desıgn & Themıng',
        desc: 'Su kaydırakları, çocuk oyun grupları ve su parkı atraksiyonları, projenin konseptine ve müşteri beklentilerine göre özel olarak tasarlanır. Renk, desen, tema ve görsel detaylar ürün geometrisiyle uyumlu şekilde geliştirilerek ziyaretçi deneyimini güçlendiren özgün tasarımlar oluşturulur.',
        img: concept_design, // Orijinal diziden örnek bir görsel değişkeni, kendi görselinize göre güncelleyebilirsiniz.
        imgAlt: 'Ürün tasarımı ve temalandırma',
    },
    {
        id: 'muhendislik-ve-projelendirme',
        number: '02',
        title: 'Mühendislik ve Projelendirme',
        sub: 'Engıneerıng & Projectıng',
        desc: 'Kaydırak sistemleri, çelik taşıyıcı yapılar, mekanik ve hidrolik altyapılar mühendislik ekipleri tarafından detaylı şekilde projelendirilir. Yapısal hesaplamalar, teknik analizler, üretim çizimleri ve montaj dokümanları proje koşulları doğrultusunda hazırlanır. Tasarımın güvenli, üretilebilir ve sahada uygulanabilir bir sisteme dönüştürülmesi sağlanır.',
        img: engineering,
        imgAlt: 'Mühendislik ve projelendirme',
    },
    {
        id: 'uretim',
        number: '03',
        title: 'Üretim',
        sub: 'Productıon',
        desc: 'Fiberglas kaydırak parçaları, çelik konstrüksiyonlar, modeller, kalıplar ve projeye özel bileşenler Polgün’ün üretim tesislerinde hazırlanır. Üretim süreçleri; ölçü doğruluğu, yüzey kalitesi, dayanıklılık ve izlenebilirlik esas alınarak yürütülür. Her ürün, proje gerekliliklerine ve belirlenen kalite standartlarına uygunluğu doğrulandıktan sonra sevkiyata hazırlanır.',
        img: ppw,
        imgAlt: 'Üretim',
    },
    {
        id: 'proje-yonetimi-ve-sevkiyat',
        number: '04',
        title: 'Proje Yönetimi ve Sevkiyat',
        sub: 'Project Management & Shıppıng',
        desc: 'Tasarım, üretim, paketleme, lojistik ve saha süreçleri proje takvimine uygun şekilde koordine edilir. Ürünler doğru kodlama ve etiketleme sistemiyle hazırlanarak güvenli biçimde paketlenir ve proje sahasına eksiksiz ulaştırılır. Sürecin her aşaması düzenli olarak takip edilerek zaman, maliyet ve kalite hedeflerinin korunması sağlanır.',
        img: management, // Orijinal listeden sevkiyat/kontrol adımı için seçildi.
        imgAlt: 'Proje yönetimi ve sevkiyat',
    },
    {
        id: 'montaj-ve-devreye-alma',
        number: '05',
        title: 'Montaj ve Devreye Alma',
        sub: 'Installatıon & Commıssıonıng',
        desc: 'Kaydıraklar, çelik konstrüksiyonlar ve ilgili ekipmanlar deneyimli saha ekipleri tarafından veya Polgün teknik gözetimi altında monte edilir. Montaj sonrasında bağlantılar, kayma yüzeyleri, su akışı ve sistem fonksiyonları detaylı olarak kontrol edilir. Gerekli testler tamamlandıktan sonra sistem güvenli ve verimli kullanıma hazır hâle getirilir.',
        img: assemble,
        imgAlt: 'Montaj ve devreye alma',
    }
];
const WHY = [
	{ title: 'Tam Hizmet', desc: 'Tasarımdan montaja, bakımdan yazılıma her adımda.' },
	{ title: '70+ Ülke', desc: 'Global proje deneyimi ve yerel uzmanlık.' },
	{ title: 'ISO 9001', desc: 'Sertifikalı üretim ve kalite süreçleri.' },
	{ title: 'Ömür Boyu', desc: 'Uzun vadeli teknik destek ve yedek parça garantisi.' },
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

export default function ServicesPage({ setActivePage }) {

	return (
		<main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

			{/* ── Page Hero ── */}
			<section className="py-10" style={{ backgroundColor: 'var(--th-primary)' }}>
				<div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-end">
						<div>
							<p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
								Hizmetlerimiz
							</p>
							<h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
								Başından<br />Sonuna<br />Tam Destek
							</h1>
						</div>
						<p className="text-white/50 text-lg leading-relaxed">
							Polgün, su parkı projelerinin konsept geliştirme ve tasarım aşamasından mühendislik, üretim, montaj ve satış sonrası desteğe kadar tüm süreçlerinde bütüncül çözümler sunar. <br></br><br></br>
							Tasarım, mühendislik ve üretim ekiplerinin koordineli çalışması sayesinde her proje; bulunduğu alanın koşullarına, hedef kullanıcı kitlesine, kapasite gereksinimlerine ve yatırım hedeflerine uygun şekilde geliştirilir.<br></br><br></br>
							Polgün’ün amacı yalnızca ürün tedarik etmek değil; güvenli, sürdürülebilir, görsel açıdan güçlü ve uzun yıllar yüksek performansla çalışabilecek su parkı deneyimleri oluşturmaktır.<br></br>
						</p>
						<div className="flex gap-4 flex-wrap">
							<button
								onClick={() => setActivePage('contact')}
								className="px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
								style={{ backgroundColor: 'var(--th-polgun-antrasit)', boxShadow: `0 0 32px var(--th-polgun-antrasit)66` }}
								onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-text-muted)'}
								onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)'}
							>
								Teklif Al
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
								Daha Fazla Bilgi
							</button>
						</div>
					</div>

				</div>

			</section>

			{/* ── Neden Polgün Band ── */}
			<section style={{ backgroundColor: 'var(--th-surface)', borderBottom: '1px solid color-mix(in srgb,var(--th-border) 8%,transparent)' }}>
				<div className="py-16 max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
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
			<section className="py-24 lg:py-32 ">
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="text-center mb-20">
						<p className="text-[11px] font-black tracking-[0.3em] uppercase mb-5 flex items-center justify-center gap-3" style={{ color: 'var(--th-polgun-blue)' }}>
							<span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-polgun-blue)' }} />
							Hizmet Sürecimiz
							<span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-polgun-blue)' }} />
						</p>
						<h2 className="font-black leading-tight" style={{ color: 'var(--th-text)', fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
							Başından sonuna<br />her adımda yanınızdayız
						</h2>
					</div>

					<div className="flex flex-col gap-28">
						{STEPS.map((step, i) => (
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
									<p className="leading-relaxed mb-8" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 70%,transparent)' }}>{step.desc}</p>

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
