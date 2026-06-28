"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export function FutureDreams() {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-[#0a0a0a] min-h-screen relative flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-glow">To Our Future</h2>
          <p className="text-zinc-500">The best is yet to come.</p>
        </motion.div>

        <div className="relative border-l border-rose-200 dark:border-rose-900/50 ml-4 md:ml-12 space-y-16">
          {siteConfig.futureDreams.map((dream, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.8)] group-hover:scale-150 transition-transform" />
              
              <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all">
                <span className="text-sm font-mono text-rose-400 mb-2 block tracking-widest uppercase">{dream.year}</span>
                <h3 className="text-2xl font-serif mb-2 text-zinc-900 dark:text-white">{dream.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{dream.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
