"use client";

import { cn } from '@/app/utils/cn';
import { fontGroup } from '@/app/utils/font-wrapper';
import { useEffect, useState } from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Data dummy projects - sesuaikan dengan project Overdrive Protocol
const projects = [
  {
    id: 1,
    title: "Prometheus",
    description: "Overdrive's fundamental AI.",
    images: [
      "/projects/core-1.jpg",
      "/projects/core-2.jpg",
      "/projects/core-3.jpg",
    ],
    tags: ["AI"]
  },
  {
    id: 2,
    title: "Atlas",
    description: "Self propelled AI Cyber Security system.",
    images: [
      "/projects/neural-1.jpg",
      "/projects/neural-2.jpg",
      "/projects/neural-3.jpg",
    ],
    tags: ["AI", "Cybersecurity", "Hacking"]
  },
  {
    id: 3,
    title: "Hydra",
    description: "Final form of Atlas",
    images: [
      "/projects/darkpool-1.jpg",
      "/projects/darkpool-2.jpg",
      "/projects/darkpool-3.jpg",
    ],
    tags: ["AI", "Secret", "Cybersecurity", "Hacking"]
  },
  {
    id: 4,
    title: "COMING SOON",
    description: "-",
    images: [
      "/projects/quantum-1.jpg",
      "/projects/quantum-2.jpg",
      "/projects/quantum-3.jpg",
      "/projects/quantum-4.jpg",

    ],
    tags: ["-", "-", "-"]
  }
];

export function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle keyboard events
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay dengan glow merah */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Modal Container - Tema merah & hitam */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-xl bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 shadow-2xl z-10">
        
        {/* Header dengan efek merah */}
        <div className="flex justify-between items-center p-6 border-b border-red-900/50 bg-gradient-to-r from-black to-red-950/20">
          <div>
            <h2 className={cn(fontGroup.kodeMono('Bold'), "text-3xl bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent")}>
              PROJECT GALLERY
            </h2>
            <p className={cn(fontGroup.kodeMono('Medium'), "text-gray-300 mt-1")}>
              EMPIRE OVERDRIVE PROTOCOLS
            </p>
          </div>
          <button
            onClick={onClose}
            className={cn(
              fontGroup.kodeMono('Medium'),
              "text-2xl text-gray-400 hover:text-red-400 transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-950/30 border border-red-900/30"
            )}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(90vh-5rem)]">
          {/* Project List Sidebar - Tema dark red */}
          <div className="lg:w-1/3 border-r border-red-900/30 overflow-y-auto bg-black/50 p-6">
            <h3 className={cn(fontGroup.kodeMono('SemiBold'), "text-xl text-red-400 mb-4")}>
              ACTIVE PROJECTS
            </h3>
            <div className="space-y-3">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  className={cn(
                    fontGroup.kodeMono('Medium'),
                    "w-full text-left p-4 rounded-lg transition-all duration-300",
                    selectedProject.id === project.id
                      ? "bg-gradient-to-r from-red-900/40 to-red-950/40 border-2 border-red-700/50 shadow-lg shadow-red-900/20"
                      : "bg-gray-900/30 hover:bg-gray-800/50 border border-red-900/30 hover:border-red-700/50"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white text-lg">{project.title}</h4>
                      <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className={cn(
                      "px-2 py-1 text-xs rounded",
                      selectedProject.id === project.id 
                        ? "bg-red-700 text-white" 
                        : "bg-gray-800 text-gray-300"
                    )}>
                      #{project.id}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-red-950/50 border border-red-900/50 rounded text-red-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Status Bar */}
            <div className="mt-8 p-4 bg-black/50 rounded-lg border border-red-900/30">
              <div className="flex justify-between items-center mb-2">
                <span className={cn(fontGroup.kodeMono('Medium'), "text-red-400 text-sm")}>
                  SYSTEM STATUS
                </span>
                <span className={cn(fontGroup.kodeMono('Bold'), "text-green-500 text-sm")}>
                  ● OPERATIONAL
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-600 to-red-400 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Main Gallery - Tema dark dengan aksen merah */}
          <div className="lg:w-2/3 p-6 flex flex-col bg-gradient-to-b from-black to-gray-900">
            {/* Project Title dengan efek neon */}
            <div className="mb-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent blur opacity-20"></div>
              <h3 className={cn(fontGroup.postNoBills, "text-4xl text-white mb-2 relative")}>
                {selectedProject.title}
              </h3>
              <p className={cn(fontGroup.kodeMono('Medium'), "text-gray-300")}>
                {selectedProject.description}
              </p>
            </div>

            {/* Main Image Display dengan frame merah */}
            <div className="relative flex-1 rounded-lg overflow-hidden border-2 border-red-900/50 bg-black">
              <div className="relative w-full h-full">
                {/* Main Image Display */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
                  {/* Grid pattern background */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(to right, #dc2626 1px, transparent 1px),
                                     linear-gradient(to bottom, #dc2626 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  <div className="text-center relative z-10">
                    <div className={cn(fontGroup.postNoBills, "text-6xl text-red-900/30 mb-4")}>
                      {selectedProject.title.split(' ')[0]}
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className={cn(fontGroup.kodeMono('Bold'), "text-red-500 text-lg")}>
                        PROTOTYPE {selectedProject.id}
                      </div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <div className={cn(fontGroup.kodeMono('Medium'), "text-gray-500")}>
                        IMAGE {currentImageIndex + 1}/{selectedProject.images.length}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Buttons - Styled merah */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-red-900/80 border border-red-700/50 rounded-full flex items-center justify-center text-red-400 hover:text-white text-2xl transition-all hover:scale-110"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-red-900/80 border border-red-700/50 rounded-full flex items-center justify-center text-red-400 hover:text-white text-2xl transition-all hover:scale-110"
                >
                  ›
                </button>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-red-500"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-red-500"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-red-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-red-500"></div>
              </div>
            </div>

            {/* Image Thumbnails dengan tema merah */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {selectedProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={cn(
                    "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 relative group",
                    currentImageIndex === idx
                      ? "border-red-500 shadow-lg shadow-red-900/50 scale-105"
                      : "border-red-900/50 hover:border-red-600"
                  )}
                >
                  <div className="w-full h-full bg-gradient-to-br from-red-950/50 to-black flex items-center justify-center">
                    {/* Index number */}
                    <span className={cn(
                      fontGroup.kodeMono('Bold'),
                      currentImageIndex === idx 
                        ? "text-red-400" 
                        : "text-red-900 group-hover:text-red-700",
                      "text-lg"
                    )}>
                      {idx + 1}
                    </span>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors"></div>
                    
                    {/* Active indicator */}
                    {currentImageIndex === idx && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Controls */}
            <div className="mt-6 flex justify-between items-center border-t border-red-900/30 pt-4">
              <div className="flex items-center space-x-4">
                <span className={cn(fontGroup.kodeMono('Medium'), "text-gray-400")}>
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </span>
                <div className="flex space-x-2">
                  {selectedProject.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-red-950/50 border border-red-900/50 rounded text-red-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    // Logic untuk melihat detail lebih lanjut
                    window.open(`/projects/${selectedProject.id}`, '_blank');
                  }}
                  className={cn(
                    fontGroup.kodeMono('SemiBold'),
                    "px-6 py-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
                  )}
                >
                  ACCESS PROTOCOL
                </button>
                
                <button
                  onClick={onClose}
                  className={cn(
                    fontGroup.kodeMono('Medium'),
                    "px-4 py-2 bg-transparent border border-red-900/50 hover:border-red-700 text-gray-300 hover:text-white rounded-lg transition-all"
                  )}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}