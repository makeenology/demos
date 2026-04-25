import Link from "next/link";

export function DemoBanner({ niche }: { niche: string }) {
  return (
    <div className="sticky top-0 z-50 bg-amber-100/90 backdrop-blur border-b border-amber-300 text-amber-900 text-xs py-2 px-4 flex items-center justify-between gap-3">
      <span>
        ✨ <b>Demo site for {niche}</b> · Built by{" "}
        <a href="https://makeenology.org" className="underline">Makeenology</a>
      </span>
      <Link
        href="/"
        className="px-3 py-1 rounded-full bg-amber-900 text-amber-50 hover:bg-amber-800 transition"
      >
        ← All demos
      </Link>
    </div>
  );
}
