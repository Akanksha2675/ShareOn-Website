import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="absolute inset-0 bg-background/60" />

          <div className="relative z-10 text-center py-16 px-6">
            <h2
              className="font-display font-bold text-text-primary"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Your audience is waiting.
              <br />
              <span className="gradient-text">Your avatar is ready.</span>
            </h2>

            <p className="text-text-muted mt-4 max-w-md mx-auto">
              Join thousands of creators publishing smarter with ShareOn.
            </p>

            <a
              href="#"
              className="inline-block bg-white text-background font-semibold px-8 py-4 rounded-full mt-8 hover:opacity-90 transition-opacity"
            >
              Create My Avatar — It's Free
            </a>

            <p className="text-text-muted/60 text-xs mt-4">
              No credit card required · Cancel anytime · Your data stays yours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
