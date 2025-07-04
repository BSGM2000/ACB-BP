import React from 'react';
import ScrollAnimator from '../ScrollAnimator';
import { ShieldCheckIcon, SparklesIcon, HeartIcon, UserGroupIcon } from '../icons/FeatureIcons';

const features = [
    {
        icon: <ShieldCheckIcon className="h-8 w-8 text-yellow-400" />,
        title: "Seguridad",
        description: "Rutas seguras y acompañamiento constante para que los estudiantes lleguen a salvo."
    },
    {
        icon: <SparklesIcon className="h-8 w-8 text-yellow-400" />,
        title: "Sostenibilidad",
        description: "Promovemos un medio de transporte limpio que cuida nuestro planeta."
    },
    {
        icon: <HeartIcon className="h-8 w-8 text-yellow-400" />,
        title: "Salud",
        description: "Fomentamos la actividad física diaria, mejorando el bienestar de los jóvenes."
    },
    {
        icon: <UserGroupIcon className="h-8 w-8 text-yellow-400" />,
        title: "Autonomía",
        description: "Empoderamos a los estudiantes, dándoles confianza y responsabilidad."
    }
];

const ProgramSection: React.FC = () => {
    return (
        <section id="programa" className="py-20 md:py-32 bg-slate-900">
            <div className="container mx-auto px-6">
                <ScrollAnimator>
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                        ¿Qué es <span className="text-yellow-400">Al Colegio en Bici</span>?
                    </h2>
                </ScrollAnimator>
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    <div className="w-full md:w-1/2">
                        <ScrollAnimator>
                            <img 
                                src="https://www.educacionbogota.edu.co/portal_institucional/sites/default/files/inline-images/Colegio-bici-bogota.png" 
                                alt="Estudiantes sonriendo mientras participan en el programa Al Colegio en Bici" 
                                className="rounded-lg shadow-2xl object-cover w-full h-full"
                            />
                        </ScrollAnimator>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ScrollAnimator>
                            <p className="text-lg mb-8 text-slate-300">
                                Es una iniciativa que transforma el trayecto al colegio en una aventura segura, saludable y divertida. Creamos caravanas ciclísticas guiadas por adultos responsables, fomentando una cultura de movilidad sostenible y construyendo comunidad.
                            </p>
                        </ScrollAnimator>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <ScrollAnimator key={index}>
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 bg-indigo-900 p-3 rounded-full">{feature.icon}</div>
                                        <div>
                                            <h3 className="font-bold text-white text-xl mb-1">{feature.title}</h3>
                                            <p className="text-slate-400">{feature.description}</p>
                                        </div>
                                    </div>
                                </ScrollAnimator>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramSection;