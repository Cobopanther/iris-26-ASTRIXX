import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center">

            {/* Background Video or Gradient */}
            <div className="absolute inset-0 z-0 opacity-40">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    {/* Placeholder video - using a dark abstract abstract background if real one not available */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-purple-lights-texture-3269-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>



            <motion.div
                className="relative z-10 px-6 max-w-5xl mx-auto"
                style={{ y, opacity }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-sm md:text-xl font-bold tracking-[0.3em] uppercase mb-4 text-white"
                >
                    ASTRIXX PRESENTS
                </motion.p>
                <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)] mb-8 select-none">
                    IRIS'26
                </h1>

                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-xl md:text-2xl text-white font-light tracking-wide max-w-2xl mx-auto"
                    >
                        Where Ideas Ignite & Creativity Converges
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-12 flex flex-col items-center gap-4"
                >
                    <div className="flex flex-col items-center justify-center gap-6 w-full mb-2">
                        {/* Date Pill */}
                        <a
                            href="https://www.google.com/calendar/render?action=TEMPLATE&text=IRIS'26&dates=20260227T040000Z/20260228T123000Z&details=Presented+by+ASTRIXX.+Where+Ideas+Ignite+and+Creativity+Converges.&location=Baselios+Mathews+II+College+of+Engineering,+Sasthamcotta,+Kerala&sf=true&output=xml"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-6 py-3 bg-black/[0.7] backdrop-blur-sm border border-white/10 rounded-full hover:bg-black/[1] transition-all duration-300 group cursor-pointer hover:border-brand-accent/30 hover:shadow-[0_0_15px_rgba(238,203,136,0.1)]"
                        >
                            <motion.span
                                className="text-brand-accent text-xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                📅
                            </motion.span>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono group-hover:text-brand-accent transition-colors">Date</span>
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)] text-sm font-bold tracking-wide">February 27 & 28, 2026</span>
                            </div>
                        </a>

                        {/* Location Pill */}
                        <a
                            href="https://maps.app.goo.gl/cDAk48D5S5dgTGQv7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-6 py-3 bg-black/[0.7] backdrop-blur-sm border border-white/10 rounded-full hover:bg-black/[1] transition-all duration-300 group cursor-pointer hover:border-brand-primary/30 hover:shadow-[0_0_15px_rgba(171,79,65,0.1)]"
                        >
                            <motion.img
                                src="/location-pin.png"
                                alt="Location"
                                className="w-8 h-8 object-contain"
                                animate={{ scale: [1, 1.1, 1], translateY: [0, -3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono group-hover:text-brand-primary transition-colors">Location</span>
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)] text-sm font-bold tracking-wide whitespace-normal break-words max-w-[60vw] md:max-w-none">Baselios Mathews II College of Engineering ,Sasthamcotta</span>
                            </div>
                        </a>
                    </div>

                    <Countdown />
                </motion.div>
            </motion.div>



        </section>
    )
}
