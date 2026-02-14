import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { profile } from "../data/profile";
import profileImg from "../assets/profile.jpg";
import ScrollDown from "../components/ScrollDown";


export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-28 md:pt-36 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* ✅ Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-[360px] h-[360px] rounded-full bg-blueglow/20 blur-[140px]" />
        <div className="absolute bottom-10 right-16 w-[420px] h-[420px] rounded-full bg-softblue/20 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,163,255,0.06),transparent_55%)]" />
      </div>

      {/* ✅ Right Side Background Ink Photo (No Card) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block w-[55%] h-[85%] pointer-events-none"
      >
        {/* glow behind */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blueglow/25 blur-[150px] rounded-full" />

        {/* image */}
        <img
          src={profileImg}
          alt="Abhijith"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[92%] w-auto object-cover opacity-90"
          style={{
            WebkitMaskImage: `
              radial-gradient(circle at 60% 45%,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,1) 35%,
              rgba(0,0,0,0.65) 55%,
              rgba(0,0,0,0.18) 70%,
              rgba(0,0,0,0) 88%)
            `,
            maskImage: `
              radial-gradient(circle at 60% 45%,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,1) 35%,
              rgba(0,0,0,0.65) 55%,
              rgba(0,0,0,0.18) 70%,
              rgba(0,0,0,0) 88%)
            `,
          }}
        />

        {/* Ink effect lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(0,163,255,0.18),transparent_70%)] mix-blend-screen" />

        {/* ✅ Blend into background (left fade) */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bg opacity-95" />

        {/* ✅ Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-90" />

        {/* ✅ Soft dark overlay */}
        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      {/* ✅ Main Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blueglow font-semibold tracking-[0.25em] text-sm">
            CYBERSECURITY PORTFOLIO
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-black leading-[1.05]">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-blueglow">S</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-white/75 font-medium">
            {profile.role}
          </h2>

          <p className="mt-6 text-white/70 leading-relaxed">{profile.bio}</p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-blueglow/20 border border-blueglow/40 hover:bg-blueglow/30 shadow-glow transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-2xl border border-white/15 hover:border-blueglow/60 hover:shadow-glow transition flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex gap-4">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-blueglow/60 hover:shadow-glow transition"
            >
              <Linkedin size={18} className="text-blueglow" />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-blueglow/60 hover:shadow-glow transition"
            >
              <Github size={18} className="text-blueglow" />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-blueglow/60 hover:shadow-glow transition"
            >
              <Instagram size={18} className="text-blueglow" />
            </a>
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-blueglow/60 hover:shadow-glow transition"
            >
              <MessageCircle size={18} className="text-blueglow" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-white/50 text-sm">
            {/* <ArrowDown size={16} /> */}
            <ScrollDown to="#about" />

          </div>
        </motion.div>

        {/* Right spacer (only for layout balance) */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
