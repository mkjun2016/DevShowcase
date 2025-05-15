import { motion } from "framer-motion";
import { useScrollObserver } from "@/hooks/useScrollObserver";

interface TimelineItem {
  period: string;
  role: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [ref] = useScrollObserver();

  return (
    <div className="relative" ref={ref}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-dot relative flex mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute w-4 h-4 bg-primary rounded-full mt-1.5 z-10"></div>
          <div className="ml-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.period}
              </span>
              <h4 className="font-heading text-xl font-bold mt-1 mb-2">
                {item.role}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
