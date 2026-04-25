import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GradientText({
  children,
  from = "from-rose-400",
  via = "via-fuchsia-400",
  to = "to-amber-300",
  className,
}: {
  children: ReactNode;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
}) {
  return (
    <span className={cn(`bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent`, className)}>
      {children}
    </span>
  );
}
