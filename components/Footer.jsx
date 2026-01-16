import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-footer-bg text-background py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & Mission */}
                <div>
                    <h3 className="text-xl font-bold text-background mb-2">Brew & Bean</h3>
                    <p className="text-sm">
                        Handcrafted coffee. Cozy moments. Join our journey and share the love of coffee.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Contact</h4>
                    <ul className="text-sm space-y-1">
                        <li>23402 Crescent Street, London, TX 23908</li>
                        <li>(872) 235-4660</li>
                        <li>info@brewandbean.com</li>
                        <li>www.brewandbean.com</li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex gap-4 text-background">
                        <Facebook className="w-6 h-6 hover:text-stone-700 cursor-pointer" />
                        <Twitter className="w-6 h-6 hover:text-stone-700 cursor-pointer" />
                        <Instagram className="w-6 h-6 hover:text-stone-700 cursor-pointer" />
                        <Linkedin className="w-6 h-6 hover:text-stone-700 cursor-pointer" />

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-xs text-stone-500">
                © 2022 Brew & Bean. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
