import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    category: 'Category One',
    skills: [
      { name: 'Skill A', level: 90 },
      { name: 'Skill B', level: 80 },
      { name: 'Skill C', level: 75 },
    ],
  },
  {
    category: 'Category Two',
    skills: [
      { name: 'Skill D', level: 85 },
      { name: 'Skill E', level: 70 },
      { name: 'Skill F', level: 65 },
    ],
  },
  {
    category: 'Category Three',
    skills: [
      { name: 'Skill G', level: 88 },
      { name: 'Skill H', level: 78 },
      { name: 'Skill I', level: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2 tracking-wide">Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-semibold text-white mb-5">{group.category}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
