"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";

import Image from "next/image";
import Link from "next/link";
import slide1 from "@/images/swiper-images/slide-1.jpg";
import slide2 from "@/images/swiper-images/slide-2.jpg";
import slide3 from "@/images/swiper-images/slide-3.jpg";

export default function Carousel() {
  //import carousel images from CMS

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Link href="/">
            <Image src={slide1} alt="cheese" className="absolute z-0" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <Image src={slide2} alt="cheese" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <Image src={slide3} alt="cheese" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
