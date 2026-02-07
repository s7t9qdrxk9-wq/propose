"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { Music, Music2, Pause, Play } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Show music button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((err) => {
          console.log("Audio play failed:", err)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (!isVisible) return null

  return (
    <>
      <motion.audio
        ref={audioRef}
        loop
        src="/audio/bg.mp3"
      />

      <motion.button
        initial={{ opacity: 0, scale: 0, x: -50 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-md border border-pink-400/50 p-3 rounded-full shadow-lg shadow-pink-500/30"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <motion.div
          animate={isPlaying ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{
            duration: isPlaying ? 2 : 0,
            repeat: isPlaying ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          {isPlaying ? (
            <Music2 className="w-6 h-6 text-white" />
          ) : (
            <Music className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Music indicator */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-16 right-4 z-50 flex items-center gap-2"
        >
          <div className="flex items-end gap-1 h-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-pink-500 to-purple-400 rounded-full"
                animate={{
                  height: ["30%", "100%", "50%", "80%", "30%"],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <span className="text-xs text-pink-300/80 font-medium">Playing...</span>
        </motion.div>
      )}
    </>
  )
}

