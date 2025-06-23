import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Send, Calendar, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

// Custom hook to detect dark mode using Tailwind's 'dark' class on <html>
function useIsDarkMode() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const checkDark = () => {
      if (typeof window !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'ulysses.kai@email.com',
    href: 'mailto:ulysses.kai@email.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'San Francisco, CA',
    href: 'https://maps.google.com/?q=San+Francisco,+CA',
  },
];

const SOCIALS = [
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/ulysseskai',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ulysseskai',
  },
  {
    icon: <Twitter size={20} />,
    label: 'Twitter',
    href: 'https://twitter.com/ulysseskai',
  },
];

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const isDarkMode = useIsDarkMode();

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setSubmitSuccess(true);

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

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="section-subtitle max-w-2xl md:max-w-3xl mx-auto text-neutral-600 dark:text-neutral-300 text-base sm:text-lg">
            Let's discuss how I can help bring your project to life
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Right Side: Contact Info & Availability/CTA (merged) */}
          <motion.div
            className="w-full lg:w-1/3 space-y-8 flex flex-col mb-8 lg:mb-0"
            variants={itemVariants}
          >
            {/* Contact Info */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 sm:p-8 border-t-4 border-secondary-500
              transform hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <ul className="space-y-4 mb-6">
                {CONTACT_INFO.map((info) => (
                  <li key={info.label} className="flex flex-wrap items-center text-sm sm:text-base">
                    <span className="mr-3 text-primary-500 dark:text-primary-400">{info.icon}</span>
                    <span className="font-medium text-neutral-700 dark:text-neutral-200">{info.label}:</span>
                    <a
                      href={info.href}
                      className="ml-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 underline transition-colors break-all"
                      target={info.label === 'Location' ? "_blank" : undefined}
                      rel={info.label === 'Location' ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Merged Availability & CTA */}
            <motion.div
              className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 rounded-2xl shadow-xl p-6 sm:p-8 text-white
                transform hover:scale-[1.02] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-2 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-success-500 mr-2 animate-pulse"></span>
                <span className="font-medium text-sm sm:text-base">Available for contracts</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-2 text-primary-100 text-sm sm:text-base">
                I'm currently opening new contract. <br />
                Need a software engineer and AI expert? <br />
                Get in touch to discuss your needs and reserve your spot, or schedule a call below.
              </p>
              <motion.a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-white text-primary-500 hover:bg-neutral-100 
                  py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={18} className="mr-2" />
                <span>Schedule a Call</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-2/3 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300 mx-auto"
            variants={itemVariants}
          >
            <div className="p-5 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Send Me a Message
              </h3>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success-500 text-white p-4 rounded-xl mb-6 shadow-lg text-sm sm:text-base"
                >
                  Thank you for your message! I'll get back to you as soon as possible.
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
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
                        transition-all duration-300 text-sm sm:text-base`}
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
                        transition-all duration-300 text-sm sm:text-base`}
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
                      transition-all duration-300 text-sm sm:text-base`}
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
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-neutral-50 dark:bg-neutral-700
                      ${errors.message ? 'border-error-500' : 'border-neutral-200 dark:border-neutral-600'} 
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      transition-all duration-300 resize-none text-sm sm:text-base`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                  )}
                </div>

                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 sm:py-4 px-6 rounded-xl
                      font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
                      disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none text-sm sm:text-base"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;