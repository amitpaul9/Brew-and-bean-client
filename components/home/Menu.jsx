"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:5000/home-items');

                if (!response.ok) {
                    throw new Error("Could not find public/data/items.json");
                }

                const data = await response.json();
                setMenuItems(data);
            } catch (error) {
                console.error("Error loading items:", error);
            }
        };

        fetchItems();
    }, []);


    return (
        <div>
            <section className="py-12 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className='text-2xl semi-bold mb-2 text-stone-900'>Our Menu</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {menuItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg group overflow-hidden shadow-sm">
                                <Image
                                    width={500}
                                    height={500}
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                                <div className="p-4">
                                    <h3 className="font-serif text-xl font-semibold mb-1">{item.title}</h3>
                                    <p className="text-stone-600 text-sm mb-2">{item.description}</p>
                                    <p className="font-semibold">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 text-right ">
                        <Link href="/items" className="bg-stone-900 cursor-pointer text-white px-8 py-3 rounded hover:bg-stone-700 transition-colors font-medium shadow-sm">
                            See All Items
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Menu;