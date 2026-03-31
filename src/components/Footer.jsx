import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => (
  <footer className="py-20 px-6 border-t border-zinc-100 dark:border-zinc-900">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-2xl font-black tracking-tighter flex items-center gap-3">
        <div className="w-10 h-10 bg-black dark:bg-white rounded-2xl flex items-center justify-center">
          <Terminal className="text-white dark:text-black" size={20} />
        </div>
        AKARSH.IO
      </div>
      <div className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">
        © 2026 Crafted for Excellence
      </div>
      <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
        <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Dribbble</a>
        <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
