'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroContent {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
}

const introContent: IntroContent[] = [
  {
    id: 'anyone',
    label: 'For anyone',
    title: 'Hello there!',
    description: "I'm a developer, programmer, and problem solver who cares about creating beautiful, functional solutions that make a real impact.",
    highlights: [
    "I'm a full-stack developer with experience in React, Node.js, Next.js, PHP-Laravel, and modern web technologies like Tailwind CSS.",
    "I also code in Java and Python, with a strong interest in algorithms, backend logic, and problem-solving beyond web development.",
    "I'm passionate about solving complex problems through efficient, maintainable code.",
    "I believe in clean code, thoughtful design, and continuous learning."
  ]
  },
  {
  id: 'recruiters',
  label: 'Recruiters',
  title: 'Looking for talent?',
  description: "I'm a passionate and versatile developer with a solid foundation in full-stack development, programming, and problem-solving — ready to contribute to your team’s success.",
  highlights: [
    "1.5+ years of hands-on experience in full-stack development through projects, courses, and self-learning.",
    "Proficient in JavaScript, with growing experience in React, Node.js, PHP-Laravel, and modern tools like Tailwind CSS and Next.js.",
    "Comfortable coding in Java and Python, with a strong focus on algorithms and backend logic.",
    "Good communication skills, a collaborative mindset, and a passion for continuous learning and improvement."
  ]
  },
  {
    id: 'developers',
    label: 'Developers',
    title: 'Hey fellow dev!',
    description: "Let's talk code, architecture, and building awesome things together.",
    highlights: [
      "I'm passionate about clean architecture and best practices.",
      "Always exploring new technologies and sharing knowledge with the community.",
      "Love pair programming and code reviews - they make us all better.",
      "Open source contributor and devlog enthusiast."
    ]
  },
  {
    id: 'designers',
    label: 'Designers',
    title: 'Design meets code!',
    description: "I’m a systems thinker with a high bar for quality. From process to pixels, I’ll collaborate with you, learn from you, and help make something we’re proud of.",
    highlights: []
  },
  {
  id: 'appdevelopers',
  label: 'App-Devs',
  title: 'Not a mobile expert, but I speak React Native.',
  description: "(I’m ≠ App-Dev), but I’ve wrangled React Native with Expo Go, shipped a side project, and didn’t break too much. Still learning, still building — so if you speak mobile, I can follow.",
  highlights: []
}

];

export default function DynamicIntroTabs() {
  const [activeContent, setActiveContent] = useState<IntroContent>(introContent[0]);

  return (
    	<div className="relative z-10 max-w-6xl mx-auto">
      {/* Navigation Bar */}
      	<nav className="flex overflow-x-auto md:justify-center py-4 shadow-xl mb-12 rounded-lg">
        {introContent.map((content) => (
          	<button
            key={content.id}
            onClick={() => setActiveContent(content)}
            className={`flex-shrink-0 px-4 py-2 mx-2 text-1xl font-medium transition-all duration-200 ${
              activeContent.id === content.id
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {content.label}
          </button>
        ))}
      </nav>

      {/* Dynamic Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeContent.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-3xl font-bold text-white mb-6">
            {activeContent.title}
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {activeContent.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {activeContent.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-lg backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
