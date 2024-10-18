"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = [
  {
    num: "01",
    title: "Full-Stack Development ",
    description:
      "Build end-to-end web applications using Next.js for server-side rendering (SSR) and React for client-side functionality.Integrate APIs, databases (MongoDB, PostgreSQL, etc.), and authentication systems ",
    href: "",
  },
  {
    num: "02",
    title: "Landing Page Development",
    description:
      "Create fast, SEO-optimized landing pages using Next.js with static site generation (SSG) or server-side rendering (SSR).Responsive and fully optimized for performance.",
    href: "",
  },
  {
    num: "03",
    title: "E-commerce  Development",
    description:
      "Develop fully-featured e-commerce platforms using Next.js and React. Integration with payment gateways, cart functionalities & product management.",
    href: "",
  },
  {
    num: "04",
    title: "Single Page Application",
    description:
      "Build highly dynamic and interactive single-page applications using React.Implement advanced front-end state management using Redux Toolkit.",
    href: "",
  },
  {
    num: "05",
    title: "Progressive Web App",
    description:
      "Convert your website or web app into a PWA, allowing users to install it on their devices and use it offline.Improve user experience with better performance and push notifications.",
    href: "",
  },
  {
    num: "06",
    title: " UI/UX Design ",
    description:
      "Translate designs from Figma, Sketch, or Adobe XD into fully functional React/Next.js applications.Ensure pixel-perfect, responsive design with Tailwind CSS or styled-components.",
    href: "",
  },
  {
    num: "07",
    title: " CMS Integration",
    description:
      "Integrate headless CMS solutions like Strapi, Contentful, or Sanity with Next.js for easy content management.Enable non-developers to manage content without affecting site performance.",
    href: "",
  },
  {
    num: "08",
    title: " Website  Optimization",
    description:
      "Improve the performance of existing React/Next.js websites, focusing on metrics like time-to-first-byte (TTFB), Core Web Vitals, and lighthouse scores.Implement lazy loading, code splitting, and caching techniques.",
    href: "",
  },
];

const services = () => {
  return (
    <section className=" min-h-[80vh] flex flex-col justify-center py-12 xl:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 1,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1  md:grid-cols-2 gap-[60px]"
        >
          {Services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center group">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 "
                  >
                    <BsArrowDownRight className=" text-primary text-2xl" />
                  </Link>
                </div>
                <h2 className="text-[42px]  font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default services;
