export default function AchievementsSection() {
  const achievements = [
    {
      title: "Best Innovation Award",
      organization: "TechFlow Solutions",
      date: "December 2023",
      description: "Recognized for developing an AI-powered optimization tool that improved system performance by 45%.",
      icon: "fas fa-trophy",
      gradient: "from-primary to-accent"
    },
    {
      title: "AWS Solutions Architect",
      organization: "Amazon Web Services",
      date: "August 2023",
      description: "Professional certification in designing distributed systems on AWS platform.",
      icon: "fas fa-certificate",
      gradient: "from-accent to-primary"
    },
    {
      title: "Hackathon Winner",
      organization: "SF Tech Week",
      date: "May 2023",
      description: "First place for developing a sustainability-focused mobile application in 48 hours.",
      icon: "fas fa-medal",
      gradient: "from-primary to-accent"
    },
    {
      title: "Open Source Contributor",
      organization: "React Community",
      date: "Ongoing",
      description: "Active contributor to React ecosystem with 500+ GitHub stars across projects.",
      icon: "fas fa-star",
      gradient: "from-accent to-primary"
    },
    {
      title: "Magna Cum Laude",
      organization: "UC Berkeley",
      date: "May 2018",
      description: "Graduated with highest honors in Software Engineering program.",
      icon: "fas fa-graduation-cap",
      gradient: "from-primary to-accent"
    },
    {
      title: "Team Leadership Award",
      organization: "Digital Innovations",
      date: "November 2021",
      description: "Recognized for leading cross-functional team that delivered project 20% ahead of schedule.",
      icon: "fas fa-users",
      gradient: "from-accent to-primary"
    }
  ];

  const communityActivities = [
    {
      title: "Code for Good Volunteer",
      description: "Teaching coding to underserved communities (2020-Present)",
      icon: "fas fa-code"
    },
    {
      title: "Tech Mentorship Program",
      description: "Mentoring early-career developers (2021-Present)",
      icon: "fas fa-heart"
    },
    {
      title: "Environmental Tech Initiative",
      description: "Developing sustainability-focused applications (2022-Present)",
      icon: "fas fa-seedling"
    }
  ];

  const personalInterests = [
    {
      title: "Photography",
      description: "Nature and street photography, exhibitions in local galleries",
      icon: "fas fa-camera"
    },
    {
      title: "Hiking & Outdoor Sports",
      description: "Exploring California trails and rock climbing",
      icon: "fas fa-mountain"
    },
    {
      title: "Tech Writing",
      description: "Contributing articles on emerging web technologies",
      icon: "fas fa-book"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-achievements">
            Achievements & Awards
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${achievement.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`achievement-title-${index}`}>
                  {achievement.title}
                </h3>
                <p className="text-primary font-medium mb-2" data-testid={`achievement-org-${index}`}>
                  {achievement.organization}
                </p>
                <p className="text-sm text-muted-foreground mb-3" data-testid={`achievement-date-${index}`}>
                  {achievement.date}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed" data-testid={`achievement-description-${index}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Extracurricular & Volunteering */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center mb-12" data-testid="heading-extracurricular">
              Extracurricular & Volunteering
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 gradient-text" data-testid="heading-community">
                  Community Involvement
                </h4>
                <div className="space-y-4">
                  {communityActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <i className={`${activity.icon} text-primary mt-1`}></i>
                      <div>
                        <h5 className="font-medium" data-testid={`community-title-${index}`}>
                          {activity.title}
                        </h5>
                        <p className="text-sm text-muted-foreground" data-testid={`community-description-${index}`}>
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 gradient-text" data-testid="heading-interests">
                  Personal Interests
                </h4>
                <div className="space-y-4">
                  {personalInterests.map((interest, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <i className={`${interest.icon} text-accent mt-1`}></i>
                      <div>
                        <h5 className="font-medium" data-testid={`interest-title-${index}`}>
                          {interest.title}
                        </h5>
                        <p className="text-sm text-muted-foreground" data-testid={`interest-description-${index}`}>
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
