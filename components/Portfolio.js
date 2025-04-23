'use client';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const projects = [
  { title: 'Proyecto 1', desc: 'Web para restaurante italiano.', img: '/assets/restaurante.png', link: 'https://web-restaurante-pv7v.vercel.app' },
  { title: 'Proyecto 2', desc: 'Diseño de app de servicios para la casa.', img: '/assets/app.png', link: 'https://www.figma.com/proto/VTCmz5uXVpE13Oqidot6bp/Prototipado?page-id=96%3A1853&node-id=124-3043&p=f&viewport=873%2C364%2C0.19&t=rG8sLexSz7UuBE9I-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A3043' },
  { title: 'Proyecto 3', desc: 'Blog personal.', img: '/assets/blog.png', link: 'https://blog-personal-w75w.vercel.app' },
];

// Duplicamos los proyectos varias veces para asegurar un desplazamiento continuo
const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

export default function Projects() {
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const animateCarousel = async () => {
      const totalWidth = carouselRef.current?.scrollWidth / 2; // Mitad del ancho total porque duplicamos los proyectos

      // Animación infinita
      controls.start({
        x: -totalWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 50, // Duración para un ciclo completo (ajusta para velocidad)
            ease: 'linear',
          },
        },
      });
    };

    animateCarousel();
  }, [controls]);

  return (
    <section id="projects" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Proyectos
        </motion.h2>
        <div className="overflow-hidden">
          <motion.div
            ref={carouselRef}
            animate={controls}
            className="flex space-x-8"
          >
            {duplicatedProjects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group flex-shrink-0 w-80" // w-80 = 320px por tarjeta
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-md cursor-pointer"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center pointer-events-none">
                      <p className="text-gray-400">{project.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}