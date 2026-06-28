"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-32 bg-black relative flex justify-center items-center px-4" ref={containerRef}>
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: isPlaying ? [1, 1.1, 1] : 1, opacity: isPlaying ? 0.3 : 0.1 }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-[80vw] h-[80vh] bg-rose-500/20 rounded-full blur-[120px]" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(244,63,94,0.1)] border border-white/10 group"
      >
        <video
          ref={videoRef}
          src={siteConfig.videoPath}
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Play Button Overlay */}
        <div 
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
          onClick={togglePlay}
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-2" />}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
