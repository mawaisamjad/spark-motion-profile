
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/projects';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

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
  }, [visibleProjects]);

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];

  return (
    <section id="projects" ref={sectionRef} className="section bg-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">My Projects</h2>
        <p className="section-subtitle animate-on-scroll">
          Check out some of my recent work. These projects showcase my skills and expertise.
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-on-scroll">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-white hover:bg-primary/10 text-foreground/70'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-on-scroll bg-white rounded-lg overflow-hidden shadow-md card-hover border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-2">
                    Featured
                  </span>
                )}
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-block px-2 py-1 text-xs bg-secondary text-foreground/70 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Project
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-foreground/70 hover:text-primary"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
