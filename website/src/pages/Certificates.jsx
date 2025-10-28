import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCalendarAlt, FaUniversity } from "react-icons/fa";

import cert1 from "../assets/ecommerce.jpg";
import cert2 from "../assets/php.jpg";
import cert3 from "../assets/frontend.jpg";
import cert4 from "../assets/pashtany.jpg";
import cert5 from "../assets/mhe.jpg";
import cert6 from "../assets/mysql.jpg";
import cert8 from "../assets/office.jpg";
import cert9 from "../assets/management.jpg";

const Certificates = () => {
  const certificates = [
    {
      title: "E-commerce Website Online Course",
      skills: "HTML, CSS, JavaScript",
      date: "August 2024",
      type: "Online",
      provider: "Great Learning Academy",
      image: cert1,
      direction: "left",
    },
    {
      title: "PHP Online Course",
      date: "September 2024",
      type: "Online",
      provider: "Great Learning Academy",
      image: cert2,
      direction: "right",
    },
    {
      title: "Front-end Development",
      skills: "HTML, CSS, JavaScript, TailwindCSS, React.js",
      provider: "Top in Town Technology",
      type: "In-person",
      start: "01/June/2025",
      end: "03/September/2025",
      image: cert3,
      direction: "bottom",
    },
    {
      title: "Practical Training in IT Department",
      provider: "Pashtany Bank",
      type: "In-person",
      start: "13/05/1404",
      end: "13/06/1405",
      image: cert4,
      direction: "top",
    },
    {
      title: "Web Development Certificate",
      provider: "Ministry of Higher Education Afghanistan",
      type: "In-person",
      image: cert5,
      direction: "left",
    },
    {
      title: "MySQL Database Developer",
      provider: "Qasaba Technical Institute",
      type: "In-person",
      image: cert6,
      direction: "right",
    },
    {
      title: "Microsoft Office Specialist",
      skills: "Windows 10/11, Word, Excel, PowerPoint, Access",
      provider: "Basat Educational Center",
      type: "In-person",
      image: cert8,
      direction: "bottom",
    },
    {
      title: "Management Certificate",
      provider: "Afghan Development Academy",
      type: "In-person",
      image: cert9,
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

  return (
    <section
      id="certificates"
      className="py-16 bg-gray-50 dark:bg-gray-900 overflow-x-hidden"
    >
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12 flex items-center justify-center">
        <FaCertificate className="text-yellow-500 mr-2" />
        Certificates & Trainings
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={getDirection(cert.direction)}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 overflow-hidden"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">
                <FaCertificate className="text-yellow-500" /> {cert.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                <FaUniversity className="text-green-500" />
                {cert.provider}
              </p>

              <p className="text-xs text-gray-500 italic mt-1">{cert.type}</p>

              {cert.date && (
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <FaCalendarAlt className="text-orange-500" /> {cert.date}
                </p>
              )}

              {cert.start && cert.end && (
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <FaCalendarAlt className="text-orange-500" /> {cert.start} -{" "}
                  {cert.end}
                </p>
              )}

              {cert.skills && (
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                  💡 <strong>Skills:</strong> {cert.skills}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
