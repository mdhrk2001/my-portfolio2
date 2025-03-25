"use client"

import React, { useState, JSX } from "react";
import { Mail, Phone } from "lucide-react";
import { SiLinkedin, SiFacebook, SiInstagram, SiThreads, SiYoutube, SiTiktok, SiX } from "react-icons/si";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="py-4 px-4 md:px-10 lg:px-16 flex justify-center">
      <div className="w-full max-w-lg bg-gray-400 dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Contact Me</h2>
        <p className="mt-2 text-center text-gray-900 dark:text-gray-400">
          Feel free to reach out through any of the channels below.
        </p>
        <div className="mt-6 space-y-4">
          <ContactItem
            href="https://mail.google.com/mail/?view=cm&fs=1&to=randikaheshan183@gmail.com"
            icon={<Mail className="w-6 h-6 text-blue-500" />}
            label="Email"
            value="randikaheshan183@gmail.com"
          />
          <ContactItem
            href="http://www.linkedin.com/in/mdhrk2001"
            icon={<SiLinkedin className="w-6 h-6 text-blue-500" />}
            label="LinkedIn"
            value="linkedin.com/in/mdhrk2001"
          />
          <ContactItem
            href="https://wa.me/+94701048274"
            icon={<Phone className="w-6 h-6 text-green-500" />}
            label="WhatsApp"
            value="+94 701 048 274"
          />
          
          {/* Other Social Media Dropdown */}
          <div className="mt-6">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg w-full justify-between hover:bg-gray-200 dark:hover:bg-gray-700 transition border-2 border-black dark:border-gray-200"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Other Social Media</span>
              <svg
                className={`w-4 h-4 text-gray-800 dark:text-gray-200 transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="mt-4 space-y-2">
                <SocialMediaItem
                  href="https://www.facebook.com/mdhrk2001"
                  icon={<SiFacebook className="w-6 h-6 text-blue-500" />}
                  label="Facebook"
                  value="facebook.com/mdhrk2001"
                />
                <SocialMediaItem
                  href="https://www.instagram.com/mdhrk2001"
                  icon={<SiInstagram className="w-6 h-6 text-pink-600" />}
                  label="Instagram"
                  value="instagram.com/mdhrk2001"
                />
                <SocialMediaItem
                  href="https://www.threads.net/@mdhrk2001"
                  icon={<SiThreads className="w-6 h-6 text-black dark:text-white" />}
                  label="Threads"
                  value="threads.net/@mdhrk2001"
                />
                <SocialMediaItem
                  href="https://www.youtube.com/@mdhrk2001"
                  icon={<SiYoutube className="w-6 h-6 text-red-500" />}
                  label="YouTube"
                  value="youtube.com/channel/@mdhrk2001"
                />
                <SocialMediaItem
                  href="https://www.tiktok.com/@mdhrk2001"
                  icon={<SiTiktok className="w-6 h-6 text-black dark:text-white" />}
                  label="TikTok"
                  value="tiktok.com/@mdhrk2001"
                />
                <SocialMediaItem
                  href="https://x.com/mdhrk2001"
                  icon={<SiX className="w-6 h-6 text-black dark:text-white" />}
                  label="X (Twitter)"
                  value="twitter.com/mdhrk2001"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ href, icon, label, value }: { href: string; icon: JSX.Element; label: string; value: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition w-full"
    >
      {icon}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</p>
        <p className="text-base font-semibold text-gray-900 dark:text-white break-all">{value}</p>
      </div>
    </a>
  );
}

function SocialMediaItem({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: JSX.Element;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 p-2 bg-gray-300 dark:bg-gray-800 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition w-full"
    >
      {icon}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</p>
        <p className="text-base font-semibold text-gray-900 dark:text-white break-all">{value}</p>
      </div>
    </a>
  );
}
