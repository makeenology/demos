"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerate({ words, className }: { words: string; className?: string }) {
  const arr = words.split(" ");
  return (
    <span className={cn("inline-block", className)}>
      {arr.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(8px)", y: 6 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.07 }}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
