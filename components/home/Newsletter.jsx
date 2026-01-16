const Newsletter = () => {
    return (
        <section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-stone-800 mb-4">
                    Stay Updated with Brew & Bean
                </h2>
                <p className="text-stone-600 mb-8">
                    Sign up for our newsletter to get the latest updates on seasonal drinks, pastries, and cozy stories.
                </p>
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-auto px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-stone-900 cursor-pointer text-white rounded-md hover:bg-stone-700 transition-colors duration-300"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-stone-400 mt-4">
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
}

export default Newsletter;
