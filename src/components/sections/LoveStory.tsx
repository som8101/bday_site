"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";

export function LoveStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Title overlay */}
        <div className="absolute top-20 left-0 w-full text-center z-10 pointer-events-none px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white/90"
          >
            Our Love Story
          </motion.h2>
          <div className="w-24 h-[1px] bg-rose-500/50 mx-auto mt-6" />
        </div>

        <motion.div style={{ x }} className="flex gap-16 px-[10vw] items-center h-full pt-16">
          {siteConfig.timeline.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[80vw] md:w-[400px] h-[500px] relative group">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-rose-500/30 group-hover:bg-white/10 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.1)] flex flex-col">
                
                {/* Image Section */}
                <div className="relative h-2/3 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse" /> {/* Placeholder */}
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMyIgLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className="text-rose-300 text-sm font-mono tracking-wider">{item.date}</p>
                    <h3 className="text-white text-2xl font-serif mt-1">{item.title}</h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 h-1/3 flex items-center text-zinc-400 text-lg italic leading-relaxed">
                  "{item.story}"
                </div>

              </div>
            </div>
          ))}
          
          {/* End marker to pad the right side */}
          <div className="w-[10vw] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
