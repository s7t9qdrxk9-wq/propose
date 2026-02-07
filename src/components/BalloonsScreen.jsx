"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { ArrowRight, Heart, Sparkles } from "lucide-react"

export default function BalloonsScreen({ onNext }) {

  const balloons = [
    { text: "I", color: "fill-pink-500/60", borderColor: "border-pink-400" }, 
    { text: "Love", color: "fill-rose-500/60", borderColor: "border-rose-400" }, 
    { text: "You", color: "fill-purple-500/60", borderColor: "border-purple-400" }
  ]

  const BalloonComponent = ({ balloon, delay }) => (
    <motion.div
      className="relative flex items-center justify-center will-change-transform"
      initial={{ y: "100vh", scale: 0.3, opacity: 0 }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: [-8, 8, -8],
      }}
      transition={{
        y: { delay: delay, duration: 2.5, ease: "easeOut" },
        scale: { duration: 1.5, ease: "backOut" },
        opacity: { duration: 1 },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div className="relative">
        {/* Balloon with enhanced glow */}
        <motion.div
          className={`relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center ${balloon.borderColor} border-2 rounded-full shadow-2xl shadow-pink-500/30`}
          style={{
            background: balloon.color.includes('pink') ? 'linear-gradient(135deg, rgba(236,72,153,0.6), rgba(219,39,119,0.4))' :
                       balloon.color.includes('rose') ? 'linear-gradient(135deg, rgba(244,63,94,0.6), rgba(225,29,72,0.4))' :
                       'linear-gradient(135deg, rgba(168,85,247,0.6), rgba(147,51,234,0.4))'
          }}
          whileHover={{ scale: 1.08 }}
        >
          {/* Highlight effect */}
          <div className="absolute top-4 left-6 w-8 h-8 bg-white/20 rounded-full blur-sm" />
          
          {/* Text */}
          <span className="text-white font-bold text-2xl md:text-3xl z-10 drop-shadow-lg">
            {balloon.text}
          </span>
        </motion.div>

        {/* string */}
        <svg
          className="absolute top-[85%] left-1/2"
          width="2"
          height="100"
          viewBox="0 0 2 110"
        >
          <path
            d="M1 0 Q 3 30, 1 60 T 1 110"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Sparkle decorations around balloon */}
        {[0, 72, 144, 216, 288].map((deg, i) => (
            <motion.div
                key={i}
                className="absolute"
                style={{
                    width: '100%',
                    height: '100%',
                    transform: `rotate(${deg}deg)`,
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                }}
            >
                <Sparkles 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-yellow-300" 
                    size={10} 
                />
            </motion.div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Background sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-yellow-300/30"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                    duration: 2 + Math.random() * 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                }}
            >
                <Sparkles size={Math.random() * 12 + 8} />
            </motion.div>
        ))}
      </div>

      {/* Heading & text */}
      <motion.div
        className="text-center max-w-2xl mx-auto mt-8 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.h1
            className="text-3xl md:text-4xl text-white leading-tight font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            This is what my heart has been{" "}
            <span className="text-pink-400 font-bold">wanting to say</span>
            <br />
            for so <span className="text-rose-400 font-bold">very long</span>...
            <motion.span
                className="inline-block ml-2"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                💕
            </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-pink-300/80 text-lg mt-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Watch the balloons carry my feelings to you... 🎈
        </motion.p>
      </motion.div>

      {/* Balloons container */}
      <div className="grid grid-cols-3 items-center gap-4 h-64 mt-8 relative z-10">
        {balloons.map((balloon, index) => (
            <BalloonComponent 
                key={index} 
                balloon={balloon} 
                delay={1.5 + index * 0.3}
            />
        ))}
      </div>

      {/* Continue button */}
      <motion.div
        className={`text-center mt-12 flex flex-col items-center relative z-10`}
        initial={{ y: 50, scale: 0.8, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{
          delay: 4,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.p
          className="text-pink-300/80 text-sm mb-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          There's so much more I want to show you...
        </motion.p>

        <motion.button
          onClick={onNext}
          className={`group relative bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-600 hover:via-rose-600 hover:to-purple-600 text-white px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-pink-500/40 overflow-hidden`}
          style={{
            animation: "fadeInButton 1s ease forwards 4s"
          }}
        >
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <span className="relative flex items-center">
                <Heart className="w-5 h-5 mr-2 fill-current text-pink-200" />
                Continue Our Journey
                <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <ArrowRight className="w-5 h-5" />
                </motion.span>
            </span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

