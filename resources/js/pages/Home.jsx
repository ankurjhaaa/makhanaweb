import { Head } from "@inertiajs/react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import { FiShoppingCart } from "react-icons/fi";
import { MdStar } from "react-icons/md";

export default function Home({ products = [] }) {
  return (
    <>
      <Head title="Home" />
      <Navbar />

      <main className="bg-white">

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

          {/* Background Image */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChUSYWlAVAs_0Sf8W4xLFw8IPUF1BlNXE96iU_YrH31j4OV79TWhGakYpUmdowRlR6WSTj7l2lXkHPuBcTFOyDEIsOF9I-JjLJeHl8sIfZpiXap3zT3IXEODRqcOueAY-fDEELMIEWIgPjSOfO6Hek-WMEXJZk_meke2PZW9b5XhK3wQ5U7ww945BGHrIU3zgaWKdAo5KDdY9DRrkYR5ajfIwUS0AXpc0obzDU9aE1qB-JgLl0KggObTqwhmQnUipMkmNe2u98Y_c"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl px-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-white">
                100% Natural Harvest
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-tight">
              Pure{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-green-400">
                Makhana
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
              The ultimate guilt-free crunch.{" "}
              <span className="text-primary font-semibold">
                Popped to perfection.
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-primary text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition">
                Shop Collection
              </button>

              <button className="border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition">
                Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 flex justify-center gap-12 text-white">
              <div>
                <p className="text-3xl font-bold">50k+</p>
                <p className="text-xs uppercase tracking-widest text-gray-300">
                  Happy Snackers
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">4.9</p>
                <p className="text-xs uppercase tracking-widest text-gray-300">
                  Star Rating
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-xs uppercase tracking-widest text-gray-300">
                  Organic
                </p>
              </div>
            </div>

          </div>
        </section>




        {/* PRODUCTS */}
        <section className="py-16 px-6 lg:px-20">
          <div className="max-w-6xl mx-auto">

            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Our Products</h2>
              <button className="text-primary font-semibold text-sm">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {(products.length ? products : [1, 2, 3, 4]).map((product, index) => (
                <ProductCard key={product.id ?? index} product={product} />
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}


/* ================= PRODUCT CARD ================= */

function ProductCard({ product = {} }) {

  const name = product.name ?? "Classic Salted";
  const price = product.variants?.[0]?.price ?? "199";
  const image =
    product.primary_image?.image ??
    "https://images.unsplash.com/photo-1604908177522-b8bdf1eeb6f1?q=80&w=600";

  // Dummy extra data
  const rating = "4.8";
  const reviews = "1.2k";
  const weight = "100g";
  const stock = "In Stock";

  return (
    <div className="border border-gray-100 rounded-2xl p-4 hover:border-gray-200 transition bg-white">

      {/* IMAGE */}
      <div className="h-60 md:h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          className="w-full h-full object-cover"
        />
      </div>

      {/* NAME */}
      <h3 className="text-sm font-semibold mb-1 line-clamp-1">
        {name}
      </h3>

      {/* RATING */}
      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
        <MdStar className="text-yellow-400 text-sm" />
        <span>{rating}</span>
        <span>({reviews})</span>
      </div>

      {/* EXTRA INFO */}
      <div className="text-xs text-gray-400 mb-3 space-y-1">
        <p>Weight: {weight}</p>
        <p>Status: {stock}</p>
      </div>

      {/* PRICE + BUTTON */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">
          ₹{price}
        </span>

        <button className="bg-primary text-black p-2 rounded-lg hover:opacity-90 transition">
          <FiShoppingCart size={16} />
        </button>
      </div>

    </div>
  );
}
