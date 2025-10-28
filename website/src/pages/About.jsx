import React, { useState, useEffect } from "react";
import Mypic from "../assets/mypic.png"; // replace with your image path

export default function About() {
  const textArray = [
    { text: "Salaam 👋", color: "text-blue-600" },
    { text: "Hi, I am Samiullah Sangar", color: "text-purple-600" },
    { text: "Full Stack Web Developer", color: "text-cyan-600" },
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = textArray[index].text;
    const typingSpeed = isDeleting ? 60 : 120;
    const pauseTime = 2000;

    if (!isDeleting && text === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length);
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, textArray]);

  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-24"
    >
      {/* LEFT SIDE - TEXT SECTION */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        {/* Animated Typing Text */}
        <h1
          className={`text-3xl md:text-5xl font-bold transition-all duration-500 ${
            textArray[index].color
          }`}
        >
          {text}
          <span className="animate-pulse text-gray-500">|</span>
        </h1>

        {/* Background Paragraph */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I’m a passionate Full Stack Developer from Kabul, Afghanistan, skilled
          in both front-end and back-end technologies. My toolkit includes React,
          Tailwind CSS, Node.js, PHP, and MySQL. I enjoy developing dynamic,
          responsive web applications that are not only functional but also
          visually appealing. My focus is on writing clean, efficient code and
          building seamless user experiences across all devices.
        </p>
      </div>

      {/* RIGHT SIDE - PROFILE IMAGE */}
      <div className="md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
          {/* Outer rotating border */}
          <div className="absolute inset-0 rounded-full animate-rotate-slow bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 blur-md opacity-90"></div>
          {/* Inner counter-rotating border */}
          <div className="absolute inset-3 rounded-full animate-rotate-reverse bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-500 blur-sm opacity-80"></div>

          {/* Profile Image */}
          <img
            src={Mypic}
            alt="Samiullah Sangar"
            className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-xl z-10"
          />
        </div>
      </div>
    </section>
  );
}
