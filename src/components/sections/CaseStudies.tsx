import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import aiPoweredServicePlatformImg from '../../assests/ai-powered-customer-service.png';
import aiPoweredServicePlatformImg2 from '../../assests/ai-powered-customer-service.png';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: {
    main: string;
    secondary: string;
  };
}

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [contentRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

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
      images: {
        main: aiPoweredServicePlatformImg,
        secondary: aiPoweredServicePlatformImg2
      }
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
      images: {
        main: aiPoweredServicePlatformImg,
        secondary: aiPoweredServicePlatformImg2
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="case-studies" 
      className="py-20 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      <motion.div 
        className="container-custom"
        style={{ opacity, scale }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
          }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Case Studies
          </motion.h2>
          <motion.p 
            className="section-subtitle max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            An in-depth look at some of my most impactful projects
          </motion.p>
        </motion.div>

        <motion.div 
          ref={contentRef}
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className="flex flex-col lg:flex-row gap-12 items-center bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300 border border-neutral-100 dark:border-neutral-700"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Images - alternate left/right on desktop */}
              <motion.div 
                className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative space-y-4">
                  {/* Main Image */}
                  <motion.img 
                    src={study.images.main} 
                    alt={`${study.title} - Main View`}
                    className="rounded-xl shadow-lg relative z-10 w-full h-auto object-cover aspect-[16/9] cursor-pointer"
                    whileHover={{
                      scale: 1.08,
                      filter: "brightness(1.12) drop-shadow(0 0 24px #38bdf8)",
                      zIndex: 20
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  />
                  {/* Secondary Image */}
                  <motion.img 
                    src={study.images.secondary} 
                    alt={`${study.title} - Secondary View`}
                    className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[16/9] cursor-pointer"
                    whileHover={{
                      scale: 1.08,
                      filter: "brightness(1.12) drop-shadow(0 0 24px #38bdf8)",
                      zIndex: 20
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  />
                </div>
              </motion.div>
              
              {/* Content */}
              <motion.div 
                className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''} relative`}
                variants={itemVariants}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-xl -z-10" />
                <motion.span 
                  className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  Case Study {study.id}
                </motion.span>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  {study.title}
                </motion.h3>
                <motion.p 
                  className="text-primary-600 dark:text-primary-400 font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  Client: {study.client}
                </motion.p>
                
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <p className="text-neutral-700 dark:text-neutral-300">{study.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">The Challenge</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">{study.challenge}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">The Solution</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">{study.solution}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Results</h4>
                    <motion.ul 
                      className="space-y-2"
                      variants={containerVariants}
                    >
                      {study.results.map((result, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start group"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                        >
                          <CheckCircle className="text-success-500 mr-2 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                          <span className="text-neutral-700 dark:text-neutral-300">{result}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
                
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center mt-6 px-6 py-2 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/25"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discuss a similar project</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CaseStudies;
