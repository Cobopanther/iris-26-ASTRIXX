function ScheduleItem({ title, time, desc }) {
    return (
        <div className="flex items-start gap-6 border-l-2 border-accent/30 pl-8 pb-10 last:pb-0 relative">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_rgba(238,203,136,0.8)]"></div>
            <div className="bg-white/5 p-6 rounded-xl w-full border border-white/5 hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-accent font-medium text-sm mb-2">{time}</p>
                <p className="text-[#E7D8C9]">{desc}</p>
            </div>
        </div>
    )
}

export default function Schedule() {
    return (
        <section id="schedule" className="px-8 py-24 relative z-10">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-accent">
                Event Schedule
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 bg-black/20 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/5">
                <ScheduleItem title="Inauguration" time="9:00 AM" desc="Main Auditorium" />
                <ScheduleItem title="Events & Workshops" time="10:30 AM" desc="Various Venues" />
                <ScheduleItem title="Guest Talk" time="3:00 PM" desc="Seminar Hall" />
            </div>
        </section>
    )
}
