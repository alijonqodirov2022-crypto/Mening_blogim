"use client";

import { Ship, Phone, Send, Clock, ShieldCheck } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";
import { CONTACT } from "@/app/lib/translations";

export default function Footer() {
  const { t } = useLang();

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#advantages", label: t.nav.advantages },
    { href: "#calculator", label: t.nav.calculator },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-brand-navy pt-16 pb-8 text-brand-sky/70">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                <Ship size={22} />
              </span>
              <span className="text-lg font-extrabold text-white">Pearl of Asia</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{t.footer.desc}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-brand-gold">
              <ShieldCheck size={15} />
              {t.footer.license}
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contacts */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
              {t.footer.contacts}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone size={16} className="text-brand-blue-light" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Send size={16} className="text-brand-blue-light" />
                  {CONTACT.telegram}
                </a>
              </li>
            </ul>
          </div>

          {/* work time */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
              {t.footer.workTime}
            </h4>
            <p className="mt-4 flex items-center gap-2.5 text-sm">
              <Clock size={16} className="text-brand-blue-light" />
              {t.footer.workTimeValue}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Pearl of Asia Logistics. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
