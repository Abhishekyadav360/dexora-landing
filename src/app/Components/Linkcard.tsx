'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nftline from '@/Assets/images/nftstars.webp';

type LinkcardProps = {
    title: string;
    description: string; // Full wallet address
    icon: string;
    link?: string; // URL to redirect on click
};

const Linkcard: React.FC<LinkcardProps> = ({ title, description, icon, link }) => {
    // Truncate the wallet address for display
    const truncatedDescription = `${description.slice(0, 6)}...${description.slice(-4)}`;

    return (
        <div className="relative px-4 pt-2 pb-7 rounded-t-xl backdrop-blur">
            <div className="flex items-center justify-center rounded-xl gap-3 z-10 w-fit h-fit">
                <div className="relative max-w-10">
                    <Image
                        src={icon}
                        alt={`${title} icon`}
                        width={100}
                        height={100}
                        className="object-cover rounded w-full h-auto"
                    />
                </div>
                <div>
                    <h3 className="text-white text-2xl text-left">{title}</h3>

                    {link ? (
                        <Link
                            href={link}
                            className="text-blue-400 text-lg mt-2 text-left underline hover:text-blue-300 transition cursor-pointer tkn-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={description} 
                        >
                            {truncatedDescription}
                        </Link>
                    ) : (
                        <p className="text-stone-300 text-lg mt-2 text-left tkn-link">{description}</p>
                    )}
                </div>
            </div>

            <div className="nfts-box-line"></div>

            <Image
                src={nftline}
                alt="nftline"
                width={250}
                height={250}
                className="nfts-box-image-blue"
                sizes="40px"
            />
        </div>
    );
};

export default Linkcard;
