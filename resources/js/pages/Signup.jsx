import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { MdPerson, MdEmail, MdCall, MdLock, MdVisibility, MdVisibilityOff, MdArrowForward, MdCheckCircle, MdVerifiedUser, MdWorkspacePremium, MdSecurity } from 'react-icons/md';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        subscribe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup:', formData);
    };

    return (
        <>
            <Head title="Create Account" />
            <div className="flex min-h-screen flex-col lg:flex-row">
                {/* Left Side: Lifestyle Image & Content */}
                <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-background-dark text-white overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-60">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8kNFQ1XslFY4VN-V47qbfLA2yZJo7mEuwt0cRLjyVpl_QiQLdVw2j5XjC5EzNo-5C4TH5NwFPAQJTqqXllvXrj_2hrEO0vv65Hqwg8pRVM10ECA8BFwBwbDlUkAscvlQQdmj--opD-4b07Zl5gNy-MKOxYGTPmPKWv-gSQeJWqAfbfVs-I0QRANyc5QLH8EoSvuDV8IJEDFxZx5ZBMh8AS0y_GUhxO5CA8znNbzOurv9vbZ9eQSubMZRWKTGWRteSscCxioJBYzk')" }}
                        ></div>
                    </div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="relative z-20">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-primary rounded-lg text-black">
                                <svg className="size-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                                </svg>
                            </div>
                            <span className="text-2xl font-black tracking-tight">Makhana Premium</span>
                        </Link>
                    </div>

                    <div className="relative z-20 max-w-lg">
                        <h1 className="text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                            Fuel Your Body with <span className="text-primary">Ancient Superfoods.</span>
                        </h1>
                        <p className="text-lg text-white/80 leading-relaxed mb-8">
                            Join over 10,000 health enthusiasts who have switched to guilt-free, nutrient-dense snacking.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <MdCheckCircle className="text-primary" size={24} />
                                <span className="text-sm font-medium">100% Organic & Non-GMO</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdCheckCircle className="text-primary" size={24} />
                                <span className="text-sm font-medium">Zero Artificial Preservatives</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdCheckCircle className="text-primary" size={24} />
                                <span className="text-sm font-medium">High Protein & Gluten Free</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-20 flex items-center gap-4 text-sm text-white/60">
                        <p>© 2024 Makhana Premium. All rights reserved.</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 lg:px-20 bg-background-light dark:bg-background-dark">
                    <div className="w-full max-w-[480px]">
                        {/* Mobile Logo */}
                        <div className="lg:hidden flex justify-center mb-8">
                            <div className="flex items-center gap-2">
                                <svg className="size-8 text-primary" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                                </svg>
                                <span className="text-xl font-bold text-background-dark dark:text-white">Makhana Premium</span>
                            </div>
                        </div>

                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-3xl font-black mb-2 text-background-dark dark:text-white">Create Account</h2>
                            <p className="text-sage dark:text-sage/60">Join the snacking revolution today.</p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-background-dark dark:text-white" htmlFor="name">Full Name</label>
                                <div className="relative">
                                    <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-sage" size={20} />
                                    <input
                                        className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-background-dark/50 border border-sage/30 dark:border-sage/30 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-background-dark dark:text-white"
                                        id="name"
                                        placeholder="Enter your full name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-background-dark dark:text-white" htmlFor="email">Email Address</label>
                                <div className="relative">
                                    <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-sage" size={20} />
                                    <input
                                        className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-background-dark/50 border border-sage/30 dark:border-sage/30 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-background-dark dark:text-white"
                                        id="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-background-dark dark:text-white" htmlFor="phone">Phone Number</label>
                                <div className="relative flex">
                                    <MdCall className="absolute left-4 top-1/2 -translate-y-1/2 text-sage" size={20} />
                                    <input
                                        className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-background-dark/50 border border-sage/30 dark:border-sage/30 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-background-dark dark:text-white"
                                        id="phone"
                                        placeholder="+1 (555) 000-0000"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-background-dark dark:text-white" htmlFor="password">Password</label>
                                <div className="relative">
                                    <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-sage" size={20} />
                                    <input
                                        className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-background-dark/50 border border-sage/30 dark:border-sage/30 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-background-dark dark:text-white"
                                        id="password"
                                        placeholder="••••••••"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sage hover:text-primary transition-colors"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                    </button>
                                </div>
                                <p className="text-[11px] text-sage dark:text-sage/60 px-1">Must be at least 8 characters with a number and symbol.</p>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-3 py-2">
                                <div className="flex items-center h-5">
                                    <input
                                        className="w-5 h-5 rounded border-sage/30 text-primary focus:ring-primary dark:bg-background-dark/50 dark:border-sage/30"
                                        id="subscribe"
                                        type="checkbox"
                                        name="subscribe"
                                        checked={formData.subscribe}
                                        onChange={handleChange}
                                    />
                                </div>
                                <label className="text-sm leading-tight text-sage dark:text-sage/60" htmlFor="subscribe">
                                    Subscribe to health tips, exclusive early-bird offers, and guilt-free recipes.
                                </label>
                            </div>

                            {/* CTA */}
                            <button
                                className="w-full py-4 bg-primary hover:bg-primary/90 text-black font-bold rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                                type="submit"
                            >
                                Create Account
                                <MdArrowForward size={20} />
                            </button>
                        </form>

                        {/* Footer Links */}
                        <div className="mt-8 text-center">
                            <p className="text-sage dark:text-sage/60 text-sm">
                                Already have an account?
                                <Link href="/login" className="text-primary font-bold hover:underline ml-1">Log In</Link>
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 flex items-center justify-center gap-8 opacity-60">
                            <div className="flex flex-col items-center gap-1">
                                <MdSecurity className="text-2xl text-background-dark dark:text-white" size={24} />
                                <span className="text-[10px] uppercase font-bold tracking-widest text-background-dark dark:text-white/70">Secure SSL</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <MdVerifiedUser className="text-2xl text-background-dark dark:text-white" size={24} />
                                <span className="text-[10px] uppercase font-bold tracking-widest text-background-dark dark:text-white/70">Privacy First</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <MdWorkspacePremium className="text-2xl text-background-dark dark:text-white" size={24} />
                                <span className="text-[10px] uppercase font-bold tracking-widest text-background-dark dark:text-white/70">Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;