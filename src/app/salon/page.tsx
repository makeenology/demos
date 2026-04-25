import { SpotlightHero } from "@/components/SpotlightHero";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { StickyCTA } from "@/components/StickyCTA";
import { DemoBanner } from "@/components/DemoBanner";
import { IMG } from "@/lib/images";
import { Scissors, Sparkles, Heart, Star, MapPin, ArrowRight, Clock, MessageCircle } from "lucide-react";

const BRAND = "Lume Salon & Spa";
const PHONE = "+27 82 765 4321";
const SLOGAN = "A sanctuary for hair, skin & soul. Lenasia's quiet luxury.";

const services = [
  { name: "Signature Cut & Style", price: "from R350", time: "60 min" },
  { name: "Balayage & Colour", price: "from R1,200", time: "2.5 hr" },
  { name: "Keratin Smoothing", price: "from R2,500", time: "3 hr" },
  { name: "Bridal Hair & Makeup", price: "from R2,800", time: "package" },
  { name: "Hydrafacial Glow", price: "from R780", time: "75 min" },
  { name: "Deep Tissue Massage", price: "from R650", time: "60 min" },
];

const testimonials = [
  { name: "Aaliyah", text: "First salon that actually understood my curls. I came out crying happy tears." },
  { name: "Zinhle", text: "The bridal package was worth every cent. The whole bridal party was glowing." },
  { name: "Naadia", text: "Their head massage during the wash alone is worth the visit." },
  { name: "Lerato", text: "Booked online in 30 seconds. They remembered exactly how I like my colour." },
  { name: "Yusra", text: "I've been to every salon in Joburg. This is the only one I'll let near my hair." },
];

export default function SalonDemo() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: "var(--font-geist-sans), serif" }}>
      <DemoBanner niche="salons & spas" />
      <StickyCTA phone={PHONE} name={BRAND} />

      {/* HERO */}
      <SpotlightHero accent="rose" className="min-h-[92vh] flex flex-col bg-stone-50">
        <header className="px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-serif italic text-2xl tracking-wide">
            <Sparkles className="size-5 text-rose-500" />
            {BRAND}
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
            <a href="#menu" className="hover:text-rose-500">Menu</a>
            <a href="#story" className="hover:text-rose-500">Story</a>
            <a href="#reviews" className="hover:text-rose-500">Reviews</a>
            <a href="#book" className="hover:text-rose-500">Book</a>
          </nav>
          <a href="#book" className="hidden md:inline-flex items-center gap-2 rounded-none border border-stone-900 px-5 py-2.5 text-sm tracking-wider uppercase hover:bg-stone-900 hover:text-stone-50 transition">
            Reserve
          </a>
        </header>

        <div className="flex-1 grid md:grid-cols-2 items-center px-6 lg:px-12 py-12 lg:py-20 gap-10">
          <div>
            <Reveal>
              <span className="block uppercase text-xs tracking-[0.3em] text-rose-500 font-medium mb-6">Est. 2018 · Lenasia</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-6xl md:text-8xl font-light tracking-tight leading-[0.95] mb-6">
                Where you<br />come back to<br /><em className="text-rose-500">yourself</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-stone-600 max-w-md mb-9">{SLOGAN}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#book" className="inline-flex items-center justify-center gap-2 bg-stone-900 px-8 py-4 text-stone-50 tracking-wider uppercase text-sm hover:bg-rose-500 transition">
                  Book a session <ArrowRight className="size-4" />
                </a>
                <a href="#menu" className="inline-flex items-center justify-center gap-2 border border-stone-300 px-8 py-4 tracking-wider uppercase text-sm hover:bg-stone-100 transition">
                  Service menu
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.4} className="hidden md:block">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-stone-200 to-amber-100" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.salon.portrait} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-50/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </SpotlightHero>

      {/* MENU */}
      <section id="menu" className="py-24 lg:py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="uppercase text-xs tracking-[0.3em] text-rose-500 font-medium">Our menu</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light mt-3">Carefully crafted services.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <div className="flex items-baseline justify-between border-b border-dotted border-stone-400 py-5 hover:border-rose-400 transition">
                  <div>
                    <div className="font-serif text-xl">{s.name}</div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider mt-1 flex items-center gap-1">
                      <Clock className="size-3" /> {s.time}
                    </div>
                  </div>
                  <div className="font-serif italic text-rose-600 text-lg whitespace-nowrap pl-4">{s.price}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {IMG.salon.gallery.map((src, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Heart className="size-8 text-rose-500 mx-auto mb-6" strokeWidth={1.5} />
            <span className="uppercase text-xs tracking-[0.3em] text-rose-500 font-medium">Our story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-3 mb-8 leading-tight">
              We don't sell beauty.<br />We help you remember it.
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Founded by sisters Naseera and Bilqis, Lume began with a simple belief — that real beauty work
              isn't about transformation, it's about restoration. Every chair, every ritual, every product is
              chosen with that in mind.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-24 bg-stone-900 text-stone-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 mb-12 text-center">
          <Reveal>
            <span className="uppercase text-xs tracking-[0.3em] text-rose-400 font-medium">Voices</span>
            <h2 className="font-serif text-5xl font-light mt-3">From the chairs.</h2>
          </Reveal>
        </div>
        <Marquee duration={45}>
          {testimonials.map((t) => (
            <figure key={t.name} className="w-[360px] shrink-0 px-8 py-7 border border-stone-700 bg-stone-800/40">
              <div className="flex gap-0.5 text-rose-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-4 fill-rose-400" />))}
              </div>
              <blockquote className="font-serif italic text-lg leading-relaxed mb-4">"{t.text}"</blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em] text-stone-400">— {t.name}</figcaption>
            </figure>
          ))}
        </Marquee>
      </section>

      {/* BOOK CTA */}
      <section id="book" className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-rose-100 via-stone-50 to-amber-50">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="size-10 text-rose-500 mx-auto mb-6" strokeWidth={1} />
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6">Reserve your moment.</h2>
            <p className="text-stone-600 mb-10 text-lg">Open Tue–Sun · 9am–7pm · Lenasia, Johannesburg</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${PHONE.replace(/[^0-9]/g, "").replace(/^0/, "27")}`} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-emerald-500 px-8 py-4 text-white tracking-wider uppercase text-sm hover:bg-emerald-600 transition">
                <MessageCircle className="size-4" /> WhatsApp to book
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 bg-stone-900 px-8 py-4 text-stone-50 tracking-wider uppercase text-sm hover:bg-rose-500 transition">
                Call {PHONE}
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-stone-500">
              <MapPin className="size-4" /> 38 Sunset Boulevard, Lenasia South, Johannesburg
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="bg-stone-950 text-stone-400 py-10 px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto text-sm">
          <div className="font-serif italic text-xl text-stone-200 mb-2">{BRAND}</div>
          <div>© {new Date().getFullYear()} · Demo site by Makeenology</div>
        </div>
      </footer>
    </div>
  );
}
