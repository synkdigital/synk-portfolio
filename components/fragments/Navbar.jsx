"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SlMenu, SlClose } from "react-icons/sl";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle clicks manually to prevent default anchor jumping
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    window.history.pushState(null, "", `#${sectionId}`); // Update URL without reload
    scrollToSection(sectionId);
    setMenuOpen(false); // Close menu on click
  };

  // Handle scrolling on initial page load (if hash exists in URL)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        scrollToSection(hash.substring(1));
      }
    }
  }, []);

  return (
    <div className="fixed w-full flex items-center justify-between px-10 py-4 text-lg bg-white z-50">
      {/* Logo */}
      <div>
        <img src="synk2.png" alt="logo" className="w-[150px] h-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="lg:flex gap-20 font-bold hidden">
        <a href="#about" onClick={(e) => handleClick(e, "about")}>ABOUT</a>
        <a href="#service" onClick={(e) => handleClick(e, "service")}>SERVICE</a>
        <a href="#project" onClick={(e) => handleClick(e, "project")}>PROJECT</a>
        <a href="#testimony" onClick={(e) => handleClick(e, "testimony")}>TESTIMONY</a>
      </div>

      {/* Contact Button (Desktop) */}
      <div className="lg:flex hidden">
        <a 
          href="#contactus" 
          onClick={(e) => handleClick(e, "contactus")}
          className="bg-black px-6 py-2 text-lg font-bold rounded-full text-white"
        >
          Reach us.
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex">
        <button onClick={() => setMenuOpen(true)}>
          <SlMenu className="text-3xl" />
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div className={`fixed top-0 right-0 w-full h-full bg-white text-black flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 text-4xl" 
          onClick={() => setMenuOpen(false)}
        >
          <SlClose />
        </button>

        {/* Mobile Menu Items */}
        <nav className="flex flex-col gap-8 text-2xl font-bold items-center justify-between">
          <a href="#about" onClick={(e) => handleClick(e, "about")}>ABOUT</a>
          <a href="#service" onClick={(e) => handleClick(e, "service")}>SERVICE</a>
          <a href="#project" onClick={(e) => handleClick(e, "project")}>PROJECT</a>
          <a href="#testimony" onClick={(e) => handleClick(e, "testimony")}>TESTIMONY</a>
          <a 
            href="#contactus" 
            onClick={(e) => handleClick(e, "contactus")}
            className="bg-black text-white px-6 py-2 rounded-full"
          >
            Reach us.
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
