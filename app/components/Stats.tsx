"use client";

import { useLang } from "@/app/contexts/LanguageContext";
import Reveal from "./Reveal";

export default function Stats() {
  const { t } = useLang();

  return (
    <section className="bg-brand-navy py-16">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {t.stats.items.map((s, i) => (
            <Reveal key={i} delay={i * 90} className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-brand-sky/70 sm:text-base">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
