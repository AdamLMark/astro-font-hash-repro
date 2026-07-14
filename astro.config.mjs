import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/inter-latin.woff2'],
            weight: '400 700',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
