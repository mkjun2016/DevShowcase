import { Award, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/useScrollObserver";

export default function Resume() {
  const [ref, inView] = useScrollObserver();

  const experiences = [
    {
      title: "Senior Developer",
      company: "CloudScale",
      period: "2021 - Present",
      responsibilities: [
        "Architected and developed microservices using Node.js, Express, and GraphQL",
        "Led the front-end development of the company's SaaS platform using React and TypeScript",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with product managers to define and implement new features",
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "InnovateSoft",
      period: "2019 - 2021",
      responsibilities: [
        "Built RESTful APIs using Node.js, Express, and MongoDB",
        "Developed responsive web applications using React, Redux, and SASS",
        "Implemented authentication systems using JWT and OAuth",
        "Optimized application performance, resulting in 40% faster load times",
        "Led a team of 3 developers for client projects",
      ]
    },
    {
      title: "Frontend Developer",
      company: "TechStart Inc.",
      period: "2017 - 2019",
      responsibilities: [
        "Developed responsive user interfaces using React, Redux, and CSS3",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Integrated front-end with back-end services and APIs",
        "Implemented unit tests using Jest and React Testing Library",
        "Participated in Agile development processes",
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2021" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB", year: "2020" },
    { name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", year: "2022" },
    { name: "React Native Specialist", issuer: "Meta (formerly Facebook)", year: "2021" },
  ];

  return (
    <section id="resume" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            My professional background and qualifications
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">Alex Chen</h3>
                <p className="text-primary font-medium mb-4">Full-Stack Developer</p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>San Francisco, CA</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>alex@example.com</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(123) 456-7890</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <a
                  href="#"
                  className="inline-flex items-center px-5 py-2 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="font-heading text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Professional Summary
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Full-stack developer with 5+ years of experience designing and building responsive web and mobile applications. 
                Proficient in JavaScript, TypeScript, React, Node.js, and modern frameworks. Passionate about writing clean, 
                efficient code and solving complex problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Skilled in collaborating with cross-functional teams to deliver high-quality products that meet client 
                requirements and user needs. Strong focus on performance optimization and modern development practices.
              </p>
            </div>

            <div className="mb-10">
              <h4 className="font-heading text-xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                Work Experience
              </h4>

              {experiences.map((experience, index) => (
                <div key={index} className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h5 className="font-bold text-lg">{experience.title}</h5>
                    <div className="flex items-center mt-1 md:mt-0">
                      <span className="text-gray-500 dark:text-gray-400 text-sm mr-2">{experience.company}</span>
                      <span className="text-primary text-sm">{experience.period}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-1">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h4 className="font-heading text-xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                Education
              </h4>

              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h5 className="font-bold text-lg">Bachelor of Science in Computer Science</h5>
                  <div className="flex items-center mt-1 md:mt-0">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mr-2">University of California, Berkeley</span>
                    <span className="text-primary text-sm">2013 - 2017</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Graduated with honors. Coursework included algorithms, data structures, software engineering, and web development.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                Certifications
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h5 className="font-bold">{cert.name}</h5>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}, {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
