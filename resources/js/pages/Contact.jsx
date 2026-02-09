import { Head } from '@inertiajs/react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { useState } from 'react';
import { MdLocationOn, MdCall, MdEmail, MdShare, MdCameraAlt, MdSend, MdMap } from 'react-icons/md';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '', subject: '' });
    };

    return (
        <>
            <Head title="Contact Us" />
            <Navbar />
            <main className="min-h-screen bg-background-light dark:bg-background-dark text-background-dark dark:text-background-light">
                <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 px-6 sm:px-20  lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side: Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-5xl font-black tracking-tight text-background-dark dark:text-background-light mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-lg text-sage font-medium leading-relaxed max-w-md">
                                    Have questions about our premium fox nuts or your recent order? We're here to help you snack healthier.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Office Address */}
                                <div className="flex items-start gap-6 group">
                                    <div className="size-14 rounded-2xl bg-cream-soft dark:bg-white/5 shadow-sm border border-sage/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <MdLocationOn className="text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-sage mb-1">Office Address</h4>
                                        <p className="text-lg font-semibold text-background-dark dark:text-background-light">
                                            124 Wellness Plaza, Health District<br />San Francisco, CA 94103
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="flex items-start gap-6 group">
                                    <div className="size-14 rounded-2xl bg-cream-soft dark:bg-white/5 shadow-sm border border-sage/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <MdCall className="text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-sage mb-1">Phone Number</h4>
                                        <p className="text-lg font-semibold text-background-dark dark:text-background-light">+1 (800) 555-HEALTH</p>
                                        <p className="text-sm text-sage font-medium">Mon-Fri: 9am to 6pm EST</p>
                                    </div>
                                </div>

                                {/* Email Support */}
                                <div className="flex items-start gap-6 group">
                                    <div className="size-14 rounded-2xl bg-cream-soft dark:bg-white/5 shadow-sm border border-sage/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <MdEmail className="text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-sage mb-1">Email Support</h4>
                                        <p className="text-lg font-semibold text-background-dark dark:text-background-light">hello@premiummakhana.com</p>
                                        <p className="text-sm text-sage font-medium">Response within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a className="size-10 rounded-full bg-sage/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-sage" href="#">
                                    <MdShare className="text-xl" />
                                </a>
                                <a className="size-10 rounded-full bg-sage/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-sage" href="#">
                                    <MdCameraAlt className="text-xl" />
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="glass-card p-8 md:p-12 rounded-[2rem] shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-sage uppercase tracking-widest" htmlFor="name">Full Name</label>
                                        <input
                                            className="w-full px-4 py-4 bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-sage uppercase tracking-widest" htmlFor="email">Email Address</label>
                                        <input
                                            className="w-full px-4 py-4 bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-sage uppercase tracking-widest" htmlFor="subject">Subject</label>
                                    <input
                                        className="w-full px-4 py-4 bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-sage uppercase tracking-widest" htmlFor="message">Message</label>
                                    <textarea
                                        className="w-full px-4 py-4 bg-cream-soft dark:bg-black/20 border border-sage/20 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary text-background-dark dark:text-background-light placeholder:text-sage/40 transition-all outline-none min-h-[160px] resize-none"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>
                                <button
                                    className="w-full py-5 bg-primary hover:bg-primary/90 text-background-dark font-black rounded-2xl hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg group"
                                    type="submit"
                                >
                                    <span>Send Message</span>
                                    <MdSend size={24} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <section className="w-full h-[450px] bg-cream-soft dark:bg-background-dark overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWCdi3i1TCaWEHBDUYZl1IPfewXZYWGjJgEZQU4zqwRCswz68DyQYCVqoJi1u3yNiF1l9Tg6fb3G-4AW1Hd75REVj3qARs2O8kda91iyA6YbGZ05YLfI5Ari6sMUtsLPGicek7HmtHIVadm7pu0vaEyMcoBgwTQ4ObkUzxHGNq4VVW9TFL28NgebsSV3hMGbGbf9vAKMsV0DDIBWidFMTfaV9OVeTLA6zBmmLru0MMfaj308qbnLtG7gUM6h5bLxLTP8LUh6fp2lA')", opacity: 0.6 }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="glass-card p-6 rounded-2xl shadow-2xl text-center max-w-xs animate-bounce-slow">
                            <div className="size-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <MdLocationOn size={24} />
                            </div>
                            <p className="font-bold text-background-dark dark:text-background-light">Visit our Flagship Store</p>
                            <p className="text-sm text-sage mt-1">124 Wellness Plaza, SF</p>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                        <button className="bg-cream-soft dark:bg-background-dark px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2 border border-sage/20 text-background-dark dark:text-background-light hover:bg-white dark:hover:bg-white/10 transition-colors">
                            <MdMap size={18} className="text-primary" />
                            Open in Maps
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
