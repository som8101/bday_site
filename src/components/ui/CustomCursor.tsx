"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.innerWidth <= 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <Heart 
        className={`text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.8)] ${isPointer ? 'fill-rose-400' : ''}`}
        size={24}
        strokeWidth={2.5}
      />
    </motion.div>
  );
}
