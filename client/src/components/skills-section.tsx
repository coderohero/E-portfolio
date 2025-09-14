import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  gradient: string;
}

function SkillBar({ skill, percentage, gradient }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium" data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
          {skill}
        </span>
        <span className="text-sm text-muted-foreground" data-testid={`skill-percentage-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={`skill-bar ${gradient} h-2 rounded-full`}
          style={{ width: `${width}%` }}
          data-testid={`skill-bar-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
        ></div>
      </div>
    </div>
  );
}

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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const frontendSkills = [
    { skill: "React/Next.js", percentage: 95 },
    { skill: "TypeScript", percentage: 90 },
    { skill: "CSS/Tailwind", percentage: 88 },
  ];

  const backendSkills = [
    { skill: "Node.js/Express", percentage: 92 },
    { skill: "Python/Django", percentage: 85 },
    { skill: "PostgreSQL", percentage: 80 },
  ];

  const designSkills = [
    { skill: "UI/UX Design", percentage: 87 },
    { skill: "Figma/Adobe XD", percentage: 82 },
    { skill: "AWS/Docker", percentage: 75 },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-skills">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-center mb-6">
                <i className="fas fa-code text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-semibold" data-testid="heading-frontend-skills">
                  Frontend Development
                </h3>
              </div>
              <div className="space-y-4">
                {isVisible && frontendSkills.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    skill={skill.skill}
                    percentage={skill.percentage}
                    gradient="bg-gradient-to-r from-primary to-accent"
                  />
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-center mb-6">
                <i className="fas fa-server text-4xl text-accent mb-4"></i>
                <h3 className="text-xl font-semibold" data-testid="heading-backend-skills">
                  Backend Development
                </h3>
              </div>
              <div className="space-y-4">
                {isVisible && backendSkills.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    skill={skill.skill}
                    percentage={skill.percentage}
                    gradient="bg-gradient-to-r from-accent to-primary"
                  />
                ))}
              </div>
            </div>

            {/* Design Skills */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-center mb-6">
                <i className="fas fa-palette text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-semibold" data-testid="heading-design-skills">
                  Design & Tools
                </h3>
              </div>
              <div className="space-y-4">
                {isVisible && designSkills.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    skill={skill.skill}
                    percentage={skill.percentage}
                    gradient="bg-gradient-to-r from-primary to-accent"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
