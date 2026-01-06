"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { 
  Cpu, ShieldCheck, Zap, ArrowRight, Play, 
  Activity, Fingerprint, Box, ChevronDown, 
  Globe2, MonitorSmartphone, Code2
} from "lucide-react";

export default function PearlOfAsiaVip() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  // Smooth scroll va Progress bar uchun
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Sichqoncha harakatini kuzatish (Interactive Background)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#020202] text-white selection:bg-cyan-500 overflow-x-hidden">
      
      {/* 🟢 TOP PROGRESS BAR (Lider saytlarda bo'ladi) */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500 z-[1000] origin-left" style={{ scaleX }} />

      {/* 🟢 INTERACTIVE GLOW CURSOR (Sichqoncha orqasidagi nur) */}
      <div 
        className="fixed pointer-events-none z-[999] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          transition: "transform 0.1s ease-out"
        }}
      />

      {/* 🟢 NAVIGATION - MINIMAL & EXPENSIVE */}
      <nav className="fixed w-full z-[100] px-10 py-8 flex justify-between items-center mix-blend-difference">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-cyan-500 rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-cyan-500 animate-pulse" />
          </div>
          <span className="text-2xl font-black tracking-widest uppercase italic">POA</span>
        </motion.div>

        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400">
          {["System", "Security", "AI Core", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-cyan-400 transition-all duration-500">{item}</a>
          ))}
        </div>

        <button className="relative group overflow-hidden px-8 py-3 border border-white/10 rounded-full">
            <span className="relative z-10 text-[10px] font-bold tracking-widest uppercase">Start Project</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
            <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity uppercase text-[10px] font-bold tracking-widest">Start Project</span>
        </button>
      </nav>

      {/* 🟢 HERO SECTION - THE MASTERPIECE */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20">
        
        {/* Background Layer: 3D Image Parallax */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/main-bg.jpg" 
            alt="Data Center" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
        </motion.div>

        {/* Floating AI Badges */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 mb-10 flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-2xl"
        >
          <div className="flex -space-x-2">
             {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-cyan-500 flex items-center justify-center text-[8px] font-black">AI</div>)}
          </div>
          <p className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase italic">Next-Gen Intelligence Active</p>
        </motion.div>

        {/* Main Title with Mask Effect */}
        <div className="relative z-10 text-center select-none px-4">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[12vw] font-black leading-[0.8] tracking-tighter uppercase italic"
          >
            PEARL <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600">
                OF ASIA
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-lg md:text-2xl font-light tracking-[0.3em] uppercase max-w-4xl mx-auto"
          >
            Digital Architecture & Cyber Governance
          </motion.p>
        </div>

        {/* Interaction Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 mt-16 flex flex-col items-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-cyan-500 to-transparent mb-8" />
          <p className="text-[9px] font-black tracking-[0.5em] text-gray-500 uppercase mb-4">Discover Ecosystem</p>
          <ChevronDown className="animate-bounce text-cyan-500" />
        </motion.div>

        {/* Side Stats (Liderlik belgisi) */}
        <div className="absolute bottom-20 left-10 hidden lg:block vertical-text uppercase text-[10px] tracking-[0.8em] font-black text-white/20">
          Uptime 99.99% / Security Grade AAA
        </div>
      </section>

      {/* 🟢 AI TECH GRID (Glassmorphism Next-Level) */}
      <section className="relative py-40 px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Fingerprint className="text-cyan-500 mb-6" size={50} />
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 uppercase">
               Sizning <span className="text-cyan-500">Raqamli</span> <br /> DNKngiz
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed italic mb-10">
               Biz faqat kod yozmaymiz. Biz biznesingiz uchun o'zgarmas, xavfsiz va aqlli raqamli ekotizim yaratamiz.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Globe2, t: "Global Scale", d: "Dunyo bo'ylab istalgan nuqtadan boshqaruv." },
              { icon: MonitorSmartphone, t: "Firmware X", d: "Qurilmalar uchun eng so'nggi proshivkalar." },
              { icon: Code2, t: "SQL Core", d: "Ma'lumotlar bazasining yuqori unumdorligi." },
              { icon: Activity, t: "Deep Monitoring", d: "Tizim holatini real vaqtda tahlil qilish." }
            ].map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="p-10 rounded-[30px] border border-white/10 bg-white/2 backdrop-blur-xl transition-all"
              >
                <box.icon className="text-cyan-500 mb-6" size={30} />
                <h3 className="text-2xl font-black italic mb-4 uppercase tracking-tighter">{box.t}</h3>
                <p className="text-gray-500 text-sm italic">{box.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}