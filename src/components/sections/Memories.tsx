"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { GlassCard } from "../ui/GlassCard";

export function Memories() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-glow text-white">Favorite Memories</h2>
          <div className="w-16 h-[1px] bg-rose-500/50 mx-auto" />
        </motion.div>

        <div className="space-y-32">
          {siteConfig.memories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <GlassCard className="aspect-[4/3] relative group" intensity="light">
                  <Image
                    src={item.photo}
                    alt={item.memory}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMyIgLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </GlassCard>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4 px-4 md:px-8 text-center md:text-left">
                <p className="text-rose-400 font-mono text-sm tracking-widest">{item.date}</p>
                <h3 className="text-3xl font-serif text-white">{item.memory}</h3>
                <p className="text-zinc-400 italic text-lg leading-relaxed">
                  "{item.note}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
