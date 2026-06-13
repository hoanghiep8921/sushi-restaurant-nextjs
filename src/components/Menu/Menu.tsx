'use client';

import Image from 'next/image';

// i18n
import { useTranslation } from 'react-i18next';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Menu = () => {
  const { t } = useTranslation();

  const menuImages = Array.from({ length: 27 }, (_, i) => {
    return `/images/menu/${i + 4}.jpg`;
  }).filter((src) => src !== '/images/menu/10.jpg');

  const lunchImages = [
    '/images/image/lunch3.png',
    '/images/image/lunch1.png',
    '/images/image/lunch2.png',
  ];

  const allMenuImages = [...menuImages];
  allMenuImages.splice(6, 0, ...lunchImages);

  return (
    <section
      id="menu"
      className="relative overflow-hidden pb-[48px] pt-[24px] md:pb-[96px] md:pt-[48px]"
    >
      <h2 className="sr-only">{t('menu.heading')}</h2>
      <Image
        src="/images/menu/bg.jpg"
        alt="Background"
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[#1a1008]/20" />
      <div>
        <Image
          src="/images/menu/menu.png"
          alt="Menu"
          aria-hidden="true"
          width="400"
          height="126"
          sizes="(max-width: 480px) 180px, (max-width: 1024px) 250px, 350px"
          className="relative mb-[24px] ml-[24px] w-[180px] md:mb-[48px] md:ml-[48px] md:w-[250px] lg:w-[350px]"
        />
      </div>
      <div className="relative mx-auto w-full md:w-[90%]">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          className="!pb-[48px]"
        >
          {allMenuImages.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="mx-auto w-full md:w-5/6 lg:w-3/4">
                <Image
                  src={src}
                  alt={t('menu.alt', { page: i + 1 })}
                  width={500}
                  height={700}
                  sizes="90vw"
                  className="h-auto w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Menu;
