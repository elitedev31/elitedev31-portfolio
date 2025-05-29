import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Info } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Content Generator',
      description: 'A web application that uses GPT-4 to generate marketing content based on user prompts and brand guidelines.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'ai',
      technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A scalable e-commerce solution with product management, cart functionality, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'web',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Stripe API', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Predictive Analytics Dashboard',
      description: 'A data visualization platform that uses machine learning to forecast business metrics and display insights.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'data',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Mobile Fitness Tracker',
      description: 'A cross-platform fitness app that tracks workouts, nutrition, and provides personalized recommendations.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Health APIs', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Blockchain Supply Chain',
      description: 'A decentralized application for tracking products through the supply chain using blockchain technology.',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'blockchain',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Real-time Collaboration Tool',
      description: 'A platform for teams to collaborate on documents and projects in real-time with version control.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'web',
      technologies: ['Vue.js', 'Socket.io', 'Express', 'MongoDB', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Computer Vision Object Detector',
      description: 'An application that identifies and classifies objects in images and video streams using computer vision.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'ai',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'AWS Lambda'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 8,
      title: 'Smart Home Control System',
      description: 'An IoT platform that connects and controls smart home devices with voice commands and automation rules.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'iot',
      technologies: ['Node.js', 'MQTT', 'React', 'MongoDB', 'Raspberry Pi'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'data', name: 'Data Science' },
    { id: 'iot', name: 'IoT' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A showcase of my recent projects and the problems they solve
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="card group h-full flex flex-col"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className="bg-white text-primary-500 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="bg-white text-primary-500 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    <a 
                      href={`#project-${project.id}`} 
                      className="bg-white text-primary-500 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <Info size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-700 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-700">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;