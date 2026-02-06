
import { useEffect } from 'react'
import Hero from './Hero'
import Events from './Events'
import Sponsors from './Sponsors'
import Footer from './Footer'

export default function Home() {
    return (
        <main className="relative z-10 w-full min-h-screen overflow-hidden">
            <Hero />
            <Events />
            <Sponsors />
            <Footer />
        </main>
    )
}
