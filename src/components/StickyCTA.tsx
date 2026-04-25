"use client";
import { Phone, MessageCircle } from "lucide-react";

export function StickyCTA({ phone, name }: { phone: string; name: string }) {
  const wa = phone.replace(/[^0-9]/g, "").replace(/^0/, "27");
  const msg = encodeURIComponent(`Hi ${name}, I'd like to enquire.`);
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      <a
        href={`https://wa.me/${wa}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
      <a
        href={`tel:${phone}`}
        className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-slate-700 transition"
      >
        <Phone className="size-4" />
        Call
      </a>
    </div>
  );
}
