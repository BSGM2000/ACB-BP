
import React from 'react';
import ScrollAnimator from '../ScrollAnimator';

const Hero: React.FC = () => {
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="inicio" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
                // Placeholder video. Replace with your own .mp4 file.
                src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-riding-bikes-in-the-countryside-8671-large.mp4"
            >
                Your browser does not support the video tag.
            </video>
            
            <div className="relative z-20 container mx-auto px-6">
                <ScrollAnimator>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-yellow-400 drop-shadow-lg">
                        Transformando la ciudad, <br/> un pedalazo a la vez.
                    </h1>
                </ScrollAnimator>
                <ScrollAnimator className="mt-4">
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-200">
                        Conoce los programas Al Colegio en Bici y Biciparceros.
                    </p>
                </ScrollAnimator>
                <ScrollAnimator className="mt-8">
                    <button 
                        onClick={() => handleScrollTo('programa')}
                        className="bg-yellow-400 text-indigo-950 font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Descubre Más
                    </button>
                </ScrollAnimator>
            </div>
        </section>
    );
};

export default Hero;
