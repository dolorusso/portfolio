'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Creemos juntos
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto space-y-6"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-4 bg-black border border-gray-800 rounded-md text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-black border border-gray-800 rounded-md text-white "
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-4 bg-black border border-gray-800 rounded-md text-white "
          />
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-b from-[#20131e] to-black text-white font-bold border border-[#382235] rounded-md   hover:scale-110 transition-transform"
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
}