"use client";

import { motion, useInView } from "framer-motion";
import { DecryptedText } from "@/components/hero/decrypted-text";
import { useRef } from "react";

interface AdvocacyItem {
  id: number;
  title: string;
  organization?: string;
  year?: string;
  description: string;
  imageUrl: string;
}

const advocacyItems: AdvocacyItem[] = [
  {
    id: 1,
    title: "Ocean Leaders Fellowship, Sustainable Ocean Alliance",
    organization: "Sustainable Ocean Alliance",
    year: "2025",
    description:
      "Advocating for sustainable ocean practices and youth-led marine conservation initiatives through international networks, mentorship, and public outreach.",
    imageUrl: "/our_mission.jpg",
  },
  {
    id: 2,
    title: "Deep-Sea Mining Awareness and Action",
    description:
      "Engaged in campaigns to raise awareness about the impacts of deep-sea mining in South Asia. Activities include signing and promoting petitions to halt deep-sea mining, contributing to awareness programs with the Chile App, and sharing information on deep-sea life and ecosystems.",
    imageUrl: "/bg_23.png",
  },
  {
    id: 3,
    title: "SciArt for Ocean Advocacy",
    description:
      "Using art to bring attention to deep-sea biodiversity, through a series of creative projects that highlight the unique life forms of the deep ocean and their conservation importance.",
    imageUrl: "/jelly_n0_bg_1.png",
  },
  {
    id: 4,
    title: "Regional Policy Proposal Development",
    description:
      "Currently developing proposals on deep-sea mining management for the South Asian region, aiming to inform policy, promote sustainable practices, and protect vulnerable deep-sea ecosystems.",
    imageUrl: "/pexels-cristian-rojas-8837883.jpg",
  },
];

export function RecentAdvocacySection() {
  return (
    <section className="py-16 md:py-18 bg-white">
      <div className="max-w-4x1 mx-auto px-40">
        {/* Section Title */}
        <div className="text-center mb-15 md:mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black font-[family-name:var(--font-montserrat)]">
            <DecryptedText
              text="RECENT ADVOCACY"
              speed={30}
              maxIterations={15}
              animateOn="view"
              className="text-black"
            />
          </h2>
        </div>

        {/* Stacked Cards */}
        <div className="space-y-8">
          {advocacyItems.map((item, index) => {
            const ref = useRef<HTMLDivElement>(null);
            const inView = useInView(ref, { amount: 0.5, once: false });

            return (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-start pb-8 border-b-0 border-black/10 cursor-pointer hover:bg-black/20 transition-colors rounded-lg px-5 -mx-20 py-5"
              >

              {/* Image */}
              <div className="w-full md:w-32 h-20 md:h-24 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-black font-[family-name:var(--font-montserrat)] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-black/70 leading-relaxed font-[family-name:var(--font-poppins)]">
                  {item.description}
                </p>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
