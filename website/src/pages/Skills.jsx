import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
  FaJava,
  FaGitAlt,
  FaWindows,
  FaLinux,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiOracle } from "react-icons/si";

const Skills = () => {
  const categories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Bootstrap", level: 85, icon: <FaBootstrap className="text-purple-600" /> },
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-sky-500" /> },
        { name: "JavaScript", level: 88, icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", level: 82, icon: <FaReact className="text-cyan-500" /> },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { name: "PHP", level: 80, icon: <FaPhp className="text-indigo-500" /> },
        { name: "MySQL / SQL", level: 85, icon: <SiMysql className="text-blue-700" /> },
        { name: "SQL Server", level: 75, icon: <FaDatabase className="text-gray-500" /> },
        { name: "Oracle DB (11g/12c)", level: 78, icon: <SiOracle className="text-red-600" /> },
      ],
    },
    {
      name: "Programming & Tools",
      skills: [
        { name: "Java", level: 80, icon: <FaJava className="text-red-500" /> },
        { name: "PL/SQL", level: 75, icon: <FaDatabase className="text-green-500" /> },
        { name: "Git / GitHub", level: 85, icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Windows OS", level: 95, icon: <FaWindows className="text-blue-500" /> },
        { name: "Linux OS", level: 70, icon: <FaLinux className="text-gray-700" /> },
        { name: "MS Office", level: 90, icon: <FaWindows className="text-gray-500" /> },
      ],
    },
  ];

  // Ref to track which skills are in view
  const skillRefs = useRef([]);
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleSkills((prev) => [...new Set([...prev, parseInt(index)])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      skillRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12 animate-bounce">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-12 px-4">
        {categories.map((cat, catIndex) => (
          <div key={catIndex} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              {cat.name}
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cat.skills.map((skill, index) => (
                <div
                  key={index}
                  ref={(el) => (skillRefs.current[index + catIndex * 10] = el)}
                  data-index={index + catIndex * 10}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-2 mb-2 text-gray-700">
                    <span className="text-2xl animate-pulse">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400 transition-all duration-1500 ease-in-out`}
                      style={{
                        width: visibleSkills.includes(index + catIndex * 10)
                          ? `${skill.level}%`
                          : "0%",
                      }}
                    ></div>
                  </div>
                  <p className="text-right text-xs text-gray-500 mt-1">{skill.level}%</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
