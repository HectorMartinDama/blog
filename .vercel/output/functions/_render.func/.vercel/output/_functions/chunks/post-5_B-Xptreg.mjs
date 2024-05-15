import { c as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from './astro_BxpB7VFX.mjs';
import 'kleur/colors';
import { $ as $$BlogPostLayout } from './BlogPostLayout_BCn8h0eo.mjs';

const html = "<p><a href=\"https://www.google.com\">Visita Google</a></p>";

				const frontmatter = {"layout":"../../layouts/BlogPostLayout.astro","title":"A Trello Clon New Version","date":"2024-11-12T00:00:00.000Z","author":"Hector Martin Dama","image":{"src":"/images/post-1.webp","alt":"A picture of coder"},"description":"Have you ever wondered what the most important items of life are? Well, wonder no more!","draft":false,"category":"Project"};
				const file = "/Users/hectormartindama/Dev/blog/src/content/blog/post-5.md";
				const url = undefined;
				function rawContent() {
					return "\n[Visita Google](https://www.google.com)\n";
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
