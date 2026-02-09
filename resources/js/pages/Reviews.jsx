import { Head } from "@inertiajs/react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import { MdStar, MdStarHalf, MdEdit, MdThumbUp, MdMoreHoriz, MdVerified, MdExpandMore, MdCheckCircle, MdAddAPhoto, MdClose } from "react-icons/md";

// Reviews Data
const reviewsData = [
    {
        name: "Ananya S.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqswK72souOIdNepeIW__2543pV9t3xaP-ePJCZhT0Yyz-sGiT1jgYm4asTeouEORCnfil99z_Rd5zJIZtXbIQTA-Kkw6h41ef-UHhJgYyw4luxrs6hJJp0MCpgvBX7OfGEgYtDQvqw4aL4MzNELKtGJrKXVtqFsI2G3F2zXesI8j3Pc1DLO90fu3fEHSP0OmtNqZOmXFVVFrVBpYTo1E4C8uAfgiVC5gvVWKbEBriIjGn50CdT_GUyZXGHaK_U4xIWoasIB9QUD8",
        verified: true,
        timeAgo: "2 days ago",
        rating: 5,
        title: "Better than popcorn!",
        content: "Absolutely the crunchiest makhana I've ever had! The hint of sea salt is perfect for my mid-day cravings. I used to eat popcorn while working, but this is much healthier and doesn't get stuck in my teeth!",
        helpful: 24,
        images: []
    },
    {
        name: "Marcus T.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCC7UpMvlaRuQJoX-6uOKJnqx_oE1fcSNB_mEzYbda9EG3MwlL6tSaS99p28_-0KoeQURgPGJzU5d7xhA7Z-g_xybyEIf0BpdqAKI1CDxxjluKrYdgh45MNRFugSFSywm76ieNM06Z0LYQXbk5JSLoJloUT4m-hHbVCMOztKC0ORNS5tTJJzZ9fHGdj4elH3S3RtAYLEUtSP22Y0hKYLAGi_aciVyT3kaycahpXHUQf5-OhzGFJUj3motRZw-Vutrv3Vl6jj8jmn0",
        verified: true,
        timeAgo: "1 week ago",
        rating: 5,
        title: "Premium Quality Packaging",
        content: "The packaging keeps them so fresh. Love the eco-friendly bags and the quality is top-notch. Already ordered the spicy flavor to try next.",
        helpful: 12,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFVBBa63xyhQ2HFqaqiwTG0zzUVIidbz_QTGiVf19mEkATAZuwNs0O0dyWNU8ss6VSmwX56xOo56DYGn70v6Nx8EP2PsPbRBY37yYtkbl8j4TdY_-k1v3OvpwOaiphb3r3ccjFUXIawtMoBz086XJrm0NPfw6AL9CO2VO6HSPz9_-gd8Jj9GFNUO0Fnf5ztpY3gPUusHVHNz6ZO7p6-4E3RB8IQpf7Y_6VlLlHEWWPythcZFMRN2zJcCUX6DHDbqIYdhkW2D2DeU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB2NcbR_LdLnn042xYI8l5KP4P7BvyFlE_Y5nZ6TzmQopPxmJRTme5es-IDXetV0XIWgLIftuXxFxNP2hfrsWrYjS03p22XsF26TlYhvKvCH_1PnHcJJao9nyfhJO_trEwBhMlZpV5bB_IG_MvKWxOMC_N76x8HCkZvFIjiiYFf3NMJGpbsbw48y6R2KCNN1aaGejZcTjwvcviDlrLqVeNSEK1AdJ0eSWaqTps1dtJFHoHMnBzVTZGwyps3Mim9QClmVM-1HL3uhZQ"
        ]
    },
    {
        name: "Priya K.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqswK72souOIdNepeIW__2543pV9t3xaP-ePJCZhT0Yyz-sGiT1jgYm4asTeouEORCnfil99z_Rd5zJIZtXbIQTA-Kkw6h41ef-UHhJgYyw4luxrs6hJJp0MCpgvBX7OfGEgYtDQvqw4aL4MzNELKtGJrKXVtqFsI2G3F2zXesI8j3Pc1DLO90fu3fEHSP0OmtNqZOmXFVVFrVBpYTo1E4C8uAfgiVC5gvVWKbEBriIjGn50CdT_GUyZXGHaK_U4xIWoasIB9QUD8",
        verified: true,
        timeAgo: "3 days ago",
        rating: 5,
        title: "Perfect guilt-free snack!",
        content: "As a fitness enthusiast, I'm always looking for healthy snacks. These fox nuts are perfect - high protein, low calories, and incredibly tasty. The caramel flavor is my favorite!",
        helpful: 18,
        images: []
    },
    {
        name: "Raj M.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCC7UpMvlaRuQJoX-6uOKJnqx_oE1fcSNB_mEzYbda9EG3MwlL6tSaS99p28_-0KoeQURgPGJzU5d7xhA7Z-g_xybyEIf0BpdqAKI1CDxxjluKrYdgh45MNRFugSFSywm76ieNM06Z0LYQXbk5JSLoJloUT4m-hHbVCMOztKC0ORNS5tTJJzZ9fHGdj4elH3S3RtAYLEUtSP22Y0hKYLAGi_aciVyT3kaycahpXHUQf5-OhzGFJUj3motRZw-Vutrv3Vl6jj8jmn0",
        verified: false,
        timeAgo: "5 days ago",
        rating: 4,
        title: "Great taste, could be crunchier",
        content: "Love the flavors and the concept. The peri-peri is amazing! Just wish they were a bit crunchier. Still a solid 4 stars and will definitely order again.",
        helpful: 8,
        images: []
    },
    {
        name: "Sarah L.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqswK72souOIdNepeIW__2543pV9t3xaP-ePJCZhT0Yyz-sGiT1jgYm4asTeouEORCnfil99z_Rd5zJIZtXbIQTA-Kkw6h41ef-UHhJgYyw4luxrs6hJJp0MCpgvBX7OfGEgYtDQvqw4aL4MzNELKtGJrKXVtqFsI2G3F2zXesI8j3Pc1DLO90fu3fEHSP0OmtNqZOmXFVVFrVBpYTo1E4C8uAfgiVC5gvVWKbEBriIjGn50CdT_GUyZXGHaK_U4xIWoasIB9QUD8",
        verified: true,
        timeAgo: "1 week ago",
        rating: 5,
        title: "Kids love them too!",
        content: "Bought these as a healthier alternative to chips for my kids. They absolutely love them! Great for movie nights and after-school snacks. The variety pack is perfect.",
        helpful: 15,
        images: []
    },
    {
        name: "Amit P.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCC7UpMvlaRuQJoX-6uOKJnqx_oE1fcSNB_mEzYbda9EG3MwlL6tSaS99p28_-0KoeQURgPGJzU5d7xhA7Z-g_xybyEIf0BpdqAKI1CDxxjluKrYdgh45MNRFugSFSywm76ieNM06Z0LYQXbk5JSLoJloUT4m-hHbVCMOztKC0ORNS5tTJJzZ9fHGdj4elH3S3RtAYLEUtSP22Y0hKYLAGi_aciVyT3kaycahpXHUQf5-OhzGFJUj3motRZw-Vutrv3Vl6jj8jmn0",
        verified: true,
        timeAgo: "2 weeks ago",
        rating: 5,
        title: "Best makhana brand!",
        content: "I've tried several makhana brands and this is by far the best. The quality is consistent, flavors are authentic, and the crunch is perfect every time. Highly recommend!",
        helpful: 31,
        images: []
    }
];

const Reviews = () => {
    return (
        <>
            <Head title="Reviews" />
            <Navbar />
            <main className="min-h-screen bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Review Summary Section */}
                    <section className="mb-16 px-10 ">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-black tracking-tight text-background-dark dark:text-background-light mb-4">
                                    What Our Community Says
                                </h2>
                                <p className="text-sage text-lg">
                                    Real feedback from 1,240+ healthy snackers across the globe. We pride ourselves on the crunchiest fox nuts on the market.
                                </p>
                            </div>
                            <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-background-dark font-bold rounded-xl overflow-hidden hover:scale-105 transition-transform">
                                <MdEdit size={20} />
                                <span>Write a Review</span>
                            </button>
                        </div>

                        <div className="glass-card p-8 rounded-3xl">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                                {/* Overall Score */}
                                <div className="md:col-span-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-sage/20 pb-8 md:pb-0">
                                    <span className="text-7xl font-black text-background-dark dark:text-background-light mb-2">4.8</span>
                                    <div className="flex gap-1 text-primary mb-3">
                                        <MdStar size={32} className="fill-current" />
                                        <MdStar size={32} className="fill-current" />
                                        <MdStar size={32} className="fill-current" />
                                        <MdStar size={32} className="fill-current" />
                                        <MdStarHalf size={32} className="fill-current" />
                                    </div>
                                    <p className="text-sage font-medium uppercase tracking-widest text-sm">Overall Satisfaction</p>
                                </div>

                                {/* Star Breakdown */}
                                <div className="md:col-span-5 flex flex-col gap-4">
                                    {[
                                        { stars: 5, percentage: 80 },
                                        { stars: 4, percentage: 12 },
                                        { stars: 3, percentage: 5 },
                                        { stars: 2, percentage: 1 },
                                        { stars: 1, percentage: 2 }
                                    ].map((item) => (
                                        <div key={item.stars} className="flex items-center gap-4">
                                            <span className="text-sm font-bold w-4 text-background-dark dark:text-background-light">{item.stars}</span>
                                            <MdStar size={16} className="text-sage" />
                                            <div className="flex-1 h-3 bg-cream-soft dark:bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary rounded-full" style={{ width: `${item.percentage}%` }}></div>
                                            </div>
                                            <span className="text-sm text-sage w-10 text-right">{item.percentage}%</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Recommendations */}
                                <div className="md:col-span-3 flex flex-col justify-center items-start md:items-center text-center">
                                    <div className="inline-flex items-center justify-center size-16 bg-primary/20 text-primary rounded-2xl mb-4">
                                        <MdThumbUp size={32} />
                                    </div>
                                    <p className="text-2xl font-black text-background-dark dark:text-background-light">98%</p>
                                    <p className="text-sage text-sm">of customers recommend <br /> our Makhana snacks</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Filters and Sentiment */}
                    <div className="flex  px-10 flex-wrap items-center justify-between gap-6 mb-12">
                        <div className="flex flex-wrap gap-3">
                            <button className="px-5 py-2 bg-primary text-background-dark text-sm font-bold rounded-xl border-2 border-primary">
                                All Reviews
                            </button>
                            <button className="px-5 py-2 glass-card border-2 border-sage/20 text-sm font-bold rounded-xl hover:border-primary/30 transition-colors text-background-dark dark:text-background-light">
                                Very Crunchy
                            </button>
                            <button className="px-5 py-2 glass-card border-2 border-sage/20 text-sm font-bold rounded-xl hover:border-primary/30 transition-colors text-background-dark dark:text-background-light">
                                Low Salt
                            </button>
                            <button className="px-5 py-2 glass-card border-2 border-sage/20 text-sm font-bold rounded-xl hover:border-primary/30 transition-colors text-background-dark dark:text-background-light">
                                Perfect Snack
                            </button>
                            <button className="px-5 py-2 glass-card border-2 border-sage/20 text-sm font-bold rounded-xl hover:border-primary/30 transition-colors inline-flex items-center gap-2 text-background-dark dark:text-background-light">
                                Verified Only <MdCheckCircle size={16} />
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-sage">Sort by:</span>
                            <button className="flex items-center gap-2 px-4 py-2 glass-card border border-sage/20 rounded-xl text-sm font-bold text-background-dark dark:text-background-light">
                                Most Recent
                                <MdExpandMore size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Review Grid */}
                    <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviewsData.map((review, index) => (
                            <div key={index} className="glass-card p-8 rounded-3xl hover:shadow-2xl hover:shadow-primary/10 transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="size-12 rounded-full bg-cream-soft dark:bg-white/10 bg-cover bg-center"
                                            style={{ backgroundImage: `url('${review.avatar}')` }}
                                        ></div>
                                        <div>
                                            <p className="font-bold text-background-dark dark:text-background-light">{review.name}</p>
                                            {review.verified && (
                                                <div className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider">
                                                    <MdVerified size={14} className="fill-current" />
                                                    Verified Buyer
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-sage">{review.timeAgo}</span>
                                </div>
                                <div className="flex gap-0.5 text-primary mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <MdStar key={i} size={20} className="fill-current" />
                                    ))}
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-background-dark dark:text-background-light">{review.title}</h3>
                                <p className="text-sage leading-relaxed mb-4">
                                    {review.content}
                                </p>
                                {review.images && review.images.length > 0 && (
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {review.images.map((image, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="aspect-square rounded-xl bg-cream-soft dark:bg-white/10 bg-cover bg-center overflow-hidden border border-sage/20"
                                                style={{ backgroundImage: `url('${image}')` }}
                                            ></div>
                                        ))}
                                    </div>
                                )}
                                <div className="flex items-center justify-between pt-6 border-t border-sage/20">
                                    <button className="flex items-center gap-2 text-sm font-bold text-sage hover:text-primary transition-colors">
                                        <MdThumbUp size={18} />
                                        Helpful ({review.helpful})
                                    </button>
                                    <button className="p-2 text-sage hover:text-primary transition-colors">
                                        <MdMoreHoriz size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-16 text-center">
                        <button className="px-10 py-4 glass-card border-2 border-sage/20 rounded-2xl font-bold hover:border-primary transition-all text-background-dark dark:text-background-light">
                            Load More Reviews
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Reviews;