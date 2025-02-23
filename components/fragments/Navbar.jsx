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
      <div className="md:flex gap-12 font-bold hidden">
        <a href="#about" onClick={(e) => handleClick(e, "about")} className="flex flex-col group items-start justify-center">
          ABOUT
          <span className="h-1 w-0 bg-purple-600 group-hover:w-full transition-all ease-in-out duration-300"></span>
        </a>
        <a href="#service" onClick={(e) => handleClick(e, "service")} className="flex flex-col group items-start justify-center">
          SERVICE
          <span className="h-1 w-0 bg-purple-600 group-hover:w-full transition-all ease-in-out duration-300"></span>
        </a>
        <a href="#project" onClick={(e) => handleClick(e, "project")} className="flex flex-col group items-start justify-center">
          PROJECT
          <span className="h-1 w-0 bg-purple-600 group-hover:w-full transition-all ease-in-out duration-300"></span>
        </a>
        <a href="#testimony" onClick={(e) => handleClick(e, "testimony")} className="flex flex-col group items-start justify-center">
          TESTIMONY
          <span className="h-1 w-0 bg-purple-600 group-hover:w-full transition-all ease-in-out duration-300"></span>
        </a>
      </div>

      {/* Contact Button (Desktop) */}
      <div className="md:flex hidden group">
        <a 
          href="#contactus" 
          onClick={(e) => handleClick(e, "contactus")}
          className="text-lg font-bold rounded-full text-black uppercase w-32 flex h-[50px] items-center justify-center group-hover:text-white transition-all ease-in-out duration-700"
        >
          <span className="z-20">Reach us.</span>
          <span className="bg-purple-600 group-hover:w-32 group-hover:h-[50px] w-0 group-hover:rotate-180 rounded-full absolute z-10 transition-all ease-in-out duration-700"></span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex">
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
