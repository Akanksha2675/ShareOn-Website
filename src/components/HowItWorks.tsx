import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Upload Knowledge',
    desc: 'Share your expertise, tone, and past content so the AI understands your brand.',
    iconType: 'camera' as const,
  },
  {
    num: '02',
    title: 'Train Brand Voice',
    desc: 'Our AI learns your unique writing and speaking style from your materials.',
    iconType: 'waveform' as const,
  },
  {
    num: '03',
    title: 'Generate Content',
    desc: 'AI writes scripts and posts that sound exactly like you — on any topic.',
    iconType: 'pen-sparkle' as const,
  },
  {
    num: '04',
    title: 'Create Videos',
    desc: 'Your photorealistic avatar delivers the script with your cloned voice.',
    iconType: 'video' as const,
  },
  {
    num: '05',
    title: 'Published Your Way',
    desc: 'Your video goes live on the platforms you choose — Instagram, YouTube, TikTok, LinkedIn, X, or all of them. You are in control.',
    iconType: 'globe' as const,
  },
];

function StepIcon({ type }: { type: string }) {
  const gradientId = `grad-${type}`;
  switch (type) {
    case 'camera':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFC" />
              <stop offset="100%" stopColor="#FC5C7D" />
            </linearGradient>
          </defs>
          {/* Face scan frame */}
          <rect x="8" y="8" width="32" height="32" rx="6" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" strokeDasharray="4 3" />
          {/* Face silhouette */}
          <circle cx="24" cy="19" r="6" fill={`url(#${gradientId})`} opacity="0.5" />
          <ellipse cx="24" cy="36" rx="10" ry="6" fill={`url(#${gradientId})`} opacity="0.35" />
          {/* Scan line */}
          <line x1="10" y1="24" x2="38" y2="24" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.6" strokeDasharray="2 2" />
          {/* Corner brackets */}
          <path d="M8 14 L8 8 L14 8" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" />
          <path d="M34 8 L40 8 L40 14" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" />
          <path d="M8 34 L8 40 L14 40" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" />
          <path d="M34 40 L40 40 L40 34" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" />
        </svg>
      );
    case 'waveform':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFC" />
              <stop offset="100%" stopColor="#FC5C7D" />
            </linearGradient>
          </defs>
          {/* Microphone body */}
          <rect x="20" y="6" width="8" height="18" rx="4" fill={`url(#${gradientId})`} opacity="0.5" />
          <rect x="22" y="8" width="4" height="14" rx="2" fill={`url(#${gradientId})`} opacity="0.7" />
          {/* Mic stand */}
          <line x1="24" y1="24" x2="24" y2="34" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <line x1="18" y1="34" x2="30" y2="34" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
          {/* Waveform bars */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect
              key={i}
              x={6 + i * 5.5}
              y={24 - (Math.sin(i * 0.9) * 8 + 8)}
              width="3"
              height={Math.sin(i * 0.9) * 16 + 16}
              rx="1.5"
              fill={`url(#${gradientId})`}
              opacity={0.25 + Math.abs(Math.sin(i * 0.9)) * 0.3}
            />
          ))}
        </svg>
      );
    case 'pen-sparkle':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFC" />
              <stop offset="100%" stopColor="#FC5C7D" />
            </linearGradient>
          </defs>
          {/* Pen body */}
          <path d="M12 36 L32 16 L36 20 L16 40 Z" fill={`url(#${gradientId})`} opacity="0.5" />
          <path d="M32 16 L36 12 L40 16 L36 20 Z" fill={`url(#${gradientId})`} opacity="0.7" />
          {/* Pen tip */}
          <path d="M12 36 L8 44 L16 40 Z" fill={`url(#${gradientId})`} opacity="0.6" />
          {/* Sparkles */}
          <circle cx="38" cy="10" r="2" fill={`url(#${gradientId})`} opacity="0.8" />
          <circle cx="42" cy="14" r="1" fill={`url(#${gradientId})`} opacity="0.5" />
          <circle cx="34" cy="6" r="1.2" fill={`url(#${gradientId})`} opacity="0.6" />
          {/* Sparkle rays */}
          <line x1="38" y1="6" x2="38" y2="4" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.5" />
          <line x1="42" y1="10" x2="44" y2="10" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.5" />
          <line x1="38" y1="14" x2="38" y2="16" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.5" />
          <line x1="34" y1="10" x2="32" y2="10" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'video':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFC" />
              <stop offset="100%" stopColor="#FC5C7D" />
            </linearGradient>
          </defs>
          {/* Video frame */}
          <rect x="6" y="10" width="36" height="24" rx="4" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <rect x="8" y="12" width="32" height="20" rx="2" fill={`url(#${gradientId})`} opacity="0.15" />
          {/* Play button */}
          <polygon points="20,18 20,28 30,23" fill={`url(#${gradientId})`} opacity="0.7" />
          {/* Progress bar */}
          <rect x="8" y="36" width="32" height="2" rx="1" fill={`url(#${gradientId})`} opacity="0.2" />
          <rect x="8" y="36" width="18" height="2" rx="1" fill={`url(#${gradientId})`} opacity="0.5" />
          {/* Video dot */}
          <circle cx="12" cy="14" r="1.5" fill={`url(#${gradientId})`} opacity="0.6" />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFC" />
              <stop offset="100%" stopColor="#FC5C7D" />
            </linearGradient>
          </defs>
          {/* Globe */}
          <circle cx="24" cy="22" r="14" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <ellipse cx="24" cy="22" rx="7" ry="14" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.5" />
          <line x1="10" y1="22" x2="38" y2="22" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.5" />
          <line x1="12" y1="15" x2="36" y2="15" stroke={`url(#${gradientId})`} strokeWidth="0.8" opacity="0.3" />
          <line x1="12" y1="29" x2="36" y2="29" stroke={`url(#${gradientId})`} strokeWidth="0.8" opacity="0.3" />
          {/* Send arrow */}
          <path d="M34 34 L42 42" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
          <path d="M36 42 L42 42 L42 36" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

function AnimatedLine({ active }: { active: boolean }) {
  return (
    <div className="hidden lg:flex items-center flex-1 px-1 relative h-0.5 mx-1">
      <div className="absolute inset-0 bg-white/5 rounded-full" />
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full bg-gradient-brand"
        initial={{ width: '0%' }}
        animate={{ width: active ? '100%' : '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleStep, setVisibleStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number(entry.target.getAttribute('data-step'));
            setVisibleStep((prev) => Math.max(prev, stepIndex));
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-step]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            The Process
          </span>
          <h2
            className="font-display font-bold text-text-primary mt-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            How It <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div ref={sectionRef} className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0">
          {steps.map((step, i) => {
            const isActive = visibleStep >= i;
            return (
              <div key={step.num} className="contents" data-step={i}>
                <motion.div
                  data-step={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center min-w-0"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 ${
                      isActive
                        ? 'bg-primary/20 border border-primary/50 shadow-[0_0_24px_rgba(124,92,252,0.3)]'
                        : 'bg-surface border border-primary/15'
                    }`}
                  >
                    <StepIcon type={step.iconType} />
                  </div>
                  <span
                    className={`font-mono text-xs font-medium mb-1.5 transition-colors duration-500 ${
                      isActive ? 'gradient-text' : 'text-text-muted'
                    }`}
                  >
                    Step {step.num}
                  </span>
                  <h3 className="font-display font-semibold text-text-primary text-sm mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
                {i < steps.length - 1 && <AnimatedLine active={visibleStep > i} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
