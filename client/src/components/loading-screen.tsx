import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [showLogo, setShowLogo] = useState(false);

  const loadingStages = [
    { progress: 20, text: "Loading creative elements..." },
    { progress: 40, text: "Preparing 3D visualizations..." },
    { progress: 60, text: "Initializing interactive features..." },
    { progress: 80, text: "Optimizing user experience..." },
    { progress: 100, text: "Welcome to Jordan's Portfolio!" }
  ];

  useEffect(() => {
    setShowLogo(true);
    
    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        const stage = loadingStages[currentStage];
        setProgress(stage.progress);
        setLoadingText(stage.text);
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="tech-constellation-bg">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="loading-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Animated Logo */}
        <div className={`mb-8 transition-all duration-1000 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="relative w-24 h-24 mx-auto">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-spin"></div>
            
            {/* Inner pulsing circle */}
            <div className="absolute inset-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse flex items-center justify-center">
              <span className="text-white font-bold text-xl">JR</span>
            </div>
            
            {/* Tech elements */}
            <div className="absolute -inset-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-2xl font-bold mb-2 gradient-text">
          Jordan Rivera
        </h1>
        <p className="text-muted-foreground mb-8">
          Full-Stack Developer & Creative Technologist
        </p>

        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-muted-foreground">{loadingText}</span>
            <span className="text-sm font-medium text-primary">{progress}%</span>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center space-x-4 opacity-60">
          {['react', 'typescript', 'nodejs', 'aws'].map((tech, index) => (
            <div 
              key={tech}
              className="w-8 h-8 flex items-center justify-center transform transition-all duration-500"
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: progress > (index + 1) * 25 ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(10px)'
              }}
            >
              <i className={`fab fa-${tech} text-lg text-primary`}></i>
            </div>
          ))}
        </div>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="mt-8 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          data-testid="skip-loading"
        >
          Skip Animation
        </button>
      </div>
    </div>
  );
}