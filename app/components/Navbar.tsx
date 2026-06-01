"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Ship } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";
import { CONTACT } from "@/app/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#advantages", label: t.nav.advantages },
    { href: "#calculator", label: t.nav.calculator },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-border bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-3">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white shadow-lg shadow-blue-600/30">
            <Ship size={22} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold text-brand-navy">Pearl of Asia</span>
            <span className="text-[11px] font-medium tracking-wide text-brand-muted">
              CUSTOMS BROKERAGE
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-brand-text transition-colors hover:bg-brand-sky hover:text-brand-blue"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 rounded-xl bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-brand-blue-light sm:flex"
          >
            <Phone size={16} />
            <span className="hidden md:inline">{CONTACT.phone}</span>
            <span className="md:hidden">{t.nav.callNow}</span>
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border text-brand-navy lg:hidden"
            aria-label="Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-navy/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80vw] flex-col bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-extrabold text-brand-navy">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border text-brand-navy"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-semibold text-brand-text transition-colors hover:bg-brand-sky hover:text-brand-blue"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href={CONTACT.phoneHref}
              className="btn-primary mt-6"
              onClick={() => setMobileOpen(false)}
            >
              <Phone size={18} />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
