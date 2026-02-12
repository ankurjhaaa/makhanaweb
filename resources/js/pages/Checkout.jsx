import { Head } from "@inertiajs/react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import {
    MdChevronRight,
    MdDeleteOutline,
    MdRemove,
    MdAdd,
    MdArrowForward,
    MdLock
} from "react-icons/md";

const Checkout = () => {
    return (
        <>
            <Head title="Checkout" />
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-12">

                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-10">
                    Home <MdChevronRight size={16} />
                    <span className="ml-1 text-black font-medium">Checkout</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-14">

                    {/* LEFT SIDE */}
                    <div className="flex-1">

                        <h2 className="text-2xl font-semibold mb-8">
                            Your Cart
                        </h2>

                        {/* Cart Item */}
                        <div className="border border-gray-100 p-5 flex gap-6 mb-6">

                            <div className="w-24 h-24 bg-gray-100 overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFKywAvu5pctBTrVHUIh6lRM7_kYFNlW8qyGfBM3Tch29yFLGvMxtroizOBIXnh1ClPFVYGkJec-WBporHnYDZ40zpOS5hgsFSB8Y-KnX0ieaI25vvouGOtNhzqzjpsYICZhgPMXBHZsvBlqqc84KoK6bF6M9H39ut0xoqN62F4e8Eb59va3nnonrETJVwMJpYjlS0DL0hzJlaCyqXVcFZe3AJ8MlIR5azAmupFESmykh1gOPuBHx75Bc8mtOijQoT4VuQCDiQNsM"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-medium text-lg">
                                            Himalayan Salt Makhana
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            500g Pack
                                        </p>
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500">
                                        <MdDeleteOutline size={20} />
                                    </button>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex items-center border border-gray-200">
                                        <button className="px-3 py-2 text-gray-500">
                                            <MdRemove size={16} />
                                        </button>
                                        <span className="px-4 font-medium text-sm">
                                            1
                                        </span>
                                        <button className="px-3 py-2 text-gray-500">
                                            <MdAdd size={16} />
                                        </button>
                                    </div>

                                    <span className="font-semibold text-lg">
                                        $12.00
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* SECOND ITEM */}
                        <div className="border border-gray-100 p-5 flex gap-6">

                            <div className="w-24 h-24 bg-gray-100 overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDNWNBSA3kleMSH1glRm2fbFGVVtUhPBw0seOJr9ncpm7zQV7WLUVUYJXasqYUWmcn7la-ZUeIRFz08i7mKUxjKWspbhMzFZ6BAqQ6JIbxSxYibzL_NhRf8zdT2QhUwkpZs4mEc626pKgGo2yzrhcUxmq31gdxM287ipysie2-LA38ZvkHSp-Ja3xY6EbgmHeDfr7ICh-4YYrvCo-yZaUPpvYSv2NK1wK96czXhlN61mMjz_U6ezi-AkEbxHkHyRphUIqg6x9w8IA"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-medium text-lg">
                                            Peri Peri Fox Nuts
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            250g Pack
                                        </p>
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500">
                                        <MdDeleteOutline size={20} />
                                    </button>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex items-center border border-gray-200">
                                        <button className="px-3 py-2 text-gray-500">
                                            <MdRemove size={16} />
                                        </button>
                                        <span className="px-4 font-medium text-sm">
                                            2
                                        </span>
                                        <button className="px-3 py-2 text-gray-500">
                                            <MdAdd size={16} />
                                        </button>
                                    </div>

                                    <span className="font-semibold text-lg">
                                        $24.00
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:w-[380px]">

                        <div className="border border-gray-100 p-8">

                            <h3 className="text-xl font-semibold mb-6">
                                Order Summary
                            </h3>

                            <div className="space-y-3 text-sm mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span>$36.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Shipping</span>
                                    <span>$5.99</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Taxes</span>
                                    <span>$2.80</span>
                                </div>
                            </div>

                            <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-4 mb-8">
                                <span>Total</span>
                                <span>$44.79</span>
                            </div>

                            <button className="w-full bg-primary text-black py-4 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                Complete Purchase
                                <MdArrowForward size={18} />
                            </button>

                            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                                <MdLock size={12} />
                                Secure Checkout
                            </div>

                        </div>

                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
};

export default Checkout;
