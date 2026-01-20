// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import alpinejs from '@astrojs/alpinejs';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(), 
        sitemap(), 
        alpinejs(), 
        sanity({
            projectId: '2cpcrc28',
            dataset: 'production',
            useCdn: false,
            apiVersion: '2024-01-01',
            token: 'skI46jNOj3JuqSCjfSOq1ImkKpRqt7nA99zaFUIrGF73CyspkQfJKKZfH9dIpZoGQwwQCwotk9jPMkkwsKBmJvBlWwUU4xIqlygcSy45iDazwSUZXLQFVQCV5ErdKGxzwrgka4UgO7JpwrPh3kauM8tuMdKAWffeX1uJ780NJ51JNTfunZXm',
        })
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});