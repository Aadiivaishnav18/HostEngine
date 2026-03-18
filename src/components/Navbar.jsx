import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout, getInitials } = useAuth();
  const location = useLocation();
  const menuRef = useRef(null);

  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsMobileOpen(false), [location]);

  const navLinks = [
    { name: "Pricing", path: "/pricing" },
    { name: "Features", path: "/features" },
    { name: "Domains", path: "/domains" },
    { name: "Support", path: "/support" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-xl">H</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Host<span className="text-blue-600">Engine</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(link.path) ? "text-blue-600" : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {user ? (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsUserOpen(!isUserOpen)}
                  className="flex items-center gap-2 p-1 pr-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    {getInitials(user.email)}
                  </div>
                  <ChevronDown size={14} className={`transition-transform ${isUserOpen ? 'rotate-180' : ''}`} />
                </button>

                {isUserOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden py-1">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-xs text-slate-500">Signed in as</p>
                      <p className="text-sm font-medium truncate">{user.email}</p>
                    </div>
                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      <LayoutDashboard size={16} /> Dashboard
                    </Link>
                    <button onClick={logout} className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10">
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link to="/login" className="text-sm font-medium px-4 py-2 hover:text-blue-600 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="text-sm font-medium px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  Join Free
                </Link>
              </div>
            )}

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-400"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-slate-950 border-b transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
        <div className="flex flex-col gap-4 px-6 font-medium">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-lg py-2 border-b border-slate-100 dark:border-slate-900">
              {link.name}
            </Link>
          ))}
          {!user && (
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login" className="w-full text-center py-3 border rounded-xl">Login</Link>
              <Link to="/register" className="w-full text-center py-3 bg-blue-600 text-white rounded-xl font-bold">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}