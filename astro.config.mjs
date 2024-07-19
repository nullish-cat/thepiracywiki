import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'The Piracy Wiki',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      items: [{
        label: 'Start Here!',
        slug: 'guides/start'
      }, {
        label: 'Torrenting',
        slug: 'guides/torrent'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), icon()]
});