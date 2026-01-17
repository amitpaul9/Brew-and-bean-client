'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div>
            <section className="relative h-[90vh] min-h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        id='hero-img'
                        src="https://i.ibb.co.com/PZk89XrP/hero-bg-1768554819348.jpg"
                        alt="Coffee Shop Background"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"   // Crucial for full-width Hero images
                        quality={90}
                    /></div>


                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                                Handcrafted Coffee,<br />
                                Cozy Moments.<br />
                                Welcome to Brew & Bean.
                            </h1>
                            <Link href="/items" className="bg-stone-50 text-stone-900 hover:bg-stone-700 hover:text-white cursor-pointer px-6 py-3 rounded transition-colors">
                                Explore Our Menu
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;