import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
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
  adapter: cloudflare(),
});
