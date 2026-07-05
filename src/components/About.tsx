import { motion } from 'framer-motion';

const STATS = [
  { value: '6+', label: 'Years Experience' },
  { value: '95%+', label: 'Manual Effort Reduced' },
  { value: '40%', label: 'Coverage Improvement' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2 tracking-wide">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A little <span className="gradient-text">about who I am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-gray-400 leading-relaxed"
          >
            <p>
              I’m a Senior QA professional with 6+ years of experience architecting and scaling
              test automation frameworks for enterprise and product-based applications.
            </p>
            <p>
              My work focuses on shift-left testing, automation strategy, and building quality-first
              engineering practices that help teams release faster with confidence.
            </p>
            <p>
              I’m especially interested in AI-assisted development, GenAI integration, and using
              automation to improve both delivery speed and product reliability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:glow transition-all"
              >
                <p className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
