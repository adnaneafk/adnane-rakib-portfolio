import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-light-bg/50 dark:bg-dark-bg/50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">Get In Touch</motion.h2>
        <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg bg-light-card dark:bg-dark-card">
          {}
          <motion.form
            action="https://formspree.io/f/xkgvnjnd"
            method="POST"
            variants={fadeInUp}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 rounded bg-gray-200 dark:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 rounded bg-gray-200 dark:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 rounded bg-gray-200 dark:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-light-primary text-white dark:bg-dark-accent dark:text-white font-bold rounded hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
        <motion.div variants={fadeInUp} className="text-center mt-8">
            <p>Khouribga, Morocco</p>
            <p>adnanerakib20@gmail.com</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;