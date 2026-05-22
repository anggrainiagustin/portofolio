import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anggrainiagustinks@gmail.com",
    href: "mailto:anggrainiagustinks@gmail.com",
  },
  { icon: MapPin, label: "Lokasi", value: "Indonesia", href: "#" },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/anggrainiagustin",
    color: "hover:text-white hover:border-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/anggraini-agustin-saputri",
    color: "hover:text-blue-400 hover:border-blue-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/anggrainiagustin_",
    color: "hover:text-pink-400 hover:border-pink-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    );
    window.open(
      `mailto:anggrainiagustinks@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            Kontak
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Mari <span className="gradient-text">Berdiskusi</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Punya proyek menarik? Atau sekedar ingin say hello? Jangan ragu
            untuk menghubungi saya!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center group-hover:bg-violet-600/30 transition-colors">
                    <item.icon size={20} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-slate-200 font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest">
                Media Sosial
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border border-slate-700 text-slate-400 transition-all ${s.color}`}
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama Anda"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-violet-500 focus:outline-none text-white placeholder-slate-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@anda.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-violet-500 focus:outline-none text-white placeholder-slate-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-violet-500 focus:outline-none text-white placeholder-slate-600 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <span>✓</span> Pesan Terkirim!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Kirim Pesan
                  </>
                )}
              </button>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 text-sm"
                >
                  Terima kasih! Saya akan segera menghubungi Anda.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
