"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Ribbons from "@/components/ui/ribbons"
import FadeContent from "@/components/ui/fade-content"

// PrismWord component for colorful text
function PrismWord({ color, children }: { color: string; children: React.ReactNode }) {
    return <span className={color}>{children}</span>
}

export function MissionSection() {
    return (
        <section className="relative bg-black text-white py-0 overflow-hidden">
            {/* Ocean Ribbons Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <Ribbons
                    colors={['#22d3ee', '#3b82f6', '#8b5cf6', '#06b6d4']}
                    baseThickness={20}
                    enableFade={true}
                    backgroundColor={[0, 0, 0, 0]}
                />
            </div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark to-black pointer-events-none z-[1]" />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 space-y-20">

                {/* Mission Header */}
                <FadeContent blur={true} duration={1500} threshold={0.2}>
                    <div className="text-center">
                        <h2 className="text-gray-400 text-4xl md:text-6xl mb-12 font-bold tracking-widest uppercase">
                            Our Mission
                        </h2>
                    </div>
                </FadeContent>

                {/* Mission Statement */}
                <FadeContent blur={true} duration={1200} delay={300} threshold={0.2}>
                    <div className="flex flex-wrap justify-center gap-x-3 text-4xl md:text-6xl font-light text-gray-200 leading-tight max-w-4xl mx-auto backdrop-blur-sm bg-black/10 p-8 rounded-3xl text-center">
                        <span>To Blend</span>
                        <PrismWord color="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Science,</PrismWord>
                        <PrismWord color="text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">Art,</PrismWord>
                        <span>and</span>
                        <PrismWord color="text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.5)]">Community</PrismWord>
                        <span>Engagement to...</span>
                    </div>
                </FadeContent>

                {/* Mission Points */}
                <div className="max-w-4xl mx-auto space-y-8">
                    <FadeContent blur={true} duration={1000} delay={0} threshold={0.3}>
                        <MissionPoint
                            text="Inspire deep-sea awareness in children and youth"
                            color="bg-cyan-400"
                        />
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} delay={200} threshold={0.3}>
                        <MissionPoint
                            text="Empower local communities with knowledge"
                            color="bg-purple-400"
                        />
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} delay={400} threshold={0.3}>
                        <MissionPoint
                            text="Advocate for the protection of deep-sea ecosystems"
                            color="bg-blue-500"
                        />
                    </FadeContent>

                    <FadeContent blur={true} duration={1000} delay={600} threshold={0.3}>
                        <MissionPoint
                            text="Counter the rising threat of deep-seabed mining"
                            color="bg-red-500"
                        />
                    </FadeContent>
                </div>

                {/* Word Cycler */}
                <FadeContent blur={true} duration={1200} delay={800} threshold={0.2}>
                    <div className="text-center">
                        <h3 className="text-3xl md:text-5xl font-light backdrop-blur-sm bg-black/10 p-8 rounded-3xl inline-block">
                            We work through
                            <WordCycler words={["Education", "Storytelling", "Artistic Expression", "Global Partnerships"]} />
                        </h3>
                    </div>
                </FadeContent>

            </div>
        </section>
    )
}

function MissionPoint({ text, color }: { text: string; color: string }) {
    return (
        <div className="flex items-center gap-8 group backdrop-blur-sm bg-black/10 p-6 rounded-2xl">
            {/* Glowing Bubble Bullet */}
            <div className={cn("w-6 h-6 rounded-full shrink-0 relative", color)}>
                <div className={cn("absolute inset-0 rounded-full animate-ping opacity-20", color)} />
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_currentColor] opacity-50" />
            </div>

            {/* Text */}
            <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-200 group-hover:text-white transition-colors">
                {text}
            </p>
        </div>
    )
}

// Auto-cycling word animation
function WordCycler({ words }: { words: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length)
        }, 2500) // Change word every 2.5 seconds

        return () => clearInterval(interval)
    }, [words.length])

    return (
        <span className="inline-block align-bottom ml-4 text-cyan-300 font-bold relative min-w-[200px] md:min-w-[300px]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="inline-block"
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}
