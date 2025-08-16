# Demo Landing - Astro + Vercel

Landing page moderna construida con Astro y desplegada en Vercel.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
├── astro.config.mjs
├── vercel.json
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Despliegue en Vercel

### Configuración Automática

1. **Conectar con GitHub**: Ve a [vercel.com](https://vercel.com) y conecta tu repositorio de GitHub
2. **Importar Proyecto**: Selecciona este repositorio
3. **Configuración Automática**: Vercel detectará automáticamente que es un proyecto Astro
4. **Despliegue**: Haz clic en "Deploy" y tu sitio estará listo

### Configuración Manual

Si prefieres configurar manualmente:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

### Variables de Entorno

Si tu proyecto necesita variables de entorno, configúralas en el dashboard de Vercel:
- Ve a tu proyecto en Vercel
- Settings → Environment Variables
- Agrega las variables necesarias

## 🎯 Características

- ✅ **Astro 5**: Framework moderno para sitios estáticos
- ✅ **Tailwind CSS**: Sistema de diseño utilitario
- ✅ **Vercel**: Despliegue automático y CDN global
- ✅ **SSG**: Generación estática en tiempo de compilación
- ✅ **Performance**: Optimizado para velocidad y SEO
- ✅ **Navegación enlazada**: Smooth scroll y enlaces funcionales
- ✅ **FAQ interactivo**: Acordeón con JavaScript
- ✅ **Modal Calendly**: Integración para reserva de demos

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
