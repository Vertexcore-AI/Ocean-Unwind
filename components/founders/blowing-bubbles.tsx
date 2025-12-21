"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"
import { cn } from "@/lib/utils"

interface BlowingBubblesProps {
    className?: string
    direction?: "left" | "right"
}

const Bubble = ({ direction }: { direction: "left" | "right" }) => {
    // Generate random values once on mount to prevent hydration mismatch
    const randomValues = useMemo(() => ({
        xVariation: Math.random() * 60 - 30,
        yVariation: Math.random() * 60 - 30,
        size: 5 + Math.random() * 10,
        duration: 1.0 + Math.random() * 10.5
    }), [])

    // Target the center of the bubble image
    const targetX = direction === "right" ? 50 : -50
    const targetY = -220

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.2, x: 8, y: 20 }}
            animate={{
                opacity: [0.9, 0.9, 0.9],
                scale: [0.2, 4.2, 0.0],
                x: targetX + randomValues.xVariation,
                y: targetY + randomValues.yVariation
            }}
            transition={{
                duration: randomValues.duration,
                ease: "easeInOut",
                times: [0, 0.2, 1]
            }}
            style={{
                width: randomValues.size,
                height: randomValues.size,
                background: `
                    radial-gradient(
                        circle at 30% 30%,
                        rgba(13, 7, 36, 0.4),
                        rgba(255,255,255,0.1) 40%,
                        rgba(12, 7, 41, 0.05) 60%,
                        rgba(12, 7, 41, 0.0) 70%
                    )
                `,
                boxShadow: "inset 0 0 10px rgba(19, 16, 58, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            className="absolute top-0 left-0 rounded-full backdrop-blur-[1px]"
        />
    )
}

export function BlowingBubbles({ className, direction = "right" }: BlowingBubblesProps) {
    const [bubbles, setBubbles] = useState<number[]>([])

    useEffect(() => {
        // Emit 1 bubble every 3 seconds
        const interval = setInterval(() => {
            setBubbles(prev => {
                const now = Date.now()
                // cleanup old bubbles (older than 8s to exceed max animation duration)
                const active = prev.filter(time => now - time < 8000)
                return [...active, now]
            })
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={cn("absolute w-0 h-0 pointer-events-none z-10", className)}>
            {bubbles.map(id => (
                <Bubble key={id} direction={direction} />
            ))}
        </div>
    )
}
