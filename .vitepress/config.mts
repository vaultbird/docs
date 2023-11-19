import { defineConfig } from "vitepress";

import head from "./head";
import generateDynamicMeta from "./generateDynamicMeta";

const hostname: string = "https://docs.vaultbird.com";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vaultbird Documentation",
  titleTemplate: ":title — Vaultbird Documentation",
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
    logo: {
      light: "/logo-light-mode.svg",
      dark: "/logo-dark-mode.svg",
    },
    siteTitle: false,
    nav: [{ text: "Go to app", link: "https://vaultbird.com/vaults" }],

    sidebar: [
      {
        text: "Vaultbird Turbo",
        items: [
          { text: "Introduction", link: "/turbo/introduction" },
          { text: "Getting Started", link: "/turbo/getting-started" },
        ],
      },
      {
        text: "Vaultbird Kit",
        items: [{ text: "Introduction", link: "/kit/introduction" }],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
  },
  sitemap: {
    hostname: "https://docs.vaultbird.com",
  },
});
