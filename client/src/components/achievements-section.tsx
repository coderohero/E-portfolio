import InteractiveTimeline from "@/components/interactive-timeline";

export default function AchievementsSection() {
  const timelineEvents = [
    {
      id: "problem-setter-2024",
      date: "2025 - Present",
      title: "Problem Setter at Gradient",
      organization: "Gradient",
      description: "Currently working as a Problem Setter, designing challenging algorithmic problems and test cases for competitive programming contests.",
      details: "Responsible for creating high-quality competitive programming problems with optimal solutions and comprehensive test cases. Focus on designing problems that test algorithmic thinking, data structures knowledge, and problem-solving skills at various difficulty levels.",
      icon: "fas fa-code",
      category: "work" as const,
      skills: ["Algorithm Design", "Problem Setting", "Competitive Programming", "C++", "Python"],
      impact: "• Designed 15+ problems for various contests\n• Problems solved by 1000+ programmers\n• Maintains optimal difficulty progression\n• Focus on educational value and fair testing",
      links: []
    },
    {
      id: "gfg-internship-2023",
      date: "2024 - 2025",
      title: "Technical Content Writer Internship",
      organization: "GeeksforGeeks (GFG)",
      description: "Worked as a Technical Content Writer, creating educational articles on algorithms, data structures, and programming concepts.",
      details: "Authored comprehensive technical articles covering competitive programming topics, algorithm explanations, and coding interview preparation materials. Contributed to the educational content that helps thousands of students learn programming effectively.",
      icon: "fas fa-pen",
      category: "work" as const,
      skills: ["Technical Writing", "Algorithms", "Data Structures", "Java", "Python", "Content Creation"],
      impact: "• Authored 25+ technical articles\n• Articles viewed by 50K+ students\n• Covered advanced algorithms and data structures\n• Recognized for quality content and clarity",
      links: [
        { label: "GeeksforGeeks Profile", url: "https://www.geeksforgeeks.org/" }
      ]
    },
    {
      id: "jee-achievement-2022",
      date: "2023",
      title: "JEE Mains Achievement",
      organization: "National Testing Agency",
      description: "Achieved All India Rank 24576 (CRL) in JEE Mains, securing admission to IIIT Sricity.",
      details: "Successfully cleared the Joint Entrance Examination (JEE) Mains with a competitive ranking, demonstrating strong problem-solving skills and mathematical aptitude. This achievement opened doors to pursuing BTech in Computer Science at IIIT Sricity.",
      icon: "fas fa-trophy",
      category: "education" as const,
      skills: ["Mathematics", "Physics", "Chemistry", "Problem Solving", "Analytical Thinking"],
      impact: "• All India Rank: 24576 (CRL)\n• Qualified for premium engineering institutions\n• Strong foundation in STEM subjects\n• Gateway to BTech in Computer Science",
      links: []
    },
    {
      id: "eamcet-achievements-2022",
      date: "2023",
      title: "EAMCET State Rankings",
      organization: "State Engineering Entrance Exams",
      description: "Secured excellent ranks in both AP EAMCET (2333) and TS EAMCET (2555) examinations.",
      details: "Achieved top rankings in both Andhra Pradesh and Telangana state engineering entrance examinations, demonstrating consistent performance across multiple competitive exams and strong preparation in core subjects.",
      icon: "fas fa-medal",
      category: "education" as const,
      skills: ["Mathematics", "Physics", "Chemistry", "Exam Strategy", "Consistency"],
      impact: "• AP EAMCET Rank: 2333\n• TS EAMCET Rank: 2555\n• Consistent performance across exams\n• Multiple admission opportunities",
      links: []
    },
    {
      id: "iiit-admission-2022",
      date: "August 2023",
      title: "Admission to IIIT Sricity",
      organization: "IIIT Sricity",
      description: "Started BTech journey at IIIT Sricity, focusing on Computer Science and competitive programming.",
      details: "Began undergraduate studies at IIIT Sricity with a focus on computer science fundamentals, algorithms, and software development. Actively participating in competitive programming and building practical projects.",
      icon: "fas fa-graduation-cap",
      category: "education" as const,
      skills: ["Computer Science", "Programming", "Algorithms", "Software Development"],
      impact: "• Currently in 3rd year of BTech\n• Strong academic foundation\n• Active in competitive programming\n• Building industry-relevant skills",
      links: [
        { label: "IIIT Sricity", url: "https://www.iiits.ac.in/" }
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
            Academic Journey & Professional Milestones
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Explore my academic and professional journey through key milestones, achievements, and experiences. 
            From competitive exams to internships and current roles in the tech industry.
          </p>
          
          <InteractiveTimeline events={timelineEvents} />

          {/* Summary Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-projects">
                13
              </div>
              <div className="text-sm text-muted-foreground">GitHub Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-contributions">
                1
              </div>
              <div className="text-sm text-muted-foreground">Articles Written</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-users">
                90K+
              </div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}