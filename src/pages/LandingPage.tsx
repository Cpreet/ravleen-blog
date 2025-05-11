import { faker } from "@faker-js/faker";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";

import type { BlogPost } from "@/components/BlogCard";
import Footer from "@/components/Footer";
import img from "@/assets/blockp.png";

const LandingPage = () => {
  const blogPosts: BlogPost[] = faker.helpers.multiple(
    () => ({
      title: faker.lorem.sentence({ min: 3, max: 7 }),
      excerpt: faker.lorem.paragraph({ min: 40, max: 40 }),
      url: faker.internet.url(),
      author: faker.helpers.maybe(
        () => ({ name: faker.person.fullName(), url: faker.internet.url() }),
        { probability: 0.4 }
      ),
    }),
    { count: 3 }
  );

  return (
    <>
      <Header />
      <main className="relative flex flex-col my-20 gap-10 md:gap-10 mx-auto items-center">
        <nav className="flex text-center text-stone-400 font-light gap-10">
          <a href="#" className="hover:cursor-pointer">Plays</a> -{" "}
          <a href="#" className="hover:cursor-pointer">Poems</a> -{" "}
          <a href="#" className="hover:cursor-pointer">Prose</a>
        </nav>
        <div
          className="absolute -z-10 h-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, var(--color-stone-100), transparent)",
          }}
        >
          <img src={img} alt="blockp" className="opacity-5 object-fill" />
        </div>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={{ ...post }} />
        ))}
      </main>
      <Footer />
    </>
  );
};
export default LandingPage;
