"use client";

import { useState } from "react";
import { Calculator as CalcIcon, RotateCcw } from "lucide-react";
import { useLang } from "@/app/contexts/LanguageContext";
import Reveal from "./Reveal";

type Result = {
  duty: number;
  excise: number;
  vat: number;
  total: number;
  grand: number;
};

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n);

export default function Calculator() {
  const { t } = useLang();
  const [value, setValue] = useState("");
  const [duty, setDuty] = useState("5");
  const [excise, setExcise] = useState("0");
  const [vat, setVat] = useState("12");
  const [result, setResult] = useState<Result | null>(null);

  const calculate = () => {
    const v = parseFloat(value) || 0;
    if (v <= 0) {
      setResult(null);
      return;
    }
    const d = (parseFloat(duty) || 0) / 100;
    const e = (parseFloat(excise) || 0) / 100;
    const vt = (parseFloat(vat) || 0) / 100;

    const dutyAmt = v * d;
    const exciseAmt = v * e;
    // VAT base in UZ = customs value + duty + excise
    const vatBase = v + dutyAmt + exciseAmt;
    const vatAmt = vatBase * vt;
    const total = dutyAmt + exciseAmt + vatAmt;

    setResult({
      duty: dutyAmt,
      excise: exciseAmt,
      vat: vatAmt,
      total,
      grand: v + total,
    });
  };

  const reset = () => {
    setValue("");
    setDuty("5");
    setExcise("0");
    setVat("12");
    setResult(null);
  };

  const inputCls =
    "w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-navy outline-none transition-all placeholder:text-brand-muted/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

  return (
    <section id="calculator" className="scroll-mt-24 bg-brand-sky/40 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="badge-pill">{t.calc.badge}</span>
          <h2 className="section-title mt-5">{t.calc.title}</h2>
          <p className="mt-4 text-lg text-brand-muted">{t.calc.subtitle}</p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 rounded-3xl border border-brand-border bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-9 lg:grid-cols-2">
            {/* inputs */}
            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-brand-navy">
                  {t.calc.valueLabel}
                </label>
                <input
                  type="number"
                  min="0"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={t.calc.valuePlaceholder}
                  className={inputCls}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-brand-navy">
                    {t.calc.dutyLabel}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={duty}
                    onChange={(e) => setDuty(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-brand-navy">
                    {t.calc.exciseLabel}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={excise}
                    onChange={(e) => setExcise(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-brand-navy">
                    {t.calc.vatLabel}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={vat}
                    onChange={(e) => setVat(e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <button onClick={calculate} className="btn-primary flex-1">
                  <CalcIcon size={18} />
                  {t.calc.calcBtn}
                </button>
                <button onClick={reset} className="btn-outline" aria-label="reset">
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>

            {/* result */}
            <div className="rounded-2xl bg-brand-navy p-6 text-white">
              <h3 className="text-base font-bold text-white">{t.calc.resultTitle}</h3>
              {result ? (
                <div className="mt-5 space-y-3 text-sm">
                  <Row label={t.calc.rDuty} value={`$ ${fmt(result.duty)}`} />
                  <Row label={t.calc.rExcise} value={`$ ${fmt(result.excise)}`} />
                  <Row label={t.calc.rVat} value={`$ ${fmt(result.vat)}`} />
                  <div className="my-3 border-t border-white/15" />
                  <Row label={t.calc.rTotal} value={`$ ${fmt(result.total)}`} strong />
                  <div className="mt-4 rounded-xl bg-brand-blue/30 p-4">
                    <p className="text-xs text-brand-sky/70">{t.calc.rGrand}</p>
                    <p className="mt-1 text-2xl font-extrabold text-white">
                      $ {fmt(result.grand)}
                    </p>
                  </div>
                  <p className="pt-2 text-[11px] leading-snug text-brand-sky/50">
                    {t.calc.note}
                  </p>
                </div>
              ) : (
                <div className="mt-5 flex h-44 items-center justify-center text-center text-sm text-brand-sky/50">
                  {t.calc.empty}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={strong ? "font-semibold text-white" : "text-brand-sky/70"}>
        {label}
      </span>
      <span className={strong ? "text-lg font-extrabold text-brand-gold" : "font-semibold text-white"}>
        {value}
      </span>
    </div>
  );
}
