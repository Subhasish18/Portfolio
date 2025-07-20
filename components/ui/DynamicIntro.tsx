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
    description: "I'm a developer who cares about creating beautiful, functional solutions that make a difference.",
    highlights: [
      "I'm a full-stack developer with expertise in React, Node.js, and modern web technologies.",
      "I love building products that users actually want to use.",
      "I believe in clean code, thoughtful design, and continuous learning."
    ]
  },
  {
    id: 'recruiters',
    label: 'Recruiters',
    title: 'Looking for talent?',
    description: "I'm a passionate developer ready to contribute to your team's success.",
    highlights: [
      "3+ years of professional experience in full-stack development.",
      "Strong background in React, TypeScript, Node.js, and cloud technologies.",
      "Proven track record of delivering projects on time and exceeding expectations.",
      "Excellent communication skills and collaborative mindset."
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
      "Open source contributor and tech blog writer."
    ]
  },
  {
    id: 'product-managers',
    label: 'Product Managers',
    title: 'Ready to build?',
    description: "I bridge the gap between user needs and technical implementation.",
    highlights: [
      "I understand the product lifecycle from ideation to deployment.",
      "Strong focus on user experience and business impact.",
      "Skilled at translating requirements into technical solutions.",
      "Data-driven approach to feature development and optimization."
    ]
  },
  {
    id: 'designers',
    label: 'Designers',
    title: 'Design meets code!',
    description: "I bring designs to life with pixel-perfect precision and smooth interactions.",
    highlights: [
      "Deep appreciation for good design and attention to detail.",
      "Experienced in implementing complex animations and interactions.",
      "Collaborative approach to design systems and component libraries.",
      "Always advocate for user-centered development practices."
    ]
  }
];

export default function DynamicIntro() {
  const [activeContent, setActiveContent] = useState<IntroContent>(introContent[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative z-10 max-w-4xl mx-auto">
      {/* Audience Selector */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white hover:bg-gray-800/50 transition-colors"
          >
            <span className="text-sm text-gray-400">For</span>
            <span className="font-medium">{activeContent.label}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg"
              >
                {introContent.map((content) => (
                  <button
                    key={content.id}
                    onClick={() => {
                      setActiveContent(content);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-800/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      activeContent.id === content.id ? 'bg-gray-800/50 text-blue-400' : 'text-white'
                    }`}
                  >
                    {content.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Dynamic Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeContent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {activeContent.title}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {activeContent.description}
          </p>

          <div className="space-y-4 text-left max-w-2xl mx-auto">
            {activeContent.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
