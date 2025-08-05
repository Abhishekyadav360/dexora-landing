'use client';
import React from 'react';
// import Image from 'next/image';
// import nftline from '@/Assets/images/nftstars.webp';
// import tokenbg from '@/Assets/images/token-bg.svg';

const Tokenomicscard2 = ({ title, description, percentage }) => {
    return (
        <div className="relative px-4 pt-0 pb-0 rounded-t-xl backdrop-blur">
             {/* <Image
                            className="  absolute -top-12 left-0  object-contain w-full h-full z-10  max-w-sm"
                            src={tokenbg}
                            alt="circle image"
                            width={150}
                        /> */}
                          <div className="css-rdmp brightness-[0.4]">
                                    <div className="css-1ds0v03" />
                                    <div className="css-1vf8hc4" />
                                </div>
            <div className="flex items-center justify-center rounded-xl gap-3 z-10 w-fit h-fit">
                <div className="relative max-w-20 p-3 rounded-lg  border border-[#ffffff27] backdrop-blur-sm roadmap-box">
               
                    {percentage !== undefined && (
                        <p className="text-blue-400 text-xl font-semibold mt-1">{percentage}%</p>
                    )}
                </div>
                <div>
                    <h3 className="text-white text-2xl text-left">{title}</h3>
                    <p className="text-stone-300 text-lg mt-2 text-left">{description}</p>
                    
                </div>
            </div>

            {/* <div className="nfts-box-line"></div>

            <Image
                src={nftline}
                alt="nftline"
                width={250}
                height={250}
                className="nfts-box-image-blue"
                sizes="40px"
            /> */}
        </div>
    );
};

export default Tokenomicscard2;
