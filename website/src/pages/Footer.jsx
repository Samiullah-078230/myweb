import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div>
          <p>© {new Date().getFullYear()} Samiullah Sangar. All Rights Reserved.</p>
          <p className="text-sm text-gray-500 mt-1">
            Designed & Built with ❤️ using React & Tailwind CSS
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/Samiullahsangar"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-gray-100 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:samiullahsangar29@gmail.com"
            className="hover:text-red-500 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a href="tel:+93781882212" className="hover:text-green-500 transition-colors">
            <FaPhone />
          </a>
          <a
            href="https://wa.me/93781882212"
            target="_blank"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
