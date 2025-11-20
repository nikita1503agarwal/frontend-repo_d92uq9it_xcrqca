import { motion } from 'framer-motion'

export default function MarkingCard({ title, score, max = 100, delay = 0 }) {
  const percent = Math.min(100, Math.max(0, (score / max) * 100))

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-white/20"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-40 bg-[conic-gradient(from_180deg_at_50%_50%,#60a5fa_0deg,transparent_90deg)] blur-3xl" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white/90">{title}</h3>
          <p className="text-blue-200/80 text-sm">Weighted assessment</p>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
          className="text-right"
        >
          <div className="text-3xl font-bold text-white">{score}</div>
          <div className="text-xs text-blue-200/70">out of {max}</div>
        </motion.div>
      </div>

      <div className="mt-6">
        <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ delay: delay + 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-blue-200/70">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
    </motion.div>
  )
}
