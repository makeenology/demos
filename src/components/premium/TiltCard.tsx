"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const transform = useMotionTemplate`perspective(1000px) rotateX(${sy}deg) rotateY(${sx}deg)`;
  return (
    <motion.div
      ref={ref}
      style={{ transform }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const px = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const py = ((e.clientY - r.top) / r.height - 0.5) * 2;
        x.set(px * 8);
        y.set(-py * 8);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
