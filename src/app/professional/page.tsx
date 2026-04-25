import { SpotlightHero } from "@/components/SpotlightHero";
import { Reveal } from "@/components/Reveal";
import { StickyCTA } from "@/components/StickyCTA";
import { DemoBanner } from "@/components/DemoBanner";
import { IMG } from "@/lib/images";
import { Scale, ShieldCheck, FileCheck, Award, Phone, Calendar, Mail, MapPin, ArrowRight, BookOpen, Briefcase, Building2 } from "lucide-react";

const BRAND = "Hayat & Partners";
const PHONE = "+27 11 555 9080";
const TAG = "Attorneys · Conveyancers · Notaries";

const practices = [
  { i: Scale, t: "Litigation", d: "Civil, commercial, labour. Strategic and unflinching when it matters." },
  { i: Building2, t: "Property & conveyancing", d: "Transfers, bonds, sectional title — done right, done on time." },
  { i: Briefcase, t: "Commercial law", d: "Contracts, M&A, advisory. We protect founders." },
  { i: BookOpen, t: "Wills & estates", d: "Drafting, executorship, complex estates." },
  { i: FileCheck, t: "Family & divorce", d: "Sensitive matters, handled with discretion and care." },
  { i: ShieldCheck, t: "Contract review", d: "Fixed-fee review with a same-week turnaround." },
];

const team = [
  { name: "Adv. R. Hayat", role: "Senior Partner", years: "22 yrs" },
  { name: "S. Naidoo", role: "Property Director", years: "14 yrs" },
  { name: "M. Khumalo", role: "Commercial Counsel", years: "11 yrs" },
];

export default function ProfessionalDemo() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-slate-900" style={{ fontFamily: "var(--font-geist-sans), Georgia, serif" }}>
      <DemoBanner niche="legal & professional firms" />
      <StickyCTA phone={PHONE} name={BRAND} />

      {/* HERO */}
      <SpotlightHero accent="emerald" className="min-h-[90vh] flex flex-col bg-[#fafaf7]">
        <header className="px-6 lg:px-12 py-6 flex items-center justify-between border-b border-slate-200/70">
          <div>
            <div className="font-serif text-2xl tracking-tight">{BRAND}</div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-slate-500 mt-0.5">{TAG}</div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-700">
            <a href="#practices" className="hover:text-emerald-700">Practice areas</a>
            <a href="#team" className="hover:text-emerald-700">Team</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 border border-slate-900 px-5 py-2.5 text-sm tracking-wider uppercase hover:bg-slate-900 hover:text-white transition">
            Book a consult
          </a>
        </header>

        <div className="flex-1 grid lg:grid-cols-12 items-center px-6 lg:px-12 py-16 lg:py-24 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/30 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 mb-7">
                <Award className="size-3" /> Established 2003 · Sandton
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-7">
                Counsel that's <em className="text-emerald-700">measured.</em><br />
                Outcomes that aren't.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 max-w-xl mb-9 leading-relaxed">
                A boutique South African law firm built on quiet rigour. We act for founders, families and
                institutions when the stakes are high and the timeline is short.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-emerald-800 text-white px-7 py-3.5 hover:bg-emerald-900 transition tracking-wide">
                  <Calendar className="size-4" /> Schedule a consultation
                </a>
                <a href="#practices" className="inline-flex items-center justify-center gap-2 border border-slate-300 px-7 py-3.5 hover:bg-white transition tracking-wide">
                  Practice areas <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.4} className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.professional.interior} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-amber-900/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-5 text-center">
                <div className="text-3xl font-serif text-emerald-700">22</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-600 mt-1">Years on the bar</div>
              </div>
            </div>
          </Reveal>
        </div>
      </SpotlightHero>

      {/* PRACTICES */}
      <section id="practices" className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-12 mb-16 items-end">
              <div className="md:col-span-2">
                <span className="text-[11px] tracking-[0.3em] uppercase text-emerald-700">Practice areas</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light mt-3">A focused suite, deeply practiced.</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We deliberately limit ourselves to areas where we are senior, fast, and known.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {practices.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05}>
                <div className="bg-white p-9 h-full hover:bg-emerald-50/40 transition group">
                  <p.i className="size-7 text-emerald-700 mb-5" strokeWidth={1.4} />
                  <h3 className="font-serif text-2xl mb-2">{p.t}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 lg:px-12 bg-[#f5f3ec]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-[11px] tracking-[0.3em] uppercase text-emerald-700">The team</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-3">Senior counsel, not first-year associates.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="bg-white border border-slate-200 overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG.professional.team[i]} alt={m.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl">{m.name}</h3>
                    <div className="text-sm text-slate-500 italic">{m.role}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-emerald-700 mt-3">{m.years} at the bar</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-emerald-900 text-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="max-w-4xl mx-auto relative">
          <Reveal>
            <div className="text-center mb-12">
              <Scale className="size-10 mx-auto mb-6 text-emerald-300" strokeWidth={1} />
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-5">
                Discreet first conversation.<br />Free for new matters.
              </h2>
              <p className="text-emerald-200 max-w-xl mx-auto">
                Tell us, in confidence, what you're up against. We'll respond within one business day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <a href={`tel:${PHONE}`} className="flex flex-col items-center gap-2 border border-emerald-700 bg-emerald-950/30 p-6 hover:bg-emerald-950/60 transition">
                <Phone className="size-5 text-emerald-300" />
                <div className="text-xs uppercase tracking-widest text-emerald-300">Call</div>
                <div className="text-sm">{PHONE}</div>
              </a>
              <a href="mailto:enquiries@example.co.za" className="flex flex-col items-center gap-2 border border-emerald-700 bg-emerald-950/30 p-6 hover:bg-emerald-950/60 transition">
                <Mail className="size-5 text-emerald-300" />
                <div className="text-xs uppercase tracking-widest text-emerald-300">Email</div>
                <div className="text-sm">enquiries@example.co.za</div>
              </a>
              <div className="flex flex-col items-center gap-2 border border-emerald-700 bg-emerald-950/30 p-6">
                <MapPin className="size-5 text-emerald-300" />
                <div className="text-xs uppercase tracking-widest text-emerald-300">Visit</div>
                <div className="text-sm text-center">11 Sandhurst, Sandton, JHB</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-emerald-950 text-emerald-300/70 py-10 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            <div className="font-serif text-emerald-100 text-lg">{BRAND}</div>
            <div className="text-[11px] tracking-[0.25em] uppercase mt-0.5">{TAG}</div>
          </div>
          <div>© {new Date().getFullYear()} · Demo site by Makeenology</div>
        </div>
      </footer>
    </div>
  );
}
