import { motion } from "motion/react";
import { ArrowRight, Twitter, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-drp-dark pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
              Dr Pepper
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Join the Pepper Pack. Get exclusive drops, limited edition flavors, and weird internet stuff sent straight to your inbox.
            </p>
            <form className="flex gap-2 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-drp-red transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-drp-red text-white rounded-xl font-bold flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Products", "Our Story", "Pepper Perks", "Merch", "Find a Store"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-drp-red transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4 mb-8">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-drp-red hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <ul className="space-y-3 text-sm">
              {["Privacy Policy", "Terms of Use", "Do Not Sell My Info"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Dr Pepper/Seven Up, Inc.
          </p>
          <p className="text-gray-600 text-sm font-bold tracking-widest uppercase">
            One of a Kind
          </p>
        </div>
      </div>
    </footer>
  );
}
