import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import RotatingText from '../components/ui/RotatingText'
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import DynamicIntroTabs from "../components/ui/DynamicIntroTabs";
import MagicButton from './MagicButton';
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconUser,
  IconTerminal2,
  IconDownload,
  IconBrandLinkedin,
  IconHome
} from "@tabler/icons-react";


const words = [
    {
      text: "Hey,",
    },
    {
      text: "I'm",
    },
    {
      text: "Subhasish",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Projects and Skills",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "About Me",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#aboutme",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/subhasish-das26/",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/@SubhasishDas21",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Subhasish18",
    },
];

const Hero = () => {
  return (
  <div className="relative flex min-h-[50rem] w-full justify-center bg-white dark:bg-black mt-20">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:80px_80px]", 
          "[background-image:radial-gradient(circle,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(circle,rgba(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_right,rgba(38,38,38,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.1)_1px,transparent_1px)]",
        )}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black opacity-40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent opacity-50" />
    <div className="py-20 relative z-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
          <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
          <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="grey" />
          <Spotlight className='top-18 left-60 h-[40vh] w-[30vw]' fill="blue" />
          <Spotlight className='-top-43 left-20 h-[80vh] w-[50vw]' fill="gold" />
        </div>
        
        
        <div className="text-center mb-10 relative z-10">
         <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up max-w-4xl">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white text-lg font-mono">Online.</span>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <TypewriterEffectSmooth words={words} />
          </div>
          
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="flex justify-center items-center gap-3 flex-wrap">
              <span className="text-white text-xl md:text-3xl font-medium">I&rsquo;m a</span>
              <RotatingText
                texts={['Back-end Developer', 'Full Stack Engineer', 'Problem Solver', 'Tech Enthusiast']}
                mainClassName="inline-flex items-center py-3 bg-gradient-to-r  to-purple-800 text-white font-medium rounded-lg shadow-lg text-xl md:text-3xl"
                staggerFrom={"center"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                rotationInterval={3000}
              />
            </div>
            <a href="/resume.pdf" download>
              <MagicButton
                title="See my resume"
                icon={<IconDownload />}
                position="right"
              />
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <DynamicIntroTabs />
        </div>
      </div>
      </div>

      {/* Floating Dock */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4">
        <FloatingDock
          desktopClassName="backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-full scale-90 transform origin-bottom"
          mobileClassName="backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-full scale-75 transform origin-bottom"
          items={links}
        />
      </div>
    </div>
  );
}

export default Hero;