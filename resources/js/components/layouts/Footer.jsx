import { BiLeaf } from "react-icons/bi";
import {
  MdPublic,
  MdShare,
  MdMail,
  MdCall,
  MdLocationOn,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-cream-soft dark:bg-background-dark py-16 border-t border-[#dbe6db]/30">
      <div className="max-w-full mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 bg-primary rounded flex items-center justify-center text-background-dark">
                <BiLeaf className="text-xl" />
              </div>
              <h2 className="text-lg font-extrabold tracking-tight uppercase">
                Makhana
              </h2>
            </div>

            <p className="text-sage dark:text-gray-400 text-sm leading-relaxed mb-6">
              Premium fox nuts for the modern, health-conscious lifestyle.
              Naturally sourced, expertly prepared.
            </p>

            <div className="flex gap-4">
              <button className="size-10 bg-white dark:bg-white/5 border border-[#dbe6db]/30 rounded-full flex items-center justify-center hover:text-primary transition-colors">
                <MdPublic className="text-lg" />
              </button>
              <button className="size-10 bg-white dark:bg-white/5 border border-[#dbe6db]/30 rounded-full flex items-center justify-center hover:text-primary transition-colors">
                <MdShare className="text-lg" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-sage dark:text-gray-400">
              <li><button className="hover:text-primary transition-colors">Shop All</button></li>
              <li><button className="hover:text-primary transition-colors">Gift Boxes</button></li>
              <li><button className="hover:text-primary transition-colors">Wholesale</button></li>
              <li><button className="hover:text-primary transition-colors">Our Farms</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-sage dark:text-gray-400">
              <li><button className="hover:text-primary transition-colors">Shipping Policy</button></li>
              <li><button className="hover:text-primary transition-colors">Return Policy</button></li>
              <li><button className="hover:text-primary transition-colors">FAQ</button></li>
              <li><button className="hover:text-primary transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-sage dark:text-gray-400">
              <li className="flex gap-3 items-center">
                <MdMail className="text-primary text-sm" />
                hello@makhana.brand
              </li>
              <li className="flex gap-3 items-center">
                <MdCall className="text-primary text-sm" />
                +1 (800) MAKHANA
              </li>
              <li className="flex gap-3 items-center">
                <MdLocationOn className="text-primary text-sm" />
                Silicon Valley, CA
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#dbe6db]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sage/60 uppercase tracking-widest font-bold">
          <p>© 2024 Makhana Premium Snacks. All Rights Reserved.</p>
          <div className="flex gap-8">
            <button>Privacy</button>
            <button>Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
