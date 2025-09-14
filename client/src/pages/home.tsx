import { useState } from "react";
import SidebarNavigation from "@/components/sidebar-navigation";
import TechConstellation from "@/components/tech-constellation";
import ThemeToggle from "@/components/theme-toggle";
import LoadingScreen from "@/components/loading-screen";
import ScrollAnimations from "@/components/scroll-animations";
import MatrixRainEffect from "@/components/matrix-rain-effect";
import CursorTrailEffect from "@/components/cursor-trail-effect";
import TerminalIntroAnimation from "@/components/terminal-intro-animation";
import FloatingActionButton from "@/components/floating-action-button";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import CodeShowcase from "@/components/code-showcase";
import PersonalStatementSection from "@/components/personal-statement-section";
import ResumeSection from "@/components/resume-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const sections = [
  { id: "home", label: "Home", icon: "fas fa-home" },
  { id: "about", label: "About", icon: "fas fa-user" },
  { id: "skills", label: "Skills", icon: "fas fa-code" },
  { id: "experience", label: "Experience", icon: "fas fa-briefcase" },
  { id: "projects", label: "Projects", icon: "fas fa-rocket" },
  { id: "achievements", label: "Achievements", icon: "fas fa-trophy" },
  { id: "code", label: "Code", icon: "fas fa-terminal" },
  { id: "personal-statement", label: "Statement", icon: "fas fa-quote-left" },
  { id: "resume", label: "Resume", icon: "fas fa-file-alt" },
  { id: "contact", label: "Contact", icon: "fas fa-envelope" }
];

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setShowTerminal(true);
  };

  const handleTerminalComplete = () => {
    setShowTerminal(false);
    setShowMainContent(true);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (showTerminal) {
    return <TerminalIntroAnimation onComplete={handleTerminalComplete} />;
  }

  if (!showMainContent) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Matrix Rain Background */}
      <MatrixRainEffect opacity={0.12} speed={60} density={0.6} />
      
      {/* Cursor Trail Effect */}
      <CursorTrailEffect />
      
      {/* Tech Constellation Background */}
      <TechConstellation />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Scroll Animations Controller */}
      <ScrollAnimations />
      
      {/* Floating Action Button */}
      <FloatingActionButton />
      
      {/* Sidebar Navigation */}
      <SidebarNavigation sections={sections} />
      
      {/* Main Content with left margin for sidebar */}
      <div className="ml-0 lg:ml-24 relative z-10" data-animate>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <CodeShowcase />
        <PersonalStatementSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
