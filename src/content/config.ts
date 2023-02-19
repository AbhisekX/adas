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

const java = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    description: z.string().max(160, "Keep it under 160 characters").optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, java };
