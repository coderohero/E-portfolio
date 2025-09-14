export default function AboutSection() {
  return (
    <section id="about" className="py-20 gradient-bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-about">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold gradient-text" data-testid="heading-personal-info">
                Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio">
                I'm a passionate BTech student at IIIT Sricity with a strong focus on competitive programming and web development. 
                Based in Sricity, Andhra Pradesh, I specialize in algorithm design, problem-solving, and building interactive web applications using modern technologies like React and JavaScript.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span data-testid="text-location">Sricity, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary"></i>
                  <span data-testid="text-email">ponnurusaiharsha@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-graduation-cap text-primary"></i>
                  <span data-testid="text-education">BTech Student at IIIT Sricity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-code text-accent"></i>
                  <span data-testid="text-specialty">Competitive Programming Enthusiast</span>
                </div>
              </div>
            </div>
            
            <div className="enhanced-card bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6" data-testid="heading-education">
                Education & Certifications
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6 pulse-glow">
                  <h4 className="font-semibold text-lg" data-testid="text-btech-degree">
                    Bachelor of Technology (BTech)
                  </h4>
                  <p className="text-primary" data-testid="text-btech-school">IIIT Sricity</p>
                  <p className="text-muted-foreground" data-testid="text-btech-years">2022 - 2026 (3rd Year)</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-btech-details">
                    Focus on Computer Science, Algorithms, and Software Engineering
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="font-semibold text-lg" data-testid="text-achievements-header">
                    Academic Achievements
                  </h4>
                  <p className="text-accent" data-testid="text-jee-rank">JEE Mains: 24576 CRL</p>
                  <p className="text-muted-foreground" data-testid="text-eamcet-ranks">AP EAMCET: 2333, TS EAMCET: 2555</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-achievements-details">
                    Competitive entrance exam rankings for engineering admissions
                  </p>
                </div>
                <div className="border-l-2 border-primary/60 pl-6">
                  <h4 className="font-semibold text-lg" data-testid="text-internship">
                    GeeksforGeeks Intern
                  </h4>
                  <p className="text-primary/80" data-testid="text-internship-org">GeeksforGeeks</p>
                  <p className="text-muted-foreground" data-testid="text-internship-role">Technical Content Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
