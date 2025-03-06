'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function NotakerProject() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Don't render until client-side to prevent hydration errors
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900"></div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <motion.div
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Fragment42
            </motion.div>
          </Link>
          
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <FaArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              NoteTaker App
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                React
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                Firebase
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300">
                Tailwind CSS
              </span>
            </div>
          </motion.div>
          
          <motion.div
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/projects/project1.jpg"
              alt="NoteTaker App"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Client
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Personal Project
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Timeline
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                3 Weeks
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Live Demo
              </h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://notaker.fragment42.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Project Overview
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300">
              NoteTaker is a minimalist note-taking application designed for users who want a clean, distraction-free environment to capture their thoughts, ideas, and to-do lists. The app features markdown support, allowing users to format their notes with headings, lists, code blocks, and more.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              One of the key features of NoteTaker is its cloud synchronization capability, which ensures that users' notes are accessible across all their devices. The app also includes a search function to quickly find specific notes, as well as categorization options to keep notes organized.
            </p>
          </motion.div>
          
          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Technologies Used
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>React for the frontend user interface</li>
              <li>Firebase for authentication and real-time database</li>
              <li>Tailwind CSS for styling</li>
              <li>React Markdown for rendering markdown content</li>
              <li>Firebase Hosting for deployment</li>
            </ul>
          </motion.div>
          
          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Challenges & Solutions
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300">
              One of the main challenges in developing NoteTaker was implementing real-time synchronization while maintaining a responsive user interface. To address this, I utilized Firebase's real-time database capabilities, which allowed for efficient data updates without compromising performance.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              Another challenge was creating a markdown editor that was both user-friendly and powerful. I solved this by implementing a split-screen approach, where users can see their markdown code on one side and the rendered preview on the other, making it easier to visualize the final result while editing.
            </p>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Key Features
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Markdown support for rich text formatting</li>
              <li>Real-time cloud synchronization</li>
              <li>Dark/light mode toggle</li>
              <li>Categorization and tagging system</li>
              <li>Full-text search functionality</li>
              <li>Offline capability with local storage backup</li>
              <li>Responsive design for all device sizes</li>
            </ul>
          </motion.div>
        </div>
      </main>
      
      <footer className="bg-gray-50 dark:bg-gray-800 py-8 mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Fragment42. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
