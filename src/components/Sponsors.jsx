import { motion } from 'framer-motion'

// Placeholder data for sponsors
const sponsorsData = [
    {
        category: "Title Sponsor",
        logos: ["/NAVINORA LOGO_Multi_2.png"]
    },
    {
        category: "Associate Sponsors",
        logos: ["/eschool.png", "/varts.png"]
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
                                <div className={`bg-black/20 border border-white/5 rounded-xl relative overflow-hidden flex justify-center items-center ${category.category === "Title Sponsor" ? "py-6 max-w-3xl mx-auto w-full" : "py-10"}`}>
                                    {category.category === "Title Sponsor" ? (
                                        <div className="w-full max-w-md h-40 flex items-center justify-center p-4 group">
                                            {category.logos[0].includes('/') ? (
                                                <img
                                                    src={category.logos[0]}
                                                    alt="Title Sponsor"
                                                    className="w-full h-full object-contain scale-[1.5] group-hover:scale-[1.65] transition-all duration-700"
                                                />
                                            ) : (
                                                <span className="text-4xl text-gray-500 font-mono group-hover:text-brand-accent transition-colors">
                                                    {category.logos[0]}
                                                </span>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="flex flex-wrap justify-center gap-8 px-6 w-full">
                                            {category.logos.map((logo, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-shrink-0 w-56 h-28 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center group hover:bg-white/10 transition-colors cursor-pointer p-4"
                                                >
                                                    {logo.includes('/') ? (
                                                        <img src={logo} alt="Sponsor Logo" className="w-full h-full object-contain scale-[2.0] group-hover:scale-[2.2] transition-all duration-300" />
                                                    ) : (
                                                        <span className="text-gray-500 font-mono text-sm group-hover:text-brand-accent transition-colors">
                                                            {logo}
                                                        </span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
