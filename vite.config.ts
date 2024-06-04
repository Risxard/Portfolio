import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/development/', // Defina a URL base para refletir a subpasta
  plugins: [react()],
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
  },
  build: {
    outDir: 'dist', // Diretório de saída para os arquivos de build
    emptyOutDir: true, // Limpa a pasta de saída antes de construir
    minify: 'esbuild', // Use esbuild para minificação
  },
});
