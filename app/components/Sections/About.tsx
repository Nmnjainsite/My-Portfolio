"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Smartphone, Zap, Layers, Code2 } from "lucide-react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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
          <Briefcase className="text-blue-500" size={40} />
          About Me
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Experience Card */}
          <motion.div
            variants={item}
            className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award size={24} className="text-blue-500" />
              Experience
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              Frontend Developer at Visualith since December 2022. Leading the
              development of cloud-based applications serving real users with
              millions of interactions.
            </p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3 items-start">
                <span className="text-blue-500 text-xl mt-1">→</span>
                <span>
                  Built hierarchical data organization system for
                  enterprise-scale applications
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-500 text-xl mt-1">→</span>
                <span>
                  Implemented real-time log streaming via Jenkins for
                  operational efficiency
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-500 text-xl mt-1">→</span>
                <span>
                  Integrated GitHub APIs for seamless deployment acceleration
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Approach Card */}
          <motion.div
            variants={item}
            className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Smartphone size={24} className="text-blue-500" />
              Approach
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              I believe in writing clean, modular code that's maintainable and
              scalable. Every pixel matters in creating exceptional user
              experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-blue-500/10 transition-all">
                <Zap className="text-blue-500" size={24} />
                <span>Performance-focused development</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-blue-500/10 transition-all">
                <Layers className="text-blue-500" size={24} />
                <span>Modular, scalable architecture</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-blue-500/10 transition-all">
                <Code2 className="text-blue-500" size={24} />
                <span>Clean, maintainable code</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800"
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            <div>
              <p className="text-xl font-semibold">B.Sc Computer Science</p>
              <p className="text-slate-300">
                Gandhi Vocational College, Guna | Jiwaji University
              </p>
              <p className="text-sm text-slate-400">2017 - 2020</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
