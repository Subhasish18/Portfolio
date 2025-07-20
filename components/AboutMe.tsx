import React from "react";
import { Timeline } from "@/components/ui/timeline";

const AboutMe = () => {
  const data = [
    {
      title: "2022 - 2026",
      content: (
        <div>
          <p className="mb-4 text-sm font-sans md:text-base dark:text-neutral-300 font-bold">
            Currently in my final year of B.E. in Computer Science and Engineering (AIML) at Dr. Sudhir Chandra Sur Institute of Technology, maintaining a CGPA of 7.8. This period has been about transforming academic knowledge into practical, real-world skills.
          </p>
        </div>
      ),
    },
    {
      title: "2023 - 2025",
      content: (
        <div>
          <p className="mb-4 text-sm font-sans md:text-base dark:text-neutral-300 font-bold">
            This period was crucial for my personal growth. Navigating challenges was pivotal in developing my resilience and perseverance, strengthening my ability to stay focused when tackling complex technical problems. It also taught me the value of collaboration and constructive feedback—principles I now apply to every project.
          </p>
          <p className="mb-4 text-sm font-sans md:text-base dark:text-neutral-300 font-bold">
            Alongside this, I focused on dedicated upskilling through the following certifications:
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 font-bold">
               Completed Full-Stack Development Training from Euphoria (Mar 2025).
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 font-bold">
               Earned a "What is Data Science?" certification from IBM (May 2024).
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 font-bold">
               Completed the "Google Crash Course on Python" via Coursera (Nov 2023).
            </div>
             <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 font-bold">
                Gained hands-on experience in a 3-week internship on Cyber Security & Artificial Intelligence at SRIC.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <p className="mb-4 text-sm font-sans md:text-base dark:text-neutral-300 font-bold">
           Established a strong academic foundation at Swami Pranabananda Vidyapith , achieving 91.6% in Higher Secondary (2022) and 90.3% in Secondary (2020) education. This is where my passion for science and technology was solidified, paving the way for my engineering studies.
          </p>
        </div>
      ),
    },
    {
      title: "Beyond the Code",
      content: (
        <div>
          <p className="mb-4 text-sm font-sans md:text-base dark:text-neutral-300 font-bold">
            When I'm not coding, I find balance and inspiration in other passions. Music is a constant companion that helps me focus and unwind, and I enjoy exploring new worlds through movies. I'm also an avid fitness enthusiast, and love exploring new places through driving and travel, often with a camera in hand to capture moments through photography.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id="aboutme" className="relative w-full">
      <Timeline
        data={data}
        // Pass the path to your photo here
        imageSrc="/photoport.jpg"
        title={
          <span className="font-bold text-4xl md:text-5xl">
            About <span className="text-purple-400">Me</span>
          </span>
        }
        description="I'm a developer driven by curiosity and a passion for building clean, efficient, and user-friendly applications. This timeline highlights my key milestones and the technologies I've mastered along the way."
      />
    </div>
  );
};

export default AboutMe;