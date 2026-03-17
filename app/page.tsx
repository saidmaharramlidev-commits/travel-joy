"use client"

import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "@/public/travelSlidePic1.jpg"
import pic2 from "@/public/travelSlidePic4.webp"
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import HomeLocation from "@/components/HomeLocation";
import HomeAbout from "@/components/HomeAbout";
import HomePackages from "@/components/HomePackages";
import HomeServices from "@/components/HomeServices";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Navbar />

      <Swiper
        id="swiper"
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
        loop
      >
        <SwiperSlide className="swiper-div">
          <div className="swiper-text-div">
            <div className="company-name">
              Travel-joy

            </div>
            <h1>Explore breathtaking destinations, unforgettable adventures.</h1>
            <Link href={'https://wa.me/994501234567'} className="swiper-cta">
              Book Your Trip

            </Link>

          </div>
          <Image className="swiper-pic" src={pic1} alt="picture" />
        </SwiperSlide>
        <SwiperSlide className="swiper-div">
          <div className="swiper-text-div">
            <div className="company-name">
              Travel-joy

            </div>
            <h1>Explore breathtaking destinations, unforgettable adventures.</h1>
            <Link href={'https://wa.me/994501234567'} className="swiper-cta">
              Book Your Trip

            </Link>

          </div>
          <Image className="swiper-pic" src={pic2} alt="picture" />
        </SwiperSlide>
      </Swiper>

      <HomeLocation />
      <HomeAbout />
      <HomePackages />
      <HomeServices />
      <Footer />




    </div>
  );
}
