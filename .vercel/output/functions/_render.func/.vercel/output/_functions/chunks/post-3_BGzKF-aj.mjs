import { c as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from './astro_BxpB7VFX.mjs';
import 'kleur/colors';
import { $ as $$BlogPostLayout } from './BlogPostLayout_DMSB9saN.mjs';

const html = "";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"A post about importants items of life","date":"2024-11-20T00:00:00.000Z","author":"Pepe Maquina","image":{"src":"/images/post-1.jpg","alt":"A picture of coder"},"description":"Have you ever wondered what the most important items of life are? Well, wonder no more!","draft":false,"category":"Sveltekit"};
				const file = "/Users/hectormartindama/Dev/blog/src/content/blog/post-3.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
