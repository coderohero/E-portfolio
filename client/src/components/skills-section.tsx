import { useEffect, useRef, useState } from "react";
import SkillsRadarChart from "@/components/skills-radar-chart";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const allSkills = [
    { label: "React/Next.js", value: 95, color: "hsl(160, 75%, 50%)", category: "Frontend" },
    { label: "Three.js/WebGL", value: 92, color: "hsl(45, 90%, 60%)", category: "3D/Graphics" },
    { label: "TypeScript", value: 90, color: "hsl(175, 70%, 45%)", category: "Language" },
    { label: "Node.js", value: 88, color: "hsl(35, 85%, 55%)", category: "Backend" },
    { label: "Python", value: 85, color: "hsl(55, 85%, 65%)", category: "Language" },
    { label: "AWS/Docker", value: 85, color: "hsl(200, 75%, 55%)", category: "DevOps" },
    { label: "TensorFlow.js", value: 82, color: "hsl(300, 70%, 60%)", category: "AI/ML" },
    { label: "Environmental Data", value: 87, color: "hsl(120, 60%, 50%)", category: "Domain" },
    { label: "IoT Integration", value: 80, color: "hsl(260, 75%, 65%)", category: "Hardware" },
    { label: "UI/UX Design", value: 88, color: "hsl(15, 80%, 55%)", category: "Design" }
  ];

  const skillCategories = [
    {
      title: "Creative Technology",
      description: "Building immersive digital experiences with cutting-edge web technologies",
      icon: "fas fa-cube",
      skills: ["React/Next.js", "Three.js/WebGL", "TypeScript", "UI/UX Design"]
    },
    {
      title: "AI & Infrastructure", 
      description: "Implementing intelligent systems and scalable backend solutions",
      icon: "fas fa-brain",
      skills: ["Node.js", "Python", "AWS/Docker", "TensorFlow.js"]
    },
    {
      title: "Sustainability Focus",
      description: "Developing green tech solutions and environmental data systems",
      icon: "fas fa-leaf", 
      skills: ["Environmental Data", "IoT Integration"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 gradient-bg-secondary relative">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-20 right-20 w-20 h-20 border border-accent/20 rounded-full geometric-shape"></div>
        <div className="floating-element absolute bottom-32 left-16 w-16 h-16 bg-primary/10 rounded-lg rotate-45"></div>
        <div className="floating-element absolute top-1/2 right-1/4 w-12 h-12 border border-primary/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-skills">
            Skills & Expertise
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Radar Chart */}
            <div className="flex justify-center">
              <div className="enhanced-card bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 relative">
                <h3 className="text-2xl font-semibold text-center mb-8 gradient-text" data-testid="heading-skills-radar">
                  Technical Proficiency
                </h3>
                <SkillsRadarChart 
                  skills={allSkills} 
                  size={400} 
                  isVisible={isVisible}
                />
                
                {/* Animated skill stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card/80 rounded-lg">
                    <div className="text-2xl font-bold text-primary" data-testid="text-skills-count">
                      {isVisible ? "10+" : "0"}
                    </div>
                    <div className="text-sm text-muted-foreground">Core Skills</div>
                  </div>
                  <div className="text-center p-4 bg-card/80 rounded-lg">
                    <div className="text-2xl font-bold text-accent" data-testid="text-experience-years">
                      {isVisible ? "6+" : "0"}
                    </div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill Categories */}
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className={`enhanced-card bg-card border border-border rounded-lg p-6 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${category.icon} text-white text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2" data-testid={`heading-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {category.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3" data-testid={`text-${category.title.toLowerCase().replace(/\s+/g, '-')}-description`}>
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map(skillName => {
                          const skill = allSkills.find(s => s.label === skillName);
                          return skill ? (
                            <span 
                              key={skillName}
                              className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-xs font-medium hover:bg-secondary transition-colors"
                              style={{ borderColor: skill.color + "40" }}
                              data-testid={`skill-tag-${skillName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            >
                              {skillName} • {skill.value}%
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
