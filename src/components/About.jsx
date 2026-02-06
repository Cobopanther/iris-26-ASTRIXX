import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const MemberCard = ({ name, role, className = "", image, batch }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-brand-primary/50 transition-all duration-300 ${className}`}
    >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-dark/20 border-2 border-white/10 group-hover:border-brand-accent/50 mb-4 overflow-hidden relative">
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs">
                    PHOTO
                </div>
            )}
        </div>

        <h3 className="text-white font-medium text-lg tracking-wide group-hover:text-brand-accent transition-colors text-center">{name || "Name Needed"}</h3>
        <p className="text-brand-primary text-sm font-mono tracking-wider uppercase mt-1 text-center">{role}</p>
        <p className="text-gray-400 text-xs mt-2 font-light">{batch}</p>
    </motion.div>
);

const SectionTitle = ({ children }) => (
    <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary mb-8"
        id="members"
    >
        {children}
    </motion.h3>
);

const About = () => {

    const executivePanel = [
        { name: "Abhimanyu", role: "President", batch: "S8", image: "/1.png" },
        { name: "Meenakshy M.S.", role: "Vice President", batch: "S6", image: "/15.png" },
        { name: "Nandhana L", role: "Secretary", batch: "S8", image: "/2.png" },
        { name: "Joel Pappachan Binu", role: "Joint Secretary", batch: "S6", image: "/5.png" },
        { name: "Aswin", role: "Treasurer", batch: "S8", image: "" },
        { name: "Alby Sajan Alex", role: "Treasurer", batch: "S8", image: "/10.png" },
        { name: "Abhishek Bruno", role: "Joint Treasurer", batch: "S6", image: "/6.png" },
    ];

    const editorialBoard = [
        { name: "Anand", role: "Editor", batch: "S6", image: "/3.png" },
        { name: "Kelvin", role: "Editor", batch: "S8", image: "/7.png" },
    ];

    const organizingCommittee = [
        { name: "Anandhu Anil", role: "Member", batch: "S8", image: "/4.png" },
        { name: "Gouri Krishna", role: "Member", batch: "S8", image: "/11.png" },
        { name: "Abhai", role: "Member", batch: "S8", image: "/9.png" },
        { name: "Nakshatra B V", role: "Member", batch: "S6", image: "/14.png" },
        { name: "Nikhil Nadh", role: "Member", batch: "S6", image: "/20.png" },
        { name: "Jiorijin prakash", role: "Member", batch: "S4", image: "/8.png" },
        { name: "Aneez", role: "Member", batch: "S4", image: "/19.png" },
        { name: "Sreenandhan Ajay", role: "Member", batch: "S4", image: "/16.png" },
        { name: "Basil", role: "Member", batch: "S6", image: "/17.png" },
        { name: "Anandhu", role: "Member", batch: "S2", image: "/13.png" },
    ];

    const mediaWing = [
        { name: "Akhin Cheriyan", role: "Media Head", batch: "S8", image: "/18.png" },
        { name: "Athuljeev", role: "Media Head", batch: "S8", image: "/12.png" },
        { name: "Jinu", role: "Media Head", batch: "", image: "" }, // No image/batch provided
    ];



    return (
        <section className="relative w-full py-24 px-6 z-20" id="about">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[10vw] md:text-[6vw] font-bold leading-none tracking-tighter text-white/20 mb-6 select-none">
                            ABOUT <br />
                            <span className="text-brand-primary/80">ASTRIXX</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-gray-300 font-light text-lg leading-relaxed border-l-2 border-brand-primary/30 pl-8"
                    >
                        <p>
                            <strong className="text-brand-accent font-medium">ASTRIXX</strong> is the pulsating heart of the Department of Computer Science and Engineering at <span className="text-white">Baselios Mathews II College of Engineering (BMCE)</span>.
                        </p>
                        <p>
                            Established in 2002 in Sasthamcotta, Kerala, our department has stood as a pillar of technical excellence, offering premier B.Tech programs meticulously designed to align with evolving industry standards.
                        </p>
                        <p>
                            Under the visionary guidance of our Head of Department, <strong className="text-white text-xl block mt-2">Dr. Kavitha V K</strong>, we cultivate an ecosystem of innovation, rigorous academic pursuit, and professional development.
                        </p>
                    </motion.div>
                </div>

                {/* Members Section */}
                <div className="space-y-20">

                    {/* Core Committee */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-[1px] w-12 bg-brand-primary"></div>
                            <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Executive Panel</h3>
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {executivePanel.map((member, i) => (
                                <MemberCard
                                    key={i}
                                    {...member}
                                    className={i === executivePanel.length - 1 ? "md:col-span-2 lg:col-span-3 lg:w-1/3 lg:mx-auto" : ""}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Editorial Board */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-[1px] w-12 bg-brand-primary"></div>
                            <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Editorial Board</h3>
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {editorialBoard.map((member, i) => (
                                <MemberCard key={i} {...member} />
                            ))}
                        </div>
                    </div>

                    {/* Organizing Committee */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-[1px] w-12 bg-brand-primary"></div>
                            <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Organizing Committee</h3>
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {organizingCommittee.map((member, i) => {
                                let positionClasses = "";
                                if (i === 8) positionClasses = "lg:col-start-2";
                                if (i === 9) positionClasses = "md:col-start-2 lg:col-start-auto";

                                return (
                                    <MemberCard
                                        key={i}
                                        {...member}
                                        className={`scale-90 ${positionClasses}`}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Media Wing */}
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-[1px] w-12 bg-brand-primary"></div>
                            <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Media Wing</h3>
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {mediaWing.map((member, i) => (
                                <MemberCard key={i} {...member} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </section>
    );
};

export default About;
