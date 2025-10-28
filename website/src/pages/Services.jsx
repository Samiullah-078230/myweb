import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaPalette, FaChalkboardTeacher } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive web apps with React.js, Tailwind CSS, HTML5 & JavaScript.",
    icon: <FaLaptopCode className="text-blue-500 w-12 h-12" />,
    direction: "left",
  },
  {
    title: "Database Management",
    description: "Designing and managing databases with MySQL, PostgreSQL, and Oracle.",
    icon: <FaDatabase className="text-green-500 w-12 h-12" />,
    direction: "right",
  },
  {
    title: "UI/UX Design",
    description: "Creating user-friendly and visually appealing interfaces with modern UI components.",
    icon: <FaPalette className="text-pink-500 w-12 h-12" />,
    direction: "bottom",
  },
  {
    title: "Training & Consulting",
    description: "Mentoring and providing guidance in web development and modern frameworks.",
    icon: <FaChalkboardTeacher className="text-yellow-500 w-12 h-12" />,
    direction: "top",
  },
];

const getDirection = (direction) => {
  switch (direction) {
    case "left":
      return { x: -50, opacity: 0 };
    case "right":
      return { x: 50, opacity: 0 };
    case "top":
      return { y: -50, opacity: 0 };
    case "bottom":
      return { y: 50, opacity: 0 };
    default:
      return { opacity: 0 };
  }
};

const Services = () => {
  return (
    <section
  id="services"
  className="py-20 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
>
  <h2 className="text-4xl font-bold text-center text-blue-600 mb-16 flex items-center justify-center">
    <FaLaptopCode className="text-yellow-500 mr-2 animate-bounce" />
    Services
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8">
    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={getDirection(service.direction)}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          type: "spring",
          stiffness: 60,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center group cursor-pointer"
      >
        <div className="text-6xl mb-4 transition-transform transform group-hover:scale-110">
          {service.icon}
        </div>
        <motion.h3
          className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-500 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {service.title}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    ))}
  </div>
</section>

  );
};

export default Services;
