"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Floating particle component
const FloatingParticle = ({
  delay,
  size,
  x,
  y,
}: {
  delay: number;
  size: number;
  x: string;
  y: string;
}) => (
  <div
    className={`absolute w-${size} h-${size} bg-gradient-to-br from-purple-400/20 to-zinc-400/20 rounded-full blur-sm animate-pulse`}
    style={{
      left: x,
      top: y,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }}
  />
);

// Clean typewriter effect component
const TypewriterText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const startDelay = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsComplete(true), 500);
        }
      }, 60); // Smooth, consistent timing

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [text, delay]);

  return (
    <span className={className}>
      <span className="opacity-100">{displayText}</span>
      <span
        className={`text-purple-400 ml-1 ${
          isComplete ? "opacity-0" : "animate-pulse"
        } transition-opacity duration-500`}
      >
        |
      </span>
    </span>
  );
};

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[92.2vh] overflow-hidden flex items-center"
      style={{ backgroundColor: "#121217" }}
    >
      {/* Dynamic background with mouse interaction - matching header theme */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(18, 18, 23, 0.4), rgba(18, 18, 23, 0.3), rgba(18, 18, 23, 0.4))",
        }}
      ></div>
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Animated geometric shapes - matching header style */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-zinc-400/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-zinc-400/5 rounded-full blur-3xl animate-pulse" />

        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            size={Math.random() > 0.5 ? 2 : 3}
            x={`${Math.random() * 100}%`}
            y={`${Math.random() * 100}%`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status indicator - matching header style */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div
                className="flex items-center gap-3 px-4 py-2 backdrop-blur-sm border rounded-full"
                style={{
                  backgroundColor: "rgba(18, 18, 23, 0.3)",
                  borderColor: "rgba(115, 115, 115, 0.5)",
                }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-stone-300">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Main headline with typewriter effect */}
          <div className="text-center mb-12">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block text-stone-300 font-light tracking-tight mb-2 font-mono">
                  Hi, I&apos;m
                </span>
                <span className="block bg-gradient-to-r from-stone-300 via-stone-200 to-stone-300 bg-clip-text text-transparent font-mono tracking-tight">
                  <TypewriterText text="Marten Mrfc" className="" delay={300} />
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-stone-300 font-light mb-8">
                <TypewriterText
                  text="Full-Stack & Plugin Developer"
                  className=""
                  delay={800}
                />
              </h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-12">
                Specialized in crafting seamless web experiences and innovative
                Minecraft plugins.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons - matching header style */}
          <div
            className={`transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-32">
              <Link
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 min-w-[220px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/contact"
                className="group relative px-8 py-4 border-2 text-stone-300 font-semibold rounded-xl hover:border-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm min-w-[220px]"
                style={{
                  borderColor: "rgb(115, 115, 115)",
                  backgroundColor: "rgba(18, 18, 23, 0.3)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let&apos;s Connect
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-zinc-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator - matching header style */}
      <div
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 delay-300 ${
          isVisible && scrollY <= 50
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center group cursor-pointer">
          <span className="text-zinc-400 text-xs mb-3 uppercase tracking-wider group-hover:text-stone-300 transition-colors">
            Discover More
          </span>
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center group-hover:border-purple-500 transition-colors"
            style={{ borderColor: "rgb(115, 115, 115)" }}
          >
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Bottom accent line - matching header */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/60 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
