import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://educorp-backend.onrender.com",
        changeOrigin: true,
      },
    },
    hmr: {
      overlay: false,
    }
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});