declare module '@studio-freight/lenis' {
    export default class Lenis {
      constructor(options?: {
        duration?: number;
        easing?: (t: number) => number;
        direction?: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
        smooth?: boolean;
        mouseMultiplier?: number;
        smoothTouch?: boolean;
        touchMultiplier?: number;
        infinite?: boolean;
        lerp?: number;
      });
  
      raf(time: number): void;
      scrollTo(target: number | string | HTMLElement, options?: any): void;
      on(event: string, callback: (...args: any[]) => void): void;
      off(event: string, callback: (...args: any[]) => void): void;
      destroy(): void;
    }
  }
  