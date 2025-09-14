export default function ExperienceSection() {
  const experiences = [
    {
      period: "2022 - Present",
      title: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      description: "Lead development of enterprise SaaS applications serving 10k+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS"],
      color: "primary",
      alignment: "left"
    },
    {
      period: "2020 - 2022",
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      description: "Developed responsive web applications and improved user experience metrics by 40%. Collaborated with design teams to implement pixel-perfect interfaces.",
      technologies: ["Vue.js", "TypeScript", "Figma"],
      color: "accent",
      alignment: "right"
    },
    {
      period: "2018 - 2020",
      title: "Junior Web Developer",
      company: "StartupLab",
      description: "Built and maintained multiple client websites and web applications. Gained experience in full-stack development and agile methodologies.",
      technologies: ["JavaScript", "PHP", "MySQL"],
      color: "primary",
      alignment: "left"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-experience">
            Work Experience
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
