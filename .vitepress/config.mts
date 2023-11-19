import { defineConfig } from "vitepress";

import head from "./head";
import generateDynamicMeta from "./generateDynamicMeta";

const hostname: string = "https://docs.vaultbird.com";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vaultbird Documentation",
  description: "Grow your assets faster with Vaultbird",
  head: head,
  transformHead(context) {
    return generateDynamicMeta(context, hostname);
  },
  lastUpdated: true,
  cleanUrls: true,
  lang: "en-US",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  sitemap: {
    hostname: "https://docs.vaultbird.com",
  },
});
