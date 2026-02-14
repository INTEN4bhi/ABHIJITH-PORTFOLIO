import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadSlim().then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "#000000" },
        particles: {
          number: { value: 60 },
          color: { value: "#38BDF8" },
          links: {
            enable: true,
            color: "#38BDF8",
            distance: 150,
          },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
}
