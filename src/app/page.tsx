import Image from "next/image";
import Link from "next/link";
import Template from "@/components/layout/Template";

export default function Home() {
  return (
    <Template>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Davis Bento</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                Software Engineer & Full Stack Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I build modern web applications with cutting-edge technologies.
                Passionate about creating clean, efficient, and user-friendly solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Replace with your own image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl">DB</span>
                  {/* If you have an image, uncomment this */}
                  {/* <Image 
                    src="/images/profile.jpg" 
                    alt="Davis Bento" 
                    fill 
                    className="object-cover" 
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", icon: "⚡" },
              { name: "TypeScript", icon: "🔷" },
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Node.js", icon: "🟢" },
              { name: "GraphQL", icon: "🔺" },
              { name: "MongoDB", icon: "🍃" },
              { name: "PostgreSQL", icon: "🐘" },
            ].map((skill) => (
              <div 
                key={skill.name} 
                className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <span className="text-3xl mb-4">{skill.icon}</span>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link 
              href="/projects" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "A modern e-commerce platform built with Next.js, Stripe, and MongoDB.",
                tags: ["Next.js", "Stripe", "MongoDB"],
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates.",
                tags: ["React", "Node.js", "Socket.io"],
              },
              {
                title: "Finance Dashboard",
                description: "An interactive dashboard for monitoring financial data and analytics.",
                tags: ["TypeScript", "D3.js", "Express"],
              },
            ].map((project, index) => (
              <div 
                key={index}
                className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-xl">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Template>
  );
}
