'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 w-full z-50 flex justify-center"
    >
      <div
        className={`flex items-center space-x-8 px-6 py-4 mt-6 border border-[#301c2d] rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-black/40'
        }`}
      >
        <span className="text-white text-lg glow-text">Dolores Russo</span>

        <div className="flex space-x-6">
          <Link href="#hero" className="text-white  hover:bg-[#5e3255ea] hover:rounded-full hover: px-2 transition-all">
            Home
          </Link>
          <Link href="#services" className="text-white  hover:bg-[#5e3255ea] hover:rounded-full hover: px-2 transition-all">
            About
          </Link>
          <Link href="#projects" className="text-white  hover:bg-[#5e3255ea] hover:rounded-full hover: px-2 transition-all">
            Projects
          </Link>
          <Link href="#contact" className="text-white hover:bg-[#5e3255ea] hover:rounded-full hover: px-2 transition-all">
            Contact
          </Link>
        </div>
      {/*  
        <a
          href="/assets/cv-dolores_russo.pdf"
          download
          className="text-white bg-[#5e3255ea] hover:bg-[#97588bea] px-4 py-1 rounded-full transition-all flex items-center space-x-1"
        >
          <span>Get CV</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"></path>
          </svg>
        </a>
      */}
      </div>
    </motion.nav>
  );
}