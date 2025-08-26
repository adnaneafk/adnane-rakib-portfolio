import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHover } from '../lib/animations';

const About = () => {
  // Cards details
  const cards = [
    { title: "Figuring Stuff Out", description: "I'm good at diagnosing problems and finding a way to fix them, even if it takes a few tries." },
    { title: "Works With Others", description: "I enjoy working on projects with other people to build something cool together." },
    { title: "Random Ideas", description: "Sometimes I disappear for a week and come back with a new, random project I built." },
    { title: "The Tech Stuff", description: "I'm comfortable with the tools and code needed to get things done." }
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-4">About Me</motion.h2>

        {/* The empty {} that was here has been removed */}
        <motion.p variants={fadeInUp} className="max-w-3xl mx-auto text-center text-lg mb-12">
          Hey, I'm a Mechatronics student who probably spends more time building (and breaking) things than I should. That's how I got into coding with C and Arduino, and then fell into web stuff like JavaScript and React. I'm still learning a lot. When my brain is fried from all that, I'm usually playing Valorant, CS2, or building weird things in Minecraft.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-light-card dark:bg-dark-card border border-transparent hover:border-light-accent dark:hover:border-dark-accent transition-all"
              variants={fadeInUp}
              whileHover={cardHover}
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;