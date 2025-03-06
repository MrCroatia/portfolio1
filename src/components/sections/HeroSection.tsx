import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current && imageRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        textRef.current.querySelectorAll('.gsap-text-reveal'), 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
      
      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
        "-=0.5"
      );
    }
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Web Design Studio
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="gsap-text-reveal block">Crafting Digital</span>
              <span className="gsap-text-reveal block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                Experiences
              </span>
            </h1>
            
            <p className="gsap-text-reveal text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Fragment42 transforms ideas into exceptional digital experiences with cutting-edge web design and development.
            </p>
            
            <div className="gsap-text-reveal flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium transition-colors hover:bg-purple-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
              
              <motion.a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </div>
          
          <div ref={imageRef} className="relative">
            {/* Main image container - You can place your personal photo here */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20 mix-blend-overlay z-10 rounded-2xl"></div>
              
{/* Replace this with your personal photo or keep the placeholder */}
{/* Uncomment and modify this to use your personal photo */}
{ 
<Image
  src="/hero.png"  
  alt="Examples of work"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
  priority
/>
}

              
              {/* Placeholder colored background if no image is available */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40 z-0"></div>
            </div>
            
            {/* Floating elements - These create the animated shapes around your image */}
            <motion.div 
              className="absolute -top-6 -left-6 w-20 h-20 bg-purple-500 rounded-2xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div 
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-pink-500 rounded-full"
              animate={{ 
                y: [0, 20, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Additional floating elements for more visual interest */}
            <motion.div 
              className="absolute top-1/2 -right-4 w-12 h-12 bg-purple-400 rounded-lg opacity-70"
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, -15, 0]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div 
              className="absolute bottom-1/4 -left-5 w-10 h-10 bg-pink-400 rounded-full opacity-70"
              animate={{ 
                x: [0, 15, 0],
                y: [0, 10, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
