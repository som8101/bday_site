"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        className="fixed inset-0 z-[150] bg-[#0a0a0a] flex flex-col items-center justify-center"
      >
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mb-8"
          >
            <Heart size={48} className="text-rose-400 fill-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.6)]" strokeWidth={1} />
          </motion.div>
          
          <div className="h-1 w-64 bg-zinc-800 rounded-full overflow-hidden mb-4 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-rose-400"
              style={{ width: `${progress}%` }}
              layoutId="loadingBar"
            />
          </div>
          
          <p className="text-zinc-500 font-serif italic text-lg opacity-80">
            {progress < 100 ? "My little surprise is getting ready..." : "Ready to be amazed."}
          </p>
          <p className="text-zinc-700 text-sm mt-2 font-mono">{progress}%</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
