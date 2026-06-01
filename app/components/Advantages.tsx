"use client";

import { Wallet, Headset, Scale, UserCheck, Check } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";
import Reveal from "./Reveal";

const ICONS = [Wallet, Headset, Scale, UserCheck];

export default function Advantages() {
  const { t } = useLang();

  return (
    <section id="advantages" className="scroll-mt-24 bg-brand-sky/40 py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="badge-pill">{t.advantages.badge}</span>
          <h2 className="section-title mt-5">{t.advantages.title}</h2>
          <p className="mt-4 text-lg text-brand-muted">{t.advantages.subtitle}</p>

          <ul className="mt-8 space-y-3">
            {t.advantages.items.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-blue text-white">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-brand-text">
                  <strong className="font-semibold text-brand-navy">{a.title}.</strong>{" "}
                  {a.desc}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {t.advantages.items.map((a, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 90}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-brand-navy">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
