import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useMobile } from "@/hooks/useMobile";
import { faker } from "@faker-js/faker";

const AboutPage = () => {
  const isMobile = useMobile();
  const aboutText = faker.lorem.paragraphs({ min: 10, max: 30 }).split("\n");
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="flex gap-20 justify-center">
          <figure className="relative m-4 md:m-10 w-fit">
            <img
              src={"https://picsum.photos/id/104/800/500"}
              alt="introduction"
              width="800"
              height="500"
              className="rounded-t-xl md:rounded-xl shadow-lg"
            ></img>
            {isMobile ? (
              <figcaption className="text-center text-sm w-full bg-stone-800 text-stone-100 p-1 rounded-b-xl">
                {faker.helpers.fake(
                  "{{lorem.sentence}} - {{person.firstName}}"
                )}
              </figcaption>
            ) : (
              ""
            )}
            <caption
              className="hidden md:block md:absolute md:-left-5 md:bottom-5 rounded-xl
          text-justify text-sm w-fit bg-stone-800 text-stone-100 p-4"
            >
              {faker.helpers.fake("{{lorem.sentence}} - {{person.firstName}}")}
            </caption>
          </figure>
        </div>
        <div className="flex flex-col gap-4 p-4 md:p-10">
          {aboutText.map((text, index) => (
            <p
              key={index}
              className="text-gray-700 text-justify w-sm sm:w-lg md:w-xl lg:w-2xl"
            >
              {text}
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default AboutPage;
