"use client";

import { ShieldCheck, ArrowRight, Clock, Globe2, Truck } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-sky/60 via-white to-white pt-30 pb-20 sm:pt-36"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="badge-pill">
            <ShieldCheck size={16} />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl md:text-6xl">
            {t.hero.title1}{" "}
            <span className="text-gradient">{t.hero.title2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-outline">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-brand-muted">
            <ShieldCheck size={18} className="text-brand-blue" />
            {t.hero.trustLicense}
          </div>
        </div>

        {/* visual card */}
        <div className="relative">
          <div className="animate-float-slow rounded-3xl border border-brand-border bg-white p-8 shadow-2xl shadow-blue-900/10">
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Clock, k: "2 soat", v: t.services.items[3].title },
                { icon: Globe2, k: "Door-to-door", v: t.services.items[2].title },
                { icon: Truck, k: "20–30%", v: t.services.items[0].title },
                { icon: ShieldCheck, k: "№0042", v: t.footer.license },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-brand-border bg-brand-sky/40 p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white">
                    <item.icon size={20} />
                  </span>
                  <p className="mt-3 text-lg font-extrabold text-brand-navy">{item.k}</p>
                  <p className="mt-1 text-xs leading-snug text-brand-muted line-clamp-2">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
