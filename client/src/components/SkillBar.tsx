import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export default function SkillBar({
  name,
  percentage,
  delay = 0,
}: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="skill-bar bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay }}
        />
      </div>
    </div>
  );
}
