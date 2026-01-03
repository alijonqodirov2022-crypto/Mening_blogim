"use client";
import React, { useState } from 'react';
import { Github, Mail, Database, Laptop, GraduationCap, Code2, Send, MessageSquare, Phone } from 'lucide-react';

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
    placeholder_msg: "Qanday xizmat kerak? (Masalan: SQL baza yoki sayt)",
    btn_send: "Yuborish",
    footer: "Bog'lanish uchun",
    direct_tg: "Telegram orqali yozish"
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
    placeholder_msg: "Какая услуга вам нужна?",
    btn_send: "Отправить",
    footer: "Контакты",
    direct_tg: "Написать в Telegram"
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
    placeholder_msg: "Which service do you need?",
    btn_send: "Send Message",
    footer: "Get in touch",
    direct_tg: "Write via Telegram"
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

    const botToken = "8578469335:AAGIhKG9I_FoRAw7pRLHkpWmyLmc7-XqLFU"; 
    const chatId = "7277916371"; 

    const text = `🚀 *YANGI BUYURTMA*\n\n👤 *Ism:* ${name}\n💬 *Xabar:* ${message}\n🌐 *Til:* ${lang.toUpperCase()}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: 'Markdown' })
      });
      setStatus('success');
      setName('');
      setMessage('');
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="p-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter text-blue-600">AQ.2006</span>
          <div className="flex bg-slate-200 p-1 rounded-xl">
            {(['uz', 'ru', 'en'] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${lang === l ? 'bg-white shadow-md text-blue-600' : 'text-slate-500'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <section className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            ALIDOV <span className="text-blue-600">DEV.</span>
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed">
            {t.hero_p1} <span className="text-slate-900 font-bold">Alijon Qodirov</span>. {t.hero_p2}
          </p>
        </section>

        {/* XIZMATLAR FORMASI SHU YERDA */}
        <section className="bg-white border-2 border-blue-600 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <MessageSquare size={200} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4 text-center md:text-left">{t.contact_title}</h2>
            <p className="text-slate-500 mb-10 text-center md:text-left">Ma'lumotlaringizni qoldiring, men sizga Telegram orqali javob beraman.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <form onSubmit={sendToTelegram} className="flex flex-col gap-4">
                <input 
                  type="text" placeholder={t.placeholder_name} required 
                  value={name} onChange={(e) => setName(e.target.value)} 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <textarea 
                  placeholder={t.placeholder_msg} required 
                  value={message} onChange={(e) => setMessage(e.target.value)} 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600 transition-all h-32"
                ></textarea>
                <button 
                  type="submit" disabled={status === 'sending'}
                  className="bg-blue-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-blue-200"
                >
                  <Send size={20} /> {status === 'sending' ? '...' : t.btn_send}
                </button>
                {status === 'success' && <p className="text-green-600 font-bold text-center mt-2 animate-bounce">Muvaffaqiyatli yuborildi! ✅</p>}
              </form>

              <div className="flex flex-col justify-center gap-6 border-t md:border-t-0 md:border-l border-slate-100 pt-8 md:pt-0 md:pl-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="font-bold">alijonqodirov@gmail.com</p>
                  </div>
                </div>
                
                <a href="https://t.me/shaxsiy_username" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <Send />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Telegram</p>
                    <p className="font-bold">{t.direct_tg}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center text-slate-400 text-sm">
        <p>© 2026 Alidov Portfolio. {t.footer}</p>
      </footer >
    </div>
  );
}