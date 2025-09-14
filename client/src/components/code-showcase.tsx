import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  features: string[];
  demoUrl?: string;
  category: 'frontend' | 'backend' | 'algorithm' | 'ai' | 'mobile';
}

export default function CodeShowcase() {
  const [selectedSnippet, setSelectedSnippet] = useState<string>('eco-track-three');
  const [typingEffect, setTypingEffect] = useState(false);

  const codeSnippets: CodeSnippet[] = [
    {
      id: 'eco-track-three',
      title: 'EcoTrack 3D Visualization',
      description: 'Interactive 3D carbon footprint visualization using Three.js with real-time data updates',
      language: 'javascript',
      category: 'frontend',
      features: ['Three.js', 'WebGL', 'Real-time Data', 'Custom Shaders'],
      code: `// 3D Carbon Footprint Visualization
import * as THREE from 'three';
import { gsap } from 'gsap';

class CarbonVisualization {
  constructor(container) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 
      window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.data = [];
    
    this.init(container);
    this.createCarbonSphere();
    this.animate();
  }

  createCarbonSphere() {
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        carbonLevel: { value: 0.5 },
        color1: { value: new THREE.Color(0x10b981) },
        color2: { value: new THREE.Color(0xef4444) }
      },
      vertexShader: \`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelMatrix * vec4(position, 1.0);
        }
      \`,
      transparent: true
    });
    
    this.carbonSphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.carbonSphere);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.carbonSphere.rotation.y += 0.005;
    this.renderer.render(this.scene, this.camera);
  }
}`,
      demoUrl: 'https://ecotrack-demo.vercel.app'
    },
    {
      id: 'neural-garden-ai',
      title: 'Neural Garden AI Engine',
      description: 'TensorFlow.js AI model for generating evolving plant-like art based on environmental data',
      language: 'javascript',
      category: 'ai',
      features: ['TensorFlow.js', 'Computer Vision', 'Real-time Processing', 'Neural Networks'],
      code: `// AI-Powered Art Generation Engine
import * as tf from '@tensorflow/tfjs';

class NeuralGarden {
  constructor() {
    this.model = null;
    this.environmentData = {
      temperature: 0,
      humidity: 0,
      light: 0,
      visitors: 0
    };
    this.initializeModel();
  }

  async initializeModel() {
    this.model = await tf.loadLayersModel('/models/plant-generator.json');
    this.latentDim = 512;
    this.noiseVector = tf.randomNormal([1, this.latentDim]);
  }

  async generateArt(environmentData) {
    const envTensor = tf.tensor2d([[
      environmentData.temperature / 100,
      environmentData.humidity / 100,
      environmentData.light / 100,
      Math.sin(Date.now() / 10000)
    ]]);

    const conditionedNoise = tf.add(
      this.noiseVector,
      tf.mul(envTensor.reshape([1, 4]), 0.3)
    );

    const generated = this.model.predict(conditionedNoise);
    return this.tensorToCanvas(generated);
  }
}`,
      demoUrl: 'https://neural-garden.art'
    },
    {
      id: 'solarsync-algorithm',
      title: 'Solar Panel Optimization',
      description: 'Advanced algorithm for optimizing solar panel efficiency using predictive analytics',
      language: 'typescript',
      category: 'algorithm',
      features: ['TypeScript', 'Predictive Analytics', 'Performance Optimization'],
      code: `// Solar Panel Efficiency Optimization Algorithm
interface SolarPanel {
  id: string;
  position: { lat: number; lng: number; tilt: number; azimuth: number };
  capacity: number;
  currentOutput: number;
  efficiency: number;
  temperature: number;
}

class SolarOptimizer {
  private panels: Map<string, SolarPanel> = new Map();

  async optimizePanelArray(panels: SolarPanel[]) {
    const optimizations = [];
    
    for (const panel of panels) {
      const prediction = await this.predictOptimalSettings(panel);
      const currentEfficiency = this.calculateEfficiency(panel);
      const optimizedEfficiency = this.calculateEfficiency({
        ...panel,
        ...prediction.settings
      });

      if (optimizedEfficiency > currentEfficiency * 1.05) {
        optimizations.push({
          panelId: panel.id,
          expectedImprovement: optimizedEfficiency - currentEfficiency
        });
      }
    }

    return optimizations;
  }

  private calculateEfficiency(panel: SolarPanel): number {
    const tempCoeff = -0.004;
    const standardTemp = 25;
    
    return panel.efficiency * (1 + tempCoeff * (panel.temperature - standardTemp));
  }
}`,
      demoUrl: 'https://solarsync-platform.com'
    }
  ];

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: 'fab fa-react', color: '#61dafb' },
    { id: 'backend', label: 'Backend', icon: 'fas fa-server', color: '#68d391' },
    { id: 'algorithm', label: 'Algorithms', icon: 'fas fa-brain', color: '#9f7aea' },
    { id: 'ai', label: 'AI/ML', icon: 'fas fa-robot', color: '#f56565' },
    { id: 'mobile', label: 'Mobile', icon: 'fas fa-mobile-alt', color: '#4299e1' }
  ];

  const selectedSnippetData = codeSnippets.find(s => s.id === selectedSnippet);

  const highlightSyntax = (code: string, language: string) => {
    const keywords = {
      javascript: ['class', 'function', 'const', 'let', 'var', 'async', 'await', 'import', 'export', 'from', 'new', 'this', 'return'],
      typescript: ['interface', 'type', 'class', 'function', 'const', 'let', 'var', 'async', 'await', 'import', 'export', 'from', 'new', 'this', 'return', 'private', 'public']
    };

    let highlightedCode = code;
    const langKeywords = keywords[language as keyof typeof keywords] || keywords.javascript;
    
    langKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, `<span class="keyword">${keyword}</span>`);
    });

    highlightedCode = highlightedCode.replace(
      /(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g,
      '<span class="string">$1$2$3</span>'
    );

    highlightedCode = highlightedCode.replace(
      /(\/\/.*$)/gm,
      '<span class="comment">$1</span>'
    );

    return highlightedCode;
  };

  useEffect(() => {
    setTypingEffect(true);
    const timer = setTimeout(() => setTypingEffect(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedSnippet]);

  return (
    <section id="code" className="py-20 gradient-bg-tertiary relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-16 left-8 text-primary/20 text-sm font-mono">
          {'{ "code": "poetry" }'}
        </div>
        <div className="floating-element absolute bottom-20 right-12 text-accent/20 text-sm font-mono">
          console.log('innovation');
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" data-testid="heading-code-showcase">
            Code Showcase
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Explore actual code snippets from my projects. Interactive examples showcasing different technologies, 
            algorithms, and creative solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  const snippetOfCategory = codeSnippets.find(s => s.category === category.id);
                  if (snippetOfCategory) setSelectedSnippet(snippetOfCategory.id);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedSnippetData?.category === category.id
                    ? 'border-primary bg-primary/10 text-primary scale-105'
                    : 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
                }`}
                data-testid={`category-${category.id}`}
              >
                <i className={category.icon + " text-sm"} style={{ color: category.color }}></i>
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              {codeSnippets.map((snippet) => (
                <div
                  key={snippet.id}
                  onClick={() => setSelectedSnippet(snippet.id)}
                  className={`enhanced-card p-4 cursor-pointer transition-all duration-300 ${
                    selectedSnippet === snippet.id
                      ? 'border-primary shadow-lg scale-105'
                      : 'border-border hover:border-primary/50'
                  }`}
                  data-testid={`snippet-${snippet.id}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{snippet.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      snippet.language === 'javascript' 
                        ? 'bg-yellow-500/20 text-yellow-500' 
                        : 'bg-blue-500/20 text-blue-500'
                    }`}>
                      {snippet.language}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {snippet.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {snippet.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-secondary/50 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              {selectedSnippetData && (
                <div className="enhanced-card bg-card border border-border rounded-xl overflow-hidden">
                  <div className="bg-secondary/20 px-6 py-4 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1" data-testid="selected-title">
                          {selectedSnippetData.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedSnippetData.description}
                        </p>
                      </div>
                      {selectedSnippetData.demoUrl && (
                        <Button asChild size="sm">
                          <a href={selectedSnippetData.demoUrl} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-external-link-alt mr-2"></i>
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedSnippetData.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                          data-testid={`feature-${index}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute top-4 right-4 z-10">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(selectedSnippetData.code)}
                        data-testid="copy-code"
                      >
                        <i className="fas fa-copy"></i>
                      </Button>
                    </div>
                    
                    <pre className={`p-6 overflow-x-auto text-sm font-mono leading-relaxed ${
                      typingEffect ? 'typing-effect' : ''
                    }`}>
                      <code
                        className="language-javascript"
                        dangerouslySetInnerHTML={{
                          __html: highlightSyntax(selectedSnippetData.code, selectedSnippetData.language)
                        }}
                        data-testid="code-content"
                      />
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}