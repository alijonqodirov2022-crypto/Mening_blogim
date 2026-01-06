"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
  Globe, ShieldCheck, Zap, ChevronRight, Menu, X, BarChart3, Landmark, Truck, Anchor, 
  HelpCircle, Search, Cpu, Fingerprint, Award, Users, TrendingUp, ShoppingBag, 
  ShieldAlert, FileText, ClipboardCheck, CheckCircle2, ArrowRight, Briefcase, 
  MapPin, Phone, Clock, Server, Globe2, Shield, Activity, HardHat, Scale, Box, 
  Warehouse, BadgeCheck, MessageSquare, Calculator, Percent, Coins, Star
} from "lucide-react";

// --- 1. MA'LUMOTLAR VA KONSTANTALAR ---
const translations = {
  uz: {
    nav: ["Xizmatlar", "Maqtovlar", "Kalkulyator", "Hamkorlar", "Aloqa"],
    hero: "O‘zbekistonning Raqamli Bojxona Arxitekturasi",
    heroSub: "25,000+ Deklaratsiyalar. Milliy miqyosdagi ishonch.",
    heroDesc: "Pearl of Asia — bojxona to'lovlarini 30% gacha optimallashtirish va yuklarni 2 soatda rasmiylashtirish bo'yicha O'zbekiston yetakchisi.",
    stats: ["Yillik Tajriba", "Deklaratsiyalar", "Mutaxassislar", "Tejalgan mablag'lar"],
    processTitle: "Qanday Ishlaymiz?",
    faqTitle: "Ko'p Beriladigan Savollar",
    formTitle: "Strategik Hamkorlikni Boshlang",
    formDesc: "Ma'lumotlaringizni kiriting, bizning ekspertlar yukingizni tahlil qilib, 15 daqiqada sizga eng arzon bojxona yechimini taklif qiladi.",
    inputCompany: "Kompaniya nomi",
    inputPhone: "Bog'lanish raqami",
    inputCargo: "Yuk turi (TN VED kodi bo'lsa yozing)",
    btnSend: "Ekspertizani Tasdiqlash",
    btnSending: "Yuborilmoqda...",
    success: "✅ So'rovingiz qabul qilindi. Navbat: #POA-2026",
    error: "❌ Xatolik yuz berdi."
  },
  ru: {
    nav: ["Услуги", "Достижения", "Калькулятор", "Партнеры", "Контакт"],
    hero: "Цифровая Таможенная Архитектура Узбекистана",
    heroSub: "25,000+ Деклараций. Доверие национального масштаба.",
    heroDesc: "Pearl of Asia — лидер Узбекистана по оптимизации таможенных платежей до 30% и оформлению грузов за 2 часа.",
    stats: ["Лет Опыта", "Деклараций", "Специалистов", "Сэкономлено"],
    processTitle: "Как Мы Работаем?",
    faqTitle: "Часто Задаваемые Вопросы",
    formTitle: "Начните Стратегическое Партнерство",
    formDesc: "Введите данные, и наши эксперты предложат вам самое выгодное таможенное решение в течение 15 минут.",
    inputCompany: "Название компании",
    inputPhone: "Номер телефона",
    inputCargo: "Тип груза (код ТН ВЭД)",
    btnSend: "Подтвердить Экспертизу",
    btnSending: "Отправка...",
    success: "✅ Запрос принят. Очередь: #POA-2026",
    error: "❌ Ошибка системы."
  }
};

const advantages = [
  { 
    title: "To'lovlar Optimizatsiyasi", 
    desc: "TN VED kodlarini to'g'ri tanlash orqali bojxona to'lovlarini qonuniy ravishda 20-30% gacha qisqartiramiz.", 
    icon: Coins,
    color: "from-yellow-400 to-orange-600"
  },
  { 
    title: "Bojxona Imtiyozlari", 
    desc: "Investitsiya loyihalari va texnologik uskunalar uchun barcha turdagi bojxona imtiyozlarini (Lgota) qo'llash.", 
    icon: Landmark,
    color: "from-cyan-400 to-blue-600"
  },
  { 
    title: "Xalqaro Logistika", 
    desc: "Dunyoning istalgan nuqtasidan 'Door-to-Door' xizmati. Hujjatlar va bojxona bizning bo'ynimizda.", 
    icon: Globe,
    color: "from-purple-400 to-pink-600"
  },
  { 
    title: "Tezkor Rasmiylashtiruv", 
    desc: "Hujjatlar tayyor bo'lganda, yukni 'Yashil yo'lak' orqali 2 soat ichida bojxonadan chiqaramiz.", 
    icon: Zap,
    color: "from-green-400 to-emerald-600"
  }
];

const performanceStats = [
  { label: "Yillik Deklaratsiyalar", value: "25,000+", sub: "100% xatosiz topshirish" },
  { label: "Bojxona Tajribasi", value: "15 Yil", sub: "Tizimning ich-ichidan bilamiz" },
  { label: "Tejalgan Soliqlar", value: "12M$", sub: "Mijozlarimiz cho'ntagida qolgan pul" },
  { label: "Yirik Hamkorlar", value: "500+", sub: "Davlat va xususiy korxonalar" },
];

const clients = ["KORZINKA", "IES", "ENTER ENGINEERING", "LUKOIL", "AKFA", "MACCOFFEE", "HYUNDAI", "NESTLE"];

// --- 2. ASOSIY KOMPONENT ---
export default function PearlOfAsiaMegaPortal() {
  const [lang, setLang] = useState<"uz" | "ru">("uz");
  const [formData, setFormData] = useState({ company: "", phone: "", cargoType: "" });
  const [status, setStatus] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const t = translations[lang];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 🔴 MOUSE INTERACTIVE EFFECT
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t.btnSending);
    setTimeout(() => { setStatus(t.success); setFormData({ company: "", phone: "", cargoType: "" }); }, 2000);
  };

  return (
    <div ref={containerRef} className="bg-[#020202] text-white overflow-x-hidden font-sans selection:bg-cyan-500">
      
      {/* 🔴 PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-600 z-[1000] origin-left" style={{ scaleX }} />

      {/* 🔴 CUSTOM CURSOR GLOW */}
      <div className="fixed pointer-events-none z-[0] w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(circle, #0891b2 0%, transparent 70%)", left: mousePosition.x - 300, top: mousePosition.y - 300 }} />

      {/* 🟢 NAVIGATION */}
      <nav className="fixed w-full z-[100] px-12 py-8 flex justify-between items-center backdrop-blur-xl border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-800 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-[360deg] transition-all duration-700">
            <Zap size={28} fill="white" className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tighter italic uppercase leading-none">Pearl of Asia</span>
            <span className="text-[8px] font-bold tracking-[0.5em] text-cyan-500 uppercase mt-1 italic">Professional Customs Broker</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            {["uz", "ru"].map((l) => (
              <button key={l} onClick={() => setLang(l as any)} className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${lang === l ? "bg-cyan-600 text-white" : "text-gray-500 hover:text-white"}`}>{l}</button>
            ))}
          </div>
          <a href="tel:+998332932006" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
             <Phone size={14} fill="currentColor" />
             <span className="text-[10px] font-black uppercase tracking-widest">+998 33 293 20 06</span>
          </a>
        </div>
      </nav>

      {/* 🟢 HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-8">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020202]" />
            <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2000" className="w-full h-full object-cover grayscale" alt="Global Logistics" />
        </div>

        <div className="relative z-10 max-w-[1600px] w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-8 py-3 rounded-full mb-12 backdrop-blur-md">
            <BadgeCheck size={16} className="text-cyan-500" />
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-cyan-400 italic">Licensed Customs Operator #0042</span>
          </motion.div>

          <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="text-[7vw] lg:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase italic mb-12 drop-shadow-2xl">
            {t.hero.split(" ").map((w, i) => <span key={i} className={i % 2 !== 0 ? "text-cyan-500" : "text-white"}>{w} </span>)}
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-20 items-center mt-32">
            <div className="text-left border-l-4 border-cyan-600 pl-10">
                <p className="text-gray-400 text-2xl font-light italic leading-relaxed mb-10 max-w-md">{t.heroDesc}</p>
                <button className="bg-cyan-600 px-12 py-6 rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-cyan-900/50 shadow-2xl">Mutaxassis maslahati</button>
            </div>
            
            <div className="flex flex-col items-center group">
                <div className="text-[140px] font-black text-white/5 group-hover:text-cyan-500/10 transition-colors leading-none tracking-tighter">2026</div>
                <p className="text-cyan-500 font-black tracking-[0.5em] uppercase text-xs -mt-8 italic">{t.heroSub}</p>
            </div>

            <div className="grid grid-cols-2 gap-10">
                {performanceStats.slice(0, 4).map((s, i) => (
                    <div key={i} className="text-right">
                        <h4 className="text-5xl font-black italic text-white group-hover:text-cyan-500">{s.value}</h4>
                        <p className="text-[9px] font-black uppercase text-gray-500 tracking-widest mt-2">{s.label}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 ADVANTAGES: MAQTANISH BO'LIMI */}
      <section className="py-60 bg-[#030303] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-10">
            <h2 className="text-7xl lg:text-9xl font-black italic uppercase mb-32 tracking-tighter">Nega <span className="text-cyan-500">Biz?</span></h2>
            <div className="grid lg:grid-cols-4 gap-6">
                {advantages.map((adv, i) => (
                    <motion.div whileHover={{ y: -20 }} key={i} className="p-12 rounded-[50px] bg-white/[0.02] border border-white/5 hover:border-cyan-500/50 transition-all group relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${adv.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
                        <adv.icon className="text-cyan-500 mb-8" size={48} strokeWidth={1} />
                        <h3 className="text-3xl font-black italic uppercase mb-6 group-hover:text-cyan-400">{adv.title}</h3>
                        <p className="text-gray-500 text-lg italic leading-relaxed">{adv.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 🟢 CLIENTS CAROUSEL */}
      <div className="py-20 bg-white/5 border-b border-white/10 overflow-hidden">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-40 items-center whitespace-nowrap">
              {clients.concat(clients).map((c, i) => (
                  <span key={i} className="text-5xl font-black italic text-gray-800 hover:text-cyan-500 transition-colors cursor-default tracking-tighter">{c}</span>
              ))}
          </motion.div>
      </div>

      {/* 🟢 BOJXONA KALKULYATORI (INTERACTIVE SIMULATION) */}
      <section className="py-60 bg-black">
          <div className="max-w-[1200px] mx-auto px-10 bg-gradient-to-br from-gray-900 to-black p-20 rounded-[60px] border border-white/10 shadow-3xl">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div>
                      <h2 className="text-6xl font-black italic uppercase mb-8">Bojxona <br /> <span className="text-cyan-500 underline">Kalkulyatori</span></h2>
                      <p className="text-gray-500 text-xl italic mb-10 leading-relaxed">Yukingizning bojxona qiymati va taxminiy to'lovlarni onlayn hisoblang. Tizim avtomatik ravishda yangi stavkalarni qo'llaydi.</p>
                      <ul className="space-y-4">
                          {["TN VED kodlar tahlili", "QQS (12%) hisob-kitobi", "Bojxona yig'imlari", "Imtiyozlarni hisobga olish"].map((item, i) => (
                              <li key={i} className="flex items-center gap-4 text-gray-400 font-bold italic"><CheckCircle2 className="text-cyan-500" size={20} /> {item}</li>
                          ))}
                      </ul>
                  </div>
                  <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 space-y-8">
                      <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest italic">Yuk qiymati ($)</label>
                          <input type="number" placeholder="50,000" className="w-full bg-black border-b border-white/10 p-5 outline-none focus:border-cyan-500 text-2xl font-black italic" />
                      </div>
                      <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest italic">Yuk og'irligi (kg)</label>
                          <input type="number" placeholder="2,500" className="w-full bg-black border-b border-white/10 p-5 outline-none focus:border-cyan-500 text-2xl font-black italic" />
                      </div>
                      <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-cyan-600 hover:text-white transition-all transform active:scale-95">Hisoblash</button>
                  </div>
              </div>
          </div>
      </section>

      {/* 🟢 FAQ SECTION */}
      <section className="py-60 px-10 max-w-5xl mx-auto">
        <h2 className="text-6xl font-black italic uppercase mb-20 text-center tracking-tighter">{t.faqTitle}</h2>
        <div className="space-y-4">
          {[
              {q: "Bojxona rasmiylashtiruvi qancha vaqt oladi?", a: "Tizimimiz orqali yashil yo'lakdagi yuklar 30 daqiqadan 2 soatgacha rasmiylashtiriladi."},
              {q: "Sizda bojxona ombori (sklad) bormi?", a: "Ha, biz Toshkentning barcha asosiy terminallarida (Ark-Buloq, Chuqursoy va h.k.) o'z ombor xizmatlarimizga egamiz."},
              {q: "Siz orqali qancha pul tejash mumkin?", a: "Ekspertlarimiz TN VED kodlarini to'g'ri klassifikatsiya qilish orqali to'lovlarni o'rtacha 15-25% gacha qonuniy tejashga yordam beradi."}
          ].map((faq, idx) => (
            <div key={idx} className="border border-white/5 bg-white/[0.01] rounded-[30px] overflow-hidden">
              <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full p-10 flex justify-between items-center text-left hover:bg-white/5 transition-all">
                <span className="text-xl font-black italic uppercase tracking-wider">{faq.q}</span>
                <ChevronRight className={`transition-transform duration-500 ${activeFaq === idx ? "rotate-90 text-cyan-500" : "text-gray-700"}`} />
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-10 pb-10 text-gray-500 italic text-xl leading-relaxed">
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 CONTACT SECTION */}
      <section className="py-60 bg-black border-t border-white/5">
        <div className="max-w-[1500px] mx-auto px-10 grid lg:grid-cols-2 gap-40">
          <div>
            <h2 className="text-8xl font-black italic uppercase tracking-tighter leading-none mb-12">Aloqada <br /> <span className="text-cyan-500">Bo'ling</span></h2>
            <p className="text-gray-500 text-2xl font-light italic leading-relaxed mb-20 max-w-lg border-l-4 border-cyan-900 pl-10">{t.formDesc}</p>
            <div className="space-y-12">
                <div className="flex gap-8 items-center group">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/10 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-glow"><Phone size={32} /></div>
                    <div><p className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.4em] mb-2 italic">Call-Center 24/7</p><p className="text-3xl font-black italic text-white tracking-tighter">+998 (33) 293 20 06</p></div>
                </div>
                <div className="flex gap-8 items-center group">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/10 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-glow"><MessageSquare size={32} /></div>
                    <div><p className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.4em] mb-2 italic">Telegram Desk</p><p className="text-3xl font-black italic text-white tracking-tighter">@gsmprogrammer1</p></div>
                </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-20 rounded-[60px] relative">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic">{t.inputCompany}</label>
                <input required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-transparent border-b border-white/10 p-4 outline-none focus:border-cyan-500 text-2xl font-black italic text-white" placeholder="SAMSUNG ELECTRONICS" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic">{t.inputPhone}</label>
                <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-transparent border-b border-white/10 p-4 outline-none focus:border-cyan-500 text-2xl font-black italic text-white" placeholder="+998 9x xxx xx xx" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic">{t.inputCargo}</label>
                <textarea required value={formData.cargoType} onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })} className="w-full bg-transparent border-b border-white/10 p-4 outline-none focus:border-cyan-500 text-xl font-black italic text-white h-32" placeholder="Yuk haqida qisqacha ma'lumot..." />
              </div>
              <button type="submit" className="w-full bg-cyan-600 hover:bg-white hover:text-black text-white py-8 rounded-[30px] font-black text-xs uppercase tracking-[1em] transition-all duration-700 shadow-2xl shadow-cyan-900/40">
                {status || t.btnSend}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 🟢 FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
          <p className="text-[10px] font-black text-gray-700 uppercase tracking-[1em]">© 2026 Pearl of Asia Logistics. All Rights Reserved.</p>
      </footer>

      {/* 🔴 FIXED ACTION BUTTONS */}
      <div className="fixed bottom-10 right-10 z-[500] flex flex-col gap-4">
        <motion.a whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }} href="https://t.me/gsmprogrammer1" target="_blank" className="w-16 h-16 bg-[#229ED9] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/50"><MessageSquare size={28} className="text-white" /></motion.a>
        <motion.a whileHover={{ scale: 1.1, rotate: -10 }} whileTap={{ scale: 0.9 }} href="tel:+998332932006" className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-900/50 animate-pulse"><Phone size={28} className="text-white" /></motion.a>
      </div>

      <style jsx global>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020202; }
        ::-webkit-scrollbar-thumb { background: #0891b2; border-radius: 10px; }
        html { scroll-behavior: smooth; }
        .shadow-glow { filter: drop-shadow(0 0 15px rgba(8, 145, 178, 0.5)); }
      `}</style>
    </div>
  );
}