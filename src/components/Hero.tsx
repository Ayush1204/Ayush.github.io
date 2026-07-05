import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const QUICK_POINTS = [
  { title: '6+ years', text: 'Quality engineering & test automation' },
  { title: '95%+', text: 'Manual effort reduced through automation' },
  { title: '40%', text: 'Improvement in release confidence' },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-[8%] h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute bottom-[12%] right-[-4%] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="apple-pill mb-6">
            <Sparkles size={16} className="mr-2" />
            Available for quality-focused product teams
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl dark:text-white">
            I build <span className="gradient-text">reliable software</span> with thoughtful automation.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I’m Ayush Jain, a senior QA engineer focused on automation strategy, scalable quality systems, and helping teams ship with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] dark:bg-white dark:text-slate-950"
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
            >
              Let’s connect
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/Ayush1204" className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 text-slate-600 transition-colors hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-jain-45a396117/" className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 text-slate-600 transition-colors hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ayush4u16@gmail.com" className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 text-slate-600 transition-colors hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="apple-card p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Profile Snapshot</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Senior QA Engineer</h2>
            </div>
            <div className="rounded-full bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-600 dark:text-sky-300">Open to work</div>
          </div>

          <div className="mb-6 overflow-hidden rounded-[24px] border border-slate-200/70 bg-slate-50/80 p-2 dark:border-white/10 dark:bg-slate-800/60">
            <img
              src="/profile-photo.jpg"
              alt="Ayush Jain"
              className="h-72 w-full rounded-[20px] object-cover object-center"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {QUICK_POINTS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-slate-800/60">
                <p className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-slate-200/70 bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-violet-500/10 p-5 dark:border-white/10">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Core focus</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Playwright', 'Selenium', 'CI/CD', 'Automation Strategy', 'GenAI QA'].map((item) => (
                <span key={item} className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400"
        aria-label="Scroll to About"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
