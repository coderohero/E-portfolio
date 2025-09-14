import { useRef, useState } from 'react';

interface HolographicCardProps {
  children: JSX.Element;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'high';
  tiltEnabled?: boolean;
}

export default function HolographicCard({ 
  children, 
  className = '', 
  intensity = 'medium',
  tiltEnabled = true 
}: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);

  const intensitySettings = {
    subtle: { maxTilt: 5, glareOpacity: 0.1 },
    medium: { maxTilt: 10, glareOpacity: 0.2 },
    high: { maxTilt: 15, glareOpacity: 0.3 }
  };

  const settings = intensitySettings[intensity];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tiltEnabled) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotY = (mouseX / rect.width) * settings.maxTilt * 2;
    const rotX = -(mouseY / rect.height) * settings.maxTilt * 2;
    
    const glareXPos = ((e.clientX - rect.left) / rect.width) * 100;
    const glareYPos = ((e.clientY - rect.top) / rect.height) * 100;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlareX(glareXPos);
    setGlareY(glareYPos);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative transform-gpu transition-all duration-300 ease-out perspective-1000
        ${className}
      `}
      style={{
        transform: tiltEnabled 
          ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`
          : isHovered ? 'scale(1.02)' : 'scale(1)',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main card content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Holographic overlay */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(circle at ${glareX}% ${glareY}%, 
              rgba(255, 255, 255, ${isHovered ? settings.glareOpacity : 0}) 0%, 
              transparent 50%),
            linear-gradient(135deg, 
              hsla(160, 75%, 50%, ${isHovered ? 0.1 : 0}) 0%,
              hsla(45, 90%, 60%, ${isHovered ? 0.1 : 0}) 25%,
              hsla(175, 70%, 45%, ${isHovered ? 0.1 : 0}) 50%,
              hsla(35, 85%, 55%, ${isHovered ? 0.1 : 0}) 75%,
              hsla(160, 75%, 50%, ${isHovered ? 0.1 : 0}) 100%)
          `,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Glare effect */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-200"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, 
                       rgba(255, 255, 255, ${isHovered ? 0.3 : 0}) 0%, 
                       rgba(255, 255, 255, ${isHovered ? 0.1 : 0}) 30%, 
                       transparent 60%)`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Edge glow */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300"
        style={{
          boxShadow: isHovered 
            ? `0 0 20px hsla(160, 75%, 50%, 0.3), 
               0 0 40px hsla(45, 90%, 60%, 0.2), 
               0 0 60px hsla(175, 70%, 45%, 0.1)`
            : 'none'
        }}
      />

      {/* Rainbow border effect */}
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300"
        style={{
          background: isHovered 
            ? `conic-gradient(from ${(glareX + glareY) * 2}deg at ${glareX}% ${glareY}%,
               hsl(160, 75%, 50%) 0deg,
               hsl(45, 90%, 60%) 60deg,
               hsl(175, 70%, 45%) 120deg,
               hsl(35, 85%, 55%) 180deg,
               hsl(200, 75%, 55%) 240deg,
               hsl(160, 75%, 50%) 300deg,
               hsl(160, 75%, 50%) 360deg)`
            : 'none',
          opacity: isHovered ? 0.4 : 0,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          padding: '2px'
        }}
      />

      {/* Floating particles effect */}
      {isHovered && (
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute pointer-events-none animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            >
              <div 
                className="w-1 h-1 rounded-full"
                style={{
                  background: i % 2 === 0 ? 'hsl(160, 75%, 50%)' : 'hsl(45, 90%, 60%)',
                  boxShadow: `0 0 10px currentColor`
                }}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}