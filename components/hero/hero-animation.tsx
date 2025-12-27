"use client"

import { FloatingBubbles } from "./FloatingBubbles"
import { HeroTextSequence } from "./hero-text-sequence"

export function HeroAnimation() {
  return (
    <section className="bg-ocean-dark text-white min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Gemini_Generated.png"
             //src="/Gemini_Generated_Image_2.png"
            //src = "bg-1.jpg"
            alt="Ocean Background"
            className="w-full h-full object-cover"
          />

          {/* Deep Sea Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50" />

          {/* Floating Bubbles */}
          <FloatingBubbles />
        </div>
      </div>

      {/* Lion fish Image */}
      <div
        className="absolute"
        style={{
          right: '5%',
          bottom: '10%',
          width: '350px',
          height: '350px',
          zIndex: 20
        }}
      >
        <img
          src="/jelly_no_bg.png"
          alt="Lionfish"
          className="w-full h-full object-contain glow-animation"
        />
      </div>

      {/* Jellyfish Image */}
      <div
        className="absolute animate-float"
        style={{
          right: '75%',
          bottom: '45%',
          opacity: 1.0,
          width: '230px',
          height: '250px',
          animationDuration: '7s',
          animationDelay: '1s',
          zIndex: 50
        }}
      >
        <img
          src="/jelly_n0_bg_1.png"
          alt="Jellyfish"
          className="w-full h-full object-contain"
          style={{
            animation: 'sway 10s ease-in-out infinite, glow 3s ease-in-out infinite',
            transformOrigin: 'center center'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes sway {
          0%, 100% {
            transform: rotate(-2deg) translateX(0px);
          }
          50% {
            transform: rotate(2deg) translateX(10px);
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(48, 149, 119, 0.4))
                    drop-shadow(0 0 16px rgba(48, 149, 119, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(48, 149, 119, 0.6))
                    drop-shadow(0 0 24px rgba(48, 149, 119, 0.4))
                    drop-shadow(0 0 36px rgba(48, 149, 119, 0.2));
          }
        }

        .glow-animation {
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Center Text */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <HeroTextSequence />
      </div>
    </section>
  )
}
