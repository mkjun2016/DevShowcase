import Timeline from "@/components/Timeline";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/useScrollObserver";

const skills = [
  "Frontend Development",
  "APP Development",
  "Backend Architecture",
  "UI/UX Design",
  "AI Development",
  "Data Science",
];

const timelineItems = [
  {
    period: "2023.07 - 2023.09",
    role: "Frontend Intern at J&J Tech Inc.",
    description:
      "Contributed to the development of YakManager, a cross-platform pharmacy management app, using React Native and TypeScript. Led UI/UX improvements, API integration, and landing page implementation, while also conducting competitor analysis and marketing strategy, boosting LinkedIn traffic by 333%.",
  },
  {
    period: "2023.10 - 2025.04",
    role: "Computer Engineer at Republic of Korean Army",
    description:
      "Maintained and supported tactical C4I systems with a focus on operational stability and performance. Oversaw database management, data backups, and communication integrity between servers and terminals, ensuring system reliability and secure information flow.",
  },
  {
    period: "2025.04 - Present",
    role: "Frontend Intern at Markcloud Co., Ltd.",
    description: "TBD",
  },
];

export default function About() {
  const [ref, inView] = useScrollObserver();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            My journey from ambitious entrepreneur to professional developer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400"
                alt="Developer working at desk"
                className="rounded-lg shadow-xl w-full"
              />

              <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold">
                  <span className="text-primary">6+</span> months of experience
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-4">
              My Background
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a driven computer science student passionate about full-stack
              development and machine learning, with hands-on experience in
              frontend engineering and a strong foundation in software
              architecture. I’ve built responsive, user-focused applications
              across startups and solo projects—always aiming to solve
              real-world problems with clarity, efficiency, and impact. My work
              reflects a commitment to clean code, scalable systems, and
              intuitive user experiences that align with business goals.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I thrive in project-driven environments where I can explore
              diverse challenges and develop innovative, high-impact features.
              I'm especially excited about contributing to AI-powered
              applications, building enterprise-grade functionality, and
              collaborating with teams that value growth, creativity, and
              thoughtful engineering. I'm currently seeking internship
              opportunities where I can apply my skills, learn from others, and
              help shape smarter, more efficient solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div className="flex items-start" key={index}>
                  <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center text-primary hover:text-blue-700 font-medium transition-colors duration-300"
            >
              <span>Let's work together</span>
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
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.h3
            className="font-heading text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My Journey
          </motion.h3>

          <div className="max-w-4xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
