"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Youtube, Facebook, Linkedin, ArrowRight, Search } from "lucide-react"
import { HeroAnimation } from "@/components/hero"
import { FoundersSection } from "@/components/founders/founders-section"
import { MissionSection } from "@/components/mission/mission-section"
import { ApproachSection } from "@/components/mission/approach-section"
import { OngoingProjectsSection } from "@/components/projects/ongoing-projects-section"
import { RecentAdvocacySection } from "@/components/advocacy/recent-advocacy-section"
import { ShopPreviewSection } from "@/components/shop/shop-preview-section"
import { PartnersSection } from "@/components/partners/partners-section"
import { DecryptedText } from "@/components/hero/decrypted-text"
import { GooeySocialNav } from "@/components/ui/gooey-social-nav"

export default function Home() {
 
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-ocean-cream">
      {/* Hero Section */}
      <HeroAnimation />

      {/* Mission Section */}
      <MissionSection />

      {/* Approach Section */}
      <ApproachSection />

      {/* Founders / Organization Introduction */}
      <FoundersSection />

      {/* Ongoing Projects Section */}
      <OngoingProjectsSection />

      {/* Recent Advocacy Section */}
      <RecentAdvocacySection />

      {/* Shop Preview Section */}
      <ShopPreviewSection />

      {/* Partners and Collaborators Section */}
      <PartnersSection />

      {/* Final CTA Section */}
      <section className="bg-ocean-dark text-white py-16 md:py-20">
        <div className="container mx-0 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3x2 mx-0"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-[family-name:var(--font-montserrat)]">
              <DecryptedText
                text="One Ocean , One Planet"
                speed={30}
                maxIterations={15}
                animateOn="view"
                className="text-white"
              />
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-12">Unmined oceans, unlimited futures</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button className="bg-ocean-yellow text-ocean-dark hover:bg-ocean-yellow/90 font-bold text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                Donate Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-dark text-white py-10 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
         
            <div>
              <h4 className="text-xl md:text-2xl font-semibold mb-6 text-white">Join Our Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-ocean-cyan"
                />
                <Button className="bg-ocean-yellow text-ocean-dark hover:bg-ocean-yellow/90 font-semibold text-base px-4 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
            <div className="text-sm text-white/40">© 2025 Oceans Unmined. All rights reserved.</div>
            <GooeySocialNav />
          </div>
        </div>
      </footer>
    </div >
  )
}
