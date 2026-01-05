"use client";
import React, { useState } from "react";
import { Database, Send, Smartphone, Network, Shield, Code, Server } from "lucide-react";
import { motion } from "framer-motion";

const translations = {
  uz: {
    title: "ALIDOV DEV",
    desc: "Texnik muhandis, dasturchi va IT xizmatlar",
    name: "Ismingiz",
    phone: "Telefon raqam",
    service: "Xizmat tanlang",
    send: "Yuborish",
    success: "Yuborildi ✅",
  },
  ru: {
    title: "ALIDOV DEV",
    desc: "Технический инженер и IT-специалист",
    name: "Ваше имя",
    phone: "Телефон",
    service: "Выберите услугу",
    send: "Отправить",
    success: "Отправлено ✅",
  },
  en: {
    title: "ALIDOV DEV",
    desc: "Technical engineer and IT services",
    name: "Your name",
    phone: "Phone number",
    service: "Select service",
    send: "Send",
    success: "Sent ✅",
  },
};

const services = [
  { key: "Network Setup", icon: Network },
  { key: "Phone Unlock / Flash", icon: Smartphone },
  { key: "SQL Database", icon: Database },
  { key: "Server Setup", icon: Server },
  { key: "Security / Firewall", icon: Shield },
  { key: "Web Development", icon: Code },
];

export default function Page() {
  const [lang, setLang] = useState<"uz" | "ru" | "en">("uz");
  const t = translations[lang];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");

  async function send(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const text = `🚀 BUYURTMA\n👤 ${name}\n📞 ${phone}\n🛠 ${service}\n🌍 ${lang.toUpperCase()}`;

    await fetch("https://api.telegram.org/bot8578469335:AAGIhKG9I_FoRAw7pRLHkpWmyLmc7-XqLFU/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: "7277916372", text }),
    });

    setStatus("success");
    setName("");
    setPhone("");
    setService("");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-8">
      {/* Language */}
      <div className="flex justify-center gap-3 mb-10">
        {["uz", "ru", "en"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l as any)}
            className={`px-4 py-2 rounded-xl font-bold transition ${lang === l ? "bg-blue-600 text-white" : "bg-white shadow"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-6xl font-black mb-4 tracking-tight">{t.title}</h1>
        <p className="text-xl text-slate-600">{t.desc}</p>
      </motion.div>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.key}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setService(s.key)}
              className={`cursor-pointer p-8 rounded-3xl shadow-xl backdrop-blur border transition ${
                service === s.key
                  ? "bg-blue-600 text-white"
                  : "bg-white/80"
              }`}
            >
              <Icon size={36} className="mb-4" />
              <h3 className="font-black text-lg">{s.key}</h3>
            </motion.div>
          );
        })}
      </section>

      {/* Form */}
      <motion.form
        onSubmit={send}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-4"
      >
        <input
          required
          placeholder={t.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-100"
        />
        <input
          required
          placeholder={t.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-100"
        />
        <select
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-100"
        >
          <option value="">{t.service}</option>
          {services.map((s) => (
            <option key={s.key}>{s.key}</option>
          ))}
        </select>
        <button className="w-full bg-blue-600 hover:bg-black transition text-white py-4 rounded-xl font-black flex justify-center gap-2">
          <Send /> {t.send}
        </button>
        {status === "success" && (
          <p className="text-green-600 text-center font-bold">{t.success}</p>
        )}
      </motion.form>
    </main>
  );
}
