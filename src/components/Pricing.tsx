import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Spark',
    priceMonthly: 0,
    priceAnnual: 0,
    features: [
      '2 videos/month',
      '1 platform publishing',
      'Basic Brand Voice',
      'Community support',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Creator',
    priceMonthly: 49,
    priceAnnual: 39,
    features: [
      '20 videos/month',
      'All platforms',
      'Advanced Brand Voice AI',
      'Content Calendar',
      'Priority rendering',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Pro',
    priceMonthly: 149,
    priceAnnual: 119,
    features: [
      'Unlimited videos',
      'Priority rendering',
      'Agency dashboard (5 profiles)',
      'Dedicated support',
      'Custom integrations',
    ],
    cta: 'Go Pro',
    highlight: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Pricing
          </span>
          <h2
            className="font-display font-bold text-text-primary mt-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            Choose Your <span className="gradient-text">Plan</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm ${!annual ? 'text-text-primary' : 'text-text-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-11 h-6 rounded-full bg-surface border border-primary/20 p-0.5 transition-colors"
              aria-label="Toggle annual pricing"
            >
              <div
                className={`w-5 h-5 rounded-full transition-all duration-200 ${
                  annual
                    ? 'bg-gradient-brand translate-x-5'
                    : 'bg-text-muted/40 translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-text-primary' : 'text-text-muted'}`}>
              Annual
              <span className="text-secondary text-xs ml-1">20% off</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-6 flex flex-col relative ${
                  plan.highlight
                    ? 'glass-strong animate-glow-pulse border-primary/30'
                    : 'bg-surface border border-primary/15'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                )}

                <h3 className="font-display font-semibold text-text-primary text-lg">
                  {plan.name}
                </h3>

                <div className="mt-4 mb-6">
                  <span className="font-display font-bold text-text-primary text-4xl">
                    ${price}
                  </span>
                  {price > 0 && <span className="text-text-muted text-sm">/month</span>}
                  {price === 0 && <span className="text-text-muted text-sm ml-1">Free</span>}
                </div>

                <ul className="flex-1 flex flex-col gap-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`w-full py-3 rounded-full text-center font-medium text-sm transition-opacity hover:opacity-90 ${
                    plan.highlight
                      ? 'bg-gradient-brand text-white'
                      : 'bg-surface border border-primary/15 text-text-primary hover:border-primary/30'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
