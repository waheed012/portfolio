"use client";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AbdulWaheed.pdf"; // The correct path to the file in the public folder
    link.download = "AbdulWaheed.pdf";
    link.click();
  };

  return (
    <section className="h-full mt-3">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I am <br />{" "}
              <span className="text-accent ">Abdul Waheed</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div>
        <Stats />
      </div>
    </section>
  );
};

export default Home;
