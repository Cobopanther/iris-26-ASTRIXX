import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import CustomCursor from './components/CustomCursor'
import MenuOverlay from './components/MenuOverlay'
import Background3D from './components/Background3D.jsx'

import BIRDS from 'vanta/dist/vanta.birds.min'

// Simple Loader Component
function Loader({ onComplete }) {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff, // White background for the loader as per design
        color1: 0xff9f00,          // Orange/Gold from palette
        color2: 0x5D1F1E,          // Deep Red from palette
        birdSize: 1.5,
        wingSpan: 30.00,
        separation: 50.00,
        alignment: 50.00,
        cohesion: 50.00,
        quantity: 3 // Reduced quantity for cleaner look during load
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <motion.div
      ref={vantaRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative z-10 text-center mix-blend-multiply">
        <motion.div
          className="text-[15vw] md:text-[12vw] font-light leading-none tracking-tighter text-black flex items-center justify-center overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <span>IR</span>
          <span className="text-gray-500 font-thin italic">IS</span>
        </motion.div>
        <motion.div
          className="text-xs uppercase tracking-[0.5em] text-gray-700 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          onAnimationComplete={() => setTimeout(onComplete, 2500)} // Increased load time to enjoy birds
        >
          Loading Experience
        </motion.div>
      </div>
    </motion.div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [menuActive, setMenuActive] = useState(false)

  // Lock body scroll when menu is active or loading
  useEffect(() => {
    if (loading || menuActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [loading, menuActive])

  return (
    <>
      <CustomCursor />
      <Background3D />

      <AnimatePresence mode='wait'>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="noise-overlay"></div>

          <Navbar onMenuClick={() => setMenuActive(true)} />
          <MenuOverlay active={menuActive} onClose={() => setMenuActive(false)} />

          <main className="relative z-10 w-full min-h-screen overflow-hidden">
            <Hero />
            <Events />

            {/* About / Lab Section Style */}
            <section id="about" className="py-24 px-6 md:px-12 text-white min-h-screen flex items-center relative overflow-hidden">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
                <div className="md:w-1/3">
                  <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                    <span className="block text-transparent bg-clip-text bg-[linear-gradient(to_top,#5D1F1E,#AB4F41,#CB6F4A,#EECB88)]">THE</span>
                    <span className="block">IDEA</span>
                  </h2>
                  <p className="text-gray-300 font-light text-sm tracking-wide leading-relaxed max-w-xs">
                    IRIS is the flagship association event that brings together innovation, creativity, and collaboration.
                  </p>
                </div>

                <div className="md:w-2/3 flex flex-col justify-between">
                  <div className="text-2xl md:text-4xl font-light leading-snug mb-16">
                    "Designed to <span className="text-brand-primary italic font-normal">inspire students</span> across disciplines, featuring technical challenges and engaging workshops."
                  </div>

                </div>
              </div>

              {/* Decorative Blob */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-brand-secondary to-transparent rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
            </section>

            {/* Footer Style */}
            <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 flex-wrap">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[8vw] md:text-[6vw] leading-none font-bold tracking-tighter text-white/10 select-none">IRIS'26</h2>
                    <a
                      href="https://www.instagram.com/iris_bmce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-brand-accent transition-all duration-300 group ml-2"
                      data-hover
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      <span className="text-[10px] tracking-[0.3em] font-mono group-hover:translate-x-1 transition-transform uppercase">@iris_bmce</span>
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
                      <p>Anand: <span className="text-white font-mono">+91 79949 80107</span></p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex justify-between text-xs text-zinc-600">
                <div>© 2026 IRIS ASSOCIATION</div>

              </div>
            </footer>

          </main>
        </motion.div>
      )}
    </>
  )
}

export default App
