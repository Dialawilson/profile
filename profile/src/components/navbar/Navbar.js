"use client"; // Required for useState and interactivity

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = useParams().pathname || "/";

  const navLinks = [
    { name: "home", href: "/" },
    { name: "works", href: "/works" },
    { name: "about-me", href: "/about" },
    { name: "contacts", href: "/contacts" },
  ];

  return (
    <nav className="bg-[#282C33]  border-b border-gray-700 font-mono">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="text-md font-bold text-white flex items-center gap-2">
          <span className="text-[#C778DD]">{"</>"}</span>
          <Link href="/">WilsonDev</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="list-none">
                <span className="text-[#C778DD] font-bold">#</span>
                <Link
                  href={link.href}
                  className={`transition-colors ${isActive ? "text-white font-medium" : "text-[#ABB2BF] hover:text-white"}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </div>

        {/* Hamburger Icon */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span className={`h-0.5 w-full bg-[#ABB2BF] transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-full bg-[#ABB2BF] transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-[#ABB2BF] transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#282C33] z-40 flex flex-col items-start px-8 pt-24 gap-8 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.name} className="list-none text-3xl">
            <span className="text-[#C778DD] font-bold">#</span>
            <Link
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-[#ABB2BF] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;