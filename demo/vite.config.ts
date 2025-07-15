import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/react-magnifier-view/",
  build: {
    outDir: "../dist-demo",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "../lib"),
      "@lib": resolve(__dirname, "../lib"),
    },
  },
  server: {
    port: 3001,
  },
});
