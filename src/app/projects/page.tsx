import Link from "next/link";
import Image from "next/image";
import {typeScriptProjects, javaProjects, phpProjects, javaScriptProjects, htmlProjects } from "@/data/projectData";
// import StackIcon from "tech-stack-icons";

export default function Projects() {
  const typeScriptProjectCount = typeScriptProjects.length;
  const javaProjectCount = javaProjects.length;
  const phpProjectCount = phpProjects.length;
  const javaScriptProjectCount = javaScriptProjects.length;
  const htmlProjectCount = htmlProjects.length;

  return (
    <section className="py-2 px-4 md:px-10 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white">Projects</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-6">

        {/* TypeScript Projects */}
        <Link href="/projects/typescript">
          <div className="relative p-4 md:p-6 lg:p-6 xl:p-8 bg-opacity-80 bg-gray-300 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border-2 border-gray-600 dark:border-gray-400 flex items-center gap-2">

            <Image src="/typescript.png" alt="TypeScript Logo" width={30} height={30} />
            {/* <StackIcon name="typescript" className="w-10 h-10" /> */}

            <h3 className="text-base md:text-xl font-bold text-black dark:text-white">TypeScript Projects</h3>
            {typeScriptProjectCount > 0 && (
              <span className="absolute bottom-4 right-4 bg-blue-600 text-white dark:bg-green-600 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                {typeScriptProjectCount}
              </span>
            )}
          </div>
        </Link>

        {/* Java Projects */}
        <Link href="/projects/java">
          <div className="relative p-4 md:p-6 lg:p-6 xl:p-8 bg-opacity-80 bg-gray-300 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border-2 border-gray-600 dark:border-gray-400 flex items-center gap-2">

            <Image src="/java.png" alt="Java Logo" width={30} height={30} />
            {/* <StackIcon name="java" className="w-10 h-10" /> */}

            <h3 className="text-base md:text-xl font-bold text-black dark:text-white">Java Projects</h3>
            {javaProjectCount > 0 && (
              <span className="absolute bottom-4 right-4 bg-blue-600 text-white dark:bg-green-600 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                {javaProjectCount}
              </span>
            )}
          </div>
        </Link>

        {/* PHP Projects */}
        <Link href="/projects/php">
          <div className="relative p-4 md:p-6 lg:p-6 xl:p-8 bg-opacity-80 bg-gray-300 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border-2 border-gray-600 dark:border-gray-400 flex items-center gap-2">

            <Image src="/php.png" alt="PHP Logo" width={30} height={30} />
            {/* <StackIcon name="php" className="w-10 h-10" /> */}

            <h3 className="text-base md:text-xl font-bold text-black dark:text-white">PHP Projects</h3>
            {phpProjectCount > 0 && (
              <span className="absolute bottom-4 right-4 bg-blue-600 text-white dark:bg-green-600 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                {phpProjectCount}
              </span>
            )}
          </div>
        </Link>

        {/* JavaScript Projects */}
        <Link href="/projects/javascript">
          <div className="relative p-4 md:p-6 lg:p-6 xl:p-8 bg-opacity-80 bg-gray-300 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border-2 border-gray-600 dark:border-gray-400 flex items-center gap-2">

            <Image src="/javascript.png" alt="JavaScript Logo" width={30} height={30} />
            {/* <StackIcon name="js" className="w-10 h-10" /> */}

            <h3 className="text-base md:text-xl font-bold text-black dark:text-white">JavaScript Projects</h3>
            {javaScriptProjectCount > 0 && (
              <span className="absolute bottom-4 right-4 bg-blue-600 text-white dark:bg-green-600 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                {javaScriptProjectCount}
              </span>
            )}
          </div>
        </Link>

        {/* HTML Projects */}
        <Link href="/projects/html">
          <div className="relative p-4 md:p-6 lg:p-6 xl:p-8 bg-opacity-80 bg-gray-300 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border-2 border-gray-600 dark:border-gray-400 flex items-center gap-2">

            <Image src="/html.png" alt="HTML Logo" width={30} height={30} />
            {/* <StackIcon name="html5" className="w-10 h-10" /> */}

            <h3 className="text-base md:text-xl font-bold text-black dark:text-white">HTML Projects</h3>
            {htmlProjectCount > 0 && (
              <span className="absolute bottom-4 right-4 bg-blue-600 text-white dark:bg-green-600 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                {htmlProjectCount}
              </span>
            )}
          </div>
        </Link>

      </div>
    </section>
  );
}
