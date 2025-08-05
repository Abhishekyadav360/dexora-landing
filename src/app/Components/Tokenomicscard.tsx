'use client';
import React from 'react';
import Image from 'next/image';
import nftline from '@/Assets/images/nftstars.webp';

const Tokenomicscard = ({ title, description, icon }) => {
    return (
        <div className="relative px-4 pt- pb-7    rounded-t-xl  backdrop-blur  ">

            <div className=" flex items-center justify-center   rounded-xl  gap-4   z-10 w-fit h-fit">
                <div className=" relative max-w-10">
                    <Image
                        src={icon}
                        alt={`${title} icon`}
                        width={100}
                        height={100}
                        className="object-cover rounded w-full h-auto"
                        

                    />
                </div>
                 <div>
                <h3 className="text-white text-2xl  text-left">{title}</h3>
                <p className="text-stone-300 text-lg mt-2 text-left">{description}</p>

            </div>
            </div>
           
            <div className="nfts-box-line"></div>

            <Image
                src={nftline}
                alt="nftline"
                width={250}
                height={250}
                className="nfts-box-image-blue "
                sizes="40px"

            />
        </div>
    );
};

export default Tokenomicscard;
