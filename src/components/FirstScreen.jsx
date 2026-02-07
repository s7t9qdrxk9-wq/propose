"use client"

import { motion } from "motion/react"
import { Heart, Sparkles } from "lucide-react"

export default function FirstScreen({ onNext }) {

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >

            {/* Floating hearts background effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-400/30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 1],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    >
                        <Heart
                            className="text-pink-400/40"
                            size={Math.random() * 20 + 10}
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="text-center max-w-3xl mx-auto relative z-10">
                <motion.div
                    className="mb-8 relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3,
                    }}
                >
                    <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-br from-purple-500/30 to-rose-500/30 flex items-center justify-center border-4 border-pink-400/50 heartbeat-glow relative">
                        {/* Sparkle decorations */}
                        {[0, 72, 144, 216, 288].map((deg, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    transform: `rotate(${deg}deg) translateY(-85px)`,
                                    transformOrigin: 'center',
                                }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                }}
                            >
                                <Sparkles className="text-yellow-300" size={12} />
                            </motion.div>
                        ))}
                        
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <img 
                                src="/gif/cute.gif" 
                                className="w-36 h-36 object-contain" 
                                alt="cute panda" 
                            />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl text-white mb-6 font-bold leading-tight relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                        Hey my love...
                    </span>
                    <motion.br
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    />
                    <span className="text-3xl md:text-5xl">I have something</span>
                    <motion.span
                        className="inline-block ml-3"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        💕
                    </motion.span>
                    <br />
                    <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        super special
                    </span>{" "}
                    to tell you...
                </motion.h1>

                {/* Romantic subtitle */}
                <motion.p
                    className="text-pink-200/90 text-xl md:text-2xl mb-10 font-light italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    Something straight from my heart to yours 💝
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
                >
                    <motion.button
                        onClick={onNext}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-600 hover:via-rose-600 hover:to-purple-600 text-white px-10 py-5 text-xl font-bold rounded-full shadow-2xl shadow-pink-500/40 transition-all duration-300 overflow-hidden"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        
                        <span className="relative flex items-center">
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Heart className="w-6 h-6 mr-3 text-pink-200 fill-current" />
                            </motion.span>
                            Tap to Begin Our Story
                            <motion.span
                                className="ml-3"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                ✨
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>

                {/* Cute decorative elements */}
                <motion.div
                    className="flex justify-center gap-4 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                >
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="text-pink-400/50"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                delay: i * 0.15,
                                repeat: Infinity,
                            }}
                        >
                            <Sparkles size={14} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

