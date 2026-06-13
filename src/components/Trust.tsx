import { motion } from 'framer-motion';
import { Shield, Lock, Trash2 } from 'lucide-react';

const trustSignals = [
  { icon: Shield, text: 'No deepfake concerns — you own your avatar' },
  { icon: Lock, text: 'Your likeness is never used without your control' },
  { icon: Trash2, text: 'Delete your avatar and data anytime' },
];

export default function Trust() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Trust
            </span>
            <h2
              className="font-display font-bold text-text-primary mt-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              It doesn't look AI-generated.
              <br />
              <span className="gradient-text">It looks like you.</span>
            </h2>

            <p className="text-text-muted mt-6 leading-relaxed max-w-lg">
              We use multi-angle photo capture and proprietary voice synthesis to create
              avatars that move, speak, and gesture the way you do. Not a cartoon. Not a
              generic AI face. Your face. Your voice. Your personality.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              {trustSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-text-primary text-sm">{signal.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-md"
          >
            <div className="flex flex-col gap-4">
              <div className="bg-surface border border-white/5 rounded-2xl p-5">
                <p className="font-mono text-[10px] text-text-muted tracking-wider uppercase mb-3">
                  Traditional Recording
                </p>
                <div className="aspect-video rounded-lg bg-background border border-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-surface/80 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-text-muted/20" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary/30" />
                      <span className="text-[10px] text-text-muted">Studio setup required</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <div className="w-3 h-3 rounded-full bg-secondary/30" />
                      <span className="text-[10px] text-text-muted">Hours of editing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-primary/30 rounded-2xl p-5">
                <p className="font-mono text-[10px] text-primary tracking-wider uppercase mb-3">
                  ShareOn Avatar Video
                </p>
                <div className="aspect-video rounded-lg bg-background border border-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-brand/30 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-brand/60" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary/60" />
                      <span className="text-[10px] text-primary">Zero setup needed</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary/60" />
                      <span className="text-[10px] text-primary">Published automatically</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
