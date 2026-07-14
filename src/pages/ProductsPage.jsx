import { useState } from 'react'
import heroImage from '../assets/polgun-featured-projects-4.jpeg'
import underwater1 from '../assets/hero/13.MaxeriaBlue.png'
import pirate1 from '../assets/splash/pirateTheme/1001.jpg'
import navatu1 from '../assets/navatu/navatu1.png'
import navatu2 from '../assets/navatu/navatu2.png'
import savana1 from '../assets/savana/savana1.png'
import savana2 from '../assets/savana/savana2.png'

import bigholeImg from '../assets/products/slides/bighole.png'
import bigraftImg from '../assets/products/slides/bigraft.png'
import familyraftImg from '../assets/products/slides/familyraft.png'
import familytornadoImg from '../assets/products/slides/familytornado.png'
import midholeImg from '../assets/products/slides/midhole.png'
import ufoslideImg from '../assets/products/slides/ufoslide.png'
import freefallImg from '../assets/products/slides/freefall.png'
import hydroriverImg from '../assets/products/slides/hydroriver.png'
import rocketsldeImg from '../assets/products/slides/rocketslde.png'
import uphillImg from '../assets/products/slides/uphill.png'
import kamikazeImg from '../assets/products/slides/kamikaze.png'
import slipandflyImg from '../assets/products/slides/slipandfly.png'
import babochkaImg from '../assets/products/slides/babochka.png'
import boomerangoImg from '../assets/products/slides/boomerango.png'
import canyonslideImg from '../assets/products/slides/canyonslide.png'
import crazyconeImg from '../assets/products/slides/crazycone.png'
import droneImg from '../assets/products/slides/drone.png'
import hillslideImg from '../assets/products/slides/hillslide.png'
import hydraslideImg from '../assets/products/slides/hydraslide.png'
import magictrayImg from '../assets/products/slides/magictray.png'
import miniboomerangoImg from '../assets/products/slides/miniboomerango.png'
import spacerocketImg from '../assets/products/slides/spacerocket.png'
import superbowlImg from '../assets/products/slides/superbowl.png'
import spacebowlImg from '../assets/products/slides/spacebowl.png'
import tornadoslideImg from '../assets/products/slides/tornadoslide.png'
import planetaImg from '../assets/products/slides/planeta.png'
import bodyracerImg from '../assets/products/slides/bodyracer.png'
import multislideImg from '../assets/products/slides/multislide.png'
import twisterslideImg from '../assets/products/slides/twisterslide.png'
import racerslideImg from '../assets/products/slides/racerslide.png'
import spiderslideImg from '../assets/products/slides/spiderslide.png'
import aquatubeImg from '../assets/products/slides/aquatube.png'
import blackholeImg from '../assets/products/slides/blackhole.png'
import compactslideImg from '../assets/products/slides/compactslide.png'
import raftingslideImg from '../assets/products/slides/raftingslide.png'
import wideslideImg from '../assets/products/slides/wideslide.png'
import bodyslideImg from '../assets/products/slides/bodyslide.png'

// ── Ürün Verisi ────────────────────────────────────────────
const PRODUCTS = [
	{
		category: 'Su Kaydırakları',
		title: 'AquaRush Pro Series',
		sub: 'Yüksek Hızlı Kapalı Tüp Kaydırak',
		desc: 'Polgün üretim kalitesiyle geliştirilmiş, her yaştan ziyaretçiye heyecan dolu bir deneyim sunan açık ve kapalı kaydırak sistemleri.',
		specs: [
			{ label: 'Uzunluk', val: '120 m' },
			{ label: 'Kapasite', val: '360 kişi/saat' },
			{ label: 'Min. Yaş', val: '10+' },
			{ label: 'Min. Boy', val: '140 cm' },
		],
		img: heroImage,
		imgAlt: 'AquaRush su kaydırağı',
		badge: 'Çok Satılan',
	},
	{
		category: 'Splash Tower',
		title: 'Pirate Theme',
		sub: 'Korsan Temalı Su Kaydırakları',
		desc: 'Polgün\'ün imza teması olan Korsan Tema, çocukların korsanlarla dolu açık denizlerde yelken açmaları ve bu hayal dünyasında eğlenmeleri için tasarlanmıştır.',
		specs: [
			{ label: 'Tema', val: 'Korsan' },
			{ label: 'Aktivite', val: 'Özelleştirilebilir' },
			{ label: 'Yaş Grubu', val: 'Tüm Yaşlar' },
			{ label: 'Kapasite', val: 'Yüksek' },
		],
		img: pirate1,
		imgAlt: 'Pirate Theme Splash Tower',
		badge: 'İmza Tema',
	},
	{
		category: 'Splash Tower',
		title: 'Underwater Theme',
		sub: 'Sualtı Dünyası Temalı Yapılar',
		desc: 'Çocukların sualtı dünyası ile ilgili merakını uyandıran, keşfedilmeyi bekleyen farklı türler ve rengarenk mercanlardan yola çıkılarak tasarlanmış interaktif oyun alanı.',
		specs: [
			{ label: 'Tema', val: 'Sualtı' },
			{ label: 'Aktivite', val: 'Özelleştirilebilir' },
			{ label: 'Yaş Grubu', val: 'Tüm Yaşlar' },
			{ label: 'Kapasite', val: 'Yüksek' },
		],
		img: underwater1,
		imgAlt: 'Underwater Theme Splash Tower',
		badge: null,
	},
	{
		category: 'Ar-Ge Ürünleri',
		title: 'Navatu',
		sub: 'IAAPA Brass Ring Ödüllü Dalga Sistemi',
		desc: 'Navatu, Polgün bünyesindeki Ar-Ge Merkezi\'nde geliştirilen ve IAAPA Expo Orlando\'da Brass Ring ödülüne layık görülen yenilikçi su parkı sistemidir. Doğal dalga deneyimini yeni bir boyuta taşır.',
		specs: [
			{ label: 'Ödül', val: 'IAAPA Brass Ring' },
			{ label: 'Tür', val: 'Dalga Sistemi' },
			{ label: 'Geliştirme', val: 'Ar-Ge Merkezi' },
			{ label: 'Kapasite', val: 'Yüksek' },
		],
		img: navatu1,
		img2: navatu2,
		imgAlt: 'Navatu dalga sistemi',
		badge: 'Ar-Ge',
	},
	{
		category: 'Ar-Ge Ürünleri',
		title: 'Savana',
		sub: 'Çoklu Kayma Yollu Temalı Su Kaydırağı',
		desc: 'Savana, aynı gövdede dört farklı kayma yolunu bir araya getiren, aynı anda sekiz kullanıcının farklı kayma stillerini deneyimleyebildiği yenilikçi bir Ar-Ge projesidir. 2024 yılında tasarımı tescillenmiştir.',
		specs: [
			{ label: 'Kaydırak Yolu', val: '4 Adet' },
			{ label: 'Kapasite', val: '8 Kişi/seans' },
			{ label: 'Tescil', val: '2024' },
			{ label: 'Malzeme', val: 'Kompozit+Çelik' },
		],
		img: savana1,
		img2: savana2,
		imgAlt: 'Savana su kaydırağı',
		badge: 'Ar-Ge',
	},
	{
		category: 'Splash Zone',
		title: 'KidsSplash Universe',
		sub: 'Tema Entegreli Çocuk Su Oyun Alanı',
		desc: 'Çocuklar için güvenli, eğlenceli ve interaktif su oyun alanları. Renkli tasarımları ve farklı su aktiviteleriyle ailecek eğlence sunar.',
		specs: [
			{ label: 'Alan', val: '650 m²' },
			{ label: 'Yaş Grubu', val: '2–12' },
			{ label: 'Aktivite', val: '18 Adet' },
			{ label: 'Su Tük.', val: 'Düşük' },
		],
		img: heroImage,
		imgAlt: 'KidsSplash çocuk alanı',
		badge: null,
	},

{
    category: 'Family Slides',
    title: 'BIG HOLE',
    sub: '',
    desc: `Big Hole is a large-scale enclosed family raft slide designed for shared ride experiences. Its spacious tube creates an immersive sense of speed and motion, transforming the classic closed-slide concept into a fun, social, and memorable attraction for families and groups.`,
    specs: [],
    img: bigholeImg,
    imgAlt: 'BIG HOLE',
    badge: null,
  },
  {
    category: 'Family Slides',
    title: 'BIG RAFT',
    sub: '',
    desc: `Big Raft offers a spacious and comfortable family rafting experience designed for shared rides. Its wide slide form allows families and friends to enjoy the flow, speed, and excitement together, creating a fun and social attraction with high family appeal.`,
    specs: [],
    img: bigraftImg,
    imgAlt: 'BIG RAFT',
    badge: null,
  },
  {
    category: 'Family Slides',
    title: 'FAMILY RAFT',
    sub: '',
    desc: `Family Slide is a multi-person raft attraction designed for families and groups to enjoy together. Featuring wide curves, smooth transitions, and rafts for up to four riders, it delivers interactive fun, dynamic movement, and high-capacity entertainment for any water park.`,
    specs: [],
    img: familyraftImg,
    imgAlt: 'FAMILY RAFT',
    badge: null,
  },
  {
    category: 'Family Slides',
    title: 'FAMILY TORNADO',
    sub: '',
    desc: `Family Tornado brings the iconic funnel experience to a larger scale, allowing bigger groups to share the excitement together. Featuring a large funnel element and powerful oscillating motion, it delivers thrilling acceleration, moments of weightlessness, and dynamic transitions, making it a high-capacity attraction with strong visual appeal and replay value.`,
    specs: [],
    img: familytornadoImg,
    imgAlt: 'FAMILY TORNADO',
    badge: null,
  },
  {
    category: 'Family Slides',
    title: 'MID HOLE',
    sub: '',
    desc: `Mid Hole is an enclosed family slide that offers a spacious and immersive ride experience. Its closed tube design creates anticipation and excitement throughout the journey, delivering a fun and comfortable shared adventure for families and groups.`,
    specs: [],
    img: midholeImg,
    imgAlt: 'MID HOLE',
    badge: null,
  },
  {
    category: 'Family Slides',
    title: 'UFO SLIDE',
    sub: '',
    desc: `UFO Slide is a family-friendly raft slide inspired by its distinctive elliptical form. Its enclosed tube structure provides a smooth and comfortable ride experience for up to four riders, combining shared fun with high entertainment value for water parks.`,
    specs: [],
    img: ufoslideImg,
    imgAlt: 'UFO SLIDE',
    badge: null,
  },
  {
    category: 'Fast Slide',
    title: 'FREEFALL',
    sub: '',
    desc: `Freefall is a high-adrenaline water slide designed to deliver the intense sensation of free fall. Its near-vertical drop and uninterrupted high-speed course create a short but powerful ride experience, making it a must-have attraction for thrill seekers.`,
    specs: [],
    img: freefallImg,
    imgAlt: 'FREEFALL',
    badge: null,
  },
  {
    category: 'Fast Slide',
    title: 'HYDRO RIVER',
    sub: '',
    desc: `Hydro River is a next-generation raft slide powered by advanced water jet technology. By using water jets to maintain continuous movement, it delivers a smooth, dynamic, and uninterrupted ride experience, combining innovation, comfort, and entertainment in a unique attraction.`,
    specs: [],
    img: hydroriverImg,
    imgAlt: 'HYDRO RIVER',
    badge: null,
  },
  {
    category: 'Fast Slide',
    title: 'ROCKET SLIDE',
    sub: '',
    desc: `Rocket Slide is a high-adrenaline attraction that starts with a trapdoor launch, sending riders into a gravity-driven descent. The suspense of the countdown-free drop, combined with free-fall or looping options, creates one of the most thrilling experiences in the high-speed slide category.`,
    specs: [],
    img: rocketsldeImg,
    imgAlt: 'ROCKET SLIDE',
    badge: null,
  },
  {
    category: 'Fast Slide',
    title: 'UPHILL',
    sub: '',
    desc: `Uphill Slide delivers a dynamic ride experience with a series of descents and climbs along its wavy course. The alternating acceleration and deceleration create a smooth, rhythmic flow, providing long-lasting excitement and high entertainment value for water park guests.`,
    specs: [],
    img: uphillImg,
    imgAlt: 'UPHILL',
    badge: null,
  },
  {
    category: 'Fast Slide',
    title: 'KAMIKAZE',
    sub: '',
    desc: `Kamikaze is a high-speed water slide that delivers intense adrenaline through its stepped sliding surface. Sudden acceleration and deceleration effects enhance the sensation of speed, while its smooth ride experience makes it a popular attraction for thrill-seekers in water parks.`,
    specs: [],
    img: kamikazeImg,
    imgAlt: 'KAMIKAZE',
    badge: null,
  },
  {
    category: 'Fast Slide',
    title: 'SLIP AND FLY',
    sub: '',
    desc: `Slip & Fly is a unique water slide pioneered by Polgün, designed to deliver extreme jumps and the sensation of flying above the water. Combining high speeds, strong visual impact, and intense thrills, it creates a standout attraction that takes excitement to the next level.`,
    specs: [],
    img: slipandflyImg,
    imgAlt: 'SLIP AND FLY',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'BABOCHKA',
    sub: '',
    desc: `Babochka combines butterfly-inspired geometry with a family-friendly raft experience. Wide banking transitions and controlled acceleration create a smooth, dynamic ride, while its distinctive symmetrical form provides strong visual appeal and customization opportunities.`,
    specs: [],
    img: babochkaImg,
    imgAlt: 'BABOCHKA',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'BOOMERANGO',
    sub: '',
    desc: `Boomerango delivers a high-thrill raft experience inspired by the returning motion of a boomerang. Riders descend at high speed, climb a near-vertical wall, and experience moments of weightlessness before sweeping back into the slide course. Its dynamic motion and iconic design make it a standout attraction for adrenaline-focused water parks.`,
    specs: [],
    img: boomerangoImg,
    imgAlt: 'BOOMERANGO',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'CANYON SLIDE',
    sub: '',
    desc: `Canyon offers an exciting raft slide experience with a compact, space-efficient design. Riders move through a dynamic path that creates a strong sensation of rise, sweep, and return, delivering a memorable tube ride in a smaller footprint.`,
    specs: [],
    img: canyonslideImg,
    imgAlt: 'CANYON SLIDE',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'CRAZY CONE',
    sub: '',
    desc: `Crazy Cone delivers a playful and energetic ride experience through its distinctive conical design and smooth oscillating motion. Riders transition into the wide cone element, where changing directions create a fun sense of excitement and unpredictability. Its striking appearance and versatile layout make it a standout addition to family and youth-focused water attractions.`,
    specs: [],
    img: crazyconeImg,
    imgAlt: 'CRAZY CONE',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'DRONE',
    sub: '',
    desc: `Drone is a visually striking slide module that enhances ride experiences with a sudden expansion effect and immersive spatial sensation. The enlarged dome section creates a feeling of openness before riders continue along the slide path, adding visual impact, lighting opportunities, and excitement to a wide range of slide systems.`,
    specs: [],
    img: droneImg,
    imgAlt: 'DRONE',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'HILL SLIDE',
    sub: '',
    desc: `Hill Slide is a high-adrenaline raft slide featuring a steep descent followed by a dramatic uphill climb, creating a thrilling sense of speed and excitement. With its dynamic ride path, strong replay value, and customizable colors and patterns, it offers a distinctive addition to any water park.`,
    specs: [],
    img: hillslideImg,
    imgAlt: 'HILL SLIDE',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'HYDRA SLIDE',
    sub: '',
    desc: `Hydra combines high-capacity performance with a bold architectural design. Its iconic multi-head structure delivers synchronized high-speed descents that enhance competition and guest interaction, transforming a traditional mat racer into a landmark water park attraction.`,
    specs: [],
    img: hydraslideImg,
    imgAlt: 'HYDRA SLIDE',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'MAGIC TRAY',
    sub: '',
    desc: `Magic Tray delivers a dynamic raft experience with smooth banking movements, continuous directional changes, and controlled acceleration. Its saucer-inspired design creates a flowing ride rhythm, offering a balanced mix of family-friendly excitement, comfort, and visual appeal.`,
    specs: [],
    img: magictrayImg,
    imgAlt: 'MAGIC TRAY',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'MINI BOOMERANGO',
    sub: '',
    desc: `Mini Boomerango brings the signature back-and-forth thrill of a boomerang slide into a compact format. Its reduced height and footprint make it ideal for space-constrained projects, Splash Towers, and compact water parks, delivering a big ride experience in a smaller, more flexible design.`,
    specs: [],
    img: miniboomerangoImg,
    imgAlt: 'MINI BOOMERANGO',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'SPACE ROCKET',
    sub: '',
    desc: `Space Rocket combines futuristic design with high-speed motion for an exciting themed adventure. Riders experience rapid transitions through its signature rocket-inspired feature, creating a memorable ride with strong visual impact.`,
    specs: [],
    img: spacerocketImg,
    imgAlt: 'SPACE ROCKET',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'SUPER BOWL',
    sub: '',
    desc: `Super Bowl reimagines the classic bowl-slide experience with extended spinning motion and dynamic acceleration. Riders complete multiple revolutions inside the oversized bowl before entering the exit section, creating a thrilling and visually engaging ride experience with strong operational flexibility.`,
    specs: [],
    img: superbowlImg,
    imgAlt: 'SUPER BOWL',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'SPACE BOWL',
    sub: '',
    desc: `Space Bowl is a compact, high-impact attraction combining speed, rotation, and visual excitement. Riders enter through a high-velocity enclosed flume, complete multiple revolutions inside the bowl, and finish with a thrilling final drop. Its iconic shape, strong spectator appeal, and efficient footprint make it a standout addition to any water park.`,
    specs: [],
    img: spacebowlImg,
    imgAlt: 'SPACE BOWL',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'TORNADO SLIDE',
    sub: '',
    desc: `Tornado delivers an intense raft experience through its large funnel element and powerful oscillating motion. Riders climb high along the funnel walls before sweeping through dynamic transitions, creating the sensation of a natural vortex. Its striking design and high-thrill experience make it a standout signature attraction.`,
    specs: [],
    img: tornadoslideImg,
    imgAlt: 'TORNADO SLIDE',
    badge: null,
  },
  {
    category: 'Jumbo Slides',
    title: 'PLANETA',
    sub: '',
    desc: `With its rounded planetary form and immersive ride profile, Planeta creates a visually iconic attraction that blends family-friendly excitement with dynamic motion. Riders experience smooth transitions, sweeping turns, and accelerating spirals that simulate the feeling of orbiting through space. The attraction’s sculptural appearance enhances the visual identity of the park while delivering a balanced combination of entertainment, movement and repeat ride appeal for guests of all ages.`,
    specs: [],
    img: planetaImg,
    imgAlt: 'PLANETA',
    badge: null,
  },
  {
    category: 'Racer Slides',
    title: 'BODY RACER',
    sub: '',
    desc: `Body Racer is a competitive multi-lane body slide designed for direct rider interaction. Available in open or enclosed configurations, it keeps participants visually connected throughout the race, creating an exciting, fast-paced, and highly engaging attraction for modern water parks.`,
    specs: [],
    img: bodyracerImg,
    imgAlt: 'BODY RACER',
    badge: null,
  },
  {
    category: 'Racer Slides',
    title: 'MULTI SLIDE',
    sub: '',
    desc: `Multi Slide delivers the excitement of side-by-side racing with multiple lane options and a thrilling free-fall start. Combining high speeds, competitive fun, and excellent rider capacity, it creates a dynamic and social attraction for water parks.`,
    specs: [],
    img: multislideImg,
    imgAlt: 'MULTI SLIDE',
    badge: null,
  },
  {
    category: 'Racer Slides',
    title: 'TWISTER SLIDE',
    sub: '',
    desc: `Twister Slide is a competition-oriented water slide featuring 2 or 3 spiraling tubes that create a dynamic racing experience. Riders twist through enclosed sections as they compete side by side, with the winner remaining unknown until the finish, adding excitement, suspense, and high entertainment value.`,
    specs: [],
    img: twisterslideImg,
    imgAlt: 'TWISTER SLIDE',
    badge: null,
  },
  {
    category: 'Racer Slides',
    title: 'RACER SLIDE',
    sub: '',
    desc: `Racer Slide is a two-lane racing attraction that combines speed, competition, and social interaction. Riders race side by side on synchronized slide paths, creating a fun and repeatable experience, while customizable designs make it a vibrant addition to any water park.`,
    specs: [],
    img: racerslideImg,
    imgAlt: 'RACER SLIDE',
    badge: null,
  },
  {
    category: 'Racer Slides',
    title: 'SPIDER SLIDE',
    sub: '',
    desc: `Spider Slide is a winding multi-lane water slide that delivers a dynamic and competitive ride experience through tight loops and sharp turns. Its intertwined tunnel layout allows up to four riders to race simultaneously, creating an exciting and interactive attraction with strong visual impact.`,
    specs: [],
    img: spiderslideImg,
    imgAlt: 'SPIDER SLIDE',
    badge: null,
  },
  {
    category: 'Classic Slides',
    title: 'AQUATUBE',
    sub: '',
    desc: `Aquatube is a classic body slide that combines speed with an immersive enclosed ride experience. Available with lighting effects and transparent or translucent sections, it delivers a visually engaging adventure while remaining one of the most popular and timeless attractions in water parks.`,
    specs: [],
    img: aquatubeImg,
    imgAlt: 'AQUATUBE',
    badge: null,
  },
  {
    category: 'Classic Slides',
    title: 'BLACK HOLE',
    sub: '',
    desc: `Black Hole is a classic raft slide enhanced with striking light effects that transform the ride into a visually immersive adventure. Combining speed, atmosphere, and entertainment, it remains one of the most popular and timeless attractions in water parks.`,
    specs: [],
    img: blackholeImg,
    imgAlt: 'BLACK HOLE',
    badge: null,
  },
  {
    category: 'Classic Slides',
    title: 'COMPACT SLIDE',
    sub: '',
    desc: `Compact Slide is a practical water slide solution designed for limited spaces, offering easy installation and maintenance. Suitable for Splash Towers, water parks, and standalone applications, it can be customized in various sizes and colors to provide a flexible and efficient attraction.`,
    specs: [],
    img: compactslideImg,
    imgAlt: 'COMPACT SLIDE',
    badge: null,
  },
  {
    category: 'Classic Slides',
    title: 'RAFTING SLIDE',
    sub: '',
    desc: `Inspired by the world’s most successful family raft attractions, Rafting Slide delivers a high-capacity group ride experience built around speed, sweeping wall transitions, and continuous directional movement. Riders navigate through dynamic drops, wide-radius turns, and flowing slide sections that create a balanced combination of excitement and comfort for both families and thrill-seekers.`,
    specs: [],
    img: raftingslideImg,
    imgAlt: 'RAFTING SLIDE',
    badge: null,
  },
  {
    category: 'Classic Slides',
    title: 'WIDE SLIDE',
    sub: '',
    desc: `Wide Slide is a fun and social water slide that allows up to three riders to slide together. Its wide sliding surface creates an enjoyable shared experience, while customizable colors, patterns, and dimensions make it a flexible and visually appealing attraction for any water park.`,
    specs: [],
    img: wideslideImg,
    imgAlt: 'WIDE SLIDE',
    badge: null,
  },
  {
    category: 'Classic Slides',
    title: 'BODY SLIDE',
    sub: '',
    desc: `Body Slide is a classic water slide that offers a smooth and enjoyable ride experience. Its versatile design allows easy integration as a standalone attraction or part of larger slide complexes, making it a timeless and essential water park attraction.`,
    specs: [],
    img: bodyslideImg,
    imgAlt: 'BODY SLIDE',
    badge: null,
  },
]

const CATEGORIES = [
	'Tümü',
	'Su Kaydırakları',
	'Splash Tower',
	'Ar-Ge Ürünleri',
	'Splash Zone',
	'Family Slides',
	'Fast Slide',
	'Jumbo Slides',
	'Racer Slides',
	'Classic Slides',
]

// ── Glass Kart bileşeni ────────────────────────────────────
function GlassTag({ children }) {
	return (
		<span
			className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
			style={{
				background: 'rgba(255,255,255,0.18)',
				backdropFilter: 'blur(8px)',
				border: '1px solid rgba(255,255,255,0.2)',
				color: 'rgba(255,255,255,0.9)',
			}}
		>
			{children}
		</span>
	)
}

export default function ProductsPage({ setActivePage}) {
	const [activeFilter, setActiveFilter] = useState('Tümü')
		
	// Badge stilleri
	const BADGE_STYLE = {
		'Çok Satılan': { backgroundColor: 'var(--th-primary)', color: '#fff' },
		'Yeni': { backgroundColor: 'var(--th-polgun-blue)', color: '#fff' },
		'Premium': { backgroundColor: 'var(--th-polgun-antrasit)', color: '#fff' },
	}

	const filtered =
		activeFilter === 'Tümü'
			? PRODUCTS
			: PRODUCTS.filter((p) => p.category === activeFilter)

	return (
		<main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
			{/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
				{/* Content */}
        <div className="max-w-7xl max-w-[var(--layout-max)]  mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
						
						<div>
							<p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                Ürün Kataloğu
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
								Çözümlerimiz
							</h1>
							</div>
            <p className="text-white/50 text-lg leading-relaxed">
								Yenilikçi teknolojiler, estetik tasarımlar ve uluslararası standartlarda üretim ile geliştirdiğimiz su parkı sistemlerimiz. Her projeye değer katan, güvenli ve sürdürülebilir ürünlerimizle tanışın.
							</p>
							<div className="flex gap-4 flex-wrap">
								<button
									onClick={() => setActivePage('contact')}
									className="px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
									style={{ backgroundColor: 'var(--th-polgun-antrasit)', boxShadow: `0 0 32px var(--th-polgun-antrasit)66` }}
									onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-text-muted)'}
									onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)'}
								>
									Ürün Talebi
								</button>
								<button
									onClick={() => setActivePage('contact')}
									className="px-8 py-4 font-bold rounded-full transition-all duration-300 border-2"
									style={{ color: 'var(--th-polgun-antrasit)', borderColor: 'var(--th-polgun-antrasit)', backgroundColor: `var(--th-surface)0D`, backdropFilter: 'blur(8px)' }}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = `var(--th-polgun-antrasit)26`;
										e.currentTarget.style.transform = 'translateY(-4px)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = `var(--th-surface)0D`;
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>
									Katalog İndir
								</button>
							</div>
						</div>
					</div>
				
			</section>

			{/* ── Filtre Şeridi ── */}
			<div
				className="top-[72px] z-30 border-b"
				style={{
					backgroundColor:
						'color-mix(in srgb,var(--th-bg) 95%,transparent)',
					backdropFilter: 'blur(12px)',
					borderColor:
						'color-mix(in srgb,var(--th-border) 10%,transparent)',
				}}
			>
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
						{CATEGORIES.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveFilter(cat)}
								className="shrink-0 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
								style={
									activeFilter === cat
										? {
											backgroundColor: 'var(--th-primary)',
											color: '#fff',
											boxShadow:
												`0 4px 16px var(--th-primary)4D`,
									  }
									: { color: 'var(--th-text-muted)' }
							}
							onMouseEnter={(e) => {
								if (activeFilter !== cat)
									e.currentTarget.style.backgroundColor =
										`var(--th-primary-light)`
								}}
								onMouseLeave={(e) => {
									if (activeFilter !== cat)
										e.currentTarget.style.backgroundColor = 'transparent'
								}}
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* ── Ürün Grid ── */}
			<section className="py-16 lg:py-24">
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{filtered.map((product, i) => (
							<article
								key={i}
								className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
								style={{
									backgroundColor: 'var(--th-surface)',
									border:
										'1px solid color-mix(in srgb,var(--th-border) 8%,transparent)',
									boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.boxShadow =
										'0 20px 60px rgba(0,0,0,0.1)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.boxShadow =
										'0 2px 16px rgba(0,0,0,0.04)')
								}
							>
								{/* Gerçek Görsel */}
								<div className="relative h-56 overflow-hidden">
									<img
										src={product.img}
										alt={product.imgAlt}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									{/* Gradient overlay */}
									<div
										className="absolute inset-0"
										style={{
											background:
												'linear-gradient(to top,rgba(0,0,0,0.3) 0%,transparent 60%)',
										}}
									/>
									{/* Badge'ler */}
									<div className="absolute top-4 left-4 flex gap-2">
										{product.badge && (
											<span
												className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full"
												style={BADGE_STYLE[product.badge]}
											>
												{product.badge}
											</span>
										)}
										<GlassTag>{product.category}</GlassTag>
									</div>
								</div>

								{/* İçerik */}
								<div className="p-8">
									<p
										className="text-[10px] font-black tracking-[0.2em] uppercase mb-2"
										style={{ color: 'var(--th-polgun-blue)' }}
									>
										{product.sub}
									</p>
									<h2
										className="text-xl font-black mb-3 transition-colors"
										style={{ color: 'var(--th-text)' }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = 'var(--th-polgun-blue)')
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = 'var(--th-text)')
										}
									>
										{product.title}
									</h2>
									<p
										className="text-sm leading-relaxed mb-6"
										style={{
											color:
												'color-mix(in srgb,var(--th-text-muted) 70%,transparent)',
										}}
									>
										{product.desc}
									</p>

									{/* Teknik Özellikler */}
									<div
										className="grid grid-cols-4 gap-px rounded-xl overflow-hidden mb-6"
										style={{
											backgroundColor:
												'color-mix(in srgb,var(--th-border) 8%,transparent)',
										}}
									>
										{product.specs.map((spec) => (
											<div
												key={spec.label}
												className="px-3 py-3"
												style={{ backgroundColor: 'var(--th-bg)' }}
											>
												<div
													className="text-[10px] font-semibold uppercase tracking-wider mb-1"
													style={{
														color:
															'color-mix(in srgb,var(--th-text-muted) 60%,transparent)',
													}}
												>
													{spec.label}
												</div>
												<div
													className="text-xs font-black"
													style={{ color: 'var(--th-text)' }}
												>
													{spec.val}
												</div>
											</div>
										))}
									</div>

									{/* CTA */}
									<div className="flex gap-3">
										<button
											onClick={() => setActivePage('contact')}
											className="flex-1 py-3 text-white text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
										style={{ backgroundColor: 'var(--th-polgun-blue)', boxShadow: `0 0 32px var(--th-polgun-blue)66` }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.backgroundColor =
												'var(--th-primary)')
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.backgroundColor =
												'var(--th-polgun-blue)')
											}
										>
											Teklif Al
										</button>
										<button
											className="px-5 py-3 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
											style={{
												border:
												`1px solid var(--th-polgun-blue)`,
											color: 'var(--th-polgun-blue)',
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.borderColor = 'var(--th-primary)';
											e.currentTarget.style.color = 'var(--th-primary)'
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.borderColor =
												`var(--th-polgun-blue)`
											e.currentTarget.style.color = 'var(--th-polgun-blue)'
											}}
										>
											Detaylar
										</button>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ── Özel Proje CTA ── */}
			<section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="relative rounded-3xl overflow-hidden px-12 py-20" style={{ background: `linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)` }}>
						<div className="absolute inset-0 opacity-10">
							<svg
								viewBox="0 0 1400 300"
								className="w-full h-full"
								preserveAspectRatio="xMidYMid slice"
							>
								<circle cx="200" cy="150" r="250" fill="white" />
								<circle cx="1200" cy="150" r="200" fill="white" />
							</svg>
						</div>
						<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
							<div>
								<p
									className="text-[11px] font-black tracking-[0.3em] uppercase mb-3 text-white/50"
								>
									Özel Proje
								</p>
								<h2 className="text-3xl font-black text-white">
									Aradığınızı bulamadınız mı?
								</h2>
								<p className="text-white/40 mt-3 max-w-lg">
									Hayalinizdeki su parkını gerçeğe dönüştürmek için geniş ürün yelpazemizi inceleyin ve projenize en uygun çözümleri birlikte tasarlayalım.
								</p>
							</div>
							<button
								onClick={() => setActivePage('contact')}
							className="shrink-0 px-10 py-4 text-sm font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
							style={{
								backgroundColor: '#FFFFFF',
								color: 'var(--th-primary)',
								boxShadow: `0 0 40px var(--th-primary)33`,
								}}
								onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
								onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
							>
								Özel Çözüm Talep Et
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
