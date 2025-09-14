export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Analytics Platform",
      description: "Comprehensive dashboard for tracking sales, inventory, and customer analytics with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "D3.js", "Node.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Social Media Mobile App",
      description: "Native mobile application with real-time messaging, story features, and content sharing capabilities.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "Redux"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "AI-Powered Task Manager",
      description: "Intelligent task management system with AI-driven priority suggestions and productivity insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "OpenAI", "Prisma"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const workSamples = [
    {
      title: "Banking App UI",
      subtitle: "Mobile Interface Design",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Brand Identity",
      subtitle: "Logo & Visual System",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Code Architecture",
      subtitle: "Clean Code Patterns",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "UX Research",
      subtitle: "User Journey Mapping",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-projects">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card bg-card border border-border rounded-lg overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`project-image-${index}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoUrl}
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid={`project-demo-${index}`}
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>
                      Live Demo
                    </a>
                    <a 
                      href={project.codeUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`project-code-${index}`}
                    >
                      <i className="fab fa-github mr-1"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Work Samples Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center mb-12" data-testid="heading-work-samples">
              Work Samples & Designs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workSamples.map((sample, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:scale-105 transition-transform"
                  data-testid={`work-sample-${index}`}
                >
                  <img 
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-32 object-cover rounded mb-3"
                    data-testid={`work-sample-image-${index}`}
                  />
                  <h4 className="font-medium text-sm" data-testid={`work-sample-title-${index}`}>
                    {sample.title}
                  </h4>
                  <p className="text-xs text-muted-foreground" data-testid={`work-sample-subtitle-${index}`}>
                    {sample.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
