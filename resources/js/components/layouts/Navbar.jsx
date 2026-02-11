import { Link, usePage } from '@inertiajs/react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function Navbar() {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm px-6 lg:px-20 py-4">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/logo.jpeg"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/store" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                        Store
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/reviews" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                        Reviews
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Search */}
                    <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
                        <FiSearch className="text-gray-500 text-sm" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-transparent outline-none text-sm ml-2 w-40 placeholder:text-gray-400"
                        />
                    </div>

                    {user ? (
                        <>
                            {/* Wishlist */}
                            <Link
                                href="/wishlist"
                                className="p-2 hover:bg-gray-100 rounded-full transition"
                            >
                                <FiHeart className="text-xl text-gray-700" />
                            </Link>

                            {/* Cart */}
                            <Link
                                href="/cart"
                                className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
                            >
                                <FiShoppingCart />
                                <span className="text-sm font-bold">3</span>
                            </Link>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="flex items-center gap-2 bg-primary text-black px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            <FiUser />
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
