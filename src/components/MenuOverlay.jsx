import { motion } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function MenuOverlay({ active, onClose }) {
    const navigate = useNavigate()
    const location = useLocation()

    const links = [
        { title: "HOME", path: "/", type: "route" },
        { title: "EVENTS", path: "/#events", type: "hash" },
        { title: "ABOUT", path: "/about", type: "route" },
        { title: "SCHEDULE", path: "/#schedule", type: "hash" },
        { title: "REGISTER", path: "/#register", type: "hash" }
    ]

    const handleNavigation = (link) => {
        onClose()
        if (link.type === 'route') {
            navigate(link.path)
        } else {
            // Handle Hash navigation
            if (location.pathname !== '/') {
                navigate('/')
                setTimeout(() => {
                    const id = link.path.replace('/#', '')
                    const el = document.getElementById(id)
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            } else {
                const id = link.path.replace('/#', '')
                const el = document.getElementById(id)
                if (el) el.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    const variants = {
        open: {
            clipPath: "circle(150% at 100% 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        },
        closed: {
            clipPath: "circle(0% at 100% 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
    }

    const listVariants = {
        open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
    }

    const itemVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 50, opacity: 0 }
    }

    return (
        <motion.div
            className="fixed top-1/2 left-0 -translate-y-1/2 z-[60] overflow-hidden"
            style={{
                height: '80vh',
                width: '500px',
                borderTopRightRadius: '50% 50%',
                borderBottomRightRadius: '50% 50%',
                paddingRight: '2px', // Space for gradient border
                background: 'linear-gradient(to bottom, #5D1F1E, #CB6F4A, #EECB88)',
                clipPath: active ? "circle(150% at 0% 50%)" : "circle(0% at 0% 50%)",
            }}
            initial={{ clipPath: "circle(0% at 0% 50%)" }}
            animate={{ clipPath: active ? "circle(150% at 0% 50%)" : "circle(0% at 0% 50%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="w-full h-full bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-start pl-20 pr-10 relative"
                style={{
                    borderTopRightRadius: '50% 50%',
                    borderBottomRightRadius: '50% 50%',
                }}
            >
                {/* Overlay Bird Image */}
                <img
                    src="/bird.png"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[450px] md:h-[450px] opacity-50 pointer-events-none grayscale object-contain"
                />

                <div className="absolute top-1/2 -translate-y-1/2 right-6 z-50">
                    <button onClick={onClose} className="p-2 hover:scale-110 transition-transform bg-white/10 rounded-full" data-hover>
                        <div className="relative w-6 h-6">
                            <div className="absolute top-1/2 left-1/2 w-4 h-[2px] bg-white -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                            <div className="absolute top-1/2 left-1/2 w-4 h-[2px] bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                        </div>
                    </button>
                </div>

                <motion.ul
                    className="space-y-6 text-left relative z-10"
                    variants={listVariants}
                    initial="closed"
                    animate={active ? "open" : "closed"}
                >
                    {links.map((link) => (
                        <motion.li key={link.title} variants={itemVariants} className="overflow-hidden">
                            <button
                                onClick={() => handleNavigation(link)}
                                className="text-3xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:from-brand-accent hover:to-brand-primary transition-all duration-300 block text-left"
                                data-hover
                            >
                                {link.title}
                            </button>
                        </motion.li>
                    ))}
                </motion.ul>

                <div className="absolute bottom-12 left-12 text-xs text-gray-500 font-mono tracking-widest uppercase">
                    IRIS'26 · ASTRIXX
                </div>
            </div>
        </motion.div>
    )
}
