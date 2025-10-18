"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend Frameworks",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
    icon: "⚛️",
  },
  {
    category: "Styling & Animation",
    items: ["Tailwind CSS", "SCSS", "Framer Motion", "Material UI"],
    icon: "🎨",
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "React Hooks", "Context API"],
    icon: "🔄",
  },
  {
    category: "APIs & Services",
    items: ["GitHub API", "Jenkins", "Firebase", "AWS"],
    icon: "🔌",
  },
  {
    category: "3D & Graphics",
    items: ["Three.js", "WebGL", "Canvas", "Nivo Charts"],
    icon: "🎲",
  },
  {
    category: "Design & Tools",
    items: ["Figma", "Storybook", "Responsive Design", "CMS"],
    icon: "🛠️",
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <Zap className="text-blue-500" size={40} />
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{skillGroup.icon}</div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-lg text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-blue-600/30 transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold mb-4">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-300 mb-4">
                With 2.5+ years of professional experience, I've mastered modern
                frontend technologies and best practices. I'm proficient in
                building scalable, maintainable applications using
                industry-leading frameworks and tools.
              </p>
            </div>
            <div>
              <p className="text-slate-300 mb-4">
                I stay updated with the latest trends in web development and
                continuously expand my skill set. My expertise spans from UI/UX
                implementation to complex state management and performance
                optimization.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
