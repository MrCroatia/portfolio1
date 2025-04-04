import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      
      // Remove the GSAP animation for the imageRef container as it's replaced by the CTA with its own framer-motion animation
      /*
      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
        "-=0.5"
      );
      */
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
          
          <div ref={imageRef} className="flex items-center justify-center lg:min-h-[500px]">
            {/* +++ ADD NEW CTA CONTENT START +++ */}
            <motion.div 
              className="bg-gradient-to-br from-pink-500 to-orange-400 p-8 md:p-12 rounded-2xl shadow-xl text-white text-center w-full max-w-md lg:max-w-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Spring Offer!
              </h2>
              <p className="text-lg md:text-xl mb-2">
                Get a stunning, custom-built website for just <span className="font-extrabold text-2xl">$200!</span>
              </p>
              <p className="text-sm opacity-90 mb-6">
                Limited time offer for the first 20 clients.
              </p>
              <motion.a 
                href="#contact"
                className="inline-block bg-white text-pink-600 font-semibold px-8 py-3 rounded-lg transition-colors hover:bg-gray-100 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Your Spot!
              </motion.a>
            </motion.div>
            {/* +++ ADD NEW CTA CONTENT END +++ */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
