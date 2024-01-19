"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../app/css/slideshow.css";

import Image from "next/image";
import Link from "next/link";

interface SlideProps {
  image: string;
  image_destination: string;
  image_alt: string;
}

export default function Slideshow({ slides }: { slides: SlideProps[] }) {
  let slideshowHtml = slides.map((slide) => (
    <SwiperSlide key={slide.image_alt}>
      <Link href={`${slide.image_destination}`}>
        <Image src={slide.image} alt={slide.image_alt} width="1280" height="500" priority={true} />
      </Link>
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slideshowHtml}
      </Swiper>
    </div>
  );
}
