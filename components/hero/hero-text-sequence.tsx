"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DecryptedText } from './decrypted-text'
import { TextType } from './text-type'

type AnimationStage = 'decrypt' | 'pause' | 'fade' | 'type'

export function HeroTextSequence() {
  const [stage, setStage] = useState<AnimationStage>('decrypt')
  const [showLine1, setShowLine1] = useState(false)
  const [showLine2, setShowLine2] = useState(false)
  const [showLine3, setShowLine3] = useState(false)

  // Trigger lines to appear sequentially
  useEffect(() => {
    // Line 1 appears immediately
    setShowLine1(true)

    // Line 2 appears after 1.5s
    const timer2 = setTimeout(() => setShowLine2(true), 1500)

    // Line 3 appears after 3s
    const timer3 = setTimeout(() => setShowLine3(true), 3000)

    return () => {
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  // Stage progression with timing
  useEffect(() => {
    if (stage === 'decrypt') {
      // Wait 4s for decrypt animation to complete
      const timer = setTimeout(() => {
        setStage('pause')
      }, 4000)
      return () => clearTimeout(timer)
    } else if (stage === 'pause') {
      // Wait 2s pause before fading
      const timer = setTimeout(() => {
        setStage('fade')
      }, 2000)
      return () => clearTimeout(timer)
    } else if (stage === 'fade') {
      // Wait 2s for fade animation to complete
      const timer = setTimeout(() => {
        setStage('type')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [stage])

  return (
    <div className="text-center flex flex-col items-center w-full relative min-h-[400px]">
      {/* OCEANS - stays in position throughout - Adjust with style={{left, top}} */}
      <div
        className="text-4x2 md:text-4x2 lg:text-4xl font-normal font-[family-name:var(--font-montserrat)]"
        style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translateX(-50%)' }}
      >
        <span className="text-ocean-cyan text-glow-subtle">OCEANS</span>
      </div>

      {/* Animated text overlays - positioned absolutely */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-full">
        {/* Line 1: "Let Us Save The" - Adjust with style={{left, top}} */}
        {showLine1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'fade' || stage === 'type' ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute text-2xl md:text-3xl lg:text-5xl font-normal text-white/90 font-[family-name:var(--font-montserrat)]"
            style={{ left: '15%', top: '10px' }}
          >
            <DecryptedText
              text="Let Us Save The "
              speed={50}
              maxIterations={30}
              animateOn="view"
              className="inline-block"
            />
          </motion.div>
        )}

        {/* Line 2: "The Last True Wilderness" - Adjust with style={{left, top}} */}
        {showLine2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'fade' || stage === 'type' ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute text-3xl md:text-4xl lg:text-5xl font-normal text-white/90 font-[family-name:var(--font-montserrat)]"
            style={{ left: '45%', top: '52px' }}
          >
            <DecryptedText
              text="The Last True Wilderness"
              speed={50}
              maxIterations={30}
              animateOn="view"
              className="inline-block"
            />
          </motion.div>
        )}

        {/* Line 3: "Of Planet Earth" - Adjust with style={{left, top}} */}
        {showLine3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'fade' || stage === 'type' ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute text-3xl md:text-4xl lg:text-5xl font-normal text-white/90 font-[family-name:var(--font-montserrat)]"
            style={{ left: '47%', top: '100px' }}
          >
            <DecryptedText
              text="Of Planet Earth"
              speed={50}
              maxIterations={30}
              animateOn="view"
              className="inline-block"
            />
          </motion.div>
        )}
      </div>

      {/* UNMINDED typing animation - appears after fade */}
      {stage === 'type' && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-9xl lg:text-[12rem] font-extrabold text-white tracking-wider font-[family-name:var(--font-montserrat)]"
          style={{ position: 'absolute', top: '80px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <TextType
            text={["UNMINDED"]}
            typingSpeed={150}
            initialDelay={500}
            showCursor={false}
            className="inline-block"
          />
        </motion.h1>
      )}
    </div>
  )
}
