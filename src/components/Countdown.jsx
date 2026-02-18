import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft() {
        // Event Date: February 27, 2026 at 9:30 AM
        const difference = +new Date("2026-02-27T09:30:00") - +new Date()

        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return timeLeft
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center mt-2 bg-black/[0.7] backdrop-blur-lg border border-white/10 rounded-3xl px-10 py-8 shadow-2xl"
        >
            {/* Glossy shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <TimeBox value={timeLeft.days} label="Days" />
            <div className="text-xl md:text-3xl text-brand-dark font-thin mb-4">:</div>
            <TimeBox value={timeLeft.hours} label="Hrs" />
            <div className="text-xl md:text-3xl text-brand-dark font-thin mb-4">:</div>
            <TimeBox value={timeLeft.minutes} label="Min" />
            <div className="text-xl md:text-3xl text-brand-dark font-thin mb-4">:</div>
            <TimeBox value={timeLeft.seconds} label="Sec" />
        </motion.div>
    )
}

const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
        <div className="text-2xl md:text-4xl font-bold font-mono tracking-widest text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)]">
            {String(value).padStart(2, '0')}
        </div>
        <div className="text-[10px] md:text-xs text-brand-dark uppercase tracking-[0.2em] mt-2 font-semibold">
            {label}
        </div>
    </div>
)
