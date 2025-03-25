"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ProfileModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <Image
              src="/images/profile2.jpg"
              alt="Profile picture of M.D.H Randika Karanayaka"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black dark:bg-gray-700 dark:text-white px-3 py-1 rounded-full"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen px-4 md:px-8 lg:px-16 xl:px-16 2xl:px-16">
      <div className="relative w-full aspect-[6000/2000] overflow-hidden 2xl:w-[85%] mx-auto">
        <Image
          src="/images/cover1.jpg"
          alt="Cover background with featured photo"
          layout="fill"
          objectFit="cover"
          className="border-4 border-black"
          priority
          aria-hidden="true"
        />
      </div>


      <div className="relative flex justify-center">
        <motion.div className="flex justify-center -mt-[45px] md:-mt-[80px] lg:-mt-[90px] xl:-mt-[100px] 2xl:-mt-[100px]" whileHover={{ scale: 1.1 }}>
          <Image
            src="/images/profile2.jpg"
            alt="Profile picture of M.D.H Randika Karanayaka"
            width={100}
            height={100}
            className="rounded-full border-4 border-white dark:border-gray-700 shadow-lg cursor-pointer sm:w-[50px] sm:h-[50px] md:w-[180px] md:h-[180px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] 2xl:w-[200px] 2xl:h-[200px]"
            onClick={() => setIsOpen(true)}
          />
        </motion.div>
      </div>

      <ProfileModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="pt-1 text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          M.D.H Randika Karanayaka <span className="text-blue-500 dark:text-blue-400">(mdhrk2001)</span>
        </motion.h1>

        <div className="flex justify-center space-x-4 mt-4 md:mt-6">
          <a
            href="https://github.com/mdhrk2001"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 hover:scale-150"
          >
            <FaGithub className="text-2xl lg:text-3xl" />
          </a>
          <a
            href="https://linkedin.com/in/mdhrk2001"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 hover:scale-150"
          >
            <FaLinkedin className="text-2xl lg:text-3xl text-blue-500 dark:text-blue-400" />
          </a>
        </div>



        <div className="mt-6">
          <a href="/resume.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 lg:py-3 lg:px-6 rounded-lg shadow-lg transition">
            Download Resume
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-10 grid sm:grid-cols-2 gap-6 mx-auto">
        {[ 
          { title: "Education", content: "BSc (Hons) in Software Engineering at CINEC Campus, currently in my 3rd year." },
          { title: "Skills", content: "Passionate about building scalable, high-performance web applications using modern technologies. Highly self-motivated and eager to innovate, with expertise in Next.js (React), TypeScript, Node.js, Express, MongoDB, and Tailwind CSS." },
          { title: "Interests", content: "Fascinated by AI-driven applications, web performance optimization, and crafting seamless user experiences. Currently focusing on advancing my skills in Python with a strong interest in machine learning." },
          { title: "Current Projects", content: "Developing a Smart Apparel Management Web Application with real-time production tracking." }          
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-400 dark:bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg lg:p-8 xl:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <h3 className="text-xl lg:text-2xl font-semibold text-black dark:text-gray-100">{item.title}</h3>
            <p className="mt-2 text-black dark:text-gray-200 text-sm lg:text-base xl:text-lg">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
