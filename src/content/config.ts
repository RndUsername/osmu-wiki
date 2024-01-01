import { defineCollection, z, type SchemaContext } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

function schema(context: SchemaContext){
	const docSch = docsSchema({
		extend: z.object({
			githubRepo: z.string().optional(),
			discordChannel: z.string().optional(),
			shops: z.array(
				z.object({
					name: z.string(),
					link: z.string(),
					official: z.boolean().optional(),
					region: z.string().optional()
				})
			).optional(),
			logo: context.image().optional()
		}),
	})

	return docSch(context)
}

export const collections = {
	docs: defineCollection({ schema }),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
