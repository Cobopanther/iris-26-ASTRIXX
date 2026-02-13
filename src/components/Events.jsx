import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function SectionHeader({ title, subtitle, align = "left" }) {
    return (
        <div className={`mb-16 ${align === "right" ? "text-right" : "text-left"}`}>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)] mb-4"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-brand-accent font-mono uppercase tracking-widest text-sm"
            >
                {subtitle}
            </motion.p>
        </div>
    )
}

function GridItem({ title, desc, index, image }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group h-[400px] border border-white/10 p-8 flex flex-col justify-end overflow-hidden backdrop-blur-sm hover:border-brand-primary/50 transition-colors duration-500"
            data-hover
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>

            {/* Abstract Background for each card */}
            <div className="absolute inset-0 bg-gray-dark opacity-100 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
                <div
                    className={`w-full h-full bg-cover bg-center transition-all duration-700`}
                    style={{ backgroundImage: `url('${image || `https://source.unsplash.com/random/800x600?abstract,${index}`}')` }}
                ></div>
            </div>

            <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)]">{title}</h3>
                <div className="h-[1px] w-12 bg-brand-secondary mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-light font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {desc}
                </p>
            </div>
        </motion.div>
    )
}

export default function Events() {
    const containerRef = useRef(null)

    const events = [
        { title: "CONCLAVE", desc: "A prestigious gathering of thought leaders and innovators.", image: "/conclave-poster.jpeg" },
        { title: "IDEATHON", desc: "Where disruptive ideas take flight and find their path.", image: "/idea.jpeg" },
        { title: "WORKSHOP SERIES", desc: "Deep dives into cutting-edge technology and creative skills." },
        { title: "HACKATHON", desc: "The ultimate 24h test of technical prowess and collaboration." }
    ]

    const inHouseEvents = [
        { title: "QUIZ COMP", desc: "Test your tech knowledge against the best." },
        { title: "DEBUGGING", desc: "Find the bugs before they find you." },
        { title: "LOGO DESIGN", desc: "Craft the identity of tomorrow." },
        { title: "CTF", desc: "Capture the Flag: Security challenge." },
    ]

    return (
        <section id="events" className="relative min-h-screen z-10 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="EVENTS" subtitle="Unleashing Innovation" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {events.map((event, i) => (
                        <GridItem key={i} index={i} {...event} />
                    ))}
                </div>

                {/* In-House Talent Hunt Section */}
                <div className="mt-32">
                    <SectionHeader title="TALENT HUNT" subtitle="Iris In-House • BMCE Exclusive" align="right" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {inHouseEvents.map((event, i) => (
                            <GridItem key={i} index={i} {...event} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
