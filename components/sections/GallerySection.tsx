
import React from 'react';
import ScrollAnimator from '../ScrollAnimator';

const images = [
    "https://scontent.fbog3-1.fna.fbcdn.net/v/t51.75761-15/491451107_18148826905374616_6779755554500094684_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uB-2xsZ3KpcQ7kNvwEnmduU&_nc_oc=Adlwk2bmXuldhLm7igk0jTv4UcJ5rUxVGFhHhxHxH8vYzr0DgWxwYB-0WqLWwIRXnD4&_nc_zt=23&_nc_ht=scontent.fbog3-1.fna&_nc_gid=FSeFK76AJKR1t50CFmTrJg&oh=00_AfMZrHm6q6NVGILnRH9ufYlVGNivvEWnCz6XmdF1kPIddg&oe=686CE991",
    "https://pbs.twimg.com/media/FUWEAs3XwAgC7li?format=jpg&name=large",
    "https://pbs.twimg.com/media/FUWEBjhXsAEkdEf?format=jpg&name=large",
    "https://scontent.fbog3-1.fna.fbcdn.net/v/t39.30808-6/484145958_988231070166092_7263222540967573357_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cznLpW8KeMIQ7kNvwFtBtyV&_nc_oc=AdnsH7Eo8JHltg_ClmYhtgdisNO6ZXm8H_k8iCmlu9JtByi_OmZqFWSZWmrHjCIn_l0&_nc_zt=23&_nc_ht=scontent.fbog3-1.fna&_nc_gid=JHOk-5Hz9ZvmpaBL9bdECg&oh=00_AfMd-r6LHKC8tq-dkc055b6YucQmx0RXItV3izRXPvhQEA&oe=686CFFA2",
    "https://scontent.fbog3-3.fna.fbcdn.net/v/t51.75761-15/491492967_18008053580736976_7736650911496239215_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHASOYu_hlK-Pyzt7Q-PlyFhfIkFhJUaz2F8iQWElRrPTUgltZeQeCh4bj7pJ1u4idC8JFWOwdAeWHS66HbKsrJ&_nc_ohc=KSwxWe3d6xAQ7kNvwGal94v&_nc_oc=AdnZZzclWcZoRPtYrMTh-PhHFBiHrKFq937t4zl6TamIc9ZrnhjHT4hKFITd1YZtf5o&_nc_zt=23&_nc_ht=scontent.fbog3-3.fna&_nc_gid=etcuoizJV83g-wE3dvkU9w&oh=00_AfPyJFHXABpfpDGDazFM47rr-SmWFn1RuEISfj71h62Hbg&oe=686CE2A3",
    "https://scontent.fbog3-2.fna.fbcdn.net/v/t51.75761-15/491894482_18008053598736976_3168698709797038271_n.webp?stp=dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFVsDlhkpQonl2JCJVFfprR76KgDjWxFHHvoqAONbEUcYUOfFXr7k1aoBJQhhROJNvK5i-PWFXKP0P601_vquhq&_nc_ohc=AziAZLSRdxwQ7kNvwECV0Fe&_nc_oc=Adku348nm5mKx_0-Y3qec1ixnQ2amV6BKUaQvs3o1K7HHc0V3Ry1_F6eqPwTkoPfCUk&_nc_zt=23&_nc_ht=scontent.fbog3-2.fna&_nc_gid=VoNedl_isDHxZNeMgxq0DA&oh=00_AfMa_cXImUwxHzZk8zpBakD29NS5BGRWvIAndSh4mvvkCQ&oe=686CE674",
];

const GallerySection: React.FC = () => {
    return (
        <section id="galeria" className="py-20 md:py-32 bg-indigo-950">
            <div className="container mx-auto px-6">
                <ScrollAnimator>
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                        Momentos en <span className="text-yellow-400">dos ruedas</span>
                    </h2>
                </ScrollAnimator>
                <ScrollAnimator>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((src, index) => (
                            <div key={index} className={`rounded-lg overflow-hidden shadow-lg ${index === 1 || index === 3 ? 'md:row-span-2' : ''}`}>
                                <img src={src} alt={`Galería del programa ${index + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </ScrollAnimator>
            </div>
        </section>
    );
};

export default GallerySection;
