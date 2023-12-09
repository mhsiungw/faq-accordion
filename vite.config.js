import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/faq-accordion/',
	plugins: [
		react(),
		tailwindcss,
		autoprefixer,
	],
})
