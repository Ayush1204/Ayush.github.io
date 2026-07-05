import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'B.Tech in Electronics & Communication Engineering',
    school: 'LDRP Institute of Technology and Research, Gandhinagar',
    period: '2014 — 2018',
    detail: 'Built a strong foundation in software engineering, networking, databases, and programming fundamentals.',
  },
  {
    degree: 'Microsoft Azure Fundamentals (AZ-900) & AI Fundamentals (AI-900)',
    school: 'Microsoft',
    period: '2023',
    detail: 'Expanded modern cloud and AI fluency to strengthen QA strategy in data-driven delivery environments.',
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">Background</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Education & <span className="gradient-text">certifications</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((item, i) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="apple-card p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <GraduationCap size={18} className="text-sky-600 dark:text-sky-300" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.school}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
