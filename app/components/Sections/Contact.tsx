"use client";

import { motion } from "framer-motion";
import { Mail, Smartphone, Github, Linkedin } from "lucide-react";

export default function Contact() {
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
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-5xl font-bold mb-8">
            Let's Work Together
          </motion.h2>
          <motion.p variants={item} className="text-2xl text-slate-300">
            Interested in collaborating? I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={item}
            className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-300">Email</p>
                <a
                  href="mailto:jnaman475@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  jnaman475@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Smartphone size={24} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-300">Phone</p>
                <a
                  href="tel:9893663203"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 9893663203
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:jnaman475@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-center"
          >
            Send me an email
          </a>
          <a
            href="https://www.linkedin.com/in/naman-jain-97382b231/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all text-center"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          {[
            { icon: Github, link: "https://github.com/Nmnjainsite", label: "GitHub" },
            { icon: Linkedin, link: "https://www.linkedin.com/in/naman-jain-97382b231/", label: "LinkedIn" },
            { icon: Mail, link: "mailto:jnaman475@gmail.com", label: "Email" },
          ].map(({ icon: Icon, link, label }) => (
            <motion.a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-blue-500 hover:text-blue-500 transition-all"
              title={label}
            >
              <Icon size={32} />
            </motion.a>
          ))}
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-300 italic">
            "Great things are never done by one person alone. Let's create
            something amazing together!"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
