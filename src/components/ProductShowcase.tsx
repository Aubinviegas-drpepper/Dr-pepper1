import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";

const PRODUCTS = [
  {
    id: "original",
    name: "Dr Pepper Original",
    description: "The 23-flavor mystery that started it all.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop", // Placeholder, ideally a transparent PNG of the can
    color: "from-drp-red to-drp-red-dark",
    badge: "Classic",
  },
  {
    id: "zero",
    name: "Dr Pepper Zero Sugar",
    description: "All the 23 flavors. Zero sugar. Zero compromise.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop&grayscale",
    color: "from-gray-800 to-black",
    badge: "Trending",
  },
  {
    id: "strawberries",
    name: "Strawberries & Cream",
    description: "A smooth, sweet twist on the original 23.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop&hue=320",
    color: "from-pink-600 to-drp-red",
    badge: "Limited Edition",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-drp-dark relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Choose Your <span className="text-drp-red">Mystery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We don't explain the flavor. We just make it. Pick your poison.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />
              
              <div className="glass rounded-3xl p-8 h-full flex flex-col relative z-10 border-white/5 group-hover:border-white/20 transition-colors duration-300 overflow-hidden">
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/10 rounded-full backdrop-blur-md border border-white/10">
                    {product.badge}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative h-64 mb-8 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center relative z-10"
                  >
                    {/* Placeholder for actual product image */}
                    <div className="w-24 h-40 bg-gradient-to-b from-gray-300 to-gray-500 rounded-md shadow-2xl relative overflow-hidden flex items-center justify-center">
                       <span className="text-black font-black -rotate-90 text-xl tracking-tighter opacity-50">Dr Pepper</span>
                    </div>
                  </motion.div>
                  
                  {/* Floating particles behind product */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-drp-red rounded-full blur-[1px]"
                        animate={{
                          y: [-20, -100],
                          x: Math.sin(i) * 20,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        style={{
                          left: `${40 + Math.random() * 20}%`,
                          bottom: '20%',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{product.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-drp-red text-white font-bold transition-colors duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
