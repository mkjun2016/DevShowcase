import { Code, MapPin, Mail, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "AI Development", href: "#" },
    { name: "Data Science", href: "#" },
    { name: "Consulting", href: "#" },
  ];

  const contactItems = [
    {
      icon: <MapPin className="text-primary mt-1 mr-3 h-4 w-4" />,
      text: "Incheon, South Korea",
    },
    {
      icon: <Mail className="text-primary mt-1 mr-3 h-4 w-4" />,
      text: "mkjun55@gmail.com",
    },
    {
      icon: <Phone className="text-primary mt-1 mr-3 h-4 w-4" />,
      text: "(+82) 10-9316-8971",
    },
  ];

  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-primary text-2xl">
                <Code />
              </span>
              <h2 className="font-heading font-bold text-xl">Kevin Jun</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Building innovative web and mobile solutions with modern
              technologies.
            </p>
            <SocialLinks variant="footer" />
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Kevin Jun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
