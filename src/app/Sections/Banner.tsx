'use client'
import React, { useEffect } from 'react';
// import Button from '../Components/Button';
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import bnr1 from "@/Assets/images/dexab1.webp";
import bnr2 from "@/Assets/images/dexab3.webp";
import bnr3 from "@/Assets/images/dexab3.webp";
// import Button from '../Components/Button';




const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <>
            <section
                id='banner'
                className="relative pt-[300px] pb-[200px]  sm:pb-[300px]  overflow-hidden flex items-center justify-center"
            >
                <div
                    className="absolute top-40 -left-16 sm:-left-20 z-10 max-w-32 sm:max-w-44"
                    data-aos="fade-right"
                    data-aos-duration="2500"
                >
                    <Image
                        src={bnr1}
                        alt="left-icon"
                        className="object-cover rounded w-full h-auto infinite-rotate"
                        priority={true}
                    />
                </div>

               
                <div
                    className="absolute top-[400px] sm:top-[200px] right-[56%] sm:right-[22%] z-10 max-w-12 sm:max-w-16"
                    data-aos="fade-left"
                    data-aos-duration="2500"
                >
                    <Image
                        src={bnr2}
                        alt="middle-icon"
                        className="object-cover rounded w-full h-auto infinite-rotate"
                        priority={true}
                    />
                </div>

               
                <div
                    className="absolute bottom-4 sm:bottom-20 -right-5 z-10 max-w-28 sm:max-w-44 rotate-[120deg]"
                    data-aos="fade-left"
                    data-aos-duration="2500"
                >
                    <Image
                        src={bnr3}
                        alt="right-icon"
                        className="object-cover rounded w-full h-auto infinite-rotate"
                        priority={true}
                    />
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-20 sm:top-0 left-0 w-full h-full -z-0 object-cover object-center opacity-50"
                >
                    <source src='/video/bnr.webm' type="video/webm" />
                    Your browser does not support the video tag.
                </video>
             
    <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute -top-20 sm:-top-16 left-1/2 -translate-x-1/2 max-w-52 sm:max-w-xs w-full h-full object-contain object-center brightness-[0.3] mix-blend-exclusion z-0"
    >
        <source src='/video/logo.mp4' type="video/mp4" />
        Your browser does not support the video tag.
    </video>


                <div className="container mx-auto px-4">
                    <div className='w-full text-center lg:text-center relative  sm:mt-20' data-aos="fade-up">
                        <h1 className="text-5xl md:text-5xl xl:text-[120px] text-left font-bold leading-snug sm:leading-none">
                            Crypto Journey
                        </h1>
                        <h1 className="text-6xl md:text-5xl xl:text-[150px] font-bold text-right leading-snug sm:leading-none mt-5 ">
                            with Dexora
                        </h1>
                        <p className="text-md md:text-xl mx-auto mt-2 sm:mt-4 bnr-desc text-white text-end max-w-5xl">
                            The decentralized exchange where trading meets gameplay. Powered by $DORA.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
