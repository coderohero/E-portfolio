export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4" data-testid="footer-name">
            Ponnuru Saiharsha
          </div>
          <p className="text-muted-foreground mb-6" data-testid="footer-title">
            Competitive Programmer & Web Developer
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://linkedin.com/in/sai-harsha-p-2685892a4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://github.com/Harsha41-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://github.com/harsha-01408" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github-alt"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="mailto:ponnurusaiharsha@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p data-testid="footer-copyright">&copy; 2025 Ponnuru Saiharsha. All rights reserved.</p>
            <p className="mt-2" data-testid="footer-tagline">Work hard and chill 🚀</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
