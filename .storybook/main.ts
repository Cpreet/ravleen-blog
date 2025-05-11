import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/experimental-addon-test"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  managerHead: (head) => `
    ${head}
    <link rel="icon" href="/logo.png" />
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
  `,
  previewHead: (head) => `
    ${head}
    <link rel="icon" href="/logo.png" />
  `,
};
export default config;
