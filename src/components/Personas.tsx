import { motion } from 'framer-motion';

const people = [
  {
    name: 'Priya S.',
    role: 'Business Coach',
    desc: 'Publishes daily videos without touching a camera.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Marcus T.',
    role: 'Startup Founder',
    desc: 'Looks like a full content team on a solo budget.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Rina M.',
    role: 'Agency Consultant',
    desc: 'Turns client insights into shareable thought leadership.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
];

export default function Personas() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Built For
          </span>
          <h2
            className="font-display font-bold text-text-primary mt-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            Built for People <span className="gradient-text">Like You</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-surface border border-primary/15 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(124,92,252,0.2)] transition-all group"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full aspect-square object-cover rounded-t-2xl"
              />
              <div className="p-5 text-center">
                <h3 className="font-display font-semibold text-text-primary text-sm">
                  {person.name}
                </h3>
                <p className="text-primary text-xs font-medium mb-2">{person.role}</p>
                <p className="text-text-muted text-xs leading-relaxed">{person.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
