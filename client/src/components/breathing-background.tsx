import { useEffect, useRef } from 'react';

interface BreathingBackgroundProps {
  intensity?: 'subtle' | 'medium' | 'high';
  color?: string;
}

export default function BreathingBackground({ intensity = 'medium', color = 'hsl(160, 75%, 50%)' }: BreathingBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const intensitySettings = {
    subtle: { scale: 1.1, duration: 4000 },
    medium: { scale: 1.3, duration: 3000 },
    high: { scale: 1.5, duration: 2500 }
  };

  const settings = intensitySettings[intensity];

  useEffect(() => {
    const elements = containerRef.current?.children;
    if (!elements) return;

    Array.from(elements).forEach((element, index) => {
      const el = element as HTMLElement;
      el.style.animationDelay = `${index * 500}ms`;
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary breathing orb */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 animate-breathing-slow"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          animation: `breathing ${settings.duration}ms ease-in-out infinite alternate`
        }}
      />

      {/* Secondary breathing orb */}
      <div 
        className="absolute top-1/2 right-20 w-48 h-48 rounded-full opacity-15 animate-breathing-medium"
        style={{
          background: `radial-gradient(circle, hsl(45, 90%, 60%) 0%, transparent 70%)`,
          animation: `breathing ${settings.duration + 500}ms ease-in-out infinite alternate-reverse`
        }}
      />

      {/* Tertiary breathing orb */}
      <div 
        className="absolute bottom-32 left-1/3 w-32 h-32 rounded-full opacity-20 animate-breathing-fast"
        style={{
          background: `radial-gradient(circle, hsl(175, 70%, 45%) 0%, transparent 70%)`,
          animation: `breathing ${settings.duration - 500}ms ease-in-out infinite alternate`
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-40 right-1/3 w-16 h-16 rotate-45 opacity-5 animate-float-geometric">
        <div 
          className="w-full h-full border-2 animate-breathing-border"
          style={{ 
            borderColor: color,
            animation: `breathing-border ${settings.duration}ms ease-in-out infinite alternate, float-geometric 6s ease-in-out infinite`
          }}
        />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full opacity-10 animate-pulse-breathing">
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(35, 85%, 55%) 0%, transparent 70%)`,
            animation: `pulse-breathing ${settings.duration + 1000}ms ease-in-out infinite`
          }}
        />
      </div>
    </div>
  );
}