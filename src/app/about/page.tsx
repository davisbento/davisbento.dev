import Image from "next/image";
import Template from "@/components/layout/Template";

export const metadata = {
  title: "About Me | Davis Bento",
  description: "Learn more about Davis Bento, a Software Engineer and Full Stack Developer.",
};

export default function AboutPage() {
  return (
    <Template>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden border-4 border-blue-600 dark:border-blue-400">
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
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Davis Bento</h2>
            <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-6">Software Engineer & Full Stack Developer</h3>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate software engineer with over 5 years of experience building web applications and digital products. I specialize in JavaScript/TypeScript ecosystems with expertise in React, Next.js, Node.js, and various database technologies.
              </p>
              
              <p>
                My journey in software development began when I was in college, where I built small websites and applications. Since then, I've worked with startups and established companies to create scalable and efficient solutions that solve real-world problems.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing and mentoring. I believe in continuous learning and staying up-to-date with the latest industry trends.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="mb-4">
                <h4 className="font-medium">B.S. in Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-400">University of Technology - 2018</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              
              <div className="mb-6">
                <h4 className="font-medium">Senior Software Engineer</h4>
                <p className="text-gray-600 dark:text-gray-400">TechCorp Inc. - 2020 to Present</p>
                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                  <li>Led development of the company's flagship product</li>
                  <li>Implemented CI/CD pipelines to improve deployment efficiency</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium">Full Stack Developer</h4>
                <p className="text-gray-600 dark:text-gray-400">StartupX - 2018 to 2020</p>
                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                  <li>Built and maintained customer-facing applications</li>
                  <li>Developed RESTful APIs and integrated third-party services</li>
                  <li>Worked in an agile environment with weekly sprints</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
