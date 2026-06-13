import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Business Coach',
    quote:
      "I went from posting once a month to publishing 5 videos a week — and I haven't touched a camera in 3 months.",
    initials: 'PS',
  },
  {
    name: 'Marcus T.',
    role: 'SaaS Founder',
    quote:
      "My LinkedIn reach tripled in 6 weeks. People keep asking when I find the time to film so much.",
    initials: 'MT',
  },
  {
    name: 'Rina M.',
    role: 'Agency Owner',
    quote:
      "I use ShareOn for 4 of my agency clients now. It's the only tool that actually delivers on the 'AI content' promise.",
    initials: 'RM',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Testimonials
          </span>
          <h2
            className="font-display font-bold text-text-primary mt-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            What Creators Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-surface border border-primary/15 rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(124,92,252,0.15)] transition-all"
            >
              <p className="text-text-primary text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-text-primary text-sm font-medium">{t.name}</p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
