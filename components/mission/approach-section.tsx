"use client"

import { useState } from 'react'
import RotatingText from '@/components/ui/rotating-text'

export function ApproachSection() {
  const rotatingWords = [
    "education",
    "storytelling",
    "artistic expression",
    "global partnerships"
  ]

  const colors = ['#309577', '#28617C', '#3C3579', '#309577'] // Cycling through colors
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  const handleNext = (index: number) => {
    setCurrentColorIndex(index)
  }

  return (
    <section className="w-full mx-0 py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#207884' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'url(/art.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="w-full mx-0 px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-[family-name:var(--font-montserrat)]">
            We Work Through
          </h2>

          {/* Rotating text with colored boxes */}
          <div
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors duration-500 overflow-hidden"
            style={{
              backgroundColor: colors[currentColorIndex],
              minWidth: '320px',
              minHeight: '70px'
            }}
          >
            <RotatingText
              texts={rotatingWords}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              mainClassName="text-white"
              elementLevelClassName="text-white"
              rotationInterval={2500}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              loop={true}
              auto={true}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
