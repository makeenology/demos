"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ShimmerButton({
  children,
  href,
  onClick,
  className,
  shimmer = "rgba(255,255,255,0.6)",
  background = "linear-gradient(110deg,#0f172a,#1e293b)",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  shimmer?: string;
  background?: string;
}) {
  const inner = (
    <span
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-xl transition active:scale-[0.97]",
        className
      )}
      style={{ background }}
    >
      <span className="pointer-events-none absolute inset-y-0 -inset-x-1/2 animate-[shimmer_2.8s_linear_infinite]"
            style={{ background: `linear-gradient(110deg, transparent 40%, ${shimmer} 50%, transparent 60%)` }} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <style>{`@keyframes shimmer { 0%{transform:translateX(-60%)} 100%{transform:translateX(60%)} }`}</style>
    </span>
  );
  if (href) return <a href={href}>{inner}</a>;
  return <button onClick={onClick} type="button">{inner}</button>;
}
