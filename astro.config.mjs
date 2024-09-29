import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-dark",
      },
    },
    defaultColor: false,
  },
  build: {
    format: "directory",
  },
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
  ],
  output: "server",
  adapter: vercel(),
});
