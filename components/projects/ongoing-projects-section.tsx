"use client";

import SpotlightCard from "@/components/ui/spotlight-card";
import { DecryptedText } from "@/components/hero/decrypted-text";

export function OngoingProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Deep Sea Education for South Asia",
      subtitle: "Inspiring the next generation of ocean guardians through SciArt and storytelling.",
      description: "This flagship project brings deep-sea discovery to schools and youth communities across South Asia"
    },
    {
      id: 2,
      title: "Abyssal Life Sri Lanka: Deep-Sea Fauna Documentation Project",
      subtitle: "Researching, documenting, and preserving Sri Lanka's hidden deep-sea biodiversity",
      description: ""
    },
    {
      id: 3,
      title: "Deep Ocean Documentary Project — Storytelling for Conservation",
      subtitle: "Creating and screening ocean-focused documentaries to inspire awareness and action across South Asia.",
      description: ""
    }
  ];

  return (
    <section
      className="w-full py-12 md:py-20"
      style={{ backgroundColor: "#207884" }}
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-[family-name:var(--font-montserrat)]">
            <DecryptedText
              text="ONGOING PROJECTS"
              speed={30}
              maxIterations={15}
              animateOn="view"
              className="text-white"
            />
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="p-6 md:p-8"
              spotlightColor="rgba(16, 185, 129, 1)"
            >
              {/* Project Number */}
              <div className="text-6xl md:text-7xl font-bold text-white/20 font-[family-name:var(--font-montserrat)] mb-4">
                <DecryptedText
                  text={String(project.id).padStart(2, '0')}
                  speed={20}
                  maxIterations={8}
                  animateOn="view"
                  className="text-white/20"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl md:text-2xl font-bold text-white font-[family-name:var(--font-poppins)] mb-4">
                <DecryptedText
                  text={project.title}
                  speed={25}
                  maxIterations={10}
                  animateOn="view"
                  className="text-white"
                />
              </h3>

              {/* Project Subtitle */}
              <p className="text-lg italic text-white/90 font-[family-name:var(--font-poppins)] mb-4">
                <DecryptedText
                  text={project.subtitle}
                  speed={20}
                  maxIterations={8}
                  animateOn="view"
                  className="text-white/90"
                />
              </p>

              {/* Project Description */}
              {project.description && (
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-[family-name:var(--font-poppins)]">
                  <DecryptedText
                    text={project.description}
                    speed={18}
                    maxIterations={6}
                    animateOn="view"
                    className="text-white/80"
                  />
                </p>
              )}
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
