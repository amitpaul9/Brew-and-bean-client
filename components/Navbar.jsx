"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Coffee } from "lucide-react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const items = [
        { id: 1, name: "Menu", url: "/items" },
        { id: 2, name: "About Us", url: "/about" },
    ];

    return (
        <nav className="bg-background text-foreground py-6 px-4 md:px-12 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <Link href="/" className="flex items-center gap-2 group">
                    <Coffee className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-serif text-2xl font-bold tracking-tight">Brew & Bean</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-sans font-medium">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            className="hover:text-accent transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Link
                        href="/login"
                        className="hover:text-accent transition-colors duration-200"
                    >
                        Login
                    </Link>

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-accent/20 shadow-lg animate-in slide-in-from-top-2">
                    <div className="flex flex-col p-4 gap-4 items-center font-sans font-medium">
                        {items.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                className="hover:text-accent transition-colors duration-200 py-2 w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {user ? (
                            <button
                                onClick={() => {
                                    logout();
                                    setIsOpen(false);
                                }}
                                className="hover:text-accent transition-colors duration-200 py-2 w-full text-center"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                className="hover:text-accent transition-colors duration-200 py-2 w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
export default Navbar;