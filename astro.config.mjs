// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'static',
  adapter: vercel({
    // Configuración optimizada para Vercel
    webAnalytics: {
      enabled: false, // Deshabilitar web analytics temporalmente
    },
    // Asegurar que Vercel siempre ejecute un nuevo build
    includeFiles: ['./src/**/*'],
    // Configuración para evitar caché en builds
    maxDuration: 60,
  }),
  
  // Configuración de SEO - Actualizar al dominio correcto
  site: 'https://demo-landing-psi.vercel.app',
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimizaciones de build
      rollupOptions: {
        output: {
          manualChunks: undefined, // Evitar chunks manuales que pueden causar problemas
        },
      },
      // Asegurar que los assets se generen con hashes únicos
      assetsInlineLimit: 0,
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
