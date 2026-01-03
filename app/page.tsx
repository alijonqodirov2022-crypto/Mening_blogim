"use client";
import React, { useState } from 'react';
import { Github, Mail, Database, Laptop, GraduationCap, Code2, Send, MessageSquare } from 'lucide-react';

const translations = {
  uz: {
    about: "Men haqimda",
    skills: "Bilimlarim",
    hero_p1: "Men",
    hero_p2: "2006-yilda tug'ilganman. Toshkent Arxitektura va Qurilish universiteti, Kompyuter injiniringi yo'nalishi talabasiman.",
    skill1_title: "Frontend & Backend",
    skill1_desc: "Next.js va zamonaviy frameworklarni o'rganmoqdaman. Full-stack muhandislik sari qadam.",
    skill2_title: "Buxgalteriya & Office",
    skill2_desc: "Buxgalteriya hisobi va MS Office paketida professional darajada ishlay olaman.",
    contact_title: "Xizmat buyurtma qilish",
    placeholder_name: "Ismingiz",
    placeholder_msg: "Xizmat turi yoki xabar...",
    btn_send: "Yuborish",
    footer: "Bog'lanish uchun"
  },
  ru: {
    about: "Обо мне",
    skills: "Навыки",
    hero_p1: "Я",
    hero_p2: "Родился в 2006 году. Студент Ташкентского архитектурно-строительного университета по направлению Компьютерный инжиниринг.",
    skill1_title: "Frontend & Backend",
    skill1_desc: "Изучаю Next.js и современные фреймворки. Шаг к Full-stack инженерии.",
    skill2_title: "Бухгалтерия и Office",
    skill2_desc: "Работаю на профессиональном уровне в бухгалтерском учете и пакете MS Office.",
    contact_title: "Заказать услугу",
    placeholder_name: "Ваше имя",
    placeholder_msg: "Тип услуги или сообщение...",
    btn_send: "Отправить",
    footer: "Контакты"
  },
  en: {
    about: "About",
    skills: "Skills",
    hero_p1: "I am",
    hero_p2: "Born in 2006. Student at Tashkent University of Architecture and Civil Engineering, majoring in Computer Engineering.",
    skill1_title: "Frontend & Backend",
    skill1_desc: "Learning Next.js and modern frameworks. A step towards Full-stack engineering.",
    skill2_title: "Accounting & Office",
    skill2_desc: "Professional level in accounting and MS Office package.",
    contact_title: "Order a Service",
    placeholder_name: "Your Name",
    placeholder_msg: "Service type or message...",
    btn_send: "Send Message",
    footer: "Get in touch"
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState<'uz' | 'ru' | 'en'>('uz');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const t = translations[lang];

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // SIZ BERGAN MA'LUMOTLAR JOYLASHDI:
    const botToken = "8578469335:AAGIhKG9I_FoRAw7pRLHkpWmyLmc7-XqLFU"; 
    const chatId = "7277916371"; 

    const text = `🚀 *Yangi buyurtma!*\n\n👤 *Ism:* ${name}\n💬 *Xabar:* ${message}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: 'Markdown' })
      });
      setStatus('success');
      setName('');
      setMessage('');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className="p-6 border-b bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter text-blue-600">AQ.2006</span>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {(['uz', 'ru', 'en'] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${lang === l ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <section className="mb-32 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            ALIDOV <span className="text-blue-600 underline">DEV.</span>
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed mb-10">
            {t.hero_p1} <span className="text-slate-900 font-bold">Alijon Qodirov</span>. {t.hero_p2}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
            <Laptop size={48} className="mb-6 text-blue-600" />
            <h3 className="text-3xl font-black mb-4">{t.skill1_title}</h3>
            <p className="opacity-70 leading-relaxed">{t.skill1_desc}</p>
          </div>
          <div className="p-10 bg-slate-900 rounded-[3rem] text-white">
            <Code2 size={48} className="mb-6 text-blue-400" />
            <h3 className="text-3xl font-black mb-4">{t.skill2_title}</h3>
            <p className="opacity-70 leading-relaxed">{t.skill2_desc}</p>
          </div>
        </section>

        <section className="bg-blue-600 rounded-[4rem] p-10 md:p-20 text-white">
          <h2 className="text-4xl font-black mb-10 text-center">{t.contact_title}</h2>
          <form onSubmit={sendToTelegram} className="max-w-xl mx-auto flex flex-col gap-4">
            <input 
              type="text" 
              placeholder={t.placeholder_name} 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full px-6 py-4 rounded-2xl text-black outline-none focus:ring-4 focus:ring-blue-300" 
            />
            <textarea 
              placeholder={t.placeholder_msg} 
              required 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full px-6 py-4 rounded-2xl text-black h-32 outline-none focus:ring-4 focus:ring-blue-300" 
            />
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="bg-black text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 disabled:opacity-50"
            >
              <Send size={18} /> {status === 'sending' ? '...' : t.btn_send}
            </button>
            {status === 'success' && <p className="text-white font-bold text-center mt-2 animate-bounce">Yuborildi! ✅</p>}
          </form>
        </section>
      </main>

      <footer className="py-20 border-t mt-20 text-center text-slate-400">
        <p className="font-bold mb-4 uppercase tracking-widest text-xs">{t.footer}</p>
        <div className="flex justify-center gap-10">
          <Github className="cursor-pointer hover:text-blue-600 transition-colors" />
          <Mail className="cursor-pointer hover:text-blue-600 transition-colors" />
        </div>
      </footer>
    </div>
  );
}