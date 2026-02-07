"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Heart, Sparkles } from "lucide-react"

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    // Generate random floating hearts
    const generateHearts = () => {
      const newHearts = []
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 20 + 10,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${Math.random() * 10 + 15}s`,
          color: [
            "text-pink-400",
            "text-rose-400",
            "text-purple-400",
            "text-fuchsia-400",
            "text-red-300",
          ][Math.floor(Math.random() * 5)],
        })
      }
      setHearts(newHearts)
    }

    // Generate sparkles
    const generateSparkles = () => {
      const newSparkles = []
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 4 + 2,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        })
      }
      setSparkles(newSparkles)
    }

    generateHearts()
    generateSparkles()
  }, [])

  return (
    <>
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={`heart-${heart.id}`}
          className={`fixed ${heart.color} pointer-events-none z-0`}
          style={{
            left: heart.left,
            bottom: "-50px",
          }}
          initial={{ opacity: 0, y: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [`0px`, `-${window.innerHeight + 100}px`],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [0, 1, 1],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: parseFloat(heart.animationDuration),
            delay: parseFloat(heart.animationDelay),
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart
            className={heart.color}
            style={{ width: heart.size, height: heart.size }}
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="fixed pointer-events-none z-0"
          style={{
            left: sparkle.left,
            top: sparkle.top,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: parseFloat(sparkle.animationDuration),
            delay: parseFloat(sparkle.animationDelay),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles
            className="text-yellow-300"
            style={{ width: sparkle.size, height: sparkle.size }}
          />
        </motion.div>
      ))}
    </>
  )
}

