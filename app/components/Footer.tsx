'use client';

import { Github, Linkedin, Mail, ArrowUp, Code2, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  isDark: boolean;
}

export default function Footer({ setCurrentPage, isDark }: FooterProps) {
  const navigation = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Nmnjainsite', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/naman-jain-97382b231/', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Mail, link: 'mailto:jnaman475@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('home');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer
      className={`relative z-10 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-900/30 to-slate-950 border-t border-slate-800' 
          : 'bg-gradient-to-b from-slate-50/30 to-white border-t border-slate-200'
      }`}
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10 ${
          isDark ? 'bg-blue-600/5' : 'bg-blue-400/5'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -z-10 ${
          isDark ? 'bg-cyan-600/5' : 'bg-cyan-400/5'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentPage('home')}
                className="inline-block cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mb-4 hover:shadow-lg transition-shadow`}>
                  NJ
                </div>
              </motion.div>
              <p className="text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                Naman Jain
              </p>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Frontend Developer & Creative Coder
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Three.js'].map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => setCurrentPage(item.id)}
                    className={`text-sm transition-all duration-300 ${
                      isDark
                        ? 'text-slate-400 hover:text-blue-400'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    → {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'GitHub', link: 'https://github.com/Nmnjainsite' },
                { label: 'LinkedIn', link: 'https://www.linkedin.com/in/naman-jain-97382b231/' },
                { label: 'Resume', link: 'https://drive.google.com/file/d/1RDbI5Y1uMsghKvAutXZRFvgcBr2puzkM/view?usp=sharing' },
                { label: 'Contact', link: 'mailto:jnaman475@gmail.com' },
              ].map((item) => (
                <li key={item.label}>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm transition-all duration-300 ${
                      isDark
                        ? 'text-slate-400 hover:text-blue-400'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    → {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              isDark ? 'text-slate-200' : 'text-slate-900'
            }`}>
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ icon: Icon, link, label, color }) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isDark
                      ? `bg-slate-800/50 border border-slate-700 hover:border-blue-500 ${color}`
                      : `bg-slate-100 border border-slate-300 hover:border-blue-500 ${color}`
                  }`}
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className={`text-xs space-y-2 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              <div className="flex items-center gap-2">
                <Code2 size={14} className="text-blue-500" />
                <span>2.5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-yellow-500" />
                <span>6+ Projects Delivered</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`h-px mb-8 origin-left ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center sm:text-left order-2 sm:order-1">
            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              © 2025 Naman Jain. All rights reserved.
            </p>
            <p className={`text-xs mt-1 flex items-center justify-center sm:justify-start gap-1 ${isDark ? 'text-slate-600' : 'text-slate-700'}`}>
              Built with <Heart size={12} className="text-red-500 fill-red-500" /> using{' '}
              <span className="text-blue-400">Next.js</span> •{' '}
              <span className="text-cyan-400">TypeScript</span> •{' '}
              <span className="text-purple-400">Three.js</span> •{' '}
              <span className="text-green-400">Tailwind</span>
            </p>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div variants={itemVariants} className="flex gap-3 order-3 sm:order-2">
            {[
              { label: 'Next.js', icon: '▲', color: 'text-black dark:text-white' },
              { label: 'TypeScript', icon: 'TS', color: 'text-blue-600' },
              { label: 'Three.js', icon: '3D', color: 'text-purple-600' },
              { label: 'Tailwind', icon: 'TW', color: 'text-cyan-500' },
            ].map(({ label, icon, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                  isDark
                    ? `bg-slate-800 border border-slate-700 ${color}`
                    : `bg-slate-100 border border-slate-300 ${color}`
                }`}
                title={label}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className={`p-3 rounded-lg transition-all order-1 sm:order-3 ${
              isDark
                ? 'bg-gradient-to-br from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50 text-white'
                : 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-400/50 text-white'
            }`}
            title="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-blue-500/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-cyan-500/20 animate-pulse"></div>
      </div>
    </footer>
  );
}