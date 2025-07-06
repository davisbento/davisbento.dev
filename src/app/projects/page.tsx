import Image from "next/image";
import Template from "@/components/layout/Template";

export const metadata = {
  title: "Projects | Davis Bento",
  description: "Explore the portfolio of projects developed by Davis Bento, a Software Engineer.",
};

// Sample project data - in a real application, this could come from a CMS or API
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js, Stripe, and MongoDB. Features include product catalog, user authentication, shopping cart, payment processing, and order management.",
    image: "/placeholder.jpg", // Replace with actual image path
    tags: ["Next.js", "Stripe", "MongoDB", "TypeScript"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/davisbento/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress. Includes notifications and team collaboration features.",
    image: "/placeholder.jpg", // Replace with actual image path
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://example.com/taskapp",
    github: "https://github.com/davisbento/task-management",
    featured: true,
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "An interactive dashboard for monitoring financial data and analytics. Visualizes spending patterns, income sources, and provides budget recommendations with customizable reporting.",
    image: "/placeholder.jpg", // Replace with actual image path
    tags: ["TypeScript", "D3.js", "Express", "Firebase"],
    link: "https://example.com/finance",
    github: "https://github.com/davisbento/finance-dashboard",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Application",
    description: "A responsive weather application that provides current conditions and forecasts for locations worldwide. Features include location search, favorites, and detailed weather information.",
    image: "/placeholder.jpg", // Replace with actual image path
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    link: "https://example.com/weather",
    github: "https://github.com/davisbento/weather-app",
    featured: false,
  },
  {
    id: 5,
    title: "Personal Blog",
    description: "A markdown-based blog platform with categories, tags, and code syntax highlighting. Optimized for performance and SEO with static site generation.",
    image: "/placeholder.jpg", // Replace with actual image path
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    link: "https://example.com/blog",
    github: "https://github.com/davisbento/blog",
    featured: false,
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    description: "A movie recommendation system that suggests films based on user preferences and viewing history. Includes filters, ratings, and personalized recommendations.",
    image: "/placeholder.jpg", // Replace with actual image path
    tags: ["Python", "Machine Learning", "React", "Flask"],
    link: "https://example.com/movies",
    github: "https://github.com/davisbento/movie-recommendations",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <Template>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
          Here are some of the projects I've worked on.
        </p>
        
        {/* Project Filters - could be expanded with actual filtering functionality */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full">All</button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full">Web Apps</button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full">Mobile</button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full">API</button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-xl">Project Image</span>
                {/* If you have actual images, uncomment this */}
                {/* <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
}
