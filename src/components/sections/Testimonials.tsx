import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
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
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 2,
      content: "Working with Ulysses was a game-changer for our startup. He helped us implement a machine learning system that improved our product recommendations by 40%. His ability to explain complex concepts in simple terms made the collaboration smooth and productive.",
      name: "Michael Chen",
      position: "Co-founder",
      company: "TechNova",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 3,
      content: "Ulysses transformed our outdated systems into a modern, scalable architecture. His technical leadership and strategic approach to problem-solving were exactly what we needed. I highly recommend him for any complex software development project.",
      name: "Emily Rodriguez",
      position: "VP of Engineering",
      company: "Enterprise Solutions",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 4,
      content: "As a product manager, I've worked with many developers, but Ulysses stands out for his combination of technical skill and business acumen. He doesn't just write code; he builds solutions that address real business needs. He's now our go-to contractor for all AI initiatives.",
      name: "David Park",
      position: "Senior Product Manager",
      company: "InnovateX",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-500">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white">Client Testimonials</h2>
          <p className="section-subtitle text-primary-100">
            Hear what my clients have to say about working with me
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-primary-300 opacity-30">
            <Quote size={120} />
          </div>
          
          <motion.div 
            className="relative z-10 bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-primary-100 mx-auto"
                />
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg text-neutral-700 italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-neutral-600">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-neutral-100 hover:bg-primary-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activeIndex ? 'bg-primary-500 w-6' : 'bg-neutral-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-neutral-100 hover:bg-primary-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;