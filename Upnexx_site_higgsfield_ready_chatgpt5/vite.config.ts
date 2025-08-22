import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

export default defineConfig(({ mode }) => ({
  plugins: [
    viteSourceLocator({ prefix: "mgx" }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // GitHub Pages friendly (project sites & custom domains)
  // - 'base' as relative to allow serving under /REPO_NAME/
  base: "./",
  build: {
    outDir: "docs",
    sourcemap: false,
  },
}));
