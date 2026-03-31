import React from 'react';
import { ChevronRight } from 'lucide-react';

const Contact = () => (
  <section id="about" className="relative group">
    <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
    <div className="relative rounded-[4rem] p-16 md:p-24 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center overflow-hidden shadow-2xl">
       <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-8">
        Ready to start <br/> the <span className="text-blue-500">Next</span> Chapter?
       </h2>
       <p className="text-zinc-500 dark:text-zinc-400 text-xl max-w-2xl mx-auto mb-12 font-medium">
        Currently taking on select projects for Q3 2026. Let's discuss how we can work together.
       </p>
       <a 
         href="mailto:hello@dev.com" 
         className="inline-flex items-center gap-4 text-3xl md:text-5xl font-black tracking-tighter hover:text-blue-500 transition-all border-b-4 border-blue-500 pb-2 hover:gap-8"
       >
         notjustakarsh@gmail.com <ChevronRight size={48} />
       </a>
    </div>
  </section>
);

export default Contact;
