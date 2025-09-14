import { useEffect, useRef, useState } from 'react';

// Magnetic Button Effect
interface MagneticButtonProps {
  children: JSX.Element;
  className?: string;
  magnetStrength?: number;
}

export function MagneticButton({ children, className = '', magnetStrength = 20 }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    
    const maxMove = magnetStrength;
    const x = Math.max(-maxMove, Math.min(maxMove, deltaX));
    const y = Math.max(-maxMove, Math.min(maxMove, deltaY));
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

// Ripple Effect Hook
export function useRippleEffect() {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const addRipple = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const RippleContainer = ({ children, className = '' }: { children: JSX.Element; className?: string }) => (
    <div className={`relative overflow-hidden ${className}`} onClick={addRipple}>
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-ripple rounded-full bg-white/30"
          style={{
            left: ripple.x - 2,
            top: ripple.y - 2,
            width: 4,
            height: 4,
          }}
        />
      ))}
    </div>
  );

  return { addRipple, RippleContainer };
}

// Tilt Card Effect
interface TiltCardProps {
  children: JSX.Element;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = '', maxTilt = 15 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = ((e.clientY - centerY) / rect.height) * -maxTilt;
    const rotateY = ((e.clientX - centerX) / rect.width) * maxTilt;
    
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setTilt({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.1 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`transform-gpu transition-transform duration-200 ease-out perspective-1000 ${className}`}
      style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        {children}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200 rounded-inherit"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 50%)`,
          }}
        />
      </div>
    </div>
  );
}

// Particle Burst Effect
interface ParticleBurstProps {
  trigger: boolean;
  onComplete?: () => void;
  particleCount?: number;
  colors?: string[];
}

export function ParticleBurst({ trigger, onComplete, particleCount = 20, colors = ['hsl(160, 75%, 50%)', 'hsl(45, 90%, 60%)'] }: ParticleBurstProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger || !containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 rounded-full pointer-events-none';
      particle.style.background = colors[i % colors.length];
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.transform = 'translate(-50%, -50%)';
      
      const angle = (i / particleCount) * 360;
      const velocity = 100 + Math.random() * 50;
      const lifetime = 1000 + Math.random() * 500;
      
      particle.animate([
        {
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 1
        },
        {
          transform: `translate(
            calc(-50% + ${Math.cos(angle * Math.PI / 180) * velocity}px),
            calc(-50% + ${Math.sin(angle * Math.PI / 180) * velocity}px)
          ) scale(0)`,
          opacity: 0
        }
      ], {
        duration: lifetime,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }).addEventListener('finish', () => {
        particle.remove();
      });
      
      container.appendChild(particle);
      particles.push(particle);
    }

    if (onComplete) {
      setTimeout(onComplete, 1500);
    }
  }, [trigger, particleCount, colors, onComplete]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}

// Text Reveal Animation
interface TextRevealProps {
  text: string;
  className?: string;
  trigger?: boolean;
  staggerDelay?: number;
}

export function TextReveal({ text, className = '', trigger = true, staggerDelay = 50 }: TextRevealProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    setVisibleChars(0);
    const timer = setInterval(() => {
      setVisibleChars(prev => {
        if (prev >= text.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, staggerDelay);

    return () => clearInterval(timer);
  }, [trigger, text, staggerDelay]);

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${
            index < visibleChars 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}