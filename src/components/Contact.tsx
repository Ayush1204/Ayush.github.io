import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to EmailJS, a form backend, or your own API.
    setStatus('sent');
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-medium mb-2 tracking-wide">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-4"
          >
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5 flex items-center gap-4">
                <div className="p-2.5 rounded-full bg-gradient-to-r from-green-400/20 to-blue-500/20">
                  <item.icon size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm text-gray-200">{item.value}</p>
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
            className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Ayush Jain"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-400/50"
            />
            <input
              type="email"
              placeholder="ayush4u16@gmail.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-400/50"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-400/50 resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold glow hover:glow-strong transition-all"
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
