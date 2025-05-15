import React from "react";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

interface SocialLinkProps {
  variant?: "default" | "footer";
}

export default function SocialLinks({ variant = "default" }: SocialLinkProps) {
  const baseClasses =
    variant === "default"
      ? "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
      : "text-gray-400 hover:text-primary transition-colors duration-300";

  return (
    <div className="flex space-x-5">
      <a
        href="https://github.com/mkjun2016"
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <Github className="h-6 w-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/mkjunkevin/"
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="h-6 w-6" />
      </a>
    </div>
  );
}
