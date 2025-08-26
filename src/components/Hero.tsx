import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  x: string;
}

const Hero = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLinks | null>(null);

  useEffect(() => {
    fetch('/social-links.json')
      .then((res) => res.json())
      .then((data) => setSocialLinks(data));
  }, []);

 
  const introText = "Hey, I’m Adnane Rakib";

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center"
      >
        <motion.img
          src="/profile.jpg"
          alt="Adnane Rakib"
          className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg border-4 border-white dark:border-dark-card"
          variants={fadeInUp}
        />
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl"
          variants={fadeInUp}
        >
          {introText}
        </motion.h1>

        {socialLinks && (
          <motion.div className="flex space-x-6 mt-6" variants={fadeInUp}>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-125"><FaGithub /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-125"><FaLinkedin /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-125"><FaInstagram /></a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-light-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-125"><FaTwitter /></a>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;