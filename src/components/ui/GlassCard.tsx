import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
}

export function GlassCard({ children, className, intensity = "medium", ...props }: GlassCardProps) {
  const intensityClasses = {
    light: "bg-white/20 dark:bg-black/20 border-white/10",
    medium: "bg-white/40 dark:bg-black/40 border-white/30",
    heavy: "bg-white/60 dark:bg-black/60 border-white/50",
  };

  return (
    <motion.div
      className={cn(
        "backdrop-blur-xl border rounded-2xl shadow-xl overflow-hidden",
        intensityClasses[intensity],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
