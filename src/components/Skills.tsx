import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    category: 'Automation & Programming',
    skills: ['Java', 'Selenium WebDriver', 'Cypress', 'Python'],
  },
  {
    category: 'API & Testing',
    skills: ['REST Assured', 'Postman', 'Cucumber BDD', 'Playwright'],
  },
  {
    category: 'Quality & Delivery',
    skills: ['Shift-Left Testing', 'CI/CD with Jenkins', 'Docker & Kubernetes', 'JIRA & Agile'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">Toolkit</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Skills & <span className="gradient-text">expertise</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="apple-card p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200/70 bg-slate-50/70 px-3 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
