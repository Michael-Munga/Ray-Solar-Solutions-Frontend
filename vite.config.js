 provider-hakeem
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dev

// https://vitejs.dev/config/
export default defineConfig({
 provider-hakeem
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
 dev
  },
});
