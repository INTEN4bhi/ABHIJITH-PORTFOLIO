import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";

const socials = [
  { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/abhijith-s-395b88280/" },
  { icon: Github, name: "GitHub", href: "https://github.com/INTEN4bhi" },
  { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/nvab.media?" },
  { icon: MessageCircle, name: "WhatsApp", href:"//wa.me/917025800579"
 },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black/30 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-black"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contact <span className="text-blueglow">Me</span>
        </motion.h2>

        <p className="mt-5 text-white/70 max-w-xl mx-auto">
          Want to collaborate or hire me? Connect with me through the platforms
          below.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/40 border border-white/10 hover:border-blueglow/60 hover:shadow-glowStrong transition"
            >
              <s.icon size={20} className="text-blueglow" />
              <span className="text-white/80">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
