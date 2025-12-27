"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DecryptedText } from '@/components/hero/decrypted-text'

export function MissionSection() {
  const [showTitle, setShowTitle] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [showBullet1, setShowBullet1] = useState(false)
  const [showBullet2, setShowBullet2] = useState(false)
  const [showBullet3, setShowBullet3] = useState(false)
  const [showBullet4, setShowBullet4] = useState(false)

  // Sequential animation triggers
  useEffect(() => {
    // Title appears immediately when section comes into view
    setShowTitle(true)

    // Intro text appears after title decrypts (2s)
    const introTimer = setTimeout(() => setShowIntro(true), 2000)

    // Bullet points appear sequentially
    const bullet1Timer = setTimeout(() => setShowBullet1(true), 3500)
    const bullet2Timer = setTimeout(() => setShowBullet2(true), 5000)
    const bullet3Timer = setTimeout(() => setShowBullet3(true), 6500)
    const bullet4Timer = setTimeout(() => setShowBullet4(true), 8000)

    return () => {
      clearTimeout(introTimer)
      clearTimeout(bullet1Timer)
      clearTimeout(bullet2Timer)
      clearTimeout(bullet3Timer)
      clearTimeout(bullet4Timer)
    }
  }, [])

  return (
    <section className="bg-white text-gray-900 py-10 md:py-32">
      {/* Centered Title */}
      <div className="text-center mb-16 md:mb-20">
        {showTitle && (
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 font-[family-name:var(--font-montserrat)]">
            <DecryptedText
              text="Our Mission"
              speed={50}
              maxIterations={30}
              animateOn="view"
              className="inline-block"
            />
          </h2>
        )}
      </div>

      {/* Two Column Layout */}
      <div className="max-w-6x2 mx-0 px-3">
        <div className="grid md:grid-cols-2 gap-5 items-start">
          {/* Left Column - Logo */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src="/logo.jpg"
              alt="Ocean Unmined Logo"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-5">
            {/* Intro Text with colored words */}
            {showIntro && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl lg:text-5xl text-gray-800 font-sans mb-8"
              >
                <span>Blend </span>
                <span style={{ color: '#309577' }} className="font-semibold">Science</span>
                <span>, </span>
                <span style={{ color: '#28617C' }} className="font-semibold">Art</span>
                <span>, and </span>
                <span style={{ color: '#3C3579' }} className="font-semibold">Community Engagement</span>
                <span> to</span>
              </motion.div>
            )}

            {/* Bullet Point 1 */}
            {showBullet1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3 text-2xl md:text-3xl lg:text-4xl text-gray-700 font-sans"
              >
                <span className="text-ocean-cyan font-bold mt-1">●</span>
                <DecryptedText
                  text="inspire deep-sea awareness in children and youth"
                  speed={50}
                  maxIterations={30}
                  animateOn="view"
                />
              </motion.div>
            )}

            {/* Bullet Point 2 */}
            {showBullet2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3 text-2xl md:text-3xl lg:text-4xl text-gray-700 font-sans"
              >
                <span className="text-ocean-cyan font-bold mt-1">●</span>
                <DecryptedText
                  text="empower local communities with knowledge"
                  speed={50}
                  maxIterations={30}
                  animateOn="view"
                />
              </motion.div>
            )}

            {/* Bullet Point 3 */}
            {showBullet3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3 text-2xl md:text-3xl lg:text-4xl text-gray-700 font-sans"
              >
                <span className="text-ocean-cyan font-bold mt-1">●</span>
                <DecryptedText
                  text="advocate for the protection of deep-sea ecosystems"
                  speed={50}
                  maxIterations={30}
                  animateOn="view"
                />
              </motion.div>
            )}

            {/* Bullet Point 4 */}
            {showBullet4 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3 text-2xl md:text-3xl lg:text-4xl text-gray-700 font-sans"
              >
                <span className="text-ocean-cyan font-bold mt-1">●</span>
                <DecryptedText
                  text="and counter the rising threat of deep-seabed mining"
                  speed={50}
                  maxIterations={30}
                  animateOn="view"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
