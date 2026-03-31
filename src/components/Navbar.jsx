import React from 'react';
import { Home, Cpu as CpuIcon, Layers, Mail, Sun, Moon } from 'lucide-react';

const NavItem = ({ href, icon, label }) => (
  <a href={href} className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 transition-all text-zinc-600 dark:text-zinc-400 hover:text-blue-500 group">
    {icon}
    <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">{label}</span>
  </a>
);

const Navbar = ({ darkMode, toggleTheme }) => (
  <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
    <nav className="flex items-center gap-1 md:gap-4 p-2 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl pointer-events-auto transition-all">
      <NavItem href="#home" icon={<Home size={18} />} label="Home" />
      <NavItem href="#skills" icon={<CpuIcon size={18} />} label="Skills" />
      <NavItem href="#work" icon={<Layers size={18} />} label="Work" />
      <NavItem href="#about" icon={<Mail size={18} />} label="Contact" />
      
      <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-2 hidden sm:block" />

      <button 
        onClick={toggleTheme}
        className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 transition-all flex items-center justify-center group"
        aria-label="Toggle Theme"
      >
        {darkMode ? 
          <Sun size={20} className="text-yellow-400 group-hover:rotate-45 transition-transform" /> : 
          <Moon size={20} className="text-zinc-600 group-hover:-rotate-12 transition-transform" />
        }
      </button>
    </nav>
  </header>
);

export default Navbar;
