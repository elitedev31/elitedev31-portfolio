import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Globe, BarChart, BrainCircuit, Cpu, Sparkles } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  name: string;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories: SkillCategory[] = [
    {
      icon: <Code size={24} />,
      name: 'Languages',
      skills: ['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'SQL'],
      color: 'bg-primary-500'
    },
    {
      icon: <Globe size={24} />,
      name: 'Frontend',
      skills: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'],
      color: 'bg-secondary-500'
    },
    {
      icon: <Server size={24} />,
      name: 'Backend',
      skills: ['Node.js', 'Express', 'Django', 'Spring Boot', 'ASP.NET Core', 'GraphQL', 'REST APIs'],
      color: 'bg-accent-500'
    },
    {
      icon: <Database size={24} />,
      name: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Elasticsearch', 'DynamoDB'],
      color: 'bg-success-500'
    },
    {
      icon: <Cpu size={24} />,
      name: 'DevOps & Cloud',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      color: 'bg-warning-500'
    },
    {
      icon: <BrainCircuit size={24} />,
      name: 'AI & ML',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain', 'NLP', 'Computer Vision', 'LLM Applications'],
      color: 'bg-error-500'
    },
    {
      icon: <BarChart size={24} />,
      name: 'Testing & Tools',
      skills: ['Jest', 'Cypress', 'Selenium', 'Git', 'GitHub Actions', 'Agile/Scrum', 'Jira'],
      color: 'bg-neutral-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 
                      dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 
                      dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10
                      animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-transparent to-primary-500/5
                      dark:from-accent-400/10 dark:via-transparent dark:to-primary-400/10
                      animate-gradient-y" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
                      bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-custom relative">
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Sparkle effects */}
          <motion.div
            className="absolute -top-4 -right-4 text-accent-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={24} className="animate-pulse" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4 relative inline-block group">
            <span className="relative z-10">Skills & Technologies</span>
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 
                        bg-[length:200%_100%] animate-gradient-x rounded-full opacity-0 group-hover:opacity-100
                        transition-all duration-500"
            />
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto relative group">
            <span className="relative inline-block">
              A comprehensive toolkit developed over years of professional experience
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0
                          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              />
            </span>
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Card container with enhanced effects */}
              <div className="relative h-full">
                {/* Background effects */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 
                              rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-white/20 to-primary-500/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Main card content */}
                <div className="relative h-full p-6 rounded-2xl bg-white/80 dark:bg-neutral-800/80 
                              backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50
                              shadow-soft-xl group-hover:shadow-soft-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className={`${category.color} text-white p-3 rounded-lg mr-3 relative overflow-hidden group-hover:scale-110 
                                transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Icon hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      {category.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold bg-gradient-to-r from-neutral-900 via-primary-600 to-neutral-900 
                               dark:from-white dark:via-primary-400 dark:to-white 
                               bg-[length:200%_100%] bg-clip-text text-transparent
                               animate-gradient-x group-hover:animate-none
                               transition-all duration-500"
                    >
                      {category.name}
                    </motion.h3>
                  </div>

                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center group/item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 group-hover/item:scale-150 
                                   transition-transform duration-300"
                          whileHover={{ scale: 2 }}
                        />
                        <span className="text-neutral-700 dark:text-neutral-300 
                                       transform transition-transform duration-300 
                                       group-hover/item:translate-x-1">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;