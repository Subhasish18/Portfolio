"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto px-4 auto-rows-max",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Flask", "NextJS","Python"];
  const rightLists = ["React-Ntive","Django", "Php-Laravel", "Java"];
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("subhasish16das@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // reset after 3s
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    ); // Adjust the threshold as needed
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ x: 0 }}
      animate={isVisible ? {
        x: [0, -5, 5, -2.5, 2.5, 0],
        transition: {
          duration: 0.3, // Adjust duration for speed
          ease: "easeInOut",
          repeat: 0, // Set to Infinity for continuous shake
        },
      } : {x:0}}
      whileHover={{ scale: 1.03 }} //optional zoom in on hover
      whileTap={{ scale: 0.95 }} //optional shrink on tap
      className={cn(
        "relative overflow-hidden border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#04071D] to-[#0C0E23]",
        className
      )}
      style={{ minHeight: '300px' }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        {/* Main image */}
        {img && (
          <Image
            src={img}
            alt={typeof title === "string" ? title : "background image"}
            className={cn("w-full h-full absolute object-cover object-center", imgClassName)}
            layout="fill"
          />
        )}

        {/* Spare image */}
        {spareImg && (
          <Image
            src={spareImg}
            alt={typeof title === "string" ? title : "spare image"}
            className="absolute right-0 -bottom-5 w-full h-full object-cover object-center opacity-80"
            layout="fill"
          />
        )}

        {/* Background animation for item 6 */}
        {id === 6 && (
          <BackgroundGradientAnimation size="50%">
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

          <div
            className={cn(
              "relative flex flex-col p-5 lg:p-8 gap-3 z-10 h-full",
              titleClassName
            )}
          >
          {/* Description First */}
          {description && (
            <div className="font-light text-sm md:text-base text-[#C1C2D3]">
              {description}
            </div>
          )}

          {/* Title */}
          {title && (
            <div className="text-lg lg:text-2xl font-bold text-white max-w-96">
              {title}
            </div>
          )}

          {/* Special Components */}
          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-2 lg:gap-4 w-fit absolute -right-3 lg:-right-2">
              {/* Left Stack */}
              <div className="flex flex-col gap-2 lg:gap-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-sm text-white opacity-70 bg-[#10132E] rounded-lg text-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* Right Stack */}
              <div className="flex flex-col gap-2 lg:gap-4">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-sm text-white opacity-70 bg-[#10132E] rounded-lg text-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {copied && (
                <div className="absolute -bottom-5 right-0">
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>
              )}
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
};
