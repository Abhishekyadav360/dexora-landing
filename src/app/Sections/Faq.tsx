'use client'
import React, { useState, useRef, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import PlusIcon from '@/Assets/images/add.png';
import MinusIcon from '@/Assets/images/minus.png';
import Image from 'next/image';
import Title from '../Components/Title';

function Faq() {
    const FAQItem = [
        { question: "What is Dexora?", answer: "Dexora is a decentralized exchange platform that integrates staking and play-to-earn gaming." },
        { question: "What is $DORA used for?", answer: "$DORA powers staking, gameplay actions, and is rewarded through the Tap Tap Game." },
        { question: "Is KYC required? ", answer: "No. Dexora is fully decentralized and permissionless." },
        { question: "How do I earn with the Tap Tap Game?", answer: `Play the Tap Tap Game to win $DORA based on your performance and participation in events.` },
        { question: "Will there be a mobile version? ", answer: `Yes, a mobile-friendly version is planned for Q1 2026.` },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        AOS.init({
            duration: 1600,
            easing: "ease-in-out",
            once: true,
        });

        // initialize refs for each item
        contentRefs.current = FAQItem.map((_, i) => contentRefs.current[i] ?? React.createRef());
    }, []);

    return (
        <section id='faq' className="advantages relative overflow-hidden py-8 sm:py-10 ">
            <div className="container mx-auto px-4">
                <div className='lg:flex lg:items-start'>
                    <div className="lg:w-1/2 mx-auto text-left relative justify-center lg:justify-start items-start flex flex-col" data-aos="fade-up">
                        <div className="max-w-3xl" >
                            <Title
                                title="Got Questions ? We've Got the Answers!"
                                highlightedWord=""
                                highlightedText=""
                                subtitle=""
                                className="text-left "
                            />
                        </div>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-center max-w-2xl brightness-[1.4] "
                        >
                            <source src="/video/Home-New.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="lg:w-1/2 mx-auto text-left relative" data-aos="fade-up">
                        <div className="space-y-4 pt-2 sm:pt-12">
                            {FAQItem.map((item, index) => {
                                return (
                                    <div key={index} className="relative border border-[rgb(38,38,38)] bg-[rgb(23,23,27)] rounded-[24px] w-full py-3 px-6">
                                        <button
                                            className="flex items-center justify-between w-full text-left text-base md:text-xl font-medium focus:outline-none text-foreground faq-head py-4 relative"
                                            onClick={() => toggleAnswer(index)}
                                        >
                                            <span>{item.question}</span>
                                            <Image
                                                src={openIndex === index ? MinusIcon : PlusIcon}
                                                alt={openIndex === index ? 'Collapse' : 'Expand'}
                                                className='w-5 h-5 grayscale'
                                            />
                                        </button>

                                        <div
                                            ref={contentRefs.current[index]}
                                            style={{
                                                maxHeight: openIndex === index
                                                    ? `${contentRefs.current[index]?.current?.scrollHeight}px`
                                                    : '0px',
                                                overflow: 'hidden',
                                                transition: 'max-height 0.4s ease',
                                            }}
                                            className="text-base md:text-lg text-gray-400 px-2"
                                        >
                                            <p className="pb-5">{item.answer}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
