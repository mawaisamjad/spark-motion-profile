
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://project-link.com",
    github: "https://github.com/yourusername/project",
    category: "Web Development",
    featured: true
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered application that generates high-quality content for blogs, social media, and marketing.",
    image: "https://media.istockphoto.com/id/2168215142/photo/interaction-with-the-ai-assistant-to-solve-some-tasks-more-easily-image-generator-documents.jpg?s=2048x2048&w=is&k=20&c=C2T23oo5sF0KXCbzZCoL5PGuTdo5MR26JVTcRloEKSI=",
    technologies: ["React", "OpenAI API", "Firebase", "TailwindCSS"],
    link: "https://project-link.com",
    github: "https://github.com/yourusername/project",
    category: "AI & Machine Learning",
    featured: true
  },
  {
    id: 3,
    title: "Travel Planner App",
    description: "A comprehensive travel planning application that helps users organize trips, find accommodations, and discover local attractions.",
    image: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    technologies: ["React Native", "GraphQL", "MongoDB", "Google Maps API"],
    link: "https://project-link.com",
    github: "https://github.com/yourusername/project",
    category: "Mobile Development",
    featured: false
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description: "An interactive financial dashboard for tracking investments, expenses, and financial goals with data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "https://project-link.com",
    github: "https://github.com/yourusername/project",
    category: "Web Development",
    featured: true
  },
  {
    id: 5,
    title: "Health & Fitness Tracker",
    description: "A comprehensive health and fitness tracking application that monitors workouts, nutrition, and health metrics.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    technologies: ["Flutter", "Firebase", "HealthKit API", "Google Fit API"],
    link: "https://project-link.com",
    github: "https://github.com/yourusername/project",
    category: "Mobile Development",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with an interactive UI.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    link: "https://project-link.com",
    github: "https://github.com/yourusername/project",
    category: "Web Development",
    featured: false
  }
];
