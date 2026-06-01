"use client";

import { useState } from "react";
import { Send, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";
import { CONTACT } from "@/app/lib/translations";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cargo, setCargo] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, cargo, lang }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setCargo("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-xl border border-brand-border bg-white px-4 py-3.5 text-brand-navy outline-none transition-all placeholder:text-brand-muted/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="container-x">
        <div className="grid gap-10 overflow-hidden rounded-3xl border border-brand-border bg-white shadow-xl shadow-blue-900/5 lg:grid-cols-2">
          {/* left info panel */}
          <div className="relative overflow-hidden bg-brand-navy p-9 sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl" />
            <Reveal className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-sky">
                {t.contact.badge}
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-brand-sky/70">{t.contact.subtitle}</p>

              <div className="mt-9 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-sky/50">
                  {t.contact.orCall}
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-lg font-bold text-white transition-colors hover:text-brand-gold"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={20} />
                  </span>
                  {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-brand-sky transition-colors hover:text-brand-gold"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Send size={20} />
                  </span>
                  {t.contact.telegram} — {CONTACT.telegram}
                </a>
              </div>
            </Reveal>
          </div>

          {/* right form */}
          <div className="p-9 sm:p-12">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={36} />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-brand-navy">
                  {t.contact.successTitle}
                </h3>
                <p className="mt-3 max-w-sm text-brand-muted">{t.contact.successText}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-7"
                >
                  OK
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-brand-navy">
                    {t.contact.name}
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCls}
                    placeholder={t.contact.name}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-brand-navy">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputCls}
                    placeholder="+998 90 000 00 00"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-brand-navy">
                    {t.contact.cargo}
                  </label>
                  <textarea
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder={t.contact.cargoPlaceholder}
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    {!name.trim() || !phone.trim()
                      ? t.contact.required
                      : t.contact.errorText}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    t.contact.submitting
                  ) : (
                    <>
                      {t.contact.submit}
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
