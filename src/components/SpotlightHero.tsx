"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SpotlightHero({
  children,
  className,
  accent = "indigo",
}: {
  children: ReactNode;
  className?: string;
  accent?: "indigo" | "amber" | "rose" | "emerald" | "violet";
}) {
  const accents: Record<string, string> = {
    indigo: "bg-indigo-500/30",
    amber: "bg-amber-500/30",
    rose: "bg-rose-500/30",
    emerald: "bg-emerald-500/30",
    violet: "bg-violet-500/30",
  };
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className={cn(
          "absolute -top-32 -left-32 w-[60vw] h-[60vw] rounded-full blur-3xl pointer-events-none",
          accents[accent]
        )}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        className={cn(
          "absolute -bottom-32 -right-32 w-[60vw] h-[60vw] rounded-full blur-3xl pointer-events-none",
          accents[accent]
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
