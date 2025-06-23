"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="relative bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 z-50 overflow-visible"
    >
      {/* Animated background elements - zinc and purple theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/30 via-zinc-700/20 to-zinc-800/30 animate-pulse overflow-hidden"></div>
      <div className="absolute top-2 right-2 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-2 left-2 w-20 h-20 bg-zinc-400/10 rounded-full blur-xl animate-pulse"></div>

      {/* Glass morphism overlay - zinc theme */}
      <div className="relative backdrop-blur-sm bg-zinc-800/30 border-b border-zinc-700/50">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo/Name with zinc and stone styling */}
            <div className="relative group">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-stone-300 via-stone-200 to-stone-300 bg-clip-text text-transparent font-mono tracking-tight">
                Marten Mrfc
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-stone-300 hover:text-white transition-colors duration-300 group px-3 py-2 rounded-lg hover:bg-zinc-700/40 backdrop-blur-sm"
                >
                  <span className="relative z-10 font-medium">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-500 group-hover:w-full transition-[width] duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-stone-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-zinc-700/40 relative z-50"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-current block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-current block transition-opacity duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-current block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - zinc and purple theme */}
      <div
        className={`md:hidden fixed left-0 w-full bg-gradient-to-b from-zinc-900/95 to-zinc-800/95 backdrop-blur-lg border-b border-zinc-700/50 transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ top: `${headerHeight}px` }}
      >
        <nav className="container mx-auto px-6 py-4 space-y-2 max-w-7xl">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-stone-300 hover:text-white transition-all duration-300 px-4 py-3 rounded-lg hover:bg-zinc-700/40 backdrop-blur-sm border border-transparent hover:border-purple-500/30 transform relative group ${
                isMenuOpen ? "translate-x-0" : "translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="font-medium relative z-10">{item.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </nav>
      </div>

      <div className="relative h-1 bg-stone-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/60 to-transparent animate-pulse"></div>
      </div>
    </header>
  );
}
