"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-400 dark:bg-gray-800 h-14 md:h-14 lg:h-14 xl:h-18 2xl:h-18">
      <div className="flex justify-between items-center h-full px-4 md:pl-16 md:pr-4 lg:pl-16 lg:pr-4 xl:pl-16 xl:pr-4 2xl:pl-16 2xl:pr-4 mx-auto">
        <h1 className="text-xl lg:text-2xl xl:text-2xl font-bold text-black dark:text-white">My Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex lg:flex xl:flex 2xl:flex space-x-1 items-center">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-4 py-2 lg:px-6 xl:px-8 rounded-md transition-colors font-semibold text-lg md:text-base xl:text-lg 2xl:text-lg ${
                path === "/"
                  ? pathname === path // Home should be active only on exact "/"
                    ? "text-black bg-white dark:text-white dark:bg-gray-900"
                    : "text-black hover:text-black hover:bg-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  : pathname.startsWith(path) // Other links should be active for subpages
                  ? "text-black bg-white dark:text-white dark:bg-gray-900"
                  : "text-black hover:text-black hover:bg-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
              }`}
            >
              {name}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <div className="pl-6">
            <DarkModeToggle />
          </div>
        </div>

        {/* Dark Mode Toggle for Mobile (Outside Menu) */}
        <div className="md:hidden mr-2">
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden bg-gray-400 dark:bg-gray-800 w-full absolute top-14 z-50 opacity-100 flex justify-center flex-raw items-center">
    {[
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ].map(({ name, path }) => (
      <Link
        key={path}
        href={path}
        className={`block px-4 py-0 text-base text-center transition-colors ${
          path === "/"
            ? pathname === path // Ensure "Home" is only active on exact "/"
              ? "text-black bg-white dark:text-white dark:bg-gray-900"
              : "text-black hover:text-black hover:bg-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            : pathname.startsWith(path) // Other links should be active for subpages
            ? "text-black bg-white dark:text-white dark:bg-gray-900"
            : "text-black hover:text-black hover:bg-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {name}
      </Link>
    ))}
  </div>
)}

    </nav>
  );
}
