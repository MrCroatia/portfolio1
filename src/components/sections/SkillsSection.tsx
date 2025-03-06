import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, 
  FaGitAlt, FaSass, FaWordpress, FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiFirebase, SiGraphql, SiAdobexd, SiAdobephotoshop
} from 'react-icons/si';

// Define skill type
interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  proficiency: number;
}

// Group skills by category
interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={40} />, color: "text-orange-500", proficiency: 95 },
      { name: "CSS3", icon: <FaCss3Alt size={40} />, color: "text-blue-500", proficiency: 90 },
      { name: "JavaScript", icon: <FaJs size={40} />, color: "text-yellow-400", proficiency: 90 },
      { name: "TypeScript", icon: <SiTypescript size={36} />, color: "text-blue-600", proficiency: 85 },
      { name: "React", icon: <FaReact size={40} />, color: "text-cyan-400", proficiency: 92 },
      { name: "Next.js", icon: <SiNextdotjs size={36} />, color: "text-gray-800 dark:text-white", proficiency: 88 },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={36} />, color: "text-cyan-500", proficiency: 90 },
      { name: "Sass", icon: <FaSass size={40} />, color: "text-pink-500", proficiency: 85 }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={40} />, color: "text-green-500", proficiency: 80 },
      { name: "MongoDB", icon: <SiMongodb size={36} />, color: "text-green-600", proficiency: 75 },
      { name: "Firebase", icon: <SiFirebase size={36} />, color: "text-yellow-500", proficiency: 82 },
      { name: "GraphQL", icon: <SiGraphql size={36} />, color: "text-pink-600", proficiency: 70 }
    ]
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma", icon: <FaFigma size={36} />, color: "text-purple-500", proficiency: 88 },
      { name: "Adobe XD", icon: <SiAdobexd size={36} />, color: "text-pink-700", proficiency: 85 },
      { name: "Photoshop", icon: <SiAdobephotoshop size={36} />, color: "text-blue-800", proficiency: 80 },
      { name: "Git", icon: <FaGitAlt size={40} />, color: "text-orange-600", proficiency: 85 },
      { name: "WordPress", icon: <FaWordpress size={40} />, color: "text-blue-700", proficiency: 90 },
      { name: "Docker", icon: <FaDocker size={40} />, color: "text-blue-500", proficiency: 70 }
    ]
  }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies in web design and development.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex + (categoryIndex * 10)}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  skill, 
  index,
  isInView
}: { 
  skill: Skill; 
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`mb-4 ${skill.color}`}>
          {skill.icon}
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {skill.name}
        </h4>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
          <motion.div 
            className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.1 * index }}
          />
        </div>
        
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {skill.proficiency}%
        </span>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
