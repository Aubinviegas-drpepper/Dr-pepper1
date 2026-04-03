import { motion } from "motion/react";
import { Instagram } from "lucide-react";

const SOCIAL_POSTS = [
  { id: 1, image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=400&auto=format&fit=crop", type: "ig" },
  { id: 2, image: "https://images.unsplash.com/photo-1527004013197-933c4bcc61f4?q=80&w=400&auto=format&fit=crop", type: "tt" },
  { id: 3, image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=400&auto=format&fit=crop", type: "ig" },
  { id: 4, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop", type: "tt" },
  { id: 5, image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop", type: "ig" },
];

export function SocialLoop() {
  return (
    <section className="py-24 bg-drp-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Show Us Your <span className="text-drp-red">Moment</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Tag @drpepper and #OneOfAKind to be featured on our wall of fame.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/50 text-white font-bold transition-colors"
            >
              <Instagram className="w-5 h-5" /> Follow Us
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SOCIAL_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl aspect-[4/5] ${i > 1 ? 'hidden md:block' : ''} ${i > 2 ? 'lg:block hidden' : ''}`}
            >
              <img 
                src={post.image} 
                alt="Social post" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-drp-red/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bold text-sm">@drpepper_fan</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
