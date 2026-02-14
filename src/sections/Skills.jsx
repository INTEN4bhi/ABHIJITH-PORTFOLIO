import { motion } from "framer-motion";

const skills = [
  "Frontend Developing",
  "Web Development",
  "Penetration Testing",
  "Kali Linux",
  "Cyber Security",
  "Cinematography",
  "Video Editing",
  "Videography",
  "Photography",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/30 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-black"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My <span className="text-blueglow">Skills</span>
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-blueglow/50 hover:shadow-glow transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <p className="font-semibold">{s}</p>
              <p className="text-sm text-white/55 mt-2">
                Experienced in {s.toLowerCase()} with real project exposure.
              </p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
