import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onMenuClick }) {
    return (
        <nav className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex justify-between items-center text-white pointer-events-none">
            <div className="text-xl font-bold tracking-tighter hover:text-brand-accent transition-colors duration-300 pointer-events-auto cursor-pointer mix-blend-difference">
                IRIS
            </div>

            {/* Middle Left Bird Menu Trigger */}
            <button
                onClick={onMenuClick}
                className="fixed top-1/2 left-0 -translate-y-1/2 pointer-events-auto z-50 group focus:outline-none mix-blend-normal"
                data-hover
            >
                <div className="relative p-[1px] bg-gradient-to-b from-[#5D1F1E] via-[#CB6F4A] to-[#EECB88] rounded-r-2xl transition-transform duration-500 group-hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(171,79,65,0.2)] bg-black">
                    <div className="bg-black rounded-r-2xl p-2 md:p-3 flex items-center justify-center">
                        <motion.img
                            src="/bird.png"
                            alt="Menu bird"
                            className="w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(238,203,136,0.4)] group-hover:rotate-6 transition-all duration-500 relative z-10"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.2 }}
                        />
                    </div>
                </div>
            </button>
        </nav>
    )
}
