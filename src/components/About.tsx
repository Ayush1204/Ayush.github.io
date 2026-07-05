import { motion } from 'framer-motion';

const STATS = [
  { value: '6+', label: 'Years in QA' },
  { value: '95%+', label: 'Manual effort reduced' },
  { value: '40%', label: 'Faster releases' },
];

const HIGHLIGHTS = [
  'Shift-left testing and quality strategy',
  'Automation frameworks for web and API platforms',
  'Cross-functional collaboration in Agile delivery',
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">About Me</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            A thoughtful <span className="gradient-text">QA partner</span> for modern teams.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="apple-card p-8"
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I’m a senior QA professional with hands-on experience building robust automation frameworks, improving release quality, and shaping quality-first engineering practices across enterprise products.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              My focus is on making testing feel like a strategic advantage — faster feedback, lower risk, and more confidence in every release.
            </p>
            <div className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3 dark:border-white/10 dark:bg-slate-800/60">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="apple-card p-6 text-center">
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
