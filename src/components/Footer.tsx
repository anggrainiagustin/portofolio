import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p className="flex items-center gap-1.5">
          Dibuat dengan{" "}
          <Heart size={14} className="text-red-400 fill-red-400" /> oleh{" "}
          <span className="text-violet-400 font-medium">Putri</span>
        </p>
        <p>© {year} Anggraini Agustin Saputri · Semua hak dilindungi</p>
        <nav className="flex gap-6">
          {["#home", "#about", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="hover:text-violet-400 transition-colors capitalize"
            >
              {href.replace("#", "")}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
