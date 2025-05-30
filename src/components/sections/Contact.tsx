import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Calendar } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // This would be replaced with actual form submission logic
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-500" size={24} />,
      title: 'Email',
      content: 'elitedev.kai@gmia.com',
      link: 'mailto:elitedev.kai@gmia.com'
    },
    {
      icon: <Phone className="text-primary-500" size={24} />,
      title: 'WhatsApp',
      content: '+55 15 98135-5146',
      link: 'https://wa.me/5515981355146'
    },
    {
      icon: <MapPin className="text-primary-500" size={24} />,
      title: 'Location',
      content: 'Michigan, United States',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, name: 'GitHub', url: '#' },
    { icon: <Linkedin size={24} />, name: 'LinkedIn', url: '#' },
    { icon: <Twitter size={24} />, name: 'Twitter', url: '#' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto text-neutral-600 dark:text-neutral-300 text-lg">
            Let's discuss how I can help bring your project to life
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="flex flex-col lg:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Info & Form */}
          <motion.div 
            className="lg:w-2/3 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <h3 className="text-2xl font-bold mb-8 relative">Contact Information</h3>
                <p className="mb-10 text-primary-100 relative">Feel free to reach out through any of these channels or fill out the form.</p>
                
                <div className="space-y-8 relative">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start group hover:translate-x-1 transition-transform duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="mr-4 bg-white/10 rounded-xl p-3 group-hover:bg-white/20 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-primary-200">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="hover:text-white transition-colors duration-300 text-white">{item.content}</a>
                        ) : (
                          <p className="text-white">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-16 relative">
                  <p className="font-medium mb-6 text-primary-200">Connect with me:</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a 
                        key={index} 
                        href={link.url}
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                        whileHover={{ scale: 1.1 }}
                        aria-label={link.name}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="col-span-2 p-10 bg-white dark:bg-neutral-800">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Send Me a Message
                </h3>
                
                {submitSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-success-500 text-white p-4 rounded-xl mb-6 shadow-lg"
                  >
                    Thank you for your message! I'll get back to you as soon as possible.
                  </motion.div>
                ) : null}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 group-focus-within:text-primary-500 transition-colors duration-300">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-neutral-50 dark:bg-neutral-700 
                          ${errors.name ? 'border-error-500' : 'border-neutral-200 dark:border-neutral-600'} 
                          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                          transition-all duration-300`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 group-focus-within:text-primary-500 transition-colors duration-300">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-neutral-50 dark:bg-neutral-700
                          ${errors.email ? 'border-error-500' : 'border-neutral-200 dark:border-neutral-600'} 
                          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                          transition-all duration-300`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 group-focus-within:text-primary-500 transition-colors duration-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject', { required: 'Subject is required' })}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-neutral-50 dark:bg-neutral-700
                        ${errors.subject ? 'border-error-500' : 'border-neutral-200 dark:border-neutral-600'} 
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-all duration-300`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 group-focus-within:text-primary-500 transition-colors duration-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message', { required: 'Message is required' })}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-neutral-50 dark:bg-neutral-700
                        ${errors.message ? 'border-error-500' : 'border-neutral-200 dark:border-neutral-600'} 
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-all duration-300 resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl
                        font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
                        disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Availability & CTA */}
          <motion.div 
            className="lg:w-1/3 space-y-8"
            variants={itemVariants}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 border-t-4 border-primary-500
              transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Current Availability
              </h3>
              <div className="mb-4 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-success-500 mr-2 animate-pulse"></span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">Available for contracts</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                I'm currently accepting new contract projects starting in April 2025. 
                Get in touch to discuss your needs and reserve your spot.
              </p>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 rounded-2xl shadow-xl p-8 text-white
                transform hover:scale-[1.02] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-6 text-primary-100">
                Looking for a software engineer and AI specialist to bring your vision to life? 
                I'm here to help turn your ideas into reality.
              </p>
              <motion.a 
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-white text-primary-500 hover:bg-neutral-100 
                  py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={18} className="mr-2" />
                <span>Schedule a Call</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;