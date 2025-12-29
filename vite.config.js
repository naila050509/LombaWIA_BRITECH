import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/LombaWIA_BRITECH/",
  build: {
    // opsional: kalau mau “warning”-nya lebih longgar
    // chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          leaflet: ["leaflet", "react-leaflet"],
          motion: ["framer-motion"],
          lucide: ["lucide-react"],
        },
      },
    },
  },
});
