'use client'
import { Map, Marker } from "pigeon-maps"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
/* import Image from "next/image";
/* import { InstagramEmbed } from 'react-social-media-embed'; */
// Import Swiper styles */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

import { Autoplay, Pagination, EffectCube } from "swiper";

export default function Home() {
  
  return (
    <div className="flex flex-col">
      <div className="w-1/3 justify place-self-center">
      <div className="m-1/2 justify-center items-center">
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
        className="mySwiper"
      >
    <SwiperSlide><img className="W-1" src="/realisation_pic_1.jpg"/></SwiperSlide>
    <SwiperSlide><img alt="realisation1" src="/realisation_pic_2.jpg"/></SwiperSlide>
    <SwiperSlide><img alt="realisation1" src="/realisation_pic_3.jpg"/></SwiperSlide>
    <SwiperSlide><img alt="realisation1" src="/realisation_pic_4.jpg"/></SwiperSlide>
    <SwiperSlide><img alt="realisation1" src="/realisation_pic_5.jpg"/></SwiperSlide>
    <SwiperSlide><img alt="realisation1" src="/realisation_pic_6.jpg"/></SwiperSlide>
    <SwiperSlide><img alt="realisation1" src="/realisation_pic_7.jpg"/></SwiperSlide>
    <SwiperSlide><img alt="realisation1" src="/realisation_pic_8.jpg"/></SwiperSlide>
    <SwiperSlide><img alt="realisation1" src="/realisation_pic_9.jpg"/></SwiperSlide>

    </Swiper>
    </div>
    </div>
    
    <div className='m-5 flex flex-row'>
    


    <div className="flex border rounded border-gray-300 flex-col w-1/4 items-left">
    <span className="text-gray-700 text-lg">Horaires d&apos ouverture :</span>
    <ul className="flex flex-col">
    <li className="px-2 py-1 text-gray-700">Lundi - Vendredi : 9h - 18h</li>
    <li className="px-2 py-1 text-gray-700">Samedi : 9h - 12h</li>
    </ul>
    <span className="text-gray-700 text-lg">Nous Trouver :</span>
    <ul className="flex flex-col">
    <li className="px-2 py-1 text-gray-700">60 Impasse Des Clos - 74930 REIGNIER-ESERY </li>
    </ul>
    
    </div>
    
    {/*  <InstagramEmbed url="https://www.instagram.com/p/Cr35WR0qsS3/" width={328} />
    <InstagramEmbed url="https://www.instagram.com/p/Ctg41wpNN3v/" width={328} />
  */}
  <div className="w-1/2">
  <Map height={300} defaultCenter={[46.1372192,6.2724688]} defaultZoom={16}>
  <Marker width={30} anchor={[46.1372192,6.2724688]} />
  </Map>
  </div>
  
  
  </div>
  </div>
  )
}
