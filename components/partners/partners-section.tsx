"use client";

import { DecryptedText } from "@/components/hero/decrypted-text";
import LogoLoop from "./LogoLoop";

// Partner logos configuration
const partnerLogos = [
  {
    src: "/Logos/689461d71c31a5eb411ab06f_SOA_2025_Logo_Primary_Blue.png",
    alt: "SOA 2025",
    href: "https://example.com",
    title: "SOA 2025"
  },
  {
    src: "/Logos/csm_Earthlanka_Youth_Network_607656220f.png",
    alt: "Earthlanka Youth Network",
    href: "https://example.com",
    title: "Earthlanka Youth Network"
  },
  {
    src: "/Logos/deep_sea.png",
    alt: "Deep Sea Partner",
    href: "https://example.com",
    title: "Deep Sea"
  },
  {
    src: "/Logos/ocean Hertz.png",
    alt: "Ocean Hertz",
    href: "https://example.com",
    title: "Ocean Hertz"
  },
  {
    src: "/Logos/64070a13d5ae590fda2f695d.png",
    alt: "Partner Organization",
    href: "https://example.com",
    title: "Partner Organization"
  }
];

export function PartnersSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#3C3579' }}>
      <div className="max-w-5x2 mx- px-6">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-montserrat)]">
            <DecryptedText
              text="PARTNERS AND COLLABORATORS"
              speed={30}
              maxIterations={15}
              animateOn="view"
              className="text-white"
            />
          </h2>
        </div>

        {/* Logo Loop Container */}
        <div className="relative" style={{ height: '150px', overflow: 'hidden' }}>
          <LogoLoop
            logos={partnerLogos}
            speed={40}
            direction="left"
            logoHeight={80}
            gap={60}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor="#3C3579"
            ariaLabel="Partner and collaborator logos"
          />
        </div>
      </div>
    </section>
  );
}
