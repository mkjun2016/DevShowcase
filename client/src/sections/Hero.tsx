import { useEffect, useRef } from "react";
import SocialLinks from "@/components/SocialLinks";
import Particles from "@/components/3d/Particles";
import { motion } from "framer-motion";
import kevin from "@/assets/kevin.jpg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute w-full h-full">
        <Particles />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900 text-primary rounded-full text-sm font-medium mb-4">
              Software Developer (AI & Web Applications)
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hey, I'm <span className="text-primary">Kevin Jun</span>
              <span className="block mt-2">
                Building products that help people.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              🇰🇷 Aspiring CS student from South Korea <br />
              🔧 Wish to master full-stack & machine learning <br />
              🗣️ Language: Korean (Fluent), English (Fluent), Chinese
              (Intermediate)
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center"
              >
                <span>Get in touch</span>
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium rounded-lg transition-all duration-300"
              >
                View my work
              </a>
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md">
              <img
                src={kevin}
                alt="Developer portrait"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
              />

              <div className="absolute -top-4 -right-4 md:top-0 md:-right-12 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg animate-float">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-blue-500"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </g>
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-12 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg animate-float-delay-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-yellow-500"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </g>
                </svg>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg animate-float-delay-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-green-500"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
