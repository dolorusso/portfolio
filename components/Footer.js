'use client';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="pt-28 pb-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          DMR - Transformamos tus ideas
        </motion.p>
        <div className="flex justify-center space-x-6">
          {[
            { icon: FaTwitter, href: '#' },
            { icon: FaLinkedin, href: '#' },
            { icon: FaInstagram, href: '#' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-white hover:text-[#5c3654ea]"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}