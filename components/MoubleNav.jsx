"use client";

import { usePathname } from "next/navigation";
import { useState } from "react"; // Import useState
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/Work",
  },
  {
    name: "review",
    path: "/review",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MoubleNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to manage the sheet's visibility

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile nav when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {" "}
      {/* Control open state */}
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className=" mb-20 text-center text-2xl">
          <Link href="/" className=" flex ">
            <Image
              src="/assets/logo.png" // Replace with the path to your logo image
              alt="Abdul Waheed Logo" // Descriptive alt text
              width={50} // Set the width of the image
              height={50} // Set the height of the image
              className="h-auto" // Adjust height as needed
              onClick={handleLinkClick}
            />
            <span className="text-4xl font-semibold text-accent ">.</span>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all`}
                onClick={handleLinkClick} // Close nav on link click
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MoubleNav;
