import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
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

function AppContent() {
  const [loading, setLoading] = useState(true)
  const [menuActive, setMenuActive] = useState(false)
  const location = useLocation()

  // Lock body scroll when menu is active or loading
  useEffect(() => {
    if (loading || menuActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [loading, menuActive])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.div>
      )}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
