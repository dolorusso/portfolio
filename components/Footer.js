'use client';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full pt-4 pb-4 bg-transparent backdrop-blur-md text-white z-10">
      <div className="w-full flex justify-end pr-32">
        <div className="flex justify-end space-x-6">
          {[{ icon: FaLinkedin, href: 'https://www.linkedin.com/in/dolores-russo-390b5127a/' },
            { icon: FaTwitter, href: 'https://x.com/dolorusso1' },
            { icon: FaInstagram, href: 'https://www.instagram.com/dolo_russo/' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-white hover:text-[#8f5283ea]"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}