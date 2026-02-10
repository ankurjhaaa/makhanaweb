import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff, MdArrowForward } from 'react-icons/md';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
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
        // Handle login logic here
        console.log('Login:', formData);
    };

    return (
        <>
            <Head title="Login" />
            <div className="flex min-h-screen w-full">
                {/* Left Side: Hero Image and Brand Quote */}
                <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-sage">
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-80"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBF4tWojRSc7h-E8YJRdpt8gPO2SQNayG2iG8tWTGzKULXIcGrVJrDrXc0XT1MsscdWxOIVJ-nfZv0w6v5EUjHmcL7MMf_DM0wUDwKMAR1LvpVMAoIcizG2FsLGCN5mPc7wgzEhjL-AtAip_wB3j27z2fDedhPupX0Yo24B9Po-zEdsb2UTvWGO-5vd0tW51dac9lWf2JzohEO2bbo5q7vP-Z9Zexq47qqpZ8Mck8v9rta8Q_ZxXqj1uQ5Usl0xC8owFKkPiQS0uLM')" }}
                    ></div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-background-dark/20 z-10"></div>
                    <div className="relative z-20 flex flex-col justify-end p-16 text-white h-full w-full">
                        <div className="max-w-md">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="size-8 text-primary">
                                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                                    </svg>
                                </div>
                                <span className="text-xl font-bold tracking-tight uppercase">Premium Makhana</span>
                            </div>
                            <h1 className="text-5xl font-extrabold leading-tight mb-6">
                                Fuel your soul with nature's crunch.
                            </h1>
                            <p className="text-lg font-light text-white/80 leading-relaxed">
                                The guilt-free superfood for your daily rhythm. Sourced from the purest waters, roasted to perfection.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cream dark:bg-background-dark">
                    <div className="w-full max-w-[440px] flex flex-col">
                        {/* Header */}
                        <div className="mb-10 text-center lg:text-left">
                            <div className="lg:hidden flex justify-center mb-6 text-primary">
                                <svg className="size-10" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                                </svg>
                            </div>
                            <h2 className="text-3xl font-black text-background-dark dark:text-white tracking-tight mb-2">Welcome Back</h2>
                            <p className="text-sage dark:text-sage/60 text-sm">Sign in to manage your orders and healthy favorites.</p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-background-dark dark:text-white text-sm font-semibold leading-normal">Email Address</label>
                                <input
                                    className="w-full rounded-xl border-sage/30 dark:border-sage/30 bg-white dark:bg-background-dark/50 text-background-dark dark:text-white focus:ring-primary focus:border-primary h-14 px-4 placeholder:text-sage/50"
                                    placeholder="e.g., hello@wellness.com"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Password Input */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-background-dark dark:text-white text-sm font-semibold leading-normal">Password</label>
                                    <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot Password?</Link>
                                </div>
                                <div className="relative">
                                    <input
                                        className="w-full rounded-xl border-sage/30 dark:border-sage/30 bg-white dark:bg-background-dark/50 text-background-dark dark:text-white focus:ring-primary focus:border-primary h-14 px-4 placeholder:text-sage/50 pr-12"
                                        placeholder="••••••••"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-sage cursor-pointer hover:text-primary transition-colors"
                                    >
                                        {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-2">
                                <input
                                    className="rounded border-sage/30 text-primary focus:ring-primary"
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                />
                                <label className="text-sm text-sage dark:text-sage/60" htmlFor="remember">Remember this device</label>
                            </div>

                            {/* Login Button */}
                            <button
                                className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold h-14 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                type="submit"
                            >
                                <span>Sign In</span>
                                <MdArrowForward size={20} />
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-10">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-sage/20 dark:border-sage/20"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-cream dark:bg-background-dark px-4 text-sage">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Logins */}
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 h-12 rounded-xl border border-sage/30 dark:border-sage/30 bg-white dark:bg-transparent hover:bg-cream-soft dark:hover:bg-white/5 transition-colors">
                                <img
                                    alt="Google Logo"
                                    className="size-5"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAyzHUb51WpvASZxFYbg9t_D_b3IGswriqNc32980vrvA_uidrS9BjtkifHluRT1fDMvZxILJZGGYhrU2Dacvi7Ealr8gr3P0zzaKArFnCzv3nsY1YhFefz86xc-vpJ8zVpSiPoO76X01GGfRfbm8PyWrQIB14y-w7qXqosW81vIyD6QsTbdBk43ET-VFO7G35gQfmL7ISPn62zFC5FzA24dDBpNPesa1hlFi1Ge0vFL7imbBmJ5qAC7eJwq_UcUFRsho06A28MJk"
                                />
                                <span className="text-sm font-bold text-background-dark dark:text-white">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-3 h-12 rounded-xl border border-sage/30 dark:border-sage/30 bg-white dark:bg-transparent hover:bg-cream-soft dark:hover:bg-white/5 transition-colors">
                                <img
                                    alt="Facebook Logo"
                                    className="size-5"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu5X53VmMLHtBFYyiM7hQvCSr0B133ErgYypg3KTCkG2Pj-wtepESFdkr9Te_4Hs5rm7RtGhvy4FGE-5qsZLqejNFSR54WNO6mxWnTctnBRGQbk5vnfW2M72hi8TntOk7xbB34QDn-HKH753_9dVWUHcddAtZdqNRkwgjwFr0QZCv8B3oS45JOphkhJH85mxDHgv0gcmn--enrl9Pv7erEysEb55rszJHbGIB0oXCCZbB8_9B-vwBl75Kd8kH6zh5Q2_bQztssc2A"
                                />
                                <span className="text-sm font-bold text-background-dark dark:text-white">Facebook</span>
                            </button>
                        </div>

                        {/* Signup Link */}
                        <div className="mt-auto pt-10 text-center">
                            <p className="text-sm text-sage dark:text-sage/60">
                                New to Premium Makhana?
                                <Link href="/signup" className="text-primary font-bold hover:underline ml-1">Join the community</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
