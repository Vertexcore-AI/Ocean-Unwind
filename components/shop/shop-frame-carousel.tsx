"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Global Frame Position Configuration (applies to ALL images)
const FRAME_CONFIG = {
  x: 25,        // ← EDIT: Move all images left/right
  y: -2,        // ← EDIT: Move all images up/down
  width: 312,  // ← EDIT: Width for all images
  height: 412, // ← EDIT: Height for all images
  scale: 1.0,  // ← EDIT: Scale for all images (0.8-1.2)
  objectFit: "cover" as const,      // ← EDIT: "cover" or "contain"
  objectPosition: "center",  // ← EDIT: Image crop position
};

// Art Image List
interface ArtImage {
  src: string;
  title: string;
  button: string;
}

const artImages: ArtImage[] = [
  {
    src: "/Art/Art_1.PNG",
    title: "Ocean Conservation Art 1",
    button: "Shop Now",
  },
  {
    src: "/Art/Art_2.PNG",
    title: "Ocean Conservation Art 2",
    button: "Shop Now",
  },
  {
    src: "/Art/Art_3.PNG",
    title: "Ocean Conservation Art 3",
    button: "Shop Now",
  },
  {
    src: "/Art/Art_4.PNG",
    title: "Ocean Conservation Art 4",
    button: "Shop Now",
  },
];

// Carousel Control Button
interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-white/90 hover:bg-white border-2 border-white/50 rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      aria-label={title}
    >
      <ArrowRight className="text-neutral-600 w-5 h-5" />
    </button>
  );
};

// Main Shop Frame Carousel Component
export function ShopFrameCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? artImages.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === artImages.length ? 0 : next);
  };

  const currentArt = artImages[current];

  // Popup animation variants
  const popupVariants = {
    hidden: {
      scale: 0,
      rotateY: -20,
      z: -200,
      opacity: 0,
    },
    visible: {
      scale: 0.7,
      rotateY: 0,
      z: 150,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 250,
        damping: 25,
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Absolute Background with Wooden Frame (contained within section) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] h-auto pointer-events-none z-[1]"
        style={{ perspective: "2500px" }}
      >
        <Image
          src="/Art/Untitled design.jpg"
          alt="Wooden Frame Background"
          width={1344}
          height={1000}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Art Container - Positioned within frame */}
      <div className="relative z-[2]">
        <div
          className="absolute top-1/2 left-1/2 cursor-pointer"
          onClick={() => setIsHovered(true)}
          style={{
            perspective: "2000px",
            transform: `translate(calc(-50% + ${FRAME_CONFIG.x}px), calc(-50% + ${FRAME_CONFIG.y}px))`,
          }}
        >
          {/* Art Image with transition */}
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden"
            style={{
              width: `${FRAME_CONFIG.width}px`,
              height: `${FRAME_CONFIG.height}px`,
              transform: `scale(${FRAME_CONFIG.scale})`,
            }}
          >
            <Image
              src={currentArt.src}
              alt={currentArt.title}
              fill
              className="object-cover"
              style={{
                objectFit: FRAME_CONFIG.objectFit,
                objectPosition: FRAME_CONFIG.objectPosition,
              }}
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </motion.div>

          {/* Title and Button (visible when not hovered) */}
          {!isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-25 left-0 right-9 text-center px-0"
            >
              <h3 className="text-black text-lg md:text-xl font-semibold mb-3 drop-shadow-lg">
                {currentArt.title}
              </h3>
              {/* Button with slider controls on sides */}
              <div className="flex items-center justify-center gap-4">
                <CarouselControl
                  type="previous"
                  title="Go to previous artwork"
                  handleClick={handlePreviousClick}
                />
                <button className="px-6 py-2 bg-white text-black rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                  {currentArt.button}
                </button>
                <CarouselControl
                  type="next"
                  title="Go to next artwork"
                  handleClick={handleNextClick}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Click Popup Modal */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Dark Overlay - Click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[10] cursor-pointer"
              onClick={() => setIsHovered(false)}
            />

            {/* Popup Frame with Art */}
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[11] pointer-events-none"
              style={{
                transformStyle: "preserve-3d",
                maxWidth: "1500px",
                maxHeight: "800px",
              }}
            >
              {/* Wooden Frame Border */}
              <div
                className="relative bg-[#d4a574] rounded-sm"
                style={{
                  padding: "30px",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.2)",
                }}
              >
                {/* Art Image */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: `${Math.min(FRAME_CONFIG.width * 1.5, 600)}px`,
                    height: `${Math.min(FRAME_CONFIG.height * 1.5, 800)}px`,
                  }}
                >
                  <Image
                    src={currentArt.src}
                    alt={currentArt.title}
                    fill
                    className="object-cover"
                    style={{
                      objectFit: FRAME_CONFIG.objectFit,
                      objectPosition: FRAME_CONFIG.objectPosition,
                    }}
                    sizes="800px"
                  />
                </div>

                {/* Title and Button in Popup */}
                <div className="absolute -bottom-16 left-0 right-0 text-center">
               
                  <button className="px-6 py-3 bg-white text-black rounded-2xl hover:shadow-xl transition duration-200 shadow-lg">
                    {currentArt.button}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
