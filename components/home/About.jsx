import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div>

            <section className="py-18 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="order-2 lg:order-1">
                            <Image
                                height={400}
                                width={400}
                                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=700&fit=crop"
                                alt="Coffee Shop Atmosphere"
                                className="w-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">About Us</h2>
                            <div className="space-y-4 text-stone-700">
                                <p>
                                    We are equal our passion for coffee and community we have our grow or series community community to다ve all services we extraordinare stranszny accodovative excommunicare stranszary accodovative audipde fambroated limuscrito conserrs are-bonus qa corispace.ethersce ethoswe aetnomcsmeri our, toarm for our cafes and mocste rasor cominity.
                                </p>
                                <p>
                                    We are getting fun nccraan coffee and a wratior to our mista no of trons vix forexecutitt somices as lomecornanar a services a tearn mocsment bur cafes community as loncoro movers crafts, community and community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;