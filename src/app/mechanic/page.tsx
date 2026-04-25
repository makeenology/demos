import { SpotlightHero } from "@/components/SpotlightHero";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { StickyCTA } from "@/components/StickyCTA";
import { DemoBanner } from "@/components/DemoBanner";
import { IMG } from "@/lib/images";
import { Wrench, Gauge, Battery, Disc, ShieldCheck, Clock, Phone, Star, MapPin, ArrowRight, Settings } from "lucide-react";

const BRAND = "Iron & Oil Auto";
const PHONE = "+27 73 444 1199";

const services = [
  { icon: Settings, title: "Major service", price: "from R1,950", desc: "Oil, filters, plugs, full diagnostic.", img: IMG.mechanic.services[0] },
  { icon: Disc, title: "Brake & clutch", price: "from R1,400", desc: "Pads, discs, full replacements. OEM only.", img: IMG.mechanic.services[1] },
  { icon: Battery, title: "Battery & electrical", price: "from R650", desc: "Test, replace, alternator diagnostics.", img: IMG.mechanic.services[2] },
  { icon: Gauge, title: "Diagnostic scan", price: "R450", desc: "OBD2 scan, fault codes, written report.", img: IMG.mechanic.services[3] },
  { icon: Wrench, title: "Suspension & shocks", price: "from R2,200", desc: "OE-grade, lifetime alignment included.", img: IMG.mechanic.services[4] },
  { icon: ShieldCheck, title: "RWC roadworthy", price: "R650", desc: "Same-day, registered test centre.", img: IMG.mechanic.services[5] },
];

export default function MechanicDemo() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <DemoBanner niche="mechanics" />
      <StickyCTA phone={PHONE} name={BRAND} />

      {/* HERO */}
      <SpotlightHero accent="amber" className="min-h-[88vh] flex flex-col bg-zinc-950 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.mechanic.hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none" />
        <header className="px-6 lg:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Wrench className="size-6 text-amber-500" />
            {BRAND}
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#services" className="hover:text-amber-500">Services</a>
            <a href="#why" className="hover:text-amber-500">Why us</a>
            <a href="#contact" className="hover:text-amber-500">Contact</a>
          </nav>
          <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 rounded-md bg-amber-500 text-zinc-950 px-4 py-2 text-sm font-bold hover:bg-amber-400 transition">
            <Phone className="size-4" /> Book now
          </a>
        </header>

        <div className="flex-1 flex items-center px-6 lg:px-12 py-12">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 mb-5">
                <ShieldCheck className="size-3" /> RMI-accredited · 12-month warranty
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6 uppercase">
                Honest <span className="text-amber-500">mechanics.</span><br />Real <span className="text-amber-500">work.</span><br />Fair <span className="text-amber-500">price.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-9">
                17 years fixing cars in Lenasia. We service everything from a Polo to a Prado.
                Quote you upfront, photos of every job, no surprises.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 bg-amber-500 text-zinc-950 px-8 py-4 font-bold uppercase tracking-wide hover:bg-amber-400 transition">
                  <Phone className="size-5" /> Book a slot
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 border border-zinc-700 px-8 py-4 hover:bg-zinc-900 transition">
                  See pricing <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <div><div className="text-3xl font-black text-amber-500">17</div><div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">years</div></div>
                <div><div className="text-3xl font-black text-amber-500">12k+</div><div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">cars done</div></div>
                <div><div className="text-3xl font-black text-amber-500">4.8★</div><div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">avg rating</div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightHero>

      {/* TICKER */}
      <section className="bg-amber-500 text-zinc-950 py-4 border-y-4 border-zinc-950">
        <Marquee duration={25}>
          {["⚡ FREE INSPECTION", "💰 PAY AFTER", "📸 PHOTO REPORTS", "🛠️ OE PARTS ONLY", "🚗 COURTESY CAR R0", "✅ RMI ACCREDITED", "🔧 17 YEARS EXPERIENCE"].map((t, i) => (
            <span key={i} className="text-sm font-black uppercase tracking-widest whitespace-nowrap">{t}</span>
          ))}
        </Marquee>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-14">
              <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">Services & pricing</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 uppercase">Upfront. Always.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group relative h-full border border-zinc-800 bg-zinc-900/50 hover:border-amber-500 hover:bg-zinc-900 transition overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    <s.icon className="absolute top-4 left-4 size-8 text-amber-500" strokeWidth={1.5} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">{s.title}</h3>
                    <div className="text-amber-500 font-mono text-sm mb-3">{s.price}</div>
                    <p className="text-zinc-400 text-sm">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-20 lg:py-28 px-6 lg:px-12 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">Why us</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 uppercase leading-tight">
              Mechanics<br />who <span className="text-amber-500">don't BS.</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-md">
              You drop the car, we WhatsApp you photos and a quote. You approve, we fix. You pay when it runs.
              Simple.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {[
              { i: ShieldCheck, t: "12-month warranty", d: "On every part we install" },
              { i: Clock, t: "Same-day on most jobs", d: "Drop 8am, drive home 5pm" },
              { i: Star, t: "850+ verified reviews", d: "Lenasia's top-rated workshop" },
              { i: Wrench, t: "All makes & models", d: "Asian, German, American, SA" },
            ].map((x, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="border border-zinc-700 bg-zinc-950 p-5 h-full">
                  <x.i className="size-5 text-amber-500 mb-3" />
                  <h3 className="font-bold uppercase text-sm tracking-tight mb-1">{x.t}</h3>
                  <p className="text-xs text-zinc-500">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 lg:py-28 px-6 lg:px-12 bg-amber-500 text-zinc-950 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-5">Need your car looked at?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto font-medium">Free quote, no commitment. Drop it in or call to book a slot.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 bg-zinc-950 text-amber-500 px-8 py-4 font-black uppercase hover:bg-zinc-900 transition">
              <Phone className="size-5" /> {PHONE}
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm font-medium">
            <MapPin className="size-4" /> 14 Industry Road, Lenasia, JHB · Mon–Sat 7:30am–5pm
          </div>
        </Reveal>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-10 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2 text-zinc-300 font-bold uppercase"><Wrench className="size-5 text-amber-500" />{BRAND}</div>
          <div>© {new Date().getFullYear()} · Demo site by Makeenology</div>
        </div>
      </footer>
    </div>
  );
}
