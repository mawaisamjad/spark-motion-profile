
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-bold mb-4 block text-white">Portfolio</a>
            <p className="mb-4 text-background/80 max-w-md">
              A passionate Full Stack Developer specializing in building exceptional 
              digital experiences with modern web technologies.
            </p>
            <p className="text-background/80">
              Thank you for visiting my portfolio. Let's build something amazing together!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-background/80 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-background/80">
                San Francisco, CA, USA
              </li>
              <li>
                <a href="mailto:contact@example.com" className="text-background/80 hover:text-white transition-colors">
                  contact@example.com
                </a>
              </li>
              <li>
                <a href="tel:+15555555555" className="text-background/80 hover:text-white transition-colors">
                  +1 (555) 555-5555
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/80 flex items-center justify-center">
            © {currentYear} Portfolio. Made with <Heart size={16} className="mx-1 text-red-500" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
