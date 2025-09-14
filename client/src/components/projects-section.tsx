import ProjectCard3D from "@/components/project-card-3d";

export default function ProjectsSection() {
  const projects = [
    {
      title: "EcoTrack - Carbon Footprint Visualizer",
      description: "Interactive 3D web application that visualizes personal and corporate carbon footprints using real-time data. Features immersive WebGL experiences and actionable sustainability insights. Built with cutting-edge web technologies to create an engaging environmental awareness platform.",
      images: [
        { src: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "EcoTrack Dashboard" },
        { src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "3D Visualization" },
        { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Data Analytics" }
      ],
      technologies: ["Next.js", "Three.js", "TypeScript", "D3.js", "AWS", "WebGL", "Framer Motion"],
      demoUrl: "https://ecotrack-demo.vercel.app",
      codeUrl: "https://github.com/jordanrivera/ecotrack",
      featured: true,
      stats: [
        { label: "Users", value: "15K+" },
        { label: "CO₂ Tracked", value: "2.3M lbs" },
        { label: "Companies", value: "120+" },
        { label: "Impact Score", value: "9.2/10" }
      ]
    },
    {
      title: "Neural Garden - AI Art Installation",
      description: "AI-powered digital art installation that generates evolving plant-like visualizations based on environmental data streams. Deployed in Austin's Contemporary Art Museum with real-time sensor integration.",
      images: [
        { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Neural Garden Installation" },
        { src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "AI Generated Art" },
        { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Interactive Display" }
      ],
      technologies: ["React", "TensorFlow.js", "WebGL", "Socket.io", "Arduino", "GLSL"],
      demoUrl: "https://neural-garden.art",
      codeUrl: "https://github.com/jordanrivera/neural-garden",
      stats: [
        { label: "Visitors", value: "50K+" },
        { label: "Art Pieces", value: "∞" },
        { label: "Sensors", value: "24" },
        { label: "Runtime", value: "24/7" }
      ]
    },
    {
      title: "SolarSync - Smart Grid Dashboard",
      description: "Real-time monitoring platform for solar panel networks with predictive analytics and automated grid optimization. Serves 500+ renewable energy installations across Texas.",
      images: [
        { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Solar Panel Monitoring" },
        { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Grid Analytics" },
        { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Energy Dashboard" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "InfluxDB", "Docker", "Redis"],
      demoUrl: "https://solarsync-platform.com",
      codeUrl: "https://github.com/jordanrivera/solarsync",
      stats: [
        { label: "Installations", value: "500+" },
        { label: "Energy Saved", value: "12 GWh" },
        { label: "Efficiency", value: "+23%" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      title: "Climate Change VR Experience",
      description: "Immersive virtual reality experience showcasing climate change impacts through interactive 3D environments. Built for educational institutions and environmental organizations.",
      images: [
        { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "VR Climate Experience" },
        { src: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Virtual Environment" }
      ],
      technologies: ["Unity", "C#", "Oculus SDK", "WebXR", "Blender"],
      demoUrl: "https://climate-vr.edu",
      codeUrl: "https://github.com/jordanrivera/climate-vr",
      stats: [
        { label: "Schools", value: "45" },
        { label: "Students", value: "8K+" },
        { label: "Scenarios", value: "12" },
        { label: "Awareness", value: "+89%" }
      ]
    },
    {
      title: "Green Tech Design System",
      description: "Comprehensive design system and component library focused on sustainability and environmental consciousness. Used by 20+ green tech startups.",
      images: [
        { src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "Design System Components" },
        { src: "https://images.unsplash.com/photo-1558618666-fbd72c0d37aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", alt: "UI Kit" }
      ],
      technologies: ["Figma", "React", "Storybook", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://greentech-ui.com",
      codeUrl: "https://github.com/jordanrivera/greentech-ui",
      stats: [
        { label: "Components", value: "120+" },
        { label: "Downloads", value: "25K+" },
        { label: "Stars", value: "1.2K" },
        { label: "Companies", value: "20+" }
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
            Interactive showcase of my latest work in sustainable technology, AI, and immersive experiences. 
            Click any card to explore details, view galleries, and see project statistics.
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