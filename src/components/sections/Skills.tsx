import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Globe, BarChart, BrainCircuit, Cpu } from 'lucide-react';

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A comprehensive toolkit developed over years of professional experience
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
              className="card p-6 h-full"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className={`${category.color} text-white p-3 rounded-lg mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;