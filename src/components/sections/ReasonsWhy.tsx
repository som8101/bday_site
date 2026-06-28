"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function ReasonsWhy() {
  return (
    <section className="py-32 px-4 bg-zinc-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-glow">50 Reasons I Love You</h2>
          <p className="text-zinc-500 max-w-lg mx-auto">Just a few of the million reasons why you are my everything.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 10) * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all flex items-start gap-4 group"
            >
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart size={14} className="text-rose-500 fill-rose-500/50" />
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                <span className="text-rose-400/50 text-sm font-mono mr-2">#{idx + 1}</span>
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
