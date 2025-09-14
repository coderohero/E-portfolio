import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Project3DCardProps {
  title: string;
  description: string;
  technologies: string[];
  images: ProjectImage[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function ProjectCard3D({ 
  title, 
  description, 
  technologies, 
  images, 
  demoUrl, 
  codeUrl, 
  featured = false,
  stats = []
}: Project3DCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div 
      className={`relative w-full h-96 perspective-1000 ${featured ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`project-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className={`w-full h-full bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
            isHovered ? 'transform scale-105 shadow-primary/20' : ''
          }`}>
            {/* Image Gallery */}
            <div className="relative h-48 overflow-hidden group">
              <img 
                src={images[currentImageIndex]?.src || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"}
                alt={images[currentImageIndex]?.alt || title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-testid={`project-image-${currentImageIndex}`}
              />
              
              {/* Image overlay with navigation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageNavigation('prev');
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      data-testid="image-nav-prev"
                    >
                      <i className="fas fa-chevron-left text-sm"></i>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageNavigation('next');
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      data-testid="image-nav-next"
                    >
                      <i className="fas fa-chevron-right text-sm"></i>
                    </button>
                  </>
                )}
              </div>
              
              {/* Image indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      data-testid={`image-indicator-${index}`}
                    />
                  ))}
                </div>
              )}
              
              {/* Featured badge */}
              {featured && (
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 line-clamp-2" data-testid="project-title">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3" data-testid="project-description">
                {description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.slice(0, 4).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    data-testid={`tech-${tech.toLowerCase()}`}
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 4 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    +{technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Flip indicator */}
              <div className="flex items-center justify-center">
                <div className="text-xs text-muted-foreground flex items-center space-x-1">
                  <i className="fas fa-sync-alt"></i>
                  <span>Click to flip</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-card border border-border rounded-xl overflow-hidden shadow-lg p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold" data-testid="project-title-back">
                {title}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
                data-testid="flip-back-button"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>
            
            {/* Full description */}
            <p className="text-muted-foreground text-sm mb-6 flex-1" data-testid="project-description-full">
              {description}
            </p>
            
            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-secondary/50 rounded-lg">
                    <div className="text-lg font-bold text-primary" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* All technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                    data-testid={`tech-full-${tech.toLowerCase()}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex space-x-3">
              {demoUrl && (
                <Button 
                  asChild
                  className="flex-1 bg-primary hover:bg-primary/90"
                  data-testid="demo-link"
                >
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </a>
                </Button>
              )}
              {codeUrl && (
                <Button 
                  asChild
                  variant="outline"
                  className="flex-1"
                  data-testid="code-link"
                >
                  <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github mr-2"></i>
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}