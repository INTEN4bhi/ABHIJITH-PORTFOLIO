import { ArrowDown } from "lucide-react";

export default function ScrollDown({ to = "#about", label = "Scroll down" }) {
  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.querySelector(to);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className="mt-10 flex items-center gap-2 text-white/50 text-sm hover:text-blueglow transition"
    >
      <ArrowDown size={16} />
      <span>{label}</span>
    </button>
  );
}
