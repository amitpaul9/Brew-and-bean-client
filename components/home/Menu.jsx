import Image from 'next/image';
import React from 'react';

const Menu = () => {
    const menuItems = [
        {
            image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop",
            title: "Seasonal Latte",
            description: "Pumpkin spice & caramel.",
            price: "$5.50"
        },
        {
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
            title: "Artisan Croissant",
            description: "Flaky & buttery.",
            price: "$4.00"
        },
        {
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
            title: "Pour Over",
            description: "Single origin, rotating.",
            price: "$5.00"
        }
    ];
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
                        <button className="bg-stone-900 cursor-pointer text-white px-8 py-3 rounded hover:bg-stone-700 transition-colors font-medium shadow-sm">
                            See All Items
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Menu;