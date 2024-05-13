import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
  markdown: {
    theme: "dracula",
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    langs: ["javascript"],
    wrap: true,
  },
});
