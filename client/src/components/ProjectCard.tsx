import { ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

const categoryColors = {
  web: "bg-blue-100 dark:bg-blue-900 text-primary",
  mobile: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
  ui: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
};

const categoryLabels = {
  web: "Web App",
  mobile: "Mobile App",
  ui: "UI/UX",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover h-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-heading text-xl font-bold">{project.title}</h3>
          <span
            className={`px-2 py-1 ${
              categoryColors[project.category]
            } text-xs rounded-full`}
          >
            {categoryLabels[project.category]}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.preview && (
            <a
              href={project.preview}
              className="text-primary hover:text-blue-700 transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="h-4 w-4 mr-1" />
              <span>Preview</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="text-primary hover:text-blue-700 transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-1" />
              <span>Code</span>
            </a>
          )}
          {project.caseStudy && (
            <a
              href={project.caseStudy}
              className="text-primary hover:text-blue-700 transition-colors duration-300 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              <span>Case Study</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
