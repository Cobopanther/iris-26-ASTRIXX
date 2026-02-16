import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ScheduleItem({ title, time, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 md:gap-6 border-l-2 border-brand-accent/30 pl-6 md:pl-8 pb-8 last:pb-0 last:border-l-0 relative"
        >
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(238,203,136,0.8)]"></div>
            <div className="bg-white/5 p-4 md:p-6 rounded-xl w-full border border-white/5 hover:bg-white/10 transition group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{title}</h3>
                    <span className="text-brand-accent font-mono text-xs md:text-sm bg-brand-accent/10 px-2 py-1 rounded border border-brand-accent/20 whitespace-nowrap">
                        {time}
                    </span>
                </div>
                {desc && <p className="text-gray-400 text-sm">{desc}</p>}
            </div>
        </motion.div>
    )
}

function DateGroup({ date, events }) {
    return (
        <div className="mb-8 last:mb-0">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-brand-secondary">🗓️</span>
                <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#AB4F41,#EECB88)]">
                    {date}
                </span>
                <div className="h-[1px] flex-grow bg-white/10"></div>
            </h3>
            <div className="space-y-2">
                {events.map((event, index) => (
                    <ScheduleItem key={index} {...event} />
                ))}
            </div>
        </div>
    )
}

export default function Schedule() {
    const [activeTab, setActiveTab] = useState("general")

    const generalEvents = [
        {
            date: "February 27, 2026",
            items: [
                { title: "Ideathon", time: "9:30 AM – 3:30 PM", desc: "Showcase your innovative ideas." },
                { title: "Conclave", time: "4:00 PM – 6:00 PM", desc: "Tech talks and industry insights." },
            ]
        }
    ]

    const inHouseEvents = [
        {
            date: "February 26, 2026",
            items: [
                { title: "Debugging", time: "1:30 PM - 3:00 PM", desc: "Find the bugs before they find you." },
                { title: "Logo Design", time: "9:30 AM - 11:00 AM", desc: "Craft the identity of tomorrow." },
                { title: "CTF (Capture The Flag)", time: "11:00 AM - 12:40 PM", desc: "Security challenge." },
            ]
        },
        {
            date: "February 27, 2026",
            items: [
                { title: "Quiz Competition", time: "1:30 PM - 4:00 PM", desc: "Test your tech knowledge." },
            ]
        }
    ]

    return (
        <section id="schedule" className="px-6 py-32 relative z-10 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-center mb-12 tracking-tighter text-white"
                >
                    SCHEDULE
                </motion.h2>

                {/* Tags Navigation */}
                <div className="flex justify-center mb-16 px-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => setActiveTab("general")}
                            className={`relative px-6 py-3 text-sm md:text-base font-mono font-bold tracking-wider uppercase transition-all duration-300 border rounded-full overflow-hidden bg-black/[0.7] backdrop-blur-sm hover:bg-black/[1] hover:shadow-[0_0_15px_rgba(171,79,65,0.1)] ${activeTab === "general"
                                ? "border-brand-accent/50 shadow-[0_0_15px_rgba(238,203,136,0.1)]"
                                : "border-white/10 text-gray-400 hover:text-white hover:border-brand-primary/30"
                                }`}
                        >
                            <span className={`relative z-10 ${activeTab === "general"
                                ? "text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)]"
                                : ""
                                }`}>
                                General Events
                            </span>
                        </button>

                        <button
                            onClick={() => setActiveTab("inhouse")}
                            className={`relative px-6 py-3 text-sm md:text-base font-mono font-bold tracking-wider uppercase transition-all duration-300 border rounded-full overflow-hidden bg-black/[0.7] backdrop-blur-sm hover:bg-black/[1] hover:shadow-[0_0_15px_rgba(171,79,65,0.1)] ${activeTab === "inhouse"
                                ? "border-brand-accent/50 shadow-[0_0_15px_rgba(238,203,136,0.1)]"
                                : "border-white/10 text-gray-400 hover:text-white hover:border-brand-primary/30"
                                }`}
                        >
                            <span className={`relative z-10 ${activeTab === "inhouse"
                                ? "text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)]"
                                : ""
                                }`}>
                                In-House Events
                            </span>
                        </button>
                    </div>
                </div>

                <div className="bg-black/40 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <AnimatePresence mode="wait">
                        {activeTab === "general" ? (
                            <motion.div
                                key="general"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                {generalEvents.map((group, index) => (
                                    <DateGroup key={index} date={group.date} events={group.items} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="inhouse"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {inHouseEvents.map((group, index) => (
                                    <DateGroup key={index} date={group.date} events={group.items} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
