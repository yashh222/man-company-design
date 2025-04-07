// src/_components/SmoothScrollWrapper.tsx
'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

export const SmoothScrollWrapper = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.10,
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
