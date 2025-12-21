"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Youtube, Facebook, Linkedin, ArrowRight, Search } from "lucide-react"
import { HeroAnimation } from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-ocean-cream">
      {/* Hero Section */}
      <HeroAnimation />
 
      {/* Mission Section */}
      <section id="mission" className="bg-ocean-cream py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-ocean-dark mb-6 leading-tight">Our mission</h2>
              <h3 className="text-3xl font-bold text-ocean-dark mb-4">Create science-based solution for ocean</h3>
              <p className="text-foreground/70 leading-relaxed">
                To blend science, art, and community engagement to inspire deep-sea awareness in children and youth,
                empower local communities with knowledge, advocate for the protection of deep-sea ecosystems.
              </p>
            </div>
            <div className="bg-white/50 p-8 rounded-2xl">
              <p className="text-foreground/80 leading-relaxed mb-4">
                We take on the greatest ocean conservation challenges facing our planet. Through education, research,
                and advocacy, we work to protect marine biodiversity and raise awareness about the critical importance
                of healthy oceans.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Our approach combines cutting-edge science with artistic storytelling to create meaningful connections
                between people and the ocean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-2">
                <span className="text-ocean-cyan">Ocean.</span>
                <span className="text-ocean-coral">conference</span>
              </h2>
              <p className="text-xl font-semibold text-ocean-dark">Pertimbuhan Ikan. Selamatkan</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Large Card */}
              <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-1 rounded-3xl overflow-hidden shadow-lg">
                <img src="/vibrant-underwater-scene-with-coral-reef-and-tropi.jpg" alt="Ocean biodiversity" className="w-full h-full object-cover" />
              </motion.div>

              {/* Grid of smaller cards */}
              <div className="md:col-span-2 grid grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-lg">
                  <img src="/ocean-waves-with-sunset-colors.jpg" alt="Ocean waves" className="w-full h-48 object-cover" />
                </motion.div>

                <Card className="bg-ocean-cream p-6 flex flex-col justify-center rounded-3xl border-0">
                  <div className="text-5xl font-bold text-ocean-dark mb-2">2k+</div>
                  <div className="text-sm text-foreground/70">people taking part in local event</div>
                </Card>

                <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-lg">
                  <img src="/person-diving-with-sea-turtle-underwater.jpg" alt="Ocean conservation" className="w-full h-48 object-cover" />
                </motion.div>

                <Card className="bg-ocean-cyan text-white p-6 flex flex-col justify-center rounded-3xl border-0">
                  <div className="text-2xl font-bold mb-2">Closing campaign</div>
                  <div className="text-sm text-white/80">Register. Come. Join!</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="projects" className="bg-ocean-cream py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-ocean-dark mb-20">Our program</h2>

          <div className="max-w-5xl mx-auto space-y-24">
            {/* Program 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="/students-learning-about-ocean-in-classroom.jpg"
                  alt="Ocean Education"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-ocean-coral" />
                  <span className="w-2 h-2 rounded-full bg-ocean-cyan" />
                </div>
                <h3 className="text-4xl font-bold text-ocean-dark mb-4">Ocean Education</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Inspiring the next generation through SciArt and storytelling. Immersive workshops and hands-on
                  learning across South Asia, helping students explore biodiversity and conservation.
                </p>
                <Button variant="link" className="text-ocean-cyan p-0 h-auto font-semibold">
                  Read about program <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Section - We take on greatest Challenge */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-ocean-dark mb-4">Our priority</h2>
            <p className="text-foreground/70">We accept current more 75% of earth's surface</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-5xl font-bold leading-tight mb-6">
                We take on greatest <span className="text-ocean-cyan">Challenge</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Through education, research, and advocacy, we work to protect marine biodiversity and raise awareness
                about the critical importance of healthy oceans for our planet's future.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our innovative approach brings together scientists, artists, and communities to create lasting change.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img src="/dramatic-ocean-waves-crashing-against-rocky-cliffs.jpg" alt="Ocean challenges" className="w-full h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eradicate factory waste pollution */}
      <section className="bg-ocean-cream py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1"
            >
              <img src="/underwater-scene-showing-ocean-pollution-and-waste.jpg" alt="Ocean pollution" className="w-full h-96 object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-5xl font-bold leading-tight mb-6">
                Eradicate factory waste <span className="text-ocean-coral">pollution</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Industrial waste poses one of the greatest threats to ocean health. Our advocacy work focuses on raising
                awareness and pushing for stronger regulations to protect marine ecosystems.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Through partnerships with local communities and global organizations, we document pollution impacts and
                advocate for sustainable practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Save its secret */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-5xl font-bold leading-tight mb-6">
                Save its <span className="text-ocean-coral">secret</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                The deep sea holds countless mysteries and undiscovered species. Our research documents rare
                biodiversity and highlights why these ecosystems must be protected from threats like deep-seabed mining.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We use innovative techniques including eDNA sampling and underwater photography to reveal the hidden
                wonders of the abyss.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img src="/mystical-deep-sea-turtle-swimming-in-turquoise-wat.jpg" alt="Deep sea biodiversity" className="w-full h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-ocean-cream py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-ocean-dark mb-4">Register. Come. Join!</h2>
              <p className="text-foreground/70">Stay ahead with upcoming</p>
            </div>

            <h3 className="text-4xl font-bold text-ocean-dark mb-8">Events</h3>

            <div className="space-y-6">
              {[
                {
                  title: "UN World ocean day",
                  location: "Pean Arriana Park",
                  date: "June 08, 2023",
                  endDate: "June 14, 2023",
                  type: "Virtual event",
                },
                {
                  title: "All Ocean educate Innovation",
                  location: "Beach social day, for future",
                  date: "Sep 02, 2023",
                  endDate: "Sep 10, 2023",
                  type: "Virtual event",
                },
                {
                  title: "World Chasing coral documentary",
                  location: "We work to close future",
                  date: "Dec 14, 2023",
                  endDate: "Dec 18, 2023",
                  type: "Virtual event",
                },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow border border-border/50 rounded-2xl bg-white">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-ocean-dark mb-1">{event.title}</h4>
                        <p className="text-sm text-foreground/60">{event.location}</p>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-right">
                          <div className="text-sm text-foreground/60 mb-1">From</div>
                          <div className="font-semibold text-ocean-dark">{event.date}</div>
                        </div>
                        <div className="h-12 w-px bg-border" />
                        <div className="text-right">
                          <div className="text-sm text-foreground/60 mb-1">To</div>
                          <div className="font-semibold text-ocean-dark">{event.endDate}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-ocean-cyan bg-ocean-cyan/10 px-3 py-1 rounded-full">
                            {event.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-ocean-dark text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Safe the <span className="text-ocean-cyan">ocean</span>, <span className="text-ocean-cyan">feed</span> the{" "}
              <span className="text-ocean-cyan">world</span>
            </h2>
            <p className="text-lg text-white/70 mb-12">It is the task, that there one force that can future</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-dark text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Ocean<span className="text-ocean-cyan">.</span>
              </h3>
              <div className="space-y-2 text-sm text-white/60">
                <p>Action</p>
                <p>Partnership</p>
                <p>Solution</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80">Join in. Get updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-ocean-cyan"
                />
                <Button className="bg-ocean-yellow text-ocean-dark hover:bg-ocean-yellow/90 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
            <div className="text-sm text-white/40">© 2025 Oceans Unmined. All rights reserved.</div>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/company/ocean-unmined/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-ocean-cyan transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/oceans_unmined/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-ocean-cyan transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584388191133"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-ocean-cyan transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZybxr7BQbt1AuThLquBsJw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-ocean-cyan transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
