"use client"

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
    children: string
    className?: string
    baseOpacity?: number
    blurStrength?: number
    transitionDuration?: number
}

export function ScrollReveal({
    children,
    className,
    baseOpacity = 0.1,
    blurStrength = 4,
    transitionDuration = 0.2
}: ScrollRevealProps) {
    const words = children.split(" ")

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05
            }
        }
    }

    const wordVariants: Variants = {
        hidden: {
            opacity: baseOpacity,
            filter: `blur(${blurStrength}px)`
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.span
            className={cn("flex flex-wrap gap-[0.25em]", className)}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={wordVariants}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    )
}
