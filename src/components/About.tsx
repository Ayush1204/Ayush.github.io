import { motion } from 'framer-motion';

const STATS = [
  { value: 'X+', label: 'Years Experience' },
  { value: 'XX', label: 'Projects Delivered' },
  { value: 'XX', label: 'Happy Clients' },
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
              Write two or three short paragraphs about your background: what field you
              work in, what you specialize in, and the kind of problems you enjoy solving.
            </p>
            <p>
              Mention what drives you professionally and any notable focus areas — this is
              a good place to set the tone before people scroll into your experience.
            </p>
            <p>
              Optionally close with something personal — a hobby, interest, or value that
              gives visitors a sense of who you are outside of work.
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
