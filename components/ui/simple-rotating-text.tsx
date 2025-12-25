'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SimpleRotatingTextProps {
  texts: string[]
  interval?: number
  className?: string
  staggerDuration?: number
}

export default function SimpleRotatingText({
  texts,
  interval = 2500,
  className = '',
  staggerDuration = 0.03
}: SimpleRotatingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  const currentText = texts[index]

  return (
    <span className={`inline-flex flex-wrap gap-2 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-flex items-center justify-center gap-2 bg-blue-650/30 border border-cyan-600/30 px-2 py-2 rounded-3/4 overflow-hidden font-surfer backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            boxShadow: '0 0 10px rgba(18, 48, 216, 0.63)'
          }}
        >
          {currentText.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-120%', opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: charIndex * staggerDuration,
                ease: [0.33, 1, 0.68, 1]
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
