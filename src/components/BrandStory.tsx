import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-drp-black relative overflow-hidden">
      {/* Background Text Parallax */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <motion.h2 
          style={{ x: y1 }}
          className="text-[20vw] font-black text-white whitespace-nowrap"
        >
          23 FLAVORS
        </motion.h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            style={{ opacity }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
              The <span className="text-drp-red">Mystery</span> <br/> Since 1885
            </h2>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-drp-red/30">
                <div className="absolute w-4 h-4 bg-drp-red rounded-full -left-[9px] top-1 box-glow" />
                <h3 className="text-xl font-bold text-white mb-2">The Beginning</h3>
                <p className="text-gray-400">Born in Waco, Texas. Charles Alderton wanted to capture the smell of the soda fountain. He didn't make a cola. He made something else entirely.</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-drp-red/30">
                <div className="absolute w-4 h-4 bg-drp-red rounded-full -left-[9px] top-1 box-glow" />
                <h3 className="text-xl font-bold text-white mb-2">The 23 Flavors</h3>
                <p className="text-gray-400">Amaretto? Cherry? Licorice? Blackberry? We'll never tell. The exact blend of 23 flavors is locked in a vault. Literally.</p>
              </div>

              <div className="relative pl-8 border-l-2 border-transparent">
                <div className="absolute w-4 h-4 bg-drp-red rounded-full -left-[9px] top-1 box-glow" />
                <h3 className="text-xl font-bold text-white mb-2">One of a Kind</h3>
                <p className="text-gray-400">It's not a cola. It's not a root beer. It's Dr Pepper. Misunderstood by many, obsessed over by those who know.</p>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 relative h-[500px] w-full">
            <motion.div 
              style={{ y: y2 }}
              className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=1000&auto=format&fit=crop" 
                alt="Vintage aesthetic" 
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-drp-red/40 to-transparent mix-blend-overlay" />
              
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-black text-white/20 tracking-widest rotate-[-15deg] uppercase border-4 border-white/20 p-4 rounded-xl backdrop-blur-sm">
                  Top Secret
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
