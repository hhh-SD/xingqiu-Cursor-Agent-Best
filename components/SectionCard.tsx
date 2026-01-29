import React from 'react';
import { SectionItem } from '../types';
import { Lightbulb, Terminal, Check } from 'lucide-react';

interface SectionCardProps {
  item: SectionItem;
}

const SectionCard: React.FC<SectionCardProps> = ({ item }) => {
  const renderContent = () => {
    switch (item.type) {
      case 'list':
        return (
          <ul className="space-y-3">
            {(item.content as string[]).map((li, idx) => (
              <li key={idx} className="flex items-start gap-3 text-cursor-text">
                <Check className="w-5 h-5 text-cursor-accent mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{li}</span>
              </li>
            ))}
          </ul>
        );
      case 'tip':
        return (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-4">
            <Lightbulb className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div className="text-emerald-100/90 text-sm leading-relaxed">
              {item.content}
            </div>
          </div>
        );
      case 'code':
        return (
          <div className="bg-black/30 rounded-xl border border-cursor-border overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-white/5 border-b border-cursor-border">
              <Terminal className="w-4 h-4 text-cursor-muted mr-2" />
              <span className="text-xs text-cursor-muted font-mono">Prompt Example</span>
            </div>
            <div className="p-4 font-mono text-sm text-blue-300">
              {item.content}
            </div>
          </div>
        );
      default:
        return (
          <p className="text-cursor-text leading-relaxed">
            {item.content}
          </p>
        );
    }
  };

  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
      {renderContent()}
    </div>
  );
};

export default SectionCard;