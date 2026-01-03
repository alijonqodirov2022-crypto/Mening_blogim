"use client";
import React, { useState } from 'react';
import { Github, Mail, Database, Laptop, GraduationCap, Code2, Send, MessageSquare, Phone, Smartphone, Network, Lock, ShieldCheck } from 'lucide-react';

const translations = {
  uz: {
    hero_title: "ALIDOV DEV.",
    hero_desc: "Texnik muhandis va dasturchi. Tarmoqlar, telefonlar va ma'lumotlar bazasi mutaxassisi.",
    edu_taqu: "TAQU Talabasi (2024)",
    edu_taqu_desc: "Toshkent Arxitektura va Qurilish universiteti, Kompyuter injiniringi.",
    service_phone: "Telefon Programmisti",
    service_phone_desc: "Qulflangan telefonlarni ochish, proshivka va tizimli tuzatish.",
    service_admin: "Tarmoq Administratori",
    service_admin_desc: "Lokal tarmoq sozlash va xavfsizlik.",
    contact_title: "Xizmat buyurtma qilish",
    placeholder_name: "Ismingiz",
    placeholder_phone: "Telefon raqamingiz",
    select_service: "Qanday xizmat kerak?",
    opt_unlock: "Telefonni blokdan ochish",
    opt_network: "Tarmoqni sozlash (Admin)",
    opt_sql: "SQL Ma'lumotlar bazasi",
    opt_other: "Boshqa xizmat",
    btn_send: "Yuborish"
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState('uz');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const t = translations.uz;

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const botToken = "8578469335:AAGIhKG9I_FoRAw7pRLHkpWmyLmc7-XqLFU"; 
    const chatId = "7277916372"; 

    const text = `🚀 YANGI BUYURTMA\n\n👤 Mijoz: ${name}\n📞 Tel: ${phone}\n🛠 Xizmat: ${service}\n💬 Xabar: ${message}`;

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
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* NAVIGATSIYA */}
      <nav className="p-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter text-blue-600 italic">ALIDOV.</span>
          <div className="flex gap-4 items-center text-xs font-bold text-slate-500 uppercase">
             <a href="#services" className="hover:text-blue-600">Xizmatlar</a>
             <a href="#contact" className="hover:text-blue-600">Bog'lanish</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16">
        
        {/* HERO SECTION - RASM ENDI SHU YERDA */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-24">
          <div className="relative w-40 h-40 shrink-0">
             <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-3 shadow-xl"></div>
             <div className="absolute inset-0 bg-slate-300 rounded-[2.5rem] overflow-hidden border-2 border-white">
                <img 
                  src="/me.jpg" 
                  alt="Alijon" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { 
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Alijon+Qodirov&background=0284c7&color=fff&size=512" 
                  }} 
                />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase leading-none">
              {t.hero_title}
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              {t.hero_desc} <span className="text-blue-600 font-bold italic">2024 TAQU Talabasi.</span>
            </p>
          </div>
        </section>

        {/* XIZMATLAR */}
        <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="p-8 bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-sm">
            <Network className="text-blue-600 mb-6" size={32} />
            <h3 className="font-black text-xl mb-2">{t.service_admin}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{t.service_admin_desc}</p>
          </div>
          <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
            <Smartphone className="text-blue-200 mb-6" size={32} />
            <h3 className="font-black text-xl mb-2 flex items-center gap-2">{t.service_phone} <Lock size={16}/></h3>
            <p className="text-blue-50 text-sm leading-relaxed">{t.service_phone_desc}</p>
          </div>
          <div className="p-8 bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-sm">
            <Database className="text-blue-600 mb-6" size={32} />
            <h3 className="font-black text-xl mb-2 italic underline decoration-blue-600">SQL Expert</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Ma'lumotlar bazasini qurish va boshqarish.</p>
          </div>
        </section>

        {/* FORMA */}
        <section id="contact" className="bg-white rounded-[3.5rem] p-8 md:p-16 border-2 border-slate-900 shadow-2xl relative">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-10 tracking-tight italic underline decoration-blue-600">{t.contact_title}</h2>
            <form onSubmit={sendToTelegram} className="flex flex-col gap-4">
              <input type="text" placeholder={t.placeholder_name} required value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="tel" placeholder={t.placeholder_phone} required value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600" />
              <select required value={service} onChange={(e) => setService(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600 text-slate-500 font-bold">
                <option value="">{t.select_service}</option>
                <option value="Phone Unlock">{t.opt_unlock}</option>
                <option value="Network Admin">{t.opt_network}</option>
                <option value="SQL Database">{t.opt_sql}</option>
                <option value="Other">{t.opt_other}</option>
              </select>
              <textarea placeholder="Qo'shimcha ma'lumot..." value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-600 h-28" />
              <button type="submit" disabled={status === 'sending'}
                className="bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-black transition-all shadow-lg flex items-center justify-center gap-3">
                <Send size={20} /> {status === 'sending' ? 'Yuborilmoqda...' : t.btn_send}
              </button>
              {status === 'success' && <div className="p-4 bg-green-100 text-green-700 rounded-2xl text-center font-bold">Muvaffaqiyatli yuborildi! ✅</div>}
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-20 text-center text-slate-400 font-bold text-xs uppercase">
        <p>© 2026 Alidov Portfolio • TAQU 2024</p>
      </footer>
    </div>
  );
}