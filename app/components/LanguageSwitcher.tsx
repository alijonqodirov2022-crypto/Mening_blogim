"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";
import { LANGS } from "@/app/lib/translations";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-blue"
        aria-label="Language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="uppercase">{current.code}</span>
        <ChevronDown
          size={15}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-brand-border bg-white py-1 shadow-xl">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-sky ${
                l.code === lang ? "font-bold text-brand-blue" : "text-brand-text"
              }`}
            >
              <span className="text-base">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
