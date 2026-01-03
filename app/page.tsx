import React from 'react';
import { 
  Github, Mail, ExternalLink, BookOpen, 
  Database, Code2, GraduationCap, Laptop, 
  BarChart3, MapPin, Briefcase 
} from 'lucide-react';

export default function AlijonPortfolio() {
  const userInfo = {
    name: "Alijon Qodirov",
    birthYear: 2006,
    university: "Toshkent Arxitektura va Qurilish universiteti",
    major: "Kompyuter injiniringi",
    bio: "Assalomu alaykum! Men Alijonman, 2006-yilda tug'ilganman. Hozirda Arxitektura va qurilish universitetida IT yo'nalishida tahsil olaman. Ma'lumotlar bazasi (SQL) va moliya hisob-kitoblari (Buxgalteriya) bilan ishlash tajribasiga egaman. Hozirda Full-stack dasturlash olamini zabt etish yo'lidaman.",
    skills: [
      { name: "Full-stack", icon: <Code2 size={16} />, color: "bg-blue-50 text-blue-600" },
      { name: "SQL & Database", icon: <Database size={16} />, color: "bg-emerald-50 text-emerald-600" },
      { name: "MS Office / Buxgalteriya", icon: <BarChart3 size={16} />, color: "bg-orange-50 text-orange-600" },
      { name: "Computer Engineering", icon: <Laptop size={16} />, color: "bg-purple-50 text-purple-600" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      {/* HEADER / NAVIGATION */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">AQ.</span>
          <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-600 transition-colors">Men haqimda</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Ko'nikmalar</a>
            <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* HERO SECTION */}
        <section id="about" className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-8">
            <MapPin size={14} /> Toshkent, O'zbekiston
          </div>
          <h1 className="text-6xl font-black tracking-tight mb-8 leading-[1.1]">
            Men <span className="text-blue-600">{userInfo.name}</span>.<br/>
            Muhandis va Dasturchi.
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mb-10">
            {userInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
              <GraduationCap size={18} className="text-blue-600" /> {userInfo.university}
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
              <Briefcase size={18} className="text-blue-600" /> {userInfo.major}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-24">
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Nimalarni bilaman?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userInfo.skills.map((skill) => (
              <div key={skill.name} className="group p-6 bg-white border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                <div className={`w-10 h-10 ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                <p className="text-slate-400 text-sm italic">Professional darajadagi bilim va tajriba</p>
              </div>
            ))}
          </div>
        </section>

        {/* BLOG / POSTS SECTION */}
        <section id="blog">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
              <BookOpen className="text-blue-600" /> Maqolalarim
            </h2>
            <button className="text-sm font-bold text-blue-600 hover:underline">Barchasi</button>
          </div>

          <div className="space-y-8">
            <article className="group cursor-pointer">
              <span className="text-xs font-black text-blue-500 uppercase mb-2 block">Yanvar 2026</span>
              <h3 className="text-2xl font-extrabold mb-3 group-hover:text-blue-600 transition-colors">
                Next.js va SQL: Ma'lumotlar bilan ishlashning yangi davri
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Buxgalteriya va SQL dagi bilimlarimni dasturlash bilan qanday birlashtirganim haqida...
              </p>
              <div className="h-0.5 w-12 bg-blue-600 group-hover:w-24 transition-all"></div>
            </article>

            <article className="group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <span className="text-xs font-black text-slate-400 uppercase mb-2 block">Dekabr 2025</span>
              <h3 className="text-2xl font-extrabold mb-3 group-hover:text-blue-600 transition-colors text-slate-400 group-hover:text-slate-900">
                Arxitektura talabasidan kompyuter muhandisigacha
              </h3>
              <p className="text-slate-500 leading-relaxed">Tez orada yuklanadi...</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-slate-100 bg-white mt-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="font-black text-2xl mb-2">AQ.</h3>
            <p className="text-slate-400 text-sm italic">Next.js 15 & Tailwind CSS Portfolio</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 text-white hover:bg-blue-600 transition-all"><Github size={20}/></a>
            <a href={`mailto:alijon@example.com`} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Mail size={20}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}