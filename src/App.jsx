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
// Simple Loader Component
function Loader({ onComplete }) {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)
  const [progress, setProgress] = useState(0)

  // Initialize Vanta
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
        backgroundColor: 0xffffff, // White background
        color1: 0xff9f00,          // Orange/Gold
        color2: 0x5D1F1E,          // Deep Red
        birdSize: 1.5,
        wingSpan: 30.00,
        separation: 50.00,
        alignment: 50.00,
        cohesion: 50.00,
        quantity: 3
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  // Progress Animation
  useEffect(() => {
    const duration = 2500; // 2.5 seconds total
    const intervalTime = 25; // Update every 25ms
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Slight delay after full load
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      ref={vantaRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative z-10 w-full max-w-sm px-8 mix-blend-multiply flex flex-col items-center gap-16">

        {/* IRIS Text Animation */}
        <div className="text-center">
          <motion.div
            className="text-[15vw] md:text-[12vw] font-light leading-none tracking-tighter text-black flex items-center justify-center overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span>IR</span>
            <span className="text-gray-500 font-thin italic">IS</span>
          </motion.div>
        </div>



        <div className="text-xs uppercase tracking-[0.3em] text-gray-700 font-mono">
          Loading {Math.round(progress)}%
        </div>
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
