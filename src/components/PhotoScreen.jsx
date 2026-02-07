"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, ArrowRight, Sparkles } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"

export default function PhotoScreen({ onNext }) {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    const photos = [
        { id: 1, src: "/propose/images/1.jpg", memory: "Our first hello 👋" },
        { id: 2, src: "/propose/images/2.jpg", memory: "That smile I fell for 😊" },
        { id: 3, src: "/propose/images/3.jpg", memory: "Best moments together 💫" },
        { id: 4, src: "/propose/images/4.jpg", memory: "You make my heart skip 💓" },
    ]

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >

            {/* Decorative hearts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-400/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                        }}
                    >
                        <Heart size={Math.random() * 15 + 8} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            {/* Header section */}
            <motion.div
                className="text-center max-w-4xl mx-auto mb-10 relative z-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <motion.div
                    className="flex justify-center mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <span className="text-4xl">💕</span>
                </motion.div>
                
                <h1 className="text-2xl md:text-4xl text-white leading-relaxed mb-4 font-semibold">
                    From the very first day I met you,{" "}
                    <span className="text-pink-400 font-bold">my world changed</span>
                </h1>

                <motion.p
                    className="text-xl md:text-2xl text-rose-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Every single moment with you is my favorite memory 💝
                </motion.p>
            </motion.div>

            {/* Photo carousel */}
            <motion.div
                className="w-full max-w-5xl mx-auto flex items-center relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        depth: 150,
                        rotate: 30,
                        stretch: 0,
                        modifier: 1.5,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="photo-swiper"
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={photo.id} style={{ width: "320px" }}>
                            <motion.div
                                className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-400/30"
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <Image
                                        fill
                                        sizes="320px"
                                        src={photo.src}
                                        alt={`Our memory ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Memory label */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6"
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        <p className="text-white text-center font-semibold text-lg">
                                            {photo.memory}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            {/* Continue button */}
            <motion.div
                className="text-center mt-12 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 50 }}
                transition={{ duration: 0.8 }}
            >
                <motion.p
                    className="text-pink-300/80 text-sm mb-6 italic"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Now comes the most important part...
                </motion.p>

                <motion.button
                    onClick={onNext}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-600 hover:via-rose-600 hover:to-purple-600 text-white px-10 py-5 text-lg font-bold rounded-full shadow-2xl shadow-pink-500/40 transition-all duration-300 overflow-hidden"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    
                    <span className="relative flex items-center">
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Heart className="w-6 h-6 mr-3 fill-current text-pink-200" />
                        </motion.span>
                        See My Message
                        <Sparkles className="w-5 h-5 ml-3 text-yellow-300" />
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                </motion.button>

                {/* Decorations */}
                <motion.div
                    className="flex justify-center gap-3 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showButton ? 1 : 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="text-yellow-300/50"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                delay: i * 0.2,
                                repeat: Infinity,
                            }}
                        >
                            <Sparkles size={14} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

