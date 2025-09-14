export default function ExperienceSection() {
  const experiences = [
    {
      period: "2024 - Present",
      title: "Problem Setter",
      company: "Gradient",
      description: "Creating challenging algorithmic problems and test cases for competitive programming contests. Designing problem statements with optimal solutions and ensuring fair difficulty progression.",
      technologies: ["C++", "Python", "Algorithms", "Problem Design"],
      color: "primary",
      alignment: "left"
    },
    {
      period: "2023 - 2024",
      title: "Technical Content Writer",
      company: "GeeksforGeeks (GFG)",
      description: "Authored comprehensive technical articles on algorithms, data structures, and programming concepts. Created educational content for competitive programming and software development topics, helping thousands of students learn effectively.",
      technologies: ["Technical Writing", "Algorithms", "Java", "Python"],
      color: "accent",
      alignment: "right"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-experience">
            Experience & Roles
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  {exp.alignment === "left" ? (
                    <>
                      <div className="timeline-item relative pl-12 md:pl-0 md:w-1/2 md:pr-8 md:text-right">
                        <div className="bg-card border border-border rounded-lg p-6">
                          <div className={`text-sm text-${exp.color} font-medium mb-2`} data-testid={`exp-period-${index}`}>
                            {exp.period}
                          </div>
                          <h3 className="text-xl font-semibold mb-2" data-testid={`exp-title-${index}`}>
                            {exp.title}
                          </h3>
                          <p className={`text-${exp.color === 'primary' ? 'accent' : 'accent'} font-medium mb-3`} data-testid={`exp-company-${index}`}>
                            {exp.company}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`exp-description-${index}`}>
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                            {exp.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className={`px-3 py-1 bg-${exp.color}/20 text-${exp.color} text-xs rounded-full`}
                                data-testid={`exp-tech-${index}-${techIndex}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block w-1/2"></div>
                      <div className="timeline-item relative pl-12 md:pl-8 md:w-1/2">
                        <div className="bg-card border border-border rounded-lg p-6">
                          <div className={`text-sm text-${exp.color} font-medium mb-2`} data-testid={`exp-period-${index}`}>
                            {exp.period}
                          </div>
                          <h3 className="text-xl font-semibold mb-2" data-testid={`exp-title-${index}`}>
                            {exp.title}
                          </h3>
                          <p className={`text-${exp.color === 'primary' ? 'accent' : 'accent'} font-medium mb-3`} data-testid={`exp-company-${index}`}>
                            {exp.company}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`exp-description-${index}`}>
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className={`px-3 py-1 bg-${exp.color}/20 text-${exp.color} text-xs rounded-full`}
                                data-testid={`exp-tech-${index}-${techIndex}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
