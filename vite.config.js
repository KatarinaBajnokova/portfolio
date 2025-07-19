import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Set correct __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define repo name if hosted under a subfolder (e.g., GitHub Pages)
const repoName = "portfolio";

export default defineConfig({
  base: `/${repoName}/`, // Required for proper routing in subdirectories
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables";`, // Auto-includes SCSS vars/mixins
        includePaths: [path.resolve(__dirname, "src/styles")],
      },
    },
  },
});
