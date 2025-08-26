import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHover } from '../lib/animations';

const Projects = () => {
  //Add your own projects here
  const projectData = [
    {
      title: "Portfolio Website",
      description: "This personal portfolio, built with React, TypeScript, and TailwindCSS, showcasing my skills and projects.",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce site with user authentication, product catalog, and a shopping cart.",
    },
    {
      title: "Automation Script",
      description: "A Python script to automate data entry tasks, saving hours of manual work.",
    },
        {
      title: "Automated Robotic Arm",
      description: "3D modeling (CATIA V5), assembly, and mechanical optimization of a mini motor for a robotic arm.",
    },
    {
      title: "Smart Health Helmet",
      description: "Converted a classic helmet into a smart device with integrated sensors for biometric tracking.",
    },
    {
      title: "Arduino Motion Control",
      description: "Programmed Arduino boards to integrate sensors and control system movements with precision.",
    },
    {
      title: "Hydraulic System Simulation",
      description: "Designed and simulated industrial hydraulic systems using schematic tools in Automation Studio.",
    },
    {
      title: "Power Electronics Analysis",
      description: "Analyzed power electronics circuits for electric motors using PSIM simulation software.",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light-bg/50 dark:bg-dark-bg/50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">Projects & Experience</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-light-card dark:bg-dark-card"
              variants={fadeInUp}
              whileHover={cardHover}
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;