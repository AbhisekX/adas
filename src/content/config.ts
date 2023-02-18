import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(["Abhisek Das"]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z.string().max(160, "Keep it under 160 characters"),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
