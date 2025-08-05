'use client';
import React, { useState, useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/Assets/images/dexora-logo.webp";
import logores from "@/Assets/images/dexora-logo.webp";
// import Button from '../Components/Button';
import { Loader } from '../Components/Loader';


const Header = ({ hideMenu = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const menuRef = useRef(null);



    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    const handleScroll = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <header className="fixed w-full  z-50 text-white bg-[#2e312f00]  border-b border-[#a4baac23] py-1 backdrop-blur-[2px] mt-[-5px] md:mt-0 ">
            <div className={`container px-4  mx-auto flex items-center justify-between py-4 transition-all duration-300  res-navbg `} data-aos="fade-down">
                <div className=' text-base sm:text-2xl font-semibold'>
                    <Link className='items-center gap-1 sm:gap-2' href="/">
                        <Image
                            className="w-16 md:w-20  h-auto  "
                            src={logo}
                            alt="Logo"
                            width={200}
                            height={50}
                        />
                    </Link>
                </div>
                {/* {!hideMenu && (
                <nav className="hidden md:flex space-x-2 lg:space-x-6 p-2 rounded-full nav-bg text-lg md:text-xl">
                    <Link href="#about" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'about')}>About</Link>
                    <Link href="#Features" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'Features')}>Features</Link>

                    <Link href="#roadmap" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'roadmap')}>Roadmap</Link>
                    <Link href="#faq" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'faq')}>Faqs</Link>
                </nav>
                )} */}
                {!hideMenu && (
                <div className="flex items-center gap-4">
                
                    {/* <div className='hidden md:block'>
                        <Button variant="primary" href='/Comingsoon'>
                            Login ➜
                        </Button>
                    </div> */}
                   {!hideMenu && (
                <nav className="hidden md:flex space-x-2 lg:space-x-6 p-2 rounded-full nav-bg text-lg md:text-xl">
                    <Link href="#about" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'about')}>About</Link>
                    <Link href="#Features" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'Features')}>Features</Link>

                    <Link href="#roadmap" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'roadmap')}>Roadmap</Link>
                     <Link href="#tokenomics" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'tokenomics')}>Tokenomics</Link>
                    <Link href="#faq" className="px-4 py-2 hover:text-[#606ff5] duration-300 ease-in-out transition-all" onClick={(e) => handleScroll(e, 'faq')}>FAQ&apos;s</Link>
                </nav>
                )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none pr-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className='max-w-10'
                            color="var(--token-06f080bb-b416-40bd-9e82-3f6cb518c925, rgb(255, 255, 255))"
                            style={{ width: "100%", height: "100%" }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                    )}
                {isOpen && !hideMenu && (
                    <div
                        ref={menuRef}
                        className={`fixed -top-4 -right-3 w-3/4 min-h-screen bg-[#080a11] p-6 transform z-10 transition-transform duration-100 ease-in-out backdrop-blur md:hidden`}
                        data-aos="fade-left" >
                        <Link className='items-center gap-1 sm:gap-2 ' href="/">
                            <Image
                                className="w-16  h-auto ml-2 mt-2  mb-4"
                                src={logores}
                                alt="logores"
                                width={200}
                                height={50}
                            />

                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-7 right-7 text-white focus:outline-none text-2xl"
                        >
                            ✖
                        </button>
                        {/* <div className="flex items-center justify-between ml-2">
                            <Button variant="primary" href='/Comingsoon'>
                                Login ➜
                            </Button>
                        </div> */}
                        <nav className="mt-4 space-y-4 text-white text-xl bnr-desc">
                            <Link href="#about" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'about')}>About</Link>
                            <Link href="#roadmap" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'roadmap')}>Roadmap</Link>
                            <Link href="#Features" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'Features')}>Features</Link>
                            <Link href="#tokenomics" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'tokenomics')}>Tokenomics</Link>
                            <Link href="#faq" className="block px-4 py-2" onClick={(e) => handleScroll(e, 'faq')}>FAQ&apos;s</Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
