import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "./types";

export const formatBlogPostsByDate = (
  posts: MarkdownInstance<Frontmatter>[]
): MarkdownInstance<Frontmatter>[] => {
  posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
  return posts;
};
