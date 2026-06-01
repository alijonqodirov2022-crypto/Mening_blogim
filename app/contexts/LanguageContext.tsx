"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, translations } from "@/app/lib/translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)["uz"];
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "poa-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && ["uz", "ru", "en"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
