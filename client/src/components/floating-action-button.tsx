import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationItem {
  id: string;
  label: string;
  icon: JSX.Element;
  color: string;
}

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navigationItems: NavigationItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <HomeIcon />,
      color: 'hsl(160, 75%, 50%)'
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <RocketIcon />,
      color: 'hsl(45, 90%, 60%)'
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: <CodeIcon />,
      color: 'hsl(175, 70%, 45%)'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <MailIcon />,
      color: 'hsl(35, 85%, 55%)'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Navigation Items */}
      {navigationItems.map((item, index) => (
        <div
          key={item.id}
          className={`
            absolute bottom-16 right-0 transform transition-all duration-300
            ${isOpen 
              ? `translate-y-${(index + 1) * -16} opacity-100 scale-100` 
              : 'translate-y-0 opacity-0 scale-75'
            }
          `}
          style={{
            transform: isOpen 
              ? `translateY(-${(index + 1) * 64}px)` 
              : 'translateY(0px)',
            transitionDelay: `${index * 50}ms`
          }}
        >
          <Button
            onClick={() => scrollToSection(item.id)}
            className={`
              w-14 h-14 rounded-full p-0 shadow-lg border-2 border-background
              hover:scale-110 transition-all duration-200
              group relative overflow-hidden
            `}
            style={{ 
              backgroundColor: item.color,
              boxShadow: `0 4px 20px ${item.color}40`
            }}
            data-testid={`fab-${item.id}`}
          >
            <div className="relative z-10 text-white">
              {item.icon}
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                           bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           pointer-events-none whitespace-nowrap">
              {item.label}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 
                             border-4 border-transparent border-l-gray-900"></div>
            </div>
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 
                           group-active:opacity-20 transform scale-0 group-active:scale-100
                           transition-all duration-300"></div>
          </Button>
        </div>
      ))}

      {/* Main FAB */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 rounded-full p-0 bg-primary shadow-2xl
          hover:scale-105 transition-all duration-300 relative overflow-hidden
          ${isOpen ? 'rotate-45' : 'rotate-0'}
        `}
        style={{ 
          boxShadow: '0 8px 32px hsl(160, 75%, 50%, 0.4)',
        }}
        data-testid="fab-main"
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <PlusIcon />
        </div>
        
        {/* Background Animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br 
                       from-primary to-accent opacity-0 hover:opacity-100 
                       transition-opacity duration-300"></div>
      </Button>

      {/* Scroll to Top (appears when FAB menu is closed) */}
      {!isOpen && (
        <Button
          onClick={scrollToTop}
          className="absolute -top-20 right-0 w-12 h-12 rounded-full p-0 
                    bg-secondary border border-border shadow-lg
                    hover:scale-105 transition-all duration-200"
          data-testid="fab-scroll-top"
        >
          <ArrowUpIcon />
        </Button>
      )}
    </div>
  );
}

// Custom SVG Icons
function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4.5 16.5C4.5 16.5 5.5 15.5 8 13C10.5 10.5 13.5 8 16 5.5C18.5 3 21 1 21 1C21 1 19 3.5 16.5 6C14 8.5 11.5 11.5 9 14C6.5 16.5 5.5 17.5 5.5 17.5L4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 6L18 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 21L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7L3 11V17L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 6L12 13L22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}