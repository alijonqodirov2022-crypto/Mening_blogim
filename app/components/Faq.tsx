"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";
import Reveal from "./Reveal";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="badge-pill">{t.faq.badge}</span>
          <h2 className="section-title mt-5">{t.faq.title}</h2>
          <p className="mt-4 text-lg text-brand-muted">{t.faq.subtitle}</p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                    isOpen ? "border-brand-blue shadow-md" : "border-brand-border"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-brand-navy">{item.q}</span>
                    <span
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-brand-blue text-white" : "bg-brand-sky text-brand-blue"
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-brand-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
