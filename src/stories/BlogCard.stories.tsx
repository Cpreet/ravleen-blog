import { faker } from "@faker-js/faker";

import type { Meta, StoryObj } from "@storybook/react";
import type { BlogPost, BlogCardProps } from "@/components/BlogCard";

import BlogCard from "@/components/BlogCard";

const meta = {
  title: "components/BlogCard",
  component: BlogCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BlogCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const blogPost: BlogPost = {
  title: faker.lorem.sentence(),
  excerpt: faker.lorem.paragraph({ min: 20, max: 40 }),
  url: faker.internet.url(),
};

export const Default: Story = {
  args: {
    post: {
      ...blogPost,
    },
  },
};

export const WithAuthor: Story = {
  args: {
    post: {
      ...blogPost,
      author: { name: faker.person.fullName(), url: faker.internet.url() },
    },
  },
};
