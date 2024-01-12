"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./slideshow.css";

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
      <Link href="/">
        <Image
          src={slide.image}
          alt={slide.image_alt}
          width="1280"
          height="500"
        />
      </Link>
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slideshowHtml}
      </Swiper>
    </div>
  );
}
