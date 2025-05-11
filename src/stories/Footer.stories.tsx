import type { Meta, StoryObj } from '@storybook/react';

import Footer from '@/components/Footer';

const meta = {
  title: 'components/Footer',
  component: Footer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};