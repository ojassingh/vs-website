"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../navbar";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="relative block sm:hidden">
      <button
        onClick={toggleMenu}
        className="z-50 flex h-10 w-10 flex-col items-center justify-center"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.5 w-6 rounded-sm bg-gray-600 transition-all duration-300 ease-out ${isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"}`}
        />
        <span
          className={`my-0.5 h-0.5 w-6 rounded-sm bg-gray-600 transition-all duration-300 ease-out ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`h-0.5 w-6 rounded-sm bg-gray-600 transition-all duration-300 ease-out ${isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-0 z-40 mt-2 w-40 overflow-hidden rounded-md bg-white px-4 shadow-lg"
          >
            <ul className="py-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link className="text-gray-600" href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
