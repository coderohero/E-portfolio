import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-bold gradient-text cursor-pointer shimmer"
            onClick={() => scrollToSection("home")}
            data-testid="logo"
          >
            Jordan Rivera
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("achievements")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-achievements"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <Button
            variant="ghost"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-card border border-border rounded-lg p-4">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("achievements")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-achievements"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
