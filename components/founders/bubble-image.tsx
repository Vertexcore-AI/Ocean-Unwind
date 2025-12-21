"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BubbleImageProps {
    src: string
    alt: string
    className?: string
    delay?: number
}

export function BubbleImage({ src, alt, className, delay = 0 }: BubbleImageProps) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            whileInView={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: delay
                }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn("relative group", className)}
        >
            {/* Wobbling Bubble Container */}
            <motion.div
                animate={{
                    borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                    ]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-sm bg-white/5"
            >
                <img src={src} alt={alt} className="w-full h-full object-cover" />

                {/* Shine/Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/30 pointer-events-none" />
            </motion.div>
        </motion.div>
    )
}
