'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed top-4 w-full z-50 justify-center"
      >
        <div
          className={`flex items-center space-x-8 px-6 py-4 mt-6 border border-[#301c2d] rounded-full transition-all duration-300 ${
            isScrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-black/40'
          }`}
        >
          <span className="text-white text-lg glow-text">Dolores Russo</span>
          <div className="flex space-x-6">
            <Link href="#hero" className="text-white hover:bg-[#5e3255ea] hover:rounded-full hover:px-2 transition-all">
              Home
            </Link>
            <Link href="#services" className="text-white hover:bg-[#5e3255ea] hover:rounded-full hover:px-2 transition-all">
              About
            </Link>
            <Link href="#projects" className="text-white hover:bg-[#5e3255ea] hover:rounded-full hover:px-2 transition-all">
              Projects
            </Link>
            <Link href="#contact" className="text-white hover:bg-[#5e3255ea] hover:rounded-full hover:px-2 transition-all">
              Contact
            </Link>
          </div>
        </div>
      </motion.nav>


      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm"
      >
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-bold glow-text">Dolores Russo</span>
            </div>

            <div>
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col space-y-2 px-2 pt-2 pb-3">
              <Link
                href="#hero"
                onClick={toggleMenu}
                className="text-white hover:bg-[#5e3255ea] hover:rounded-md px-3 py-2 transition-all"
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={toggleMenu}
                className="text-white hover:bg-[#5e3255ea] hover:rounded-md px-3 py-2 transition-all"
              >
                About
              </Link>
              <Link
                href="#projects"
                onClick={toggleMenu}
                className="text-white hover:bg-[#5e3255ea] hover:rounded-md px-3 py-2 transition-all"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                onClick={toggleMenu}
                className="text-white hover:bg-[#5e3255ea] hover:rounded-md px-3 py-2 transition-all"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}