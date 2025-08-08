'use client'
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Title from '../Components/Title'
import FeatureCard from '../Components/FeatureCard';
import FeatureCard2 from '../Components/FeatureCard2';
import FeatureNCard from '../Components/FeatureNCard';


const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1600,
            easing: "ease-in-out",
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <section id='Features' className="advantages relative overflow-hidden py-8 md:py-10 ">
                <div className="container mx-auto px-4">
                    <Title
                        title="Core Features"
                        highlightedWord=""
                        highlightedText=""
                        subtitle=''
                        className="mb-10 text-center"
                    />
                    <div className='lg:flex lg:items-center gap-2'>
                        <div className="w-full  mx-auto text-center relative  " >
                            <div className="grid grid-cols-1 sm:grid-cols-3  mt-5 gap-y-6 gap-x-6 max-w-7xl mx-auto">

                                <FeatureCard
                                    title="Decentralized Exchange"
                                    description="On-chain token swaps with full transparency, user control, fast speed, and complete security."
                                    icon="/images/dexadex.webp" data-aos="fade-right" data-aos-duration="2000"
                                    iconClassName="brightness-[1] "
                                />
                                <FeatureCard2
                                    title="$DORA Token"
                                    description="Native token used for staking, rewards, in-game features, platform access, and future governance."
                                    icon="/images/coin.webp" data-aos="fade-up" data-aos-duration="2500"
                                    iconClassName="brightness-[0.9] "

                                />
                                <FeatureCard
                                    title="Tap Tap Game"
                                    description="A play-to-earn game that rewards speed, skill, timing, fast reaction, and consistent gameplay."
                                    icon="/images/gameremote1.webp" data-aos="fade-left" data-aos-duration="2000"
                                    iconClassName="brightness-[1] "

                                />
                                <FeatureNCard
                                    title="Staking Pools"
                                    description="Lock $DORA tokens effortlessly to earn consistent, high-yield passive income rewards daily."
                                    className='ftrncard'
                                    data-aos="fade-up"
                                    data-aos-duration="2500"

                                />
                                <FeatureNCard
                                    title="Secure Wallet Integration"
                                    description="Connect seamlessly with popular wallets to trade, stake, and play without compromising security."
                                    className='ftrncard2'
                                    data-aos="fade-up"
                                    data-aos-duration="2500"
                                />
                                <FeatureNCard
                                    title="Gamified Engagement"
                                    description="Compete on global leaderboards, complete fun missions, and unlock exclusive event-based rewards."
                                    className='ftrncard'
                                    data-aos="fade-up"
                                    data-aos-duration="2500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features 