/* empty css                           */
import { c as createComponent, r as renderTemplate, f as renderComponent, d as createAstro, m as maybeRenderHead } from '../astro_BxpB7VFX.mjs';
import 'kleur/colors';
import { a as getCollection, s as slugify, $ as $$PostCard, b as $$MainLayout } from './__Da9mu9AS.mjs';

const $$Astro = createAstro();
const $$author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$author;
  const allPosts = await getCollection("blog");
  const allAuthors = [...new Set(allPosts.map((post) => post.data.author).flat())];
  const { author } = Astro2.params;
  const authorName = allAuthors.filter((authorName2) => slugify(authorName2) === author);
  const postsByAuthor = allPosts.filter((post) => post.data.author === authorName[0]);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "My Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="text-xl font-bold mb-5 -tracking-wide">Artículos de&nbsp;<span class="italic font-bold text-[#3D4FF5] dark:text-[#B2C6FE] -tracking-wide">${authorName}<span></span></span></h3> <section class="flex flex-col" data-pagefind-ignore> ${postsByAuthor.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post.data, "url": post.slug })}`)} </section> ` })}`;
}, "/Users/hectormartindama/Dev/blog/src/pages/author/[author].astro", void 0);

const $$file = "/Users/hectormartindama/Dev/blog/src/pages/author/[author].astro";
const $$url = "/author/[author]";

export { $$author as default, $$file as file, $$url as url };
