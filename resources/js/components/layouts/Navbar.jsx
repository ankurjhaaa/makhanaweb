import { Link } from '@inertiajs/react';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { BiLeaf } from 'react-icons/bi';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 glass-header border-b border-[#dbe6db]/30 px-6 lg:px-20 py-4">
            <div className="max-w-full mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                        <BiLeaf className="text-2xl font-bold" />
                    </div>
                    <h1 className="text-xl font-800 tracking-tight uppercase">Makhana</h1>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/store" className="text-sm font-semibold hover:text-primary transition-colors">
                        Store
                    </Link>
                    <Link href="/about" className="text-sm font-semibold hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/reviews" className="text-sm font-semibold hover:text-primary transition-colors">
                        Reviews
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="hidden lg:flex gap-2 items-center bg-cream-soft dark:bg-white/10 rounded-full px-4 py-2 border border-[#dbe6db]">
                        <FiSearch className="text-sage text-lg" />
                        <input
                            className="bg-transparent outline-none border-none focus:ring-0 text-sm w-40 placeholder:text-sage/60"
                            placeholder="Find your crunch..."
                            type="text"
                        />
                    </div>

                    {/* Favorites */}
                    <button className="p-2 cursor-pointer hover:bg-primary/10 rounded-full transition-colors">
                        <FiHeart className="text-xl" />
                    </button>

                    {/* Cart */}
                    <button className="p-2 cursor-pointer bg-background-dark dark:bg-primary text-white dark:text-background-dark rounded-full transition-colors flex items-center gap-2 px-4">
                        <FiShoppingCart className="text-lg text-white" />
                        <span className="text-xs font-bold text-white">3</span>
                    </button>
                </div>
            </div>
        </header>
    );
}