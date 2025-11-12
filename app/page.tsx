'use client'
import { Map, Marker } from "pigeon-maps"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

import { Autoplay, Pagination, EffectCube } from "swiper";
import { TEXTE_PRESENTATION } from "./Constantes";

export default function Home() {
  
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Kanté Construction
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos projets de construction, rénovation et maçonnerie
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="realisations" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nos Réalisations
          </h2>
          <div className="max-w-2xl mx-auto">
            <Swiper
              effect={"cube"}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Autoplay, Pagination]}
              className="rounded-xl shadow-2xl"
            >
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_1.jpg" 
                  alt="Réalisation 1" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_2.jpg" 
                  alt="Réalisation 2" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_3.jpg" 
                  alt="Réalisation 3" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_4.jpg" 
                  alt="Réalisation 4" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_5.jpg" 
                  alt="Réalisation 5" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_6.jpg" 
                  alt="Réalisation 6" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_7.jpg" 
                  alt="Réalisation 7" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_8.jpg" 
                  alt="Réalisation 8" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                  src="/realisation_pic_9.jpg" 
                  alt="Réalisation 9" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            À Propos de Nous
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {TEXTE_PRESENTATION}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nous Contacter
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Info Card */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-xl p-8 text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-2 ml-9">
                  <p className="text-gray-200">Lundi - Vendredi : 9h - 18h</p>
                  <p className="text-gray-200">Samedi : 9h - 12h</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Adresse
                </h3>
                <p className="text-gray-200 ml-9">
                  60 Impasse Des Clos<br />
                  74930 REIGNIER-ESERY
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl shadow-xl overflow-hidden">
              <Map height={400} defaultCenter={[46.1372192, 6.2724688]} defaultZoom={16}>
                <Marker width={30} anchor={[46.1372192, 6.2724688]} />
              </Map>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Kanté Construction. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  )
}
