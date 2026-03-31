import React, { useMemo } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { PROJECTS } from "../constants/data";

const Github = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ProjectGrid = ({ activeFilter, setActiveFilter }) => {
  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="work" className="mb-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div>
          <div className="text-blue-500 font-black text-xs tracking-widest uppercase mb-2">
            Projects
          </div>
          <h2 className="text-5xl font-black tracking-tighter uppercase">
            Selected Work
          </h2>
        </div>
        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-inner">
          {["All", "Web", "App", "Fullstack"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeFilter === f ? "bg-white dark:bg-zinc-800 text-blue-500 shadow-lg scale-105" : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"}`}
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
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-wrap gap-3 items-end p-10 z-10">
                <a
                  href={p.repolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] xl:text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 active:scale-95 transition-all duration-500 hover:shadow-xl"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href={p.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] xl:text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 active:scale-95 transition-all duration-500 hover:shadow-xl"
                >
                  Live Site <ExternalLink size={14} />
                </a>
              </div>
              <div className="w-full h-full flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                <Code2
                  size={120}
                  className="text-zinc-400 dark:text-zinc-700"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
              {p.title}
              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-500 font-black">
                {p.category}
              </span>
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
