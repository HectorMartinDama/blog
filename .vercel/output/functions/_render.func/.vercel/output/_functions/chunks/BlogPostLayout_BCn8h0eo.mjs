import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, d as createAstro, f as renderComponent, h as renderSlot } from './astro_BxpB7VFX.mjs';
import 'kleur/colors';
import { s as slugify, f as formatDate, c as buildHierarchy, a as getCollection, b as $$MainLayout } from './pages/__Da9mu9AS.mjs';
import 'clsx';
import { f as formatBlogPostsByDate } from './pages/_category__DUi_XMP0.mjs';

const extractRelativePathFromSrc = (fullPath) => {
  const srcIndex = fullPath.indexOf("/src");
  if (srcIndex !== -1) {
    return fullPath.slice(srcIndex);
  } else {
    return "";
  }
};

const $$Astro$4 = createAstro();
const $$EditArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$EditArticle;
  const URL = "https://github.com/HectorMartinDama/blog/edit/main";
  const { file } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(URL.concat(extractRelativePathFromSrc(file)), "href")} target="_blank" class="transition-colors duration-300 hover:text-[#3D4FF5] dark:hover:text-[#B2C6FE] font-semibold text-xs flex-row gap-4">¿Una errata? Edita el artículo.</a>`;
}, "/Users/hectormartindama/Dev/blog/src/components/EditArticle.astro", void 0);

const $$Astro$3 = createAstro();
const $$PostHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostHeader;
  const { title, date, author, image, category, file } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header> <div class="mb-7"> <h1 class="font-bold text-4xl text-center -tracking-wider w-full">${title}</h1> <div data-pagefind-ignore class="flex justify-center"> <p data-pagefind-ignore class=" text-xs text-center mt-3 hidden md:block">por&nbsp;<a${addAttribute(`/author/${slugify(author)}`, "href")} class="underline"> ${author}</a>&nbsp;·&nbsp;${formatDate(date)}&nbsp;·&nbsp;${renderComponent($$result, "EditArticle", $$EditArticle, { "file": file })}</p> <div class="md:hidden"> <p data-pagefind-ignore class="flex text-xs text-center mt-3">por&nbsp;<a${addAttribute(`/author/${slugify(author)}`, "href")} class="underline"> ${author}</a>&nbsp;·&nbsp;${formatDate(date)}</p> <div class="flex justify-center"> ${renderComponent($$result, "EditArticle", $$EditArticle, { "file": file })} </div> </div> </div> </div> ${image && renderTemplate`<img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")}>`} </header>`;
}, "/Users/hectormartindama/Dev/blog/src/components/PostHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$RelationArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RelationArticle;
  const { relatedPosts } = Astro2.props;
  return renderTemplate`${relatedPosts.map((post) => renderTemplate`${maybeRenderHead()}<a${addAttribute(post.slug, "href")} class="flex flex-col gap-3 px-6 text-center justify-center items-center font-medium text-base border-2 rounded-[6px] transition-colors duration-200 hover:border-[#3D4FF5] dark:hover:border-[#B2C6FE] w-[300px] h-[174px]">${post.data.title}<small class="text-xs">${post.data.author}&nbsp;·&nbsp;${formatDate(new Date(post.data.date))}</small></a>`)}`;
}, "/Users/hectormartindama/Dev/blog/src/components/RelationArticle.astro", void 0);

const $$Astro$1 = createAstro();
const $$SidebarContentPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SidebarContentPost;
  const { headings } = Astro2.props;
  const toc = buildHierarchy(headings);
  console.log(toc, "headings");
  return renderTemplate`${maybeRenderHead()}<div> <h3 class="text-sm font-normal mb-2">Contenido del artículo</h3> <nav> <ul class="gap-4"> ${toc.map((heading) => renderTemplate`<li> <a${addAttribute("#" + heading.slug, "href")} class="text-xs font-medium transition-colors duration-200 hover:text-[#3D4FF5] dark:hover:text-[#B2C6FE]">${heading.text}</a> ${heading.subheadings && heading.subheadings.length > 0 && renderTemplate`<ol class="list-decimal list-inside text-xs ml-4 text-[#555962] dark:text-[#888C96]"> ${heading.subheadings.map((subheading) => renderTemplate`<li> <a${addAttribute("#" + subheading.slug, "href")} class="text-[#555962] dark:text-[#888C96] text-xs">${subheading.text}</a> </li>`)} </ol>`} </li>`)} </ul> </nav> </div>`;
}, "/Users/hectormartindama/Dev/blog/src/components/SidebarContentPost.astro", void 0);

const $$Astro = createAstro();
const $$BlogPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter, file, headings } = Astro2.props;
  const { title, date, author, description, image, category } = frontmatter;
  console.log(frontmatter.category);
  const allPosts = await getCollection("blog");
  const orderPosts = formatBlogPostsByDate(allPosts);
  const relatedPosts = orderPosts.filter((post) => post.data.category === category && post.data.title != title).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "headings": headings }, { "default": ($$result2) => renderTemplate`${headings && headings.length > 0 && renderTemplate`${maybeRenderHead()}<div class="right-[32px] fixed top-[100px] hidden lg:block"> ${renderComponent($$result2, "SidebarContentPost", $$SidebarContentPost, { "headings": headings })} </div>`}<article> ${renderComponent($$result2, "PostHeader", $$PostHeader, { "title": title, "date": date, "category": category, "image": image, "author": author, "file": file })} <div> <div class="max-w-full prose dark:prose-invert prose-a:text-[#3D4FF5] prose-headings:text-[#3D4FF5] prose-headings:font-bold prose-headings:-tracking-wide  dark:prose-headings:text-[#B2C6FE] dark:text-[#fafafa]"> ${renderSlot($$result2, $$slots["default"])} </div> <aside class="flex flex-col md:flex-row justify-center items-center gap-8 mt-[68px]"> ${relatedPosts.length > 0 && renderTemplate`${renderComponent($$result2, "RelationArticle", $$RelationArticle, { "relatedPosts": relatedPosts })}`} </aside> </div> </article> ` })}`;
}, "/Users/hectormartindama/Dev/blog/src/layouts/BlogPostLayout.astro", void 0);

export { $$BlogPostLayout as $ };
