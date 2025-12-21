"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface TextTypeProps {
  text: string[]
  typingSpeed?: number
  initialDelay?: number
  pauseDuration?: number
  showCursor?: boolean
  cursorCharacter?: string
  className?: string
  onComplete?: () => void
}

export function TextType({
  text,
  typingSpeed = 50,
  initialDelay = 500,
  pauseDuration = 300,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  onComplete,
}: TextTypeProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const cursorRef = useRef<HTMLSpanElement>(null)

  // GSAP cursor blinking animation
  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 })
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }
  }, [showCursor])

  // Typing animation logic
  useEffect(() => {
    if (isTypingComplete) return

    const currentLine = text[currentLineIndex]

    // Initial delay before starting
    if (currentLineIndex === 0 && currentCharIndex === 0 && displayedLines.length === 0) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(1)
      }, initialDelay)
      return () => clearTimeout(timer)
    }

    // Typing characters
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev]
          if (newLines[currentLineIndex]) {
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1)
          } else {
            newLines.push(currentLine.slice(0, currentCharIndex + 1))
          }
          return newLines
        })
        setCurrentCharIndex((prev) => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timer)
    }

    // Line complete - move to next line
    if (currentCharIndex === currentLine.length) {
      if (currentLineIndex < text.length - 1) {
        const timer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1)
          setCurrentCharIndex(0)
        }, pauseDuration)
        return () => clearTimeout(timer)
      } else {
        // All lines complete
        setIsTypingComplete(true)
        if (onComplete) {
          onComplete()
        }
      }
    }
  }, [
    currentLineIndex,
    currentCharIndex,
    text,
    typingSpeed,
    initialDelay,
    pauseDuration,
    displayedLines,
    isTypingComplete,
    onComplete,
  ])

  // Render line with special handling for "THE OCEAN"
  const renderLine = (line: string, index: number) => {
    // Special case for "THE OCEAN" line - apply cyan color and glow to "OCEAN"
    if (line.includes("OCEAN")) {
      const parts = line.split("OCEAN")
      return (
        <div key={index} className="whitespace-pre-wrap">
          {parts[0]}
          <span className="text-ocean-cyan text-glow-subtle">OCEAN</span>
          {parts[1]}
        </div>
      )
    }

    return (
      <div key={index} className="whitespace-pre-wrap">
        {line}
      </div>
    )
  }

  return (
    <div className={`inline-block ${className}`}>
      {displayedLines.map((line, index) => renderLine(line, index))}
      {showCursor && (
        <span
          ref={cursorRef}
          className="inline-block ml-1 opacity-100"
          style={{ willChange: "opacity" }}
        >
          {cursorCharacter}
        </span>
      )}
    </div>
  )
}
