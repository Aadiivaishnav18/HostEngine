import React from "react";
import { Github, Twitter, Linkedin, Moon, Sun, Globe } from "lucide-react";
// Ensure this path is correct based on your folder structure
import { useTheme } from "../context/ThemeContext";

// 1. Move helper components to the top or outside the main export
const SocialIcon = ({ icon }) => (
  <a 
    href="#" 
    className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all"
  >
    {icon}
  </a>
);

export default function Footer() {
  // Use a fallback to prevent "cannot destructure property" errors if context is missing
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const toggleTheme = themeContext?.toggleTheme || (() => {});

  const sections = [
    {
      title: "Hosting",
      links: ["Shared Hosting", "VPS Hosting", "Cloud Hosting", "Dedicated Servers"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Newsroom"],
    },
    {
      title: "Resources",
      links: ["Help Center", "API Docs", "Community", "Status Page"],
    },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800/50 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Host<span className="text-blue-500">Engine</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Next-generation cloud hosting infrastructure built for speed, 
              security, and global scale.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Dynamic Links */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-blue-400 transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Theme/Settings Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Preferences
            </h3>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-blue-500/50 px-4 py-2 rounded-full transition-all group"
            >
              {theme === "dark" ? (
                <React.Fragment>
                  <Sun size={16} className="group-hover:text-yellow-400" /> 
                  <span className="text-sm">Light</span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Moon size={16} className="group-hover:text-blue-400" /> 
                  <span className="text-sm">Dark</span>
                </React.Fragment>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 HostEngine Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}