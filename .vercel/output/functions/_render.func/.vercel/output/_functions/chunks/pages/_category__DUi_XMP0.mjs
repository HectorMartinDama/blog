/* empty css                           */
import { c as createComponent, r as renderTemplate, f as renderComponent, d as createAstro, m as maybeRenderHead } from '../astro_BxpB7VFX.mjs';
import 'kleur/colors';
import { a as getCollection, s as slugify, $ as $$PostCard, b as $$MainLayout } from './__Da9mu9AS.mjs';

const formatBlogPostsByDate = (posts) => {
  posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  return posts;
};

const $$Astro = createAstro();
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const allPosts = await getCollection("blog");
  const orderPosts = formatBlogPostsByDate(allPosts);
  const allCategories = [...new Set(allPosts.map((post) => post.data.category).flat())];
  const categoryName = allCategories.filter((categoryName2) => slugify(categoryName2) === category);
  console.log(allCategories);
  const categoryPosts = orderPosts.filter((post) => slugify(post.data.category) === category);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "My Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="text-xl font-bold mb-5">Artículos sobre <span class="italic font-bold text-[#3D4FF5] dark:text-[#B2C6FE]">${categoryName}<span></span></span></h3> <section class="flex flex-col" data-pagefind-ignore> ${categoryPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post.data, "url": post.slug })}`)} </section> ` })}`;
}, "/Users/hectormartindama/Dev/blog/src/pages/category/[category].astro", void 0);

const $$file = "/Users/hectormartindama/Dev/blog/src/pages/category/[category].astro";
const $$url = "/category/[category]";

const _category_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _category_ as _, formatBlogPostsByDate as f };
