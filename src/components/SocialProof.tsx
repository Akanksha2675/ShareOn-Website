import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 10, suffix: 'x', label: 'Faster Content Creation', prefix: '' },
  { value: 6, suffix: '', label: 'Platforms, 1 Dashboard', prefix: '' },
  { value: 100, suffix: '%', label: 'Your Brand Voice', prefix: '' },
];

function useCountUp(target: number, duration: number = 2000, start: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCounter({ value, suffix, label, prefix, inView }: {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);

  return (
    <div className="text-center px-4">
      <div className="font-display font-bold gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        {prefix}{count}{suffix}
      </div>
      <p className="text-text-muted text-sm mt-1">{label}</p>
    </div>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface border border-primary/15 rounded-2xl p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
