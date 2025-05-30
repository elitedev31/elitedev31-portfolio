import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Senior AI Engineer',
      organization: 'TechInnovate Solutions',
      period: '2021 - Present',
      description: 'Leading the development of AI-powered applications for enterprise clients, focusing on natural language processing and predictive analytics.',
      achievements: [
        'Developed a conversational AI platform that reduced customer service costs by 35%',
        'Led a team of 5 engineers in delivering an end-to-end machine learning pipeline',
        'Implemented MLOps practices that reduced model deployment time by 60%'
      ]
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Digital Frontiers',
      period: '2018 - 2021',
      description: 'Designed and implemented scalable web applications for clients across various industries using modern JavaScript frameworks and cloud technologies.',
      achievements: [
        'Architected a microservices-based platform that handled 1M+ daily requests',
        'Reduced infrastructure costs by 40% through cloud optimization',
        'Mentored junior developers and established coding standards'
      ]
    },
    {
      id: 3,
      type: 'work',
      title: 'Software Engineer',
      organization: 'DataSphere Inc.',
      period: '2016 - 2018',
      description: 'Worked on backend systems and data processing pipelines for a data analytics platform.',
      achievements: [
        'Improved data processing speed by 75% through algorithm optimization',
        'Developed RESTful APIs used by 20+ client applications',
        'Implemented automated testing that increased code coverage to 90%'
      ]
    },
    {
      id: 4,
      type: 'education',
      title: 'M.S. in Computer Science',
      organization: 'Stanford University',
      period: '2014 - 2016',
      description: 'Specialized in Artificial Intelligence and Machine Learning with research focus on natural language processing.',
    },
    {
      id: 5,
      type: 'education',
      title: 'B.S. in Computer Science',
      organization: 'University of California, Berkeley',
      period: '2010 - 2014',
      description: 'Graduated with honors. Minor in Mathematics.',
    },
    {
      id: 6,
      type: 'certification',
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      period: '2022',
      description: 'Professional certification for designing distributed systems on AWS.',
    },
    {
      id: 7,
      type: 'certification',
      title: 'TensorFlow Developer Certificate',
      organization: 'Google',
      period: '2021',
      description: 'Certification in building and deploying machine learning models using TensorFlow.',
    }
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase size={20} />;
      case 'education':
        return <GraduationCap size={20} />;
      case 'certification':
        return <Award size={20} />;
      default:
        return null;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-primary-500';
      case 'education':
        return 'bg-secondary-500';
      case 'certification':
        return 'bg-accent-500';
      default:
        return 'bg-neutral-500';
    }
  };

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A timeline of my professional journey and educational background
          </p>
          <a 
            href="#" 
            className="btn-outline inline-flex items-center mt-6"
          >
            <Download size={18} className="mr-2" />
            <span>Download Full Resume</span>
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6">
              <div className="flex items-center">
                <span className={`w-4 h-4 rounded-full bg-primary-500 mr-2 shadow-sm`}></span>
                <span className="text-neutral-700 dark:text-neutral-300">Work Experience</span>
              </div>
              <div className="flex items-center">
                <span className={`w-4 h-4 rounded-full bg-secondary-500 mr-2 shadow-sm`}></span>
                <span className="text-neutral-700 dark:text-neutral-300">Education</span>
              </div>
              <div className="flex items-center">
                <span className={`w-4 h-4 rounded-full bg-accent-500 mr-2 shadow-sm`}></span>
                <span className="text-neutral-700 dark:text-neutral-300">Certification</span>
              </div>
            </div>
          </div>
          
          <motion.div 
            ref={ref}
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
            
            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`relative flex flex-col md:flex-row md:justify-between mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className={`bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200`}>
                    <div className="flex items-center mb-2 justify-start">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full text-white ${getColorForType(item.type)} mr-2 shadow-sm`}>
                        {item.type === 'work' ? 'Work' : item.type === 'education' ? 'Education' : 'Certification'}
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 text-sm">{item.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{item.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 font-medium mb-3">{item.organization}</p>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-3">{item.description}</p>
                    
                    {item.achievements && (
                      <ul className={`space-y-1 text-sm text-neutral-700 dark:text-neutral-300 ${index % 2 === 0 ? 'pl-5' : 'pl-5 md:pl-0 md:pr-5'}`}>
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full ${getColorForType(item.type)} text-white flex items-center justify-center shadow-md`}>
                    {getIconForType(item.type)}
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;