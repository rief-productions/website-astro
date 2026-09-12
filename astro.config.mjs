// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://riefproductions.com",
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
