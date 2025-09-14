export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
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
                I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that matter. 
                Based in San Francisco, I specialize in modern web technologies and user-centered design.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span data-testid="text-location">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary"></i>
                  <span data-testid="text-email">alex.morgan@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-primary"></i>
                  <span data-testid="text-phone">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6" data-testid="heading-education">
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-semibold text-lg" data-testid="text-masters-degree">
                    Master of Computer Science
                  </h4>
                  <p className="text-primary" data-testid="text-masters-school">Stanford University</p>
                  <p className="text-muted-foreground" data-testid="text-masters-years">2018 - 2020</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-masters-details">
                    Specialized in Human-Computer Interaction and Software Engineering
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="font-semibold text-lg" data-testid="text-bachelors-degree">
                    Bachelor of Software Engineering
                  </h4>
                  <p className="text-accent" data-testid="text-bachelors-school">UC Berkeley</p>
                  <p className="text-muted-foreground" data-testid="text-bachelors-years">2014 - 2018</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-bachelors-details">
                    Magna Cum Laude, Dean's List
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
