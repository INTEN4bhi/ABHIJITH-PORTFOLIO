import { motion } from "framer-motion";

const certs = [
  {
    title: "CCSA — Certified Cyber Security Analyst",
    org: "Certification",
    year: "2024",
    desc: "Focused on security fundamentals, threat analysis, and practical cybersecurity skills.",
  },
  {
    title: "Penetration Testing & Kali Linux",
    org: "Certification on Intern",
    year: "2024",
    desc: "Hands-on learning with Kali Linux tools and ethical hacking workflow.",
  },
{
    title: "AI for Students: Build Your Own Generative AI Model",
    org: "Certification on workshop",
    year: "2025",
    desc: "Participated in hands-on sessions focused on Adobe Premiere Pro Software.",
  },
  // ✅ Add New Certifications Here
  {
    title: "Adobe Premiere Pro",
    org: "Certification on workshop",
    year: "2025",
    desc: "Participated in hands-on sessions focused on Adobe Premiere Pro Software.",
  },
  {
    title: "Mini Cyber Lab – CISRT",
    org: "Project Certification",
    year: "2025",
    desc: "Completed a hands-on training Program on Advanced Cybersecurity,Data Analyst,and Web Devolopment.",
  },
   {
  title: "Cyberbullying Detection & Sentiment Analysis System",
  org: "Academic / Personal Project",
  year: "2025",
  desc: "Developed an ML-based web application to detect toxic language and perform sentiment analysis. Implemented text classification models, interactive reporting dashboard, and data visualizations for real-time analysis."
},
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-black"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Certifications <span className="text-blueglow">&</span> Training
        </motion.h2>

        <div className="mt-12 relative border-l border-white/10 pl-6 space-y-10">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative"
            >
              {/* dot */}
              <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-blueglow shadow-glow" />
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-blueglow/60 hover:shadow-glow transition">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <span className="text-blueglow text-sm font-semibold">
                    {c.year}
                  </span>
                </div>
                <p className="text-white/60 text-sm mt-1">{c.org}</p>
                <p className="text-white/70 mt-4 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
