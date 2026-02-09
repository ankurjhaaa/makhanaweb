import { Head } from "@inertiajs/react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import {
    MdChevronRight,
    MdCategory,
    MdInventory2,
    MdPayments,
    MdEco,
    MdStar,
    MdStarBorder,
    MdFavoriteBorder,
    MdAddShoppingCart,
    MdFilterList
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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAazgoS8Zyez8ePFamWqQXYeaGlIQT2_weoqVQQw4T0_CtdkL-wlIU5mo6J_OcJJ3ZnpIV7kZ3VYiX3vpvutkx96imiAHu7za0i5E1Dgp_QmjY2oqn30ZOlxjkoWKByIeDzL40NRJ1AKfaoarmKcZyj6e1P9tuFNr6t6wcVN4ZbYyCOG6SY19BjRwAwCNKeAZ5aUFd_jsblDz_c9QdGEUO7GA08Nu041o9s9bbTzMJoQcqT3hayS5WYvnfYXVFY25jAZNWHD5u_7qE",
        badge: "Best Seller",
        badgeColor: "bg-primary",
        alt: "Roasted plain white makhana in a ceramic bowl"
    },
    {
        id: 2,
        name: "Zesty Peri Peri Fox Nuts",
        description: "African Bird's Eye Chili • Rich Protein",
        price: 9.99,
        originalPrice: null,
        rating: 4,
        reviews: 89,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_FEwGygkzIWsWvSvP7FoRWj32ndiDksFCt-olSbZm16QT7_mGK3R-G0TvBjtvCN-A1IYA8CsG2FKLTlojnyOb-KnBBN_sv06Ig6yI1uj3zfnMRFJz_gp76riuXCGOp-MHc2iEEKYf2JsHYU2L49kO33zuiRUI-CkNtbbcjnZE_EaC9erO8w6dK_ufM426avogKvYCLDgyAGyk8TrIQQhzG3-eez_vl8-iM4cayvwwt3jrb-9qfOpjRTNUzqRLjixGTkQ5wRKnZXw",
        badge: "Hot & Spicy",
        badgeColor: "bg-red-500",
        alt: "Spicy peri peri flavored fox nuts in a bowl"
    },
    {
        id: 3,
        name: "Tandoori Masala Munch",
        description: "Traditional Indian Herbs • Smoky Finish",
        price: 10.49,
        originalPrice: null,
        rating: 5,
        reviews: 42,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9WmkX2qtoHwc2CU5HANB0c04_NSmOyBOhBAGzaSmoUppMVZlPldqbFyEryY3RTJwT_fqT4bGoxLAWY2ZUqkELrJ1LhLevsmOFwjjrWmBlkL7dmqlsnhUmigLlCVng5Z-Rg9w6PnODtt5KQXHGZeFOe7m_AIsUJl4scoKZqe1DXNPZ-WsdtYVBVYtb2wdpP7tRYwWC996is-8sBRYwkZ_fX6BaBWNn9zwCXlsNKGCcnUIEfzIArFSAFA_Tjw6_s1Ng_FW1tXZvsxo",
        badge: "New Arrival",
        badgeColor: "bg-background-dark",
        alt: "Herbal masala seasoned makhana spread on wood"
    },
    {
        id: 4,
        name: "Sweet Caramel Bliss",
        description: "Cane Sugar • Lightly Salted • Crunchy",
        price: 11.99,
        originalPrice: null,
        rating: 4,
        reviews: 210,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfSVA00236oZmVdcD42cKUtLwMhRjlxBTcFjZA-6i7jjribFyXVj-N3qhXNbEoiR3kWSTHVd9Z4VNvr7_8xbQMTCdchzNkrnDRIi3pVMMgtNciSt2nTTf2OG4VxoCraLH7HiMLMlt1_qGsXGOOB_ijknUK_nZLAFOwM62M5C6KoP9V3c2KPwgqXQmdutL4gT_10arsBX9XUJE71iW9iliFa4MoNBMTwn-dYvRUp4KyMJbLt2XVbNYoJEacm2oK6xHoFcVvDyV0FZ4",
        badge: null,
        badgeColor: null,
        alt: "Golden caramel coated fox nuts"
    },
    {
        id: 5,
        name: "Lemon Chili Infusion",
        description: "Real Lemon Zest • Tangy & Sharp",
        price: 8.99,
        originalPrice: null,
        rating: 5,
        reviews: 56,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW39mjDPTOkSvmyPfUQtHmbNpNTzKnqJQzufw4pSPG5ZZG7b95Z3dCIyeyU7iY05OmPVejLaVrcBKfHlBCvboELzSVjNKSbn5t0LIUr69Q_iazgBPD5Eu8Y-S8UhCrQbQDn6LiJoOPCnXptFqPVQBcN8K1eVNen_I_Wl_84bQUldeEzzePB9_XzerJfgefxpcCfsyFBbB3P0Dv2SVDv899fDP538z7AoAJiGUgZscrC3_d3Lby24TJUJhLKtbb-kDxBACVcSvr4uc",
        badge: null,
        badgeColor: null,
        alt: "Lemon chili flavored fox nuts"
    },
    {
        id: 6,
        name: "Family Pack: Plain Roasted",
        description: "Value 1kg Bag • Sealed for Freshness",
        price: 24.99,
        originalPrice: null,
        rating: 5,
        reviews: 18,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNtC69pOEzBpvGEfGM6CizCmAmjzzkCL3rKp0ZNdMKDfuneseR6HdY7MgeY33CRtyeNEUN7fW1OzMVydC8HtS_BKUOn7J61UjDZ19esQq0WszQFeHDwh3jf_zLwak9fizQsrAiHUzszanf-9RNlNmPKDCVoxWYwOEUXnOtqf0tkZ7G8ET1WG_XirfiF8Jpe_ecuPPG_od7s18BrH0VQCebrjTIj9qvnVsbr3JjduhFfOVQDBJEWv5OeJnr_7uz7qVGu3DQFXPSe_8",
        badge: "Bulk Pack",
        badgeColor: "bg-gray-400",
        alt: "Wholesale pack of makhana"
    }
];

const RenderStars = ({ rating }) => {
    return (
        <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                    {i < rating ? <MdStar size={16} /> : <MdStarBorder size={16} className="text-gray-300" />}
                </span>
            ))}
        </div>
    );
};

const Store = () => {
    return (
        <>
            <Head title="Store" />
            <Navbar />
            <main className="max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-20 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-sage dark:text-sage/80 mb-6">
                    <a className="hover:text-primary transition-colors" href="#">Home</a>
                    <MdChevronRight size={16} />
                    <span className="text-background-dark dark:text-background-light font-semibold">Makhana Varieties</span>
                </nav>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
                        <div className="flex items-center justify-between pb-4 border-b border-sage/20 dark:border-sage/20">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <MdFilterList /> Filters
                            </h3>
                            <button className="text-xs font-bold text-primary uppercase tracking-wider">Clear All</button>
                        </div>
                        {/* Category Filter */}
                        <div>
                            <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                                <MdCategory size={18} /> Category
                            </h4>
                            <div className="space-y-3">
                                {[
                                    { name: "Plain / Roasted", count: 12, checked: true },
                                    { name: "Masala Mix", count: 8 },
                                    { name: "Peri Peri", count: 5 },
                                    { name: "Himalayan Salt", count: 6 }
                                ].map((cat, i) => (
                                    <label key={i} className="flex items-center gap-3 cursor-pointer group select-none">
                                        <div className="relative flex items-center justify-center">
                                            <input defaultChecked={cat.checked}
                                                className="peer w-5 h-5 rounded-full border-2 border-sage/30 checked:border-primary checked:bg-primary appearance-none transition-colors cursor-pointer"
                                                type="checkbox" />
                                            <MdFilterList className="absolute text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none transform scale-75" />
                                        </div>
                                        <span className="text-sm group-hover:text-primary transition-colors">{cat.name}</span>
                                        <span className="ml-auto text-xs text-sage">{cat.count}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        {/* Weight Filter */}
                        <div>
                            <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                                <MdInventory2 size={18} /> Weight
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    className="px-3 py-1.5 rounded-lg border border-primary bg-primary/10 text-primary text-xs font-bold">100g</button>
                                <button
                                    className="px-3 py-1.5 rounded-lg border border-sage/20 dark:border-sage/20 text-sage dark:text-sage text-xs font-bold hover:border-primary transition-colors">250g</button>
                                <button
                                    className="px-3 py-1.5 rounded-lg border border-sage/20 dark:border-sage/20 text-sage dark:text-sage text-xs font-bold hover:border-primary transition-colors">500g</button>
                                <button
                                    className="px-3 py-1.5 rounded-lg border border-sage/20 dark:border-sage/20 text-sage dark:text-sage text-xs font-bold hover:border-primary transition-colors">1kg</button>
                                <button
                                    className="px-3 py-1.5 rounded-lg border border-sage/20 dark:border-sage/20 text-sage dark:text-sage text-xs font-bold hover:border-primary transition-colors">2kg</button>
                            </div>
                        </div>
                        {/* Price Range */}
                        <div>
                            <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                                <MdPayments size={18} /> Price Range
                            </h4>
                            <input className="w-full h-2 bg-cream-soft rounded-lg appearance-none cursor-pointer accent-primary"
                                type="range" />
                            <div className="flex justify-between mt-2 text-xs font-bold text-sage">
                                <span>$5</span>
                                <span>$100</span>
                            </div>
                        </div>
                        {/* Banner Sidebar */}
                        <div className="rounded-xl bg-primary/20 p-6 border border-primary/30 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h5 className="text-sm font-extrabold text-background-dark mb-2 uppercase tracking-tighter">Healthy
                                    Snacking</h5>
                                <p className="text-xs text-background-dark/80 mb-4 font-medium leading-relaxed">Makhana is low in
                                    sodium and high in magnesium. Perfect for guilt-free munching!</p>
                                <a className="text-xs font-bold text-background-dark underline" href="#">Learn More</a>
                            </div>
                            <MdEco className="absolute -bottom-4 -right-4 text-[100px] text-primary/20 rotate-12 group-hover:scale-110 transition-transform" />
                        </div>
                    </aside>
                    {/* Product Grid Section */}
                    <div className="flex-1">
                        {/* Title & Sorting Bar */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <h1 className="text-3xl font-extrabold tracking-tight mb-2">Shop All Makhana Varieties</h1>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Showing 1-12 of 48 premium products</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-sage">Sort By:</span>
                                <select
                                    className="text-sm font-bold border border-sage/20 bg-cream-soft dark:bg-background-dark dark:border-sage/20 rounded-lg py-2 pl-3 pr-10 outline-none focus:ring-primary shadow-sm text-background-dark dark:text-cream-soft cursor-pointer appearance-none">
                                    <option className="bg-white text-black dark:bg-background-dark dark:text-white">Best Selling</option>
                                    <option className="bg-white text-black dark:bg-background-dark dark:text-white">Price: Low to High</option>
                                    <option className="bg-white text-black dark:bg-background-dark dark:text-white">Price: High to Low</option>
                                    <option className="bg-white text-black dark:bg-background-dark dark:text-white">Newest Arrivals</option>
                                </select>
                            </div>
                        </div>
                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div key={product.id}
                                    className="group glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className="relative aspect-square overflow-hidden bg-cream-soft dark:bg-background-dark/30">
                                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            alt={product.alt}
                                            src={product.image} />
                                        {product.badge && (
                                            <div
                                                className={`absolute top-3 left-3 ${product.badgeColor || 'bg-primary '} text-white text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider`}>
                                                {product.badge}
                                            </div>
                                        )}
                                        <button
                                            className="absolute text-white top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
                                            <MdFavoriteBorder size={20} />
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-1 mb-2">
                                            <RenderStars rating={product.rating} />
                                            <span className="text-xs text-sage font-bold ml-1">({product.reviews})</span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors text-background-dark dark:text-background-light">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-sage mb-4">{product.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                {product.originalPrice && (
                                                    <span className="text-xs text-sage/80 line-through">${product.originalPrice}</span>
                                                )}
                                                <span className="text-xl font-extrabold text-background-dark dark:text-background-light">${product.price}</span>
                                            </div>
                                            <button
                                                className="bg-primary text-white p-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
                                                <MdAddShoppingCart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 mt-12 pb-10">
                            <button
                                className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors">
                                <MdChevronRight className="rotate-180" size={24} />
                            </button>
                            <button
                                className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold">1</button>
                            <button
                                className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors font-bold">2</button>
                            <button
                                className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors font-bold">3</button>
                            <span className="px-2">...</span>
                            <button
                                className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors font-bold">8</button>
                            <button
                                className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors">
                                <MdChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Store;