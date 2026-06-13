import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

function AvatarMorphMockup() {
  const platforms = [
    { label: 'LI', color: '#0A66C2' },
    { label: 'YT', color: '#FF0000' },
    { label: 'TT', color: '#00F2EA' },
    { label: 'IG', color: '#E1306C' },
    { label: 'X', color: '#F0EEF8' },
  ];

  return (
    <div className="glass rounded-2xl p-6 w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-text-primary">ShareOn Studio</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <div className="w-2 h-2 rounded-full bg-text-muted/30" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 items-center">
        {/* Left: 4 photo angles */}
        <div className="grid grid-cols-2 gap-2">
          {['front', 'left', 'right', 'top'].map((angle, i) => (
            <div
              key={angle}
              className="aspect-square rounded-lg bg-surface border border-primary/15 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary/30">
                  <circle cx="20" cy="15" r="6" fill="currentColor" />
                  <ellipse cx="20" cy="33" rx="10" ry="7" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-1 left-1 text-[7px] font-mono text-text-muted uppercase">
                {angle}
              </div>
              {/* Scan line animation */}
              <div
                className="absolute left-0 right-0 h-px bg-gradient-brand/60 animate-scan-line"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            </div>
          ))}
        </div>

        {/* Center: AI processing */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            {/* Glowing avatar silhouette */}
            <div className="w-20 h-20 rounded-full bg-surface border border-primary/20 flex items-center justify-center animate-morph-glow">
              <svg viewBox="0 0 60 60" className="w-14 h-14">
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C5CFC" />
                    <stop offset="100%" stopColor="#FC5C7D" />
                  </linearGradient>
                </defs>
                <circle cx="30" cy="22" r="10" fill="url(#avatarGrad)" opacity="0.8" />
                <ellipse cx="30" cy="48" rx="16" ry="10" fill="url(#avatarGrad)" opacity="0.6" />
              </svg>
            </div>
            {/* Orbiting dots */}
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="text-center">
            <p className="text-[9px] font-mono text-primary uppercase tracking-wider">Processing</p>
            <div className="flex items-center gap-0.5 mt-1 justify-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-1 h-3 rounded-full bg-gradient-brand animate-pulse"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Platform windows */}
        <div className="flex flex-col gap-2">
          {platforms.slice(0, 4).map((p, i) => (
            <div
              key={p.label}
              className="flex items-center gap-2 bg-background/60 rounded-lg p-1.5 border border-white/5"
              style={{ animation: `platform-appear 2s ease-out ${1 + i * 0.3}s both` }}
            >
              <div
                className="w-6 h-6 rounded flex items-center justify-center text-[8px] font-bold flex-shrink-0"
                style={{
                  backgroundColor: p.color + '20',
                  color: p.color,
                  border: `1px solid ${p.color}40`,
                }}
              >
                {p.label}
              </div>
              <div className="flex-1 space-y-0.5">
                <div className="h-1 w-full bg-primary/15 rounded" />
                <div className="h-1 w-2/3 bg-primary/10 rounded" />
              </div>
              {/* Avatar silhouette in post */}
              <div className="w-5 h-5 rounded-full bg-gradient-brand/30 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingLaptop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative animate-float"
    >
      <svg viewBox="0 0 280 180" className="w-56 lg:w-64" fill="none">
        {/* Laptop body */}
        <rect x="20" y="10" width="240" height="140" rx="8" className="fill-surface" stroke="rgba(124,92,252,0.25)" strokeWidth="1" />
        {/* Screen */}
        <rect x="30" y="18" width="220" height="118" rx="4" className="fill-background" stroke="rgba(124,92,252,0.15)" strokeWidth="0.5" />
        {/* Bottom hinge */}
        <rect x="5" y="150" width="270" height="8" rx="4" className="fill-surface" stroke="rgba(124,92,252,0.2)" strokeWidth="0.5" />

        {/* Screen content: Dashboard */}
        {/* Top bar */}
        <rect x="36" y="24" width="40" height="3" rx="1.5" className="fill-primary" opacity="0.6" />
        <circle cx="238" cy="25.5" r="2" fill="#FC5C7D" opacity="0.5" />
        <circle cx="245" cy="25.5" r="2" fill="#7C5CFC" opacity="0.5" />

        {/* Video preview */}
        <rect x="36" y="32" width="60" height="45" rx="3" fill="url(#laptopGrad)" opacity="0.3" />
        <polygon points="60,50 60,62 72,56" fill="white" opacity="0.5" />
        <text x="40" y="82" fill="#8B87A6" fontSize="4" fontFamily="monospace">Short Video</text>

        {/* Post list */}
        <rect x="104" y="32" width="140" height="8" rx="2" fill="#7C5CFC" opacity="0.15" />
        <rect x="104" y="44" width="110" height="8" rx="2" fill="#7C5CFC" opacity="0.1" />
        <rect x="104" y="56" width="130" height="8" rx="2" fill="#FC5C7D" opacity="0.1" />
        <rect x="104" y="68" width="90" height="8" rx="2" fill="#7C5CFC" opacity="0.08" />

        {/* Calendar mini */}
        <rect x="36" y="92" width="208" height="40" rx="3" fill="#13121C" stroke="rgba(124,92,252,0.1)" strokeWidth="0.5" />
        <rect x="40" y="96" width="18" height="6" rx="1" fill="#7C5CFC" opacity="0.3" />
        <rect x="62" y="96" width="18" height="6" rx="1" fill="#FC5C7D" opacity="0.2" />
        <rect x="84" y="96" width="18" height="6" rx="1" fill="#7C5CFC" opacity="0.2" />
        <rect x="106" y="96" width="18" height="6" rx="1" fill="rgba(255,255,255,0.03)" />
        <rect x="128" y="96" width="18" height="6" rx="1" fill="rgba(255,255,255,0.03)" />

        <defs>
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C5CFC" />
            <stop offset="100%" stopColor="#FC5C7D" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow behind laptop */}
      <div className="absolute inset-0 -z-10 blur-xl bg-gradient-brand/10 rounded-full" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,92,252,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(252,92,125,0.08)_0%,transparent_50%)]" />

      {/* Noise/particle texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${3 + i * 1.5}px`,
              height: `${3 + i * 1.5}px`,
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 22}%`,
              background: i % 2 === 0 ? 'rgba(124,92,252,0.25)' : 'rgba(252,92,125,0.2)',
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3.5 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Text content */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-secondary uppercase bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5">
              <Sparkles className="w-3 h-3" />
              AI Personal Branding Agent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-text-primary mt-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
          >
            Your Face. Your Voice.
            <br />
            <span className="shimmer-text">Content on Autopilot.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg mt-6 max-w-xl mx-auto leading-relaxed"
          >
            Take 4 photos and record your voice once. ShareOn writes your scripts,
            generates real-looking videos, and publishes them wherever you want — while you
            focus on what matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
          >
            <a
              href="#cta"
              className="bg-gradient-brand text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity text-center animate-glow-pulse"
            >
              Create My Avatar
            </a>
            <a
              href="#how-it-works"
              className="glass text-text-primary font-medium px-7 py-3.5 rounded-full hover:border-primary/40 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Avatar morph mockup */}
        <div className="mt-16">
          <AvatarMorphMockup />
        </div>

        {/* Floating laptop mockup */}
        <div className="flex justify-center mt-10">
          <FloatingLaptop />
        </div>
      </div>
    </section>
  );
}
