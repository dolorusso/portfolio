'use client';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const projectsTop = [
  { title: 'Web for an Italian restaurant.', desc: 'Next.js, TypeScript, TailwindCSS', img: '/assets/restaurante.png', github: 'https://github.com/doloresrusso/proyecto1' },
  { title: 'Design of an IOS app for home services.', desc: 'Figma, UX/UI Design', img: '/assets/app.png', link: 'https://www.figma.com/proto/VTCmz5uXVpE13Oqidot6bp/Prototipado?page-id=96%3A1853&node-id=124-3043&p=f&viewport=873%2C364%2C0.19&t=rG8sLexSz7UuBE9I-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A3043' },
  { title: 'Personal Blog.', desc: 'Next.js, Supabase', img: '/assets/blog.png', github: 'https://github.com/doloresrusso/proyecto3' },
  { title: 'Fun facts about cats.', desc: 'React.js, APIs: catfact.ninja & The Cat API', img: '/assets/gatito.png', github: 'https://github.com/dolorusso/react-APIs-gatitos' },
];

const projectsBottom = [
  { title: 'TO-DO List.', desc: 'Next.js, PostgreSQL, Prisma ORM', img: '/assets/todolist.png', github: 'https://github.com/dolorusso/todo-list' },
  { title: 'Pokedex App.', desc: 'Next.js, API: PokeAPI', img: '/assets/pokedex.png', github: 'https://github.com/dolorusso/prueba-tecnica-pokedex' },
  { title: 'Practical assignment for the Data Science course.', desc: 'Python, Jupyter Lab, EDA, Logistic Regression', img: '/assets/vino.png', github: 'https://github.com/dolorusso/ciencia-de-datos_calidad-del-vino' },
  { title: 'Portfolio', desc: 'Next.js, EmailJS', img: '/assets/portfolio.png', github: 'https://github.com/dolorusso/portfolio' }, 
];


const Carousel = ({ projects, direction, carouselId }) => {
  const controls = useAnimation();
  const carouselRef = useRef(null);

 
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  useEffect(() => {
    const animateCarousel = async () => {
      const totalWidth = carouselRef.current?.scrollWidth / 2; 
      if (!totalWidth) return;


      const startX = direction === 'left' ? 0 : -totalWidth;
      const endX = direction === 'left' ? -totalWidth : 0;

      controls.start({
        x: [startX, endX],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 50, 
            ease: 'linear',
          },
        },
      });
    };

    animateCarousel();
  }, [controls, direction]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    const totalWidth = carouselRef.current?.scrollWidth / 2;
    if (!totalWidth) return;

    const startX = direction === 'left' ? 0 : -totalWidth;
    const endX = direction === 'left' ? -totalWidth : 0;

    controls.start({
      x: [startX, endX],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 50,
          ease: 'linear',
        },
      },
    });
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={carouselRef}
        animate={controls}
        className="flex space-x-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duplicatedProjects.map((project, index) => (
          <div key={`${carouselId}-${index}`} className="flex-shrink-0 w-80">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-md cursor-pointer group"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
              )}

              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <div className="text-center pointer-events-none">
                    <p className="text-lg font-semibold text-white mb-2">{project.title}</p>
                    <p className="text-gray-400">{project.desc}</p>
                  </div>
                </Link>
              ) : (
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-white mb-2">{project.title}</p>
                    <p className="text-gray-400">{project.desc}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-[#20131e] to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold text-white mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="mb-12">
          <Carousel projects={projectsTop} direction="left" carouselId="top" />
        </div>

        <div className="mb-12">
          <Carousel projects={projectsBottom} direction="right" carouselId="bottom" />
        </div>
      </div>
    </section>
  );
}