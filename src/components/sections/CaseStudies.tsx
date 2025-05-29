import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Platform',
      client: 'Enterprise SaaS Company',
      description: 'Developed an intelligent customer service platform that uses natural language processing to automate support requests and improve agent efficiency.',
      challenge: 'The client was struggling with scaling their customer support team to handle a growing user base, resulting in longer response times and decreasing customer satisfaction scores.',
      solution: 'I designed and implemented an AI-powered platform that could understand customer queries, automatically respond to common questions, and provide agents with relevant information and suggested responses for complex issues.',
      results: [
        '65% reduction in average response time',
        '40% increase in customer satisfaction scores',
        '30% cost savings in customer support operations',
        'Successfully handling 2,000+ daily interactions'
      ],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 2,
      title: 'Real-time Data Analytics Dashboard',
      client: 'Financial Services Provider',
      description: 'Created a comprehensive analytics platform that processes millions of transactions in real-time to provide actionable business insights.',
      challenge: 'The client needed to analyze vast amounts of financial transaction data in real-time to detect patterns, identify opportunities, and respond to market changes quickly.',
      solution: 'I developed a scalable data processing pipeline and interactive dashboard that ingests, processes, and visualizes transaction data in real-time, with customizable alerts and reporting features.',
      results: [
        'Processing of 3+ million transactions daily in real-time',
        'Identified $2.1M in potential revenue opportunities',
        '90% reduction in time to generate business reports',
        'Improved fraud detection by 45%'
      ],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            An in-depth look at some of my most impactful projects
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className="flex flex-col lg:flex-row gap-12 items-center"
              variants={itemVariants}
            >
              {/* Image - alternate left/right on desktop */}
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                  {index % 2 === 0 && (
                    <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-500 rounded-lg"></div>
                  )}
                  {index % 2 === 1 && (
                    <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary-500 rounded-lg"></div>
                  )}
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="rounded-lg shadow-lg relative z-10 w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-sm font-medium text-primary-500 block mb-2">Case Study {study.id}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{study.title}</h3>
                <p className="text-neutral-600 font-medium mb-4">Client: {study.client}</p>
                <p className="text-neutral-700 mb-6">{study.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">The Challenge</h4>
                  <p className="text-neutral-700">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">The Solution</h4>
                  <p className="text-neutral-700">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-2">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-success-500 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="#contact" className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors">
                  <span>Discuss a similar project</span>
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;