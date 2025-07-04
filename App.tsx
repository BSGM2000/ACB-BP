
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import ProgramSection from './components/sections/ProgramSection';
import BiciparcerosSection from './components/sections/BiciparcerosSection';
import GallerySection from './components/sections/GallerySection';
import ImpactSection from './components/sections/ImpactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-slate-900 text-slate-300 antialiased">
            <Header scrolled={scrolled} />
            <main>
                <Hero />
                <ProgramSection />
                <BiciparcerosSection />
                <ImpactSection />
                <GallerySection />
            </main>
            <Footer />
        </div>
    );
};

export default App;