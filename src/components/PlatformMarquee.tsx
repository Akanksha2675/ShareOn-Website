import { motion } from 'framer-motion';

const platforms = [
  { name: 'LinkedIn', color: '#0A66C2' },
  { name: 'YouTube', color: '#FF0000' },
  { name: 'TikTok', color: '#00F2EA' },
  { name: 'Instagram', color: '#E1306C' },
  { name: 'X', color: '#F0EEF8' },
];

export default function PlatformMarquee() {
  const doubled = [...platforms, ...platforms];

  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted text-sm text-center mb-8"
        >
          Publish to every platform from one place
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {doubled.map((platform, i) => (
              <div
                key={`${platform.name}-${i}`}
                className="glass-strong rounded-xl px-8 py-4 mx-3 flex items-center gap-3 flex-shrink-0"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: platform.color + '20',
                    color: platform.color,
                    border: `1px solid ${platform.color}40`,
                  }}
                >
                  {platform.name.charAt(0)}
                </div>
                <span className="text-text-primary text-sm font-medium whitespace-nowrap">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
