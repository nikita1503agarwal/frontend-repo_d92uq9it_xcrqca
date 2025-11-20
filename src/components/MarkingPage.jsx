import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Sparkles, Pencil, Download } from 'lucide-react'
import AnimatedBackground from './AnimatedBackground'
import MarkingCard from './MarkingCard'

export default function MarkingPage() {
  const [marks] = useState([
    { title: 'Assignment 1', score: 84, max: 100 },
    { title: 'Midterm Exam', score: 76, max: 100 },
    { title: 'Project', score: 92, max: 100 },
    { title: 'Final Exam', score: 88, max: 100 },
  ])

  const average = Math.round(marks.reduce((acc, m) => acc + (m.score / m.max) * 100, 0) / marks.length)

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <AnimatedBackground />

      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              Live Marking Overview
            </div>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Your Course Performance
                </h1>
                <p className="mt-2 max-w-xl text-blue-200/80">
                  Elegant visuals and smooth micro-interactions make checking results feel delightful.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:border-white/20">
                  <Pencil className="h-4 w-4 text-blue-300 group-hover:rotate-6 transition" />
                  Edit marks
                </button>
                <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_rgba(59,130,246,0.35)] transition hover:shadow-[0_8px_40px_rgba(59,130,246,0.55)]">
                  <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Export
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {marks.map((m, i) => (
              <MarkingCard key={m.title} title={m.title} score={m.score} max={m.max} delay={i * 0.05} />
            ))}
          </motion.div>

          <section className="mt-12 grid gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:col-span-2"
            >
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(59,130,246,0.25),transparent)]" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Overall grade</h3>
                    <p className="text-sm text-blue-200/80">Calculated in real time</p>
                  </div>
                </div>

                <div className="mt-2">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mx-auto aspect-square w-48 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-1"
                  >
                    <div className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                      <span className="text-5xl font-bold">{average}<span className="text-blue-300">%</span></span>
                      <motion.div
                        initial={{ rotate: -90 }}
                        animate={{ rotate: 270 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className="absolute inset-0 rounded-full border-4 border-transparent"
                        style={{
                          background: 'conic-gradient(#60a5fa, #22d3ee, #818cf8, transparent 70%)',
                          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                          maskComposite: 'exclude',
                          WebkitMaskComposite: 'xor',
                          padding: '6px',
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">Highlights</h3>
              <ul className="mt-4 space-y-3 text-blue-200/80">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Smooth, layered background motion</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> Animated progress bars</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Micro-interactions on hover</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Glowing conic rings</li>
              </ul>
            </motion.div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-blue-200/60">
          Crafted with love for silky-smooth vibes
        </div>
      </footer>
    </div>
  )
}
