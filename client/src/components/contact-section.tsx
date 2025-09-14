import AnimatedContactForm from "@/components/animated-contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 gradient-bg-primary relative">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full geometric-shape"></div>
        <div className="floating-element absolute bottom-32 right-16 w-16 h-16 bg-accent/10 rounded-lg rotate-45"></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-12 h-12 border border-accent/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="heading-contact">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project? I'm always excited to collaborate on innovative solutions 
              that make a positive impact. Let's connect and explore the possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">jordan@jordanrivera.dev</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-accent"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Austin, TX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Response Time</h4>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/jordanrivera" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-500/10 hover:bg-blue-500/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    data-testid="link-linkedin"
                  >
                    <i className="fab fa-linkedin text-blue-500"></i>
                  </a>
                  <a 
                    href="https://github.com/jordanrivera" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-foreground/10 hover:bg-foreground/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    data-testid="link-github"
                  >
                    <i className="fab fa-github text-foreground"></i>
                  </a>
                  <a 
                    href="https://twitter.com/jordanrivera" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400/10 hover:bg-blue-400/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    data-testid="link-twitter"
                  >
                    <i className="fab fa-twitter text-blue-400"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <AnimatedContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}