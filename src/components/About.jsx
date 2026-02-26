import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const MemberCard = ({ name, role, className = "", image, batch, zoom }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative flex flex-col items-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-brand-primary/50 transition-all duration-300 w-[calc(50%-12px)] sm:w-[260px] md:w-[280px] ${className}`}
    >
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-dark/20 border-2 border-white/10 group-hover:border-brand-accent/50 mb-4 overflow-hidden relative">
            {image ? (
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{ transform: `scale(${zoom || 1})` }}
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs">
                    PHOTO
                </div>
            )}
        </div>

        <h3 className="text-white font-medium text-sm sm:text-lg tracking-wide group-hover:text-brand-accent transition-colors text-center line-clamp-1">{name || "Name Needed"}</h3>
        <p className="text-brand-primary text-[10px] sm:text-sm font-mono tracking-wider uppercase mt-1 text-center">{role}</p>
        <p className="text-gray-400 text-[9px] sm:text-xs mt-2 font-light">{batch}</p>
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
    const [activeTab, setActiveTab] = useState("student");

    const tabs = [
        { id: "staff", label: "Staff Coordinators" },
        { id: "student", label: "Student Coordinators" },
        { id: "iris", label: "Iris 26 Organizers" },
    ];

    const executivePanel = [
        { name: "Abhimanyu S", role: "President", batch: "S8", image: "/1.png" },
        { name: "Meenakshy M S", role: "Vice President", batch: "S6", image: "/15.png" },
        { name: "Nandana L", role: "Secretary", batch: "S8", image: "/2.png" },
        { name: "Joel Pappachan Binu", role: "Joint Secretary", batch: "S6", image: "/5.png" },
        { name: "Aswin S", role: "Treasurer", batch: "S8", image: "/21.png", zoom: 3 },
        { name: "Alby Sajan Alex", role: "Treasurer", batch: "S8", image: "/10.png" },
        { name: "Abhishek Bruno", role: "Joint Treasurer", batch: "S6", image: "/6.png" },
    ];

    const editorialBoard = [
        { name: "Anand A B", role: "Editor", batch: "S6", image: "/3.png" },
        { name: "Kelvin Kunjumon", role: "Editor", batch: "S8", image: "/7.png" },
    ];

    const staffCoordinators = [
        { name: "Dr. Kavitha V K", role: "Head of Department", image: "/kavi.png" },
        { name: "Prof. Jayakrishnan R.", role: "Staff Coordinator", image: "/jk.png" },
        { name: "Prof. Aswathy Anand", role: "Staff Coordinator", image: "/asw.png" },
    ];

    const organizingCommittee = [
        { name: "Anandhu Anil", role: "Member", batch: "S8", image: "/4.png" },
        { name: "Gouri Krishna", role: "Member", batch: "S8", image: "/11.png" },
        { name: "Abhai Clement", role: "Member", batch: "S8", image: "/9.png" },
        { name: "Nakshathra B V", role: "Member", batch: "S6", image: "/14.png" },
        { name: "Nikhil Nadh S", role: "Member", batch: "S6", image: "/20.png" },
        { name: "Jiorijin Prakash", role: "Member", batch: "S4", image: "/8.png" },
        { name: "Aneez Muhammed", role: "Member", batch: "S4", image: "/19.png" },
        { name: "Sreenandan Ajay", role: "Member", batch: "S4", image: "/16.png" },
        { name: "Muhammed Basil", role: "Member", batch: "S4", image: "/17.png" },
        { name: "Anandha Krishnan", role: "Member", batch: "S2", image: "/13.png" },
        { name: "Nimisha Pramod", role: "Member", batch: "S2", image: "/23.png" },
        { name: "Abikrishna K B", role: "Member", batch: "S2", image: "/24.png" },
        { name: "Anandhu Rajesh", role: "Member", batch: "S2", image: "/25.png" },
    ];

    const mediaWing = [
        { name: "Akhin Cheriyan", role: "Media Head", batch: "S8", image: "/18.png" },
        { name: "Athuljeev S", role: "Media Head", batch: "S8", image: "/12.png" },
        { name: "Jinu J", role: "Media Head", batch: "", image: "/22.png", zoom: 3 },
    ];

    // Iris 26 Coordinators Data
    const irisCore = [
        { name: "Abhimanyu S", image: "/1.png" },
        { name: "Nandana L", image: "/2.png" },
        { name: "Kelvin Kunjumon", image: "/7.png" },
        { name: "Meenakshy M S", image: "/15.png" },
        { name: "Joel Pappachan Binu", image: "/5.png" },
        { name: "Nikhil Nadh S", image: "/20.png" },
        { name: "Anandhu Anil", image: "/4.png" },
    ];

    const irisProgram = [
        { name: "Gouri Krishna", image: "/11.png" },
        { name: "Nakshathra B V", image: "/14.png" },
        { name: "Abhai Clement", image: "/9.png" },
        { name: "Akhin Cheriyan", image: "/18.png" },
        { name: "Aswin S", image: "/21.png", zoom: 3 },
        { name: "Alphy Sajan", image: "/alpnew.png", zoom: 1.2 },
        { name: "Anand A B", image: "/3.png" },
        { name: "Abhishek Bruno", image: "/6.png" },
    ];

    const irisMedia = [
        { name: "Meenakshy M S", role: "Head", image: "/15.png" },
        { name: "Nakshathra B V", role: "Head", image: "/14.png" },
        { name: "Gouri Bhaskar", image: "/gouri.png" },
        { name: "Aby John", image: "/aby.png" },
        { name: "Jinu J", image: "/22.png", zoom: 3 },
        { name: "Amal Shaji", image: "/amalshajii.png" },
        { name: "Abhinav P", image: "/abhinav.png" },
        { name: "Abul Gaiz", image: "/gaiz.png" },
        { name: "Job T Biju", image: "/job.png" },
        { name: "Rijin Reji", image: "/rijin.png" },
        { name: "Athuljeev S", image: "/12.png" },
        { name: "Akhin Cheriyan", image: "/18.png" },
    ];

    const irisVideoPromoters = [
        { name: "Adithyan R", image: "/adithyanr.png" },
        { name: "Abhinav P", image: "/abhinav.png" },
        { name: "Devadethan A", image: "/devadethan.png" },
        { name: "Jeen George Mathunny", image: "/jeen.png" },
        { name: "Nandana S R", image: "/nandana.png" },
        { name: "Meenakshy M S", image: "/15.png" },
    ];

    const irisPromotion = [
        { name: "Alby Sajan Alex", role: "Head", image: "/10.png" },
        { name: "Anand A B", role: "Head", image: "/3.png" },
        { name: "Aby John", image: "/aby.png" },
        { name: "Amal Shaji", image: "/amalshajii.png" },
        { name: "Akhin Cheriyan", image: "/18.png" },
        { name: "Alphy Sajan", image: "/alpnew.png", zoom: 1.2 },
        { name: "Abhishek Bruno", image: "/6.png" },
        { name: "Adithyan S Prathap", image: "/adhiprathap.png" },
        { name: "Joel Mathew", image: "/joelmathwe.png" },
        { name: "Sreenandan Ajay", image: "/16.png" },
        { name: "Joel K Jose", image: "/joelkjose.png" },
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
                        className="space-y-6 text-gray-300 font-light text-lg leading-relaxed bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-brand-primary/50 transition-all duration-300"
                    >
                        <p>
                            <strong className="text-brand-accent font-medium">ASTRIXX</strong> is the pulsating heart of the Department of Computer Science and Engineering at <span className="text-white">Baselios Mathews II College of Engineering (BMCE)</span>.
                        </p>
                        <p>
                            Established in 2002 in Sasthamcotta, Kerala, our department has stood as a pillar of technical excellence, offering premier B.Tech programs meticulously designed to align with evolving industry standards.
                        </p>
                        <p>
                            Under the visionary guidance of our Head of Department, <strong className="text-white text-xl block mt-2">Dr. Kavitha V K</strong> we cultivate an ecosystem of innovation, rigorous academic pursuit, and professional development.
                        </p>
                    </motion.div>
                </div>

                {/* Members Section */}
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-6 py-3 text-base md:text-lg font-mono font-bold tracking-wider uppercase transition-all duration-300 border rounded-full overflow-hidden bg-black/[0.7] backdrop-blur-sm hover:bg-black/[1] hover:shadow-[0_0_15px_rgba(171,79,65,0.1)] ${activeTab === tab.id
                                ? "border-brand-accent/50 shadow-[0_0_15px_rgba(238,203,136,0.1)]"
                                : "border-white/10 text-gray-400 hover:text-white hover:border-brand-primary/30"
                                }`}
                        >
                            <span className={`relative z-10 ${activeTab === tab.id
                                ? "text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)]"
                                : ""
                                }`}>
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content Sections */}
                <div className="min-h-[400px]">

                    {/* Student Coordinators (Existing Data) */}
                    {activeTab === "student" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-20"
                        >
                            {/* Core Committee */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] w-12 bg-brand-primary"></div>
                                    <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Executive Panel</h3>
                                    <div className="h-[1px] flex-1 bg-white/10"></div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                    {executivePanel.map((member, i) => (
                                        <MemberCard
                                            key={i}
                                            {...member}
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
                                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
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
                                <div className="flex flex-wrap justify-center gap-4">
                                    {organizingCommittee.map((member, i) => (
                                        <MemberCard
                                            key={i}
                                            {...member}
                                            className="scale-90"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Media Wing */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] w-12 bg-brand-primary"></div>
                                    <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Media Wing</h3>
                                    <div className="h-[1px] flex-1 bg-white/10"></div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                    {mediaWing.map((member, i) => (
                                        <MemberCard key={i} {...member} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Staff Coordinators */}
                    {activeTab === "staff" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-[1px] w-12 bg-brand-primary"></div>
                                <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Our Faculty</h3>
                                <div className="h-[1px] flex-1 bg-white/10"></div>
                            </div>

                            <div className="flex flex-col items-center gap-12 max-w-5xl mx-auto">
                                <div className="w-full flex justify-center">
                                    <MemberCard
                                        {...staffCoordinators[0]}
                                        className="w-full sm:w-[320px] scale-110 border-brand-accent/40"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                                    {staffCoordinators.slice(1).map((member, i) => (
                                        <MemberCard key={i} {...member} className="w-full sm:w-[280px]" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Iris 26 Organizers */}
                    {activeTab === "iris" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-20"
                        >
                            {/* Core Committee */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] w-12 bg-brand-primary"></div>
                                    <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Core Committee</h3>
                                    <div className="h-[1px] flex-1 bg-white/10"></div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                    {irisCore.map((member, i) => (
                                        <MemberCard key={i} {...member} />
                                    ))}
                                </div>
                            </div>

                            {/* Program Committee */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] w-12 bg-brand-primary"></div>
                                    <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Program Committee</h3>
                                    <div className="h-[1px] flex-1 bg-white/10"></div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {irisProgram.map((member, i) => (
                                        <MemberCard key={i} {...member} className="scale-90" />
                                    ))}
                                </div>
                            </div>

                            {/* Media & Design Committee */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] w-12 bg-brand-primary"></div>
                                    <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Media & Design Committee</h3>
                                    <div className="h-[1px] flex-1 bg-white/10"></div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {irisMedia.map((member, i) => (
                                        <MemberCard key={i} {...member} className="scale-90" />
                                    ))}
                                </div>
                            </div>

                            {/* Our Video Promoters */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] w-12 bg-brand-primary"></div>
                                    <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Our Video Promoters</h3>
                                    <div className="h-[1px] flex-1 bg-white/10"></div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {irisVideoPromoters.map((member, i) => (
                                        <MemberCard key={i} {...member} className="scale-90" />
                                    ))}
                                </div>
                            </div>

                            {/* Promotion Committee */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] w-12 bg-brand-primary"></div>
                                    <h3 className="text-xl font-mono tracking-[0.3em] uppercase text-brand-accent">Promotion Committee</h3>
                                    <div className="h-[1px] flex-1 bg-white/10"></div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {irisPromotion.map((member, i) => (
                                        <MemberCard key={i} {...member} className="scale-90" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                </div>

            </div>
            <Footer />
        </section>
    );
};

export default About;
