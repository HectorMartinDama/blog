export interface Frontmatter {
  layout: string;
  title: string;
  date: string;
  author: string;
  image?: {
    src: string;
    alt: string;
  };
  description: string;
  draft: boolean;
  category: string;
}

export interface Heading {
  slug: string;
  text: string;
  depth: number;
  subheadings?: Array<Heading>;
}
