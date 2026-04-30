import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { hasContentEntries } from "./lib/content-files";

const blogContentBase = "./src/content/blog";
const storeContentBase = "./src/content/store";
const emptyCollectionLoader = async () => [];
const markdownContentLoader = (base: string) =>
  hasContentEntries(base) ? glob({ pattern: "**/*.{md,mdx}", base }) : emptyCollectionLoader;

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

const storeSchema = z.object({
  title: z.string(),
  description: z.string(),
  custom_link_label: z.string(),
  custom_link: z.string().optional(),
  updatedDate: z.coerce.date(),
  pricing: z.string().optional(),
  oldPricing: z.string().optional(),
  badge: z.string().optional(),
  checkoutUrl: z.string().optional(),
  heroImage: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;

const blogCollection = defineCollection({
  loader: markdownContentLoader(blogContentBase),
  schema: blogSchema,
});

const storeCollection = defineCollection({
  loader: markdownContentLoader(storeContentBase),
  schema: storeSchema,
});

export const collections = {
  blog: blogCollection,
  store: storeCollection,
};
