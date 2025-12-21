"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { cn } from "@/lib/utils"

export function MissionSection() {
    return (
        <section className="relative min-h-[300vh] bg-black text-white py-32 overflow-hidden">
            {/* Background Decoration (Deep Void) */}
            <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark to-black pointer-events-none" />

            {/* 1. Main Mission Statement */}
            <div className="container mx-auto px-6 relative z-10 min-h-[100vh] flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl md:text-7xl font-bold mb-12 max-w-5xl leading-tight">
                    <span className="text-gray-400 block text-lg md:text-2xl mb-4 font-normal tracking-widest uppercase">Our Mission</span>
                    <div className="flex flex-wrap justify-center gap-x-3 text-4xl md:text-6xl font-light text-gray-200 leading-tight max-w-4xl">
                        <ScrollReveal>To Blend</ScrollReveal>
                        <PrismWord color="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Science,</PrismWord>
                        <PrismWord color="text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">Art,</PrismWord>
                        <ScrollReveal>and</ScrollReveal>
                        <PrismWord color="text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.5)]">Community</PrismWord>
                        <ScrollReveal>Engagement to...</ScrollReveal>
                    </div>

                    {/* 2. Bubble Bullet Points */}
                    <div className="container mx-auto px-6 relative z-10 min-h-[100vh] flex flex-col justify-center max-w-4xl space-y-24">
                        <MissionPoint
                            text="Inspire deep-sea awareness in children and youth"
                            color="bg-cyan-400"
                        />
                        <MissionPoint
                            text="Empower local communities with knowledge"
                            color="bg-purple-400"
                        />
                        <MissionPoint
                            text="Advocate for the protection of deep-sea ecosystems"
                            color="bg-blue-500"
                        />
                        <MissionPoint
                            text="Counter the rising threat of deep-seabed mining"
                            color="bg-red-500"
                        />
                    </div>

                    {/* 3. Slot Machine Word Cycler */}
                    <div className="container mx-auto px-6 relative z-10 min-h-[100vh] flex flex-col justify-center items-center">
                        <h3 className="text-3xl md:text-5xl font-light text-center">
                            We work through
                            <div className="h-[1.2em] overflow-hidden inline-block align-bottom ml-4 text-cyan-300 font-bold relative">
                                <WordCycler words={["Education", "Storytelling", "Artistic Expression", "Global Partnerships"]} />
                            </div>
                        </h3>
                    </div>
                </section>
                )
}

                function MissionPoint({text, color}: {text: string, color: string }) {
    return (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-8 group"
                >
                    {/* Glowing Bubble Bullet */}
                    <div className={cn("w-6 h-6 rounded-full shrink-0 relative", color)}>
                        <div className={cn("absolute inset-0 rounded-full animate-ping opacity-20", color)} />
                        <div className="absolute inset-0 rounded-full shadow-[0_0_20px_currentColor] opacity-50" />
                    </div>

                    {/* Text */}
                    <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-200 group-hover:text-white transition-colors">
                        {text}
                    </p>
                </motion.div>
                )
}

                // Scroll-driven word cycler
                function WordCycler({words}: {words: string[] }) {
    // Scroll-driven word cycler
    const containerRef = useRef<HTMLDivElement>(null)
                    const {scrollYProgress} = useScroll({
                        target: containerRef,
                    offset: ["start end", "end start"]
    })

                    const y = useTransform(scrollYProgress, [0.3, 0.7], ["0%", `-${(words.length - 1) * 100}%`])

                    return (
                    <div ref={containerRef} className="h-[1.2em] overflow-hidden inline-block align-bottom ml-4 text-cyan-300 font-bold relative">
                        <motion.div style={{ y }} className="flex flex-col">
                            {words.map((word, i) => (
                                <span key={i} className="block h-[1.2em]">{word}</span>
                            ))}
                        </motion.div>
                    </div>
                    )
}
