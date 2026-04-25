import { SpotlightHero } from "@/components/SpotlightHero";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { StickyCTA } from "@/components/StickyCTA";
import { DemoBanner } from "@/components/DemoBanner";
import { UtensilsCrossed, Flame, MessageCircle, Phone, Clock, MapPin, Star, Plus } from "lucide-react";

const BRAND = "Saffron & Smoke";
const PHONE = "+27 84 222 7700";

const menu = [
  { cat: "Signatures", items: [
    { n: "Chargrilled Lamb Chops (4)", p: 215, d: "House marinade, mint chutney, naan." },
    { n: "Butter Chicken Bowl", p: 145, d: "Slow-simmered, tomato cream, basmati." },
    { n: "Smoke-fired Tandoori Wings (8)", p: 110, d: "Charcoal-flame, yogurt-mint dip." },
  ]},
  { cat: "Burgers & Rolls", items: [
    { n: "Saffron Smashburger", p: 125, d: "Double patty, smoked aioli, cheddar." },
    { n: "Chicken Tikka Roll", p: 95, d: "Wrap, grilled tikka, slaw, mint sauce." },
    { n: "Boerewors Hot Dog", p: 85, d: "House wors, atchar, cheese." },
  ]},
  { cat: "Sides", items: [
    { n: "Truffle Fries", p: 65, d: "Parm, garlic, sea salt." },
    { n: "Garlic Naan", p: 35, d: "Wood-fired, ghee-brushed." },
    { n: "Onion Bhajia (6)", p: 45, d: "Crispy, mint chutney." },
  ]},
];

export default function RestaurantDemo() {
  const wa = PHONE.replace(/[^0-9]/g, "").replace(/^0/, "27");
  return (
    <div className="min-h-screen bg-[#1a0f0a] text-amber-50">
      <DemoBanner niche="restaurants" />
      <StickyCTA phone={PHONE} name={BRAND} />

      {/* HERO */}
      <SpotlightHero accent="amber" className="min-h-[92vh] flex flex-col bg-[#1a0f0a]">
        <header className="px-6 lg:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-serif italic text-2xl text-amber-200">
            <Flame className="size-5 text-orange-500" />
            {BRAND}
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#menu" className="hover:text-orange-400 transition">Menu</a>
            <a href="#order" className="hover:text-orange-400 transition">Order</a>
            <a href="#visit" className="hover:text-orange-400 transition">Visit</a>
          </nav>
          <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"
             className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold hover:bg-emerald-500 transition">
            <MessageCircle className="size-4" /> Order on WhatsApp
          </a>
        </header>

        <div className="flex-1 flex items-center px-6 lg:px-12 py-12">
          <div className="max-w-3xl">
            <Reveal>
              <span className="block uppercase text-xs tracking-[0.4em] text-orange-500 font-medium mb-6">Wood · Fire · Spice</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-6xl md:text-8xl font-light leading-[0.95] mb-6">
                Cooked over <em className="text-orange-500 font-normal">flame.</em><br />
                Eaten with <em className="text-orange-500 font-normal">hands.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-amber-100/70 max-w-xl mb-9">
                A halal grill house in Lenasia. South African flame, Indian-Pakistani spice, food you'd
                drive across town for.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`https://wa.me/${wa}?text=${encodeURIComponent("Hi, I'd like to place an order:")}`}
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 font-semibold hover:bg-emerald-500 transition">
                  <MessageCircle className="size-5" /> Order on WhatsApp
                </a>
                <a href="#menu" className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-200/30 px-8 py-4 hover:bg-amber-200/5 transition">
                  See the menu
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightHero>

      {/* QUICK FACTS */}
      <section className="border-y border-amber-200/10 bg-[#221308]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { i: Clock, t: "Tue–Sun · 12–10pm" },
            { i: MapPin, t: "Lenasia · Soweto" },
            { i: Flame, t: "100% halaal" },
            { i: Star, t: "4.7★ · 1,200+ reviews" },
          ].map((x, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <x.i className="size-5 text-orange-500" />
              <span className="text-sm text-amber-100/80">{x.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="uppercase text-xs tracking-[0.4em] text-orange-500 font-medium">Menu</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light mt-3">From the fire.</h2>
            </div>
          </Reveal>
          <div className="space-y-14">
            {menu.map((cat, ci) => (
              <Reveal key={cat.cat} delay={ci * 0.05}>
                <div>
                  <h3 className="font-serif italic text-3xl text-orange-400 mb-5">{cat.cat}</h3>
                  <div className="space-y-2">
                    {cat.items.map((item) => (
                      <div key={item.n} className="group flex items-baseline gap-4 py-4 border-b border-dotted border-amber-200/15 hover:border-orange-500/40 transition">
                        <div className="flex-1">
                          <div className="font-serif text-xl">{item.n}</div>
                          <div className="text-sm text-amber-100/60 mt-0.5">{item.d}</div>
                        </div>
                        <div className="font-mono text-orange-400 whitespace-nowrap text-lg">R{item.p}</div>
                        <a
                          href={`https://wa.me/${wa}?text=${encodeURIComponent(`Hi, I'd like 1x ${item.n} (R${item.p})`)}`}
                          target="_blank" rel="noopener noreferrer"
                          aria-label={`Order ${item.n}`}
                          className="opacity-0 group-hover:opacity-100 transition size-8 rounded-full bg-emerald-600 grid place-items-center hover:bg-emerald-500"
                        >
                          <Plus className="size-4 text-white" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-center text-amber-100/50 text-sm mt-12 italic">
              ↑ Hover any dish to add to your WhatsApp order. Easy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ORDER CTA */}
      <section id="order" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-orange-700 via-orange-600 to-rose-700 text-white text-center">
        <Reveal>
          <UtensilsCrossed className="size-12 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-5">Hungry yet?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-xl mx-auto">
            Order on WhatsApp · pay on collection or delivery · ready in 25 minutes.
          </p>
          <a href={`https://wa.me/${wa}?text=${encodeURIComponent("Hi, I'd like to place an order:")}`}
             target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-white text-orange-700 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-orange-50 transition">
            <MessageCircle className="size-6" /> Start order
          </a>
        </Reveal>
      </section>

      <section id="visit" className="py-16 px-6 lg:px-12 bg-[#221308] text-center">
        <Reveal>
          <h3 className="font-serif italic text-3xl text-amber-200 mb-3">Come sit, eat slow.</h3>
          <p className="text-amber-100/70">22 Spice Lane, Lenasia, Johannesburg · {PHONE}</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 border border-amber-200/30 px-5 py-2.5 rounded-full hover:bg-amber-200/5 transition text-sm">
              <Phone className="size-4" /> Call
            </a>
            <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-emerald-600 px-5 py-2.5 rounded-full hover:bg-emerald-500 transition text-sm">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="bg-[#0d0703] py-10 px-6 lg:px-12 text-center text-amber-200/50 text-sm">
        <div className="font-serif italic text-amber-200 text-xl mb-1">{BRAND}</div>
        © {new Date().getFullYear()} · Demo site by Makeenology
      </footer>
    </div>
  );
}
