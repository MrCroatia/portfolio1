import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // This can be removed if not used
  tags: string[];
  url: string;
  subdomain: string;
}
// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "NoteTaker App",
    description: "A minimalist note-taking application with markdown support and cloud sync.",
    image: "/projects/notaker.png", // Optional if not used
    tags: ["React", "Firebase", "Tailwind CSS"],
    url: "/projects/notaker",
    subdomain: "notaker.fragment42.com"
  },
  {
    id: 2,
    title: "Travel Blog",
    description: "A responsive travel blog showcasing adventures around the world with a modern design.",
    image: "/projects/travelblog.png", // Optional if not used
    tags: ["Next.js", "Contentful", "GSAP"],
    url: "/projects/travelblog",
    subdomain: "travelblog.fragment42.com"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with product management and payment integration.",
    image: "/projects/ecommerce.png", // Optional if not used
    tags: ["Next.js", "Stripe", "MongoDB"],
    url: "/projects/ecommerce",
    subdomain: "ecommerce.fragment42.com"
  },
  {
    id: 4,
    title: "Portfolio Template",
    description: "A customizable portfolio template for creative professionals and agencies.",
    image: "/projects/portfolio.png", // Optional if not used
    tags: ["React", "Framer Motion", "Styled Components"],
    url: "/projects/portfolio",
    subdomain: "portfolio.fragment42.com"
  },
  {
    id: 5,
    title: "Climate Change Chart",
    description: "Interactive climate change data visualization using Chart.js and Vue.js.",
    image: "/projects/weather.png",
    tags: ["Vue.js", "API Integration", "Chart.js"],
    url: "/projects/weather",
    subdomain: "weather.fragment42.com"
  },
  {
    id: 6,
    title: "Kanban Task Board",
    description: "A collaborative task management board with drag-and-drop functionality.",
    image: "/projects/kanban.png",
    tags: ["React", "Drag & Drop", "TypeScript"],
    url: "/projects/kanban",
    subdomain: "kanban.fragment42.com"
  }
];
// Filter categories
const categories = ["All", "React", "Next.js", "Vue.js", "Firebase", "API Integration"];
const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
      return;
    }
    const filtered = projects.filter(project => 
      project.tags.some(tag => tag.includes(category))
    );
    setFilteredProjects(filtered);
  };
  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a selection of my recent projects showcasing my skills in web design and development.
          </p>
        </motion.div>
        {/* Filter Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => filterProjects(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
const ProjectCard = ({ 
  project, 
  index,
  isInView
}: { 
  project: Project; 
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link href={`https://${project.subdomain}`} className="block relative">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 w-full">
              <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-purple-600/80 inline-flex items-center gap-1">
                <FaExternalLinkAlt size={12} />
                Visit Site
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">Subdomain:</span> {project.subdomain.substring(0, 10)}...
        </div>
      </div>
    </motion.div>
  );
};
export default PortfolioSection;