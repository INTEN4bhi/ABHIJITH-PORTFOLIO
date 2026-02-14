import { SiMysql, SiSqlite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Terminal,
  Network,
  Eye,
  Cpu,
  Bug,
  Code2,
  Lock,
  Film,
  Scissors,
  Palette,
  Image,
  Database,
  Server,
  Braces,
  Layers,
} from "lucide-react";


const TOOLS = [

    // ⚛️ MERN Stack Tools
    {
  name: "React.js",
  desc: "Frontend library for dynamic UI",
  icon: FaReact,
  tag: "Frontend",
},
  {
    name: "MongoDB",
    desc: "NoSQL database for scalable applications",
    icon: Database,
    tag: "Database",
  },
  {
    name: "Express.js",
    desc: "Backend framework for APIs & routing",
    icon: Server,
    tag: "Backend",
  },
  {
    name: "Node.js",
    desc: "JavaScript runtime for server-side logic",
    icon: Layers,
    tag: "Runtime",
  },
    {
    name: "MySQL",
    desc: "Relational database for structured data",
    icon: SiMysql,
    tag: "Database",
  },
  {
    name: "SQLite",
    desc: "Lightweight embedded SQL database",
    icon: SiSqlite,
    tag: "Database",
  },

  // 🛡 Cyber Tools
  {
    name: "Kali Linux",
    desc: "Pentesting OS & security toolset",
    icon: Terminal,
    tag: "Pentesting",
  },
  {
    name: "Nmap",
    desc: "Network scanning & recon",
    icon: Network,
    tag: "Recon",
  },
  {
    name: "Burp Suite",
    desc: "Web app testing & interception",
    icon: Eye,
    tag: "Web Security",
  },
  {
    name: "Wireshark",
    desc: "Packet capture & traffic analysis",
    icon: Cpu,
    tag: "Network",
  },
  {
    name: "Metasploit",
    desc: "Exploitation framework",
    icon: Bug,
    tag: "Exploit",
  },
  {
    name: "Python",
    desc: "Automation + scripting for security",
    icon: Code2,
    tag: "Scripting",
  },
  {
    name: "Django",
    desc: "Secure web development framework",
    icon: Lock,
    tag: "Backend",
  },

  // 🎬 Creative Tools
  {
    name: "Adobe Premiere Pro",
    desc: "Professional video editing & cinematic cuts",
    icon: Film,
    tag: "Editing",
  },
  {
    name: "CapCut",
    desc: "Quick edits, reels & social media content",
    icon: Scissors,
    tag: "Reels",
  },
  {
    name: "DaVinci Resolve",
    desc: "Color grading, cinematic look & post-production",
    icon: Palette,
    tag: "Color",
  },
  {
    name: "Adobe Lightroom",
    desc: "Photo editing, tones & professional presets",
    icon: Image,
    tag: "Photo",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-black/25 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-black"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Tools <span className="text-blueglow">I Use</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-white/60 max-w-2xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Cybersecurity tools + creative tools I use for pentesting, analysis,
          automation, editing and post-production.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-blueglow/60 hover:shadow-glowStrong transition"
            >
              <div className="flex items-center justify-between">
                <t.icon className="text-blueglow" size={24} />
                <span className="text-xs px-3 py-1 rounded-full bg-blueglow/10 border border-blueglow/25 text-blueglow font-semibold">
                  {t.tag}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-white group-hover:text-blueglow transition">
                {t.name}
              </h3>

              <p className="mt-2 text-white/55 text-sm leading-relaxed">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
