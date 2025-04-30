'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#20131e] to-black relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between z-10 max-w-5xl mx-auto px-4 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 flex justify-center"
        >
          <img
            src="/assets/memoji.png"
            alt="Dolores Portfolio Image"
            className="w-[150px] md:w-[220px] max-h-[320px] object-contain rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="text-center md:text-left max-w-md">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-6xl font-semibold text-white mb-4 md:mb-6"
          >
            Hi I’m Dolores,
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base md:text-xl font-light text-white mb-6 md:mb-8"
          >
            a Software Engineering student and a passionate web developer excited to welcome you to my portfolio! With a strong foundation in technology, I’ve embarked on a journey to build meaningful digital experiences. Here, you’ll find a collection of my projects that highlight my dedication to innovation and problem-solving.
          </motion.p>
        </div>
      </div>
    </section>
  );
}