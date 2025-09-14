import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (savedTheme === 'system' && prefersDark);
    
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'theme-ripple';
    document.body.appendChild(ripple);
    
    // Toggle theme after animation starts
    setTimeout(() => {
      setIsDark(!isDark);
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    }, 300);
    
    // Clean up animation
    setTimeout(() => {
      setIsAnimating(false);
      if (document.body.contains(ripple)) {
        document.body.removeChild(ripple);
      }
    }, 800);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="sm"
        className={`
          relative overflow-hidden transition-all duration-500 
          ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}
          ${isAnimating ? 'scale-110' : 'hover:scale-105'}
          shadow-lg backdrop-blur-sm
        `}
        data-testid="theme-toggle"
      >
        <div className="relative z-10 flex items-center space-x-2">
          <div className={`transition-transform duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}>
            {isDark ? (
              <i className="fas fa-moon text-blue-400"></i>
            ) : (
              <i className="fas fa-sun text-yellow-500"></i>
            )}
          </div>
          <span className="text-sm font-medium">
            {isDark ? 'Dark' : 'Light'}
          </span>
        </div>
        
        {/* Animated background */}
        <div className={`
          absolute inset-0 transition-transform duration-700 ease-out
          ${isDark 
            ? 'bg-gradient-to-r from-blue-900 to-purple-900 translate-x-0' 
            : 'bg-gradient-to-r from-yellow-200 to-orange-200 -translate-x-full'
          }
        `} />
      </Button>
    </div>
  );
}