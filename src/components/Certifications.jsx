import React from 'react';
import { CERTIFICATIONS } from '../constants/data';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-400">
            Licenses &
          </span>
          <br /> Certifications
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-lg">
          Continuous learning and professional validations of my technical expertise.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {CERTIFICATIONS.map((cert, index) => (
          <a
            key={index} 
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block sticky top-24 break-inside-avoid bg-white dark:bg-zinc-900/50 backdrop-blur-sm rounded-3xl shadow-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 group"
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-emerald-500 transition-colors">
                  {cert.title}
                </h3>
                <svg className="w-5 h-5 shrink-0 text-zinc-400 group-hover:text-emerald-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-sm mt-8 border-t border-zinc-100 dark:border-zinc-800/50 pt-4">
                <span className="font-semibold text-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full">
                  {cert.issuer}
                </span>
                <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                  {cert.date}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
