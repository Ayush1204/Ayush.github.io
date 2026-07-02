import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'Your Degree',
    school: 'Institution Name',
    period: 'Year — Year',
    detail: 'Relevant honors, focus area, or coursework.',
  },
  {
    degree: 'Certification / Course',
    school: 'Issuing Organization',
    period: 'Year',
    detail: 'What it covered or why it matters for your work.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2 tracking-wide">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:glow transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={18} className="text-primary-400" />
                <h3 className="font-semibold text-white">{item.degree}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">{item.school}</p>
              <p className="text-xs text-gray-500 mb-3">{item.period}</p>
              <p className="text-sm text-gray-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
