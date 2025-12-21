"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TextType } from "./text-type"
import { AnimatedLines } from "./animated-lines"
import { useHeroScroll } from "./use-hero-scroll"

export function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [typingComplete, setTypingComplete] = useState(false)
  const { currentAct } = useHeroScroll(typingComplete)
  const { scrollY } = useScroll()

  const lines = [
    "WE ARE TRYING TO PROTECT",
    "THE EARTHS LAST TRUE",
    "WILDERNESS",
    "THE OCEAN",
  ]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5 // Slow down video to 50% speed
    }
  }, [])

  // Text scale and opacity based on scroll in ACT 4
  const textScale = useTransform(scrollY, [window.innerHeight * 2, window.innerHeight * 3.5], [1, 5])
  const textOpacity = useTransform(scrollY, [window.innerHeight * 2, window.innerHeight * 3.5], [1, 0])

  return (
    <section className="bg-ocean-dark text-white min-h-[400vh] relative">
      {/* Background - Video or Solid Color based on currentAct */}
      <div className="fixed inset-0 w-full h-screen">
        {currentAct < 4 ? (
          // ACT 1-3: Video Background
          <>
            <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/vid_1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
          </>
        ) : (
          // ACT 4: Solid Color Background
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
            style={{ backgroundColor: "#1E1C21" }}
          />
        )}
      </div>

      {/* Text Animation */}
      <div className="relative z-10 flex items-center justify-center min-h-screen sticky top-0">
        <div className="text-center px-6">
          {/* ACT 1: Typing Animation */}
          {!typingComplete && (
            <TextType
              text={lines}
              typingSpeed={80}
              initialDelay={500}
              pauseDuration={500}
              showCursor={true}
              cursorCharacter="|"
              className="font-[family-name:var(--font-surfer)] text-4xl md:text-6xl lg:text-7xl text-gray-300 leading-tight"
              onComplete={() => setTypingComplete(true)}
            />
          )}

          {/* ACT 2-4: Animated Lines */}
          {typingComplete && (
            <AnimatedLines
              lines={lines}
              currentAct={currentAct}
              className="font-[family-name:var(--font-surfer)] text-4xl md:text-6xl lg:text-7xl text-gray-300 leading-tight"
              textScale={textScale}
              textOpacity={textOpacity}
            />
          )}
        </div>
      </div>
    </section>
  )
}
