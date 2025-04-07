/// <reference types="react-scripts" />

declare module '@studio-freight/lenis/react' {
    import * as React from 'react';
  
    interface ReactLenisProps {
      root?: boolean;
      autoRaf?: boolean;
      options?: {
        lerp?: number;
        duration?: number;
        easing?: (t: number) => number;
        orientation?: 'vertical' | 'horizontal';
        smoothWheel?: boolean;
        smoothTouch?: boolean;
        touchMultiplier?: number;
        wheelMultiplier?: number;
        normalizeWheel?: boolean;
      };
      children?: React.ReactNode;
    }
  
    export const ReactLenis: React.FC<ReactLenisProps>;
  }
  