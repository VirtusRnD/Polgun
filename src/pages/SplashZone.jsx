import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ── Static Image Imports ──
import img_Angel_Fish from '../assets/splashZone/Angel Fish.avif';
import img_Angelfish_Slide from '../assets/splashZone/Angelfish Slide.avif';
import img_Anicrab from '../assets/splashZone/Anicrab.avif';
import img_Anifish from '../assets/splashZone/Anifish.avif';
import img_Aniturtle from '../assets/splashZone/Aniturtle.avif';
import img_Arc_De_Eau from '../assets/splashZone/Arc De Eau.avif';
import img_Ballons from '../assets/splashZone/Ballons.avif';
import img_Blob from '../assets/splashZone/Blob.avif';
import img_Clown_Shower from '../assets/splashZone/Clown Shower.avif';
import img_Clown_s_Nose from '../assets/splashZone/Clown’s Nose.avif';
import img_Cocopalm_Wheel from '../assets/splashZone/Cocopalm Wheel.avif';
import img_Cocunut_Bucket from '../assets/splashZone/Cocunut Bucket.avif';
import img_Croco from '../assets/splashZone/Croco.avif';
import img_Cute_Octopus from '../assets/splashZone/Cute Octopus.avif';
import img_Dino_Shower from '../assets/splashZone/Dino Shower.avif';
import img_Dolphin_Fountain from '../assets/splashZone/Dolphin Fountain.avif';
import img_Dolphine_Sprayner from '../assets/splashZone/Dolphine Sprayner.avif';
import img_Double_Dolphin_Bucket from '../assets/splashZone/Double Dolphin Bucket.avif';
import img_Elephant_Saj from '../assets/splashZone/Elephant Saj.avif';
import img_Elephant_Slide from '../assets/splashZone/Elephant Slide.avif';
import img_Firaffe_Saj from '../assets/splashZone/Firaffe Saj.avif';
import img_Flamingo_Shower from '../assets/splashZone/Flamingo Shower.avif';
import img_Frog_Arc from '../assets/splashZone/Frog Arc.avif';
import img_Frog from '../assets/splashZone/Frog.avif';
import img_Gustav_The_Turtle from '../assets/splashZone/Gustav The Turtle.avif';
import img_Half_Barrel from '../assets/splashZone/Half Barrel.avif';
import img_Hippo from '../assets/splashZone/Hippo.avif';
import img_Ivory from '../assets/splashZone/Ivory.avif';
import img_Laying_Snake from '../assets/splashZone/Laying Snake.avif';
import img_Leafy from '../assets/splashZone/Leafy.avif';
import img_Mini_Rainbow_Slide from '../assets/splashZone/Mini Rainbow Slide.avif';
import img_Minilay from '../assets/splashZone/Minilay.avif';
import img_Mokn_Seal_Fountain from '../assets/splashZone/Mokn Seal Fountain.avif';
import img_Mushroom_Tree from '../assets/splashZone/Mushroom Tree.avif';
import img_Mushroom_Waterfall from '../assets/splashZone/Mushroom Waterfall.avif';
import img_Neley_The_Elephant from '../assets/splashZone/Neley The Elephant.avif';
import img_Octobus_Mini_Bucket from '../assets/splashZone/Octobus Mini Bucket.avif';
import img_Octopus_Slide from '../assets/splashZone/Octopus Slide.avif';
import img_Palm_Water_Wheel from '../assets/splashZone/Palm Water Wheel.avif';
import img_Palm from '../assets/splashZone/Palm.avif';
import img_Paparots_Waterfall from '../assets/splashZone/Paparots Waterfall.avif';
import img_Sea_Serpent from '../assets/splashZone/Sea Serpent.avif';
import img_Shrimp_Fountain from '../assets/splashZone/Shrimp Fountain.avif';
import img_Small_Octubus_Slide from '../assets/splashZone/Small Octubus Slide.avif';
import img_Small_Pirate_Ship from '../assets/splashZone/Small Pirate Ship.avif';
import img_Snail from '../assets/splashZone/Snail.avif';
import img_Snake_Slide from '../assets/splashZone/Snake Slide.avif';
import img_The_Bamboo from '../assets/splashZone/The Bamboo.avif';
import img_The_Bucket from '../assets/splashZone/The Bucket.avif';
import img_The_Butterfly from '../assets/splashZone/The Butterfly.avif';
import img_The_Fish from '../assets/splashZone/The Fish.avif';
import img_The_Frog_Water_Wheel from '../assets/splashZone/The Frog Water Wheel.avif';
import img_The_Rabbit_Bar from '../assets/splashZone/The Rabbit Bar.avif';
import img_The_Rainbow_Arc from '../assets/splashZone/The Rainbow Arc.avif';
import img_Triple_Honey_Comb from '../assets/splashZone/Triple Honey Comb.avif';
import img_Triple_Paparots from '../assets/splashZone/Triple Paparots.avif';
import img_Triple_Water_While from '../assets/splashZone/Triple Water While.avif';
import img_Tucan_Mini_Buckets from '../assets/splashZone/Tucan Mini Buckets.avif';
import img_Water_Cannon from '../assets/splashZone/Water Cannon.avif';
import img_Water_Jet from '../assets/splashZone/Water Jet.avif';
import img_Water_Umbrella from '../assets/splashZone/Water Umbrella.avif';
import img_Watermelons_Bucket from '../assets/splashZone/Watermelons Bucket.avif';
import img_Watermeon_M_n_Static_Buckets from '../assets/splashZone/Watermeon Mını Static Buckets.avif';
import img_Whale_Tail from '../assets/splashZone/Whale Tail.avif';

// ── Images Array ──
const images = [
    { name: 'Angel Fish', src: img_Angel_Fish },
    { name: 'Angelfish Slide', src: img_Angelfish_Slide },
    { name: 'Anicrab', src: img_Anicrab },
    { name: 'Anifish', src: img_Anifish },
    { name: 'Aniturtle', src: img_Aniturtle },
    { name: 'Arc De Eau', src: img_Arc_De_Eau },
    { name: 'Ballons', src: img_Ballons },
    { name: 'Blob', src: img_Blob },
    { name: 'Clown Shower', src: img_Clown_Shower },
    { name: 'Clown’s Nose', src: img_Clown_s_Nose },
    { name: 'Cocopalm Wheel', src: img_Cocopalm_Wheel },
    { name: 'Cocunut Bucket', src: img_Cocunut_Bucket },
    { name: 'Croco', src: img_Croco },
    { name: 'Cute Octopus', src: img_Cute_Octopus },
    { name: 'Dino Shower', src: img_Dino_Shower },
    { name: 'Dolphin Fountain', src: img_Dolphin_Fountain },
    { name: 'Dolphine Sprayner', src: img_Dolphine_Sprayner },
    { name: 'Double Dolphin Bucket', src: img_Double_Dolphin_Bucket },
    { name: 'Elephant Saj', src: img_Elephant_Saj },
    { name: 'Elephant Slide', src: img_Elephant_Slide },
    { name: 'Firaffe Saj', src: img_Firaffe_Saj },
    { name: 'Flamingo Shower', src: img_Flamingo_Shower },
    { name: 'Frog Arc', src: img_Frog_Arc },
    { name: 'Frog', src: img_Frog },
    { name: 'Gustav The Turtle', src: img_Gustav_The_Turtle },
    { name: 'Half Barrel', src: img_Half_Barrel },
    { name: 'Hippo', src: img_Hippo },
    { name: 'Ivory', src: img_Ivory },
    { name: 'Laying Snake', src: img_Laying_Snake },
    { name: 'Leafy', src: img_Leafy },
    { name: 'Mini Rainbow Slide', src: img_Mini_Rainbow_Slide },
    { name: 'Minilay', src: img_Minilay },
    { name: 'Mokn Seal Fountain', src: img_Mokn_Seal_Fountain },
    { name: 'Mushroom Tree', src: img_Mushroom_Tree },
    { name: 'Mushroom Waterfall', src: img_Mushroom_Waterfall },
    { name: 'Neley The Elephant', src: img_Neley_The_Elephant },
    { name: 'Octobus Mini Bucket', src: img_Octobus_Mini_Bucket },
    { name: 'Octopus Slide', src: img_Octopus_Slide },
    { name: 'Palm Water Wheel', src: img_Palm_Water_Wheel },
    { name: 'Palm', src: img_Palm },
    { name: 'Paparots Waterfall', src: img_Paparots_Waterfall },
    { name: 'Sea Serpent', src: img_Sea_Serpent },
    { name: 'Shrimp Fountain', src: img_Shrimp_Fountain },
    { name: 'Small Octubus Slide', src: img_Small_Octubus_Slide },
    { name: 'Small Pirate Ship', src: img_Small_Pirate_Ship },
    { name: 'Snail', src: img_Snail },
    { name: 'Snake Slide', src: img_Snake_Slide },
    { name: 'The Bamboo', src: img_The_Bamboo },
    { name: 'The Bucket', src: img_The_Bucket },
    { name: 'The Butterfly', src: img_The_Butterfly },
    { name: 'The Fish', src: img_The_Fish },
    { name: 'The Frog Water Wheel', src: img_The_Frog_Water_Wheel },
    { name: 'The Rabbit Bar', src: img_The_Rabbit_Bar },
    { name: 'The Rainbow Arc', src: img_The_Rainbow_Arc },
    { name: 'Triple Honey Comb', src: img_Triple_Honey_Comb },
    { name: 'Triple Paparots', src: img_Triple_Paparots },
    { name: 'Triple Water While', src: img_Triple_Water_While },
    { name: 'Tucan Mini Buckets', src: img_Tucan_Mini_Buckets },
    { name: 'Water Cannon', src: img_Water_Cannon },
    { name: 'Water Jet', src: img_Water_Jet },
    { name: 'Water Umbrella', src: img_Water_Umbrella },
    { name: 'Watermelons Bucket', src: img_Watermelons_Bucket },
    { name: 'Watermeon Mını Static Buckets', src: img_Watermeon_M_n_Static_Buckets },
    { name: 'Whale Tail', src: img_Whale_Tail }
];

const SplashZone = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

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
                                {t('products.zone.title', { defaultValue: 'Splash Zone' })}
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
                                    Splash Zone
                                </span>
                            </h1>
                        </div>
                        <p className="text-white/70 text-lg leading-relaxed">
                            {t('splashzone.desc')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-8 sm:my-14 lg:my-20 px-3 sm:px-6 lg:px-10 max-w-[var(--layout-max)] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                    {images.map((image, index) => (
                        <div 
                            className="gallery-item group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white" 
                            key={index}
                        >
                            <img 
                                src={image.src} 
                                alt={image.name} 
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            <div className="glass-effect absolute bottom-0 inset-x-0 p-2.5 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
                                <p 
                                    className="text-xs sm:text-sm font-bold text-gray-900 truncate w-full text-center sm:text-left" 
                                    title={image.name}
                                >
                                    {image.name}
                                </p>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="w-full sm:w-auto px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm font-bold text-white rounded-full transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer shrink-0"
                                    style={{ backgroundColor: 'var(--th-polgun-blue)', boxShadow: `0 0 20px var(--th-polgun-blue)44` }}
                                    onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                        'var(--th-primary)')
                                    }
                                    onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                        'var(--th-polgun-blue)')
                                    }
                                >
                                    {t('common.quote')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default SplashZone;
