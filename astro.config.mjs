import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'The Piracy Wiki',
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'English',
        lang: 'en',
      },
      "ru": {
        label: "Русский",
        lang: "ru"
      },
      "ja": {
        label: "日本語",
        lang: "ja"
      }
    },
    social: {
      github: 'https://github.com/nullish-cat/thepiracywiki'
    },
    sidebar: [{
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), icon()]
});