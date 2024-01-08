"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "@/images/swiper-images/slide-1.jpg";
import slide2 from "@/images/swiper-images/slide-2.jpg";
import slide3 from "@/images/swiper-images/slide-3.jpg";
import Image from "next/image";

export default function Carousel() {
  //import carousel images from CMS

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="absolute">
            <Image src={slide1} alt="cheese" className="relative z-0" />
            <button className="bg-[#fcb537] text-white z-10 relative rounded-md px-6 py-2 lg:left-[65px] lg:bottom-[100px] left-[20px] bottom-[50px] active:scale-90">
              Click here for cheese
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide2} alt="cheese" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide3} alt="cheese" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
