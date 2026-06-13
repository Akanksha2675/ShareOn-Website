import { Sparkles } from 'lucide-react';

const productLinks = ['Features', 'Pricing', 'How It Works', 'API'];
const companyLinks = ['Blog', 'Careers', 'Privacy', 'Terms'];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-display font-bold text-text-primary">ShareOn</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              The AI content engine for personal brands. Your face, your voice, on autopilot.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-text-primary text-sm font-medium mb-3">Product</h4>
              <ul className="flex flex-col gap-2">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-text-muted text-sm hover:text-text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-text-primary text-sm font-medium mb-3">Company</h4>
              <ul className="flex flex-col gap-2">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-text-muted text-sm hover:text-text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-text-primary text-sm font-medium mb-3">Connect</h4>
            <div className="flex gap-3">
              {[
                { name: 'X', color: '#F0EEF8' },
                { name: 'IG', color: '#E1306C' },
                { name: 'LI', color: '#0A66C2' },
                { name: 'YT', color: '#FF0000' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors"
                  style={{
                    borderColor: social.color + '30',
                    color: social.color,
                    backgroundColor: social.color + '10',
                  }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-center">
          <p className="text-text-muted/50 text-xs">
            &copy; 2025 ShareOn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
