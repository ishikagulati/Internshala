"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-x-8">
        <ul className="list-disc pl-4 space-y-1">
          <li>Java</li>
          <li>ExpressJs</li>
          <li>SQL</li>
          <li>NextJs</li>
        </ul>
        <ul className="list-disc pl-4 space-y-1">
          <li>JavaScript</li>
          <li>React</li>
          <li>DSA</li>
          <li>NodeJs</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>10th (2018-19) - DAV School - 91.4%</li>
        <li>12th (2020-21) - DAV School - 94.6%</li>
        <li>B.Tech IT (2021-25) - GGSIPU - 8.66 GPA</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={1200} height={1200} alt="About me image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
              Hello World, I&#39;m Ishika Gulati, a final-year BTech student in Information Technology at GGSIPU. With a deep passion for coding, I have honed my skills in Java and Data Structures and Algorithms, enabling me to solve complex problems efficiently. My academic journey has been enriched by my dedication to understanding the intricacies of software development.
  <br /><br />
  In addition to my core proficiency in Java, I have also gained experience in full-stack development using the MERN stack. This has allowed me to create several well-rounded projects, each demonstrating my ability to build robust, user-friendly applications. Whether it&#39;s front-end design or back-end logic, I enjoy the challenge of turning ideas into reality.
  <br /><br />
  I am eager to leverage my skills and knowledge to contribute to innovative projects and collaborate with like-minded professionals as I transition into the professional world.
  <br /><br />
  So, thank you for gracing my corner of the digital world! Let&#39;s embark on a journey together, where innovation meets imagination, and dreams become reality.
</p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
