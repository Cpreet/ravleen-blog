import { ChevronRight } from "lucide-react";

export type BlogCardProps = {
  post: BlogPost;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  url: string;
  author?: {
    name: string;
    url: string;
  };
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="flex flex-col text-center p-4 items-center gap-6 md:gap-8">
      <h2 className="text-4xl font-light w-sm md:w-xl">{post.title}</h2>
      {post.author && <p className="text-gray-500 text-sm">by <a href={post.author.url}>{post.author.name}</a></p>}
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <p className="text-gray-700 text-justify w-sm sm:w-xl md:w-xl lg:w-2xl mx-auto">
          {post.excerpt.slice(0, 390)}...
          <ChevronRight className="inline-block mr-1" />
        </p>
      </a>
    </div>
  );
};

export default BlogCard;
