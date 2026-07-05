import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Enterprise Regression Automation Suite',
    description: 'Led regression automation across multiple concurrent enterprise applications, improving coverage consistency and release readiness.',
    tags: ['Java', 'Selenium', 'TestNG', 'CI/CD'],
  },
  {
    title: 'Cypress + POM UI Framework',
    description: 'Built a modern Cypress and TypeScript framework from scratch for early automation in a greenfield product.',
    tags: ['Cypress', 'TypeScript', 'POM', 'Cross-browser'],
  },
  {
    title: 'GenAI Data Intelligence Module',
    description: 'Architected an intelligent UI and backend flow for exploring data products with AI-assisted interactions.',
    tags: ['Python', 'GenAI', 'WebSockets', 'Agentic AI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">Portfolio</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Featured <span className="gradient-text">projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="apple-card flex flex-col p-6"
            >
              <div className="mb-4 h-32 rounded-[22px] bg-gradient-to-br from-sky-500/20 via-blue-500/20 to-violet-500/20" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200/70 bg-slate-50/70 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href="https://github.com/Ayush1204" className="rounded-full border border-slate-200/70 bg-white/70 p-2 text-slate-600 transition-colors hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300" aria-label="View code">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/ayush-jain-45a396117/" className="rounded-full border border-slate-200/70 bg-white/70 p-2 text-slate-600 transition-colors hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300" aria-label="View live">
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
