"use client"

import { useState, useEffect } from "react"
import { useScroll } from "framer-motion"

export function useHeroScroll(typingComplete: boolean) {
  const [currentAct, setCurrentAct] = useState<1 | 2 | 3 | 4>(1)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (!typingComplete) return

    const unsubscribe = scrollY.on("change", (latest) => {
      const viewportHeight = window.innerHeight

      // ACT 2: First scroll (Starts appearing immediately - 50px to 0.6 viewport)
      if (latest > 50 && latest <= viewportHeight * 0.6 && currentAct === 1) {
        setCurrentAct(2)
      }
      // ACT 3: "One Scroll" later (0.6 to 1.5 viewports - United)
      else if (latest > viewportHeight * 0.6 && latest <= viewportHeight * 1.5 && currentAct === 2) {
        setCurrentAct(3)
      }
      // ACT 4: Leave hero (beyond 1.5 viewports)
      else if (latest > viewportHeight * 1.5 && currentAct === 3) {
        setCurrentAct(4)
      }
    })

    return () => unsubscribe()
  }, [typingComplete, scrollY, currentAct])

  return { currentAct }
}
