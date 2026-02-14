import { motion } from "framer-motion";
import ScrollDown from "../components/ScrollDown";


const TIMELINE_DATA = [
  {
    year: "2023 - Present",
    title: "BSc Cyber Forensics & Cybersecurity — MG University",
    org: "UG Journey",
    description:
      " Pursued undergraduate studies focused on digital forensics, cybercrime investigation, network security fundamentals, and cybersecurity best practices with practical exposure to security tools and forensic methods.",
    type: "work",
  },
  {
    year: "2025-2026",
    title: "Cyberbullying Detection & Sentiment Analysis System",
    org: "Machine Learning + Web App",
    description:
      "Developed a system to detect toxic language and analyze sentiment. Worked on reporting dashboard UI + data visualization and classification results.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "Fourth Sem Cybersecurity Project",
    org: "Mini Cyber Lab – CISRT",
    description:
      "Built a Django + MySQL based incident-response lab portal. Added analysis workflows, reporting modules, and secure system design practices.",
    type: "milestone",
  },

  {
    year: "2025",
    title: "Portfolio & Premium UI Development",
    org: "Frontend + Motion UI",
    description:
      "Designed premium animated portfolio interfaces using React, Tailwind CSS, Framer Motion. Built smooth scroll sections, glow effects and modern layouts.",
    type: "work",
  },
   {
    year: "2024 - 2025",
    title: "Cybersecurity Analyst (CCSA)",
    org: "Cybersecurity Journey",
    description:
      "Focused on penetration testing, Kali Linux toolsets, threat detection, and securing web systems using real-world security practices.",
    type: "work",
  },
  {
    year: "2024 - 2025",
    title: "Penetration Testing Practice",
    org: "Kali Linux & Labs",
    description:
      "Worked with tools like Nmap, Burp Suite, Metasploit, and Wireshark. Practiced recon, exploitation workflow, and web vulnerability testing.",
    type: "work",
  },
  {
    year: "2024",
    title: "Frontend Web Development Growth",
    org: "Self Learning",
    description:
      "Built modern websites and UI components. Learned responsive layouts, animations, component reusability and user experience design.",
    type: "milestone",
  },
  {
    year: "2024",
    title: "Cybersecurity Training & Certifications",
    org: "Courses / Workshops",
    description:
      "Completed structured learning in cybersecurity fundamentals, ethical hacking concepts, and real-time cyber awareness programs.",
    type: "education",
  },
  {
    year: "2024",
    title: "Started Web Development",
    org: "First Projects",
    description:
      "Started learning web development and created small projects and pages. Improved confidence in coding and project building.",
    type: "milestone",
  },
  {
    year: "2022 - 2023",
    title: "Photography & Visual Creativity",
    org: "Freelance / Practice",
    description:
      "Practiced photography and editing workflows. Learned color grading, composition, and storytelling through visual frames.",
    type: "creative",
  },
   {
    year: "2021",
    title: "Creative Identity Build",
    org: "NVAB Media",
    description:
      "Developed professional skills in cinematography, videography and editing. Created cinematic visuals and social content projects.",
    type: "creative",
  },
];

<div className="mt-12 flex justify-center">
  <ScrollDown to="#skills" />
</div>


export default function Journey() {
  return (
    <section
      className="relative z-20 min-h-screen py-28 px-4 md:px-12 overflow-hidden"
      id="journey"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[10%] w-[600px] h-[600px] bg-blueglow/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-softblue/10 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Career <span className="text-blueglow">Journey</span>
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            My journey through cybersecurity, web development, and creative media.
            Each step shaped me into a skilled analyst & developer.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blueglow/20 via-blueglow/45 to-blueglow/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-1/2" />

      {/* Point on Line */}
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-blueglow rounded-full border-4 border-bg transform -translate-x-1/2 z-10 shadow-glow">
        <div className="absolute inset-0 bg-blueglow blur-sm opacity-70" />
      </div>

      {/* Content Card */}
      <div
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
        }`}
      >
        <div className="group relative p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md hover:border-blueglow/60 hover:shadow-glowStrong transition duration-300">
          <div
            className={`flex flex-col ${
              isEven ? "md:items-end" : "md:items-start"
            } mb-2`}
          >
            <span className="text-xs text-blueglow font-mono border border-blueglow/30 px-3 py-1 rounded-full bg-blueglow/10 mb-2 w-fit">
              {item.year}
            </span>

            <h3 className="text-xl font-bold text-white group-hover:text-blueglow transition-colors">
              {item.title}
            </h3>
          </div>

          <p className="text-sm text-softblue mb-4 font-semibold uppercase tracking-wider">
            {item.org}
          </p>

          <p className="text-white/60 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
