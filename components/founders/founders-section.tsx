"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FloatingBubbles } from "@/components/hero/FloatingBubbles"
import { BubbleImage } from "./bubble-image"
import { BlowingBubbles } from "./blowing-bubbles"

export function FoundersSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section ref={containerRef} className="relative min-h-[250vh] bg-ocean-dark overflow-hidden text-white">
            {/* Animated Background Layer */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{
                        scale: [1.1, 1.15, 1.1],
                        x: [0, -20, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >

                </motion.div>
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black/80" />
            </div>

            {/* Floating Bubbles Overlay */}
            <FloatingBubbles />

            {/* Content Container */}
            <div className="relative z-10 container mx-0 px-6 py-32 space-y-48">

                {/* Header: Co-Founded By */}
                <div className="h-[50vh] flex items-center justify-center sticky top-0 pointer-events-none">
                    <motion.h2
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: -80, x: 50, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-blue-500 text-glow-enhanced text-center"
                    >
                        CO-FOUNDED BY
                    </motion.h2>
                </div>

                {/* Founder 1: Gayathra Bandara */}
                {/* Founder 1: Gayathra Bandara */}
                <div className="relative py-10 px-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-20 relative z-10 mx-auto">
                        {/* Text Message Bubble (Left - Longer) */}
                        <motion.div
                            className="flex-1 space-y-4 p-6 rounded-[2rem] rounded-tr-none bg-white/5 border border-white/10 backdrop-blur-md shadow-xl max-w-2xl ml-auto text-right"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center justify-end gap-3 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Gayathra Bandara</h3>
                            <p className="text-base text-cyan-100/80 italic">Sri Lankan Scientist</p>
                            <div className="h-px w-full bg-gradient-to-l from-cyan-500/50 to-transparent" />
                            <p className="text-sm leading-relaxed text-gray-200">
                                Pioneering research in marine biology, Gayathra brings a scientific rigor to our mission, ensuring every initiative is grounded in data and ecological preservation.
                            </p>
                        </motion.div>

                        {/* Image Bubble (Right) */}
                        <div className="flex-1 flex justify-start relative">
                            <BubbleImage src="/Gayathar.jpeg" alt="Gayathra Bandara" delay={0.2} className="w-48 h-48 md:w-56 md:h-56 relative z-10" />

                            {/* Fish Blowing the Bubble (Positioned below/right of the image bubble) */}
                            <motion.div
                                initial={{ opacity: 0, x: 30, rotate: 10 }}
                                whileInView={{ opacity: 1, x: 180, y: 250, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="absolute -bottom-24 -right-12 z-0"
                            >
                                <img
                                    src="/9437.jpg"
                                    alt="Fish blowing bubble"
                                    className="w-120 h-auto object-contain opacity-80 mix-blend-screen"
                                />
                                {/* Bubbles blowing LEFT towards the Founder Image */}
                                <BlowingBubbles direction="left" className="top-1/3 left-10" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Founder 2: Delphine Mestdagh */}
                <div className="relative py-80 px-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10 mx-auto">

                        {/* Image Bubble (Left) - Shifted to Start to separate from text */}
                        <div className="flex-1 flex justify-start relative">
                            <div className="relative">
                                <BubbleImage src="/Delphine.jpeg" alt="Delphine Mestdagh" delay={0.2} className="w-48 h-48 md:w-56 md:h-56" />
                                <motion.div
                                    initial={{ opacity: 0, x: -30, rotate: 0 }}
                                    whileInView={{ opacity: 1, x: 320, y: 230, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    style={{ width: '350px', maxWidth: 'none' }}
                                    className="absolute -bottom-24 -left-12 h-auto z-0"
                                >
                                    <img
                                        src="/Gemini_1.png"
                                        alt="Fish blowing bubble"
                                        className="w-full h-full object-contain opacity-80 mix-blend-screen scale-x-[-1]"
                                    />
                                    {/* Bubbles blowing RIGHT towards the Founder Image */}
                                    {/* Origin adjusted for flipped, right-facing fish mouth */}
                                    <BlowingBubbles direction="left" className="top-1/4 left-3" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Text Message Bubble (Right) */}
                        <motion.div
                            className="flex-1 space-y-4 p-6 rounded-[2rem] rounded-tl-none bg-white/5 border border-white/10 backdrop-blur-md shadow-xl max-w-2xl text-left"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 0.6 }}
                        >
                          <div className="flex items-center justify-end gap-3 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Delphine Mestdagh</h3>
                            <p className="text-base text-purple-200/80 italic">Belgian Artist</p>
                            <div className="h-px w-full bg-gradient-to-r from-purple-500/50 to-transparent" />
                            <p className="text-sm leading-relaxed text-gray-200">
                                Blending color and emotion, Delphine translates complex ocean narratives into visual stories that captivate hearts and inspire action across borders.
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* Spacer for bottom scroll */}
                <div className="h-[20vh]" />
            </div>
        </section>
    )
}
