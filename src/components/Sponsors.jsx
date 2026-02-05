import { motion } from 'framer-motion'

// Placeholder data for sponsors
const sponsorsData = [
    {
        category: "Title Sponsor",
        logos: ["Title Corp"]
    },
    {
        category: "Associate Sponsors",
        logos: ["Associate A", "Associate B", "Associate C", "Associate D"]
    }
]

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-32 px-6 md:px-12 text-white min-h-screen flex items-center justify-center relative overflow-hidden">

            {/* Big Translucent Box */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-6xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative z-10 overflow-hidden"
            >
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tighter"
                    >
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)]">
                            OUR PARTNERS
                        </span>
                    </motion.h2>

                    <div className="grid grid-cols-1 gap-16">
                        {sponsorsData.map((category, idx) => (
                            <div key={idx} className="flex flex-col gap-8">
                                <h3 className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-center text-gray-400">
                                    {category.category}
                                </h3>

                                {/* Medium Individual Box for Category */}
                                <div className="bg-black/20 border border-white/5 rounded-xl py-10 relative overflow-hidden">
                                    {/* Fading Edges for Marquee */}
                                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
                                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/20 to-transparent z-10"></div>

                                    {/* Marquee Content */}
                                    <div className="flex overflow-hidden">
                                        <motion.div
                                            className="flex gap-16 px-6 min-w-full"
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{
                                                repeat: Infinity,
                                                ease: "linear",
                                                duration: 20 + (idx * 5) // Vary speeds slightly
                                            }}
                                        >
                                            {/* Repeat logos enough times to ensure smooth loop especially for single items */}
                                            {/* If few items, repeat more times to fill width */}
                                            {[...category.logos, ...category.logos, ...category.logos, ...category.logos, ...category.logos, ...category.logos, ...category.logos, ...category.logos].map((logo, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-shrink-0 w-56 h-28 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center group hover:bg-white/10 transition-colors cursor-pointer"
                                                >
                                                    {/* Placeholder for Logo Image */}
                                                    <span className="text-gray-500 font-mono text-sm group-hover:text-brand-accent transition-colors">
                                                        {logo}
                                                    </span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
