export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4" data-testid="footer-name">
            Jordan Rivera
          </div>
          <p className="text-muted-foreground mb-6" data-testid="footer-title">
            Creative Technologist & Full-Stack Developer
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://linkedin.com/in/jordanrivera-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://github.com/jordanrivera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://twitter.com/jordan_codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a 
              href="mailto:jordan.rivera@techstudio.dev"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p data-testid="footer-copyright">&copy; 2025 Jordan Rivera. All rights reserved.</p>
            <p className="mt-2" data-testid="footer-tagline">Built with passion and lots of coffee ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
