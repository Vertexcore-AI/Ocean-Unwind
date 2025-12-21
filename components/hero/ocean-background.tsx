"use client"

import { useEffect, useRef } from "react"

export function OceanBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        // Bubbly particles
        const particles: Particle[] = []
        const particleCount = 100

        class Particle {
            x: number
            y: number
            radius: number
            speedY: number
            speedX: number
            opacity: number
            color: string

            constructor() {
                this.x = Math.random() * width
                this.y = Math.random() * height + height // Start below screen initially
                this.radius = Math.random() * 3 + 1
                this.speedY = Math.random() * 1 + 0.2 // Float up speed
                this.speedX = (Math.random() - 0.5) * 0.5 // Lateral drift
                this.opacity = Math.random() * 0.5 + 0.1
                // Matte colors: white/grey transparency for subtle "dust" or bubbles
                const colors = ["255, 255, 255", "200, 200, 200", "150, 160, 170"]
                this.color = colors[Math.floor(Math.random() * colors.length)]
            }

            update() {
                this.y -= this.speedY
                this.x += this.speedX

                // Reset if off top of screen
                if (this.y < -50) {
                    this.y = height + Math.random() * 100
                    this.x = Math.random() * width
                }
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
                ctx.shadowBlur = 10
                ctx.shadowColor = `rgba(${this.color}, 0.8)`
                ctx.fill()
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            const p = new Particle()
            // Randomize initial Y so they cover the screen, not just bottom
            p.y = Math.random() * height
            particles.push(p)
        }

        // Animation loop
        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, width, height)

            // Draw background gradient (Deep ocean)
            // Top: Matte Dark (Charcoal). Bottom: Pure Black
            const gradient = ctx.createLinearGradient(0, 0, 0, height)
            gradient.addColorStop(0, "#0a0a0a") // Matte Charcoal/Black
            gradient.addColorStop(1, "#000000") // Pure Black
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, width, height)

            // Draw light rays (subtle)
            ctx.save();
            ctx.globalCompositeOperation = 'overlay';
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(width * 0.2 + i * width * 0.3, 0);
                ctx.lineTo(width * 0.1 + i * width * 0.3, height);
                ctx.lineTo(width * 0.4 + i * width * 0.3, height);
                ctx.lineTo(width * 0.5 + i * width * 0.3, 0);
                ctx.closePath();
                const rayGrad = ctx.createLinearGradient(0, 0, 0, height);
                rayGrad.addColorStop(0, "rgba(255, 255, 255, 0.02)"); // Very subtle white
                rayGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
                ctx.fillStyle = rayGrad;
                ctx.fill();
            }
            ctx.restore();

            // Update and draw particles
            particles.forEach(p => {
                p.update()
                p.draw()
            })

            requestAnimationFrame(animate)
        }

        animate()

        // Handle resize
        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    )
}
