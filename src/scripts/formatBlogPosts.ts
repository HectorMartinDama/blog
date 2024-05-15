import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "./types";
import type { CollectionEntry } from "astro:content";

export const formatBlogPostsByDate = (
  posts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] => {
  posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  return posts;
};
