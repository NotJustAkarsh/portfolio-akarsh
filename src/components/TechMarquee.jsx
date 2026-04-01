import React from 'react';
import TechIcon from './TechIcon';
import { MARQUEE_STACK } from '../constants/data';

const TechMarquee = () => (
  <div className="w-full overflow-hidden py-8 mb-16 border-y border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-900/10">
    <div className="animate-marquee whitespace-nowrap w-max">
      {[...MARQUEE_STACK, ...MARQUEE_STACK].map((tech, i) => (
        <div key={i} className="inline-flex items-center gap-6 mx-8 group">
          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-300 grayscale group-hover:grayscale-0">
             <TechIcon slug={tech.slug} name={tech.name} size={40} />
          </div>
          <span className="text-zinc-400 dark:text-zinc-600 font-black text-sm uppercase tracking-widest group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TechMarquee;
