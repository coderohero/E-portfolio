import InteractiveTimeline from "@/components/interactive-timeline";

export default function AchievementsSection() {
  const timelineEvents = [
    {
      id: "innovation-award-2023",
      date: "December 2023",
      title: "Best Innovation Award",
      organization: "TechFlow Solutions",
      description: "Recognized for developing an AI-powered optimization tool that improved system performance by 45%.",
      details: "Led a team of 5 engineers to develop a revolutionary AI optimization system that leveraged machine learning algorithms to analyze and optimize database queries in real-time. The solution was implemented across 15+ enterprise clients, resulting in significant performance improvements and cost savings.",
      icon: "fas fa-trophy",
      category: "achievement" as const,
      skills: ["Machine Learning", "Python", "TensorFlow", "Database Optimization", "Team Leadership"],
      impact: "• Improved system performance by 45% across all implementations\n• Reduced server costs by $2.3M annually for client base\n• Featured in TechCrunch and received industry recognition",
      links: [
        { label: "TechCrunch Article", url: "https://techcrunch.com/innovation-award" },
        { label: "Case Study", url: "https://techflow.com/case-study" }
      ]
    },
    {
      id: "aws-certification-2023",
      date: "August 2023", 
      title: "AWS Solutions Architect Professional",
      organization: "Amazon Web Services",
      description: "Advanced certification in designing distributed systems and enterprise architectures on AWS platform.",
      details: "Achieved the highest level AWS certification, demonstrating expertise in designing and deploying dynamically scalable, highly available, fault-tolerant, and reliable applications on AWS. This certification validates deep technical skills and experience in cloud architecture design.",
      icon: "fas fa-certificate",
      category: "education" as const,
      skills: ["AWS", "Cloud Architecture", "Microservices", "DevOps", "Security"],
      impact: "Enabled design and implementation of cloud solutions serving 500K+ users with 99.99% uptime",
      links: [
        { label: "Credential Verification", url: "https://aws.amazon.com/verification" }
      ]
    },
    {
      id: "sf-hackathon-2023",
      date: "May 2023",
      title: "SF Tech Week Hackathon Winner",
      organization: "SF Tech Week",
      description: "First place for developing 'GreenPath' - a sustainability-focused mobile application in 48 hours.",
      details: "Led a team to create GreenPath, an AI-powered app that helps users reduce their carbon footprint through personalized recommendations. The app uses machine learning to analyze user behavior and suggests eco-friendly alternatives for daily activities.",
      icon: "fas fa-medal",
      category: "achievement" as const,
      skills: ["React Native", "Node.js", "AI/ML", "Rapid Prototyping", "Team Leadership"],
      impact: "• $50K prize money\n• Featured in 5+ tech publications\n• 10K+ downloads in beta phase\n• Interest from 3 major VCs",
      links: [
        { label: "Project Demo", url: "https://greenpath-app.com" },
        { label: "GitHub Repository", url: "https://github.com/jordanrivera/greenpath" }
      ]
    },
    {
      id: "ecotrack-launch-2023",
      date: "March 2023",
      title: "EcoTrack Product Launch",
      organization: "Independent Project",
      description: "Successfully launched EcoTrack, serving 15K+ users tracking 2.3M lbs of CO₂.",
      details: "Single-handedly designed and developed EcoTrack from concept to production. The platform combines cutting-edge WebGL visualizations with real-time environmental data to create an engaging carbon footprint tracking experience.",
      icon: "fas fa-rocket",
      category: "project" as const,
      skills: ["Three.js", "Next.js", "TypeScript", "D3.js", "AWS", "Product Management"],
      impact: "• 15K+ active users\n• 2.3M lbs CO₂ tracked and reduced\n• 120+ companies using the platform\n• 4.8/5 user satisfaction rating",
      links: [
        { label: "Live Platform", url: "https://ecotrack-demo.vercel.app" },
        { label: "Technical Blog", url: "https://jordanrivera.dev/ecotrack-technical-deep-dive" }
      ]
    },
    {
      id: "neural-garden-2022",
      date: "September 2022",
      title: "Neural Garden Exhibition",
      organization: "Austin Contemporary Art Museum",
      description: "AI art installation featured in museum with 50K+ visitors experiencing the interactive display.",
      details: "Created an immersive AI-powered art installation that generates evolving plant-like visualizations based on real-time environmental data. The installation uses computer vision and machine learning to create unique art pieces that respond to visitor movement and environmental changes.",
      icon: "fas fa-palette",
      category: "project" as const,
      skills: ["TensorFlow.js", "WebGL", "Computer Vision", "Arduino", "Creative Coding"],
      impact: "• 50K+ museum visitors\n• Featured in Artforum and Wired magazines\n• Acquired by private collector for permanent installation",
      links: [
        { label: "Museum Page", url: "https://austinmuseum.org/neural-garden" },
        { label: "Artist Statement", url: "https://jordanrivera.dev/neural-garden" }
      ]
    },
    {
      id: "team-leadership-2021",
      date: "November 2021",
      title: "Outstanding Team Leadership Award",
      organization: "Digital Innovations Inc.",
      description: "Led cross-functional team of 12 members to deliver enterprise project 20% ahead of schedule.",
      details: "Managed a complex enterprise migration project involving frontend redesign, backend modernization, and DevOps improvements. Successfully coordinated between design, development, QA, and stakeholder teams while maintaining high code quality standards.",
      icon: "fas fa-users",
      category: "work" as const,
      skills: ["Team Leadership", "Project Management", "Agile", "Cross-functional Collaboration"],
      impact: "• Project delivered 6 weeks early\n• 40% improvement in team productivity\n• Zero critical bugs in production\n• $500K cost savings for the company",
      links: [
        { label: "Company Blog", url: "https://digitalinnovations.com/team-excellence" }
      ]
    },
    {
      id: "opensource-milestone-2021",
      date: "June 2021",
      title: "Open Source Milestone",
      organization: "React & Vue Communities",
      description: "Achieved 1K+ GitHub stars across open source projects and became core contributor to major libraries.",
      details: "Developed and maintained several popular open source libraries including react-three-fiber extensions and vue-sustainability-toolkit. Regular contributor to React Three Fiber, with multiple merged PRs improving performance and developer experience.",
      icon: "fas fa-star",
      category: "achievement" as const,
      skills: ["React", "Vue.js", "Three.js", "Open Source", "Community Building"],
      impact: "• 1.2K GitHub stars across projects\n• 50K+ weekly downloads\n• 200+ contributors engaged\n• Adopted by companies like Netflix and Spotify",
      links: [
        { label: "GitHub Profile", url: "https://github.com/jordanrivera" },
        { label: "NPM Packages", url: "https://npmjs.com/~jordanrivera" }
      ]
    },
    {
      id: "masters-graduation-2019",
      date: "May 2019",
      title: "Master of Interactive Media",
      organization: "UT Austin",
      description: "Graduated with highest honors, focusing on Creative Technology and Environmental Design.",
      details: "Completed advanced coursework in creative technology, environmental design, and digital art. Master's thesis explored the intersection of technology and environmental consciousness, laying the foundation for future sustainability-focused projects.",
      icon: "fas fa-graduation-cap",
      category: "education" as const,
      skills: ["Creative Technology", "Environmental Design", "Digital Art", "Research", "Academic Writing"],
      impact: "• Summa Cum Laude honors\n• Outstanding Thesis Award\n• Teaching Assistant for 3 courses\n• Published 2 research papers",
      links: [
        { label: "Thesis Abstract", url: "https://utexas.edu/thesis/interactive-environmental-media" }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 gradient-bg-primary relative">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-20 right-10 w-20 h-20 border border-accent/20 rounded-full geometric-shape"></div>
        <div className="floating-element absolute bottom-32 left-16 w-16 h-16 bg-primary/10 rounded-lg rotate-45"></div>
        <div className="floating-element absolute top-1/2 right-1/4 w-12 h-12 border border-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" data-testid="heading-achievements">
            Career Timeline & Achievements
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Explore my professional journey through major milestones, achievements, and impactful projects. 
            Click on any milestone to dive deeper into the details and impact.
          </p>
          
          <InteractiveTimeline events={timelineEvents} />

          {/* Summary Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-awards">
                8+
              </div>
              <div className="text-sm text-muted-foreground">Awards & Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-projects">
                15+
              </div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-contributions">
                1.2K+
              </div>
              <div className="text-sm text-muted-foreground">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-users">
                100K+
              </div>
              <div className="text-sm text-muted-foreground">Users Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}