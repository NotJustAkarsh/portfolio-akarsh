import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
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

/* ── Animate-on-scroll hook ───────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fp-revealed");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/* ── Individual featured card ─────────────────────────────────── */
const FeaturedCard = ({ project, index, layout }) => {
  const ref = useReveal(0.12);
  const isHero = layout === "hero"; // first card — full width
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      ref={ref}
      className={`fp-card group relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg ${
        isHero ? "fp-card-hero" : "fp-card-regular"
      }`}
      style={{ "--delay": `${index * 120}ms` }}
    >
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden cursor-pointer lg:cursor-default ${
          isHero ? "h-72 sm:h-96 md:h-[28rem]" : "h-48 sm:h-56 md:h-64"
        }`}
        onClick={() => setShowOverlay(!showOverlay)}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-800">
            <span className="text-6xl opacity-20">💻</span>
          </div>
        )}

        {/* Gradient overlay with CTA buttons */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 md:p-8 gap-3 transition-opacity duration-500 ${showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
          <div className={`flex flex-wrap gap-2 transition-transform duration-500 ${showOverlay ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}>
            <a
              href={project.repolink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-lg"
            >
              <Github size={12} /> GitHub
            </a>
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-lg"
            >
              Live Site <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Featured badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest shadow-md">
          <Star size={9} className="fill-white" />
          Featured
        </div>
      </div>

      {/* Info */}
      <div className={`p-5 md:p-7 ${isHero ? "md:p-8" : ""}`}>
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3
            className={`font-black tracking-tight text-zinc-900 dark:text-zinc-100 ${
              isHero ? "text-xl md:text-2xl" : "text-lg md:text-xl"
            }`}
          >
            {project.title}
          </h3>
          <span className="shrink-0 text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-500 font-black">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech pills */}
        {project.tech?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[9px] px-2 py-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold uppercase tracking-widest"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Section header ───────────────────────────────────────────── */
const SectionHeader = () => {
  const ref = useReveal(0.1);
  return (
    <div ref={ref} className="fp-card mb-14 md:mb-20" style={{ "--delay": "0ms" }}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-500 font-black text-xs tracking-widest uppercase mb-3">
            <Star size={12} className="fill-blue-500" />
            Handpicked
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-zinc-900 dark:text-zinc-100">
            Featured
            <br />
            <span className="text-blue-500">Projects</span>
          </h2>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
          A curated selection of work I&apos;m most proud of — spanning full‑stack apps, UI systems, and backend services.
        </p>
      </div>
    </div>
  );
};

/* ── Main section ─────────────────────────────────────────────── */
const FeaturedProjects = () => {
  const featured = PROJECTS.filter((p) => p.isFeatured);

  if (featured.length === 0) return null;

  const [hero, ...rest] = featured;

  return (
    <section id="featured" className="mb-32">
      <SectionHeader />

      <div className="grid gap-6 md:gap-8">
        {/* Hero card — always full width */}
        <FeaturedCard project={hero} index={1} layout="hero" />

        {/* Remaining cards in a responsive grid */}
        {rest.length > 0 && (
          <div
            className={`grid gap-6 md:gap-8 ${
              rest.length === 1
                ? "grid-cols-1"
                : rest.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {rest.map((project, i) => (
              <FeaturedCard key={project.title} project={project} index={i + 2} layout="regular" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
