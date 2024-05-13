import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
  }),
});

export const collections = { posts: postCollection };
