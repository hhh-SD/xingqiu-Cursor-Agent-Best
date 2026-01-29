import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import SectionCard from './components/SectionCard';
import { GUIDE_CONTENT } from './constants';
import { Menu, Github } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(GUIDE_CONTENT[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = GUIDE_CONTENT.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100; // Offset

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex min-h-screen bg-cursor-dark text-white font-sans selection:bg-cursor-accent/30">
      <Sidebar 
        activeSection={activeSection} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onSelect={scrollToSection}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="sticky top-0 z-30 bg-cursor-dark/80 backdrop-blur-md border-b border-cursor-border md:hidden px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-cursor-muted hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="font-semibold text-white">Cursor Guide</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-4xl mx-auto w-full">
          <div className="space-y-16">
            <div className="text-center md:text-left py-8 border-b border-cursor-border mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Cursor Agent 最佳实践
              </h1>
              <p className="text-xl text-cursor-muted max-w-2xl">
                全面掌握 Agent 编码范式，从规划、上下文管理到高级工作流，释放 AI 编程的真正潜力。
              </p>
            </div>

            {GUIDE_CONTENT.map((section) => {
              const Icon = section.icon;
              return (
                <section 
                  key={section.id} 
                  id={section.id}
                  className="scroll-mt-24 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-cursor-panel border border-cursor-border group-hover:border-cursor-accent/50 transition-colors">
                      <Icon className="w-8 h-8 text-cursor-accent" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {section.title}
                      </h2>
                      <p className="text-cursor-muted text-sm md:text-base">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="bg-cursor-panel border border-cursor-border rounded-2xl p-6 md:p-8 shadow-sm">
                      {section.content.map((item, idx) => (
                        <div key={idx} className={idx !== section.content.length - 1 ? "border-b border-cursor-border pb-6 mb-6" : ""}>
                          <SectionCard item={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <footer className="mt-20 pt-8 border-t border-cursor-border text-center text-cursor-muted mb-8">
            <p className="flex items-center justify-center gap-2 mb-2">
              Built with React & Tailwind
            </p>
            <p className="text-sm opacity-60">
              Content adapted from Cursor "Agent Coding Best Practices"
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;