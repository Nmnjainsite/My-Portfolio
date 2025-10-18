"use client";

import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf"; // References file in public folder
    link.download = "Naman Jain 2.5+ Years Frontend Dev.pdf"; // Name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-8 inline-block">
          <span className="px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-sm font-medium text-slate-300 animate-pulse">
            ✨ Welcome to my digital space
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={item}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Naman Jain
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={item} className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-2">
            Frontend Developer
          </h2>
          <p className="text-lg text-slate-300">
            Building beautiful web experiences with React & Next.js
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          2.5+ years of experience crafting production-level web applications.
          Specialized in React, Next.js, TypeScript, and creating stunning user
          interfaces with modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={() => setCurrentPage("projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform shadow-lg hover:shadow-xl"
          >
            View My Work <ArrowRight size={20} />
          </motion.button>

          <motion.button
            onClick={handleCVDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 text-blue-400 hover:text-white hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform shadow-lg hover:shadow-xl"
            title="Click to download CV (Shift+Click to preview)"
          >
            <Download size={20} />
            Download CV
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="flex justify-center gap-6 mb-12">
          {[
            {
              icon: Github,
              link: "https://github.com/Nmnjainsite",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              link: "https://www.linkedin.com/in/naman-jain-97382b231/",
              label: "LinkedIn",
            },
            { icon: Mail, link: "mailto:jnaman475@gmail.com", label: "Email" },
          ].map(({ icon: Icon, link, label }) => (
            <motion.a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-all"
              title={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={item}
          className="flex justify-center animate-bounce mt-12"
        >
          <ChevronDown size={32} className="text-blue-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
