import { Head } from "@inertiajs/react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import {
    MdChevronRight,
    MdDeleteOutline,
    MdRemove,
    MdAdd,
    MdEco,
    MdVerified,
    MdSecurity,
    MdLocalShipping,
    MdArrowForward,
    MdLock
} from "react-icons/md";

const Checkout = () => {
    return (
        <>
            <Head title="Checkout" />
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-sage mb-8 font-medium">
                    <a className="hover:text-primary transition-colors" href="#">Home</a>
                    <MdChevronRight className="text-lg" />
                    <span className="text-background-dark dark:text-background-light">Checkout</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Side: Cart List */}
                    <div className="flex-1">
                        <div className="mb-8">
                            <h2 className="text-3xl font-black tracking-tight mb-2 text-background-dark dark:text-background-light">Your Healthy Stash</h2>
                            <p className="text-sage dark:text-sage/80 font-medium">Review your superfood selection before checkout.</p>
                        </div>

                        {/* Free Shipping Progress */}
                        <div className="glass-card p-6 rounded-xl mb-8 ">
                            <div className="flex justify-between items-end mb-2">
                                <p className="text-sm font-bold text-background-dark dark:text-background-light">
                                    You're $14.00 away from <span className="text-primary">Free Shipping!</span>
                                </p>
                                <span className="text-xs font-bold text-sage">$36.00 / $50.00</span>
                            </div>
                            <div className="w-full bg-cream-soft dark:bg-white/10 h-2.5 rounded-full overflow-hidden border border-sage/10">
                                <div className="bg-primary h-full rounded-full shadow-lg shadow-primary/20" style={{ width: "72%" }}></div>
                            </div>
                        </div>

                        {/* Cart Items */}
                        <div className="space-y-4">
                            {/* Item 1 */}
                            <div className="glass-card p-4 rounded-xl flex items-center gap-6 group hover:border-primary/30 transition-colors">
                                <div className="h-24 w-24 rounded-lg bg-cream-soft dark:bg-white/5 overflow-hidden flex-shrink-0 border border-sage/10">
                                    <img className="h-full w-full object-cover mix-blend-multiply dark:mix-blend-normal"
                                        alt="Package of Himalayan Salt Fox Nuts"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFKywAvu5pctBTrVHUIh6lRM7_kYFNlW8qyGfBM3Tch29yFLGvMxtroizOBIXnh1ClPFVYGkJec-WBporHnYDZ40zpOS5hgsFSB8Y-KnX0ieaI25vvouGOtNhzqzjpsYICZhgPMXBHZsvBlqqc84KoK6bF6M9H39ut0xoqN62F4e8Eb59va3nnonrETJVwMJpYjlS0DL0hzJlaCyqXVcFZe3AJ8MlIR5azAmupFESmykh1gOPuBHx75Bc8mtOijQoT4VuQCDiQNsM" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg text-background-dark dark:text-background-light leading-tight">Himalayan Salt Makhana</h3>
                                            <p className="text-sm text-sage font-medium mt-1">Large | 500g Pack</p>
                                        </div>
                                        <button className="text-sage/60 hover:text-red-500 transition-colors p-1">
                                            <MdDeleteOutline size={22} />
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center bg-cream-soft dark:bg-white/5 rounded-lg p-1 border border-sage/10">
                                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 transition-colors text-sage">
                                                <MdRemove size={16} />
                                            </button>
                                            <span className="px-4 font-bold text-sm text-background-dark dark:text-background-light">1</span>
                                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 transition-colors text-primary">
                                                <MdAdd size={16} />
                                            </button>
                                        </div>
                                        <p className="font-black text-xl text-background-dark dark:text-background-light">$12.00</p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="glass-card p-4 rounded-xl flex items-center gap-6 group hover:border-primary/30 transition-colors">
                                <div className="h-24 w-24 rounded-lg bg-cream-soft dark:bg-white/5 overflow-hidden flex-shrink-0 border border-sage/10">
                                    <img className="h-full w-full object-cover mix-blend-multiply dark:mix-blend-normal"
                                        alt="Spicy Peri Peri Makhana Bowl"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDNWNBSA3kleMSH1glRm2fbFGVVtUhPBw0seOJr9ncpm7zQV7WLUVUYJXasqYUWmcn7la-ZUeIRFz08i7mKUxjKWspbhMzFZ6BAqQ6JIbxSxYibzL_NhRf8zdT2QhUwkpZs4mEc626pKgGo2yzrhcUxmq31gdxM287ipysie2-LA38ZvkHSp-Ja3xY6EbgmHeDfr7ICh-4YYrvCo-yZaUPpvYSv2NK1wK96czXhlN61mMjz_U6ezi-AkEbxHkHyRphUIqg6x9w8IA" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg text-background-dark dark:text-background-light leading-tight">Peri Peri Fox Nuts</h3>
                                            <p className="text-sm text-sage font-medium mt-1">Medium | 250g Pack</p>
                                        </div>
                                        <button className="text-sage/60 hover:text-red-500 transition-colors p-1">
                                            <MdDeleteOutline size={22} />
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center bg-cream-soft dark:bg-white/5 rounded-lg p-1 border border-sage/10">
                                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 transition-colors text-sage">
                                                <MdRemove size={16} />
                                            </button>
                                            <span className="px-4 font-bold text-sm text-background-dark dark:text-background-light">2</span>
                                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-white/10 transition-colors text-primary">
                                                <MdAdd size={16} />
                                            </button>
                                        </div>
                                        <p className="font-black text-xl text-background-dark dark:text-background-light">$24.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center p-4 text-center">
                                <MdEco size={32} className="text-primary mb-3 opacity-90" />
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sage">100% Organic</span>
                            </div>
                            <div className="flex flex-col items-center p-4 text-center">
                                <MdVerified size={32} className="text-primary mb-3 opacity-90" />
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sage">Non-GMO</span>
                            </div>
                            <div className="flex flex-col items-center p-4 text-center">
                                <MdSecurity size={32} className="text-primary mb-3 opacity-90" />
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sage">Secure Pay</span>
                            </div>
                            <div className="flex flex-col items-center p-4 text-center">
                                <MdLocalShipping size={32} className="text-primary mb-3 opacity-90" />
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sage">Fast Delivery</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Checkout Panel */}
                    <div className="lg:w-[420px]">
                        <div className="glass-card rounded-2xl sticky top-24 overflow-hidden">
                            {/* Form Header / Stepper */}
                            <div className="p-8 border-b border-sage/10 bg-white/40 dark:bg-white/5">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30">1</div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Shipping</span>
                                    </div>
                                    <div className="flex-1 h-px bg-sage/20 mx-4 -mt-6"></div>
                                    <div className="flex flex-col items-center gap-2 opacity-50">
                                        <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center text-sm font-bold border border-sage/20">2</div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-sage">Payment</span>
                                    </div>
                                    <div className="flex-1 h-px bg-sage/20 mx-4 -mt-6"></div>
                                    <div className="flex flex-col items-center gap-2 opacity-50">
                                        <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center text-sm font-bold border border-sage/20">3</div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-sage">Review</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-background-dark dark:text-background-light">Shipping Address</h3>
                            </div>

                            {/* Checkout Form Content */}
                            <div className="p-8 space-y-5">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-extrabold text-sage uppercase tracking-wider ml-1">First Name</label>
                                        <input className="w-full bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-3 text-sm font-medium text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none" placeholder="John" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-extrabold text-sage uppercase tracking-wider ml-1">Last Name</label>
                                        <input className="w-full bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-3 text-sm font-medium text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none" placeholder="Doe" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] font-extrabold text-sage uppercase tracking-wider ml-1">Street Address</label>
                                    <input className="w-full bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-3 text-sm font-medium text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none" placeholder="123 Health Way" type="text" />
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-extrabold text-sage uppercase tracking-wider ml-1">City</label>
                                        <input className="w-full bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-3 text-sm font-medium text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none" placeholder="Austin" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-extrabold text-sage uppercase tracking-wider ml-1">Zip Code</label>
                                        <input className="w-full bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary px-4 py-3 text-sm font-medium text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none" placeholder="78701" type="text" />
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent my-8"></div>

                                {/* Order Summary Details */}
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm text-sage font-medium">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-background-dark dark:text-background-light">$36.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-sage font-medium">
                                        <span>Shipping</span>
                                        <span className="font-bold text-primary">$5.99</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-sage font-medium">
                                        <span>Taxes</span>
                                        <span className="font-bold text-background-dark dark:text-background-light">$2.80</span>
                                    </div>

                                    <div className="flex justify-between items-end pt-6 border-t border-sage/10 mt-6">
                                        <div>
                                            <p className="text-[10px] font-extrabold text-sage uppercase tracking-widest mb-1">Total Pay</p>
                                            <p className="text-4xl font-black text-background-dark dark:text-background-light tracking-tight">$44.79</p>
                                        </div>
                                        <span className="text-xs font-bold text-sage/70 pb-2">USD</span>
                                    </div>
                                </div>

                                <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all active:scale-[0.98] mt-6 flex items-center justify-center gap-3 group">
                                    <span>Complete Purchase</span>
                                    <MdArrowForward size={22} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex items-center justify-center gap-2 text-[10px] text-sage/60 uppercase font-bold tracking-widest pt-2">
                                    <MdLock size={12} />
                                    Encrypted & Secure Checkout
                                </div>
                            </div>
                        </div>

                        {/* Secondary Support Info */}
                        <div className="mt-8 p-5 rounded-xl border-2 border-dashed border-sage/20 text-center hover:bg-sage/5 transition-colors group cursor-pointer">
                            <p className="text-sm font-medium text-sage mb-1 group-hover:text-primary transition-colors">Need help with your order?</p>
                            <span className="text-sm font-bold text-background-dark dark:text-background-light underline decoration-primary decoration-2 underline-offset-4">Chat with a nutrition expert</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Checkout;
