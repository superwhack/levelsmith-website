// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    fonts: [{
    provider: fontProviders.local(),
    name: "IBM Plex Mono",
    cssVariable: "--font-ibm-plex-mono",
    options: {
      variants: [{
        src: ['./src/assets/fonts/IBMPlexMono-Regular.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }],
  vite: {
    plugins: [tailwindcss()],
  },
});
