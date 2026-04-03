import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, PlayCircle } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    username: "@soda_king",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    text: "Can't explain it, just need it. #DrPepper",
    likes: "1.2M",
  },
  {
    id: 2,
    username: "@gamer_grl",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    text: "The only fuel for a 12-hour stream.",
    likes: "850K",
  },
  {
    id: 3,
    username: "@flavor_chaser",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    text: "Is it cherry? Is it magic? Yes.",
    likes: "2.1M",
  },
  {
    id: 4,
    username: "@midnight_snack",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    text: "Nothing hits like a cold Dr Pepper at 2 AM.",
    likes: "940K",
  },
  {
    id: 5,
    username: "@retro_vibes",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    text: "Tastes like the 90s and the future combined.",
    likes: "1.5M",
  },
];

export function SocialProofSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <section className="py-24 bg-drp-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-drp-red/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-drp-red text-drp-red" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Loved by Millions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what the internet is saying.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pl-6">
            {TESTIMONIALS.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="flex-[0_0_280px] sm:flex-[0_0_320px] min-w-0 relative group cursor-pointer"
              >
                <div className="glass rounded-3xl p-1 overflow-hidden h-[400px] relative border-white/10 group-hover:border-drp-red/50 transition-colors duration-300">
                  <img
                    src={item.image}
                    alt={item.username}
                    className="w-full h-full object-cover rounded-[20px] opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-[20px]" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-16 h-16 text-white/80" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium mb-3 text-lg leading-tight line-clamp-3">
                      "{item.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-drp-red-light font-bold text-sm">{item.username}</span>
                      <span className="text-white/60 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        {item.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
