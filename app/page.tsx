"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Server, Smartphone, Database, Network, 
  Send, ArrowRight, Loader2, ShieldCheck, 
  CheckCircle2, Menu, X, Phone, Mail, Zap,
  Cpu, Globe, Cloud, BarChart3, ChevronDown
} from "lucide-react";

export default function PearlOfAsiaUltra() {
  const [lang, setLang] = useState<"uz" | "ru" | "en">("uz");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================================================================
  // 📝 MATNLARNI SHU YERDAN O'ZGARTIRING
  // ================================================================
  const translations = {
    uz: {
      nav: ["Asosiy", "Xizmatlar", "Kompaniya", "Savollar", "Aloqa"],
      hero: {
        badge: "Next-Gen IT Solutions",
        title: "PEARL OF ASIA",
        sub: "Professional IT-Servis Markazi",
        desc: "Biznesingiz uchun eng ishonchli IT-yechimlar va xavfsizlik infratuzilmasi.",
        btn1: "Xizmatlarni ko'rish"
      },
      stats: [
        { label: "Tajriba", val: "10+" },
        { label: "Loyihalar", val: "250+" },
        { label: "Mijozlar", val: "120+" },
        { label: "Kafolat", val: "99.9%" }
      ],
      services: {
        title: "Bizning Ekspertiza",
        sub: "Eng murakkab texnik vazifalar uchun innovatsion yechimlar",
        list: [
          { t: "Cloud Infrastructure", d: "Bulutli serverlarni sozlash va migratsiya.", icon: Cloud },
          { t: "Cyber Defense", d: "Tizimlarni xakerlik hujumlaridan 24/7 himoya qilish.", icon: ShieldCheck },
          { t: "Network Engineering", d: "Cisco va Mikrotik asosidagi yuqori tezlikdagi tarmoqlar.", icon: Network },
          { t: "Big Data & SQL", d: "Ma'lumotlar bazasini optimallashtirish va tahlil qilish.", icon: Database },
          { t: "Mobile Firmware", d: "Qurilmalarni dasturiy ta'minoti va servis xizmatlari.", icon: Cpu },
          { t: "IT Audit", d: "Mavjud infratuzilmani audit qilish va samaradorlikni oshirish.", icon: BarChart3 }
        ]
      },
      steps: { title: "Ishlash tartibimiz", items: ["Audit", "Strategiya", "Amalga oshirish", "Support"] },
      faq: {
        title: "Savollar",
        items: [
          { q: "SLA bormi?", a: "Ha, barcha xizmatlar kafolatlangan SLA asosida." },
          { q: "Masofaviy xizmat?", a: "Ha, biz dunyo bo'ylab masofadan xizmat ko'rsatamiz." }
        ]
      },
      contact: { title: "Bog'lanish", name: "Ismingiz", phone: "Tel", send: "Yuborish" }
    },
    ru: {
      nav: ["Главная", "Услуги", "О нас", "Вопросы", "Контакт"],
      hero: {
        badge: "Next-Gen IT Solutions",
        title: "PEARL OF ASIA",
        sub: "Центр ИТ-Услуг",
        desc: "Надежные ИТ-решения и инфраструктура безопасности для вашего бизнеса.",
        btn1: "Наши услуги"
      },
      stats: [
        { label: "Опыт", val: "10+" },
        { label: "Проекты", val: "250+" },
        { label: "Клиенты", val: "120+" },
        { label: "Гарантия", val: "99.9%" }
      ],
      services: {
        title: "Наша экспертиза",
        sub: "Инновационные решения для сложных задач",
        list: [
          { t: "Cloud Infrastructure", d: "Настройка облачных серверов и миграция.", icon: Cloud },
          { t: "Cyber Defense", d: "Защита от хакерских атак 24/7.", icon: ShieldCheck },
          { t: "Network Engineering", d: "Сети на базе Cisco и Mikrotik.", icon: Network },
          { t: "Big Data & SQL", d: "Оптимизация и анализ баз данных.", icon: Database },
          { t: "Mobile Firmware", d: "Прошивка и сервисное обслуживание устройств.", icon: Cpu },
          { t: "IT Audit", d: "Аудит инфраструктуры и повышение эффективности.", icon: BarChart3 }
        ]
      },
      steps: { title: "Как мы работаем", items: ["Аудит", "Стратегия", "Реализация", "Поддержка"] },
      faq: {
        title: "Частые вопросы",
        items: [
          { q: "Есть ли SLA?", a: "Да, все услуги предоставляются на основе SLA." },
          { q: "Удаленная работа?", a: "Да, мы работаем удаленно по всему миру." }
        ]
      },
      contact: { title: "Связаться с нами", name: "Имя", phone: "Телефон", send: "Отправить" }
    },
    en: {
      nav: ["Home", "Services", "Company", "FAQ", "Contact"],
      hero: {
        badge: "Next-Gen IT Solutions",
        title: "PEARL OF ASIA",
        sub: "IT Service Center",
        desc: "Reliable IT solutions and security infrastructure for your business.",
        btn1: "View Services"
      },
      stats: [
        { label: "Experience", val: "10+" },
        { label: "Projects", val: "250+" },
        { label: "Clients", val: "120+" },
        { label: "Guarantee", val: "99.9%" }
      ],
      services: {
        title: "Our Expertise",
        sub: "Innovative solutions for complex tasks",
        list: [
          { t: "Cloud Infrastructure", d: "Cloud server setup and migration.", icon: Cloud },
          { t: "Cyber Defense", d: "24/7 protection against cyber attacks.", icon: ShieldCheck },
          { t: "Network Engineering", d: "Cisco and Mikrotik based networks.", icon: Network },
          { t: "Big Data & SQL", d: "Database optimization and analysis.", icon: Database },
          { t: "Mobile Firmware", d: "Device firmware and service maintenance.", icon: Cpu },
          { t: "IT Audit", d: "Infrastructure audit and efficiency increase.", icon: BarChart3 }
        ]
      },
      steps: { title: "Our Process", items: ["Audit", "Strategy", "Execution", "Support"] },
      faq: {
        title: "FAQ",
        items: [
          { q: "Is there SLA?", a: "Yes, all services are based on guaranteed SLA." },
          { q: "Remote support?", a: "Yes, we provide remote support worldwide." }
        ]
      },
      contact: { title: "Get in touch", name: "Name", phone: "Phone", send: "Send" }
    }
  };

  const t = translations[lang];

  // ================================================================
  // 🚀 TELEGRAM YUBORISH
  // ================================================================
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const token = "8578469335:AAGIhKG9I_FoRAw7pRLHkpWmyLmc7-XqLFU";
    const chat_id = "7277916371";
    const message = `🚀 Buyurtma:\n👤 Ism: ${formData.get("name")}\n📞 Tel: ${formData.get("phone")}`;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id, text: message }),
      });
      setStatus("✅");
    } catch { setStatus("❌"); }
    finally { setLoading(false); }
  };

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* NAVBAR */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-xl" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-black text-blue-700 italic">POA.UZ</div>
          <div className="hidden md:flex gap-8 font-bold text-xs uppercase text-slate-600">
            {t.nav.map((item, i) => (
              <a key={i} href={`#section-${i}`} className="hover:text-blue-600 transition-all">{item}</a>
            ))}
          </div>
          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            {(["uz", "ru", "en"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-blue-600 text-white shadow-lg" : "text-slate-400"}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="section-0" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="/main-bg.jpg" className="absolute inset-0 w-full h-full object-cover" alt="BG" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1510511459019-5dee211c78b8?q=80&w=2070"; }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-9xl font-black text-white italic mb-4">{t.hero.title}</h1>
          <p className="text-xl text-blue-400 font-bold mb-8 uppercase tracking-[0.2em]">{t.hero.sub}</p>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 italic">{t.hero.desc}</p>
          <a href="#section-1" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block">
             {t.hero.btn1}
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((s, i) => (
            <div key={i} className="text-center border-r last:border-0 border-slate-100">
              <p className="text-4xl font-black text-blue-700">{s.val}</p>
              <p className="text-xs font-bold text-slate-400 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-20 overflow-hidden whitespace-nowrap bg-white border-y border-slate-50">
        <div className="inline-block animate-marquee">
            {[1,2,3,4,5].map((x) => (
                <span key={x} className="text-4xl font-black italic mx-10 text-slate-200 hover:text-blue-600 transition-colors cursor-default">KORZINKA MAKRO ARTEL INFINBANK EVOS</span>
            ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="section-1" className="py-32 bg-slate-50 rounded-[80px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6 italic">{t.services.title}</h2>
          <p className="text-slate-500 mb-16 italic">{t.services.sub}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.list.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl hover:bg-blue-600 hover:text-white transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-white"><s.icon size={24}/></div>
                <h3 className="text-xl font-black mb-4 italic">{s.t}</h3>
                <p className="text-slate-500 text-sm italic group-hover:text-blue-100">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-center text-4xl font-black mb-20 italic">{t.steps.title}</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.steps.items.map((step, i) => (
                  <div key={i} className="text-center p-6 bg-white border border-slate-100 rounded-3xl">
                      <div className="text-3xl font-black text-blue-100 mb-2">0{i+1}</div>
                      <div className="font-black italic uppercase text-sm tracking-widest">{step}</div>
                  </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="section-3" className="py-32 bg-slate-900 text-white rounded-[80px] mx-4">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 italic">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, i) => (
              <div key={i} className="border-b border-white/10">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center py-6 font-bold italic">
                  <span>{item.q}</span>
                  <ChevronDown className={activeFaq === i ? "rotate-180" : ""} />
                </button>
                {activeFaq === i && <p className="pb-6 text-slate-400 italic">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="section-4" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="text-5xl font-black mb-8 italic">{t.contact.title}</h2>
                <div className="space-y-6">
                    <div className="flex gap-4 items-center"><Phone className="text-blue-600"/><span className="font-bold">+998 90 123 45 67</span></div>
                    <div className="flex gap-4 items-center"><Mail className="text-blue-600"/><span className="font-bold">info@poa.uz</span></div>
                </div>
            </div>
            <form onSubmit={sendMessage} className="space-y-4 bg-slate-50 p-10 rounded-[40px]">
                <input required name="name" placeholder={t.contact.name} className="w-full p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600" />
                <input required name="phone" placeholder={t.contact.phone} className="w-full p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600" />
                <button disabled={loading} className="w-full bg-blue-600 text-white p-4 rounded-2xl font-black hover:bg-blue-700 transition">
                    {loading ? <Loader2 className="animate-spin" /> : t.contact.send}
                </button>
                {status && <p className="text-center font-bold text-blue-600">{status}</p>}
            </form>
        </div>
      </section>

      {/* CSS */}
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-block; animation: marquee 20s linear infinite; }
      `}</style>
    </div>
  );
}