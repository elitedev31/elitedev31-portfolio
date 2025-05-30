import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, LightbulbIcon, Palette, Sparkles, ArrowRight } from 'lucide-react';
import journeyImage from '../../assests/journey.png';
import { SectionProps } from '../../types/components';

const About: React.FC<SectionProps> = ({ className = '' }) => {
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
    <section id="about" className={`relative py-24 overflow-hidden ${className}`}>
      {/* Enhanced animated background gradients */}
      <div className="absolute inset-0">
        {/* Base gradient with more depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/40 via-white to-secondary-100/40 
                      dark:from-primary-900/20 dark:via-neutral-900 dark:to-secondary-900/20" />
        
        {/* Multiple animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 
                      dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10
                      animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-transparent to-primary-500/5
                      dark:from-accent-400/10 dark:via-transparent dark:to-primary-400/10
                      animate-gradient-y" />
        
        {/* Enhanced radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.15),transparent_50%)]
                      dark:bg-[radial-gradient(circle_at_50%_120%,rgba(0,180,216,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,215,0,0.1),transparent_50%)]
                      dark:bg-[radial-gradient(circle_at_0%_0%,rgba(255,215,0,0.15),transparent_50%)]" />
        
        {/* Animated blur effects with more layers */}
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/40 dark:bg-neutral-900/40" />
        <div className="absolute inset-0 backdrop-blur-[50px] bg-gradient-to-br from-primary-500/5 to-secondary-500/5
                      dark:from-primary-400/10 dark:to-secondary-400/10" />
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
                      bg-accent-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-500" />
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
                      bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="inline-block relative"
          >
            {/* Sparkle effects */}
            <motion.div
              className="absolute -top-4 -right-4 text-accent-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={24} className="animate-pulse" />
            </motion.div>
            
            <span className="badge mb-4 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 
                           dark:from-primary-500/20 dark:via-secondary-500/20 dark:to-accent-500/20
                           border border-primary-500/20 dark:border-primary-400/20
                           shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300
                           group relative overflow-hidden">
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-white/20 to-primary-500/0 
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent drop-shadow-lg mb-6">
              Crafting Digital Experiences
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed
                     relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="relative inline-block">
              A passionate technologist with over a decade of experience building solutions that make a difference.
              Combining technical expertise with creative problem-solving to deliver exceptional results.
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0
                          scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              />
            </span>
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <motion.div 
            className="md:w-1/2 relative group"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Enhanced decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 
                            rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-gradient-xy" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 
                            rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Image container with enhanced effects */}
              <div className="relative rounded-2xl overflow-hidden transform transition-all duration-500 
                            group-hover:scale-[1.02] group-hover:shadow-soft-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 mix-blend-overlay" />
                <img 
                  src={journeyImage}
                  alt="Ulysses Kai's journey" 
                  className="w-full h-auto rounded-2xl shadow-soft-xl relative z-0
                           transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20
                              flex items-end justify-center p-6">
                  <span className="text-white font-medium flex items-center gap-2 transform translate-y-4 
                                 group-hover:translate-y-0 transition-transform duration-500">
                    View Journey <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <div className="glass-effect p-8 rounded-2xl bg-white/70 dark:bg-neutral-800/70 
                          backdrop-blur-md border border-white/20 dark:border-neutral-700/20
                          shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300
                          group relative overflow-hidden">
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-white/20 to-primary-500/0 
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                My Journey
              </h3>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 relative">
                <p className="leading-relaxed transform transition-transform duration-300 group-hover:translate-x-1">
                  I started my career as a software developer focused on backend systems, gradually expanding my expertise to 
                  full-stack development. Over the past five years, I've specialized in artificial intelligence and machine 
                  learning applications, combining my software engineering background with cutting-edge AI technologies.
                </p>
                <p className="leading-relaxed transform transition-transform duration-300 group-hover:translate-x-1 delay-75">
                  Having worked with startups, enterprise organizations, and as an independent consultant, I bring a diverse 
                  perspective to every project. I believe in creating technology that not only functions flawlessly but also 
                  delivers meaningful value to users and businesses alike.
                </p>
                <p className="leading-relaxed transform transition-transform duration-300 group-hover:translate-x-1 delay-150">
                  When I'm not coding, you can find me hiking mountain trails, reading science fiction, or mentoring the 
                  next generation of developers through community workshops and online platforms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            {
              icon: Code,
              title: "Technical Excellence",
              description: "Delivering clean, efficient, and maintainable code that follows industry best practices.",
              color: "primary"
            },
            {
              icon: Users,
              title: "Team Leadership",
              description: "Experience leading technical teams and mentoring junior developers to achieve project goals.",
              color: "secondary"
            },
            {
              icon: LightbulbIcon,
              title: "Problem Solving",
              description: "A strategic approach to tackling complex challenges with innovative solutions.",
              color: "accent"
            },
            {
              icon: Palette,
              title: "Creative Thinking",
              description: "Bringing creativity to technical problems for unique and effective solutions.",
              color: "neutral"
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="glass-effect p-8 rounded-2xl hover-card group bg-white/70 dark:bg-neutral-800/70
                        backdrop-blur-md border border-white/20 dark:border-neutral-700/20
                        shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300
                        relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-white/20 to-primary-500/0 
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className={`bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-500/5 
                             p-4 rounded-xl mb-6 inline-block group-hover:scale-110 
                             transition-transform duration-300 relative`}>
                <item.icon className={`text-${item.color}-500 dark:text-${item.color}-400`} size={36} />
                {/* Icon hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-${item.color}-500/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 relative inline-block group">
                <span className="relative z-10 bg-gradient-to-r from-neutral-900 via-primary-600 to-neutral-900 
                               dark:from-white dark:via-primary-400 dark:to-white 
                               bg-[length:200%_100%] bg-clip-text text-transparent
                               animate-gradient-x group-hover:animate-none
                               transition-all duration-500 ease-in-out">
                  {item.title}
                </span>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 
                           dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400
                           bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100
                           transition-all duration-500 ease-in-out"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                />
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 
                              blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </h3>
              
              <p className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 
                           group-hover:translate-x-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;