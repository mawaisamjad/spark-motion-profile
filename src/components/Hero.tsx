
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((element) => {
          element.classList.add('fade-in-animation');
        });
      }
    };

    // Delay animation slightly for better effect
    setTimeout(animateElements, 100);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div 
        ref={containerRef}
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center"
      >
        <div className="order-2 lg:order-1">
          <p className="animate-on-scroll text-primary font-medium mb-4">Hello, I am</p>
          <h1 className="animate-on-scroll text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Awais Amjad</span>
          </h1>
          <h2 className="animate-on-scroll text-2xl md:text-3xl font-bold mb-6 text-foreground/80">
            Full Stack Developer
          </h2>
          <p className="animate-on-scroll text-lg text-muted-foreground mb-8 max-w-xl">
            I build innovative web applications with cutting-edge technologies.
            Specialized in creating efficient, scalable, and user-friendly solutions
            that solve real-world problems.
          </p>
          
          <div className="animate-on-scroll flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="btn-primary">
              Get In Touch <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn-secondary">
              View My Work
            </a>
          </div>
          
          <div className="animate-on-scroll flex gap-4">
            <a 
              href="https://github.com/mawaisamjad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-awais-9972a6317/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:get.awaisamjad@gmail.com" 
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full bg-gradient-to-tr from-primary to-purple-600 p-1 animate-float shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Portfolio Owner" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg rotate-12 animate-float animation-delay-1000"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary rounded-lg -rotate-12 animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
