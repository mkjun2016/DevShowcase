import SkillBar from "@/components/SkillBar";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/useScrollObserver";

const skills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React & React Native", level: 90 },
  { name: "Node.js & Express", level: 85 },
  { name: "MongoDB & SQL", level: 80 },
  { name: "HTML & CSS/SASS", level: 95 },
  { name: "GraphQL", level: 75 },
];

const tools = [
  { name: "React", icon: "ri-reactjs-line", color: "text-blue-500" },
  { name: "Vue.js", icon: "ri-vuejs-line", color: "text-green-500" },
  { name: "Node.js", icon: "ri-nodejs-line", color: "text-green-600" },
  { name: "MongoDB", icon: "ri-database-2-line", color: "text-blue-600" },
  { name: "Git", icon: "ri-git-branch-line", color: "text-orange-600" },
  { name: "Docker", icon: "ri-docker-line", color: "text-blue-500" },
  { name: "Terminal", icon: "ri-terminal-box-line", color: "text-gray-600 dark:text-gray-400" },
  { name: "Jest", icon: "ri-test-tube-line", color: "text-red-500" },
  { name: "Redux", icon: "ri-file-code-line", color: "text-purple-500" },
];

export default function Skills() {
  const [ref, inView] = useScrollObserver();

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-8">Technical Skills</h3>

            {/* Skill bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.level}
                  delay={index * 0.1} 
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-8">Tools & Frameworks</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <i className={`${tool.icon} text-4xl ${tool.color} mb-4`}></i>
                  <span className="text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
