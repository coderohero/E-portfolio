import { useEffect, useRef, useState } from "react";

interface SkillData {
  label: string;
  value: number;
  color: string;
  category: string;
}

interface SkillsRadarChartProps {
  skills: SkillData[];
  size?: number;
  isVisible?: boolean;
}

export default function SkillsRadarChart({ skills, size = 300, isVisible = false }: SkillsRadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = Date.now();
    const animateDuration = 2000; // 2 seconds

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animateDuration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      setAnimationProgress(easeOutCubic(progress));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = size;
    canvas.height = size;

    const centerX = size / 2;
    const centerY = size / 2;
    const maxRadius = size * 0.35;
    const numSkills = skills.length;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw background grid
    const levels = 5;
    for (let i = 1; i <= levels; i++) {
      const radius = (maxRadius * i) / levels;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `hsl(220, 15%, ${20 + i * 5}%)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axis lines
    for (let i = 0; i < numSkills; i++) {
      const angle = (i * 2 * Math.PI) / numSkills - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "hsl(220, 15%, 25%)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw skill data polygon
    if (animationProgress > 0) {
      const points: { x: number; y: number; skill: SkillData }[] = [];
      
      for (let i = 0; i < numSkills; i++) {
        const skill = skills[i];
        const angle = (i * 2 * Math.PI) / numSkills - Math.PI / 2;
        const radius = (maxRadius * skill.value * animationProgress) / 100;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        points.push({ x, y, skill });
      }

      // Draw filled polygon
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.closePath();
      
      // Create gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      gradient.addColorStop(0, "hsl(160, 75%, 50%, 0.3)");
      gradient.addColorStop(1, "hsl(45, 90%, 60%, 0.1)");
      
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw polygon border
      ctx.strokeStyle = "hsl(160, 75%, 50%)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw skill points
      points.forEach((point, index) => {
        const isHovered = hoveredSkill === index;
        const pointRadius = isHovered ? 8 : 6;
        
        // Draw point glow
        ctx.beginPath();
        ctx.arc(point.x, point.y, pointRadius + 4, 0, Math.PI * 2);
        ctx.fillStyle = point.skill.color + "40";
        ctx.fill();
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
        ctx.fillStyle = point.skill.color;
        ctx.fill();
        
        // Draw point border
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    // Draw skill labels
    for (let i = 0; i < numSkills; i++) {
      const skill = skills[i];
      const angle = (i * 2 * Math.PI) / numSkills - Math.PI / 2;
      const labelRadius = maxRadius + 30;
      const x = centerX + Math.cos(angle) * labelRadius;
      const y = centerY + Math.sin(angle) * labelRadius;

      ctx.save();
      ctx.font = `${hoveredSkill === i ? '14px' : '12px'} Inter, sans-serif`;
      ctx.fillStyle = hoveredSkill === i ? skill.color : "hsl(220, 10%, 80%)";
      ctx.textAlign = x > centerX ? "left" : x < centerX ? "right" : "center";
      ctx.textBaseline = y > centerY ? "top" : y < centerY ? "bottom" : "middle";
      
      // Add shadow for better readability
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      
      ctx.fillText(skill.label, x, y);
      
      // Draw value
      ctx.font = "10px Inter, sans-serif";
      ctx.fillStyle = "hsl(220, 10%, 60%)";
      const valueY = y + (y > centerY ? 15 : -15);
      ctx.fillText(`${skill.value}%`, x, valueY);
      
      ctx.restore();
    }
  }, [skills, size, animationProgress, hoveredSkill]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = size / 2;
    const centerY = size / 2;
    const maxRadius = size * 0.35;
    
    let hoveredIndex = null;
    
    for (let i = 0; i < skills.length; i++) {
      const angle = (i * 2 * Math.PI) / skills.length - Math.PI / 2;
      const radius = (maxRadius * skills[i].value * animationProgress) / 100;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
      
      if (distance < 15) {
        hoveredIndex = i;
        break;
      }
    }
    
    setHoveredSkill(hoveredIndex);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="relative group">
      <canvas
        ref={canvasRef}
        className="transition-all duration-300 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-testid="skills-radar-chart"
      />
      
      {/* Skill categories legend */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap gap-2 justify-center">
        {Array.from(new Set(skills.map(s => s.category))).map((category, index) => (
          <div key={category} className="flex items-center space-x-2 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full border border-border">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: skills.find(s => s.category === category)?.color }}
            />
            <span className="text-xs font-medium">{category}</span>
          </div>
        ))}
      </div>
      
      {/* Tooltip */}
      {hoveredSkill !== null && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-4 py-2 shadow-lg">
          <div className="text-sm font-medium">{skills[hoveredSkill].label}</div>
          <div className="text-xs text-muted-foreground">{skills[hoveredSkill].category}</div>
          <div className="text-lg font-bold" style={{ color: skills[hoveredSkill].color }}>
            {skills[hoveredSkill].value}%
          </div>
        </div>
      )}
    </div>
  );
}