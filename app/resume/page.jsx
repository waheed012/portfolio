"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
} from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am a highly skilled Software Engineer specializing in full-stack development with React.js and Next.js. With expertise in building scalable, high-performance web applications, I excel in delivering seamless user experiences and optimized, SEO-friendly solutions. My passion for innovation drives me to craft efficient, modern applications tailored to client needs",
  info: [
    { fieldName: "Name ", fielValue: "Abdul Waheed" },
    { fieldName: "Phone", fielValue: "+92 345 9265012" },
    { fieldName: "Experience", fielValue: "5+ Years" },
    { fieldName: "Email", fielValue: "abdulwaheedkhan748@gmail.com" },
    { fieldName: "Whatsapp", fielValue: "+92 345 9265012" },
    {
      fieldName: "Fiver ID",
      fielValue: "abdulwaheed336",
    },
    { fieldName: "Nationality", fielValue: "Pakistan" },

    {
      fieldName: "LinkedIn",
      fielValue: "abdul waheed",
    },
    { fieldName: "Languages", fielValue: "English, urdu" },
  ],
};

const experience = {
  icon: "/public/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am an experienced Web Developer with a strong background in creating dynamic, responsive, and user-centric websites. Proficient in modern technologies like React.js and Next.js, I specialize in building high-performance, scalable web applications. With a keen eye for detail and a commitment to best practices, I deliver solutions that enhance user experience and drive business success.",
  item: [
    {
      company: "IT board AJK",
      positon: "System Enginner",
      duration: "2024-Present",
    },
    {
      company: "Geek Genix LLc",
      positon: "Web Developer",
      duration: "2023-2024",
    },
    {
      company: "Ackta LTD",
      positon: "Web Developer",
      duration: "2022-2023",
    },
    {
      company: "IZOC Solutions ",
      positon: "E-Commerce Officer",
      duration: "2020-2022",
    },
    {
      company: "Ackta LTD",
      positon: "Web Developer",
      duration: "2018-2020",
    },
  ],
};

const education = {
  icon: "/public/assets/resume/cap.svg",
  title: "My Eduction",
  description:
    "I hold a Bachelor's degree in Software Engineering, where I gained a solid foundation in software development principles, algorithms, and system design. My academic background, combined with hands-on experience in modern web technologies, has equipped me with the skills to build innovative and efficient software solutions tailored to real-world challenges.",
  item: [
    {
      Institution: "Softoo Bootcamp",
      degree: "MERN Bootcamp",
      duration: "2022",
    },
    {
      Institution: "DICE Analytic",
      degree: "Data Analytic",
      duration: "2022",
    },

    {
      Institution: "FURC University",
      degree: "Bachelor of Science in Software Engineering",
      duration: "2015-2019",
    },
    {
      Institution: "Ackta LTD",
      degree: "Web developer ",
      duration: "2017-2018",
    },
    {
      Institution: "Online Course",
      degree: "Programing",
      duration: "2016-2017",
    },
  ],
};

const skills = {
  icon: "/public/assets/resume/skill.svg",
  title: "My Skill",
  description:
    "I possess a comprehensive skill set in full-stack web development, with expertise in both front-end and back-end technologies. My proficiency includes React.js and Next.js for building dynamic, responsive user interfaces, alongside Node.js and Express.js for creating robust server-side applications. I excel in integrating RESTful APIs, working with databases like MongoDB and SQL, and managing state using Redux. Additionally, I have a strong understanding of version control with Git, deployment processes, and optimizing web performance for SEO and user experience. My skill set enables me to deliver scalable, maintainable, and high-quality solutions",
  skillList: [
    {
      Icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      Icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      Icon: <FaJs />,
      name: "Javascript",
    },
    {
      Icon: <FaFigma />,
      name: "Figma",
    },
    {
      Icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      Icon: <FaReact />,
      name: "React.js",
    },
    {
      Icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      Icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
  ],
};
const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex item-center justify-center py-12 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] py-12 "
        >
          {/* flex items-center justify-center py-12 xl:py-0 */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex 
    flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.positon}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex 
    flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full icon-style h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent icon-styles    transition-all duration-300">
                                {skill.Icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=" flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">:</span>
                        <span className="text-xl break-all sm:break-normal">
                          {item.fielValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
