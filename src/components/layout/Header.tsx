import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Fragment42
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 p-2"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-6 flex flex-col items-end justify-center gap-1.5">
              <span className={`block h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-out ${mobileMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 ease-out ${mobileMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</MobileNavLink>
          <MobileNavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</MobileNavLink>
          <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
        </div>
      </motion.nav>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
      <motion.span
        whileHover={{ y: -2 }}
        className="relative font-medium"
      >
        {children}
        <motion.span
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400"
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </Link>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <Link 
      href={href}
      className="block py-2 text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
