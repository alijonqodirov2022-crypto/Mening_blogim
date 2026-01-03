import React from 'react';
import { Github, Mail, Database, Laptop, GraduationCap, Code2 } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className="p-6 border-b bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-black tracking-tighter">AQ.2006</span>
          <div className="flex gap-6 font-bold text-sm text-slate-500 uppercase">
            <a href="#about" className="hover:text-blue-600">Men haqimda</a>
            <a href="#skills" className="hover:text-blue-600">Bilimlarim</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <section id="about" className="mb-32">
          <h1 className="text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
            ALIDOV <span className="text-blue-600 underline">DEV.</span>
          </h1>
          <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed mb-10">
            Men <span className="text-slate-900 font-bold">Alijon Qodirov</span>. 
            2006-yilda tug'ilganman. Toshkent Arxitektura va Qurilish universiteti, 
            Kompyuter injiniringi yo'nalishi talabasiman.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-5 py-2 bg-slate-100 rounded-full font-bold text-sm flex items-center gap-2">
              <GraduationCap size={18} /> TAQU Talabasi
            </span>
            <span className="px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm flex items-center gap-2">
              <Database size={18} /> SQL & DB Expert
            </span>
          </div>
        </section>

        <section id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-blue-600 hover:text-white transition-all group">
            <Laptop size={48} className="mb-6 text-blue-600 group-hover:text-white" />
            <h3 className="text-3xl font-black mb-4">Frontend & Backend</h3>
            <p className="opacity-70 leading-relaxed">Next.js va zamonaviy frameworklarni o'rganmoqdaman. Full-stack muhandislik sari qadam.</p>
          </div>
          <div className="p-10 bg-slate-900 rounded-[3rem] text-white hover:bg-blue-600 transition-all">
            <Code2 size={48} className="mb-6 text-blue-400" />
            <h3 className="text-3xl font-black mb-4">Buxgalteriya & Office</h3>
            <p className="opacity-70 leading-relaxed">Buxgalteriya hisobi va MS Office paketida professional darajada ishlay olaman.</p>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t mt-20 text-center">
        <p className="font-bold text-slate-400 mb-6 uppercase tracking-widest text-xs">Bog'lanish uchun</p>
        <div className="flex justify-center gap-10">
          <Github className="cursor-pointer hover:scale-125 transition-transform" />
          <Mail className="cursor-pointer hover:scale-125 transition-transform" />
        </div>
      </footer>
    </div>
  );
}