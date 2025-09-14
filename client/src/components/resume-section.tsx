import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  const handleDownloadPDF = () => {
    // In a real implementation, this would trigger a PDF download
    alert("PDF resume download would be triggered here");
  };

  const handleDownloadDOC = () => {
    // In a real implementation, this would trigger a DOC download
    alert("DOC resume download would be triggered here");
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" data-testid="heading-resume">
            Download My Resume
          </h2>
          <p className="text-muted-foreground mb-8" data-testid="text-resume-description">
            Get a comprehensive overview of my experience, skills, and achievements in a professionally formatted document.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleDownloadPDF}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
              data-testid="button-download-pdf"
            >
              <i className="fas fa-file-pdf mr-3 text-xl"></i>
              Download PDF Resume
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadDOC}
              className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:bg-secondary transition-colors flex items-center justify-center"
              data-testid="button-download-doc"
            >
              <i className="fas fa-file-word mr-3 text-xl"></i>
              Download DOC Resume
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-6" data-testid="text-resume-updated">
            Resume last updated: December 2023 | References available upon request
          </p>
        </div>
      </div>
    </section>
  );
}
