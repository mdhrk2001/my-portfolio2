import Link from "next/link";
import { javaProjects } from "../../../data/projectData";
import { SiMysql } from "react-icons/si";  // Import Simple Icons
import { FaJava } from "react-icons/fa";  // Import Font Awesome

export default function JavaProjects() {
  return (
    <section className="py-2 px-4 md:px-8 lg:px-16 xl:px-24">
      <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 dark:text-gray-100">
        Java Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {javaProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, link, techStack }: { title: string; description: string; link?: string; techStack: string[] }) {
  // Function to render icons based on tech stack
  const renderTechIcons = () => {
    return techStack.map((tech, index) => {
      switch (tech) {
        case "Java":
          return <FaJava key={index} className="text-red-600 dark:text-yellow-300 w-7 h-7" />;
        case "MySQL":
          return <SiMysql key={index} className="text-blue-600 dark:text-blue-300 w-7 h-7" />;
        default:
          return null;
      }
    });
  };

  return (
    <Link href={link || "#"} legacyBehavior>
      <a
        className="p-4 sm:p-6 bg-gray-300 dark:bg-gray-800 border-2 border-black dark:border-gray-400 rounded-lg shadow-md cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 transition-all w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">{title}</h3>
          <div className="flex space-x-2 bg-white dark:bg-gray-900 border-2 rounded-md border-black dark:border-gray-200 p-1">{renderTechIcons()}</div> {/* Display tech icons */}
        </div>
        <p className="text-gray-900 dark:text-gray-400 mt-2 text-sm sm:text-base text-justify">{description}</p>
      </a>
    </Link>
  );
}
