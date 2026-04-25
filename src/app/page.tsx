import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/premium/TiltCard";
import { Sparkles } from "@/components/premium/Sparkles";
import { BackgroundBeams } from "@/components/premium/BackgroundBeams";
import { TextGenerate } from "@/components/premium/TextGenerate";
import { GradientText } from "@/components/premium/GradientText";
import { ShimmerButton } from "@/components/premium/ShimmerButton";
import { IMG } from "@/lib/images";
import {
  Droplets, Scissors, Wrench, UtensilsCrossed, Scale, ShoppingBag, Trees, ArrowRight,
} from "lucide-react";

const demos = [
  { href: "/plumber",      name: "Plumber / Trades",        tag: "Service business",       blurb: "Spotlight hero, trust bar, urgency CTA — built to convert emergency callers.",  Icon: Droplets,        grad: "from-indigo-500 via-violet-600 to-fuchsia-600", img: IMG.cards.plumber },
  { href: "/salon",        name: "Salon / Spa / Barber",    tag: "Luxe service",           blurb: "Editorial typography, soft palette, WhatsApp-to-book. Premium feel for luxe trades.",  Icon: Scissors,         grad: "from-rose-400 via-stone-300 to-amber-300", img: IMG.cards.salon },
  { href: "/mechanic",     name: "Mechanic / Auto",         tag: "Automotive",             blurb: "Industrial dark theme, upfront pricing, photo-report workflow. Trust = bookings.",       Icon: Wrench,           grad: "from-amber-500 via-orange-600 to-rose-700", img: IMG.cards.mechanic },
  { href: "/restaurant",   name: "Restaurant + Ordering",   tag: "Food / hospitality",     blurb: "Click-to-WhatsApp ordering. Menu, fire, conversion — no cart needed.",                  Icon: UtensilsCrossed, grad: "from-orange-700 via-rose-700 to-amber-600", img: IMG.cards.restaurant },
  { href: "/professional", name: "Lawyer / Doctor / Accountant", tag: "Premium professional", blurb: "Editorial gravitas, practice areas, senior-team showcase. Pricing follows perception.",  Icon: Scale,            grad: "from-emerald-700 via-stone-700 to-amber-800", img: IMG.cards.professional },
  { href: "/shop",         name: "Boutique Ecommerce",      tag: "WooCommerce",            blurb: "Bento grid, hover-tilt cards, animated marquee. One visual ceiling, three feature tiers.", Icon: ShoppingBag,      grad: "from-rose-600 via-fuchsia-700 to-amber-500", img: IMG.cards.shop },
  { href: "/guesthouse",   name: "Guesthouse / B&B",        tag: "Hospitality",            blurb: "Live booking widget, sparkles, magaliesberg-quiet luxury. Books direct, skips Booking.com fees.", Icon: Trees,        grad: "from-emerald-800 via-emerald-900 to-amber-700", img: IMG.cards.guesthouse },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center px-6 lg:px-12 py-20 text-center">
        <Sparkles count={120} className="absolute inset-0 w-full h-full" />
        <BackgroundBeams count={10} />
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 size-[110vw] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[80vw] rounded-full bg-rose-500/15 blur-3xl" />

        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-stone-300 mb-7">
            ✦ Live demos · By Makeenology
          </span>
        </Reveal>

        <h1 className="relative font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight max-w-5xl">
          <TextGenerate words="Pick a vertical." className="block" />
          <GradientText from="from-rose-400" via="via-fuchsia-400" to="to-amber-300" className="font-normal italic">
            <TextGenerate words="See your future." />
          </GradientText>
        </h1>

        <Reveal delay={0.6}>
          <p className="text-lg md:text-xl text-stone-400 mt-7 max-w-2xl">
            Seven live sample sites covering the niches we build for. Click any one — the design quality you see
            is the floor, not the ceiling.
          </p>
        </Reveal>

        <Reveal delay={0.8}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <ShimmerButton href="#demos" background="linear-gradient(110deg,#1e1b4b,#3730a3)">
              Browse demos <ArrowRight className="size-4" />
            </ShimmerButton>
            <a href="https://makeenology.org" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-700 px-7 py-3.5 text-sm hover:bg-stone-800 transition">
              About Makeenology
            </a>
          </div>
        </Reveal>
      </section>

      {/* GRID */}
      <section id="demos" className="relative py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="uppercase text-xs tracking-[0.3em] text-rose-400 font-medium">The demos</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-2">
                  Seven verticals. <em className="text-rose-400">One visual ceiling.</em>
                </h2>
              </div>
              <p className="text-stone-400 text-sm max-w-md">
                Built with shadcn, Aceternity, Magic UI, Framer Motion. Reskinned for any niche you bring us.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {demos.map((d, i) => (
              <Reveal key={d.href} delay={i * 0.06}>
                <Link href={d.href} className="block group">
                  <TiltCard className="rounded-3xl overflow-hidden border border-stone-800 bg-stone-900 hover:border-stone-600 transition">
                    <div className={`relative aspect-[5/3] bg-gradient-to-br ${d.grad}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                      <div className="absolute bottom-3 left-4 inline-flex items-center gap-2 text-white/90">
                        <d.Icon className="size-5" strokeWidth={1.5} />
                      </div>
                      <span className="absolute top-4 left-4 bg-stone-950/70 backdrop-blur text-stone-100 text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 rounded-full">
                        {d.tag}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl mb-2 group-hover:text-rose-400 transition">{d.name}</h3>
                      <p className="text-sm text-stone-400 leading-relaxed mb-5">{d.blurb}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-rose-400 group-hover:gap-2 transition-all">
                        View demo <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-rose-900 via-stone-900 to-emerald-900 text-stone-100 text-center relative overflow-hidden">
        <Sparkles count={40} className="absolute inset-0 w-full h-full opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl font-light mb-5">
              Ready to <GradientText from="from-amber-300" via="via-rose-300" to="to-fuchsia-300">build yours?</GradientText>
            </h2>
            <p className="text-stone-300 mb-10 text-lg">
              Pick the demo closest to your business. We'll customise, brand it, launch in 5–10 working days.
            </p>
            <ShimmerButton href="https://wa.me/27000000000" background="linear-gradient(110deg,#22c55e,#10b981)">
              Start a conversation
            </ShimmerButton>
          </Reveal>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-500 py-10 px-6 lg:px-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="font-serif italic text-stone-300">Makeenology · Demo Hub</div>
          <div>© {new Date().getFullYear()} · All sample brands are fictional</div>
        </div>
      </footer>
    </main>
  );
}
