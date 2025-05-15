import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/useScrollObserver";
import { projects, ProjectCategory } from "@/lib/data";

type FilterOption = ProjectCategory | "all";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [ref, inView] = useScrollObserver();

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {([
            { value: "all", label: "All" },
            { value: "web", label: "Web Apps" },
            { value: "mobile", label: "Mobile" },
            { value: "ui", label: "UI/UX" }
          ] as const).map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
