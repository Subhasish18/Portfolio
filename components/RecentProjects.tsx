"use client";

import { FaLocationArrow } from "react-icons/fa6";
import FlowingMenu from "./ui/FlowingMenu";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./MagicButton";

const demoItems = [
  {
    link: '#',
    text: 'Languages',
    icons: [
      'https://cdn.simpleicons.org/python/3776AB',
      '/java.png', 
    ]
  },
  {
    link: '#',
    text: 'Development',
    icons: [
      'https://cdn.simpleicons.org/react/61DAFB',
      '/expo.svg',
      'https://cdn.simpleicons.org/laravel/FF2D20',
      '/next2.svg',
      'https://cdn.simpleicons.org/django/092E20',
      '/flask.svg', 
      
    ]
  },
  {
    link: '#',
    text: 'Cloud & Database',
    icons: [
      'https://cdn.simpleicons.org/firebase/FFCA28',
      'https://cdn.simpleicons.org/clerk/6C47FF',
      'https://cdn.simpleicons.org/netlify/00C7B7',
      'https://cdn.simpleicons.org/mongodb/47A248',
      'https://cdn.simpleicons.org/mysql/4479A1',
    ]
  },
  {
    link: '#',
    text: 'Tools',
    icons: [
      '/github.png', 
      'https://cdn.simpleicons.org/postman/FF6C37',
      '/vscode.svg',
    ]
  },
  
];


const RecentProjects = () => {
  return (
  <div id="projects" className="container mx-auto max-w-5xl text-center mb-12">
      <h1 className="text-3xl font-bold text-white mb-2 mt-2">
        A Showcase of <span className="text-purple-400">Passion Projects</span>
        </h1>
        <p className="text-purple-600">
          More projects getting uploaded soon
        </p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <MagicButton
                  title="Check Github"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </div>
            </PinContainer>
            
          </div>
        ))}
      </div>
      <div className="mt-20 h-screen">
        <FlowingMenu items={demoItems} />
      </div>
      
    </div>
  );
};

export default RecentProjects;