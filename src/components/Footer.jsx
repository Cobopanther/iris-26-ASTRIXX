
export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10 relative z-10 block">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 flex-wrap">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[6vw] md:text-[4vw] leading-none font-bold tracking-tighter text-white/10 select-none">ASTRIXX</h2>
                        <a
                            href="https://www.instagram.com/astrrix_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-brand-accent transition-all duration-300 group ml-2"
                            data-hover
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            <span className="text-[10px] tracking-[0.3em] font-mono group-hover:translate-x-1 transition-transform uppercase">astrrix_</span>
                        </a>
                    </div>

                    {/* Vertical Bar 1 */}
                    <div className="hidden md:block w-[1px] h-16 bg-white/10"></div>

                    {/* Email Section */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-mono">Email</span>
                        <a
                            href="mailto:astrixx.bmce@gmail.com"
                            className="text-sm md:text-base font-light tracking-wide hover:text-brand-accent transition-all duration-300"
                            data-hover
                        >
                            astrixx.bmce@gmail.com
                        </a>
                    </div>

                    {/* Vertical Bar 2 */}
                    <div className="hidden md:block w-[1px] h-16 bg-white/10"></div>

                    {/* Staff Section */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-mono">Staff Contacts</span>
                        <div className="text-[11px] md:text-xs text-gray-300 space-y-1 font-light tracking-wide">
                            <p>Sibu Philip Soman: <span className="text-white font-mono">+91 94461 83861</span></p>
                            <p>Gimy Jacob: <span className="text-white font-mono">+91 81292 68266</span></p>
                        </div>
                    </div>

                    {/* Vertical Bar 3 */}
                    <div className="hidden md:block w-[1px] h-16 bg-white/10"></div>

                    {/* Students Section */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-mono">Student Coordinators</span>
                        <div className="text-[11px] md:text-xs text-gray-300 space-y-1 font-light tracking-wide">
                            <p>Alby Sajan Alex: <span className="text-white font-mono">+91 79944 30491</span></p>
                            <p>Anand A B: <span className="text-white font-mono">+91 79949 80107</span></p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex justify-between text-xs text-zinc-600">
                <div>© 2026 ASTRIXX ASSOCIATION</div>
            </div>
        </footer>
    )
}
