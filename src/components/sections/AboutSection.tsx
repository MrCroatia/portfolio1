import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaGlobeEurope } from 'react-icons/fa';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section 
      id="about" 
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
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate web designer and developer with over 4 years of experience creating beautiful, functional websites and applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/mebg.png"
                alt="Portrait of web designer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Experience badge */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-full shadow-lg p-4 flex items-center justify-center w-24 h-24"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
            >
              <div className="text-center">
                <span className="block text-2xl font-bold text-purple-600">4+</span>
                <span className="block text-xs text-gray-600 dark:text-gray-300">Years Exp.</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Web Designer & Developer from Zagreb, Croatia
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate web designer and developer with a keen eye for detail and a commitment to delivering exceptional digital experiences. With over 4 years of experience in the industry, I've worked with clients worldwide to bring their visions to life.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              Recently, I completed a front-end design course at Algebra University, enhancing my skills in modern web technologies and design principles. My approach combines creativity with technical expertise to create websites that not only look stunning but also perform flawlessly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <AboutCard 
                icon={<FaGraduationCap className="text-purple-600" size={24} />}
                title="Education"
                description="Front-end Design, Algebra University"
              />
              
              <AboutCard 
                icon={<FaBriefcase className="text-purple-600" size={24} />}
                title="Experience"
                description="4+ years in web design & development"
              />
              
              <AboutCard 
                icon={<FaLaptopCode className="text-purple-600" size={24} />}
                title="Projects"
                description="50+ websites and applications"
              />
              
              <AboutCard 
                icon={<FaGlobeEurope className="text-purple-600" size={24} />}
                title="Clients"
                description="Worldwide client base"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-start gap-4"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
