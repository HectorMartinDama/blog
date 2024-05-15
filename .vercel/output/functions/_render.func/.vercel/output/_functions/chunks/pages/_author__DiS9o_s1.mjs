/* empty css                           */
import { c as createComponent, r as renderTemplate, f as renderComponent, d as createAstro, m as maybeRenderHead } from '../astro_BxpB7VFX.mjs';
import 'kleur/colors';
import { s as slugify, $ as $$PostCard, a as $$MainLayout } from './__B2cc6tCb.mjs';

const formatBlogPostsByDate = (posts) => {
  posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  return posts;
};

const $$Astro = createAstro();
const Astro = $$Astro;
const getStaticPaths = async () => {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../blog/*.md");
  const orderPosts = formatBlogPostsByDate(allPosts);
  const allAuthors = [...new Set(allPosts.map((post) => post.frontmatter.author).flat())];
  return allAuthors.map((author) => {
    const authorPosts = orderPosts.filter((post) => post.frontmatter.author === author);
    return {
      params: { author: slugify(author) },
      props: {
        authorName: author,
        posts: authorPosts
      }
    };
  });
};
const $$author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$author;
  const { posts, authorName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "My Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="text-xl font-bold mb-5 -tracking-wide">Artículos de&nbsp;<span class="italic font-bold text-[#3D4FF5] dark:text-[#B2C6FE] -tracking-wide">${authorName}<span></span></span></h3> <section class="flex flex-col" data-pagefind-ignore> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post.frontmatter, "url": post.url })}`)} </section> ` })}`;
}, "/Users/hectormartindama/Dev/blog/src/pages/author/[author].astro", void 0);

const $$file = "/Users/hectormartindama/Dev/blog/src/pages/author/[author].astro";
const $$url = "/author/[author]";

const _author_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$author,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _author_ as _, formatBlogPostsByDate as f };
