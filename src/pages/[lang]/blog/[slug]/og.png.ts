import { getCollection, type CollectionEntry } from "astro:content";
import fs from "fs";
import path from "path";
export const prerender = true;
import { ImageResponse } from "@vercel/og";

interface Props {
  params: { slug: string; lang: string };
  props: { post: CollectionEntry<"blog"> };
}

export async function GET({ props }: Props) {
  const { post } = props;

  // using custom font files
  const OnestBold = fs.readFileSync(
    path.resolve("public/fonts/Onest-Bold.ttf")
  );

  const html = {
    type: "div",
    props: {
      children: [
        {
          type: "div",
          props: {
            tw: "pl-10 shrink flex",
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "48px",
                    fontFamily: "Onest",
                    letterSpacing: "-0.05em",
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute right-[40px] bottom-[40px] flex items-center",
            children: [
              {
                type: "div",
                props: {
                  tw: "text-[#3D4FF5] text-3xl",
                  style: {
                    fontFamily: "Onest",
                    letterSpacing: "-0.05em",
                  },
                  children: "Hector Martin Dama",
                },
              },
              {
                type: "div",
                props: {
                  tw: "px-2 text-3xl",
                  style: {
                    fontSize: "30px",
                  },
                  children: "|",
                },
              },
              {
                type: "div",
                props: {
                  tw: "text-3xl",
                  children: "Blog",
                },
              },
            ],
          },
        },
      ],
      tw: "w-full h-full flex items-center justify-center relative px-22",
      style: {
        background: "#f7f8e8",
        fontFamily: "DM Sans Regular",
      },
    },
  };
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "Onest",
        data: OnestBold.buffer,
        style: "normal",
      },
    ],
  });
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.slug.split("/")[1], lang: post.slug.split("/")[0] },
    props: { post },
  }));
}
