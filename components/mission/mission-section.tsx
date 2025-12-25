"use client"

import SimpleRotatingText from "@/components/ui/simple-rotating-text"
import { TextType } from "@/components/hero/text-type"

export function MissionSection() {
    return (
        <section className="relative bg-black text-white py-20 overflow-hidden min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-3">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                    style={{ backgroundImage: "url('/our_mission.jpg')" }}
                />
            </div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/80 to-black/90 pointer-events-none z-[2]" />

            {/* Title - Full Width Centered */}
            <div className="relative z-10 text-center mb-12 md:mb-20">
                <h1 className="text-8xl md:text-9xl font-bold tracking-widest uppercase text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    Our Mission
                </h1>
            </div>

            {/* Two Column Layout */}
            <div className="relative z-10 container mx-0 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 min-h-[60vh]">

                    {/* Left Section - Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-2xl font-surfer text-white leading-tight">
                                To Blend
                            </span>
                            <SimpleRotatingText
                                texts={["Art", "Science", "Community Engagement"]}
                                interval={2500}
                                staggerDuration={0.03}
                                className="text-1xl"
                            />
                        </div>

                        {/* Typing animation list */}
                        <div className="text-lg md:text-2xl font-surfer text-gray-200 font-light px-5">
                            <TextType
                                text={[
                                    "● Inspire deep-sea awareness in children and youth",
                                    "● empower local communities with knowledge",
                                    "● advocate for the protection of deep-sea ecosystems",
                                    "● and counter the rising threat of deep-seabed mining"
                                ]}
                                typingSpeed={30}
                                initialDelay={1000}
                                pauseDuration={100}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </div>
                    </div>

                    {/* Right Section - Empty */}
                    <div className="flex items-center justify-center">
                        {/* Empty for now - ready for future content */}
                    </div>

                </div>
            </div>

        </section>
    )
}
