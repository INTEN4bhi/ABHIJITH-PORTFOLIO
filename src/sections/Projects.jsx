import { motion } from "framer-motion";

const projects = [
    {
    title: "Personal Portfolio Website",
    tech: "Next.js • Tailwind CSS • Framer Motion",
    desc: "Animated personal portfolio with interactive UI, glowing effects, smooth transitions, and responsive design.",
    github: "https://github.com/INTEN4bhi/ABHIJITH-PORTFOLIO",
    /
  },
  {
    title: "Mini Cyber Lab – CISRT",
    tech: "Python • Django • MySQL",
    desc: "A mini cyber lab portal focused on incident response & security workflows.",
    github: "#",
    live: "#",
  },
    {
    title: "Cyberbullying Detection & Sentiment Analysis",
    type: "ML / Web",
    tech: "Python • Machine Learning • NLP • Flask • React",
    desc: "ML-powered web application to detect toxic language and analyze sentiment. Includes classification results, interactive dashboard, and data visualizations.",
    github: "#",
    live: "#",
  },
  {
  title: "Infesta 2K26 – TechFest Event Website",
  type: "Web Development / Event Management",
  tech: "Next.js • React • Tailwind CSS • Framer Motion",
  desc: "Designed and developed a responsive TechFest website featuring event details, schedules, registration flow, and interactive UI with smooth animations.",
  github: "https://github.com/INTEN4bhi/TECHATHONE",
  live: "https://infesta2k26.vercel.app/",
},


];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-black"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My <span className="text-redglow">Projects</span>
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-7 rounded-2xl bg-black/40 border border-white/10 hover:border-redglow/60 hover:shadow-glowStrong transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
<h3 className="text-xl font-bold text-blueglow drop-shadow-blueGlow">
  {p.title}
</h3>

              <p className="text-redglow text-sm mt-2">{p.tech}</p>
              <p className="text-white/70 mt-4 leading-relaxed">{p.desc}</p>

              <div className="mt-6 flex gap-4">
                <a
                  href={p.github}
                  className="px-4 py-2 rounded-xl border border-white/15 hover:border-redglow/70 hover:shadow-glow transition text-sm"
                >
                  GitHub
                </a>
                <a
                  href={p.live}
                  className="px-4 py-2 rounded-xl bg-redglow/20 border border-redglow/40 hover:bg-redglow/30 shadow-glow transition text-sm"
                >
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
