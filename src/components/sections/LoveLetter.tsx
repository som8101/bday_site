"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/siteConfig";

export function LoveLetter() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const letterText = `My dearest ${siteConfig.names.girlfriend},\n\nEvery moment with you feels like a dream. Before I met you, I never knew it was possible to love someone this much. You are my sunshine on a cloudy day, my safe space, and my greatest adventure.\n\nOn this special day, I want to remind you how incredibly beautiful, smart, and kind you are. You make me want to be a better person every single day.\n\nHappy Birthday, my love. Here is to a hundred more birthdays together.\n\nForever yours,\n${siteConfig.names.boyfriend}`;

  const paragraphs = letterText.split("\n\n");

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-12 bg-[#fdf2f8] dark:bg-[#120a0f] min-h-screen flex items-center justify-center">
      <motion.div 
        style={{ opacity, y }}
        className="max-w-2xl w-full bg-white/60 dark:bg-black/40 backdrop-blur-md p-8 md:p-16 rounded-3xl shadow-xl border border-rose-200/50 dark:border-rose-900/30"
      >
        <div className="space-y-8 font-serif text-lg md:text-xl leading-relaxed text-zinc-800 dark:text-zinc-200">
          {paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.2 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
