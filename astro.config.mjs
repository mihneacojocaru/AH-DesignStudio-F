// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from 'vite';

import alpinejs from '@astrojs/alpinejs';

import sanity from '@sanity/astro';

const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION, SANITY_TOKEN } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
    site: 'https://ah-designstudio.de',
    integrations: [
        mdx(),
        sitemap(),
        alpinejs(),
        sanity({
            projectId: SANITY_PROJECT_ID,
            dataset: SANITY_DATASET,
            useCdn: false,
            apiVersion: SANITY_API_VERSION,
            token: SANITY_TOKEN,
        })
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});