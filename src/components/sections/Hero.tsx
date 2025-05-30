import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight, Sparkles, Code, Cpu, Rocket } from 'lucide-react';
import photo from '../../assests/img.jpg';
interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center overflow-hidden ${className}`}
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 
                      dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 
                      dark:from-primary-400/10 dark:via-secondary-400/10 dark:to-accent-400/10
                      animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-transparent to-primary-500/5
                      dark:from-accent-400/10 dark:via-transparent dark:to-primary-400/10
                      animate-gradient-y" />
        
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.15),transparent_50%)]
                      dark:bg-[radial-gradient(circle_at_50%_120%,rgba(0,180,216,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,215,0,0.1),transparent_50%)]
                      dark:bg-[radial-gradient(circle_at_0%_0%,rgba(255,215,0,0.15),transparent_50%)]" />
        
        {/* Animated blur effects */}
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/40 dark:bg-neutral-900/40" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-1000" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
                      bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Role badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                        dark:from-primary-500/20 dark:to-secondary-500/20 border border-primary-500/20 dark:border-primary-400/20
                        shadow-soft-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="text-primary-500 dark:text-primary-400" size={18} />
              <span className="text-primary-600 dark:text-primary-400 font-medium">Senior Software Engineer & AI Specialist</span>
            </motion.div>

            {/* Main heading with enhanced animated gradient */}
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span 
                className="block relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Hi, I'm
                <motion.div
                  className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 
                            bg-[length:200%_100%] animate-gradient-x rounded-full opacity-0 group-hover:opacity-100
                            transition-opacity duration-500"
                />
              </motion.span>
              <motion.span 
                className="relative inline-block group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 
                               bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x
                               group-hover:animate-none transition-all duration-500">
                  Ulysses Kai
                </span>
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 
                              blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 
                            bg-[length:200%_100%] animate-gradient-x rounded-full opacity-0 group-hover:opacity-100
                            transition-all duration-500"
                />
              </motion.span>
            </motion.h1>

            {/* Enhanced subheading with animated effects */}
            <motion.p 
              className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Crafting elegant, intelligent solutions at the intersection of software engineering and artificial intelligence.
                {/* Animated underline with gradient */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0
                            scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.span>
            </motion.p>

            {/* Enhanced tech stack badges with animations */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { icon: Code, label: "Full Stack" },
                { icon: Cpu, label: "AI/ML" },
                { icon: Rocket, label: "Cloud Native" }
              ].map((tech, index) => (
                <motion.div 
                  key={tech.label}
                  className="px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm
                           border border-neutral-200/50 dark:border-neutral-700/50
                           shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300
                           group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 
                                blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <tech.icon className="text-primary-500 dark:text-primary-400" size={18} />
                    </motion.div>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">{tech.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTA buttons with more dynamic animations */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10 flex items-center">
                  Hire me
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight size={18} className="ml-2" />
                  </motion.div>
                </span>
                {/* Multiple hover effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-white/20 to-primary-500/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 
                              blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
              <motion.a 
                href="#" 
                className="btn-outline group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10 flex items-center">
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Download size={18} className="mr-2" />
                  </motion.div>
                  Download Resume
                </span>
                {/* Multiple hover effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-white/20 to-primary-500/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 
                              blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Profile image with enhanced effects */}
          <motion.div
      className="w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center lg:justify-end relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.div
        className="relative group w-64 h-80 sm:w-80 sm:h-96"
        whileHover={{ rotate: 2, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <span className="block w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-primary-400 via-accent-400 to-secondary-400 animate-spin-slow blur-md opacity-70" />
        </div>
        {/* Glassmorphism Card */}
        <div className="relative z-10 w-full h-full rounded-3xl bg-white/50 dark:bg-neutral-900/60 shadow-2xl backdrop-blur-xl border border-white/30 dark:border-neutral-800/40 overflow-hidden flex flex-col items-center justify-center">
          {/* Blob Masked Image with Shine */}
          <img
            src={photo}
            alt="Ulysses Kai"
            className="w-full h-full object-cover rounded-[2.5rem] shadow-xl"
            style={{
              transition: "transform 0.5s cubic-bezier(.17,.67,.83,.67)",
            }}
          />
          {/* Shine Animation */}
          <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
            <span className="absolute -left-1/3 top-0 w-1/3 h-full bg-gradient-to-r from-white/60 to-transparent transform -skew-x-12 animate-shine" />
          </span>
        </div>
      </motion.div>
    </motion.div>

        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ y, opacity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Scroll Down</span>
            <div className="w-8 h-12 border-2 border-primary-500/20 dark:border-primary-400/20 rounded-full 
                          flex justify-center p-1 group hover:border-primary-500/40 dark:hover:border-primary-400/40
                          transition-colors duration-300">
              <motion.div 
                className="w-1 h-3 bg-primary-500 dark:bg-primary-400 rounded-full"
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;