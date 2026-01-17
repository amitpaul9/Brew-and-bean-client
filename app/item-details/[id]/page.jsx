"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ItemDetailsPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        async function fetchItem() {
            try {
                const res = await fetch(
                    `http://localhost:5000/items/${id}`
                );
                const data = await res.json();
                setItem(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchItem();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-[#f6f1eb] px-4 py-10 flex items-center justify-center">
            <div className="max-w-6xl w-full bg-[#fffaf4] rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12">

                    <div className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-3xl font-serif text-[#3b2f2f] mb-4">
                            {item.title}
                        </h1>

                        <p className="text-xl text-[#7a4a2e] mb-6">
                            ৳ {item.price}
                        </p>

                        <p className="text-[#5a4a42] mb-8">
                            {item.description}
                        </p>

                        <button className="bg-[#3b2f2f] text-white px-8 py-3 rounded-full hover:bg-[#5a3e32] transition">
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
