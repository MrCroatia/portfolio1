import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaLaptopCode, FaMobileAlt, FaPaintBrush, FaShoppingCart, 
  FaSearch, FaServer, FaWordpress, FaRocket
} from 'react-icons/fa';

// Define service type
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    title: "Web Design",
    description: "Custom, responsive website designs that reflect your brand identity and engage your audience.",
    icon: <FaPaintBrush size={28} />,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Web Development",
    description: "Full-stack web development using modern technologies to create fast, scalable, and secure websites.",
    icon: <FaLaptopCode size={28} />,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Mobile-First Design",
    description: "Responsive designs optimized for all devices, ensuring a seamless experience across desktop, tablet, and mobile.",
    icon: <FaMobileAlt size={28} />,
    color: "from-green-400 to-green-600"
  },
  {
    title: "E-Commerce Solutions",
    description: "Custom online stores with secure payment gateways, inventory management, and user-friendly interfaces.",
    icon: <FaShoppingCart size={28} />,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "SEO Optimization",
    description: "Search engine optimization to improve your website's visibility and drive organic traffic.",
    icon: <FaSearch size={28} />,
    color: "from-red-400 to-red-600"
  },
  {
    title: "API Development",
    description: "Custom API development to connect your website with third-party services and applications.",
    icon: <FaServer size={28} />,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress themes and plugins development for content-managed websites.",
    icon: <FaWordpress size={28} />,
    color: "from-cyan-400 to-cyan-600"
  },
  {
    title: "Performance Optimization",
    description: "Website speed and performance optimization for better user experience and search rankings.",
    icon: <FaRocket size={28} />,
    color: "from-pink-400 to-pink-600"
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section 
      id="services" 
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
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive web design and development services tailored to meet your specific needs and goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I offer tailored solutions to meet your specific requirements. Let's discuss your project and create something amazing together.
          </p>
          <motion.a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  service, 
  index,
  isInView
}: { 
  service: Service; 
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
      whileHover={{ y: -10 }}
    >
      <div className="p-6">
        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
          {service.icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
      </div>
      
      <div className={`h-1 w-full bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
    </motion.div>
  );
};

export default ServicesSection;
