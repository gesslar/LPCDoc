// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  docs: [
    "index",
    {
      type: "category",
      label: "Type Annotations",
      collapsible: true,
      collapsed: false,
      items: [
        "types/index",
        "types/primitives",
        "types/composites",
        "types/special",
      ]
    },
    {
      type: "category",
      label: "Tags",
      collapsible: true,
      collapsed: false,
      items: [
        "tags/index",
      ]
    },
    {
      type: "category",
      label: "Examples",
      collapsible: true,
      collapsed: false,
      items: [
        "examples/index",
      ]
    },
  ],
};

export default sidebars;
