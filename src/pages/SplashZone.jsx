import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
const images = [

    "Angel Fish.avif",
    "Angelfish Slide.avif",
    "Anicrab.avif",
    "Anifish.avif",
    "Aniturtle.avif",
    "Arc De Eau.avif",
    "Ballons.avif",
    "Blob.avif",
    "Clown Shower.avif",
    "Clown’s Nose.avif",
    "Cocopalm Wheel.avif",
    "Cocunut Bucket.avif",
    "Croco.avif",
    "Cute Octopus.avif",
    "Dino Shower.avif",
    "Dolphin Fountain.avif",
    "Dolphine Sprayner.avif",
    "Double Dolphin Bucket.avif",
    "Elephant Saj.avif",
    "Elephant Slide.avif",
    "Firaffe Saj.avif",
    "Flamingo Shower.avif",
    "Frog Arc.avif",
    "Frog.avif",
    "Gustav The Turtle.avif",
    "Half Barrel.avif",
    "Hippo.avif",
    "Ivory.avif",
    "Laying Snake.avif",
    "Leafy.avif",
    "Mini Rainbow Slide.avif",
    "Minilay.avif",
    "Mokn Seal Fountain.avif",
    "Mushroom Tree.avif",
    "Mushroom Waterfall.avif",
    "Neley The Elephant.avif",
    "Octobus Mini Bucket.avif",
    "Octopus Slide.avif",
    "Palm Water Wheel.avif",
    "Palm.avif",
    "Paparots Waterfall.avif",
    "Sea Serpent.avif",
    "Shrimp Fountain.avif",
    "Small Octubus Slide.avif",
    "Small Pirate Ship.avif",
    "Snail.avif",
    "Snake Slide.avif",
    "The Bamboo.avif",
    "The Bucket.avif",
    "The Butterfly.avif",
    "The Fish.avif",
    "The Frog Water Wheel.avif",
    "The Rabbit Bar.avif",
    "The Rainbow Arc.avif",
    "Triple Honey Comb.avif",
    "Triple Paparots.avif",
    "Triple Water While.avif",
    "Tucan Mini Buckets.avif",
    "Water Cannon.avif",
    "Water Jet.avif",
    "Water Umbrella.avif",
    "Watermelons Bucket.avif",
    "Watermeon Mını Static Buckets.avif",
    "Whale Tail.avif"
];

import { useTranslation } from 'react-i18next';

const SplashZone = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

            {/* ── Page Hero ── */}
            <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
                <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                                Splash<br />Zone
                            </h1>
                            <p className="text-white/50 text-lg leading-relaxed mt-4">
                                {t('splashzone.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-20 px-10'>
                <div className="grid grid-cols-3 gap-10">
                    {images.map((image, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={`/src/assets/splashZone/${image}`} alt={image.replace('.avif', '')} />
                            <div className="glass-effect grid grid-cols-2">
                                <p>{image.replace('.avif', '')}</p>
                                <button
                                    onClick={() => navigate('/contact')}
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
