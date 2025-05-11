import type { Meta, StoryObj } from "@storybook/react";
import LandingPage from "@/pages/LandingPage";

const meta = {
  title: "pages/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LandingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
