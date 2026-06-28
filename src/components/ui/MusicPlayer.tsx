"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(siteConfig.musicPath);
    audioRef.current.loop = true;
    
    // Attempt auto-play with lower volume
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/70 dark:bg-black/70 backdrop-blur-lg border border-white/20 p-3 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <motion.div 
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-10 h-10 rounded-full border-2 border-rose-300 flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 overflow-hidden"
            >
               <Music size={16} className="text-rose-500" />
            </motion.div>
            <div className="flex gap-2">
              <button onClick={togglePlay} className="p-2 bg-rose-100 hover:bg-rose-200 dark:bg-rose-900/50 dark:hover:bg-rose-800/50 rounded-full transition-colors">
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>
              <button onClick={toggleMute} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center border border-white/20 hover:scale-105 transition-transform"
      >
        <motion.div animate={isPlaying ? { scale: [1, 1.2, 1] } : {}} transition={{ repeat: Infinity, duration: 2 }}>
           <Music size={20} className={isPlaying ? "text-rose-500" : "text-zinc-500"} />
        </motion.div>
      </button>
    </div>
  );
}
