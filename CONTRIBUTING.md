# How to contribute

> [!IMPORTANT]
> Before you create a new Issue or PR:
>
> 1. Please make sure there is no [open issue](https://github.com/HectorMartinDama/Blog/issues) or [open pr](https://github.com/HectorMartinDama/blog/pulls) yet.
> 2. If it is a bug report, include the steps to reproduce the issue.
> 3. If it is a feature request, please share the motivation for the new feature and how you would implement it.

You will need:

- [Node.js 18+](https://nodejs.org/en/)
- [Git](https://www.git-scm.com/downloads)

Steps:

1. Fork this repository and clone it locally:

```
git clone git@github.com:your_username/blog.git
```

2. Install dependencies:

```
npm install
```

3. Go to the `src/content/blog/<language>/post-<number>.md` and add the article write in [`Markdown`](https://www.markdownguide.org/basic-syntax/)

4. Write the article. **You must copy this in all articles**.

```markdown
---
layout: "../../../layouts/BlogPostLayout.astro"
title: How to start a TypeScript project with Node.js and Express
date: 2024-05-31
description: Basic infrastructure to start an Express project with TypeScript.
image: { src: "/images/post-2/cover.webp", alt: "A picture of infraestructure" }
category: Express
author: Hector Martin Dama
---

Content of the article here!!!
```

[Real example](https://github.com/HectorMartinDama/blog/blob/main/src/content/blog/en/post-2.md)

> [!WARNING]
>
> If you are going to add images to the article, please optimize it so that the performance of the blog is correct. You can do it with [`Squoosh`](https://squoosh.app/). I recommend the format `.webp`.
