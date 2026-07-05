import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    category: 'Automation & Programming',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Selenium WebDriver', level: 90 },
      { name: 'Cypress', level: 88 },
      { name: 'Python', level: 80 },
    ],
  },
  {
    category: 'API & Testing',
    skills: [
      { name: 'REST Assured', level: 86 },
      { name: 'Postman', level: 84 },
      { name: 'Cucumber BDD', level: 82 },
      { name: 'Playwright', level: 78 },
    ],
  },
  {
    category: 'Quality & Delivery',
    skills: [
      { name: 'Shift-Left Testing', level: 90 },
      { name: 'CI/CD with Jenkins', level: 85 },
      { name: 'Docker & Kubernetes', level: 76 },
      { name: 'JIRA & Agile', level: 88 },
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
