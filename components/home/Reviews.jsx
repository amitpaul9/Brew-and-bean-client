import Image from "next/image";

const Reviews = () => {
    const reviews = [
        {
            text: "Absolutely love the pumpkin spice latte! Cozy vibes and friendly staff make it my go-to spot.",
            name: "Emily R.",
            role: "Local Guide",
            image: "https://i.ibb.co.com/hxNTVwrJ/woman.png"
        },
        {
            text: "The croissants are heavenly. Brew & Bean is a gem for coffee lovers and pastry fans alike.",
            name: "James T.",
            role: "Food Blogger",
            image: "https://i.ibb.co.com/fzBLKRT6/profile.png"
        },
        {
            text: "Pour over perfection! Great ambiance and a real sense of community here.",
            name: "Sophia L.",
            role: "Frequent Visitor",
            image: "https://i.ibb.co.com/ccHpCtsK/profile-1.png"
        }
    ];

    return (
        <section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-brown-700 mb-12">
                    Customer Reviews
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <p className="text-brown-800 text-base mb-4 italic">
                                “{review.text}”
                            </p>
                            <div className="flex items-center gap-4">
                                <Image
                                    width={400}
                                    height={400}
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-brown-900 font-semibold">{review.name}</h4>
                                    <span className="text-sm text-brown-500">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews;