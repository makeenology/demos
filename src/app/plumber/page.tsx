import { SpotlightHero } from "@/components/SpotlightHero";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { StickyCTA } from "@/components/StickyCTA";
import { DemoBanner } from "@/components/DemoBanner";
import { CheckCircle2, Phone, ShieldCheck, Wrench, Droplets, Flame, Hammer, Star, Clock, MapPin, ArrowRight } from "lucide-react";

const BRAND = "AquaForce Plumbing";
const PHONE = "+27 81 234 5678";
const SLOGAN = "24/7 emergency plumbers — Lenasia, Soweto & South JHB.";

const services = [
  { icon: Droplets, title: "Burst pipes & leaks", desc: "Same-hour response. We pinpoint and fix without ripping up your floors." },
  { icon: Flame, title: "Geyser repair & install", desc: "Solar, electric, gas. SABS-approved units with 5-year warranty." },
  { icon: Wrench, title: "Drain unblocking", desc: "High-pressure jetting. We clear it or you don't pay — guaranteed." },
  { icon: Hammer, title: "Bathroom renovations", desc: "Full strip-and-redo. From R28k turnkey, finished in 5–7 days." },
];

const testimonials = [
  { name: "Fatima Khan", area: "Lenasia", text: "Burst geyser at 11pm — they were here in 40 minutes. Fixed it for half what another quoted." },
  { name: "Sipho Mokoena", area: "Soweto", text: "Reblocked our drain in 30 minutes. Polite, on time, neat." },
  { name: "Riaan van der Merwe", area: "Eldorado Park", text: "Replaced our entire bathroom in 6 days. Beautiful work, no surprises on the bill." },
  { name: "Ayesha Patel", area: "Lenasia South", text: "I trust them with my mother's house. They never overcharge." },
  { name: "Themba Dlamini", area: "Mondeor", text: "Found a leak three other plumbers missed. Saved my ceiling." },
];

const stats = [
  { v: "12+", l: "years in business" },
  { v: "4,200+", l: "jobs completed" },
  { v: "4.9★", l: "Google rating" },
  { v: "<60min", l: "emergency response" },
];

export default function PlumberDemo() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DemoBanner niche="plumbers" />
      <StickyCTA phone={PHONE} name={BRAND} />

      {/* HERO */}
      <SpotlightHero accent="indigo" className="min-h-[88vh] flex flex-col">
        <header className="px-6 lg:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Droplets className="size-6 text-indigo-600" />
            {BRAND}
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#why" className="hover:text-indigo-600">Why us</a>
            <a href="#reviews" className="hover:text-indigo-600">Reviews</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm text-white shadow hover:bg-indigo-700 transition">
            <Phone className="size-4" /> {PHONE}
          </a>
        </header>

        <div className="flex-1 flex items-center px-6 lg:px-12 py-12 lg:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-indigo-700 mb-5">
                <ShieldCheck className="size-3" /> Licensed · Insured · 24/7
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-5">
                When water turns into <span className="text-indigo-600">trouble</span>, we turn up.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-8">{SLOGAN}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-4 text-white font-medium shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition">
                  <Phone className="size-5" /> Call now — free quote
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 backdrop-blur px-7 py-4 font-medium hover:bg-white transition">
                  See services <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
                {stats.map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-bold text-indigo-600">{s.v}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightHero>

      {/* TRUST BAR */}
      <section className="bg-slate-50 border-y border-slate-200 py-6">
        <Marquee duration={30}>
          {["⚡ Same-hour response", "🛡️ 5-year warranty", "💳 Pay after the job", "📋 Transparent pricing", "👨‍🔧 SABS-certified", "🏆 Top-rated in Lenasia", "🚐 6 fully-stocked vans"].map((t, i) => (
            <span key={i} className="text-sm font-medium text-slate-600 whitespace-nowrap">{t}</span>
          ))}
        </Marquee>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-indigo-600 font-semibold text-sm">SERVICES</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Everything plumbing, one number.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-7 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="size-12 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center mb-4">
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-slate-900 text-white py-20 lg:py-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-indigo-400 font-semibold text-sm">WHY {BRAND.split(" ")[0].toUpperCase()}</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 max-w-3xl mx-auto">
                Plumbers who <span className="text-indigo-400">show up</span>, do it once, and don't pad the bill.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: ShieldCheck, t: "5-year workmanship warranty", d: "If we fix it, it stays fixed." },
              { i: Clock, t: "Under 60-min emergency response", d: "Soweto to South JHB, 24/7." },
              { i: CheckCircle2, t: "No surprises on the invoice", d: "Quote upfront, you decide." },
              { i: Star, t: "850+ five-star reviews", d: "Most-trusted in Lenasia." },
            ].map((x, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition h-full">
                  <x.i className="size-6 text-indigo-400 mb-4" />
                  <h3 className="font-semibold mb-1">{x.t}</h3>
                  <p className="text-sm text-slate-300">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-20 lg:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-12">
          <Reveal>
            <div className="text-center">
              <span className="text-indigo-600 font-semibold text-sm">REVIEWS</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">What clients say.</h2>
            </div>
          </Reveal>
        </div>
        <Marquee duration={50}>
          {testimonials.map((t) => (
            <div key={t.name} className="w-[340px] shrink-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-4 fill-amber-500" />))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">"{t.text}"</p>
              <div className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-slate-500 flex items-center gap-1"><MapPin className="size-3" /> {t.area}</div>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 lg:py-28 px-6 lg:px-12 bg-gradient-to-br from-indigo-600 to-violet-700 text-white text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-5">Got a leak? Got a problem.</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-xl mx-auto">Free quote in 5 minutes. Most jobs same-day.</p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-700 px-8 py-4 font-bold shadow-2xl hover:bg-indigo-50 transition">
            <Phone className="size-5" /> {PHONE}
          </a>
        </Reveal>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-10 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2 font-semibold text-white"><Droplets className="size-5 text-indigo-400" />{BRAND}</div>
          <div>© {new Date().getFullYear()} · Demo site by Makeenology</div>
        </div>
      </footer>
    </div>
  );
}
