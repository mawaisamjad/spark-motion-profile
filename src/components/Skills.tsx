
import React, { useEffect, useRef } from 'react';
import { Monitor, Server, Database, Code, Paintbrush, Share2 } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      icon: <Monitor size={24} className="text-primary" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "NextJS", "TailwindCSS", "Styled Components"]
    },
    {
      icon: <Server size={24} className="text-primary" />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "NestJS", "Django", "Java Spring"]
    },
    {
      icon: <Database size={24} className="text-primary" />,
      title: "Database Management",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      icon: <Code size={24} className="text-primary" />,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "PHP"]
    },
    {
      icon: <Paintbrush size={24} className="text-primary" />,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Sketch", "User Testing", "Wireframing"]
    },
    {
      icon: <Share2 size={24} className="text-primary" />,
      title: "DevOps & Deployment",
      skills: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Vercel"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section">
      <div className="container mx-auto">
        <h2 className="section-title animate-on-scroll">My Skills</h2>
        <p className="section-subtitle animate-on-scroll">
          Here are some of the technologies and tools I've worked with over the years.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-white rounded-lg shadow-md p-6 card-hover border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-md bg-accent mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Skill bars */}
        <div className="mt-16 max-w-3xl mx-auto animate-on-scroll">
          <h3 className="text-2xl font-bold mb-8 text-center">Proficiency</h3>
          
          <div className="space-y-6">
            {[
              { name: "Frontend Development", level: 90 },
              { name: "Backend Development", level: 85 },
              { name: "Mobile Development", level: 75 },
              { name: "UI/UX Design", level: 80 },
              { name: "DevOps", level: 70 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: "0%", 
                      animationFillMode: "forwards",
                      animation: "progress 1.5s ease-out forwards",
                      animationDelay: `${index * 200 + 300}ms` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: var(--level); }
        }
        
        div[style*="animation: progress"] {
          --level: 0%;
        }
        
        div[style*="animation-delay: 300ms"] {
          --level: 90%;
        }
        
        div[style*="animation-delay: 500ms"] {
          --level: 85%;
        }
        
        div[style*="animation-delay: 700ms"] {
          --level: 75%;
        }
        
        div[style*="animation-delay: 900ms"] {
          --level: 80%;
        }
        
        div[style*="animation-delay: 1100ms"] {
          --level: 70%;
        }
      `}</style>
    </section>
  );
};

export default Skills;
