'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#20131e] relative overflow-hidden py-12"
    >
      {/* Main content */}
      <div className="z-10 max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold poppins-text text-white mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl font-semibold poppins-text text-white mb-2">
            Dolores Magalí Russo, 21 Years Old
          </h3>
          <p className="text-lg poppins-text font-light text-white">
            Tandil, Buenos Aires, Argentina | Software Engineering Student & Web Developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-black border border-[#382135] rounded-lg p-6 text-center"
          >
            <h3 className="text-2xl font-semibold text-[#683c61] mb-4 border-b-2 border-[#683c61] pb-2">
              Education
            </h3>
            <p className="text-lg font-medium text-white">
              Software Engineering
            </p>
            <p className="text-md  font-light text-white">
              2022 – Present
            </p>
            <p className="text-sm font-light text-white mt-2">
              Universidad Nacional del Centro de la Provincia de Buenos Aires, Facultad de Ciencias Exactas
            </p>
            <p className="text-sm font-medium text-white mt-3">
              Intermediate Degree: Programmer Analyst
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="bg-black border border-[#382135] rounded-lg p-6 text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold  text-[#683c61] mb-4 border-b-2 border-[#683c61] pb-2">
              Experience
            </h3>
            <p className="text-md font-medium text-white">
              Frontend Developer (Freelance) 2024 – Present
            </p>
            <p className="text-sm font-light text-white mt-1">
              Developed responsive web applications using React.js, Next.js, and Tailwind CSS.
            </p>
            <p className="text-md  font-medium text-white mt-3">
              Tutor, Facultad de Ciencias Exactas 2023 – Present
            </p>
            <p className="text-sm font-light text-white mt-1">
              Guided over 50 first-year students.
            </p>
            <p className="text-md font-medium text-white mt-3">
              Teaching Assistant 2024 – Present
            </p>
            <p className="text-sm font-light text-white mt-1">
              Provided materials and assisted in designing and grading exams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-black border border-[#382135] rounded-lg p-6 text-center"
          >
            <h3 className="text-2xl font-semibold text-[#683c61] mb-4 border-b-2 border-[#683c61] pb-2">
              Extra
            </h3>
            <p className="text-md font-medium text-white">
              Languages
            </p>
            <p className="text-sm font-light text-white mt-1">
              Spanish: Native
            </p>
            <p className="text-sm font-light text-white mt-1">
              English: Upper Intermediate (B2 Certificate)
            </p>
            <p className="text-md font-medium text-white mt-3">
              Technical Skills
            </p>
            <p className="text-sm font-light text-white mt-1">
              JavaScript, TypeScript, Java, Python, SQL, React.js, Next.js, Node.js, CSS, TailwindCSS, WordPress, Figma, PostgreSQL, Prisma ORM
            </p>
            <p className="text-md font-medium text-white mt-3">
              Soft Skills
            </p>
            <p className="text-sm poppins-text font-light text-white mt-1">
              Commitment, Adaptability, Effective Communication, Leadership, Teamwork
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}