// app/components/Sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Building2, User } from "lucide-react";

const professionalProjects = [
  {
    id: 1,
    title: "Lumniverse",
    description:
      "Enterprise collaborative workspace management platform with advanced team features and real-time collaboration.",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Framer Motion",
      "Nivo Charts",
      "SCSS",
    ],
    highlights: [
      "Workspace Creation & Management",
      "Team Collaboration Features",
      "Tag-based Project Connectivity",
      "Advanced Data Visualization",
    ],
    link: "https://www.lumniverse.com/",
    color: "from-purple-500 to-pink-500",
    icon: "💼",
    category: "SaaS Platform",
  },
  {
    id: 2,
    title: "Visualith",
    description:
      "Enterprise cloud deployment platform with real-time monitoring, hierarchical data organization, and CI/CD integration.",
    tech: [
      "React",
      "Redux Toolkit",
      "Jenkins",
      "AWS",
      "Kubernetes",
      "Material UI",
    ],
    highlights: [
      "Data Flow Architecture Design",
      "Real-time Log Streaming",
      "GitHub & Jenkins Integration",
      "Cloud Infrastructure Management",
    ],
    link: "https://www.visualith.com/",
    color: "from-blue-500 to-cyan-500",
    icon: "☁️",
    category: "Cloud Platform",
  },
  {
    id: 3,
    title: "Trainkore.ai",
    description:
      "AI-powered prompt management platform with sophisticated data visualization and content management capabilities.",
    tech: [
      "Next.js",
      "TypeScript",
      "Storybook",
      "Content Stack",
      "RC Table",
      "Data Visualization",
    ],
    highlights: [
      "AI Prompt Management System",
      "Advanced Data Visualization",
      "Headless CMS Integration",
      "Interactive Charts & Tables",
    ],
    link: "https://www.trainkore.com/",
    color: "from-pink-500 to-rose-500",
    icon: "🤖",
    category: "AI Platform",
  }
];

const personalProjects = [
  {
    id: 5,
    title: "Funky Feet",
    description:
      "Full-featured e-commerce platform for shoes with advanced filtering, cart management, and responsive design. Complete UI/UX designed from scratch.",
    tech: [
      "React",
      "Context API",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Custom UI",
    ],
    highlights: [
      "Advanced Filter System (Men/Women/Kids)",
      "Sorting & Search Functionality",
      "Add to Cart & Wishlist Features",
      "Discount Filter & Single Product Page",
      "100% Custom UI Design",
      "Fully Responsive Layout",
    ],
    link: "https://funky-feet.vercel.app/",
    github: "https://github.com/yourusername/funky-feet", // Add your GitHub link
    color: "from-orange-500 to-red-500",
    icon: "👟",
    category: "E-Commerce",
    featured: true,
  },
  {
    id: 6,
    title: "MediaCafe",
    description:
      "Full-stack video streaming platform with user authentication, playlist management, and interactive comment system.",
    tech: [
      "React",
      "Redux Toolkit",
      "Material UI",
      "Firebase",
      "Authentication",
    ],
    highlights: [
      "User Authentication & Authorization",
      "Custom Playlist Management",
      "Comment & Like System",
      "Video Library Organization",
    ],
    link: "https://media-cafe.vercel.app/",
    color: "from-purple-500 to-indigo-500",
    icon: "🎬",
    category: "Media Platform",
  },
  {
    id: 7,
    title: "Treasure",
    description:
      "Feature-rich social media platform with post creation, real-time interactions, and user profile management.",
    tech: [
      "React",
      "Redux Toolkit",
      "Material UI",
      "Firebase",
      "Real-time DB",
    ],
    highlights: [
      "Post Creation & Management",
      "User Profile System",
      "Comment & Interaction Features",
      "Real-time Updates",
    ],
    link: "https://treasure-bay.vercel.app/",
    color: "from-green-500 to-emerald-500",
    icon: "💎",
    category: "Social Media",
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const ProjectCard = ({ project, isProfessional }: any) => (
    <motion.div
      variants={item}
      className="group bg-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
    >
      {/* Project Header */}
      <div
        className={`h-48 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity relative overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
            {project.icon}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full text-xs font-bold text-black animate-pulse">
              ⭐ Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <ExternalLink className="text-white" size={32} />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          {isProfessional ? (
            <Building2 className="text-blue-400 flex-shrink-0" size={20} />
          ) : (
            <User className="text-purple-400 flex-shrink-0" size={20} />
          )}
        </div>

        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">
            ✨ Key Features
          </p>
          <ul className="space-y-2">
            {project.highlights.map((highlight: string, i: number) => (
              <li
                key={i}
                className="text-sm text-slate-300 flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-purple-400 mb-3 uppercase tracking-wider">
            🛠️ Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 hover:border-blue-400/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all group/link transform hover:scale-105"
          >
            View Live
            <ExternalLink
              size={16}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Code2 size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 flex items-center gap-4">
            <Code2 className="text-blue-500" size={48} />
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg ml-16">
            A showcase of professional work and personal creations
          </p>
        </motion.div>

        {/* Professional Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="text-blue-400" size={32} />
            <h3 className="text-3xl font-bold">Professional Projects</h3>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
              Company Delivered
            </span>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {professionalProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isProfessional={true}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="text-purple-400" size={32} />
            <h3 className="text-3xl font-bold">Personal Projects</h3>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold">
              Side Projects
            </span>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {personalProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isProfessional={false}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">
              {professionalProjects.length}
            </div>
            <div className="text-slate-400 text-sm">
              Professional Projects
            </div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">
              {personalProjects.length}
            </div>
            <div className="text-slate-400 text-sm">Personal Projects</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">
              {[...professionalProjects, ...personalProjects].length}
            </div>
            <div className="text-slate-400 text-sm">Total Projects</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-slate-400 text-sm">Technologies Used</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}