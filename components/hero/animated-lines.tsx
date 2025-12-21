"use client"

import { motion, MotionValue } from "framer-motion"

interface AnimatedLinesProps {
  lines: string[]
  currentAct: 1 | 2 | 3 | 4
  className?: string
  textScale?: MotionValue<number>
  textOpacity?: MotionValue<number>
}

export function AnimatedLines({ lines, currentAct, className = "", textScale, textOpacity }: AnimatedLinesProps) {
  // Top 3 lines variants (fade out in ACT 2, stay hidden in ACT 3-4)
  const topLinesVariants = {
    act1: { opacity: 1, y: 0 },
    act2: { opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } },
    act3: { opacity: 0, y: -20 },
    act4: { opacity: 0, y: -20 },
  }

  // "THE" word variants (fade out in ACT 2, stay hidden in ACT 3-4)
  const theWordVariants = {
    act1: { opacity: 1 },
    act2: { opacity: 0, transition: { duration: 0.6, ease: "easeOut" } },
    act3: { opacity: 0 },
    act4: { opacity: 0 },
  }

  // "OCEAN" word variants
  const oceanWordVariants = {
    act1: { y: 0, x: 0 },
    act2: {
      y: -100,
      x: -200, // Move 200px left
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
    },
    act3: { y: -100, x: -230 },
    act4: { y: -110, x: -250 }, // Stay in position
  }

  // "UNMINED" word variants - scroll-float animation
  const unminedVariants = {
    act1: { opacity: 0, y: -180, x: 150, scale: 0.8 },
    act2: { opacity: 0, y: -180, x: 150, scale: 0.8 },
    act3: {
      opacity: 1,
      y: -190,
      x: 170,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1], // Bounce easing for float effect
        opacity: { duration: 0.8 },
      },
    },
    act4: { opacity: 1, y: -200, x: 150, scale: 1 }, // Stay in position
  }

  // Get appropriate glow class based on act
  const getOceanGlowClass = () => {
    if (currentAct >= 3) return "text-ocean-cyan text-glow-enhanced"
    return "text-ocean-cyan text-glow-subtle"
  }

  const getActKey = () => {
    if (currentAct === 1) return "act1"
    if (currentAct === 2) return "act2"
    if (currentAct === 3) return "act3"
    return "act4"
  }

  return (
    <motion.div
      className={className}
      style={{ scale: textScale, opacity: textOpacity }}
    >
      {/* Line 1: WE ARE TRYING TO PROTECT */}
      <motion.div variants={topLinesVariants} animate={getActKey()}>
        {lines[0]}
      </motion.div>

      {/* Line 2: THE EARTHS LAST TRUE */}
      <motion.div variants={topLinesVariants} animate={getActKey()}>
        {lines[1]}
      </motion.div>

      {/* Line 3: WILDERNESS */}
      <motion.div variants={topLinesVariants} animate={getActKey()}>
        {lines[2]}
      </motion.div>

      {/* Line 4: THE OCEAN */}
      <div>
        <motion.span variants={theWordVariants} animate={getActKey()}>
          THE{" "}
        </motion.span>
        <motion.span
          variants={oceanWordVariants}
          animate={getActKey()}
          className={`${getOceanGlowClass()} inline-block`}
        >
          OCEAN
        </motion.span>
      </div>

      {/* UNMINED - appears in ACT 3 */}
      {currentAct >= 2 && (
        <motion.div
          variants={unminedVariants}
          animate={getActKey()}
          className="text-purple-400 text-glow-purple inline-block -mt-2"
        >
          UNMINED
        </motion.div>
      )}

      {/* Logo - appears in ACT 4 */}
      {/* {currentAct === 4 && (
        <motion.img
          src="/logo.jpg"
          alt="Ocean Unmined Logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-8 w-48 h-48 object-contain"
        />
      )} */}
    </motion.div>
  )
}
