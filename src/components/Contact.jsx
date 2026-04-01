import React, { useState } from 'react';
import { ChevronRight, Loader2, CheckCircle2, XCircle } from 'lucide-react';

// Production: /api/contact (same-domain Vercel)
// Development: http://localhost:5000/api/contact (local Express server)
const API_URL = import.meta.env.VITE_API_BASE_URL
  ? `${import.meta.env.VITE_API_BASE_URL}/api/contact`
  : '/api/contact';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });

      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass =
    'w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400';

  return (
    <section id="about" className="relative group">
      <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
      <div className="relative rounded-[4rem] p-8 md:p-12 lg:p-24 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-8">
            Ready to start <br className="hidden lg:block" /> the <span className="text-blue-500">Next</span> Chapter?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-12 font-medium">
            Currently taking on select projects for Q3 2026. Let's discuss how we can work together.
          </p>
          <a
            href="mailto:notjustakarsh@gmail.com"
            className="inline-flex flex-wrap items-center justify-center lg:justify-start break-all md:break-normal gap-2 md:gap-4 text-xl sm:text-2xl md:text-4xl font-black tracking-tighter hover:text-blue-500 transition-all border-b-4 border-blue-500 pb-2 hover:gap-4 md:hover:gap-8"
          >
            notjustakarsh@gmail.com <ChevronRight className="w-6 h-6 md:w-10 md:h-10 shrink-0" />
          </a>
        </div>

        <form
          className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          onSubmit={handleSubmit}
        >
          {/* Success state */}
          {status === 'success' && (
            <div className="flex items-center gap-3 px-6 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-500">
              <CheckCircle2 size={20} className="shrink-0" />
              <p className="font-semibold text-sm">Message sent! I'll get back to you soon.</p>
            </div>
          )}

          {/* Error state */}
          {status === 'error' && (
            <div className="flex items-center gap-3 px-6 py-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-500">
              <XCircle size={20} className="shrink-0" />
              <p className="font-semibold text-sm">{errorMsg}</p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              disabled={status === 'loading'}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              disabled={status === 'loading'}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell me about your project..."
              required
              disabled={status === 'loading'}
              className={`${inputClass} resize-none`}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="h-16 w-full bg-zinc-900 dark:bg-white text-white dark:text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Sending...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle2 size={18} /> Message Sent!
              </>
            ) : (
              <>
                Send Message <ChevronRight size={18} />
              </>
            )}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
