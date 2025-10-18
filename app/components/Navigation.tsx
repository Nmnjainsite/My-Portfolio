"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavigationProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({
  isDark,
  setIsDark,
  currentPage,
  setCurrentPage,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 w-full ${
        isDark ? "bg-slate-950/90" : "bg-white/90"
      } backdrop-blur-md z-50 border-b ${
        isDark ? "border-slate-800" : "border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("home")}
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          NJ
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                currentPage === item.id
                  ? "bg-blue-600 text-white"
                  : isDark
                  ? "text-slate-300 hover:bg-blue-500/10"
                  : "text-slate-600 hover:bg-blue-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg transition-all ${
              isDark
                ? "bg-slate-900/80 border border-slate-800 hover:border-blue-500"
                : "bg-slate-50 border border-slate-200 hover:border-blue-500"
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t ${
            isDark
              ? "border-slate-800 bg-slate-900/80"
              : "border-slate-200 bg-slate-50"
          } backdrop-blur-md`}
        >
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all font-medium ${
                  currentPage === item.id
                    ? "bg-blue-600 text-white"
                    : isDark
                    ? "text-slate-300 hover:bg-blue-500/10"
                    : "text-slate-600 hover:bg-blue-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
