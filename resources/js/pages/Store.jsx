import { Head } from "@inertiajs/react";
import { useState } from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import {
    MdChevronRight,
    MdStar,
    MdStarBorder,
    MdFavoriteBorder,
    MdAddShoppingCart,
    MdFilterList,
    MdClose
} from "react-icons/md";

const products = [
    {
        id: 1,
        name: "Slow-Roasted Plain Fox Nuts",
        description: "Zero Oil • Himalayan Pink Salt • Low GI",
        price: 8.49,
        originalPrice: 12.99,
        rating: 5,
        reviews: 124,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAazgoS8Zyez8ePFamWqQXYeaGlIQT2_weoqVQQw4T0_CtdkL-wlIU5mo6J_OcJJ3ZnpIV7kZ3VYiX3vpvutkx96imiAHu7za0i5E1Dgp_QmjY2oqn30ZOlxjkoWKByIeDzL40NRJ1AKfaoarmKcZyj6e1P9tuFNr6t6wcVN4ZbYyCOG6SY19BjRwAwCNKeAZ5aUFd_jsblDz_c9QdGEUO7GA08Nu041o9s9bbTzMJoQcqT3hayS5WYvnfYXVFY25jAZNWHD5u_7qE"
    }
];

const RenderStars = ({ rating }) => (
    <div className="flex text-yellow-500">
        {[...Array(5)].map((_, i) =>
            i < rating ? (
                <MdStar key={i} size={14} />
            ) : (
                <MdStarBorder key={i} size={14} className="text-gray-300" />
            )
        )}
    </div>
);

export default function Store() {
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <>
            <Head title="Store" />
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-10">

                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                    Home <MdChevronRight size={16} />
                    <span className="text-black font-semibold ml-1">Store</span>
                </div>

                {/* Mobile Filter Button */}
                <div className="md:hidden mb-6">
                    <button
                        onClick={() => setOpenFilter(true)}
                        className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm font-semibold"
                    >
                        <MdFilterList size={18} />
                        Filters
                    </button>
                </div>

                <div className="flex gap-10">

                    {/* Sidebar Desktop */}
                    <aside className="hidden md:block w-56 space-y-8">
                        <FilterContent />
                    </aside>

                    {/* Products Section */}
                    <div className="flex-1">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-2xl font-bold">
                                Makhana Varieties
                            </h1>

                            <select className="border border-gray-200 text-sm px-3 py-2 rounded-md outline-none">
                                <option>Best Selling</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition"
                                >
                                    <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                                        <img
                                            src={product.image}
                                            className="w-full h-full object-cover"
                                        />
                                        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full border">
                                            <MdFavoriteBorder size={16} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-1 mb-2">
                                        <RenderStars rating={product.rating} />
                                        <span className="text-xs text-gray-500">
                                            ({product.reviews})
                                        </span>
                                    </div>

                                    <h3 className="text-sm font-semibold mb-1 line-clamp-2">
                                        {product.name}
                                    </h3>

                                    <p className="text-xs text-gray-500 mb-3">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-bold text-lg">
                                                ${product.price}
                                            </span>
                                        </div>

                                        <button className="bg-primary text-black p-2 rounded-md">
                                            <MdAddShoppingCart size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </main>

            {/* Mobile Drawer */}
            {openFilter && (
                <>
                    <div
                        onClick={() => setOpenFilter(false)}
                        className="fixed inset-0 bg-black/40 z-40"
                    ></div>

                    <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 shadow-xl overflow-y-auto transition">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg">Filters</h3>
                            <button onClick={() => setOpenFilter(false)}>
                                <MdClose size={22} />
                            </button>
                        </div>

                        <FilterContent />
                    </div>
                </>
            )}

            <Footer />
        </>
    );
}

/* ================= FILTER CONTENT ================= */

function FilterContent() {
    return (
        <div className="space-y-6 text-sm">
            <div>
                <h4 className="font-semibold mb-3">Category</h4>
                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Plain
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Masala
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Peri Peri
                    </label>
                </div>
            </div>

            <div>
                <h4 className="font-semibold mb-3">Price</h4>
                <input type="range" className="w-full accent-primary" />
            </div>
        </div>
    );
}
