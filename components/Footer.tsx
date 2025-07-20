import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Footer = () => {
  return (
    <footer className="w-full pt-20" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-4xl text-center lg:max-w-[45vw]">
            Open to  <span className="text-purple-400">new opportunities</span> and <span className="text-purple-400">collaborations</span>
        </h1>
        <TextGenerateEffect
        className="text-center text-neutral-300 md:mt-10 my-5"
        words="As an aspiring developer, I'm eager to apply my skills to real-world challenges. I'd love to discuss how I can contribute to your team."
        />
        <a href="https://www.linkedin.com/in/subhasish-das26/" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Subhasish Das
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg"
            >
              
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;