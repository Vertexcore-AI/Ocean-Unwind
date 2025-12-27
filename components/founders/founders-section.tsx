"use client";

import { DecryptedText } from "@/components/hero/decrypted-text";
import ProfileCard from "./ProfileCard";

export function FoundersSection() {
  return (
    <section className="w-full py-0 md:py-20 relative overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-30 md:mb-30">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black font-[family-name:var(--font-montserrat)]">
          <DecryptedText
            text="CO-FOUNDED BY"
            speed={30}
            maxIterations={15}
            animateOn="view"
            className="text-black"
          />
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7x1 mx-0 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Gayathra Bandara */}
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-center">
              <ProfileCard
                name="Gayathra Bandara"
                title="Sri Lankan Scientist"
                handle="gayathra"
                status="Co-Founder"
                avatarUrl="/Gayathar.jpeg"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled={false}
              />
            </div>
            <div className="mt-6 space-y-3 text-center">
            
          
              <p className="text-base md:text-lg lg:text-xl text-black font-bold leading-relaxed font-[family-name:var(--font-popins)]">
                <DecryptedText
                  text="Pioneering research in marine biology, Gayathra brings a scientific rigor to our mission, ensuring every initiative is grounded in data and ecological preservation."
                  speed={20}
                  maxIterations={8}
                  animateOn="view"
                  className="text-black"
                />
              </p>
            </div>
          </div>

          {/* Right: Delphine Mestdagh */}
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-center">
              <ProfileCard
                name="Delphine Mestdagh"
                title="Belgian Artist"
                handle="delphine"
                status="Co-Founder"
                avatarUrl="/Delphine.jpeg"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled={false}
              />
            </div>
            <div className="mt-6 space-y-3 text-center">
            
              <p className="text-base md:text-lg lg:text-xl font-bold text-black leading-relaxed font-[family-name:var(--font-popins)]">
                <DecryptedText
                  text="Blending color and emotion, Delphine translates complex ocean narratives into visual stories that captivate hearts and inspire action across borders."
                  speed={20}
                  maxIterations={8}
                  animateOn="view"
                  className="text-black"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
