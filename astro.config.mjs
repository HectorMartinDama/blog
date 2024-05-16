import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "directory",
  },
  integrations: [tailwind()],
  markdown: {
    theme: "dracula",
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    langs: ["javascript"],
    wrap: true,
  },
  output: "server",
  adapter: vercel(),
});
