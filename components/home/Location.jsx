import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Location = () => {
    return (
        <div>
            <section id="location" className="py-16 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="h-[300px] md:h-[400px] bg-stone-200 rounded-lg overflow-hidden">
                            <div className="w-full h-full relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <MapPin className="w-12 h-12 text-stone-600" />
                                </div>
                                <div
                                    className="w-full h-full opacity-30"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23d6d3d1'/%3E%3Cpath d='M10 10h20v20H10z' fill='%23a8a29e'/%3E%3Cpath d='M40 10h20v20H40z' fill='%23a8a29e'/%3E%3Cpath d='M70 10h20v20H70z' fill='%23a8a29e'/%3E%3Cpath d='M10 40h20v20H10z' fill='%23a8a29e'/%3E%3Cpath d='M40 40h20v20H40z' fill='%23a8a29e'/%3E%3Cpath d='M70 40h20v20H70z' fill='%23a8a29e'/%3E%3Cpath d='M10 70h20v20H10z' fill='%23a8a29e'/%3E%3Cpath d='M40 70h20v20H40z' fill='%23a8a29e'/%3E%3Cpath d='M70 70h20v20H70z' fill='%23a8a29e'/%3E%3C/svg%3E")`,
                                        backgroundSize: '50px 50px'
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Location & Hours</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                                    <p className="text-stone-700">23220 Steveninth Street,<br />Lonokte, 71 22003</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                                    <p className="text-stone-700">(977) 335-7603</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                                    <p className="text-stone-700">hero@emaill.com</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Globe className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                                    <p className="text-stone-700">www.cromsmell.com</p>
                                </div>
                                <div className="pt-4 border-t border-stone-200">
                                    <p className="font-semibold text-stone-900 mb-2">Open Daily: 7am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Location;