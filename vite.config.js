import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".",          // ✅ THIS IS THE FIX
  plugins: [react()],
});
