import React from 'react';
import { Github, Linkedin, Twitter, Mail, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-900 bg-white dark:text-white text-neutral-900 py-12 transition-colors">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="bg-primary-500 h-10 w-10 rounded flex items-center justify-center text-white font-bold text-xl mr-2">
                UK
              </div>
              <span className="text-xl font-heading font-semibold">Ulysses Kai</span>
            </div>
            <p className="mt-4 max-w-md text-neutral-500 dark:text-neutral-400 transition-colors">
              Senior Software Engineer & AI Specialist with a passion for building innovative solutions. 
              Available for contract work and new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#resume"
                    className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 text-neutral-700 dark:text-neutral-400" />
                  <a
                    href="mailto:kronor121111@gmail.com"
                    className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    kronor121111@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Calendar size={16} className="mr-2 text-neutral-700 dark:text-neutral-400" />
                  <a
                    href="https://calendly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  >
                    Schedule a call
                  </a>
                </li>
              </ul>

              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-neutral-700 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-500 flex flex-col sm:flex-row justify-between items-center transition-colors">
          <p>&copy; {currentYear} Ulysses Kai. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a
              href="#"
              className="text-neutral-500 dark:text-neutral-500 hover:text-primary-600 dark:hover:text-white transition-colors mr-6"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-500 dark:text-neutral-500 hover:text-primary-600 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;