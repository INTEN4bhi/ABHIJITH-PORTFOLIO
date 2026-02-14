import { motion } from "framer-motion";
import ScrollDown from "../components/ScrollDown";


export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-black"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About <span className="text-blueglow">Me</span>
        </motion.h2>
        

        <motion.p
          className="mt-6 text-white/70 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I’m Abhijith S — a Cybersecurity Analyst (CCSA) focused on penetration
          testing, Kali Linux tools, and web security. I also enjoy creating
          premium websites with modern UI/UX and animations. In my creative side,
          I’m into videography, cinematography, and photography.
        </motion.p>
        <div className="mt-10">
  <ScrollDown to="#journey" />
</div>

      </div>
    </section>
  );
}
