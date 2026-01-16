import Image from 'next/image';
import React from 'react';

const Cafe = () => {
    return (
        <div>
            <section className="py-0 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Image
                        priority
                        height={400}
                        width={400}
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=600&fit=crop"
                        alt="Cafe Interior"
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
                    />
                </div>
            </section>
        </div>
    );
};

export default Cafe;