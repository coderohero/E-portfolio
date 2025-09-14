import { useEffect, useState, useRef } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export default function GlitchTextEffect({ text, className = '', trigger = false, intensity = 'medium' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout>();

  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
  
  const intensitySettings = {
    low: { duration: 150, frequency: 8, chaos: 0.1 },
    medium: { duration: 300, frequency: 12, chaos: 0.2 },
    high: { duration: 500, frequency: 20, chaos: 0.3 }
  };

  const settings = intensitySettings[intensity];

  useEffect(() => {
    if (trigger && !isGlitching) {
      startGlitch();
    }
  }, [trigger]);

  const startGlitch = () => {
    setIsGlitching(true);
    let glitchCount = 0;
    const maxGlitches = settings.frequency;

    intervalRef.current = setInterval(() => {
      if (glitchCount >= maxGlitches) {
        setGlitchText(text);
        setIsGlitching(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        return;
      }

      // Create glitched version
      const glitched = text
        .split('')
        .map(char => {
          if (Math.random() < settings.chaos) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join('');

      setGlitchText(glitched);
      glitchCount++;
    }, settings.duration / settings.frequency);
  };

  const triggerGlitch = () => {
    if (!isGlitching) {
      startGlitch();
    }
  };

  return (
    <span
      className={`
        ${className} 
        ${isGlitching ? 'animate-pulse' : ''}
        transition-all duration-100 cursor-pointer select-none
      `}
      onClick={triggerGlitch}
      style={{
        textShadow: isGlitching 
          ? '0.05em 0 0 hsl(160, 75%, 50%), -0.05em -0.025em 0 hsl(45, 90%, 60%), 0.025em 0.05em 0 hsl(35, 85%, 55%)'
          : 'none',
        animation: isGlitching ? 'glitch-skew 0.15s infinite linear alternate-reverse' : 'none'
      }}
      data-text={text}
    >
      {glitchText}
    </span>
  );
}