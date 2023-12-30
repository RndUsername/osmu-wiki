import { defineCollection, z } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema({
		extend: z.object({
			githubRepo: z.string().optional(),
			discordChannel: z.string().optional(),
			shops: z.array(z.object({
				name: z.string(),
				link: z.string(),
				official: z.boolean().optional(),
				region: z.enum([
					"US", "EU", "CA"
				]).optional()
			})).optional()
		}),
	  }) 
	}),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
