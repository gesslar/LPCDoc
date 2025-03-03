// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer"

// This runs in Node.js - Don"t use client-side code here (browser APIs, JSX...)

const { vsDark: PrismLight, vsDark: PrismDark } = prismThemes

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "LPCDoc",
  tagline: "",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://lpcdoc.gesslar.dev/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often "/<projectName>/"
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren"t using GitHub pages, you don"t need these.
  organizationName: "gesslar", // Usually your GitHub org/user name.
  projectName: "LPCDoc", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",

  trailingSlash: false,

  staticDirectories: [
    "static",
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],


  // Even if you don"t use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    "docusaurus-plugin-sass",
  ],

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: [
            "./src/css/custom.scss",
          ]
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      image: "img/favicon.svg",
      scrollToTop: true,
      scrollToTopOptions: {
        zIndex: 100,
      },

      docs: {
        sidebar: {
          hideable: false
        },
      },

      navbar: {
        hideOnScroll: false,
        title: "",
        logo: {
          alt: "LPCDoc logo",
          src: "img/favicon.svg",
        },
        items: [
          // { type: "doc", position: "left", docId: "index", label: "Docs", sidebarId: "docs" },
        ],
      },
      prism: {
        additionalLanguages: [
          "json",
        ],
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "This will error",
          },
        ],
        theme: PrismLight,
        darkTheme: PrismDark,
      },

      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // announcementBar: {
      // id: `announcementBar-v${announcedVersion}`,
      // content: `🎉️ <b><a target="_blank" href="https://docusaurus.io/blog/releases/${announcedVersion}">Docusaurus v${announcedVersion}</a> is out!</b> 🥳️`,
      // },

      titleDelimiter: "~"
    }),
}

export default config
