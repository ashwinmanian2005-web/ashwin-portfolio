/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, Mail, Phone, ChevronRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Hobbies", href: "#interests" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#020617]/75 backdrop-blur-md border-b border-[#334155]/20 py-3 shadow-lg" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Brand */}
        <a 
          href="#" 
          className="flex items-center gap-2 group font-display font-bold text-lg text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:border-blue-400/60 transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent">
            ashwin<span className="text-blue-500 font-mono font-normal">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-sans font-medium text-slate-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Contact button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="flex items-center gap-1.5 px-4  py-2 rounded-lg text-xs font-mono font-medium border border-blue-500/30 bg-blue-500/5 hover:bg-blue-600/20 hover:border-blue-400 text-blue-300 hover:text-white transition-all shadow-md active:scale-95 duration-200"
          >
            Quick Connect
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 bg-blue-950/30 border border-[#334155]/40 text-gray-300 rounded-lg hover:text-white active:scale-95 transition"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 w-full h-[calc(100vh-56px)] bg-[#020617]/95 backdrop-blur-lg border-t border-[#334155]/20 py-6 px-6 z-40 flex flex-col justify-between animate-fade-in">
          <div className="space-y-6">
            <span className="text-[10px] uppercase font-mono tracking-wider text-blue-400">Navigation</span>
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-display font-medium text-gray-200 hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Info contacts at the bottom of panel */}
          <div className="border-t border-blue-900/30 pt-6 space-y-3 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>ashwinmanian2005@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+91 6383261631</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
