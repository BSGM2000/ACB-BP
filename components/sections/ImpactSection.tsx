
import React from 'react';
import ScrollAnimator from '../ScrollAnimator';

const stats = [
    { value: "+10,000", label: "Estudiantes Beneficiados" },
    { value: "+200", label: "Colegios Participantes" },
    { value: "+1M", label: "de Km Recorridos" }
];

const ImpactSection: React.FC = () => {
    return (
        <section id="impacto" className="py-20 md:py-28 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <ScrollAnimator key={index}>
                            <div className="p-8">
                                <p className="text-5xl md:text-6xl font-black text-yellow-400">{stat.value}</p>
                                <h3 className="mt-2 text-xl font-semibold text-white">{stat.label}</h3>
                            </div>
                        </ScrollAnimator>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
