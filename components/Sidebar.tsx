import React from 'react';
import { GUIDE_CONTENT } from '../constants';
import { Bot, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, isOpen, onClose, onSelect }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-full w-72 bg-cursor-panel border-r border-cursor-border
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:h-screen md:flex-shrink-0 overflow-y-auto
        `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3 text-cursor-text">
              <div className="bg-cursor-accent/20 p-2 rounded-lg">
                <Bot className="w-6 h-6 text-cursor-accent" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Cursor Guide</span>
            </div>
            <button onClick={onClose} className="md:hidden text-cursor-muted hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-1">
            {GUIDE_CONTENT.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    onSelect(section.id);
                    onClose();
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-cursor-accent/10 text-cursor-accent border border-cursor-accent/20' 
                      : 'text-cursor-muted hover:bg-cursor-border/50 hover:text-white border border-transparent'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cursor-accent' : 'text-cursor-muted'}`} />
                  <span>{section.title.split('：')[0]}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-8 border-t border-cursor-border">
            <p className="text-xs text-cursor-muted leading-relaxed">
              基于 Cursor 官方最佳实践文档整理。
              <br />
              <span className="opacity-50">v1.0.0</span>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;