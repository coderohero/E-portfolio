export default function PersonalStatementSection() {
  return (
    <section id="statement" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" data-testid="heading-statement">
            Personal Statement & Reflections
          </h2>
          
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <blockquote className="text-lg md:text-xl leading-relaxed text-muted-foreground italic mb-8" data-testid="quote-main">
              "Work hard and chill. My journey as a student and developer is driven by the passion for 
              competitive programming and creating innovative solutions. Every algorithm mastered and 
              every project built brings me closer to my goal of making a meaningful impact in tech."
            </blockquote>
            
            <div className="text-left space-y-6">
              <p className="leading-relaxed" data-testid="text-paragraph-1">
                As a third-year BTech student at IIIT Sricity, I've evolved from someone fascinated by algorithms to a 
                competitive programmer and web developer who thrives on solving complex problems. 
                My passion lies in the elegance of efficient algorithms and creating web applications that combine functionality with great user experience.
              </p>
              
              <p className="leading-relaxed" data-testid="text-paragraph-2">
                What drives me most is the thrill of competitive programming and the satisfaction of building practical applications. 
                Whether it's designing algorithmic solutions for contest problems or creating interactive web tools like my Telegram bot creator 
                and sorting algorithm visualizer, I approach each challenge with analytical thinking and creative problem-solving.
              </p>
              
              <p className="leading-relaxed" data-testid="text-paragraph-3">
                Looking ahead, I'm excited about expanding my skills in advanced algorithms, system design, and modern web technologies. 
                My experience as a Problem Setter at Gradient and Technical Content Writer at GeeksforGeeks has taught me the value of 
                clear communication and educational content. I believe the future belongs to developers who can combine strong algorithmic foundations with practical development skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
