import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const Particles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100 + 100, // Start below screen
        size: Math.random() * 6 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));
    };
    setParticles(generateParticles());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: `-10%`,
          }}
          animate={{
            y: [0, -1000],
            x: [0, Math.sin(p.id) * 50],
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-drp-black">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-drp-black/40 via-drp-red/20 to-drp-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop" 
          alt="Dark red liquid background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
      </div>

      <Particles />

      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block py-1 px-3 rounded-full glass-red text-drp-red-light font-bold tracking-widest text-xs sm:text-sm uppercase mb-6"
          >
            One of a Kind
          </motion.span>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tighter text-glow">
            TASTE THE <br className="hidden sm:block" /> MYSTERY.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            23 flavors. Zero explanation. Dive into the boldest, most misunderstood blend on earth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-drp-red hover:bg-drp-red-light text-white rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2 box-glow"
            >
              Try It Now <ChevronRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" /> Watch Experience
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
