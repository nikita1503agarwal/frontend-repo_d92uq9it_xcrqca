import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AnimatedBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 150])

  useEffect(() => {
    // No-op, hook ensures transforms stay reactive
  }, [])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: blob1Y }}
        className="absolute -top-40 -left-40 h-[50vmax] w-[50vmax] rounded-full bg-gradient-to-br from-blue-500/40 to-indigo-500/40 blur-3xl"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute -bottom-40 -right-40 h-[45vmax] w-[45vmax] rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.10),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.35),rgba(15,23,42,0.65))]" />
    </div>
  )
}
