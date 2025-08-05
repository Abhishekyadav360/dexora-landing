'use client'
import Image from 'next/image'
import React, { useEffect } from 'react';
import gt1 from "@/Assets/images/dexgtl.webp";
import gt2 from "@/Assets/images/dexgtr.webp";
import AOS from "aos";
import "aos/dist/aos.css";
// import Button from '../Components/Button'
import Marquee from '../Components/Marquee';

const GetStarted = () => {
  useEffect(() => {
    AOS.init({
      duration: 1600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <section className="relative overflow-hidden py-28 md:py-40 ">
        <div
          className="absolute top-[-20px] sm:top-20 left-0 sm:left-48 z-10 max-w-32 sm:max-w-28"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <Image
            src={gt1}
            alt="left-icon"
            className="object-cover rounded w-full h-auto transform  rotate-90 "
            priority={true}
          />
        </div>
        <div
          className="absolute bottom-[-50px] sm:bottom-0 left-0 sm:left-20 z-10 max-w-32 sm:max-w-28"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <Image
            src={gt1}
            alt="left-icon"
            className="object-cover rounded w-full h-auto transform rotate-180 "
            priority={true}
          />
        </div>

        <div
          className="absolute  sm:top-20 -right-5 z-10 max-w-28 sm:max-w-36 rotate-[120deg] opacity-40 sm:opacity-55 brightness-50 sm:brightness-100"
          data-aos="fade-left"
          data-aos-duration="2500"
        >
          <Image
            src={gt2}
            alt="right-icon"
            className="object-cover rounded w-full h-auto"
            priority={true}
          />
        </div>
        <div className="bg-[#a9d8ff]/20  w-96 h-96 max-sm:-left-72 absolute max-sm:top-14 max-sm:-translate-y-0 top-1/2 -translate-y-3/4 -left-40 rounded-full blur-3xl z-[9999]" />
        <div className="bg-[#a9d8ff]/20 w-96 h-96 max-sm:-right-72 absolute max-sm:bottom-20 top-1/2 -right-44 rounded-full blur-3xl z-[99]" />

        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-center opacity-70 saturate-[0.3] max-w-7xl w-full h-full sm:h-auto"
          >
            <source src="/video/video_1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container mx-auto px-4 z-10 relative" data-aos="fade-up">
          <Marquee />
        </div>
      </section>

    </>
  )
}

export default GetStarted