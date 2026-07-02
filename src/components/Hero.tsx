import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient floating shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl float" />
        <div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl float"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-400 font-medium mb-4 tracking-wide"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          <span className="gradient-text">Your Name</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-200 font-semibold mb-6"
        >
          Your Title / Role
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A one or two sentence summary of what you do, who you help, and what makes your
          work distinctive. Keep it concrete and specific to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold glow hover:glow-strong transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full glass text-gray-200 font-semibold hover:border-primary-400/50 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Email">
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-primary-400 transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
