import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Accenture',
    period: 'Mar 2025 — Present',
    points: [
      'Leveraged Agentic AI tools to design and optimize scalable ETL pipelines with data quality profiling for Dataverse data products.',
      'Architected and built the GenAI module UI with WebSockets, delivering a ChatGPT-like experience for querying data products.',
      'Mentored junior engineers on Agentic AI development and GenAI integration practices.',
    ],
  },
  {
    role: 'Senior Software Test Engineer',
    company: 'Accenture',
    period: 'Dec 2022 — Mar 2025',
    points: [
      'Architected regression automation across enterprise applications, improving coverage consistency by 40% and reducing release cycle time.',
      'Built a Cypress + TypeScript automation framework from scratch using the Page Object Model for a greenfield project.',
      'Developed REST Assured and Postman API automation that reduced manual API testing effort from 3 days to 45 minutes.',
    ],
  },
  {
    role: 'Software Test Engineer',
    company: 'Accenture',
    period: 'Dec 2019 — Dec 2022',
    points: [
      'Designed automated test scripts using Java + Selenium WebDriver and TestNG for repeatable cross-browser coverage.',
      'Authored comprehensive manual, exploratory, and regression test cases and improved defect detection before release.',
      'Performed API validation testing for RESTful services to ensure data integrity and contract compliance.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2 tracking-wide">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 space-y-10">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8"
            >
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 glow" />
              <div className="glass rounded-2xl p-6 hover:border-primary-400/30 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-primary-400" />
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-1">{job.company}</p>
                <p className="text-xs text-gray-500 mb-4">{job.period}</p>
                <ul className="space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="text-sm text-gray-400 flex gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
