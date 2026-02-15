import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef, useEffect, useState } from 'react'

function BirdParticles() {
    const pointsRef = useRef(null)
    const [geometry, setGeometry] = useState(null)
    const [particleState, setParticleState] = useState(null)

    // Setup for mouse interaction
    const raycaster = useMemo(() => new THREE.Raycaster(), [])
    const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), [])
    const mouseWorld = useRef(new THREE.Vector3())

    // Load and process image
    useEffect(() => {
        const img = new Image()
        img.src = '/bird.png'
        img.crossOrigin = "Anonymous"

        img.onload = () => {
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext("2d")

            // Resize if too big to maintain performance
            const maxWidth = 500 // Increased for better resolution
            const scale = Math.min(1, maxWidth / img.width)
            canvas.width = img.width * scale
            canvas.height = img.height * scale

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data

            const positions = []
            const colors = []
            const particles = []

            const step = 3 // Density

            // Adjust X/Y to center
            const width = canvas.width
            const height = canvas.height

            for (let y = 0; y < height; y += step) {
                for (let x = 0; x < width; x += step) {
                    const i = (y * width + x) * 4
                    const alpha = data[i + 3]

                    if (alpha > 50) { // Threshold
                        // Random start pos
                        positions.push(
                            Math.random() * 500 - 250,
                            Math.random() * 500 - 250,
                            Math.random() * 500 - 250
                        )

                        // Color from image
                        colors.push(
                            data[i] / 255,
                            data[i + 1] / 255,
                            data[i + 2] / 255
                        )

                        // Store physics data
                        particles.push({
                            // Target position (centered)
                            target: new THREE.Vector3(
                                (x - width / 2) * 1.5, // Reduced scale
                                (height / 2 - y) * 1.5,
                                0
                            ),
                            velocity: new THREE.Vector3()
                        })
                    }
                }
            }

            const geo = new THREE.BufferGeometry()
            geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
            geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

            setGeometry(geo)
            setParticleState(particles)
        }
    }, [])

    // Global mouse and touch tracking to work behind overlays
    useEffect(() => {
        const handleMouseMove = (event) => {
            // Normalize mouse coordinates (-1 to +1)
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        const handleTouchMove = (event) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0]
                mouse.x = (touch.clientX / window.innerWidth) * 2 - 1
                mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('touchstart', handleTouchMove, { passive: false })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('touchstart', handleTouchMove)
        }
    }, [])

    const mouse = useMemo(() => new THREE.Vector2(9999, 9999), []) // Start off-screen
    const { camera } = useThree()

    useFrame(() => {
        if (!geometry || !particleState || !pointsRef.current) return

        // Update mouse world position
        raycaster.setFromCamera(mouse, camera)
        raycaster.ray.intersectPlane(plane, mouseWorld.current)

        const posAttribute = geometry.attributes.position
        const posArray = posAttribute.array

        particleState.forEach((p, i) => {
            const idx = i * 3

            // Current position
            const current = new THREE.Vector3(
                posArray[idx],
                posArray[idx + 1],
                posArray[idx + 2]
            )

            // 1. Home Attraction
            const force = p.target.clone().sub(current).multiplyScalar(0.04)

            // 2. Mouse Repulsion
            if (mouseWorld.current) {
                const dist = current.distanceTo(mouseWorld.current)
                const repelRadius = 10 // Reduced cursor interaction size

                if (dist < repelRadius) {
                    const repelForce = current.clone().sub(mouseWorld.current).normalize()
                    const strength = (1 - dist / repelRadius) * 20
                    force.add(repelForce.multiplyScalar(strength))
                }
            }

            // Physics
            p.velocity.add(force).multiplyScalar(0.92) // Damping
            current.add(p.velocity)

            // Update buffer
            posArray[idx] = current.x
            posArray[idx + 1] = current.y
            posArray[idx + 2] = current.z
        })

        posAttribute.needsUpdate = true
    })

    if (!geometry) return null

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                size={3}
                vertexColors
                transparent
                opacity={0.9}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </points>
    )
}

export default function Background3D() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 300]} fov={75} />
                <BirdParticles />
            </Canvas>
        </div>
    )
}
