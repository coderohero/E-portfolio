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
              "Technology is most powerful when it serves humanity. My journey as a developer has been 
              driven by the belief that great software should not only solve problems but inspire and 
              empower people to achieve more than they thought possible."
            </blockquote>
            
            <div className="text-left space-y-6">
              <p className="leading-relaxed" data-testid="text-paragraph-1">
                Over the past five years, I've evolved from a curious computer science student to a 
                seasoned full-stack developer who thrives at the intersection of technology and human experience. 
                My passion lies in creating digital solutions that are not just functional, but truly meaningful.
              </p>
              
              <p className="leading-relaxed" data-testid="text-paragraph-2">
                What drives me most is the opportunity to work on challenging problems that have real-world impact. 
                Whether it's optimizing performance for thousands of users or designing intuitive interfaces 
                that make complex tasks simple, I approach each project with curiosity, empathy, and a 
                commitment to excellence.
              </p>
              
              <p className="leading-relaxed" data-testid="text-paragraph-3">
                Looking ahead, I'm excited about the possibilities that emerging technologies like AI and 
                machine learning bring to web development. I believe the future belongs to developers who 
                can bridge the gap between cutting-edge technology and human-centered design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
