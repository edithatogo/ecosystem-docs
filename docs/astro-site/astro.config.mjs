import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';
import polyglot from 'starlight-polyglot';

export default defineConfig({
  site: 'https://edithatogo.github.io',
  base: '/ecosystem-docs',
  trailingSlash: 'always',

  integrations: [
    starlight({
      title: 'Ecosystem Documentation',
      description:
        'Central documentation hub for the edithatogo ecosystem — innovate, voiage, lifecourse, mars, and starlight-polyglot.',

      favicon: '/favicon.svg',

      logo: {
        source: '/img/ecosystem-logo.svg',
        replacesTitle: false,
      },

      social: {
        github: 'https://github.com/edithatogo',
      },

      editLink: {
        baseUrl:
          'https://github.com/edithatogo/ecosystem-docs/edit/main/docs/astro-site/',
      },

      lastUpdated: true,

      customCss: ['./src/styles/custom.css'],

      plugins: [
        starlightLinksValidator(),
        starlightLlmsTxt(),
      ],

      sidebar: [
        {
          label: 'Start Here',
          items: [
            { slug: 'index', label: 'Ecosystem Overview' },
            { slug: 'getting-started', label: 'Getting Started' },
          ],
        },
        {
          label: 'Projects',
          items: [
            { slug: 'ecosystem/innovate', label: 'Innovate (Python HEOR)' },
            { slug: 'ecosystem/voiage', label: 'Voiage (VOI Analysis)' },
            { slug: 'ecosystem/lifecourse', label: 'Lifecourse (Microsimulation)' },
            { slug: 'ecosystem/mars', label: 'Mars (Go Toolkit)' },
            { slug: 'ecosystem/starlight-polyglot', label: 'Starlight Polyglot' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { slug: 'guides/contributing', label: 'Contributing' },
          ],
        },
        {
          label: 'Meta',
          items: [
            { slug: 'changelog', label: 'Changelog' },
          ],
        },
      ],
    }),
  ],
});
