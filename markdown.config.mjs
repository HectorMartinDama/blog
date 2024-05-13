import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    blockquote: {
      ...nodes.blockquote,
      render: component("./src/components/Quote.astro"),
    },
  },
});
