'use client'

import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
        autoRaf: true,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
      }}
    >
      {children}
    </ReactLenis>
  )
}
