"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with abstract gradients (Aurora effect) */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-pink-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight mb-4 text-glow">
            Happy Birthday <span className="text-rose-400">❤️</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mt-4 italic">
            "Today is all about the most beautiful person in my life."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16"
        >
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2"
          >
            Open Your Surprise
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
