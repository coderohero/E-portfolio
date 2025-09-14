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
                I'm a creative technologist with 6+ years of experience building innovative digital experiences that merge cutting-edge technology with environmental consciousness. 
                Based in Austin, Texas, I specialize in interactive web applications, sustainable tech solutions, and immersive user experiences using WebGL and Three.js.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span data-testid="text-location">Austin, Texas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary"></i>
                  <span data-testid="text-email">jordan.rivera@techstudio.dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-primary"></i>
                  <span data-testid="text-phone">+1 (512) 847-9362</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-leaf text-accent"></i>
                  <span data-testid="text-specialty">Sustainable Tech Advocate</span>
                </div>
              </div>
            </div>
            
            <div className="enhanced-card bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6" data-testid="heading-education">
                Education & Certifications
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6 pulse-glow">
                  <h4 className="font-semibold text-lg" data-testid="text-masters-degree">
                    Master of Interactive Media
                  </h4>
                  <p className="text-primary" data-testid="text-masters-school">UT Austin</p>
                  <p className="text-muted-foreground" data-testid="text-masters-years">2017 - 2019</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-masters-details">
                    Focus on Creative Technology, Environmental Design, and Digital Art
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="font-semibold text-lg" data-testid="text-bachelors-degree">
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-accent" data-testid="text-bachelors-school">Texas A&M University</p>
                  <p className="text-muted-foreground" data-testid="text-bachelors-years">2013 - 2017</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-bachelors-details">
                    Summa Cum Laude, Minor in Environmental Studies
                  </p>
                </div>
                <div className="border-l-2 border-primary/60 pl-6">
                  <h4 className="font-semibold text-lg" data-testid="text-certification">
                    AWS Solutions Architect
                  </h4>
                  <p className="text-primary/80" data-testid="text-certification-org">Amazon Web Services</p>
                  <p className="text-muted-foreground" data-testid="text-certification-year">2023 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
