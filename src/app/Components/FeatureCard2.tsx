'use client';
import React from 'react';
import Image from 'next/image';
import ftrbg from '@/Assets/images/dexbgftop.webp';


const FeatureCard2 = ({ title, description, iconClassName, icon, ...props }) => {
    return (
        // <div className="relative px-4 pt-4 pb-6 bg-[#1b1f319c] rounded-t-xl  backdrop-blur min-h-64 ">
        <div className="relative px-8  py-10  bg-[#111417]  backdrop-blur min-h-64 rounded-xl border border-[#ffffff20]"
        {...props} >
 <Image
                    src={ftrbg}
                    alt="aboutimg-icon"
                    className=" w-full h-full absolute top-0 left-0 right-0 bottom-0  -z-10 rounded-xl"
                    priority={true}
                />

            <div className=" flex items-center justify-center p-1  rounded-xl     w-fit h-fit">
                <div className="relative max-w-32 sm:max-w-52">
                    <Image
                        src={icon}
                        alt={`${title} icon`}
                        width={270}
                        height={270}
                        className={`${iconClassName} object-cover rounded w-full h-auto `} 
                    />
                </div>
            </div>
            <div>
                <h3 className="text-white text-2xl mt-6 text-left">{title}</h3>
                <p className="text-stone-300 text-lg mt-4 text-left">{description}</p>

            </div>
            
        </div>
    );
};

export default FeatureCard2;
