import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Lightbulb, 
  Search, 
  PenTool, 
  Code, 
  BarChart, 
  Repeat
} from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const processSteps: ProcessStep[] = [
    {
      icon: <Search size={24} />,
      title: 'Discovery',
      description: 'I start by understanding your business goals, target audience, and project requirements through in-depth research and stakeholder interviews.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Strategy',
      description: 'Based on research findings, I develop a comprehensive strategy that outlines the technical approach, timeline, and success metrics.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Design',
      description: 'I create detailed technical designs and architectures that serve as blueprints for implementation, ensuring alignment with project goals.'
    },
    {
      icon: <Code size={24} />,
      title: 'Development',
      description: "Using agile methodologies, I build your solution iteratively, with regular demos and feedback sessions to ensure we're on the right track."
    },
    {
      icon: <BarChart size={24} />,
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization ensure your solution is robust, secure, and performs efficiently at scale.'
    },
    {
      icon: <Repeat size={24} />,
      title: 'Deployment & Iteration',
      description: 'After successful deployment, I provide ongoing support and iterative improvements based on real-world usage and feedback.'
    }
  ];

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
    <section id="process" className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Process</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A systematic approach to delivering exceptional results
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 relative overflow-hidden"
                variants={itemVariants}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-50 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-500 rounded-lg mb-4">
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium text-primary-500">Step {index + 1}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{step.title}</h3>
                  <p className="text-neutral-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Communication & Collaboration</h3>
                <p className="mb-4">
                  Throughout the entire process, I maintain clear and consistent communication. I believe in transparency
                  and keeping you informed at every stage of the project.
                </p>
                <p>
                  For contract projects, I provide regular updates, realistic timelines, and am adaptable to your preferred
                  communication channels and project management tools.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <p className="text-4xl font-bold">94%</p>
                    <p className="text-sm">On-time delivery</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <p className="text-4xl font-bold">98%</p>
                    <p className="text-sm">Client satisfaction</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <p className="text-4xl font-bold">12+</p>
                    <p className="text-sm">Years experience</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <p className="text-4xl font-bold">50+</p>
                    <p className="text-sm">Projects completed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;