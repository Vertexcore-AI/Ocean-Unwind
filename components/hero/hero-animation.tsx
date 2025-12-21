"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TextType } from "./text-type"
import { AnimatedLines } from "./animated-lines"
import { useHeroScroll } from "./use-hero-scroll"
import { FloatingBubbles } from "./FloatingBubbles"
import { OceanBackground } from "./ocean-background"

export function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [typingComplete, setTypingComplete] = useState(false)
  const { currentAct } = useHeroScroll(typingComplete)
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const lines = [
    "WE ARE TRYING TO PROTECT",
    "THE EARTHS LAST TRUE",
    "WILDERNESS",
    "THE OCEAN",
  ]

  // Scroll measurements state - initialized with defaults for SSR
  const [scrollRanges, setScrollRanges] = useState([1000, 2000])

  useEffect(() => {
    // Update scroll ranges once window is available
    setScrollRanges([window.innerHeight * 1.5, window.innerHeight * 2.5])

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5 // Slow down video to 50% speed
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Text scale and opacity based on scroll in ACT 4
  const textScale = useTransform(scrollY, scrollRanges, [1, 5])
  const textOpacity = useTransform(scrollY, scrollRanges, [1, 0])

  return (
    <section className="bg-ocean-dark text-white min-h-[400vh] relative">
      {/* Background - Video or Solid Color based on currentAct */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden">
        {/* ACT 1-3: Animated Ocean Background */}
        <motion.div
          animate={{ opacity: currentAct < 4 ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Video Background (Commented out) */}
          {/* <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/vid_1.mp4" type="video/mp4" />
            </video> */}

          {/* Vibrant Ocean Background (Canvas - Commented out) */}
          {/* <OceanBackground /> */}

          {/* Organic Wallpaper Background with subtle breathing effect */}
          {/* Layer 1: Jellyfish (Visible in Act 1-2) */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05 }}
            animate={{
              opacity: currentAct >= 3 ? 0 : 1, // Fade out when United
              scale: [1.05, 1.1, 1.05],
              x: [0, 50, 0],
              y: [0, -10, 0]
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 20, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img
              src="/wp12542186.jpg"
              alt="Deep sea jellyfish"
              className="w-full h-full object-cover opacity-100"
              style={{ objectPosition: "15% center" }}
            />
          </motion.div>

          {/* Layer 2: Gemini Generated (Visible in Act 3-4) */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentAct >= 3 ? 1 : 0, // Fade in when United
            }}
            transition={{ duration: 1 }}
          >
            <img
              src="/Gemini_Generated.png"
              alt="Ocean Unmined Generated Art"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Deep Sea Overlay Gradient - Darkened for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

          {/* Floating Particles - Moved inside fixed container for alignment and layering */}
          <FloatingBubbles />

          {/* Mouse Spotlight Effect - switched to 'screen' for visibility and 'cyan' tint */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-1000 mix-blend-screen"
            style={{
              background: `radial-gradient(circle 500px at ${mousePosition.x}% ${mousePosition.y}%, rgba(47, 39, 126, 0.25), transparent 70%)`,
              opacity: typingComplete ? 1 : 0
            }}
          />
        </motion.div>

        {/* ACT 4: Solid Color Background Layer (always present, behind video) */}
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: "#000000" }}
        />
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
              className="font-[family-name:var(--font-surfer)] text-4xl md:text-6xl lg:text-7xl text-gray-300 leading-tight mix-blend-screen"
              textScale={textScale}
              textOpacity={textOpacity}
            />
          )}
        </div>
      </div>
    </section>
  )
}
