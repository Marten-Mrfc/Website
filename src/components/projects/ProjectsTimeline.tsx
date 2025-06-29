"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { projectsData, Project } from "@/data/projects";

// Floating particle component (reused from HeroSection)
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

// Project card component
const ProjectCard = ({ 
  project, 
  index, 
  isVisible 
}: { 
  project: Project; 
  index: number; 
  isVisible: boolean;
}) => {
  const isEven = index % 2 === 0;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'planned':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        );
      case 'plugin':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'tool':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'game':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline connector */}
      <div className={`absolute top-8 ${isEven ? 'right-1/2 mr-4' : 'left-1/2 ml-4'} w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-4 border-zinc-900 z-10`} />
      
      {/* Project card */}
      <div className={`${isEven ? 'pr-8 mr-4' : 'pl-8 ml-4'} pb-12`}>
        <div
          className={`relative backdrop-blur-sm border rounded-xl p-6 group hover:border-purple-500/50 transition-all duration-300 ${
            isEven ? 'ml-auto' : 'mr-auto'
          } max-w-lg`}
          style={{
            backgroundColor: "rgba(18, 18, 23, 0.4)",
            borderColor: "rgba(115, 115, 115, 0.3)",
          }}
        >
          {/* Project header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                {getCategoryIcon(project.category)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 font-mono">{project.date}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ')}
            </span>
          </div>

          {/* Project description */}
          <p className="text-stone-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-xs font-medium border border-zinc-600/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-stone-300 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-zinc-400 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Project links */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-700/50 hover:bg-zinc-600/50 text-stone-300 hover:text-white rounded-lg transition-all duration-300 border border-zinc-600/30 hover:border-purple-500/50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </Link>
            )}
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-zinc-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default function ProjectsTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState<string>('all');
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
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

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section
      ref={timelineRef}
      className="relative min-h-screen py-20"
      style={{ backgroundColor: "#121217" }}
    >
      {/* Dynamic background with mouse interaction */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-zinc-400/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />

        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.3}
            size={Math.random() > 0.5 ? 2 : 3}
            x={`${Math.random() * 100}%`}
            y={`${Math.random() * 100}%`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-stone-300 via-stone-200 to-stone-300 bg-clip-text text-transparent font-mono tracking-tight">
              My Projects
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              A timeline of my development journey, from web applications to Minecraft plugins
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {['all', 'web', 'plugin', 'tool', 'game'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                filter === category
                  ? 'bg-purple-600 text-white border-purple-500'
                  : 'text-stone-300 hover:text-white border-zinc-600/30 hover:border-purple-500/50'
              }`}
              style={{
                backgroundColor: filter === category ? undefined : "rgba(18, 18, 23, 0.3)",
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {category === 'all' && (
                <span className="ml-2 text-xs bg-zinc-600/50 px-2 py-1 rounded-full">
                  {projectsData.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 opacity-30"
            style={{ height: `${filteredProjects.length * 300}px` }}
          />

          {/* Projects */}
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-block backdrop-blur-sm border rounded-xl p-8"
            style={{
              backgroundColor: "rgba(18, 18, 23, 0.4)",
              borderColor: "rgba(115, 115, 115, 0.3)",
            }}
          >
            <h3 className="text-2xl font-bold text-stone-200 mb-4">
              Interested in working together?
            </h3>
            <p className="text-zinc-300 mb-6 max-w-md mx-auto">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
