"use client";
import Image from "next/image";
const About = () => {
    return (
        <main className="bg-[#fdf6f0] text-[#4b2e2e] font-sans px-6 py-12 md:px-16">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#3e1f1f] mb-4">
                    About Brew & Bean
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#5c3b3b]">
                    We are good people who care deeply about coffee and community. Our mission is to create an inclusive space where everyone feels welcome, relaxed, and inspired.
                </p>
            </section>

            {/* Content Section */}
            <section className="flex flex-col md:flex-row items-center gap-10">
                {/* Text */}
                <div className="flex-1 max-w-xl">
                    <h2 className="text-2xl font-semibold text-[#3e1f1f] mb-4">
                        Our Philosophy
                    </h2>
                    <p className="text-base leading-relaxed text-[#5c3b3b] mb-4">
                        We source our coffee from sustainable farms and partner with local vendors to ensure every cup is fresh and ethically made. Our team is passionate about the craft of coffee and dedicated to providing exceptional service.
                    </p>
                    <p className="text-base leading-relaxed text-[#5c3b3b]">
                        Whether youre here for a quiet moment, a lively conversation, or a cozy corner to work, Brew & Bean is your home away from home.
                    </p>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1759376928130-415a2e369c3e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Coffee shop interior"
                        width={600}
                        height={400}
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>
            </section>
        </main>
    );
}

export default About;