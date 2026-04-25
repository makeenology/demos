import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { DemoBanner } from "@/components/DemoBanner";
import { TiltCard } from "@/components/premium/TiltCard";
import { ShimmerButton } from "@/components/premium/ShimmerButton";
import { Sparkles } from "@/components/premium/Sparkles";
import { TextGenerate } from "@/components/premium/TextGenerate";
import { BackgroundBeams } from "@/components/premium/BackgroundBeams";
import { GradientText } from "@/components/premium/GradientText";
import { ShoppingBag, Heart, Star, Truck, ShieldCheck, RotateCcw, Search, User, ArrowRight, Sparkle, Tag } from "lucide-react";

const BRAND = "ZAYTUNE";

const products = [
  { id: 1, name: "Linen Sand Kaftan", price: 1290, was: 1690, tag: "Bestseller",
    grad: "from-amber-100 via-stone-200 to-rose-100" },
  { id: 2, name: "Velvet Noir Abaya", price: 2450, was: 2950, tag: "New",
    grad: "from-zinc-800 via-zinc-700 to-stone-600" },
  { id: 3, name: "Silk Gold Hijab", price: 580, was: null, tag: "Limited",
    grad: "from-amber-200 via-amber-300 to-yellow-200" },
  { id: 4, name: "Pearl Drop Earrings", price: 890, was: null, tag: null,
    grad: "from-rose-100 via-stone-100 to-rose-200" },
  { id: 5, name: "Saffron Silk Scarf", price: 720, was: 920, tag: "Sale",
    grad: "from-orange-200 via-rose-200 to-fuchsia-200" },
  { id: 6, name: "Ivory Modesty Set", price: 1980, was: null, tag: "New",
    grad: "from-stone-100 via-amber-50 to-stone-200" },
  { id: 7, name: "Onyx Statement Cuff", price: 650, was: null, tag: null,
    grad: "from-slate-700 via-slate-800 to-zinc-900" },
  { id: 8, name: "Rose Gold Tasbih", price: 420, was: null, tag: "Popular",
    grad: "from-rose-200 via-rose-300 to-amber-200" },
];

const collections = [
  { name: "Modest Couture", count: "48 pieces", grad: "from-stone-300 via-stone-200 to-rose-200" },
  { name: "Heritage Jewelry", count: "32 pieces", grad: "from-amber-200 via-yellow-100 to-amber-300" },
  { name: "Eid Collection", count: "26 pieces", grad: "from-emerald-300 via-emerald-200 to-amber-100" },
];

export default function ShopDemo() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <DemoBanner niche="ecommerce / boutique" />

      {/* TOP BAR */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-6 text-center tracking-wider">
        ✦ Free SA-wide shipping over R1,500 · 14-day returns · Crafted by Muslim-women artisans
      </div>

      <header className="sticky top-9 z-30 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <a href="#" className="font-serif tracking-[0.4em] text-2xl">{BRAND}</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#shop" className="hover:text-rose-700">Shop all</a>
            <a href="#collections" className="hover:text-rose-700">Collections</a>
            <a href="#story" className="hover:text-rose-700">Story</a>
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-2 hover:bg-stone-200/50 rounded-full"><Search className="size-4" /></button>
            <button aria-label="Account" className="p-2 hover:bg-stone-200/50 rounded-full"><User className="size-4" /></button>
            <button aria-label="Cart" className="p-2 hover:bg-stone-200/50 rounded-full relative">
              <ShoppingBag className="size-4" />
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-rose-700 text-white text-[10px] grid place-items-center">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-zinc-900 text-stone-100 min-h-[90vh] flex items-center">
        <Sparkles className="absolute inset-0 w-full h-full" count={80} />
        <BackgroundBeams count={6} />
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 size-[120vw] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-amber-300 mb-7">
                <Sparkle className="size-3" /> Spring '26 dropped
              </span>
            </Reveal>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-7">
              <TextGenerate words="Modest" />{" "}
              <GradientText className="font-normal italic">elegance.</GradientText><br />
              <TextGenerate words="Slow fashion." />
            </h1>
            <Reveal delay={0.6}>
              <p className="text-lg text-stone-300 max-w-md mb-9 leading-relaxed">
                Crafted in small batches by artisans across Cape Town and Lahore. Each piece numbered, signed, and yours alone.
              </p>
            </Reveal>
            <Reveal delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-3">
                <ShimmerButton href="#shop" background="linear-gradient(110deg,#9f1239,#be123c)">
                  <ShoppingBag className="size-4" /> Shop the collection
                </ShimmerButton>
                <a href="#story" className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-600 px-7 py-3.5 text-sm hover:bg-stone-800 transition">
                  Our story <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.4} className="hidden lg:block">
            <TiltCard className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 via-amber-200 to-stone-300" />
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="size-40 rounded-full bg-white/30 backdrop-blur grid place-items-center">
                  <span className="font-serif text-stone-900 text-6xl">Z</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-stone-900/80 backdrop-blur text-white p-4 rounded-2xl">
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber-300">Featured</div>
                  <div className="font-serif text-lg">Linen Sand Kaftan</div>
                </div>
                <div className="font-mono text-rose-300">R1,290</div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* TICKER */}
      <section className="bg-amber-50 border-y border-amber-200 py-4 overflow-hidden">
        <Marquee duration={28}>
          {["FREE SHIPPING OVER R1,500", "14-DAY RETURNS", "ARTISAN CRAFTED", "100% AUTHENTICATED", "SAME-DAY JHB DELIVERY", "PAY IN 3 WITH PAYFLEX", "EID READY · SHOP NOW"].map((t, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.3em] font-medium text-stone-700 whitespace-nowrap">✦ {t}</span>
          ))}
        </Marquee>
      </section>

      {/* COLLECTIONS — bento */}
      <section id="collections" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="uppercase text-xs tracking-[0.3em] text-rose-700 font-medium">Curated</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-2">Shop by collection.</h2>
              </div>
              <a href="#shop" className="text-sm underline underline-offset-4 hover:text-rose-700">View all collections →</a>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {collections.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <TiltCard className="group aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} group-hover:scale-105 transition-transform duration-700`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xs uppercase tracking-[0.3em] text-amber-200 mb-2">{c.count}</div>
                    <div className="font-serif text-3xl font-light">{c.name}</div>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition">
                      Explore <ArrowRight className="size-4" />
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="shop" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="uppercase text-xs tracking-[0.3em] text-rose-700 font-medium">New & loved</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-2">Handpicked this season.</h2>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <button className="px-4 py-2 rounded-full bg-stone-900 text-white">All</button>
                <button className="px-4 py-2 rounded-full border border-stone-300 hover:bg-stone-100">Apparel</button>
                <button className="px-4 py-2 rounded-full border border-stone-300 hover:bg-stone-100">Jewelry</button>
                <button className="px-4 py-2 rounded-full border border-stone-300 hover:bg-stone-100">Accessories</button>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.04}>
                <TiltCard className="group rounded-2xl overflow-hidden bg-stone-100 cursor-pointer">
                  <div className={`relative aspect-square bg-gradient-to-br ${p.grad}`}>
                    {p.tag && (
                      <span className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Tag className="size-2.5" /> {p.tag}
                      </span>
                    )}
                    <button aria-label="Wishlist" className="absolute top-3 right-3 size-9 grid place-items-center rounded-full bg-white/80 backdrop-blur opacity-0 group-hover:opacity-100 transition hover:bg-white">
                      <Heart className="size-4" />
                    </button>
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
                      <button className="w-full bg-stone-900 text-white text-xs uppercase tracking-widest py-3 rounded-xl hover:bg-rose-700 transition">
                        Quick add
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="font-serif text-lg leading-tight">{p.name}</div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-mono text-stone-900">R{p.price.toLocaleString()}</span>
                      {p.was && <span className="text-xs line-through text-stone-400">R{p.was.toLocaleString()}</span>}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIER CALLOUT */}
      <section id="story" className="py-24 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="uppercase text-xs tracking-[0.3em] text-rose-700 font-medium">Three tiers, one craft</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-3">Built for any size catalogue.</h2>
              <p className="text-stone-600 mt-4 max-w-xl mx-auto">
                Every Makeenology shop ships with this visual quality. Tiers differ in features, not finish.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Starter Shop", p: "R9,500", h: "R350/mo", f: ["Up to 25 products", "PayFast / Yoco checkout", "Single shipping zone", "Basic SEO + analytics"] },
              { t: "Standard Shop", p: "R16,000", h: "R500/mo", f: ["100+ products", "Variations (size/colour)", "Filters, search, coupons", "Abandoned-cart emails", "Multiple payment methods"], featured: true },
              { t: "Pro Shop", p: "R28,000", h: "R700/mo", f: ["Unlimited products", "Wishlist + reviews", "Subscriptions / loyalty", "Multi-currency", "Advanced filtering & merchandising"] },
            ].map((tier, i) => (
              <Reveal key={tier.t} delay={i * 0.08}>
                <div className={`relative h-full rounded-3xl border p-8 ${tier.featured ? "bg-stone-900 text-white border-stone-900 scale-[1.02]" : "bg-white border-stone-200"}`}>
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-700 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Most popular</span>
                  )}
                  <h3 className="font-serif text-2xl mb-1">{tier.t}</h3>
                  <div className="font-mono text-3xl mt-4">{tier.p}</div>
                  <div className={`text-xs uppercase tracking-widest mb-6 ${tier.featured ? "text-stone-400" : "text-stone-500"}`}>+ {tier.h} hosting</div>
                  <ul className="space-y-2 text-sm">
                    {tier.f.map(x => <li key={x} className="flex gap-2"><Star className={`size-4 mt-0.5 shrink-0 ${tier.featured ? "text-rose-400" : "text-rose-700"}`} />{x}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { i: Truck, t: "Free SA-wide", d: "On orders over R1,500" },
            { i: ShieldCheck, t: "Authenticity", d: "Every piece numbered" },
            { i: RotateCcw, t: "14-day returns", d: "No questions asked" },
            { i: Heart, t: "Crafted with care", d: "Small artisan batches" },
          ].map((x, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="size-12 rounded-full bg-rose-50 grid place-items-center text-rose-700">
                  <x.i className="size-5" />
                </div>
                <div className="font-serif text-lg">{x.t}</div>
                <div className="text-xs text-stone-500">{x.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-400 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif tracking-[0.4em] text-stone-100 text-xl">{BRAND}</div>
          <div className="text-sm">© {new Date().getFullYear()} · Demo by Makeenology · WooCommerce-ready</div>
        </div>
      </footer>
    </div>
  );
}
