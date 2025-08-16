#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

console.log('🔍 Verificando configuración del proyecto...\n');

// Verificar que el directorio dist existe
if (!existsSync('dist')) {
  console.log('❌ Directorio dist no encontrado. Ejecutando build...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Error durante el build:', error.message);
    process.exit(1);
  }
}

// Verificar contenido del directorio dist
const distContents = readdirSync('dist');
console.log('✅ Contenido del directorio dist:', distContents);

// Verificar que global.css existe
const cssPath = join('dist', 'global.css');
if (existsSync(cssPath)) {
  console.log('✅ global.css encontrado en dist/');
} else {
  console.log('❌ global.css no encontrado en dist/');
  
  // Buscar archivos CSS en dist
  const cssFiles = distContents.filter(file => file.endsWith('.css'));
  if (cssFiles.length > 0) {
    console.log('📁 Archivos CSS encontrados:', cssFiles);
    console.log('💡 Actualiza la ruta en Layout.astro a:', `/${cssFiles[0]}`);
  }
}

// Verificar configuración de Vercel
if (existsSync('vercel.json')) {
  console.log('✅ vercel.json encontrado');
} else {
  console.log('❌ vercel.json no encontrado');
}

console.log('\n🚀 Verificación completada. Si hay errores, revisa la configuración.');
