import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'UI/UX Design',
    color: 'violet',
    skills: [
      { name: 'Figma', level: 82 },
      { name: 'UI/UX Design', level: 78 },
      { name: 'Prototyping', level: 75 },
      { name: 'Canva', level: 85 },
    ],
  },
  {
    title: 'Administrasi',
    color: 'blue',
    skills: [
      { name: 'Microsoft Excel', level: 80 },
      { name: 'Microsoft Word', level: 85 },
      { name: 'Microsoft PowerPoint', level: 82 },
      { name: 'Data Entry', level: 88 },
    ],
  },
  {
    title: 'Tools & Lainnya',
    color: 'emerald',
    skills: [
      { name: 'Google Workspace', level: 80 },
      { name: 'Google Sheets', level: 78 },
      { name: 'Notion', level: 72 },
      { name: 'Canva / Adobe XD', level: 70 },
    ],
  },
]

const techStack = [
  { name: 'Figma', emoji: '✏️' },
  { name: 'Canva', emoji: '🎨' },
  { name: 'Microsoft Excel', emoji: '📊' },
  { name: 'Microsoft Word', emoji: '📝' },
  { name: 'Microsoft PowerPoint', emoji: '📋' },
  { name: 'Google Workspace', emoji: '🌐' },
  { name: 'Google Sheets', emoji: '📈' },
  { name: 'Notion', emoji: '🗒️' },
]

const colorMap: Record<string, string> = {
  violet: 'bg-violet-500',
  blue: 'bg-blue-500',
  emerald: 'bg-emerald-500',
}

const borderMap: Record<string, string> = {
  violet: 'border-violet-500/30 bg-violet-500/5',
  blue: 'border-blue-500/30 bg-blue-500/5',
  emerald: 'border-emerald-500/30 bg-emerald-500/5',
}

const textMap: Record<string, string> = {
  violet: 'text-violet-400',
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">Kemampuan</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Teknologi yang <span className="gradient-text">Saya Pelajari</span>
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className={`rounded-2xl border p-6 ${borderMap[category.color]}`}
            >
              <h3 className={`text-lg font-semibold mb-6 ${textMap[category.color]}`}>
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: ci * 0.15 + si * 0.1 + 0.3, ease: 'easeOut' }}
                        className={`h-full rounded-full ${colorMap[category.color]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-violet-500/50 text-slate-300 hover:text-violet-400 transition-all text-sm font-medium cursor-default"
            >
              {tech.emoji} {tech.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
