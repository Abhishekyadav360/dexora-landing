'use client'
import React, { useEffect } from 'react';
import Image from 'next/image'
import aboutimg from '@/Assets/images/dexa1.webp';
import aboutimg2 from '@/Assets/images/dexa.webp';
import aboutimg3 from '@/Assets/images/dexa3.webp';
import logo from '@/Assets/images/dexorra-coins.webp';
import Title from '../Components/Title'
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '../Components/Button';


const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1600,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section id='about' className='pt-8 sm:pt-16 pb-8 sm:pb-20 relative overflow-visible'>
            <div className="container mx-auto px-4 relative" >
                <Image
                    src={logo}
                    alt="aboutimg-icon"
                    className="object-cover rounded w-full h-auto absolute -top-0 right-20 max-w-80 z-0 transform hidden lg:block brightness-[1]"
                    priority={true} data-aos="fade-down"
                />
                <div className='max-w-3xl'>
                    <Title
                        title="Inside Dexora: The Future of DeFi"
                        highlightedWord=""
                        highlightedText=""
                        subtitle=''
                        className="text-left mb-5"
                    />
                </div>
                <div className='md:flex md:items-center'>
                    <div className='w-full md:w-1/2 flex justify-start items-center'>
                        <div className="max-w-60 relative mx-auto md:mx-0 mt-2.5 sm:mt-0" data-aos="fade-up" >
                            <Image
                                src={aboutimg2}
                                alt="aboutimg-icon"
                                className="object-cover rounded w-full h-auto brightness-[1.4]"
                                priority={true}
                            />
                        </div >
                        <div className="max-w-60 relative mx-auto md:mx-0 mt-2.5 sm:mt-0" data-aos="fade-up" data-aos-duration="2000">
                            <Image
                                src={aboutimg}
                                alt="aboutimg-icon"
                                className="object-cover rounded w-full h-auto brightness-[1.4] "
                                priority={true}
                            />
                        </div>
                        <div className="max-w-60 relative mx-auto md:mx-0 mt-2.5 sm:mt-0" data-aos="fade-up" data-aos-duration="2400">
                            <Image
                                src={aboutimg3}
                                alt="aboutimg-icon"
                                className="object-cover rounded w-full h-auto brightness-[1.4]"
                                priority={true}
                            />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 bg-black' data-aos="fade-up">
                        <p className='text-left bnr-desc text-lg sm:text-xl'>
                            Dexora is a decentralized exchange (DEX) platform built on the Polygon blockchain — combining lightning-fast, low-cost DeFi trading with skill-based rewards through its Tap Tap Game, all powered by the native $DORA token.
                        </p>
                        <p className='text-left mt-2 bnr-desc text-lg sm:text-xl'>
                            Dexora gives users full control over their funds while turning DeFi into something engaging and rewarding.
                        </p>
                        <div className=' mt-4 flex gap-3' >
                        <Button variant="animated">Tap Tap Game</Button>
                        <Button variant="animated">Visit Dex</Button>
                        {/* <Button variant="animated">Whitepaper</Button> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
