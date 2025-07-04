import React from 'react';
import ScrollAnimator from './ScrollAnimator';
import { TwitterIcon, FacebookIcon, InstagramIcon } from './icons/SocialIcons';
import { HeartIcon } from './icons/CoreIcons';

const Footer: React.FC = () => {
    return (
        <footer id="contacto" className="bg-indigo-950 border-t border-slate-800">
            <div className="container mx-auto px-6 py-12 text-center text-slate-400">
                <ScrollAnimator>
                    <h3 className="text-xl font-bold text-white">Secretaría Distrital de Movilidad - Bogotá</h3>
                    <p className="mt-2">Contáctanos para más información sobre nuestros programas.</p>
                
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://twitter.com/SectorMovilidad" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-yellow-400 transition-colors duration-200">
                            <TwitterIcon className="h-6 w-6" />
                        </a>
                        <a href="https://www.facebook.com/secretariamovilidadbogota" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-yellow-400 transition-colors duration-200">
                            <FacebookIcon className="h-6 w-6" />
                        </a>
                        <a href="https://www.instagram.com/sectormovilidad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-yellow-400 transition-colors duration-200">
                            <InstagramIcon className="h-6 w-6" />
                        </a>
                    </div>
                </ScrollAnimator>

                <ScrollAnimator>
                    <div className="mt-8 pt-8 border-t border-slate-800/50 flex items-center justify-center gap-2">
                        Diseñado con <HeartIcon className="h-5 w-5 text-purple-500" /> para los ciclistas del futuro.
                    </div>
                </ScrollAnimator>
            </div>
        </footer>
    );
};

export default Footer;
