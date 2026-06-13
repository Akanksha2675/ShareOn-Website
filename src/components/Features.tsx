import { motion } from 'framer-motion';
import { Brain, UserCheck, Send, Calendar, LayoutGrid, Scissors } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Brand Voice AI',
    desc: 'Learns how you write, speak and think. Every script sounds 100% like you, not a robot.',
  },
  {
    icon: UserCheck,
    title: 'Photorealistic Avatar',
    desc: 'Built from your 4 photos. Synced to your cloned voice. Indistinguishable from a real recording.',
  },
  {
    icon: Send,
    title: 'One-Click Publishing',
    desc: 'Connect Instagram, YouTube, TikTok, LinkedIn and X. Set schedules or let AI decide the best time.',
  },
  {
    icon: Calendar,
    title: 'Content Calendar',
    desc: 'AI plans your weekly content automatically based on your niche, goals, and trending topics.',
  },
  {
    icon: LayoutGrid,
    title: 'Multi-Platform Formats',
    desc: 'Auto-resizes and reformats each video for Reels, Shorts, TikTok, LinkedIn video, and X posts.',
  },
  {
    icon: Scissors,
    title: 'Zero Editing Required',
    desc: 'No CapCut. No Premiere. No camera setup. Just approve and publish — or let it run fully auto.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Capabilities
          </span>
          <h2
            className="font-display font-bold text-text-primary mt-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            Everything You Need to
            <span className="gradient-text"> Create & Publish</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-surface border border-primary/15 rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(124,92,252,0.15)] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
