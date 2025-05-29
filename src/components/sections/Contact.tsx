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
      icon: <Mail className="text-primary-500\" size={24} />,
      title: 'Email',
      content: 'contact@ulysseskai.com',
      link: 'mailto:contact@ulysseskai.com'
    },
    {
      icon: <Phone className="text-primary-500" size={24} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="text-primary-500\" size={24} />,
      title: 'Location',
      content: 'San Francisco, California',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, name: 'GitHub', url: '#' },
    { icon: <Linkedin size={24} />, name: 'LinkedIn', url: '#' },
    { icon: <Twitter size={24} />, name: 'Twitter', url: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
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
            className="lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="bg-primary-500 text-white p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">Feel free to reach out through any of these channels or fill out the form.</p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 bg-white/10 rounded-full p-2">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-primary-100">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="hover:underline">{item.content}</a>
                        ) : (
                          <p>{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <p className="font-medium mb-4">Connect with me:</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url}
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                {submitSuccess ? (
                  <div className="bg-success-500 text-white p-4 rounded-lg mb-6">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-error-500' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
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
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-error-500' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject', { required: 'Subject is required' })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-error-500' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message', { required: 'Message is required' })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-error-500' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </button>
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
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-500">
              <h3 className="text-xl font-bold mb-4">Current Availability</h3>
              <div className="mb-4">
                <span className="inline-block w-3 h-3 rounded-full bg-success-500 mr-2"></span>
                <span className="font-medium">Available for contracts</span>
              </div>
              <p className="text-neutral-700">
                I'm currently accepting new contract projects starting in April 2025. 
                Get in touch to discuss your needs and reserve your spot.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-6">
                Looking for a software engineer and AI specialist to bring your vision to life? 
                I'm here to help turn your ideas into reality.
              </p>
              <a 
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-primary-500 hover:bg-neutral-100 w-full"
              >
                <Calendar size={18} className="mr-2" />
                <span>Schedule a Call</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;