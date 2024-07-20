import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ request }) => {
  const englishDocsEntries = await getCollection("blog", ({ id }) => {
    return id.startsWith("en/");
  });
  return new Response(
    JSON.stringify({
      englishDocsEntries,
    })
  );
};
