'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import why1 from '@/Assets/images/why6.webp';
import why2 from '@/Assets/images/vgame.webp';
import iconPolygon from '@/Assets/images/polygon.webp';
import iconSecure from '@/Assets/images/smartc.webp';
import iconGlobal from '@/Assets/images/global.webp';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const Card = ({
    title,
    content,
    icon,
    children,
    delay = 0,
    className = '',
}: {
    title: string;
    content: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.03, rotate: 0.2 }}
        transition={{ type: 'spring', stiffness: 120, delay }}
        className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300 text-start ${className}`}
    >
        {icon && (
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.1, duration: 0.7 }}
                className="mx-auto mb-2"
            >
                {icon}
            </motion.div>
        )}
        <h4 className="text-2xl font-semibold mb-2 !leading-[1.2]">{title}</h4>
        <p className="text-md text-gray-400">{content}</p>
        {children}
    </motion.div>
);

const WhyDexora = () => {
    return (
        <section className="w-full text-white py-8 sm:py-16 px-4">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(150px,auto)]"
            >
                {/* Top Left */}
                <Card
                    title="Built on Polygon"
                    content="Fast, scalable, and cost-efficient blockchain foundation powering the Dexora ecosystem."
                    className="ftrncard"
                    delay={0.1}
                    icon={
                        <Image
                            src={iconPolygon}
                            alt="Polygon Icon"
                            width={48}
                            height={48}
                            className="object-contain w-12 h-12"
                        />
                    }
                />

                {/* Center Hero with video */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-first md:order-none col-span-1 md:col-span-1 row-span-2 backdrop-blur-lg border border-[#ffffff41] rounded-xl flex flex-col items-center justify-center text-center p-6 ftrncard"
                >
                    <h2 className="text-6xl font-bold mb-4">Why Dexora?</h2>
                    <div className="w-full h-auto max-w-96 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-center max-w-lg grayscale rounded-xl"
                        >
                            <source src="/video/why.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                    <p className="text-lg text-gray-300 mt-2">
                       Staking Rewards for Token Holders  </p>
                </motion.div>


                <Card
                    title="Secure Smart Contracts"
                    content="Battle-tested smart contracts ensure tamper-proof, automated, and safe interactions."
                    delay={0.2}
                    className="ftrncard2"
                    icon={
                        <Image
                            src={iconSecure}
                            alt="Secure Icon"
                            width={48}
                            height={48}
                            className="object-contain w-12 h-12"
                        />
                    }
                />

                {/* Bottom Left */}
                <Card
                    title="Fully Decentralized & Non-Custodial"
                    content="Users maintain full control of their assets—no middlemen, no compromises."
                    delay={0.3}
                    className="ftrncard"
                >
                    <motion.div
                        initial={{ rotate: -12, y: 30 }}
                        whileInView={{ rotate: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="relative max-w-96"
                    >
                        <Image
                            src={why1}
                            alt="Decentralized Icon"
                            width={270}
                            height={270}
                            className="object-cover rounded w-full h-auto"
                        />
                    </motion.div>
                </Card>

                {/* Bottom Center Cards */}
                <div className="col-span-1 md:col-span-1 grid grid-cols-1 gap-4">
                    <Card
                        title="Skill-Based Earning Game"
                        content="Play the Tap Tap game to earn rewards based on skill, not luck."
                        delay={0.4}
                        className="ftrncard2"
                        icon={
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.45 }}
                                className="relative max-w-12"
                            >
                                <Image
                                    src={why2}
                                    alt="Game Icon"
                                    width={270}
                                    height={270}
                                    className="object-cover rounded w-full h-auto"
                                />
                            </motion.div>
                        }
                    />

                    <Card
                        title="Global Access, No KYC"
                        content="Join from anywhere in the world with zero identity verification required."
                        delay={0.5}
                        className="ftrncard2"
                        icon={
                            <Image
                                src={iconGlobal}
                                alt="Global Icon"
                                width={48}
                                height={48}
                                className="object-contain w-12 h-12"
                            />
                        }
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default WhyDexora;
