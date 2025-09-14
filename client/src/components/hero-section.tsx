import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm <span className="gradient-text">Alex Morgan</span>
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-subtitle">
                Full-Stack Developer & UI/UX Designer
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md" data-testid="text-description">
                Passionate about creating beautiful, functional digital experiences that solve real-world problems and delight users.
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
                href="https://linkedin.com/in/alexmorgan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/alexmorgan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://twitter.com/alexmorgan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a 
                href="mailto:alex.morgan@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                  alt="Alex Morgan - Professional Developer Portrait" 
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
