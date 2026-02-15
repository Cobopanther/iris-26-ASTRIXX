import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const positionRef = useRef({ x: -100, y: -100 })
    const targetRef = useRef({ x: -100, y: -100 })
    const isHoveredRef = useRef(false)
    const requestRef = useRef(null)
    const isVisibleRef = useRef(false)
    const prevAngleRef = useRef(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetRef.current = { x: e.clientX, y: e.clientY }

            if (!isVisibleRef.current) {
                isVisibleRef.current = true
                positionRef.current = { x: e.clientX, y: e.clientY }
                if (cursorRef.current) {
                    cursorRef.current.style.opacity = '1'
                }
            }
        }

        const handleMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('[data-hover]')) {
                isHoveredRef.current = true
            } else {
                isHoveredRef.current = false
            }
        }

        const animate = () => {
            const diffX = targetRef.current.x - positionRef.current.x
            const diffY = targetRef.current.y - positionRef.current.y

            positionRef.current.x += diffX * 0.12
            positionRef.current.y += diffY * 0.12

            const dist = Math.sqrt(diffX * diffX + diffY * diffY)
            let angle = Math.atan2(diffY, diffX)

            if (dist < 2) {
                angle = prevAngleRef.current
            } else {
                prevAngleRef.current = angle
            }

            const stretch = Math.min(dist * 0.02, 0.8)
            const scaleX = 1 + stretch
            const scaleY = 1 - stretch * 0.5

            if (cursorRef.current) {
                cursorRef.current.style.transform = `
                    translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) 
                    translate(-50%, -50%) 
                    rotate(${angle}rad) 
                    scale(${scaleX}, ${scaleY})
                `
                cursorRef.current.style.left = '0px'
                cursorRef.current.style.top = '0px'

                if (isHoveredRef.current) {
                    cursorRef.current.classList.add('hovered')
                } else {
                    cursorRef.current.classList.remove('hovered')
                }
            }

            requestRef.current = requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        requestRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [])

    return (
        <div ref={cursorRef} className="cursor hidden md:block" style={{ opacity: 0 }}></div>
    )
}
