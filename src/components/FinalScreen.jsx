"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"
import confetti from "canvas-confetti"

export default function FinalScreen() {
  const [cardOpen, setCardOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [typingComplete, setTypingComplete] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const messageRef = useRef(null)

  const proposalMessage = `My dearest love,

From the moment you came into my life, everything started to change...

You brought colors to my ordinary days, warmth to my silence, and a happiness I didn't even know I was missing. ✨

Every sunrise feels brighter because of you.
Every dream feels possible because you inspire me.
Every challenge feels easier because I imagine you by my side.

You are not just my friend, you're the most special person in my life. 💕

You make me smile, you make my heart race, and you make me want to be a better version of myself every single day.

I don't know what the future holds, but I know one thing for sure...

I want that future WITH YOU. 💍

Will you be mine forever?`

  useEffect(() => {
    if (cardOpen && !typingComplete) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < proposalMessage.length) {
          setDisplayedText(proposalMessage.slice(0, currentIndex + 1))
          currentIndex++

          if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight
          }
        } else {
          setTypingComplete(true)
          clearInterval(typingInterval)
        }
      }, 35)

      return () => clearInterval(typingInterval)
    }
  }, [cardOpen, proposalMessage])

  const handleYesForever = () => {
    setShowOverlay(true)

    // Big celebration confetti!
    const colors = ["#ff69b4", "#ff1493", "#db2777", "#ec4899", "#f472b6", "#fb7185", "#fcd34d"]

    const duration = 4000
    
    // Create fireworks effect
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()

    // Main burst
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    })
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-pink-400/20"
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
                <Heart size={Math.random() * 20 + 10} fill="currentColor" />
            </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-2xl w-full mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          {!cardOpen ? (
            <motion.div
              key="closed"
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {/* Envelope animation */}
              <motion.div
                className="mb-8 flex justify-center"
                animate={{
                    rotate: [0, 3, -3, 0],
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
              >
<img src="/propose/gif/msg.gif" className="w-32" alt="love letter" />
              </motion.div>

              <motion.h1
                className="text-3xl md:text-5xl text-white mb-8 leading-tight font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                This is just for{" "}
                <span className="text-pink-400">you</span>
                <motion.span
                    className="inline-block ml-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    💕
                </motion.span>
                <span className="block text-2xl md:text-3xl mt-2">my everything...</span>
              </motion.h1>

              <motion.div
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md border-2 border-pink-400/40 rounded-3xl p-10 w-full mx-auto max-w-sm hover:border-pink-400/60 hover:shadow-2xl hover:shadow-pink-500/30"
                onClick={() => setCardOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 fill-current" />
                </motion.div>
                
                <motion.div
                    className="flex justify-center gap-2 mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    {[0, 1, 2].map((i) => (
                        <Sparkles key={i} className="text-yellow-300" size={16} />
                    ))}
                </motion.div>
                
                <p className="text-xl text-pink-200 font-semibold">Tap to open your surprise</p>
                <p className="text-pink-300/60 text-sm mt-2">Made with 💕 just for you</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              layout
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Letter card */}
              <motion.div 
                className="bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-purple-500/20 backdrop-blur-md border-2 border-pink-400/40 shadow-2xl rounded-3xl p-8 relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 63, 94, 0.1), rgba(168, 85, 247, 0.15))',
                }}
              >
                {/* Decorative corners */}
                <div className="absolute top-4 left-4">
                    <Sparkles className="text-pink-400/50" size={20} />
                </div>
                <div className="absolute top-4 right-4">
                    <Sparkles className="text-pink-400/50" size={20} />
                </div>
                <div className="absolute bottom-4 left-4">
                    <Sparkles className="text-pink-400/50" size={20} />
                </div>
                <div className="absolute bottom-4 right-4">
                    <Sparkles className="text-pink-400/50" size={20} />
                </div>

                {/* Hearts decoration */}
                <motion.div
                    className="absolute top-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Heart className="text-pink-500/30" size={40} fill="currentColor" />
                </motion.div>

                <div
                  ref={messageRef}
                  className="h-72 md:h-80 overflow-y-auto text-left pr-4 mt-4 custom-scrollbar"
                >
                  <div className="text-white leading-relaxed whitespace-pre-line text-lg font-light">
                    {displayedText}
                    {!typingComplete && (
                      <motion.span
                        className="text-pink-400 inline-block"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      >
                        |
                      </motion.span>
                    )}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Question and button */}
        <AnimatePresence>
          {typingComplete && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="text-center mt-8"
            >
              <motion.h2
                className="text-2xl md:text-4xl bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent font-bold mb-6"
                animate={{
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
              >
                So, my love... 💍
                <br />
                <span className="text-3xl md:text-5xl mt-2 block">Will you be mine forever?</span>
              </motion.h2>

              <motion.button
                onClick={handleYesForever}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-pink-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                
                <span className="relative flex items-center">
                    <motion.span
                        animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        💕
                    </motion.span>
                    <span className="text-2xl mx-3">💍</span>
                    <span>Yes, forever!</span>
                    <motion.span
                        className="ml-3"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    >
                        💕
                    </motion.span>
                </span>
              </motion.button>

              {/* Decorations */}
              <motion.div
                className="flex justify-center gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="text-yellow-300/60"
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.15,
                            repeat: Infinity,
                        }}
                    >
                        <Sparkles size={12} />
                    </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay for yes celebration */}
      <AnimatePresence>
        {showOverlay && (
            <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-3xl flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            <motion.div
                className="text-center max-w-lg mx-auto px-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                {/* Heart Animation */}
                <div className="mb-10 relative">
                <motion.div
                    className="relative w-40 h-40 mx-auto"
                >
                    {/* Left half */}
                    <motion.div
                    className="absolute inset-0"
                    initial={{ x: -50, rotate: -35 }}
                    animate={{ x: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                    >
                    <Heart
                        className="w-40 h-40 text-pink-500 fill-current"
                        style={{ clipPath: "inset(0 50% 0 0)" }}
                    />
                    </motion.div>

                    {/* Right half */}
                    <motion.div
                    className="absolute inset-0 mr-1"
                    initial={{ x: 50, rotate: 35 }}
                    animate={{ x: 0, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                    >
                    <Heart
                        className="w-40 h-40 text-pink-500 fill-current"
                        style={{ clipPath: "inset(0 0 0 50%)" }}
                    />
                    </motion.div>

                    {/* Merged heart */}
                    <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                    transition={{
                        delay: 1.8,
                        scale: {
                        delay: 2.3,
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        }
                    }}
                    >
                    <Heart className="w-40 h-40 text-pink-500 fill-current" />
                    </motion.div>
                </motion.div>
                </div>

                {/* End Message */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                >
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight">
                    You just made me
                    <br />
                    the happiest person!
                </h1>
                <motion.p
                    className="text-3xl md:text-4xl text-pink-300 font-bold mt-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ delay: 3, duration: 1.5, repeat: Infinity }}
                >
                    I love you forever 💕✨
                </motion.p>
                <p className="text-pink-400/60 text-lg mt-6">Let's make beautiful memories together</p>
                </motion.div>
            </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

