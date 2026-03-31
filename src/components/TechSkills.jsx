import React from 'react';
import TechIcon from './TechIcon';
import { SKILLS_DATA } from '../constants/data';

const TechSkills = () => (
  <section id="skills" className="mb-40">
    <div className="flex flex-col items-center text-center mb-16">
      <div className="text-blue-500 font-black text-xs tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10">Expertise</div>
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">Technical Arsenal</h2>
      <p className="max-w-2xl text-zinc-500 dark:text-zinc-400 text-lg">
        A breakdown of the tools and technologies I use to turn complex problems into robust digital solutions.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {SKILLS_DATA.map((category, idx) => (
        <div key={idx} className="group p-8 rounded-[3rem] bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
              {category.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
              <p className="text-xs text-zinc-400 uppercase font-black tracking-widest">{category.techs.length} Skills</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {category.techs.map((tech, tIdx) => (
              <div key={tIdx} className="aspect-square flex flex-col items-center justify-center p-2 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800/50 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 hover:border-blue-500/20 transition-all group/item">
                <div className="mb-2 group-hover/item:scale-110 transition-transform">
                  <TechIcon slug={tech.slug} name={tech.name} size={28} />
                </div>
                <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter text-center">{tech.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">"{category.description}"</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechSkills;
