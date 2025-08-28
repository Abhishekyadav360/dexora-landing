'use client'
import React, { useState } from 'react'
import Title from '../Components/Title'
import Image from 'next/image'
import tokenomics from '@/Assets/images/v4.webp'
import gt1 from "@/Assets/images/dexgtl.webp";
import gt2 from "@/Assets/images/dexgtr.webp";


const Tokenomics = () => {

    const [copied, setCopied] = useState(false)
    const contractAddress = "0x312219A256864ceeAAD1dD015793F058b30586D3"

    const truncateAddress = (address) =>
        `${address.slice(0, 6)}...${address.slice(-4)}`

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <section id='tokenomics' className="advantages relative overflow-hidden py-12 md:py-16">
                <div
                    className="absolute top-[-20px] sm:top-20 left-0 sm:left-48 z-0 max-w-32 sm:max-w-28"
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
                    className="absolute bottom-[-50px] sm:bottom-0 left-0 sm:left-20 z-0 max-w-32 sm:max-w-28"
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
                    className="absolute  sm:top-20 -right-5 z-0 max-w-28 sm:max-w-36 rotate-[120deg] opacity-10 sm:opacity-55 brightness-75 sm:brightness-[1.2]"
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
                <div className="bg-[#a9d8ff]/20  w-96 h-96 max-sm:-left-72 absolute max-sm:top-14 max-sm:-translate-y-0 top-1/2 -translate-y-3/4 -left-40 rounded-full blur-3xl z-[9999] opacity-70 sm:opacity-100" />
                <div className="bg-[#a9d8ff]/20 w-96 h-96 max-sm:-right-72 absolute max-sm:bottom-20 top-1/2 -right-44 rounded-full blur-3xl z-[99] opacity-70 sm:opacity-100" />
                <div className="container mx-auto px-4">
                    <div className='max-w-3xl mx-auto '>
                        <Title
                            title="The Numbers Behind the Project"
                            highlightedWord=""
                            highlightedText=""
                            subtitle=''
                            className="mb-2 text-center"
                        />
                    </div>
                    <div className='lg:flex lg:items-center gap-2'>
                        <div className="w-full mx-auto text-center relative" data-aos="fade-up">
                            <div className="grid grid-cols-1  mt-5 gap-y-6 gap-x-3 mx-auto ">
                                <div>
                                    <div className='max-w-sm sm:max-w-3xl mx-auto' data-aos="fade-up">
                                        <Image
                                            src={tokenomics}
                                            alt="astronaut"
                                            className="w-full h-auto mx-auto brightness-[1]"
                                        />
                                    </div>
                                </div>
                                <div className='max-w-[320px] sm:max-w-lg md:max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4  mx-auto backdrop-blur-lg border border-[#ffffff41] rounded-xl  gap-y-4 gap-x-6  items-center justify-center text-center p-4 ftrncard mt-5' data-aos="fade-up">
                                    <div className='md:border-r border-gray-600 '>
                                        <h4 className="text-xl  ">Token Name</h4>
                                        <div className="flex items-center justify-center gap-2 mt-1 text-gray-300">
                                            Dexora
                                        </div>
                                    </div>
                                      <div className='md:border-r border-gray-600 '>
                                        <h4 className="text-xl  ">Ticker</h4>
                                        <div className="flex items-center justify-center gap-2 mt-1 text-gray-300">
                                            DORA
                                        </div>
                                    </div>
                                    <div className='md:border-r border-gray-600 '>
                                        <h4 className="text-xl  ">Total Supply</h4>
                                        <div className="flex items-center justify-center gap-2 mt-1 text-gray-300">
                                            270,000,000
                                        </div>
                                    </div>
                                  
                                    <div className=''>
                                        <h4 className="text-xl  ">Contract Address</h4>
                                        <div className="flex items-center justify-center gap-2 mt-1 text-gray-300">
                                            <span className="flex items-center gap-1">
                                                {truncateAddress(contractAddress)}
                                                {copied && (
                                                    <span className="text-green-400 text-sm animate-pulse ml-1">Copied!</span>
                                                )}
                                            </span>
                                            <button
                                                onClick={handleCopy}
                                                title="Copy Address"
                                                className="hover:text-white transition"
                                            >
                                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1z" /><path d="M20 5H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 18H8V7h12z" /></svg>
                                            </button>
                                            <a
                                                href={`https://polygonscan.com/token/${contractAddress}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="View on "
                                                className="hover:text-white transition"
                                            >
                                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3l-1.4 1.4L17.2 9H10v2h7.2l-4.6 4.6L14 17l8-8z" /><path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-4h-2v4H5V5z" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tokenomics