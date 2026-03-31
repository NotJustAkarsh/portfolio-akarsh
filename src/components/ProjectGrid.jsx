import React, { useMemo } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { PROJECTS } from '../constants/data';

const ProjectGrid = ({ activeFilter, setActiveFilter }) => {
  const filtered = useMemo(() => 
    activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="work" className="mb-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div>
          <div className="text-blue-500 font-black text-xs tracking-widest uppercase mb-2">Projects</div>
          <h2 className="text-5xl font-black tracking-tighter uppercase">Selected Work</h2>
        </div>
        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-inner">
          {['All', 'Web', 'App', 'Fullstack'].map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeFilter === f ? 'bg-white dark:bg-zinc-800 text-blue-500 shadow-lg scale-105' : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filtered.map((p, i) => (
          <div key={i} className="group relative">
            <div className="aspect-4/3 rounded-[3rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden mb-6 relative shadow-sm">
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10 z-10">
                 <button className="px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Case Study <ExternalLink size={14} />
                 </button>
              </div>
              <div className="w-full h-full flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                <Code2 size={120} className="text-zinc-400 dark:text-zinc-700" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
              {p.title}
              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-500 font-black">{p.category}</span>
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
