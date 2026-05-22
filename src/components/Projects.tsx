import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Tag } from 'lucide-react'

const projects = [
  {
    title: 'Desain Aplikasi Mobile – TokoKu',
    desc: 'Perancangan UI/UX aplikasi e-commerce mobile mulai dari user flow, wireframe, hingga prototype interaktif menggunakan Figma.',
    image: '📱',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Mobile Design'],
    github: 'https://github.com/anggrainiagustin',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Redesign Website Sekolah',
    desc: 'Studi kasus redesign website sekolah dengan pendekatan user-centered design, mencakup riset pengguna, wireframe, dan mockup hi-fi di Figma.',
    image: '🎨',
    tags: ['Figma', 'UI/UX', 'User Research', 'Wireframe'],
    github: 'https://github.com/anggrainiagustin',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Sistem Pencatatan Inventaris',
    desc: 'Pembuatan sistem pencatatan dan laporan inventaris menggunakan Microsoft Excel dengan formula, pivot table, dan dashboard ringkasan otomatis.',
    image: '📊',
    tags: ['Microsoft Excel', 'Data Entry', 'Pivot Table'],
    github: 'https://github.com/anggrainiagustin',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Desain Poster & Materi Promosi',
    desc: 'Pembuatan berbagai materi visual promosi seperti poster, banner media sosial, dan presentasi menggunakan Canva dan Figma.',
    image: '🖼️',
    tags: ['Canva', 'Figma', 'Graphic Design'],
    github: 'https://github.com/anggrainiagustin',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Laporan & Dokumen Akademik',
    desc: 'Penyusunan laporan penelitian, makalah, dan dokumen akademik yang terstruktur rapi menggunakan Microsoft Word dan Google Docs.',
    image: '📝',
    tags: ['Microsoft Word', 'Google Docs', 'Dokumentasi'],
    github: 'https://github.com/anggrainiagustin',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Presentasi Proposal Skripsi',
    desc: 'Pembuatan slide presentasi skripsi yang profesional dan visual menggunakan Microsoft PowerPoint dengan layout yang bersih dan informatif.',
    image: '📋',
    tags: ['PowerPoint', 'Desain Slide', 'Presentasi'],
    github: 'https://github.com/anggrainiagustin',
    demo: 'https://example.com',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">Portofolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Proyek <span className="gradient-text">Pilihan</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Berikut beberapa proyek desain dan administrasi yang saya kerjakan selama masa kuliah. Setiap proyek mencerminkan kemampuan dan dedikasi saya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/30 card-glow transition-all"
            >
              {/* Project image/icon */}
              <div className="h-44 bg-gradient-to-br from-violet-900/30 to-slate-900 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                <span className="relative z-10">{project.image}</span>
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-violet-600/80 text-white text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-xs"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={15} />
                    Kode
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <ExternalLink size={15} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/anggrainiagustin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-violet-500 text-slate-400 hover:text-violet-400 transition-all text-sm font-medium"
          >
            <Github size={16} />
            Lihat Semua di GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
