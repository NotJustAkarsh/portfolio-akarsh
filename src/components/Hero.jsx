import React from "react";
import {
  Zap,
  ChevronRight,
  Download,
  Code2,
} from "lucide-react";

const Github = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors text-zinc-400 hover:text-blue-500"
  >
    {icon}
  </a>
);

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
  >
    <div className="order-1 lg:order-1">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black mb-8 tracking-[0.2em] uppercase">
        <Zap size={12} fill="currentColor" />
        Fullstack Developer
      </div>
      <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
        Build <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-400 dark:from-blue-400 dark:to-indigo-200 italic">
          Fast.
        </span>{" "}
        <br />
        Ship <span className="text-zinc-300 dark:text-zinc-800">Clean.</span>
      </h1>
      <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-12 font-medium">
        Specializing in high-performance web and mobile applications with
        modular, scalable architectures.
      </p>
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <button className="h-16 px-10 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-blue-500/20 flex items-center gap-2">
          Let's Talk <ChevronRight size={18} />
        </button>
        <a 
          href="/resume.pdf" 
          download="Akarsh_Singh_Resume.pdf" 
          className="h-16 px-10 rounded-full font-black text-sm uppercase tracking-widest border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center gap-3"
        >
          <Download size={18} className="text-blue-500" /> Resume
        </a>
        <div className="flex gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
          <SocialIcon icon={<Github size={20} />} href="https://github.com/NotJustAkarsh" />
          <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com/in/akarsh-singh-5968071b2" />
        </div>
      </div>
    </div>

    <div className="order-2 lg:order-2 relative flex justify-center lg:justify-end py-10 lg:py-0">
      <div className="relative w-72 h-96 md:w-[400px] md:h-[500px] animate-float">
        <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-500/10 blur-[100px] rounded-full scale-110"></div>
        <div className="relative w-full h-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-200/50 to-transparent dark:from-zinc-800/50 dark:to-transparent">
            <img src="https://ik.imagekit.io/gwv0quzrfq/Akarsh.jpg" alt="akarsh-dev" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-xl">
            <div className="text-xs font-black uppercase tracking-widest text-blue-500 mb-1">
              Full Stack Developer
            </div>
            <div className="text-lg font-bold tracking-tight">Akarsh Singh</div>
          </div>
        </div>
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-700 rotate-12 hover:rotate-0 transition-transform duration-500">
          <Code2 className="text-blue-500" size={32} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
