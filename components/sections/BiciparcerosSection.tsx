
import React from 'react';
import ScrollAnimator from '../ScrollAnimator';
import VideoBiciParceros from './VideoBiciParceros';

const biciparceros = [
    {
        name: "Ana María R.",
        quote: "Ser Biciparcera es guiar y proteger el futuro de Bogotá. Cada sonrisa en el camino es mi mayor recompensa.",
        imageUrl: "https://scontent.fbog3-2.fna.fbcdn.net/v/t51.82787-15/515325033_18015710690736976_4555257800881078108_n.webp?stp=dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHjlOb-HYrbfCeIcD6Unilcyw1yaY80ikbLDXJpjzSKRvkPolCFuQVzjdAwc2gEkWXGcT096W06nhjDLEvXsLH0&_nc_ohc=0yhgh7MOgKMQ7kNvwFY0USH&_nc_oc=AdnGdI6Iekzkbvlkvug2l60SpUCNAOYHPgZK7hdtceQqEc4VHloO5hn_C3QfwrW3WZs&_nc_zt=23&_nc_ht=scontent.fbog3-2.fna&_nc_gid=THYU-Wu_CxkVNisUTM7XkA&oh=00_AfMRf9TIbYiWk0Ase13qUUiS7AGalh82p1vtoYd-_kwDww&oe=686CDB89"
    },
    {
        name: "Luisa Fernanda G.",
        quote: "Enseñarles a rodar con seguridad es sembrar la semilla de una ciudad más amable para todos.",
        imageUrl: "https://scontent.fbog3-1.fna.fbcdn.net/v/t51.75761-15/491495470_18008053619736976_907313179567998646_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH7L1Q3v157729VZgjvIFMQb3hXunylG3JveFe6fKUbcjidN8UAzwUQx7CjgGIIoCnXHRjF8S35a2t_J2464GvZ&_nc_ohc=hemvPzpNBbYQ7kNvwFSeVhY&_nc_oc=AdmJ20gjrRx-WrRFvry_vQr6s1m-FLBYmveYNv7XNIoIJTe4gkCClP-eYvA_vJokTPE&_nc_zt=23&_nc_ht=scontent.fbog3-1.fna&_nc_gid=9V8KyyYjMLKTsH-ub2YStw&oh=00_AfN7OyssNXcFbbfH38BhaFxxBsisMIVvo1BQlySsjp711A&oe=686CFBDF"
    },
    {
        name: "Carlos Vélez",
        quote: "Formamos ciudadanos conscientes desde el primer pedalazo. Es un honor ser parte de este cambio.",
        imageUrl: "https://scontent.fbog3-1.fna.fbcdn.net/v/t51.75761-15/491441924_18007715738736976_3288908236203086927_n.webp?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEcoQnUU77EOXVAXYtfJD010Vj7jjZIx13RWPuONkjHXRgj-YOUoN3N5uZ1asWIJloKqSnRrr_tQ9ZRJ2TVHtCP&_nc_ohc=IUO2gSi52B0Q7kNvwHfgKOR&_nc_oc=AdlrwTkAnWIWABRHFE7sL8BzJ3BHM4wDpwVVVFOteeOZbs9GxmgtBahCv5UMM_l25Uo&_nc_zt=23&_nc_ht=scontent.fbog3-1.fna&_nc_gid=Bu6wGch2dqNakOFZ4Z4AmQ&oh=00_AfNCurEb7zxxH_is21KTsxQul6M-zUuMW2xfOdfx18hWwQ&oe=686CE60E"
    }
];

// YouTube video ID about the program
const videoId = 'mCUTcehsvtA';

const BiciparcerosSection: React.FC = () => {
    return (
        <section id="biciparceros" className="py-20 md:py-32 bg-indigo-950">
            <div className="container mx-auto px-6">
                <ScrollAnimator>
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                        Nuestros Héroes: Los <span className="text-yellow-400">Biciparceros</span>
                    </h2>
                </ScrollAnimator>
                
                <ScrollAnimator>
                    <div className="mb-16 max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden">
                        <VideoBiciParceros videoId={videoId} />
                    </div>
                </ScrollAnimator>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {biciparceros.map((parcero, index) => (
                        <ScrollAnimator key={index}>
                            <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                                <img src={parcero.imageUrl} alt={`Foto de ${parcero.name}`} className="w-full h-64 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white">{parcero.name}</h3>
                                    <blockquote className="mt-4 border-l-4 border-purple-600 pl-4 text-slate-300 italic flex-grow">
                                        "{parcero.quote}"
                                    </blockquote>
                                </div>
                            </div>
                        </ScrollAnimator>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BiciparcerosSection;