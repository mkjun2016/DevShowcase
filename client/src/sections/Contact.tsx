import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/useScrollObserver";

export default function Contact() {
  const [ref, inView] = useScrollObserver();

  const contactInfo = [
    {
      icon: <MapPin className="text-primary text-xl" />,
      label: "Location",
      value: "San Francisco, California",
    },
    {
      icon: <Mail className="text-primary text-xl" />,
      label: "Email",
      value: "alex@example.com",
    },
    {
      icon: <Phone className="text-primary text-xl" />,
      label: "Phone",
      value: "(123) 456-7890",
    },
    {
      icon: <Clock className="text-primary text-xl" />,
      label: "Working Hours",
      value: "Monday - Friday, 9AM - 6PM PST",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Interested in working together? Let's talk about your project!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{info.label}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-heading text-xl font-bold mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg shadow-md transition-colors duration-300"
                >
                  <i className="ri-github-fill text-xl"></i>
                </a>
                <a
                  href="#"
                  className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg shadow-md transition-colors duration-300"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a
                  href="#"
                  className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg shadow-md transition-colors duration-300"
                >
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a
                  href="#"
                  className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg shadow-md transition-colors duration-300"
                >
                  <i className="ri-dribbble-fill text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
