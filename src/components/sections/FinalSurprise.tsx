"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/siteConfig";
import { Heart } from "lucide-react";

export function FinalSurprise() {
  const [isBirthday, setIsBirthday] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const targetDate = new Date(siteConfig.birthdayDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsBirthday(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const triggerSurprise = () => {
    setRevealed(true);
    
    // Fireworks effect
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  if (!isBirthday) {
    return (
      <section className="py-32 bg-black text-white min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-serif mb-8 text-zinc-400">The big day is almost here...</h2>
        <div className="flex gap-4 md:gap-8 text-center font-mono">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-light text-rose-400 mb-2 w-20 md:w-24 bg-white/5 py-4 rounded-xl border border-white/10">
                {value.toString().padStart(2, '0')}
              </div>
              <span className="text-zinc-500 text-sm uppercase tracking-widest">{unit}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="button"
            exit={{ opacity: 0, scale: 0.8 }}
            className="z-10 flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-12 text-glow">
              🎉 Happy Birthday 🎉
            </h2>
            <p className="text-xl text-zinc-400 italic max-w-2xl text-center mb-16 px-4">
              "If I had one wish, I'd choose you again... every single time. Happy Birthday, my love. ❤️"
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerSurprise}
              className="px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full text-white font-serif text-2xl shadow-[0_0_40px_rgba(244,63,94,0.6)] hover:shadow-[0_0_60px_rgba(244,63,94,0.8)] transition-all flex items-center gap-3"
            >
              I Love You <Heart className="fill-white" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="forever"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="z-10 text-center"
          >
            <h1 className="text-8xl md:text-[150px] font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-400 to-rose-300 animate-pulse text-glow">
              ∞ Forever ∞
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Hearts when revealed */}
      {revealed && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
              animate={{ 
                y: "-10vh", 
                x: `${Math.random() * 100}vw`,
                opacity: [0, 0.8, 0] 
              }}
              transition={{ 
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute text-rose-500/50"
              style={{ scale: Math.random() * 2 + 0.5 }}
            >
              <Heart className="fill-current" />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
