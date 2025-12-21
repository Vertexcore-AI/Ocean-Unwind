"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"

type Bubble = {
    id: number
    x: number
    size: number
    duration: number
    opacity: number
    drift: number
    scale: number
}

export function FloatingBubbles() {
    const reduceMotion = useReducedMotion()

    const [bubbles, setBubbles] = useState<Bubble[]>([])

    useEffect(() => {
        const count = window.innerWidth < 768 ? 20 : 35

        const newBubbles = Array.from({ length: count }).map((_, i) => {
            const depth = Math.random()
            return {
                id: i,
                x: Math.random() * 100,
                size: 6 + depth * 8, // 🔽 smaller bubbles (4px – 12px)
                duration: 30 + Math.random() * 20,
                opacity: 0.5 + depth * 0.25,
                drift: Math.random() * 30 - 15,
                scale: 0.7 + depth * 0.4,
            }
        })
        setBubbles(newBubbles)
    }, [])

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
            {bubbles.map((b) => (
                <motion.div
                    key={b.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${b.x}%`,
                        width: b.size,
                        height: b.size,
                        // 🫧 Bubble-style thin edge + transparent center
                        background: `
                            radial-gradient(
                                circle at 30% 30%,
                                rgba(255,255,255,0.35),
                                rgba(255,255,255,0.15) 40%,
                                rgba(255,255,255,0.05) 60%,
                                rgba(255,255,255,0.0) 70%
                            )
                        `,
                        border: "1px solid rgba(238, 233, 233, 0.2)",
                    }}
                    initial={{ y: "110vh", opacity: 0 }}
                    animate={
                        reduceMotion
                            ? { y: "-10vh", opacity: b.opacity }
                            : {
                                y: ["110vh", "-10vh"],
                                x: [0, b.drift, -b.drift / 2],
                                scale: [
                                    b.scale,
                                    b.scale * 1.05,
                                    b.scale,
                                ],
                                opacity: [0, b.opacity, b.opacity, 0],
                            }
                    }
                    transition={{
                        duration: b.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * -b.duration,
                    }}
                />
            ))}
        </div>
    )
}
