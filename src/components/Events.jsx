import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import TiltedCard from './TiltedCard'
import Aurora from './Aurora'

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

function GridItem({ title, desc, index, image, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group h-[400px] border border-white/10 p-8 flex flex-col justify-end overflow-hidden backdrop-blur-sm hover:border-brand-primary/50 transition-colors duration-500 cursor-pointer"
            onClick={onClick}
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

function EventModal({ event, onClose }) {
    if (!event) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="relative z-10 bg-black/20 border border-white/20 rounded-2xl overflow-hidden max-w-6xl w-full shadow-[0_0_50px_rgba(171,79,65,0.2)] flex flex-col md:flex-row h-auto max-h-[90vh] md:h-[85vh]"
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

                {/* Left Side - Poster */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden group flex-shrink-0">
                    <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay z-10"></div>
                    <img
                        src={event.image || `https://source.unsplash.com/random/800x600?abstract,${event.title}`}
                        alt={event.title}
                        className="w-full h-full object-contain transition-transform duration-700 relative z-10 bg-black/50 backdrop-blur-sm"
                    />
                </div>

                {/* Right Side - Description & Register */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col relative overflow-y-auto custom-scrollbar flex-1 min-h-0 bg-black/60">

                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_right,#AB4F41,#EECB88)] tracking-tighter shrink-0">
                        {event.title}
                    </h2>

                    <div className="h-1 w-20 bg-brand-secondary mb-6 rounded-full shrink-0"></div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light whitespace-pre-line text-sm md:text-base">
                        {event.details || event.desc}
                    </p>

                    <div className="mt-auto shrink-0 pt-8">
                        <button className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold tracking-widest uppercase rounded-lg hover:shadow-[0_0_20px_rgba(171,79,65,0.5)] transform hover:-translate-y-1 transition-all duration-300 border border-white/10 w-full md:w-auto text-center">
                            Register Now
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default function Events() {
    const containerRef = useRef(null)
    const [selectedEvent, setSelectedEvent] = useState(null)

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [selectedEvent])

    const events = [
        {
            title: "CONCLAVE",
            desc: "A prestigious gathering of thought leaders and innovators.",
            image: "/conclave.jpeg",
            details: `🎤✨ IRIS’26 – CONCLAVE 2026 ✨🎤

🏛️ Baselios Mathews II College of Engineering, Sasthamcotta, Kerala
💻 Department of Computer Science & Engineering
💡 Astrixx – CSE Association

🚀 Welcome to CONCLAVE 2026!
Join us for an engaging tech talk session where we explore the evolving world of software development and industry trends.

🌟 Topic: The Death of Junior Developers

📌 Event Highlights:
🎙️ Expert Talk
💬 Interactive Discussion
🤝 Networking Opportunity

👥 Who Can Attend: Open for all students
💰 Registration Fee: Free

📅 Date: 27 February 2026
⏰ Time: 10:30 AM onwards
📍 Venue: College Auditorium,
Baselios Mathews II College of Engineering, Sasthamcotta

📞 For Queries & Support:
Dr. Anoop Sreekumar – 97863 95590
Kelvin Kunjumon – 73068 80119`
        },
        {
            title: "IDEATHON",
            desc: "Where disruptive ideas take flight and find their path.",
            image: "/ideath.jpeg",
            details: `✨ IDEATHON 2026 – IRIS’26 ✨
🏛️ Department of CSE
💡 Astrixx – CSE Association

🚀 Get ready to brainstorm, innovate, and solve real-world challenges at IDEATHON 2026, part of IRIS’26!
Form a team, pitch your ideas, and compete to create impactful solutions.

👥 Team Size: 4–6 Members
💰 Registration Fee: ₹400 per team
🏆 Prize Pool: ₹10,000
📍 Venue: Baselios Mathews II College of Engineering, Sasthamkotta, Kollam
📅 Date: 27 February 2026


📌 Scan the QR code on the poster to register now!

⚡ Registration will be confirmed only after payment verification.

📎 Rules and guidelines are attached.

Don’t miss this exciting opportunity to showcase your creativity and problem-solving skills! 🌟

Queries & Support
For assistance regarding IRIS'26 – IDEATHON 2026 registration, payment confirmation, or event details, contact:  
Aswin S: +91 9188237299
Prof. Greeshma Chacko: +91 99466 85090`
        },
        { title: "WORKSHOP SERIES", desc: "Deep dives into cutting-edge technology and creative skills." },
        { title: "HACKATHON", desc: "The ultimate 24h test of technical prowess and collaboration." }
    ]

    const inHouseEvents = [
        {
            title: "QUIZ",
            desc: "Test your tech knowledge against the best.",
            image: "/quiz.jpeg",
            details: `🧠✨IRIS'26 IN HOUSE TALENT HUNT QUIZ COMPETITION

Baselios Mathews II College of Engineering 

Department of Computer Science and Engineering

Astrixx- Computer Science Association

📅Date:27/02/2025
⏰Time:1.30 pm - 4.00 pm
📍Venue : Einstein Hall/ Classroom

Ready to challenge your brain and showcase your brilliance? This exciting Quiz Competition is designed to test your knowledge, logic, and teamwork!

👥 Team Event: Participate in teams of two and combine your strengths to outsmart the competition.

🔥 Collaborate.
💡 Think Smart.
🏆 Win Together.

Are you ready to become the Quiz Champions?🧠✨

Scan the QR Code on poster to register now and turn your knowledge into victory! 🏆

📎 Rules and guidelines are attached.

For queries and support :
Nandana L : 9072153040
Prof. Gimy Jacob : 81292 68266`
        },
        {
            title: "DEBUGGING",
            desc: "Find the bugs before they find you.",
            image: "/debugg.jpeg",
            details: `🐞✨ IRIS’26 IN-HOUSE TALENT HUNT – *DEBUGGING COMPETITION* ✨🐞

🏛️ Baselios Mathews II College of Engineering
💻 Department of Computer Science and Engineering
💡 Astrixx – Computer Science Association

📅 Date: 26/02/2026
⏰ Time: 1:30 PM – 4:00 PM
📍 Venue: CSE Lab 1

Ready to put your logical thinking and coding skills to the ultimate test? 💻⚡

This exciting Debugging Competition is designed to challenge participants to spot errors, analyze code, and fix bugs within a limited time!

🧩 Find the bug.
⚡ Fix it fast.
🏆 Prove your coding brilliance!

Whether you're a beginner or an experienced coder, this is your chance to showcase your technical talent in a fun and competitive environment! 🚀

📌 Scan the QR Code on the poster to register now!

📎 Rules and guidelines are attached.

📞 For Queries & Support:
Prof. Anila Kunjumon – 7510533698
Abhijith M.S – 94964 33104`
        },
        {
            title: "LOGO DESIGN",
            desc: "Craft the identity of tomorrow.",
            image: "/logodesign.jpeg",
            details: `✨ IRIS’26 In-House Talent Hunt ✨
🎨 *Logo Designing Competition* 
🏛️ Baselios Mathews II College of Engineering, Sasthamcotta 
💻 Department of Computer Science
💡 Astrixx – Computer Science Association

Unleash your creativity and visual thinking skills in our Logo Designing Competition, part of IRIS’26 In-House Talent Hunt.

Participants will be given a theme/concept and must design a unique, meaningful, and visually appealing logo within a limited time. This is your chance to showcase originality, branding sense, and digital creativity.


📅 Date: 26 February 2026
⏰ Time: 09:30 AM – 11:00 AM
📍 Venue: Project Lab
🏆 Prize Pool: ₹1,000

📌 Scan the QR code on the poster to register now!

📎 Rules and guidelines are attached.

📞 For Queries & Support:
Anandhu Anil – 9605148556
Prof. Aswathy Anand – 9544639568`
        },
        {
            title: "CTF",
            desc: "Capture the Flag: Security challenge.",
            image: "/ctf.jpeg",
            details: `🏴☠️✨ IRIS’26 IN-HOUSE TALENT HUNT – *CAPTURE THE FLAG* COMPETITION ✨🏴☠️

🏛️ Baselios Mathews II College of Engineering
💻 Department of Computer Science and Engineering
💡 Astrixx – Computer Science Association

📅 Date: 26/02/2026
⏰ Time: 11:00 AM – 12:40 PM
📍 Venue: CSE Lab 2

Ready to dive into the world of cybersecurity and put your problem-solving skills to the test? 🔐💻

This thrilling Capture The Flag (CTF) Competition is designed to challenge your logic, speed, and hacking mindset!

🚩 Solve exciting puzzles.
🧩 Crack security challenges.
🏆 Capture the flag and claim victory!

Are you ready to become the CTF Champions? 🏴☠️🔥

📌 Scan the QR Code on the poster to register now and prove your skills!

📎 Rules and guidelines are attached.

📞 For Queries & Support:
Alben S John – +91 82816 82389
Prof. Anakha A.S – +91 81369 26899`
        },
    ]

    return (
        <section id="events" className="relative min-h-screen z-10 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="EVENTS" subtitle="Unleashing Innovation" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {events.map((event, i) => (
                        <div key={i} onClick={() => setSelectedEvent(event)} className="w-full max-w-sm cursor-pointer group">
                            <TiltedCard
                                imageSrc={event.image || "https://source.unsplash.com/random/800x600?tech"}
                                altText={event.title}
                                captionText={event.title}
                                containerHeight="300px"
                                containerWidth="100%"
                                imageHeight="300px"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_right,#AB4F41,#EECB88)] whitespace-nowrap">
                                            {event.title}
                                        </h3>
                                    </div>
                                }
                            />
                        </div>
                    ))}
                </div>

                {/* In-House Talent Hunt Section */}
                <div className="mt-32">
                    <SectionHeader title="TALENT HUNT" subtitle="Iris In-House • BMCE Exclusive" align="right" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                        {inHouseEvents.map((event, i) => (
                            <div key={i} onClick={() => setSelectedEvent(event)} className="w-full max-w-sm cursor-pointer group">
                                <TiltedCard
                                    imageSrc={event.image}
                                    altText={event.title}
                                    captionText={event.title}
                                    containerHeight="300px"
                                    containerWidth="100%"
                                    imageHeight="300px"
                                    imageWidth="100%"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.05}
                                    showMobileWarning={false}
                                    showTooltip={false}
                                    displayOverlayContent={true}
                                    overlayContent={
                                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_right,#AB4F41,#EECB88)] whitespace-nowrap">
                                                {event.title}
                                            </h3>
                                        </div>
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedEvent && (
                    <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                )}
            </AnimatePresence>
        </section>
    )
}
