import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Enterprise Regression Automation Suite',
    description: 'Led regression automation across multiple concurrent enterprise applications, improving coverage consistency by 40% and accelerating release readiness.',
    tags: ['Java', 'Selenium', 'TestNG', 'CI/CD'],
  },
  {
    title: 'Cypress + POM UI Framework',
    description: 'Built a Cypress and TypeScript framework from scratch using the Page Object Model for a greenfield project, enabling early automated UI testing.',
    tags: ['Cypress', 'TypeScript', 'POM', 'Cross-browser'],
  },
  {
    title: 'GenAI Data Intelligence Module',
    description: 'Architected and shipped a GenAI module UI and backend integrations using Python, WebSockets, and Agentic AI-assisted development practices.',
    tags: ['Python', 'GenAI', 'WebSockets', 'Agentic AI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2 tracking-wide">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col hover:glow transition-all"
            >
              <div className="h-32 rounded-xl mb-4 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20" />
              <h3 className="font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/Ayush1204" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="View code">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/ayush-jain-45a396117/" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="View live">
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
