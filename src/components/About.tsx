
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-animation');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        <p className="section-subtitle animate-on-scroll">
          Get to know more about my journey, passion, and expertise in the realm of software development.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative animate-on-scroll">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                  alt="Developer working" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-40 h-40 border-4 border-primary/30 rounded-lg"></div>
              <div className="absolute -top-5 -left-5 w-40 h-40 border-4 border-primary/30 rounded-lg"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 animate-on-scroll">
              <span className="gradient-text">Software Developer & Problem Solver</span>
            </h3>
            
            <div className="space-y-4 text-foreground/80">
              <p className="animate-on-scroll">
                I'm a passionate Full Stack Developer with 5+ years of experience creating
                web and mobile applications. I specialize in building robust and scalable solutions
                that deliver exceptional user experiences.
              </p>
              
              <p className="animate-on-scroll">
                My journey in software development began at the University of Technology,
                where I earned my Bachelor's degree in Computer Science. Since then, I've worked
                with startups and established companies, helping them build innovative digital products.
              </p>
              
              <p className="animate-on-scroll">
                When I'm not coding, you'll find me contributing to open-source projects,
                writing technical articles, or exploring new technologies to stay at the
                forefront of the industry.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 animate-on-scroll">
              <div>
                <h4 className="font-bold text-lg mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                    <span>BSc in Computer Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                    <span>Full Stack Web Development Bootcamp</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Experience</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                    <span>Senior Developer at TechCorp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 mt-2 mr-2 bg-primary rounded-full"></span>
                    <span>Lead Developer at StartupX</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
