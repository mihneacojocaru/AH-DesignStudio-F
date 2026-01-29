import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
	// Load Markdown and MDX files in the `src/content/portfolio/` directory.
	loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			// Gallery fields for horizontal scroll
			galleryHeadline: z.string().optional(),
			galleryImages: z.array(image()).optional(),
			sideImage: image().optional(),
			sideText: z.string().optional(),
			sideLink: z.string().optional(),
		}),
});

export const collections = { portfolio };
