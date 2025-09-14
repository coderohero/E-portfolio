import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Jordan Rivera";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a file download
    alert("Resume download would be triggered here");
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg geometric-shape"></div>
        <div className="floating-element absolute top-40 right-20 w-12 h-12 bg-accent/20 rounded-full"></div>
        <div className="floating-element absolute bottom-32 left-20 w-16 h-16 border border-accent/40 rotate-45"></div>
        <div className="floating-element absolute bottom-20 right-32 w-8 h-8 bg-primary/30 rounded-full"></div>
        <div className="floating-element absolute top-1/2 left-1/3 w-6 h-6 border border-primary/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm <span className="gradient-text">{displayText}</span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-subtitle">
                Creative Technologist & Full-Stack Developer
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md" data-testid="text-description">
                Crafting innovative digital experiences that merge cutting-edge technology with sustainable design principles. Specializing in interactive web applications and environmental tech solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-download-resume"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToProjects}
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/in/jordanrivera-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 pulse-glow"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/jordanrivera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 pulse-glow"
                data-testid="link-github"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://twitter.com/jordan_codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 pulse-glow"
                data-testid="link-twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a 
                href="mailto:jordan.rivera@techstudio.dev"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 pulse-glow"
                data-testid="link-email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a 
                href="https://dribbble.com/jordanrivera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 pulse-glow"
                data-testid="link-dribbble"
              >
                <i className="fab fa-dribbble text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 pulse-glow">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800" 
                  alt="Jordan Rivera - Creative Technologist Portrait" 
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              <div className="floating-element absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-full opacity-70"></div>
              <div className="floating-element absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full opacity-60"></div>
              <div className="floating-element absolute top-10 -left-10 w-12 h-12 border-2 border-primary/40 rounded-lg rotate-45"></div>
              <div className="floating-element absolute -bottom-2 right-10 w-8 h-8 bg-accent/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
