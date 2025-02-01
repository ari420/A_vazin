"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const RoomSlider = () => {
  const roomData = [
    {
      title: "سوئیت جونیور",
      description: "55 متر مربع | چشم انداز شهر / کوه",
      image: "/header/espinas_palace_gym.jpg",
      details: "طراحی منحصربه فرد این سوئیت ها با هدف جلب رضایت شما",
    },
    {
      title: "سوئیت جونیور",
      description: "55 متر مربع | چشم انداز شهر / کوه",
      image: "/header/espinas_palace_pool.jpg",
      details: "طراحی منحصربه فرد این سوئیت ها با هدف جلب رضایت شما",
    },
    {
      title: "سوئیت سیگنچر",
      description: "125 متر مربع | چشم انداز کوه",
      image: "/header/espinas_palace_massage.jpg",
      details: "پرده های مجلل و لوازم پر زرق و برق لوکس",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade"
      className="w-full h-screen relative"
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: false,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {roomData.map((room, index) => (
        <SwiperSlide key={index} className="relative">
          {/* تصویر پس زمینه */}
          <div className="absolute inset-0 -z-50">
            <Image
              src={room.image}
              alt={room.title}
              fill
              priority
              quality={90}
              className="object-cover w-full h-full"
              sizes="100vw"
            />
            {/* افکت تیره برای بهبود خوانایی متن */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RoomSlider;
