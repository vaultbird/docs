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
    logo: {
      light: "/logo-light-mode.svg",
      dark: "/logo-dark-mode.svg",
    },
    siteTitle: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Get started",
        items: [
          { text: "Connect wallet", link: "/onboarding/connect" },
          { text: "Choose vault", link: "/onboarding/choose" },
          { text: "Deposit to vault", link: "/onboarding/deposit" },
          { text: "Withdraw from vault", link: "/onboarding/withdraw" },
        ],
      },
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
