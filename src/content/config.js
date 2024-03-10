// Defines the content collection, more specific config (Ex: required fields) will be added to frontmatter of files
// Simple example of a collection
import { defineCollection } from 'astro:content';

const collection = defineCollection({
  type: 'content',
});

export const collections = {
  posts: collection,
};
