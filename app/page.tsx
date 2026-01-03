"use client";
import React, { useState } from 'react';
import { Database, Send, Smartphone, Network, Lock } from 'lucide-react';

const translations = {
  uz: {
    hero_title: "ALIDOV DEV.",
    hero_desc: "Texnik muhandis va dasturchi. Tarmoqlar, telefonlar va ma'lumotlar bazasi mutaxassisi. 2024 TAQU Talabasi.",
    service_phone: "Telefon Programmisti",
    service_phone_desc: "Qulflangan telefonlarni ochish, proshivka va tizimli tuzatish.",
    service_admin: "Tarmoq Administratori",
    service_admin_desc: "Lokal tarmoq sozlash va xavfsizlik.",
    service_sql: "SQL Mutaxassisi",
    service_sql_desc: "Ma'lumotlar bazasini qurish va boshqarish.",
    contact_title: "Xizmat buyurtma qilish",
    placeholder_name: "Ismingiz",
    placeholder_phone: "Telefon raqamingiz",
    select_service: "Qanday xizmat kerak?",
    opt_unlock: "Telefonni blokdan ochish",
    opt_network: "Tarmoqni sozlash",
    opt_sql: "SQL Ma'lumotlar bazasi",
    btn_send: "Yuborish",
    success: "Muvaffaqiyatli yuborildi! ✅"
  },
  ru: {
    hero_title: "ALIDOV DEV.",
    hero_desc: "Технический инженер и программист. Специалист по сетям, телефонам и базам данных. Студент ТАСИ 2024.",
    service_phone: "Программист телефонов",
    service_phone_desc: "Разблокировка телефонов, прошивка и системный ремонт.",
    service_admin: "Сетевой администратор",
    service_admin_desc: "Настройка локальных сетей и безопасность.",
    service_sql: "SQL Эксперт",
    service_sql_desc: "Проектирование и управление базами данных.",
    contact_title: "Заказать услугу",
    placeholder_name: "Ваше имя",
    placeholder_phone: "Номер телефона",
    select_service: "Какая услуга нужна?",
    opt_unlock: "Разблокировка телефона",
    opt_network: "Настройка сети",
    opt_sql: "База данных SQL",
    btn_send: "Отправить",
    success: "Успешно отправлено! ✅"
  },
  en: {
    hero_title: "ALIDOV DEV.",
    hero_desc: "Technical engineer and developer. Specialist in networks, phones, and databases. TAQU Student 2024.",
    service_phone: "Phone Programmer",
    service_phone_desc: "Unlocking phones, flashing, and system repairs.",
    service_admin: "Network Administrator",
    service_admin_desc: "Local network setup and security.",
    service_sql: "SQL Expert",
    service_sql_desc: "Database design and management.",
    contact_title: "Order a Service",
    placeholder_name: "Your name",
    placeholder_phone: "Phone number",
    select_service: "Which service do you need?",
    opt_unlock: "Phone Unlocking",
    opt_network: "Network Setup",
    opt_sql: "SQL Database",
    btn_send: "Send",
    success: "Sent successfully! ✅"
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState('uz');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const t = translations[lang as keyof typeof translations];

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const botToken = "8578469335:AAGIhKG9I_FoRAw7pRLHkpWmyLmc7-XqLFU"; 
    const chatId = "7277916371"; 
    const text = `🚀 YANGI BUYURTMA (${lang.toUpperCase()})\n👤 Mijoz: ${name}\n📞 Tel: ${phone}\n🛠 Xizmat: ${service}\n💬 Xabar: ${message}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text })
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setPhone(''); setMessage(''); setService('');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) { setStatus('error'); }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <nav className="p-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter text-blue-600 italic">ALIDOV.</span>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-xl shadow-inner border border-slate-200">
            {['uz', 'ru', 'en'].map((l) => (
              <button key={l} onClick={() => setLang(l)} 
                className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${lang === l ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16">
        <section className="flex flex-col md:flex-row items-center gap-10 mb-24">
          <div className="relative w-40 h-40 shrink-0">
             <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 shadow-xl"></div>
             <div className="absolute inset-0 bg-slate-300 rounded-[2.5rem] overflow-hidden border-2 border-white">
                <img 
                  src="/me.jpg" 
                  alt="Alijon" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { 
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=Alijon+Qodirov&background=0284c7&color=fff&size=512` 
                  }} 
                />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase leading-none">{t.hero_title}</h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">{t.hero_desc}</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { icon: Network, title: t.service_admin, desc: t.service_admin_desc, color: 'bg-white text-slate-900' },
            { icon: Smartphone, title: t.service_phone, desc: t.service_phone_desc, color: 'bg-blue-600 text-white scale-105 shadow-xl shadow-blue-200' },
            { icon: Database, title: t.service_sql, desc: t.service_sql_desc, color: 'bg-white text-slate-900' }
          ].map((s, i) => (
            <div key={i} className={`p-8 rounded-[2.5rem] border-2 border-slate-100 ${s.color}`}>
              <s.icon className="mb-6" size={32} />
              <h3 className="font-black text-xl mb-2">{s.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </section>

        <section id="contact" className="bg-white rounded-[3.5rem] p-8 md:p-16 border-2 border-slate-900 shadow-2xl relative overflow-hidden">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-10 italic underline decoration-blue-600">{t.contact_title}</h2>
            <form onSubmit={sendToTelegram} className="flex flex-col gap-4">
              <input type="text" placeholder={t.placeholder_name} required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="tel" placeholder={t.placeholder_phone} required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600" />
              <select required value={service} onChange={(e) => setService(e.target.value)} className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600 text-slate-500 font-bold">
                <option value="">{t.select_service}</option>
                <option value="Phone Unlock">{t.opt_unlock}</option>
                <option value="Network Admin">{t.opt_network}</option>
                <option value="SQL Database">{t.opt_sql}</option>
              </select>
              <textarea placeholder="..." value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600 h-28" />
              <button type="submit" disabled={status === 'sending'} className="bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-black transition-all shadow-lg flex items-center justify-center gap-3">
                <Send size={20} /> {status === 'sending' ? '...' : t.btn_send}
              </button>
              {status === 'success' && <div className="p-4 bg-green-100 text-green-700 rounded-2xl text-center font-bold">{t.success}</div>}
            </form>
          </div>
        </section>
      </main>
      <footer className="mt-20 text-center text-slate-400 font-bold text-xs uppercase tracking-widest"><p>© 2026 Alidov Portfolio • TAQU 2024</p></footer>
    </div>
  );
}