import React from "react";
import ecomImage from '../assets/ecommers.png'; // replace with your image
import portfolioImage from "../assets/myportfilo.png"; // replace with your image
import imsImage from "../assets/mypic1.png"; // replace with your image

const projects = [
  {
    name: "Institute Management System",
    description:
      "A full-stack system to manage students, teachers, and courses using PHP, MySQL, and JavaScript.",
    image: imsImage,
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "https://github.com/samiullah/institute-management-system",
  },
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio website built with React.js and Tailwind CSS to showcase projects and skills.",
    image: portfolioImage,
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/samiullah/portfolio",
  },
  {
    name: "E-commerce Website",
    description:
      "An online shopping platform with product management, shopping cart, and payment integration.",
    image: ecomImage,
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "https://github.com/samiullah/ecommerce",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white  px-3 py-3 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-50 object-cover center rounded-sm "
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-500 hover:text-indigo-700 font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
