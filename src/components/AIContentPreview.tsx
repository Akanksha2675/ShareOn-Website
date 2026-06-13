import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Video, Calendar, Play, Heart, MessageCircle, Share2, Repeat2 } from 'lucide-react';

const tabs = [
  { id: 'linkedin', label: 'LinkedIn Post', icon: FileText },
  { id: 'video', label: 'Short Video', icon: Video },
  { id: 'calendar', label: 'Content Calendar', icon: Calendar },
];

function LinkedInCard() {
  return (
    <div className="glass rounded-xl p-5 max-w-md mx-auto w-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white text-sm font-bold">
          JD
        </div>
        <div>
          <p className="text-text-primary text-sm font-semibold">John Doe</p>
          <p className="text-text-muted text-xs">Founder & CEO at TechFlow</p>
        </div>
      </div>
      <p className="text-text-primary text-sm leading-relaxed mb-3">
        The biggest mistake founders make with content? <br /><br />
        They think they need to <span className="text-primary font-medium">show up every day</span>. <br /><br />
        You don't need daily posts. You need a <span className="text-secondary font-medium">system</span> that: <br />
        <span className="text-primary">1.</span> Captures your best ideas <br />
        <span className="text-primary">2.</span> Turns them into content <br />
        <span className="text-primary">3.</span> Publishes while you build <br /><br />
        That's exactly what we built. <span className="gradient-text">And it works.</span>
      </p>
      <div className="flex items-center gap-6 text-text-muted text-xs">
        <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-secondary" /> 247</span>
        <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> 38</span>
        <span className="flex items-center gap-1"><Repeat2 className="w-3.5 h-3.5" /> 12</span>
        <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> 56</span>
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="glass rounded-xl p-4 max-w-md mx-auto w-full">
      <div className="aspect-[9/16] max-h-[280px] rounded-lg bg-gradient-to-br from-primary/30 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,92,252,0.2),transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6 text-white ml-1" />
          </motion.div>
        </div>
        <div className="absolute bottom-2 left-2 right-2">
          <div className="flex items-center gap-2 bg-background/60 backdrop-blur rounded-md px-2 py-1">
            <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center text-white text-[8px] font-bold">JD</div>
            <span className="text-[10px] text-white/80">3 habits that changed how I build products</span>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur rounded px-1.5 py-0.5">
          <span className="text-[9px] font-mono text-white">0:47</span>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-text-muted text-xs">
        <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-secondary" /> 1.2K</span>
        <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> 89</span>
        <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> 234</span>
      </div>
    </div>
  );
}

function CalendarCard() {
  const schedule = [
    { day: 'Mon', time: '9:00 AM', type: 'LinkedIn', color: 'bg-primary' },
    { day: 'Tue', time: '12:00 PM', type: 'Reel', color: 'bg-secondary' },
    { day: 'Wed', time: '10:00 AM', type: 'YouTube', color: 'bg-secondary' },
    { day: 'Thu', time: '8:00 AM', type: 'LinkedIn', color: 'bg-primary' },
    { day: 'Fri', time: '11:00 AM', type: 'TikTok', color: 'bg-secondary' },
  ];

  return (
    <div className="glass rounded-xl p-5 max-w-md mx-auto w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-text-primary text-sm font-semibold">This Week</h4>
        <span className="text-[10px] font-mono text-secondary">5 posts scheduled</span>
      </div>
      <div className="space-y-2">
        {schedule.map((item) => (
          <div key={item.day} className="flex items-center gap-3 bg-background/40 rounded-lg p-2">
            <span className="text-[10px] text-text-muted w-6 font-mono">{item.day}</span>
            <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
            <span className="text-xs text-text-primary flex-1">{item.type} Post</span>
            <span className="text-[10px] text-text-muted font-mono">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const contentMap: Record<string, () => JSX.Element> = {
  linkedin: LinkedInCard,
  video: VideoCard,
  calendar: CalendarCard,
};

export default function AIContentPreview() {
  const [activeTab, setActiveTab] = useState('linkedin');

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            AI Output
          </span>
          <h2
            className="font-display font-bold text-text-primary mt-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            See What <span className="gradient-text">AI Creates</span>
          </h2>
          <p className="text-text-muted mt-3 max-w-md mx-auto text-sm">
            Real examples of AI-generated content — not mockups, not placeholders.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary/20 border border-primary/40 text-primary'
                    : 'bg-surface border border-white/5 text-text-muted hover:text-text-primary hover:border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              {contentMap[activeTab]()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
