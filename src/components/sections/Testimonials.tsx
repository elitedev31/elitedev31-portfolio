import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Ulysses delivered our AI-powered analytics platform ahead of schedule and exceeded our expectations. His expertise in both software engineering and AI was invaluable. He was communicative throughout the process and provided thoughtful solutions to complex problems.",
      name: "Sarah Johnson",
      position: "CTO",
      company: "DataMetrics Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5
    },
    {
      id: 2,
      content: "Working with Ulysses was a game-changer for our startup. He helped us implement a machine learning system that improved our product recommendations by 40%. His ability to explain complex concepts in simple terms made the collaboration smooth and productive.",
      name: "Michael Chen",
      position: "Co-founder",
      company: "TechNova",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5
    },
    {
      id: 3,
      content: "Ulysses transformed our outdated systems into a modern, scalable architecture. His technical leadership and strategic approach to problem-solving were exactly what we needed. I highly recommend him for any complex software development project.",
      name: "Emily Rodriguez",
      position: "VP of Engineering",
      company: "Enterprise Solutions",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5
    },
    {
      id: 4,
      content: "As a product manager, I've worked with many developers, but Ulysses stands out for his combination of technical skill and business acumen. He doesn't just write code; he builds solutions that address real business needs. He's now our go-to contractor for all AI initiatives.",
      name: "David Park",
      position: "Senior Product Manager",
      company: "InnovateX",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Beautiful background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-500/10 dark:via-secondary-500/10 dark:to-accent-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDEtMSAxLTIgMXMtMi0xLTItMiAxLTIgMi0yIDIgMSAyIDJ6IiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="section-subtitle text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover how I've helped organizations transform their technology and achieve their goals
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Enhanced card background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-3xl transform -rotate-3"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-3xl transform rotate-3"></div>
          
          <motion.div 
            className="relative z-10 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 border border-white/20 dark:border-neutral-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-lg relative z-10 mx-auto transform transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-accent-500 fill-accent-500" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                      {testimonials[activeIndex].content}
                    </p>
                  </div>
                  
                  <div className="border-t border-neutral-200/50 dark:border-neutral-700/50 pt-6">
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">{testimonials[activeIndex].name}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-neutral-200/50 dark:border-neutral-700/50">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-xl bg-white dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-all shadow-sm hover:shadow-md active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-neutral-600 dark:text-neutral-300" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeIndex 
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 w-6' 
                        : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-xl bg-white dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-all shadow-sm hover:shadow-md active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-neutral-600 dark:text-neutral-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;