import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, A as AstroError, i as UnknownContentCollectionError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, u as unescapeHTML, n as renderTransition, s as slide } from '../astro_BxpB7VFX.mjs';
/* empty css                           */
import 'kleur/colors';
import 'clsx';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_DmO4ZVqa.mjs';
/* empty css                                                                        */
/* empty css                           */
/* empty css                                 */
/* empty css                                                                  */
/* empty css                                                            */
/* empty css                                    */

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("es-ES", {
    timeZone: "UTC"
  });
};

const $$Astro$c = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Badge;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="bg-[#3D4FF5] dark:bg-[#B2C6FE] dark:text-black text-white py-1 px-1 rounded-[4px] text-xs">${category}</span>`;
}, "/Users/hectormartindama/Dev/blog/src/components/Badge.astro", void 0);

const $$Astro$b = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { frontmatter, url } = Astro2.props;
  const { title, description, category, date } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/blog/" + url, "href")} class="flex flex-col text-lg font-semibold -tracking-wider md:w-[648px] sm:w-[390px] rounded-[4px] py-5 px-5 mb-5 transition-colors duration-300 hover:bg-[#EDEEF2] dark:hover:bg-[#23262F]"> ${title} <p class="text-sm mt-2 -tracking-wider">${description}</p> <div class="flex flex-row justify-between items-center mt-2"> <small class="text-xs font-regular mt-1 text-[#555962] dark:text-[#888C96]">${formatDate(date)}</small> ${renderComponent($$result, "Badge", $$Badge, { "category": category })} </div> </a>`;
}, "/Users/hectormartindama/Dev/blog/src/components/PostCard.astro", void 0);

const $$Astro$a = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/hectormartindama/Dev/blog/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$9 = createAstro();
const $$MainHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MainHead;
  const { title } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon2.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><link href="/pagefind/pagefind-ui.css" rel="stylesheet"><title>', '</title><meta name="description"><script src="/pagefind/pagefind-ui.js"><\/script>', "", "</head>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead());
}, "/Users/hectormartindama/Dev/blog/src/layouts/MainHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex items-center justify-center w-full h-[100px]  md:mx-[0px] "> <ul class="flex flex-row gap-5"> <li class="text-base font-normal transition-colors duration-200 text-[#555962] dark:text-[#888C96] hover:text-[#17181C] dark:hover:text-[white] "> <a href="mailto:info.hectormartindama@gmail.com" target="_blank">Contacto</a> </li> <li class="text-base font-normal transition-colors duration-200 text-[#555962] dark:text-[#888C96] hover:text-[#17181C] dark:hover:text-[white] "> <a href="https://portfolio-hectormartindama.vercel.app/" target="_blank">Portfolio</a> </li> <li class="text-base font-normal transition-colors duration-200 text-[#555962] dark:text-[#888C96] hover:text-[#17181C] dark:hover:text-[white] "> <a href="https://github.com/HectorMartinDama" target="_blank">Github</a> </li> <li class="text-base font-normal transition-colors duration-200 text-[#555962] dark:text-[#888C96] hover:text-[#17181C] dark:hover:text-[white] "> <a href="https://www.linkedin.com/in/héctor-martín-dama-a88a761a2" target="_blank">Linkedin</a> </li> </ul> </footer>`;
}, "/Users/hectormartindama/Dev/blog/src/components/Footer.astro", void 0);

const $$Astro$8 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class:list")} aria-label="Logotipo de Github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>`;
}, "/Users/hectormartindama/Dev/blog/src/icons/github.astro", void 0);

const $$Astro$7 = createAstro();
const $$Discord = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Discord;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 199"${addAttribute(Astro2.props.class, "class:list")} width="256" height="199" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path></svg>`;
}, "/Users/hectormartindama/Dev/blog/src/icons/discord.astro", void 0);

const $$Astro$6 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-menu-2", Astro2.props.class], "class:list")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>`;
}, "/Users/hectormartindama/Dev/blog/src/icons/menu.astro", void 0);

const $$Astro$5 = createAstro();
const $$Close = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Close;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(["icon icon-tabler icons-tabler-outline icon-tabler-x", Astro2.props.class], "class:list")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`;
}, "/Users/hectormartindama/Dev/blog/src/icons/close.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button id="themeToggle" aria-label="auto" class="theme-toggle" title="Toggles light & dark" aria-live="polite" data-astro-cid-oemx5le4> <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" data-astro-cid-oemx5le4> <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" data-astro-cid-oemx5le4></circle> <g class="sun-beams" stroke="currentColor" data-astro-cid-oemx5le4> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-oemx5le4></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-oemx5le4></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-oemx5le4></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-oemx5le4></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-oemx5le4></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-oemx5le4></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-oemx5le4></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-oemx5le4></line> </g> <mask class="moon" id="moon-mask" data-astro-cid-oemx5le4> <rect x="0" y="0" width="100%" height="100%" fill="white" data-astro-cid-oemx5le4></rect> <circle cx="24" cy="10" r="6" fill="black" data-astro-cid-oemx5le4></circle> </mask> </svg> </button>  <script>
    const theme = (() => {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
        return 'light';
    })();
  
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  
    window.localStorage.setItem('theme', theme);
  
    const handleToggleClick = () => {
      const element = document.documentElement;
      element.classList.toggle("dark");
  
      const isDark = element.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
     
   

    document.getElementById("themeToggle").addEventListener("click", handleToggleClick,false);

    document.addEventListener("astro:after-swap", function () {
      const element = document.documentElement;
      if(localStorage.getItem('theme') === 'dark'){
        element.classList.toggle("dark");
      }
    });
<\/script>`])), maybeRenderHead());
}, "/Users/hectormartindama/Dev/blog/src/components/ThemeIcon.astro", void 0);

const buildHierarchy = (headings) => {
  const toc = [];
  const parentHeadings = /* @__PURE__ */ new Map();
  if (!headings)
    return toc;
  headings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading);
    }
  });
  return toc;
};

const $$Astro$4 = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  const { headings } = Astro2.props;
  const toc = buildHierarchy(headings);
  return renderTemplate`${maybeRenderHead()}<nav class="shadow-md flex flex-row justify-between dark:bg-[#2E2E2E] w-full fixed top-0 md:relative z-10" data-astro-cid-dmqpwcec> <div class="flex items-center" data-astro-cid-dmqpwcec> <a href="/" class="font-semibold mr-[200px]" aria-label="Go home" data-astro-cid-dmqpwcec>HectorBlog</a> </div> <ul class="gap-6 hidden md:flex" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec> <a href="https://github.com/HectorMartinDama" target="_blank" data-astro-cid-dmqpwcec> ${renderComponent($$result, "GithubIcon", $$Github, { "class": "h-6 w-6 hover:scale-125 group transition dark:fill-slate-100", "data-astro-cid-dmqpwcec": true })} </a> </li> <li data-astro-cid-dmqpwcec> <a href="https://github.com/HectorMartinDama" target="_blank" data-astro-cid-dmqpwcec> ${renderComponent($$result, "DiscordIcon", $$Discord, { "class": "h-6 w-6 hover:scale-125 group transition", "data-astro-cid-dmqpwcec": true })} </a> </li> <li data-astro-transition-persist="theme" data-astro-cid-dmqpwcec> ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-dmqpwcec": true })} </li> </ul> <input type="checkbox" name="navbar-active" id="navbar-active" class="" data-astro-cid-dmqpwcec> <label for="navbar-active" class="open-navbar-button" data-astro-cid-dmqpwcec> ${renderComponent($$result, "MenuIcon", $$Menu, { "data-astro-cid-dmqpwcec": true })} </label> <label id="overlay" class="block md:hidden" for="navbar-active" data-astro-cid-dmqpwcec></label> <div class="links-container px-[40px] bg-[white] dark:bg-[#2e2e2e]" id="links-container" data-astro-cid-dmqpwcec> <header class="flex flex-row justify-end items-center w-full h-[60px] mb-4" data-astro-cid-dmqpwcec> <label for="navbar-active" class="close-navbar-button " data-astro-cid-dmqpwcec> ${renderComponent($$result, "CloseIcon", $$Close, { "data-astro-cid-dmqpwcec": true })} </label> </header> <div class="flex flex-col justify-between w-full h-full mb-4" data-astro-cid-dmqpwcec> <div data-astro-cid-dmqpwcec> ${headings && headings.length > 0 && renderTemplate`<h3 class="text-sm font-normal mb-3" data-astro-cid-dmqpwcec>Contenido del artículo</h3>
                  <ul class="gap-4" data-astro-cid-dmqpwcec> ${toc.map((heading) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute("#" + heading.slug, "href")} class="text-xs font-medium transition-colors duration-200 hover:text-[#3D4FF5] dark:hover:text-[#B2C6FE]" data-astro-cid-dmqpwcec>${heading.text}</a> ${heading.subheadings && heading.subheadings.length > 0 && renderTemplate`<ol class="list-decimal list-inside text-xs ml-4 text-[#555962] dark:text-[#888C96]" data-astro-cid-dmqpwcec> ${heading.subheadings.map((subheading) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute("#" + subheading.slug, "href")} class="text-[#555962] dark:text-[#888C96] text-xs" data-astro-cid-dmqpwcec>${subheading.text}</a> </li>`)} </ol>`} </li>`)} </ul>`} </div> <footer class="border-t-2 py-4 w-full flex flex-row justify-between" data-astro-cid-dmqpwcec> <div class="flex gap-4" data-astro-cid-dmqpwcec> <a href="https://github.com/HectorMartinDama" target="_blank" data-astro-cid-dmqpwcec> ${renderComponent($$result, "GithubIcon", $$Github, { "class": "h-5 w-5  dark:fill-slate-100", "data-astro-cid-dmqpwcec": true })} </a> <a href="https://github.com/HectorMartinDama" target="_blank" data-astro-cid-dmqpwcec> ${renderComponent($$result, "DiscordIcon", $$Discord, { "class": "h-5 w-5", "data-astro-cid-dmqpwcec": true })} </a> </div> ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-dmqpwcec": true })} </footer> </div> </div> </nav> `;
}, "/Users/hectormartindama/Dev/blog/src/components/Nav.astro", "self");

const $$Astro$3 = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, headings } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "MainHead", $$MainHead, { "title": title })}${maybeRenderHead()}<body> ${renderComponent($$result, "Nav", $$Nav, { "headings": headings })} <div class="flex justify-center mt-[100px] md:mt-[50px] w-full"> <main class="md:w-[736px] px-[20px] md:px-0 w-full"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/hectormartindama/Dev/blog/src/layouts/MainLayout.astro", void 0);

const slugify = (text) => {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/^-+/g, "").replace(/-+$/g, "");
};

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('../post-1_wdzs2JoH.mjs'),"/src/content/blog/post-2.md": () => import('../post-2_B9QrT1eG.mjs'),"/src/content/blog/post-3.md": () => import('../post-3_BHjOvg17.mjs'),"/src/content/blog/post-4.md": () => import('../post-4_XNpIW5LV.mjs'),"/src/content/blog/post-5.md": () => import('../post-5_hWT0or45.mjs'),"/src/content/blog/post-6.md": () => import('../post-6_D0DxmLzu.mjs'),"/src/content/blog/post-7.md": () => import('../post-7_BhmsmNpr.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"post-1":"/src/content/blog/post-1.md","post-2":"/src/content/blog/post-2.md","post-3":"/src/content/blog/post-3.md","post-6":"/src/content/blog/post-6.md","post-4":"/src/content/blog/post-4.md","post-7":"/src/content/blog/post-7.md","post-5":"/src/content/blog/post-5.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('../post-1_CSrwyEp3.mjs'),"/src/content/blog/post-2.md": () => import('../post-2_VUyYO7s-.mjs'),"/src/content/blog/post-3.md": () => import('../post-3_C8l-aY41.mjs'),"/src/content/blog/post-4.md": () => import('../post-4_DPG1tHi5.mjs'),"/src/content/blog/post-5.md": () => import('../post-5_CttGzE_R.mjs'),"/src/content/blog/post-6.md": () => import('../post-6_OhbCeXQ0.mjs'),"/src/content/blog/post-7.md": () => import('../post-7_CiWGSuvi.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$CategoryCloud = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const allCategories = allPosts.map((post) => post.data.category.toLowerCase()).flat();
  const processedCategories = allCategories.reduce((acc, category) => {
    const value = acc[category] || 0;
    return { ...acc, [category]: value + 1 };
  }, {});
  return renderTemplate`${maybeRenderHead()}<ul class="flex gap-4"> ${Object.entries(processedCategories).map(([key, value]) => renderTemplate`<li> <a class="py-2 px-2 rounded-full text-xs uppercase border transition-colors duration-200 hover:border-[#3D4FF5] hover:text-[#3D4FF5] dark:hover:border-[#B2C6FE] dark:hover:text-[#B2C6FE]"${addAttribute(`/category/${slugify(key)}`, "href")}>${key} ${value}</a> </li>`)} </ul>`;
}, "/Users/hectormartindama/Dev/blog/src/components/CategoryCloud.astro", void 0);

const $$Astro$2 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="blog pages" class="flex flex-row"> ${!disablePrevious && renderTemplate`<a${addAttribute("?page=" + (currentPage - 1), "href")} class="ml-5 font-bold text-[#3D4FF5] dark:text-[#B2C6FE] hover:underline text-base flex flex-row items-center">artículos recientes</a>`} ${!disableNext && renderTemplate`<a${addAttribute("?page=" + (currentPage + 1), "href")} class="ml-5 font-bold text-[#3D4FF5] dark:text-[#B2C6FE] hover:underline text-base flex flex-row items-center">artículos anteriores</a>`} </nav>`;
}, "/Users/hectormartindama/Dev/blog/src/components/Pagination.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="text-xl font-bold md:my-5 my-3 -tracking-wide">${title}</h3>`;
}, "/Users/hectormartindama/Dev/blog/src/components/SectionTitle.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div id="search" class="h-[35px] text-xs"></div> <script>
	window.addEventListener('DOMContentLoaded', (event) => {
	  // @ts-ignore
	  new PagefindUI({ element: "#search", showSubResults: true, showImages: false});
	});
<\/script>`])), maybeRenderHead());
}, "/Users/hectormartindama/Dev/blog/src/components/Search.astro", void 0);

const ARTICLES_PER_PAGE = 3;

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allPosts = await getCollection("blog");
  const totalPages = Math.ceil(allPosts.length / ARTICLES_PER_PAGE);
  const articleForPage = allPosts.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "My Blog", "description": "HectorMartinDama Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="z-10"> ${renderComponent($$result2, "Search", $$Search, {})} </div> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "\xDAltimos art\xEDculos", "data-pagefind-ignore": true })} <section class="flex flex-col mb-7 box" data-pagefind-ignore> <div data-pagefind-ignore class="min-h-[420px]"${addAttribute(renderTransition($$result2, "ftbrcere", slide({ duration: "0.6s" })), "data-astro-transition-scope")}> ${articleForPage.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "frontmatter": post.data, "url": post.slug })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} </section> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Art\xEDculos por temas", "data-pagefind-ignore": true })} <section data-pagefind-ignore> ${renderComponent($$result2, "CategoryCloud", $$CategoryCloud, {})} </section> ` })} `;
}, "/Users/hectormartindama/Dev/blog/src/pages/[...page].astro", "self");

const $$file = "/Users/hectormartindama/Dev/blog/src/pages/[...page].astro";
const $$url = "/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PostCard as $, ____page_ as _, $$MainLayout as a, getCollection as b, buildHierarchy as c, formatDate as f, getEntry as g, slugify as s };
