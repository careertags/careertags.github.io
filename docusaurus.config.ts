import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CareerTags 職涯書籤",
  tagline: "每天 15 分鐘，躍升你的職涯",
  favicon: "/img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.careertags.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "careertags", // Usually your GitHub org/user name.
  projectName: "careertags.github.io", // repo

  onBrokenLinks: "throw",

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&display=swap",
      type: "text/css",
    },
  ],
  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-NM3JS43H", // GTM
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/resources",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "全部文章",
          blogTitle: "文章",
          blogDescription: "職場能力相關的演講與訪談重點整理，以及可以在工作中練習的行動計劃。",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // index hash
        hashed: true,
        // language
        language: ["en", "zh"],
        // highlight term
        highlightSearchTermsOnTargetPage: true,
        // docs route base path
        docsRouteBasePath: "/resources",
        blogRouteBasePath: "/blog",
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "https://www.careertags.com/img/logo.png",
    // colorMode: {
    //   respectPrefersColorScheme: true,
    // },
    // algolia: {
    //   appId: "HHT6LFI2CT",
    //   apiKey: "ff0205c345c78cc43d0b19adf2c47826",
    //   indexName: "prod_NAME",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "CareerTags",
      logo: {
        alt: "CareerTags Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/about", label: "關於我們", position: "left" },
        { to: "/blog", label: "文章", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "resourceSidebar",
          position: "left",
          label: "學習資源",
        },
        {
          href: "https://facebook.com/groups/careertags",
          label: "社群",
          position: "right",
        },
        {
          href: "https://chromewebstore.google.com/detail/careertags/hgbdlhjfbbklmcibbnecaoijkhmaeeop?hl=zh-tw",
          label: "安裝擴充功能",
          position: "right",
          className: "ct-navbar-cta",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "產品",
          items: [
            { label: "關於我們", to: "/about" },
            {
              label: "Chrome 擴充功能",
              href: "https://chromewebstore.google.com/detail/careertags/hgbdlhjfbbklmcibbnecaoijkhmaeeop?hl=zh-tw",
            },
          ],
        },
        {
          title: "內容",
          items: [
            { label: "文章", to: "/blog" },
            { label: "學習資源", to: "/resources" },
          ],
        },
        {
          title: "社群",
          items: [
            {
              label: "Facebook 社團",
              href: "https://facebook.com/groups/careertags",
            },
            {
              label: "Facebook 粉絲專頁",
              href: "https://www.facebook.com/careertags",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/careertags",
            },
          ],
        },
        {
          title: "支援",
          items: [
            { label: "聯絡信箱", href: "mailto:careertags.com@gmail.com" },
            { label: "隱私權政策", to: "/privacy" },
            { label: "內容來源與下架申請", to: "/content-policy" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CareerTags, Inc. Built with ❤️ by <a href="https://www.kdchang.com">KD Chang</a> in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
