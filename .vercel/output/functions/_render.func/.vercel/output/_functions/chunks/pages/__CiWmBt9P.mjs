/* empty css                           */
import { c as createComponent, r as renderTemplate, f as renderComponent, d as createAstro } from '../astro_BxpB7VFX.mjs';
import 'kleur/colors';
import { g as getEntry } from './__Da9mu9AS.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const blogPost = await getEntry("blog", slug);
  if (blogPost === void 0) {
    return new Astro2.redirect("/404");
  }
  const { Content } = await blogPost.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "/Users/hectormartindama/Dev/blog/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/hectormartindama/Dev/blog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, $$url as url };
