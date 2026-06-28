"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { Heart, Lock } from "lucide-react";

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === siteConfig.password.toLowerCase()) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black">
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft glowing background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px]" />
      </div>
      
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-sm px-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-6 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
            <Lock className="text-rose-400" size={24} />
          </div>
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-serif text-white tracking-wide">A Secret Surprise</h2>
            <p className="text-zinc-400 text-sm">Enter the password to unlock.</p>
          </div>

          <motion.div animate={error ? { x: [-10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.4 }} className="w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-center tracking-widest placeholder:tracking-normal placeholder:text-zinc-600"
              autoFocus
            />
          </motion.div>

          <button type="submit" className="w-full bg-rose-500/80 hover:bg-rose-500 text-white rounded-xl py-3 font-medium transition-all shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)]">
            Unlock
          </button>
        </div>
      </motion.form>
    </div>
  );
}
