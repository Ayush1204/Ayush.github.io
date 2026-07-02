import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Your Role',
    company: 'Company Name',
    period: 'Month Year — Present',
    points: [
      'A concrete achievement or responsibility, ideally with a number.',
      'Another impact you had in this role.',
    ],
  },
  {
    role: 'Previous Role',
    company: 'Previous Company',
    period: 'Month Year — Month Year',
    points: [
      'A concrete achievement or responsibility, ideally with a number.',
      'Another impact you had in this role.',
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
