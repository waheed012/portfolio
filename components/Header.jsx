import Link from "next/link";
import Nav from "./Nav";
import MoubleNav from "./MoubleNav";

import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="py-4 xl:py-12 text-white bg-pink-50/5
    0 "
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" flex ">
          <Image
            src="/assets/logo.png" // Replace with the path to your logo image
            alt="Abdul Waheed Logo" // Descriptive alt text
            width={50} // Set the width of the image
            height={50} // Set the height of the image
            className="h-auto" // Adjust height as needed
          />
          <span className="text-4xl font-semibold text-accent ">.</span>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MoubleNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
