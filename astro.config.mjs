// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    // Configuración del adaptador de Vercel
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
