import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Courses", path: "/courses" }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-[#0f0f1a] text-white px-6 py-4 shadow-lg flex justify-between items-center relative z-50">
      <h1 className="text-2xl font-semibold tracking-tight text-cyan-400 font-mono">
        victor.dev
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative text-sm transition-all px-4 py-1 rounded-full ${
                isActive
                  ? "bg-cyan-600 text-white"
                  : "hover:bg-cyan-700/30 text-cyan-300"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50" onClick={toggleMenu}>
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-[#0f0f1a] flex flex-col gap-4 px-6 py-6 md:hidden border-t border-cyan-800"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
