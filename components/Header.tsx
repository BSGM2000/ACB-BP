
import React, { useState } from 'react';
import { MenuIcon, XIcon } from './icons/CoreIcons';

interface HeaderProps {
    scrolled: boolean;
}

const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "programa", label: "Al Colegio En Bici" },
    { id: "biciparceros", label: "Biciparceros" },
    { id: "galeria", label: "Galería" },
    { id: "contacto", label: "Contacto" },
];

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled || isMenuOpen ? 'bg-indigo-950/90 backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#inicio" onClick={(e) => { e.preventDefault(); handleScrollTo('inicio'); }} className="text-2xl font-bold text-yellow-400">
                    ACB & BP
                </a>
                
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <button key={link.id} onClick={() => handleScrollTo(link.id)} className="text-white hover:text-yellow-400 transition-colors duration-200">
                            {link.label}
                        </button>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-indigo-950/90 backdrop-blur-sm">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link) => (
                            <button key={link.id} onClick={() => handleScrollTo(link.id)} className="text-white hover:text-yellow-400 transition-colors duration-200 text-lg">
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
