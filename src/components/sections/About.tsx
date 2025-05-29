import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, LightbulbIcon, Palette } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A passionate technologist with over a decade of experience building solutions that make a difference.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-500 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Ulysses Kai working" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-neutral-700 mb-4">
              I started my career as a software developer focused on backend systems, gradually expanding my expertise to 
              full-stack development. Over the past five years, I've specialized in artificial intelligence and machine 
              learning applications, combining my software engineering background with cutting-edge AI technologies.
            </p>
            <p className="text-neutral-700 mb-4">
              Having worked with startups, enterprise organizations, and as an independent consultant, I bring a diverse 
              perspective to every project. I believe in creating technology that not only functions flawlessly but also 
              delivers meaningful value to users and businesses alike.
            </p>
            <p className="text-neutral-700">
              When I'm not coding, you can find me hiking mountain trails, reading science fiction, or mentoring the 
              next generation of developers through community workshops and online platforms.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="bg-primary-50 p-6 rounded-lg" variants={itemVariants}>
            <Code className="text-primary-500 mb-4" size={36} />
            <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
            <p className="text-neutral-700">
              Delivering clean, efficient, and maintainable code that follows industry best practices.
            </p>
          </motion.div>
          
          <motion.div className="bg-secondary-50 p-6 rounded-lg" variants={itemVariants}>
            <Users className="text-secondary-500 mb-4" size={36} />
            <h3 className="text-xl font-bold mb-2">Team Leadership</h3>
            <p className="text-neutral-700">
              Experience leading technical teams and mentoring junior developers to achieve project goals.
            </p>
          </motion.div>
          
          <motion.div className="bg-accent-50 p-6 rounded-lg" variants={itemVariants}>
            <LightbulbIcon className="text-accent-500 mb-4" size={36} />
            <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
            <p className="text-neutral-700">
              A strategic approach to tackling complex challenges with innovative solutions.
            </p>
          </motion.div>
          
          <motion.div className="bg-neutral-100 p-6 rounded-lg" variants={itemVariants}>
            <Palette className="text-neutral-700 mb-4" size={36} />
            <h3 className="text-xl font-bold mb-2">Creative Thinking</h3>
            <p className="text-neutral-700">
              Bringing creativity to technical problems for unique and effective solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;