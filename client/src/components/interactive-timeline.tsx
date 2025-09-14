import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  details: string;
  image?: string;
  icon: string;
  category: 'achievement' | 'education' | 'work' | 'project' | 'award';
  links?: {
    label: string;
    url: string;
  }[];
  skills?: string[];
  impact?: string;
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
}

export default function InteractiveTimeline({ events }: InteractiveTimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All', icon: 'fas fa-stream', color: 'hsl(160, 75%, 50%)' },
    { id: 'achievement', label: 'Achievements', icon: 'fas fa-trophy', color: 'hsl(45, 90%, 60%)' },
    { id: 'work', label: 'Work', icon: 'fas fa-briefcase', color: 'hsl(175, 70%, 45%)' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap', color: 'hsl(35, 85%, 55%)' },
    { id: 'project', label: 'Projects', icon: 'fas fa-rocket', color: 'hsl(200, 75%, 55%)' }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'hsl(160, 75%, 50%)';
  };

  return (
    <div className="relative">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
              filter === category.id
                ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary'
            }`}
            data-testid={`filter-${category.id}`}
          >
            <i className={`${category.icon} text-sm`}></i>
            <span className="text-sm font-medium">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Central line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
        
        {/* Timeline Events */}
        <div className="space-y-16">
          {filteredEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            const isHovered = hoveredEvent === event.id;
            
            return (
              <div 
                key={event.id}
                className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Event Content */}
                <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <div 
                    className={`enhanced-card bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-500 ${
                      isHovered ? 'transform scale-105 shadow-xl' : ''
                    }`}
                    onClick={() => setSelectedEvent(event)}
                    data-testid={`timeline-event-${event.id}`}
                  >
                    {/* Date Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ 
                          backgroundColor: getCategoryColor(event.category) + '20',
                          borderColor: getCategoryColor(event.category) + '40',
                          color: getCategoryColor(event.category)
                        }}
                        data-testid={`event-date-${event.id}`}
                      >
                        {event.date}
                      </span>
                      <span className="text-xs text-muted-foreground capitalize">
                        {event.category}
                      </span>
                    </div>
                    
                    {/* Event Info */}
                    <h3 className="text-lg font-semibold mb-2" data-testid={`event-title-${event.id}`}>
                      {event.title}
                    </h3>
                    <p className="text-primary font-medium mb-2" data-testid={`event-org-${event.id}`}>
                      {event.organization}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2" data-testid={`event-description-${event.id}`}>
                      {event.description}
                    </p>
                    
                    {/* Skills */}
                    {event.skills && event.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-secondary/50 text-xs rounded border"
                            data-testid={`event-skill-${event.id}-${skillIndex}`}
                          >
                            {skill}
                          </span>
                        ))}
                        {event.skills.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground">
                            +{event.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Click to expand indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Click for details</span>
                      <i className="fas fa-chevron-right text-xs text-muted-foreground"></i>
                    </div>
                  </div>
                </div>

                {/* Central Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div 
                    className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-500 ${
                      isHovered ? 'scale-125 shadow-lg' : ''
                    }`}
                    style={{ 
                      backgroundColor: getCategoryColor(event.category),
                      boxShadow: isHovered ? `0 0 20px ${getCategoryColor(event.category)}40` : 'none'
                    }}
                  >
                    <i className={`${event.icon} text-white text-xl`}></i>
                  </div>
                </div>

                {/* Connector Line */}
                <div className={`w-5/12 ${isLeft ? 'pl-8' : 'pr-8'}`}>
                  <div 
                    className={`h-1 rounded-full transition-all duration-500 ${
                      isHovered ? 'opacity-80' : 'opacity-40'
                    }`}
                    style={{ backgroundColor: getCategoryColor(event.category) }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: getCategoryColor(selectedEvent.category) }}
                  >
                    <i className={`${selectedEvent.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <DialogTitle className="text-xl" data-testid="modal-title">
                      {selectedEvent.title}
                    </DialogTitle>
                    <p className="text-primary font-medium" data-testid="modal-organization">
                      {selectedEvent.organization}
                    </p>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Date and Category */}
                <div className="flex items-center justify-between">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium border"
                    style={{ 
                      backgroundColor: getCategoryColor(selectedEvent.category) + '20',
                      borderColor: getCategoryColor(selectedEvent.category) + '40',
                      color: getCategoryColor(selectedEvent.category)
                    }}
                    data-testid="modal-date"
                  >
                    {selectedEvent.date}
                  </span>
                  <span className="text-sm text-muted-foreground capitalize">
                    {selectedEvent.category}
                  </span>
                </div>

                {/* Image */}
                {selectedEvent.image && (
                  <img 
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-48 object-cover rounded-lg"
                    data-testid="modal-image"
                  />
                )}

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed" data-testid="modal-description">
                  {selectedEvent.description}
                </p>

                {/* Detailed Information */}
                <div className="bg-secondary/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Details</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="modal-details">
                    {selectedEvent.details}
                  </p>
                </div>

                {/* Impact */}
                {selectedEvent.impact && (
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-primary">Impact & Results</h4>
                    <p className="text-sm leading-relaxed" data-testid="modal-impact">
                      {selectedEvent.impact}
                    </p>
                  </div>
                )}

                {/* Skills */}
                {selectedEvent.skills && selectedEvent.skills.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-secondary/50 text-sm rounded-full border border-border"
                          data-testid={`modal-skill-${index}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {selectedEvent.links && selectedEvent.links.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Related Links</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedEvent.links.map((link, index) => (
                        <Button 
                          key={index}
                          asChild
                          variant="outline"
                          size="sm"
                          data-testid={`modal-link-${index}`}
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-external-link-alt mr-2"></i>
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}