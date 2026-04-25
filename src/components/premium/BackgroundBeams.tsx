"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Beam = { y: number; duration: number; delay: number };

export function BackgroundBeams({ count = 8 }: { count?: number }) {
  const [beams, setBeams] = useState<Beam[]>([]);
  useEffect(() => {
    setBeams(
      Array.from({ length: count }, (_, i) => ({
        y: (i * 100) / count + Math.random() * 8,
        duration: 6 + Math.random() * 4,
        delay: i * 0.7,
      }))
    );
  }, [count]);

  if (!beams.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beams.map((b, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] w-[40%] bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: "-110%", y: `${b.y}%`, rotate: -8 }}
          animate={{ x: "210%" }}
          transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: "linear" }}
          style={{ filter: "blur(0.5px)" }}
        />
      ))}
    </div>
  );
}
