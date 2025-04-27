'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    setError('');

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setError('Failed to send email. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-[#20131e]">
      <div className="max-w-5xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold text-white mb-12 text-center"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Send Me a Message
            </h3>
            <p className="text-gray-400 mb-6">
              Hi! If you’re interested in collaborating or have any questions, feel free to contact me. I’m available for new opportunities and freelance projects. I look forward to hearing from you soon!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-[#1a0b1a] border border-[#5e3255ea] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8f5283ea]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-[#1a0b1a] border border-[#5e3255ea] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8f5283ea]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-[#1a0b1a] border border-[#5e3255ea] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8f5283ea]"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  className="w-full bg-[#1a0b1a] border border-[#5e3255ea] rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8f5283ea] h-32 resize-none"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-[#5e3255ea] text-white font-semibold rounded-md p-3 transition-colors ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#8f5283ea]'}`}
                >
                  {isSending ? 'Sending...' : 'Send Email'}
                </button>
              </div>
              {success && (
                <p className="text-green-500 text-center">
                  Email sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-500 text-center">
                  {error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}