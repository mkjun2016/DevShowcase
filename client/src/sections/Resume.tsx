import { Award, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/useScrollObserver";

export default function Resume() {
  const [ref, inView] = useScrollObserver();

  const experiences = [
    {
      title: "Frontend Intern",
      company: "Markcloud Co., Ltd.",
      period: "2025.04 - Present",
      responsibilities: ["TBD", "TBD", "TBD"],
    },
    {
      title: "Information Systems Specialist",
      company: "Republic of Korean Army",
      period: "2023.10 - 2025.04",
      responsibilities: [
        "Supported Provided operational support and management for tactical C4I systems, ensuring seamless functionality and performance",
        "Managed databases and conducted data backup, ensuring data integrity and system reliability",
        "Monitored data communication between system servers and terminals, conducting error checks, and managing the production and storage of critical materials",
      ],
    },
    {
      title: "Frontend Developer",
      company: "J&J Tech Inc.",
      period: "2023.07 - 2023.09",
      responsibilities: [
        "Supported development and launching of “YakManager,” a global pharmacy management app by a Korean start-up that surpassed 30,000 users by improving performance and user engagement.",
        "Developed cross-platform mobile application “YakManager Global” via React Native and Typescript.",
        "Utilized React Native to create a robust and scalable application, including several landing pages and Axios API connection.",
      ],
    },
  ];

  const certifications = [
    {
      name: "Mathematics for Machine Learning: Linear Algebra",
      issuer: "Imperial College London",
      year: "2025.03",
    },
    {
      name: "Linux Master Grade 2",
      issuer: "Korea Association for ICT Promotion",
      year: "2023.10",
    },
    {
      name: "Network Advisor Grade 2",
      issuer: "ICQA",
      year: "2023.10",
    },
    {
      name: "Internship Experience UK 2022 – Technology",
      issuer: "Bright Network",
      year: "2022.06",
    },
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Resume
          </h2>
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
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Moonkyu (Kevin) Jun
                </h3>
                <p className="text-primary font-medium mb-4">
                  Software Developer (AI & Web Applications)
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Incheon, South Korea</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>mkjun55@gmail.com</span>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(+82) 10-9316-8971</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <a
                  href="https://drive.google.com/file/d/1X1brF9fOIq0Q5pV4BJ759XH_ejLgpcdP/view?usp=sharing"
                  className="inline-flex items-center px-5 py-2 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
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
                Full-stack developer with 5+ years of experience designing and
                building responsive web and mobile applications. Proficient in
                JavaScript, TypeScript, React, Node.js, and modern frameworks.
                Passionate about writing clean, efficient code and solving
                complex problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Skilled in collaborating with cross-functional teams to deliver
                high-quality products that meet client requirements and user
                needs. Strong focus on performance optimization and modern
                development practices.
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
                      <span className="text-gray-500 dark:text-gray-400 text-sm mr-2">
                        {experience.company}
                      </span>
                      <span className="text-primary text-sm">
                        {experience.period}
                      </span>
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
                  <h5 className="font-bold text-lg">
                    Bachelor of Science in Computer Science
                  </h5>
                  <div className="flex items-center mt-1 md:mt-0">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mr-2">
                      Stony Brook University, SUNY
                    </span>
                    <span className="text-primary text-sm">2022 - 2027</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Coursework included Algorithms, Data Structures, System
                  Fundamentals, Linear Algebra, Finite Mathematical Structures
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
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {cert.issuer}, {cert.year}
                      </p>
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
