"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  const roles = [
    { 
        text: "Software Engineer", 
        color: "text-blue-600 dark:text-cyan-400", 
        glow: "shadow-blue-300 dark:shadow-cyan-400/70" 
    },
    { 
        text: "Web Developer", 
        color: "text-rose-600 dark:text-pink-400", 
        glow: "shadow-rose-300 dark:shadow-pink-400/70" 
    },
    { 
        text: "Tech Enthusiast", 
        color: "text-emerald-600 dark:text-green-400", 
        glow: "shadow-emerald-300 dark:shadow-green-400/70" 
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoSwitchRef = useRef<NodeJS.Timeout | null>(null);

  const variants = {
    enter: (direction: number) => ({ x: direction * 100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: -direction * 100, opacity: 0 })
  };

  const changeRole = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + roles.length) % roles.length);
    if (autoSwitchRef.current) clearTimeout(autoSwitchRef.current);
    startAutoSwitch();
  };

  const startAutoSwitch = useCallback(() => {
    if (autoSwitchRef.current) clearTimeout(autoSwitchRef.current);
    autoSwitchRef.current = setTimeout(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      startAutoSwitch();
    }, 3000);
  }, [roles.length]);
  
  useEffect(() => {
    startAutoSwitch();
    return () => {
      if (autoSwitchRef.current) clearTimeout(autoSwitchRef.current);
    };
  }, [startAutoSwitch]);

  return (
    <section className="flex flex-col items-center justify-center text-center py-6 px-4 sm:px-6 md:px-8">
      <div className="absolute top-16 right-4 md:right-8">
        <a href="https://github.com/mdhrk2001" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl lg:text-3xl hover:text-blue-400 transition duration-300" />
        </a>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
        <Image
          src="/images/profile2.jpg"
          alt="Randika Karanayaka"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-400 dark:border-gray-500 shadow-lg"
          priority
        />
      </motion.div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-gray-800 dark:text-gray-100">
        Hi, I&apos;m <span className="text-blue-500 dark:text-blue-400">Randika Karanayaka</span>
      </h1>

      <div className="relative flex items-center mt-4">
        <button onClick={() => changeRole(-1)} className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-400">
          <ChevronLeft className="w-6 h-6 text-white dark:text-black" />
        </button>
        <div className="w-48 sm:w-60 mx-4 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.h2
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className={`text-lg sm:text-xl md:text-2xl font-semibold ${roles[index].color} drop-shadow-lg ${roles[index].glow}`}
            >
              {roles[index].text}
            </motion.h2>
          </AnimatePresence>
        </div>
        <button onClick={() => changeRole(1)} className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-400">
          <ChevronRight className="w-6 h-6 text-white dark:text-black" />
        </button>
      </div>

      <p className="text-base sm:text-lg text-black dark:text-gray-400 mt-6 max-w-2xl">
        A passionate software engineer specializing in web development, building modern and scalable applications.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a href="/projects" className="px-6 py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-400 text-white rounded-lg shadow-md transition-all text-sm sm:text-lg">
          View Projects
        </a>
        <a href="/contact" className="px-6 py-2 border-2 border-gray-900 dark:border-gray-300 text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg shadow-md transition-all text-sm sm:text-lg">
          Contact Me
        </a>
      </div>
    </section>
  );
}
