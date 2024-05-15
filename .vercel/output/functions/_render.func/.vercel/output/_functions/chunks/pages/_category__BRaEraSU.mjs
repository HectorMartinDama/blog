/* empty css                           */
import { c as createComponent, r as renderTemplate, f as renderComponent, d as createAstro, m as maybeRenderHead } from '../astro_BxpB7VFX.mjs';
import 'kleur/colors';
import { s as slugify, b as getCollection, $ as $$PostCard, a as $$MainLayout } from './__B2cc6tCb.mjs';
import { f as formatBlogPostsByDate } from './_author__DiS9o_s1.mjs';

const $$Astro = createAstro();
const getStaticPaths = async () => {
  return [
    {
      params: { category: slugify("Reference Docs") },
      props: { name: "Reference Docs" }
    },
    {
      params: { category: slugify("Sveltekit") },
      props: { name: "Sveltekit" }
    },
    {
      params: { category: slugify("Astro") },
      props: { name: "Astro" }
    },
    {
      params: { category: slugify("Javascript") },
      props: { name: "JavaScript" }
    }
  ];
};
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const { name } = Astro2.props;
  const allPosts = await getCollection("blog");
  const orderPosts = formatBlogPostsByDate(allPosts);
  const categoryPosts = orderPosts.filter((post) => slugify(post.data.category) === category);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "My Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="text-xl font-bold mb-5">Artículos sobre <span class="italic font-bold text-[#3D4FF5] dark:text-[#B2C6FE]">${name}<span></span></span></h3> <section class="flex flex-col" data-pagefind-ignore> ${categoryPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post.data, "url": post.slug })}`)} </section> ` })}`;
}, "/Users/hectormartindama/Dev/blog/src/pages/category/[category].astro", void 0);

const $$file = "/Users/hectormartindama/Dev/blog/src/pages/category/[category].astro";
const $$url = "/category/[category]";

export { $$category as default, $$file as file, getStaticPaths, $$url as url };
