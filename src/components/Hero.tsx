import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowDown } from 'lucide-react'
import cvFile from '../assets/CV - Anggraini Agustin Saputri.pdf'

const roles = ['UI/UX Designer', 'Staff Administrasi', 'Fresh Graduate']

async function openCV() {
  const res = await fetch(cvFile)
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-700/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Fresh Graduate &bull; Siap Bekerja
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Halo, Saya{' '}
          <span className="gradient-text">Putri</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-500 text-base md:text-lg mb-2 tracking-wide"
        >
          Anggraini Agustin Saputri
        </motion.p>

        {/* Animated roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 text-xl md:text-2xl text-slate-400 mb-6 flex-wrap"
        >
          {roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span className="text-violet-400 font-medium">{role}</span>
              {i < roles.length - 1 && <span className="text-slate-600">•</span>}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fresh graduate dengan keahlian di bidang UI/UX Design dan administrasi
          perkantoran. Terampil menggunakan Figma, Microsoft Office, dan Google Workspace
          untuk mendukung produktivitas tim dan menciptakan pengalaman pengguna yang baik.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap mb-12"
        >
          <button
            onClick={openCV}
            className="px-8 py-3.5 rounded-full border border-slate-700 hover:border-violet-500 text-slate-300 hover:text-violet-400 font-medium transition-all flex items-center gap-2"
          >
            <Download size={16} />
            Unduh CV
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://github.com/anggrainiagustin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-700 hover:border-violet-500 text-slate-400 hover:text-violet-400 transition-all hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/anggraini-agustin-saputri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-700 hover:border-blue-500 text-slate-400 hover:text-blue-400 transition-all hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}
