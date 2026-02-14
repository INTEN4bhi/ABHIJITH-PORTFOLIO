import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2100);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-6xl md:text-8xl font-black tracking-[0.35em] text-white"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.5, 1.05, 1],
          opacity: 1,
        }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        MY PORTFOLIO
      </motion.h1>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] bg-blueglow/25" />
      </div>
    </motion.div>
  );
}
