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

      // ACT 2: First scroll (50px - 1 viewport)
      if (latest > 50 && latest <= viewportHeight && currentAct === 1) {
        setCurrentAct(2)
      }
      // ACT 3: Second scroll (1-2 viewports)
      else if (latest > viewportHeight && latest <= viewportHeight * 2 && currentAct === 2) {
        setCurrentAct(3)
      }
      // ACT 4: Third scroll (beyond 2 viewports)
      else if (latest > viewportHeight * 2 && currentAct === 3) {
        setCurrentAct(4)
      }
    })

    return () => unsubscribe()
  }, [typingComplete, scrollY, currentAct])

  return { currentAct }
}
