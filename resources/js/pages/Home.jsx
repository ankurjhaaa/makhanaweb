import { Head } from "@inertiajs/react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

import {
  FiCheckCircle,
  FiArrowRight,
  FiShoppingCart,
} from "react-icons/fi";

import {
  MdStar,
  MdEco,
  MdBakeryDining,
  MdFitnessCenter,
} from "react-icons/md";

export default function Home({ products }) {
  return (
    <>
      <Head title="Home" />
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-20 w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-black/30 z-10" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChUSYWlAVAs_0Sf8W4xLFw8IPUF1BlNXE96iU_YrH31j4OV79TWhGakYpUmdowRlR6WSTj7l2lXkHPuBcTFOyDEIsOF9I-JjLJeHl8sIfZpiXap3zT3IXEODRqcOueAY-fDEELMIEWIgPjSOfO6Hek-WMEXJZk_meke2PZW9b5XhK3wQ5U7ww945BGHrIU3zgaWKdAo5KDdY9DRrkYR5ajfIwUS0AXpc0obzDU9aE1qB-JgLl0KggObTqwhmQnUipMkmNe2u98Y_c"
              alt="Background"
              className="w-full h-full object-cover rounded-b-4xl animate-zoom-slow"
            />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-20 px-6">

            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-10 shadow-2xl">
              <FiCheckCircle className="text-primary text-xl" />
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-white">
                100% Natural Harvest
              </span>
            </div>

            {/* Headline */}
            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 md:mb-8 leading-[0.9] drop-shadow-lg">
              Pure <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-green-400">
                Makhana
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-200 max-w-3xl mx-auto mb-16 font-medium leading-relaxed drop-shadow-md">
              The ultimate guilt-free crunch. <span className="text-primary font-bold">Popped to perfection.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-primary text-background-dark font-bold px-12 py-6 rounded-full text-xl hover:scale-105 hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(19,236,19,0.5)]">
                Shop Collection
                <FiArrowRight />
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-12 py-6 rounded-full text-xl hover:bg-white hover:text-background-dark transition-all duration-300">
                Our Story
              </button>
            </div>

            {/* Floating Stats */}
            <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl font-black text-white">50k+</p>
                <p className="text-sm text-gray-300 uppercase tracking-wider">Happy Snackers</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-black text-white">4.9</p>
                <p className="text-sm text-gray-300 uppercase tracking-wider">Star Rating</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-sm text-gray-300 uppercase tracking-wider">Organic</p>
              </div>
            </div>

          </div>
        </section>

        <div className="max-w-full mx-auto px-6 lg:px-20">
          {/* ================= BENEFITS ================= */}
          <section className="py-12 border-y border-sage/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Benefit icon={<MdEco />} title="100% Organic" text="No chemicals or additives" />
              <Benefit icon={<MdBakeryDining />} title="Gluten-Free" text="Perfect for every diet" />
              <Benefit icon={<MdFitnessCenter />} title="Rich in Protein" text="Essential amino acids inside" />
            </div>
          </section>

          {/* ================= PRODUCTS ================= */}
          <section className="py-12 md:py-20 relative overflow-hidden">
            <div className="absolute top-20 left-0 w-96 h-96 bg-primary/20 blur-[150px] -z-10 rounded-full mix-blend-multiply opacity-50" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-sage/20 blur-[150px] -z-10 rounded-full mix-blend-multiply opacity-50" />
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-extrabold mb-4">Product Varieties</h2>
                <p className="text-sage dark:text-sage">
                  Explore our range of artisanal flavors crafted for every palate.
                </p>
              </div>
              <button className="flex items-center gap-2 font-bold text-primary group">
                View All Flavors
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* ================= COMMUNITY ================= */}
          <section className="mb-20">
            <div className="bg-background-dark text-background-light rounded-3xl p-8 md:p-12 lg:p-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-3/4 h-full bg-primary/20 blur-[150px] rounded-full mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 w-1/2 h-full bg-sage/20 blur-[100px] rounded-full mix-blend-overlay" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                  Join the Healthy Snack Revolution
                </h2>
                <p className="text-sage text-lg mb-10">
                  Subscribe to get 15% off your first order and stay updated
                  with new recipes and wellness tips.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-background-light/10 border border-background-light/20 rounded-xl px-6 py-4 focus:ring-primary focus:border-primary"
                  />
                  <button className="bg-primary text-background-dark font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform whitespace-nowrap">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

/* ================= HELPERS ================= */

function Benefit({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4 justify-center md:justify-start group p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
      <div className="size-16 bg-cream-soft dark:bg-background-light/5 rounded-2xl flex items-center justify-center text-primary text-3xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-sage">{text}</p>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const price = product.variants?.[0]?.price ?? "--";
  const image =
    product.primary_image?.image ??
    "https://via.placeholder.com/400x400?text=Makhana";

  return (
    <div className="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      {/* IMAGE */}
      <div className="h-72 overflow-hidden relative">
        <img
          src={image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* BADGE = FLAVOUR */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-background-light/90 text-background-dark">
          {product.category_slug.replace("-", " ")}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">
          {product.name}
        </h3>

        <p className="text-sage dark:text-sage mb-6">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-extrabold">
            ₹{price}
          </span>

          <button className="bg-background-dark dark:bg-primary dark:text-background-dark text-background-light p-3 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}