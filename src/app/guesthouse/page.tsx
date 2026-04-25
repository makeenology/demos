import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { StickyCTA } from "@/components/StickyCTA";
import { DemoBanner } from "@/components/DemoBanner";
import { TiltCard } from "@/components/premium/TiltCard";
import { ShimmerButton } from "@/components/premium/ShimmerButton";
import { TextGenerate } from "@/components/premium/TextGenerate";
import { Sparkles } from "@/components/premium/Sparkles";
import { GradientText } from "@/components/premium/GradientText";
import { Bed, Wifi, Coffee, Waves, MapPin, Calendar, Star, ArrowRight, Trees, Wind, Users } from "lucide-react";

const BRAND = "Acacia House";
const PHONE = "+27 11 990 4421";

const rooms = [
  { name: "Garden Suite", from: "R1,450", desc: "King bed · garden view · private patio · sleeps 2", grad: "from-emerald-200 via-amber-100 to-rose-100" },
  { name: "Loft Studio", from: "R1,180", desc: "Queen bed · skylight · kitchenette · sleeps 2", grad: "from-amber-200 via-stone-100 to-emerald-100" },
  { name: "Family Cottage", from: "R2,200", desc: "2 bedrooms · lounge · braai · sleeps 5", grad: "from-stone-200 via-rose-100 to-amber-100" },
];

export default function GuesthouseDemo() {
  return (
    <div className="min-h-screen bg-[#fbf8f3] text-stone-900">
      <DemoBanner niche="guesthouses & B&Bs" />
      <StickyCTA phone={PHONE} name={BRAND} />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[95vh] flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-stone-800 to-amber-900" />
        <Sparkles count={50} className="absolute inset-0 w-full h-full opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 size-[100vw] rounded-full bg-amber-500/15 blur-3xl" />

        <header className="relative z-10 px-6 lg:px-12 py-6 flex items-center justify-between text-stone-100">
          <div className="font-serif italic text-2xl tracking-wide flex items-center gap-2">
            <Trees className="size-5 text-amber-300" /> {BRAND}
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#rooms" className="hover:text-amber-300 transition">Rooms</a>
            <a href="#experience" className="hover:text-amber-300 transition">Experience</a>
            <a href="#book" className="hover:text-amber-300 transition">Reserve</a>
          </nav>
          <a href="#book" className="hidden md:inline-flex items-center gap-2 border border-amber-300/50 text-amber-100 px-5 py-2 text-sm hover:bg-amber-300/10 transition">
            Check availability
          </a>
        </header>

        <div className="relative z-10 flex-1 grid lg:grid-cols-2 items-center px-6 lg:px-12 py-16 gap-10 text-stone-100">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-stone-950/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-amber-300 mb-7">
                <Star className="size-3 fill-amber-300" /> 4.96 · Superhost · Magaliesberg
              </span>
            </Reveal>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-7">
              <TextGenerate words="Quiet" />{" "}
              <GradientText from="from-amber-300" via="via-rose-300" to="to-emerald-300" className="italic font-normal">like you forgot</GradientText><br />
              <TextGenerate words="it could be." />
            </h1>
            <Reveal delay={0.6}>
              <p className="text-lg text-stone-300 max-w-md mb-9 leading-relaxed">
                A four-room guesthouse on a working olive farm. 75 minutes from Sandton, ten thousand miles
                from your inbox.
              </p>
            </Reveal>
            <Reveal delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-3">
                <ShimmerButton href="#book" background="linear-gradient(110deg,#065f46,#047857)">
                  <Calendar className="size-4" /> Check availability
                </ShimmerButton>
                <a href="#rooms" className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-500/50 px-7 py-3.5 text-sm hover:bg-stone-800 transition">
                  See the rooms <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.8}>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone-400">
                <span className="flex items-center gap-2"><Wifi className="size-4" /> Fast Wi-Fi</span>
                <span className="flex items-center gap-2"><Waves className="size-4" /> Heated pool</span>
                <span className="flex items-center gap-2"><Coffee className="size-4" /> Farm breakfast</span>
                <span className="flex items-center gap-2"><Wind className="size-4" /> A/C in every room</span>
              </div>
            </Reveal>
          </div>

          {/* booking widget */}
          <Reveal delay={0.4} className="lg:justify-self-end w-full max-w-md">
            <TiltCard className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl shadow-emerald-900/40 p-6 text-stone-900">
              <div className="flex items-center justify-between mb-5">
                <span className="font-serif italic text-xl">Reserve</span>
                <span className="text-xs uppercase tracking-widest text-emerald-700">Best rate guarantee</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest text-stone-500">Check in</span>
                  <input type="date" className="w-full mt-1 border border-stone-300 rounded-lg px-3 py-2 text-sm" defaultValue="2026-05-14" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest text-stone-500">Check out</span>
                  <input type="date" className="w-full mt-1 border border-stone-300 rounded-lg px-3 py-2 text-sm" defaultValue="2026-05-17" />
                </label>
              </div>
              <label className="block mb-4">
                <span className="text-[11px] uppercase tracking-widest text-stone-500">Guests</span>
                <select className="w-full mt-1 border border-stone-300 rounded-lg px-3 py-2 text-sm">
                  <option>2 adults</option><option>1 adult</option><option>2 adults · 1 child</option><option>2 adults · 2 children</option>
                </select>
              </label>
              <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3.5 rounded-xl text-sm font-medium tracking-wide transition flex items-center justify-center gap-2">
                <Calendar className="size-4" /> See available rooms
              </button>
              <div className="mt-3 text-center text-xs text-stone-500">Free cancellation up to 48hrs · No prepayment</div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* TICKER */}
      <section className="bg-amber-50 border-y border-amber-200 py-4 overflow-hidden">
        <Marquee duration={30}>
          {["✦ FREE FARM BREAKFAST", "✦ HEATED POOL", "✦ 4 PRIVATE TRAILS", "✦ FIRE-PIT NIGHTLY", "✦ DOG-FRIENDLY", "✦ 75 MIN FROM JHB", "✦ STARGAZING DECK"].map((t, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.3em] font-medium text-stone-700 whitespace-nowrap">{t}</span>
          ))}
        </Marquee>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="uppercase text-xs tracking-[0.3em] text-emerald-700 font-medium">The rooms</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-3">Four ways to stay.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {rooms.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <TiltCard className="rounded-3xl overflow-hidden bg-white border border-stone-200 group">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${r.grad}`}>
                    <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-6 border border-white/40 grid place-items-center">
                      <Bed className="size-14 text-white/60" strokeWidth={1} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-2xl">{r.name}</h3>
                      <div className="text-right">
                        <div className="text-xs uppercase tracking-widest text-stone-500">From</div>
                        <div className="font-mono text-emerald-800 text-lg">{r.from}</div>
                      </div>
                    </div>
                    <p className="text-sm text-stone-600 mb-5">{r.desc}</p>
                    <button className="w-full border border-stone-900 text-stone-900 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition">
                      View dates
                    </button>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="uppercase text-xs tracking-[0.3em] text-emerald-700 font-medium">The experience</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-3 mb-6 leading-tight">
              You'll come for the views.<br />Stay for the <em className="text-emerald-700">silence.</em>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-7">
              Acacia House sits on a 14-hectare olive farm in the Magaliesberg. Mornings start with farm
              eggs and our own honey. Afternoons disappear into the pool or one of four trails through the grove.
              Evenings end at the fire pit, under more stars than you remember existing.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { i: Coffee, t: "Farm breakfast", d: "Included" },
                { i: Waves, t: "Heated pool", d: "Year-round" },
                { i: Trees, t: "Olive grove walks", d: "4 trails" },
                { i: Users, t: "Private events", d: "On request" },
              ].map((x, i) => (
                <div key={i} className="flex gap-3">
                  <x.i className="size-5 text-emerald-700 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="font-serif text-base">{x.t}</div>
                    <div className="text-xs text-stone-500">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <TiltCard className="aspect-[4/5] rounded-3xl overflow-hidden">
              <div className="relative h-full bg-gradient-to-br from-emerald-700 via-emerald-800 to-stone-800">
                <div className="absolute inset-0 bg-grid opacity-15" />
                <div className="absolute inset-0 grid place-items-center">
                  <Trees className="size-32 text-emerald-300/40" strokeWidth={0.7} />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-5 rounded-2xl backdrop-blur">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-amber-500" />)}
                  </div>
                  <p className="font-serif italic text-sm text-stone-700 mb-2">"Best weekend we've had in years. We're already booking December."</p>
                  <div className="text-xs text-stone-500">— Karim & Sara, Cape Town</div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* BOOK CTA */}
      <section id="book" className="py-24 px-6 lg:px-12 bg-emerald-900 text-emerald-50 text-center relative overflow-hidden">
        <Sparkles count={40} className="absolute inset-0 w-full h-full opacity-40" />
        <Reveal>
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-6xl font-light mb-5">Reserve your weekend.</h2>
            <p className="text-emerald-200 mb-10 max-w-xl mx-auto">Free cancellation up to 48hrs · Best rate guarantee · No deposit</p>
            <ShimmerButton href={`tel:${PHONE}`} background="linear-gradient(110deg,#fef3c7,#fcd34d)" className="text-emerald-900 font-bold">
              <Calendar className="size-4" /> Book {PHONE}
            </ShimmerButton>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-emerald-300">
              <MapPin className="size-4" /> R560, Magaliesberg, North West
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="bg-stone-950 text-stone-400 py-10 px-6 lg:px-12 text-center">
        <div className="font-serif italic text-stone-100 text-xl mb-1">{BRAND}</div>
        <div className="text-sm">© {new Date().getFullYear()} · Demo by Makeenology</div>
      </footer>
    </div>
  );
}
