import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Accenture',
    period: 'Mar 2025 — Present',
    points: [
      'Led automation strategy for data products and GenAI-enabled workflows.',
      'Built experience-driven UI for intelligent data interactions using modern web technologies.',
      'Mentored engineers on quality-first practices and scalable delivery.',
    ],
  },
  {
    role: 'Senior Software Test Engineer',
    company: 'Accenture',
    period: 'Dec 2022 — Mar 2025',
    points: [
      'Architected regression automation to boost test stability and release confidence.',
      'Delivered Cypress + TypeScript frameworks from the ground up for greenfield products.',
      'Reduced manual API testing effort dramatically with API automation.',
    ],
  },
  {
    role: 'Software Test Engineer',
    company: 'Accenture',
    period: 'Dec 2019 — Dec 2022',
    points: [
      'Designed Java + Selenium test suites for browser and regression coverage.',
      'Improved defect detection through structured manual and exploratory testing.',
      'Validated REST APIs to ensure dependable service behavior and data integrity.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">Career</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Work <span className="gradient-text">experience</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {EXPERIENCE.map((job, i) => (
            <motion.article
              key={job.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="apple-card p-6 sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Briefcase size={16} className="text-sky-600 dark:text-sky-300" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{job.company}</p>
                </div>
                <div className="apple-pill">{job.period}</div>
              </div>

              <ul className="mt-5 space-y-3">
                {job.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
