import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add staggered animation for child elements
          const children = entry.target.querySelectorAll('[data-animate-child]');
          children.forEach((child, index) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all elements with animation attributes
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    // Parallax effect for floating elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.1 + (index % 3) * 0.05;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Update navigation progress
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          const navItem = document.querySelector(`[data-nav-section="${section.id}"]`);
          if (navItem) {
            document.querySelectorAll('[data-nav-section]').forEach(item => {
              item.classList.remove('active');
            });
            navItem.classList.add('active');
          }
        }
      });
    };

    // Mouse movement parallax for hero section
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      const parallaxElements = document.querySelectorAll('.mouse-parallax');
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 10;
        const x = xPercent * speed;
        const y = yPercent * speed;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    // Magnetic button effect
    const magneticButtons = document.querySelectorAll('.magnetic-button');
    magneticButtons.forEach((button) => {
      button.addEventListener('mouseenter', (e) => {
        (e.target as HTMLElement).classList.add('magnetic-active');
      });
      
      button.addEventListener('mouseleave', (e) => {
        (e.target as HTMLElement).classList.remove('magnetic-active');
        (e.target as HTMLElement).style.transform = '';
      });
      
      button.addEventListener('mousemove', (e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        (e.target as HTMLElement).style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial call
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component only adds behavior, no visual elements
}

// Hook for individual component animations
export function useScrollAnimation() {
  useEffect(() => {
    const element = document.currentScript?.parentElement;
    if (element) {
      element.setAttribute('data-animate', 'true');
    }
  }, []);
}