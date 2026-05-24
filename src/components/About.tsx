import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, FileText, LayoutDashboard, Coffee } from 'lucide-react'
import profilePhoto from '../assets/foto profile.jpeg'

const stats = [
  { value: 'D3', label: 'Teknik Informatika' },
  { value: '3+', label: 'Sertifikasi' },
]

const highlights = [
  { icon: Palette, title: 'UI/UX Design', desc: 'Merancang antarmuka yang estetis, intuitif, dan berfokus pada pengguna menggunakan Figma.' },
  { icon: FileText, title: 'Administrasi', desc: 'Terampil dalam data entry, pembuatan laporan, dan pengelolaan dokumen perkantoran.' },
  { icon: LayoutDashboard, title: 'Microsoft Office', desc: 'Mahir menggunakan Word, Excel, dan PowerPoint untuk kebutuhan profesional sehari-hari.' },
  { icon: Coffee, title: 'Teliti & Terorganisir', desc: 'Berorientasi pada detail dan terbiasa bekerja dengan deadline yang terstruktur.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">Tentang Saya</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Kenalan dengan <span className="gradient-text">Putri</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full aspect-square rounded-2xl border border-violet-500/20 overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Foto Profil Anggraini Agustin Saputri"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-600/20 rounded-xl blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/20 rounded-xl blur-xl" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Halo! Saya <span className="text-violet-400 font-medium">Anggraini Agustin Saputri</span>, akrab
              dipanggil <span className="text-violet-400 font-medium">Putri</span> — Fresh Graduate dengan
              keahlian di bidang <span className="text-violet-400 font-medium">UI/UX Design</span> dan{' '}
              <span className="text-violet-400 font-medium">Administrasi Perkantoran</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Terampil menggunakan Figma untuk merancang antarmuka yang intuitif, serta Microsoft Office
              dan Google Workspace untuk kebutuhan administrasi dan pengelolaan data. Saya adalah pribadi
              yang teliti, terorganisir, dan siap berkontribusi di lingkungan kerja profesional.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all hover:scale-105"
            >
              Mari Berkolaborasi
            </a>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 card-glow transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-violet-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
