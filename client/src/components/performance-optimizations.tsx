import { lazy, Suspense } from 'react';

// Lazy load heavy components for better performance
export const LazyMatrixRain = lazy(() => import('./matrix-rain-effect'));
export const LazyCursorTrail = lazy(() => import('./cursor-trail-effect'));
export const LazyTerminalIntro = lazy(() => import('./terminal-intro-animation'));
export const LazyHolographicCard = lazy(() => import('./holographic-card'));

// Loading fallbacks
export const MatrixRainFallback = () => (
  <div className="fixed inset-0 bg-background opacity-50 animate-pulse" />
);

export const CursorTrailFallback = () => (
  <div className="fixed inset-0 pointer-events-none" />
);

export const TerminalIntroFallback = () => (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <div className="text-green-400 animate-pulse">Loading...</div>
  </div>
);

export const HolographicCardFallback = () => (
  <div className="w-full h-full bg-card rounded-lg animate-pulse" />
);

// Optimized wrappers
export function OptimizedMatrixRain(props: any) {
  return (
    <Suspense fallback={<MatrixRainFallback />}>
      <LazyMatrixRain {...props} />
    </Suspense>
  );
}

export function OptimizedCursorTrail(props: any) {
  return (
    <Suspense fallback={<CursorTrailFallback />}>
      <LazyCursorTrail {...props} />
    </Suspense>
  );
}

export function OptimizedTerminalIntro(props: any) {
  return (
    <Suspense fallback={<TerminalIntroFallback />}>
      <LazyTerminalIntro {...props} />
    </Suspense>
  );
}

export function OptimizedHolographicCard(props: any) {
  return (
    <Suspense fallback={<HolographicCardFallback />}>
      <LazyHolographicCard {...props} />
    </Suspense>
  );
}

// Image optimization hook
export function useImageOptimization() {
  const optimizedImageUrl = (url: string, width?: number, height?: number) => {
    // In a real app, this would use a service like Cloudinary or similar
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('auto', 'format,compress');
    params.append('q', '80');
    
    return `${url}${params.toString() ? '?' + params.toString() : ''}`;
  };

  return { optimizedImageUrl };
}

// Performance monitoring
export function usePerformanceMetrics() {
  const measureRenderTime = (componentName: string, renderFn: () => void) => {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    console.log(`${componentName} render time: ${end - start}ms`);
  };

  const measureInteractionTime = (eventName: string, interactionFn: () => void) => {
    const start = performance.now();
    interactionFn();
    requestAnimationFrame(() => {
      const end = performance.now();
      console.log(`${eventName} interaction time: ${end - start}ms`);
    });
  };

  return { measureRenderTime, measureInteractionTime };
}