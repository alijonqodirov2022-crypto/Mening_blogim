"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Globe, ShieldCheck, Zap, ChevronRight, Menu, X, 
  BarChart3, Landmark, Truck, Anchor, HelpCircle, 
  Search, Cpu, Fingerprint, Award, Users, TrendingUp,
  ShoppingBag, ShieldAlert, FileText, ClipboardCheck,
  CheckCircle2, ArrowRight, Briefcase, MapPin, Phone,
  Clock, Server, Globe2, Shield, Activity, HardHat,
  Scale, Box, Warehouse, BadgeCheck, MessageSquare
} from "lucide-react";

// --- 1. MA'LUMOTLAR ARXITEKTURASI (CONTENT DATABASE) ---
const translations = {
  uz: {
    nav: ["Xizmatlar", "Postlar", "Jarayon", "FAQ", "Bog'lanish"],
    hero: "O‘zbekistonning Raqamli Bojxona Arxitekturasi",
    heroSub: "100M+ Deklaratsiyalar. Milliy miqyosdagi ishonch.",
    heroDesc: "Pearl of Asia — bu nafaqat logistika, balki xalqaro savdoning raqamli kalitidir. Biz eng murakkab yuklarni ham soniyalar ichida rasmiylashtiramiz.",
    stats: ["Yillik Tajriba", "Deklaratsiyalar", "Mutaxassislar", "Hamkorlar"],
    processTitle: "Qanday Ishlaymiz?",
    faqTitle: "Ko'p Beriladigan Savollar",
    calculatorTitle: "Bojxona Qiymati Kalkulyatori",
    formTitle: "Strategik Hamkorlikni Boshlang",
    formDesc: "Ma'lumotlaringizni kiriting va bizning sun'iy intellekt asosidagi tizimimiz yukingizni tahlil qilib, 15 daqiqada siz bilan bog'lanadi.",
    inputCompany: "Kompaniya yoki brend nomi",
    inputPhone: "Bog'lanish uchun raqam",
    inputCargo: "Yuk tavsifi (Og'irligi, turi, kelib chiqishi)",
    btnSend: "Ekspertizani Tasdiqlash",
    btnSending: "Tizimga yuborilmoqda...",
    success: "✅ So'rovingiz qabul qilindi. Navbat raqamingiz: #POA-2026",
    error: "❌ Tizimda xatolik. Iltimos, qayta urinib ko'ring."
  },
  ru: {
    nav: ["Услуги", "Посты", "Процесс", "FAQ", "Контакт"],
    hero: "Цифровая Таможенная Архитектура Узбекистана",
    heroSub: "100М+ Деклараций. Доверие национального масштаба.",
    heroDesc: "Pearl of Asia — это не просто логистика, это цифровой ключ к международной торговле. Мы оформляем даже самые сложные грузы за считанные секунды.",
    stats: ["Лет Опыта", "Деклараций", "Специалистов", "Партнеров"],
    processTitle: "Как Мы Работаем?",
    faqTitle: "Часто Задаваемые Вопросы",
    calculatorTitle: "Калькулятор Таможенной Стоимости",
    formTitle: "Начните Стратегическое Партнерство",
    formDesc: "Введите ваши данные, и наша система на базе ИИ проанализирует ваш груз и свяжется с вами в течение 15 минут.",
    inputCompany: "Название компании или бренда",
    inputPhone: "Номер для связи",
    inputCargo: "Описание груза (Вес, тип, происхождение)",
    btnSend: "Подтвердить Экспертизу",
    btnSending: "Отправка в систему...",
    success: "✅ Ваш запрос принят. Ваш номер в очереди: #POA-2026",
    error: "❌ Ошибка системы. Пожалуйста, попробуйте еще раз."
  }
};

const services = [
  { id: 1, title: "Export & Import", icon: Globe2, desc: "Dunyoning istalgan nuqtasidan yuklarni O'zbekistonga keltirish va chiqarishni to'liq nazorat qilish." },
  { id: 2, title: "Transit Corridor", icon: Activity, desc: "Tranzit yuklar uchun xalqaro konvensiyalar (TIR-CARNET) asosida tezkor rasmiylashtirish." },
  { id: 3, title: "Certification", icon: BadgeCheck, desc: "Fitosanitariya, veterinariya va sertifikatlashtirish xizmatlarini bir nuqtada hal qilish." },
  { id: 4, title: "Consulting", icon: Scale, desc: "Tashqi iqtisodiy faoliyat bo'yicha yuridik va amaliy maslahatlar, kodlar klassifikatsiyasi." }
];

const faqs = [
  { q: "Bojxona rasmiylashtiruvi qancha vaqt oladi?", a: "Tizimimiz orqali yashil yo'lakdagi yuklar 30 daqiqadan 2 soatgacha rasmiylashtiriladi." },
  { q: "Qanday hujjatlar talab qilinadi?", a: "Invoys, Shartnoma, CMR yoki Konosament, va yukning kelib chiqish sertifikatlari." },
  { q: "Gabaritsiz yuklarni deklaratsiya qilasizlarmi?", a: "Ha, IES va boshqa yirik sanoat loyihalari uchun maxsus guruhimiz mavjud." }
];

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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, lang }),
      });
      if (res.ok) {
        setStatus(t.success);
        setFormData({ company: "", phone: "", cargoType: "" });
      } else { setStatus(t.error); }
    } catch (err) { setStatus("⚠️ Network Error"); }
  };

  return (
    <div ref={containerRef} className="bg-[#020202] text-white overflow-x-hidden font-sans selection:bg-cyan-500">
      
      {/* 🔴 PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-600 z-[1000] origin-left" style={{ scaleX }} />

      {/* 🔴 CUSTOM CURSOR GLOW */}
      <div 
        className="fixed pointer-events-none z-[0] w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] transition-transform duration-150 ease-out"
        style={{
          background: "radial-gradient(circle, #0891b2 0%, transparent 70%)",
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      {/* 🟢 NAVIGATION: PREMIUM GLASSMORFISIM */}
      <nav className="fixed w-full z-[100] px-12 py-8 flex justify-between items-center backdrop-blur-xl border-b border-white/5 bg-black/40">
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-4 group">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-800 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-[360deg] transition-all duration-700 shadow-glow">
            <Zap size={28} fill="white" className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tighter italic uppercase leading-none">Pearl of Asia</span>
            <span className="text-[8px] font-bold tracking-[0.5em] text-cyan-500 uppercase mt-1">Logistics Architecture</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.4em] uppercase text-gray-500">
          {t.nav.map((item, idx) => (
            <motion.a 
              whileHover={{ y: -2, color: "#0891b2" }}
              key={item} href={`#section-${idx}`} 
              className="relative group transition-colors"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
            {["uz", "ru"].map((l) => (
              <button 
                key={l} 
                onClick={() => setLang(l as any)}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${lang === l ? "bg-cyan-600 text-white shadow-xl" : "text-gray-500 hover:text-white"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <button className="hidden md:block bg-white text-black px-8 py-3 rounded-xl text-[10px] font-black uppercase hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
            Client Login
          </button>
        </div>
      </nav>

      {/* 🟢 HERO: THE DIGITAL PORT */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020202_90%)] z-10" />
           <motion.img 
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 2 }}
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000" 
              className="w-full h-full object-cover grayscale" 
              alt="Customs Terminal" 
           />
        </div>

        <div className="relative z-10 max-w-[1600px] w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-8 py-3 rounded-full mb-12 backdrop-blur-md"
          >
            <Shield size={16} className="text-cyan-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-cyan-400 italic">Certified Gov Partner 2026-2030</span>
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[8vw] lg:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase italic mb-12 drop-shadow-[0_20px_50px_rgba(8,145,178,0.3)]"
          >
            {t.hero.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-cyan-500" : "text-white"}>{word} </span>
            ))}
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start mt-32">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-left"
            >
              <p className="text-gray-400 text-2xl font-light italic leading-relaxed mb-12 border-l-4 border-cyan-600 pl-10 max-w-lg">
                {t.heroDesc}
              </p>
              <div className="flex gap-4">
                 <button className="bg-cyan-600 px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-glow">Start Project</button>
                 <button className="border border-white/10 px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white/5 transition-all">Network Map</button>
              </div>
            </motion.div>

            <div className="flex flex-col items-center justify-center group cursor-pointer">
               <div className="text-[160px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent opacity-20 group-hover:opacity-40 transition-opacity select-none">100M+</div>
               <p className="text-cyan-500 font-black tracking-[1.2em] uppercase text-[12px] -mt-10 italic animate-pulse">{t.heroSub}</p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-24">
               {[
                 { val: "15y+", label: t.stats[0], icon: Award },
                 { val: "100M+", label: t.stats[1], icon: TrendingUp },
                 { val: "50+", label: t.stats[2], icon: Users },
                 { val: "IES/Krz", label: t.stats[3], icon: Globe }
               ].map((stat, i) => (
                 <motion.div 
                   key={i} 
                   whileHover={{ y: -10 }}
                   className="text-right group"
                 >
                    <stat.icon className="inline-block text-cyan-900 group-hover:text-cyan-500 transition-colors mb-4" size={24} />
                    <h4 className="text-6xl font-black italic mb-2 tracking-tighter group-hover:text-cyan-500 transition-all">{stat.val}</h4>
                    <p className="text-[10px] font-black tracking-widest uppercase text-gray-500">{stat.label}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 SERVICES: CARGO ARCHITECTURE */}
      <section id="section-0" className="py-60 relative">
        <div className="max-w-[1700px] mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-cyan-500 mb-8"
              >
                <div className="w-20 h-0.5 bg-cyan-500" />
                <span className="text-[12px] font-black uppercase tracking-[0.6em]">Premium Services</span>
              </motion.div>
              <h2 className="text-8xl lg:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.8]">
                 Xalqaro Savdo <br /> <span className="text-cyan-500 underline decoration-cyan-900">Yechimlari</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -20, backgroundColor: "rgba(255,255,255,0.02)" }}
                className="group p-16 border border-white/5 bg-white/[0.01] rounded-[40px] flex flex-col justify-between h-[650px] transition-all"
              >
                <div className="w-20 h-20 bg-cyan-500/5 rounded-3xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-glow">
                  <service.icon size={40} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-8 group-hover:text-cyan-500 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-xl leading-relaxed italic opacity-80 group-hover:opacity-100">{service.desc}</p>
                </div>
                <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.4em] text-gray-800 italic">SYSTEM_CORE_0{idx+1}</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 INFRASTRUCTURE: COVERAGE DATA */}
      <section id="section-1" className="py-60 bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-10 grid lg:grid-cols-2 gap-40 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute inset-0 bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
             <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { icon: Warehouse, name: "Ark-Buloq", code: "P-01" },
                  { icon: Truck, name: "S. Tolov", code: "P-02" },
                  { icon: Globe2, name: "Aviayuk", code: "P-03" },
                  { icon: Box, name: "Chuqursoy", code: "P-04" },
                ].map((post, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    key={i} className="p-12 bg-black border border-white/5 rounded-[30px] flex flex-col gap-6"
                  >
                    <post.icon className="text-cyan-500" size={32} />
                    <h5 className="text-2xl font-black italic uppercase">{post.name}</h5>
                    <p className="text-[10px] font-bold text-gray-700 tracking-widest">{post.code} TERMINAL ACTIVE</p>
                  </motion.div>
                ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mb-12">
               Respublika <br /> <span className="text-cyan-500">Qamrovi</span>
            </h2>
            <p className="text-gray-500 text-2xl italic font-light mb-16 leading-relaxed border-l-2 border-cyan-900 pl-10">
               O'zbekistonning barcha asosiy bojxona postlarida bizning doimiy vakillarimiz mavjud. 
               Bu yukingizni har qanday nuqtada kutib olish va kuzatish imkonini beradi.
            </p>
            <div className="space-y-6">
               {["Toshkent shahar", "Toshkent viloyati", "Andijon (SAD)", "Termiz (Hayraton)", "Nukus (Qoraqalpog'iston)"].map((reg, i) => (
                 <div key={i} className="flex items-center gap-6 group">
                   <div className="w-3 h-3 rounded-full bg-cyan-900 group-hover:bg-cyan-500 transition-colors" />
                   <span className="text-xl font-bold italic text-gray-400 group-hover:text-white transition-all uppercase tracking-widest">{reg}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 FAQ SECTION */}
      <section id="section-3" className="py-60 px-10 max-w-5xl mx-auto text-center">
        <h2 className="text-6xl font-black italic uppercase mb-20">{t.faqTitle}</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-white/5 bg-white/[0.01] rounded-[20px] overflow-hidden transition-all"
            >
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-all"
              >
                <span className="text-xl font-bold italic uppercase tracking-wider">{faq.q}</span>
                <ChevronRight className={`transition-transform duration-500 ${activeFaq === idx ? "rotate-90 text-cyan-500" : "text-gray-700"}`} />
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8 text-left text-gray-500 italic text-lg leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 COMMAND CENTER: FORM */}
      <section id="section-4" className="py-60 relative overflow-hidden bg-black border-t border-white/5">
        <div className="max-w-[1500px] mx-auto px-10 relative z-10 grid lg:grid-cols-2 gap-40">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-8xl font-black italic uppercase tracking-tighter leading-none mb-12"
            >
              {t.formTitle.split(" ").slice(0, 2).join(" ")} <br /> <span className="text-cyan-500">{t.formTitle.split(" ").slice(2).join(" ")}</span>
            </motion.h2>
            <p className="text-gray-500 text-2xl font-light italic leading-relaxed mb-20 max-w-lg border-l-4 border-cyan-900 pl-10">
              {t.formDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="flex gap-8 items-center group">
                  <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/10 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-glow"><Phone size={32} strokeWidth={1} /></div>
                  <div><p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2 italic">Operation Center</p><p className="text-2xl font-black italic text-white uppercase tracking-tighter">+998 (XX) XXX XX XX</p></div>
               </div>
               <div className="flex gap-8 items-center group">
                  <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/10 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-glow"><Server size={32} strokeWidth={1} /></div>
                  <div><p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-2 italic">Response Time</p><p className="text-2xl font-black italic text-white uppercase tracking-tighter">ULTRA_FAST (15m)</p></div>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-20 rounded-[60px] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 blur-[120px] group-hover:bg-cyan-600/20 transition-all duration-1000" />
            
            <form onSubmit={handleSubmit} className="space-y-16 relative z-10">
              <div className="space-y-6">
                <label className="text-[11px] font-black text-gray-600 uppercase tracking-[0.6em] italic">{t.inputCompany}</label>
                <input 
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 p-6 outline-none focus:border-cyan-500 transition-all font-black italic uppercase tracking-widest text-xl text-white" 
                  placeholder="PEARL LOGISTICS CO."
                />
              </div>
              
              <div className="space-y-6">
                <label className="text-[11px] font-black text-gray-600 uppercase tracking-[0.6em] italic">{t.inputPhone}</label>
                <input 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 p-6 outline-none focus:border-cyan-500 transition-all font-black italic tracking-widest text-xl text-white" 
                  placeholder="+998 90 000 00 00"
                />
              </div>

              <div className="space-y-6">
                <label className="text-[11px] font-black text-gray-600 uppercase tracking-[0.6em] italic">{t.inputCargo}</label>
                <input 
                  required
                  value={formData.cargoType}
                  onChange={(e) => setFormData({...formData, cargoType: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 p-6 outline-none focus:border-cyan-500 transition-all font-black italic tracking-widest text-xl text-white" 
                  placeholder="INDUSTRIAL EQUIPMENTS / 20 TONNES"
                />
              </div>

              <div className="pt-10">
                <button 
                  type="submit"
                  disabled={status === t.btnSending}
                  className="w-full bg-cyan-600 hover:bg-white hover:text-black text-white py-8 rounded-[30px] font-black text-sm uppercase tracking-[0.8em] transition-all duration-700 shadow-[0_40px_80px_rgba(8,145,178,0.4)] flex items-center justify-center gap-6 group"
                >
                  {status === t.btnSending ? t.btnSending : t.btnSend} <ChevronRight size={20} className="group-hover:translate-x-4 transition-transform" />
                </button>
                <AnimatePresence>
                  {status && status !== t.btnSending && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-10 text-center text-xs font-black uppercase tracking-widest ${status.includes('✅') ? 'text-cyan-400' : 'text-red-500'}`}
                    >
                      {status}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 🟢 FOOTER: LEGACY */}
      <footer className="py-20 border-t border-white/5 bg-[#010101] relative z-10">
        <div className="max-w-[1600px] mx-auto px-10">
           <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
              <div className="max-w-md">
                 <div className="flex items-center gap-4 mb-8">
                    <Zap className="text-cyan-500" />
                    <span className="text-3xl font-black italic uppercase tracking-tighter">Pearl of Asia</span>
                 </div>
                 <p className="text-gray-600 italic text-lg leading-relaxed">
                    Bizning maqsadimiz — Markaziy Osiyo logistika arxitekturasini raqamlashtirish va yuklaringiz xavfsizligini ta'minlash.
                 </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
                 <div className="space-y-6">
                    <h6 className="text-[10px] font-black uppercase tracking-widest text-white">Network</h6>
                    <ul className="space-y-4 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                       <li><a href="#" className="hover:text-cyan-500 transition-all">Ark-Buloq</a></li>
                       <li><a href="#" className="hover:text-cyan-500 transition-all">Chuqursoy</a></li>
                       <li><a href="#" className="hover:text-cyan-500 transition-all">Tashkent Airport</a></li>
                    </ul>
                 </div>
                 <div className="space-y-6">
                    <h6 className="text-[10px] font-black uppercase tracking-widest text-white">Legal</h6>
                    <ul className="space-y-4 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                       <li><a href="#" className="hover:text-cyan-500 transition-all">Privacy Policy</a></li>
                       <li><a href="#" className="hover:text-cyan-500 transition-all">Licensing</a></li>
                       <li><a href="#" className="hover:text-cyan-500 transition-all">Gov Audit</a></li>
                    </ul>
                 </div>
              </div>
           </div>
           <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-10">
              <p className="text-[9px] font-black text-gray-700 uppercase tracking-[0.5em]">© 2026 Pearl of Asia Logistics Group. All Rights Reserved.</p>
              <div className="flex gap-8">
                 {[Globe2, MessageSquare, ShieldCheck].map((Icon, i) => (
                    <Icon key={i} className="text-gray-800 hover:text-cyan-500 transition-all cursor-pointer" size={20} />
                 ))}
              </div>
           </div>
        </div>
      </footer>

      {/* 🔴 GLOBAL STYLES */}
      <style jsx global>{`
        .shadow-glow { filter: drop-shadow(0 0 15px rgba(8, 145, 178, 0.5)); }
        input::placeholder { color: rgba(255,255,255,0.05); }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020202; }
        ::-webkit-scrollbar-thumb { background: #0891b2; border-radius: 10px; }
      `}</style>
    </div>
  );
}