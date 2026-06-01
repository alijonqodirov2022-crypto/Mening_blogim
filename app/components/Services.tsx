"use client";

import { TrendingDown, BadgePercent, Globe2, Zap } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";
import Reveal from "./Reveal";

const ICONS = [TrendingDown, BadgePercent, Globe2, Zap];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="scroll-mt-24 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="badge-pill">{t.services.badge}</span>
          <h2 className="section-title mt-5">{t.services.title}</h2>
          <p className="mt-4 text-lg text-brand-muted">{t.services.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 90}>
                <div className="card card-hover h-full">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                    <Icon size={26} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
