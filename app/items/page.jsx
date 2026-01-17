'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/api/items');

                if (!response.ok) {
                    throw new Error("Could not find public/data/items.json");
                }

                const data = await response.json();
                setItems(data);
                setLoading(false);
            } catch (error) {
                console.error("Error loading items:", error);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#f6f1eb] text-[#3b2f2f] font-serif text-xl">
                Brewing your menu...
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#f6f1eb]">
            {/* Hero Section */}
            <div className="relative bg-[#2c1810] text-[#f6f1eb] py-20 px-4 mb-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wide">
                        The Coffee House Selection
                    </h1>
                    <p className="text-lg md:text-xl font-light text-[#d4c5b5] max-w-2xl mx-auto">
                        Experience the art of coffee. Carefully curated blends and handcrafted delights using only the finest ingredients.
                    </p>
                </div>
            </div>

            {/* Menu Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-[#fffaf4] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    width={400}
                                    height={400}
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col h-[280px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif font-bold text-2xl text-[#3b2f2f] leading-tight">
                                        {item.title}
                                    </h3>
                                    <span className="bg-[#e6dccf] text-[#3b2f2f] px-3 py-1 rounded-full text-sm font-bold shadow-sm whitespace-nowrap ml-2">
                                        ${item.price}
                                    </span>
                                </div>

                                <p className="text-[#5a4a42] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                    {item.description}
                                </p>

                                <Link
                                    href={`/item-details/${item.id}`}
                                    className="block w-full text-center bg-[#3b2f2f] text-[#f6f1eb] py-3 rounded-xl font-medium tracking-wide hover:bg-[#5a3e32] transition-colors duration-300 shadow-lg hover:shadow-xl translate-y-0"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItemList;