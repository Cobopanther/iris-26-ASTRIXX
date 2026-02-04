export default function Register() {
    return (
        <section id="register" className="px-8 py-24 text-center relative z-10">
            <div className="bg-card/70 backdrop-blur-md max-w-4xl mx-auto p-12 rounded-3xl shadow-xl border border-white/10 hover:border-accent/30 transition">
                <h2 className="text-4xl font-extrabold mb-8 text-accent">
                    Register for IRIS
                </h2>
                <p className="text-lg text-[#E7D8C9] mb-10 max-w-2xl mx-auto">
                    Be a part of an unforgettable experience. Limited slots available!
                </p>
                <a href="#" className="inline-block bg-cta px-12 py-4 rounded-xl text-white font-semibold hover:opacity-90 hover:shadow-[0_0_20px_rgba(203,111,74,0.6)] transition transform hover:-translate-y-1">
                    Register Now
                </a>
            </div>
        </section>
    )
}
