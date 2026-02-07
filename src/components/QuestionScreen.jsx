"use client"

import { motion } from "motion/react"
import { Heart, Sparkles } from "lucide-react"
import Swal from "sweetalert2"

export default function QuestionScreen({ question, onYes, isFirst }) {

    const handleNo = async () => {
        if (isFirst) {
            await Swal.fire({
                title: "🥺 Pwease open it!",
                text: "I promise it'll make you smile...",
                imageUrl: "/propose/gif/please.gif",
                imageAlt: "Please gif",
                imageWidth: 150,
                background: "linear-gradient(135deg, #1d071b, #3a1638)",
                color: "#FFEDFF",
                timer: 3500,
                showConfirmButton: true,
                confirmButtonColor: "#ec4899",
                confirmButtonText: "Okay okay~ 💕",
            })
        } else {
            await Swal.fire({
                title: "🥹 But I really like you!",
                text: "Please give me a chance...",
                imageUrl: "/propose/gif/tears.gif",
                imageAlt: "Please gif",
                imageWidth: 130,
                background: "linear-gradient(135deg, #1d071b, #3a1638)",
                color: "#FFEDFF",
                timer: 3500,
                showConfirmButton: true,
                confirmButtonColor: "#ec4899",
                confirmButtonText: "Aww okay 💕",
            })
        }
    }

    const handleYes = () => {
        // Celebrate with mini confetti
        if (typeof window !== 'undefined' && typeof confetti === 'function') {
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#ff69b4', '#ff1493', '#db2777', '#ec4899'],
            })
        }
        setTimeout(() => {
            onYes()
        }, 600)
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
        >

            {/* Decorative floating hearts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-rose-400/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 4,
                            delay: i * 0.3,
                            repeat: Infinity,
                        }}
                    >
                        <Heart size={Math.random() * 15 + 10} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <div className="text-center max-w-4xl mx-auto relative z-10">
                <motion.div
                    className="mb-8 relative"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3,
                    }}
                >
                    {/* Glowing heart container */}
                    <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center border-3 border-rose-400/50 heartbeat-glow relative">
                        {/* Sparkle decorations */}
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    transform: `rotate(${deg}deg) translateY(-65px)`,
                                    transformOrigin: 'center',
                                }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: i * 0.1,
                                    repeat: Infinity,
                                }}
                            >
                                <Sparkles className="text-yellow-300" size={10} />
                            </motion.div>
                        ))}
                        
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Heart className="w-14 h-14 text-rose-400 fill-current" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Question text */}
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        {question}
                    </span>
                </motion.h1>

                <motion.p
                    className="text-rose-200/80 text-xl md:text-2xl mb-12 font-light italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    {isFirst ? "I promise it's the best surprise ever! 💭" : "Be honest with your heart... 💗"}
                </motion.p>

                {/* Answer buttons */}
                <motion.div
                    className="flex flex-wrap gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <motion.button
                        onClick={handleYes}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="group relative px-10 py-5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 hover:from-green-500 hover:via-emerald-600 hover:to-teal-600 text-white font-bold rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative flex items-center text-lg">
                            <motion.span
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                💕
                            </motion.span>
                            <span className="mx-3">Yes</span>
                            <motion.span
                                animate={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                            >
                                😊
                            </motion.span>
                        </span>
                    </motion.button>

                    <motion.button
                        onClick={handleNo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="group relative px-10 py-5 bg-gradient-to-r from-red-400 via-rose-500 to-pink-500 hover:from-red-500 hover:via-rose-600 hover:to-pink-600 text-white font-bold rounded-full shadow-2xl shadow-red-500/30 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative flex items-center text-lg">
                            <span>No</span>
                            <motion.span
                                className="ml-2"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                            >
                                😢
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>

                {/* Cute decorations */}
                <motion.div
                    className="flex justify-center gap-3 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="text-pink-400/40"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 1.5,
                                delay: i * 0.2,
                                repeat: Infinity,
                            }}
                        >
                            <Sparkles size={16} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

