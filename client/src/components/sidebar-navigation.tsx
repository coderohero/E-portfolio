import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface SidebarNavigationProps {
  sections: Array<{
    id: string;
    label: string;
    icon: string;
  }>;
}

export default function SidebarNavigation({ sections }: SidebarNavigationProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState<{ [key: string]: number }>({});
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionProgress: { [key: string]: number } = {};
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementTop = rect.top;
          const elementHeight = rect.height;
          
          // Calculate progress through the section
          let progress = 0;
          if (elementTop < windowHeight && elementTop + elementHeight > 0) {
            if (elementTop <= 0) {
              progress = Math.min((-elementTop / elementHeight) * 100, 100);
            } else {
              progress = Math.max(((windowHeight - elementTop) / windowHeight) * 100, 0);
            }
            
            // Set active section based on scroll position
            if (progress > 30) {
              setActiveSection(section.id);
            }
          }
          
          sectionProgress[section.id] = Math.max(0, Math.min(100, progress));
        }
      });
      
      setScrollProgress(sectionProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <Button
        variant="ghost"
        className="fixed top-6 left-6 z-50 lg:hidden w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-border hover:bg-card/90 transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
        data-testid="sidebar-toggle"
      >
        <i className={`fas ${isExpanded ? 'fa-times' : 'fa-bars'} text-lg transition-transform duration-300`}></i>
      </Button>

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full w-20 lg:w-24 bg-sidebar/95 backdrop-blur-xl border-r border-sidebar-border z-40 transition-all duration-500 ${
          isExpanded ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        data-testid="sidebar-navigation"
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-8">
          <div 
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300"
            onClick={() => scrollToSection("home")}
            data-testid="sidebar-logo"
          >
            <span className="text-white font-bold text-lg group-hover:rotate-12 transition-transform duration-300">
              JR
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col space-y-4 px-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const progress = scrollProgress[section.id] || 0;
            
            return (
              <div key={section.id} className="relative group">
                {/* Progress Circle Background */}
                <div className="absolute inset-0 rounded-full">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-sidebar-border"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                      className={`transition-all duration-500 ${
                        isActive ? 'text-primary' : 'text-accent/60'
                      }`}
                      style={{ 
                        filter: isActive ? 'drop-shadow(0 0 8px hsl(var(--primary)))' : 'none' 
                      }}
                    />
                  </svg>
                </div>

                {/* Navigation Button */}
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    isActive 
                      ? 'text-primary bg-primary/10 shadow-lg shadow-primary/25' 
                      : 'text-sidebar-foreground/60 hover:text-primary hover:bg-primary/5'
                  }`}
                  data-testid={`nav-${section.id}`}
                >
                  <i className={`${section.icon} text-lg transition-transform duration-300 group-hover:scale-110`}></i>
                </button>

                {/* Tooltip */}
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-50">
                  {section.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-card"></div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            className="w-12 h-12 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-card transition-all duration-300 hover:scale-110"
            data-testid="theme-toggle"
          >
            <i className="fas fa-moon text-lg"></i>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}