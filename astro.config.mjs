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
    // Evitar problemas de cache
    includeFiles: ['./src/**/*'],
    // Forzar rebuild en cada deploy
    maxDuration: 10,
  }),
  vite: {
    plugins: [tailwindcss()],
    // Evitar cache durante desarrollo
    clearScreen: false,
  },
  // Forzar rebuild completo
  build: {
    inlineStylesheets: 'auto',
  },
});
