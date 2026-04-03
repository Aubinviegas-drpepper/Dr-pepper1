import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="py-16 bg-drp-red relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[200%] bg-white/20 rotate-12 blur-3xl" />
        <div className="absolute -bottom-[50%] -right-[10%] w-[50%] h-[200%] bg-black/20 -rotate-12 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
              Ready to Taste Different?
            </h2>
            <p className="text-drp-red-light font-medium text-lg text-white/80">
              Stock up on the one of a kind flavor.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-10 py-5 bg-drp-black hover:bg-black text-white rounded-full font-black text-xl uppercase tracking-wider transition-colors flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            Buy Now <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
