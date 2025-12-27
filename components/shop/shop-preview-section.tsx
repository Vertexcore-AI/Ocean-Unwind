"use client";

import { DecryptedText } from "@/components/hero/decrypted-text";
import { ShopFrameCarousel } from "./shop-frame-carousel";

export function ShopPreviewSection() {
  return (
    <section className="relative min-h-screen py-16 md:py-20" style={{ backgroundColor: '#e2dedeff' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 relative z-[4]">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black font-[family-name:var(--font-montserrat)]">
            <DecryptedText
              text="SHOP PREVIEW"
              speed={30}
              maxIterations={15}
              animateOn="view"
              className="text-black"
            />
          </h2>
        </div>

        {/* Frame Carousel */}
        <ShopFrameCarousel />
      </div>
    </section>
  );
}
