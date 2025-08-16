# 🚀 Guía de Despliegue en Vercel

## Problemas Resueltos

### 1. **Error 404 en CSS y recursos**
- **Problema**: Los recursos no se encontraban debido a rutas incorrectas
- **Solución**: Uso de importación automática de CSS en el frontmatter de Astro

### 2. **Errores de Content Security Policy (CSP)**
- **Problema**: Scripts externos bloqueados por políticas de seguridad
- **Solución**: Uso de directiva `is:inline` para scripts externos

### 3. **Configuración de Vercel incompleta**
- **Problema**: Falta de headers de seguridad y configuración de cache
- **Solución**: Configuración completa en `vercel.json` y `_headers`

## 🔧 Configuración Actual

### Archivos Modificados

1. **`src/layouts/Layout.astro`**
   - Headers de seguridad agregados
   - CSS importado automáticamente desde frontmatter
   - Título actualizado

2. **`vercel.json`**
   - Headers de seguridad configurados
   - Políticas de cache optimizadas
   - Rewrites para compatibilidad

3. **`src/components/Testimonial.astro`**
   - Script externo marcado con `is:inline`

4. **`astro.config.mjs`**
   - Configuración optimizada para Vercel
   - Analytics deshabilitados temporalmente

## 📋 Pasos para Despliegue

### 1. **Build Local**
```bash
npm run build:clean:win  # Windows
npm run build:clean      # Linux/Mac
```

### 2. **Verificar Build**
```bash
npm run verify
```

### 3. **Commit y Push**
```bash
git add .
git commit -m "fix: configuración de despliegue en Vercel"
git push origin main
```

### 4. **Verificar en Vercel**
- El despliegue automático se activará
- Revisar logs en el dashboard de Vercel
- Verificar que no haya errores 404

## 🚨 Solución de Problemas

### Si los cambios no se reflejan:

1. **Limpiar cache de Vercel**:
   - Ir a Settings > General > Clear Cache
   - Hacer un nuevo commit

2. **Verificar configuración**:
   - Ejecutar `npm run verify`
   - Revisar `vercel.json`

3. **Forzar redeploy**:
   - Hacer un commit vacío: `git commit --allow-empty -m "force redeploy"`
   - Push a main

### Errores Comunes:

- **404 en CSS**: Verificar que el CSS se importe desde el frontmatter
- **CSP errors**: Usar `is:inline` para scripts externos
- **Cache issues**: Limpiar cache de Vercel y navegador

## 📁 Estructura de Archivos

```
demo-landing/
├── src/
│   ├── layouts/Layout.astro     # Layout principal con headers de seguridad
│   ├── components/               # Componentes con scripts inline
│   └── styles/global.css        # Estilos globales
├── public/
│   ├── js/testimonial-carousel.js
│   └── _headers                 # Headers adicionales
├── vercel.json                  # Configuración de Vercel
└── astro.config.mjs            # Configuración de Astro
```

## ✅ Checklist de Despliegue

- [ ] Build local exitoso (`npm run build`)
- [ ] Verificación exitosa (`npm run verify`)
- [ ] Commit y push realizados
- [ ] Despliegue en Vercel completado
- [ ] Recursos cargando correctamente (sin 404)
- [ ] Sin errores de CSP en consola
- [ ] Cambios visibles en producción

## 🔄 Mantenimiento

### Actualizaciones Regulares:
- Limpiar cache de Vercel mensualmente
- Verificar que no haya dependencias obsoletas
- Monitorear logs de despliegue

### Monitoreo:
- Revisar métricas de rendimiento en Vercel
- Verificar que no haya errores 404
- Comprobar que los headers de seguridad estén activos
