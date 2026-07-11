import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const spaceMilestones = defineCollection({
  loader: file('src/content/space-milestones.json'),
  schema: z.object({
    order: z.number(),
    year: z.string(),
    title: z.string(),
    titleEn: z.string(),
    desc: z.string(),
    descEn: z.string(),
    tag: z.enum(['WORLD', 'CN', 'FUTURE']),
    chapter: z.enum(['dawn', 'voyage', 'relay', 'deepspace', 'next']),
  }),
});

const oceanMilestones = defineCollection({
  loader: file('src/content/ocean-milestones.json'),
  schema: z.object({
    order: z.number(),
    depth: z.string(),
    title: z.string(),
    titleEn: z.string(),
    desc: z.string(),
    descEn: z.string(),
    tag: z.enum(['BIO', 'HUMAN', 'CN']),
    zone: z.enum(['sunlight', 'twilight', 'midnight', 'abyss', 'hadal']),
  }),
});

export const collections = {
  'space-milestones': spaceMilestones,
  'ocean-milestones': oceanMilestones,
};
