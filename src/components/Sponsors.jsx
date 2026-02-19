import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import Aurora from './Aurora'

const sponsorsData = [
    {
        category: "Title Sponsor",
        sponsors: [
            {
                name: "Navinora",
                logo: "/NAVINORA LOGO_Multi_2.png",
                desc: "Navinora is a leading technology solutions provider specializing in innovative platforms and digital transformation services. They are committed to excellence and driving the future of tech through collaboration and cutting-edge development.",
                scale: 1.5
            }
        ]
    },
    {
        category: "Event Sponsor",
        sponsors: [
            {
                name: "One Team",
                logo: "/oneteam.png",
                desc: `ONE TEAM SOLUTIONS EDTECH PRIVATE LIMITED is a leading IT training and education company based in Kochi, Kerala, specializing in job-oriented software training, internships, and career development programs. 

The company is committed to bridging the gap between academic education and industry requirements by providing practical, skill-based training aligned with current market demands.

📍 OUR BRANCHES
Kochi • Calicut • Trivandrum

🏢 OFFICE ADDRESS
Edappally Toll, 1st Floor, 33/499A, Muttathottil Building, Parutheli Palam, Kochi, 682024

📞 CONTACT
+91 99468 70803

✉️ EMAIL
sarath@oneteamsolutions.co.in`,
                scale: 1.2
            }
        ]
    },
    {
        category: "Associate Sponsors",
        sponsors: [
            {
                name: "e-School",
                logo: "/eschool.png",
                desc: "e-School provides comprehensive digital learning systems and management solutions for modern educational institutions, empowering teachers and students with smart education tools.",
                scale: 1.2
            },
            {
                name: "Varts World",
                logo: "/varts.png",
                desc: "Varts World is a creative hub dedicated to fostering innovation in digital arts and design. They provide a platform for artists to showcase their talent and connect with global opportunities.",
                scale: 1.2
            }
        ]
    }
]

function SponsorModal({ sponsor, onClose }) {
    if (!sponsor) return null;


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="relative z-10 bg-black/20 border border-white/20 rounded-2xl overflow-hidden max-w-6xl w-full shadow-[0_0_50px_rgba(238,203,136,0.2)] flex flex-col md:flex-row h-[85vh] md:h-[85vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <Aurora
                        colorStops={["#fe9b10", "#d60505", "#5227FF"]}
                        blend={0.5}
                        amplitude={1.0}
                        speed={0.5}
                    />
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-brand-primary rounded-full text-white transition-colors border border-white/10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Side - Logo */}
                <motion.div
                    className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden group flex-shrink-0 bg-black/20 flex items-center justify-center p-12"
                >
                    <div className="absolute inset-0 bg-brand-primary/5 mix-blend-overlay z-10"></div>
                    <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="w-full h-full object-contain relative z-10 transition-transform duration-700"
                        style={{ transform: `scale(${sponsor.modalScale || sponsor.scale || 1.2})` }}
                    />
                </motion.div>

                {/* Right Side - Description */}
                <div className="w-full md:w-1/2 flex flex-col relative flex-1 min-h-0 bg-black/60">
                    <div className="p-8 md:p-12 pb-0 md:pb-0 shrink-0">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_right,#AB4F41,#EECB88)] tracking-tighter shrink-0">
                            {sponsor.name}
                        </h2>
                        <div className="h-1 w-20 bg-brand-secondary mb-6 rounded-full shrink-0"></div>
                    </div>

                    <div
                        className="flex-1 overflow-y-auto px-8 md:px-12 pb-8 md:pb-12 custom-scrollbar"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed font-light whitespace-pre-line text-sm md:text-base">
                            {sponsor.desc}
                        </p>
                    </div>

                    {sponsor.link && (
                        <div className="p-6 md:p-8 border-t border-white/10 bg-black/40 backdrop-blur-md shrink-0 z-10 w-full">
                            <a
                                href={sponsor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold tracking-widest uppercase rounded-lg hover:shadow-[0_0_20px_rgba(171,79,65,0.5)] transform hover:-translate-y-1 transition-all duration-300 border border-white/10 flex items-center justify-center text-center"
                            >
                                Visit Website
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default function Sponsors() {
    const [selectedSponsor, setSelectedSponsor] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedSponsor) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [selectedSponsor])

    return (
        <section id="sponsors" className="py-32 px-6 md:px-12 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-6xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative z-10 overflow-hidden"
            >
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

                                <div className="flex flex-wrap justify-center gap-8 px-6 w-full">
                                    {category.sponsors.map((sponsor, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setSelectedSponsor(sponsor)}
                                            className={`flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center group hover:bg-white/10 transition-colors cursor-pointer p-6 ${category.category === "Title Sponsor" ? "w-full max-w-md h-48 md:h-64" : "w-64 h-32 md:w-72 md:h-40"}`}
                                        >
                                            <img
                                                src={sponsor.logo}
                                                alt={sponsor.name}
                                                className="w-full h-full object-contain transition-all duration-300"
                                                style={{ transform: `scale(${sponsor.scale || 1.5})` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedSponsor && (
                    <SponsorModal sponsor={selectedSponsor} onClose={() => setSelectedSponsor(null)} />
                )}
            </AnimatePresence>
        </section>
    )
}
