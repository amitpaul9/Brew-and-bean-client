"use client";

const Login = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#fdf6f0] px-6">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center text-[#3e1f1f] mb-6">
                    Welcome Back
                </h1>
                <p className="text-center text-[#5c3b3b] mb-8">
                    Sign in to continue enjoying cozy moments at Brew & Bean.
                </p>

                {/* Form */}
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#4b2e2e] mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-[#d9cfc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3e1f1f]"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-[#4b2e2e] mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-[#d9cfc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3e1f1f]"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#3e1f1f] text-white py-2 rounded-lg font-semibold hover:bg-[#5c3b3b] transition-colors"
                    >
                        Login
                    </button>
                </form>

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-[#5c3b3b]">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-[#3e1f1f] font-medium hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Login;
