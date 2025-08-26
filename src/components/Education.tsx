import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

const Education = () => {
  const educationHistory = [
    {
      degree: "Bachelor's Degree in Mechatronics",
      institution: "Faculty of Science and Technology (FSTS), Settat",
      period: "2024 - Present"
    },
    {
      degree: "DEUST MIP (Mathematics, Computer Science, Physics)",
      institution: "Faculty of Science and Technology (FSTS), Settat",
      period: "2023 - 2024"
    },
    {
      degree: "Scientific Baccalaureate",
      institution: "Ibn Abdoune High School, Khouribga",
      period: "2019 - 2020"
    }
  ];

  return (
    <section id="education" className="py-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">Education</motion.h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>
          {educationHistory.map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="mb-8 flex justify-between items-center w-full">
              <motion.div
                className={`w-5/12 p-4 rounded-lg shadow-lg bg-light-card dark:bg-dark-card transition-all duration-200 ${index % 2 === 0 ? 'order-1' : 'order-3 text-right'}`}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }} 
              >
                <h3 className="font-bold text-lg">{item.degree}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.institution}</p>
                <p className="text-sm font-light">{item.period}</p>
              </motion.div>
              <div className="order-2 w-10 flex justify-center">
                <div className="z-10 w-4 h-4 rounded-full bg-light-primary dark:bg-dark-accent"></div>
              </div>
              <div className="w-5/12 order-1"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;