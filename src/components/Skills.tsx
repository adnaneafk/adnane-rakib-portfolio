import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
  <motion.div variants={fadeInUp} className="p-6 rounded-lg bg-light-card dark:bg-dark-card shadow-md">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <motion.span
          key={skill}
          className="bg-light-primary/10 dark:bg-dark-primary/30 text-light-primary dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium cursor-pointer"
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skills = {
    programming: ["Python", "HTML", "CSS", "JavaScript", "SQL", "C", "C++", "Java", "TypeScript"],
    iot: ["Arduino", "ESP32", "Raspberry Pi", "Node-RED", "InfluxDB"],
   
    software: ["VS Code", "IntelliJ IDEA", "PyCharm", "Arduino IDE", "MATLAB", "CATIA V5", "Automation Studio", "ISIS Proteus", "PSIM", "Zelio Soft", "Rokisim", "Microsoft Office Suite", "Git", "GitHub"],
    softSkills: ["Problem Solving", "Teamwork", "Creativity", "Communication"],
    languages: ["Arabic (Native)", "French (Fluent)", "English (Fluent)"],
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">Skills & Tools</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SkillCategory title="Programming & Web" skills={skills.programming} />
          <SkillCategory title="IoT & Embedded Systems" skills={skills.iot} />
          <SkillCategory title="Software & Tools" skills={skills.software} />
          <SkillCategory title="Soft Skills" skills={skills.softSkills} />
          <SkillCategory title="Languages" skills={skills.languages} />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;