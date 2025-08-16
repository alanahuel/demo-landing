// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    // Configuración optimizada para Vercel
    webAnalytics: {
      enabled: false, // Deshabilitar web analytics temporalmente
    },
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimizaciones de build
      rollupOptions: {
        output: {
          manualChunks: undefined, // Evitar chunks manuales que pueden causar problemas
        },
      },
    },
  },
  // Configuración de build optimizada
  build: {
    assets: '_assets', // Cambiar el directorio de assets para evitar conflictos
  },
  // Configuración de servidor de desarrollo
  server: {
    port: 4321,
    host: true,
  },
});
