import ProjectCard3D from "@/components/project-card-3d";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Create Your Own Telegram Bot",
      description: "Interactive web application that helps users create and customize their own Telegram bots with a user-friendly interface. Features real-time bot configuration, webhook management, and comprehensive documentation for bot development.",
      images: [
        { src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Telegram Bot Interface" },
        { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Bot Configuration" },
        { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Chat Interface" }
      ],
      technologies: ["JavaScript", "React", "Node.js", "Telegram API", "Express", "Bootstrap"],
      demoUrl: "#",
      codeUrl: "https://github.com/Harsha41-dev/Create-own-telegram-bot",
      featured: true,
      stats: [
        { label: "GitHub Stars", value: "15+" },
        { label: "Forks", value: "8" },
        { label: "Tech Stack", value: "6" },
        { label: "Features", value: "10+" }
      ]
    },
    {
      title: "Algorithm Sorting Visualizer",
      description: "Interactive web-based visualization tool for popular sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. Built with React to help students understand algorithm complexity and performance through animated visualizations.",
      images: [
        { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Sorting Visualization" },
        { src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Algorithm Comparison" },
        { src: "https://images.unsplash.com/photo-1509048191080-d2e2bb6a3e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Data Structures" }
      ],
      technologies: ["JavaScript", "React", "HTML5", "CSS3", "Algorithm Analysis", "Data Visualization"],
      demoUrl: "#",
      codeUrl: "https://github.com/Harsha41-dev/algo-sorting-visualizer",
      stats: [
        { label: "Algorithms", value: "8+" },
        { label: "Visualizations", value: "Real-time" },
        { label: "Performance", value: "O(n²)" },
        { label: "Educational", value: "100%" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-bg-secondary relative">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 border border-primary/20 rounded-lg geometric-shape"></div>
        <div className="floating-element absolute bottom-32 right-20 w-12 h-12 bg-accent/10 rounded-full"></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-8 h-8 border border-accent/30 rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" data-testid="heading-projects">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Showcase of my projects in web development and algorithmic problem solving. 
            Built with modern technologies and focused on educational value and practical applications.
          </p>
          
          {/* 3D Project Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard3D
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                images={project.images}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
                featured={project.featured}
                stats={project.stats}
              />
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-projects">
                {projects.length}+
              </div>
              <div className="text-sm text-muted-foreground">Featured Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-technologies">
                25+
              </div>
              <div className="text-sm text-muted-foreground">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-users">
                100K+
              </div>
              <div className="text-sm text-muted-foreground">Users Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-awards">
                8
              </div>
              <div className="text-sm text-muted-foreground">Awards & Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}