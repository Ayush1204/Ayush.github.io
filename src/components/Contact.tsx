import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'ayush4u16@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8000371918' },
  { icon: MapPin, label: 'Location', value: 'Ahmedabad, India' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sent');
  };

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let’s <span className="gradient-text">work together</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="apple-card flex items-center gap-4 p-5">
                <div className="rounded-full bg-sky-500/10 p-3 text-sky-600 dark:text-sky-300">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="apple-card space-y-4 p-6 sm:p-8"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
            />
            <textarea
              placeholder="Tell me about your project"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.01] dark:bg-white dark:text-slate-950"
            >
              <Send size={16} />
              {status === 'sent' ? 'Message Sent' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
