import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Tools", href: "#tools" },
{ name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black/30 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="font-extrabold text-xl tracking-wider">
          Nv<span className="text-blueglow">ab</span>
        </h1>

        <div className="hidden md:flex gap-7 text-sm text-white/80">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="hover:text-blueglow transition"
            >
              {l.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="px-4 py-2 rounded-xl bg-blueglow/20 border border-blueglow/40 text-sm hover:bg-blueglow/30 shadow-glow transition"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
