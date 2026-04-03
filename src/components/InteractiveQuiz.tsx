import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Check, X, Gift } from "lucide-react";

const FLAVORS = [
  "Cherry", "Amaretto", "Almond", "Blackberry", "Licorice", 
  "Caramel", "Plum", "Vanilla", "Cola", "Pepper"
];

export function InteractiveQuiz() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleFlavor = (flavor: string) => {
    if (selected.includes(flavor)) {
      setSelected(selected.filter(f => f !== flavor));
    } else if (selected.length < 3) {
      setSelected([...selected, flavor]);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-drp-black to-drp-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        <div className="glass-red rounded-[2.5rem] p-8 md:p-16 text-center border-drp-red/20 shadow-2xl shadow-drp-red/10">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                  Think You Know The 23?
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Select 3 flavors you think are in the secret vault. Get it right (or close enough) and unlock a reward.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {FLAVORS.map((flavor) => {
                    const isSelected = selected.includes(flavor);
                    return (
                      <motion.button
                        key={flavor}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleFlavor(flavor)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                          isSelected 
                            ? "bg-drp-red text-white shadow-[0_0_15px_rgba(139,0,0,0.5)] border-transparent" 
                            : "bg-white/5 text-gray-400 border border-white/10 hover:border-drp-red/50 hover:text-white"
                        }`}
                      >
                        {flavor}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="flex flex-col items-center gap-4">
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                    {selected.length} / 3 Selected
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={selected.length !== 3}
                    onClick={() => setSubmitted(true)}
                    className="px-10 py-4 bg-white text-drp-black rounded-full font-black text-lg uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  >
                    Unlock Vault
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-drp-red rounded-full flex items-center justify-center mb-6 box-glow">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                  Close Enough.
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                  We'll never confirm if {selected.join(", ")} are actually in there. But we admire your confidence. Here's 15% off your next order.
                </p>
                
                <div className="bg-black/50 border border-drp-red/30 rounded-xl p-4 flex items-center gap-4 mb-8">
                  <span className="font-mono text-2xl font-bold tracking-widest text-drp-red-light">MYSTERY15</span>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-colors">
                    Copy
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-drp-red text-white rounded-full font-bold text-lg box-glow"
                >
                  Shop Now
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
