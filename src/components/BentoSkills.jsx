import React from 'react';
import { Cpu, Smartphone, Zap, Database } from 'lucide-react';

const BentoSkills = ({ mousePos }) => (
  <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-32">
    <div 
      className="md:col-span-8 group spotlight-card relative p-12 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-500"
      style={{ '--x': `${mousePos.x - 200}px`, '--y': `${mousePos.y - 200}px` }}
    >
      <div className="relative z-10">
        <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/40">
          <Cpu className="text-white" size={28} />
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tight">Fullstack Ecosystems</h3>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-lg leading-relaxed mb-8">
          Engineering secure, scalable backends and fluid frontends using enterprise-grade design patterns.
        </p>
        <div className="flex flex-wrap gap-2">
          {['PostgreSQL', 'Docker', 'NextJS', 'Redis', 'Node'].map(t => (
            <span key={t} className="px-4 py-2 rounded-full bg-white dark:bg-black/40 border border-zinc-200 dark:border-white/5 text-xs font-bold">{t}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="md:col-span-4 group p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col justify-between">
      <div>
        <Smartphone className="text-zinc-400 dark:text-zinc-600 mb-6" size={32} />
        <h3 className="text-2xl font-bold mb-3 tracking-tight">Native Mobile</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">High-fidelity iOS/Android apps with React Native.</p>
      </div>
      <div className="w-full h-24 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-end p-4">
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-blue-500"></div>
        </div>
      </div>
    </div>

    <div className="md:col-span-4 p-8 rounded-[2.5rem] bg-blue-600 flex flex-col justify-between text-white shadow-xl shadow-blue-500/20">
      <Zap size={32} fill="white" />
      <div>
        <div className="text-5xl font-black mb-1 tracking-tighter">05+</div>
        <div className="text-xs uppercase tracking-widest font-black opacity-70">Years Experience</div>
      </div>
    </div>

    <div className="md:col-span-8 group p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex items-center gap-12">
      <div className="hidden lg:block w-40 h-40 relative shrink-0">
         <Database className="absolute inset-0 m-auto text-blue-500/20" size={140} />
         <Database className="absolute inset-0 m-auto text-blue-500" size={60} />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 tracking-tight">Performance First</h3>
        <p className="text-zinc-500 dark:text-zinc-400">Optimizing core web vitals and database latency to ensure sub-100ms responses.</p>
      </div>
    </div>
  </section>
);

export default BentoSkills;
