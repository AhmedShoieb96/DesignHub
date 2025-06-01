import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import './TwoDDesign.css';

const TwoDDesign = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock data for 2D design projects
  const projects = [
    {
      id: 1,
      title: "Sofra Restaurant Branding",
      thumbnail: "/src/assets/images/sofra.jpg", // Main image
      images: [
        "/src/assets/images/sofra.jpg",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
      ],
      colorPalette: ["#379db6", "#3abf95", "#2c3e50", "#f39c12"],
      tags: ["Logo Design", "Menu Design", "Brand Guidelines", "Print Materials"]
    },
    {
      id: 2,
      title: "Modern Corporate Identity",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop"
      ],
      colorPalette: ["#379db6", "#3abf95", "#e74c3c", "#9b59b6"],
      tags: ["Corporate Design", "Digital Assets", "Stationery", "Brand Guidelines"]
    },
    {
      id: 3,
      title: "Creative Poster Series",
      thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      colorPalette: ["#3abf95", "#379db6", "#f39c12", "#e74c3c"],
      tags: ["Poster Design", "Typography", "Art Direction", "Print Production"]
    },
    {
      id: 4,
      title: "Digital Marketing Campaign",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop"
      ],
      colorPalette: ["#e74c3c", "#3abf95", "#379db6", "#f39c12"],
      tags: ["Social Media", "Banner Design", "Email Templates", "Digital Assets"]
    },
    {
      id: 5,
      title: "Magazine Layout Design",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&h=600&fit=crop"
      ],
      colorPalette: ["#9b59b6", "#3abf95", "#379db6", "#2c3e50"],
      tags: ["Layout Design", "Typography", "Editorial", "Print Production"]
    },
    {
      id: 6,
      title: "Packaging Design Series",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop"
      ],
      colorPalette: ["#f39c12", "#e74c3c", "#3abf95", "#379db6"],
      tags: ["Packaging", "Product Design", "3D Mockups", "Brand Identity"]
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(prev =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(prev =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="internal-design-2d">
      {/* Header Section */}
      <div className="design-header">
        <h1 className="design-title">2D Design Portfolio</h1>
        <p className="design-subtitle">
          Creating compelling visual narratives through innovative design solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map(project => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openProject(project)}
            >
              {/* Image Container */}
              <div className="card-image-container">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="card-image"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop";
                  }}
                />

                {/* Overlay */}
                <div className="card-overlay">
                  <div className="overlay-content">
                    <Eye className="overlay-icon" />
                    <span className="overlay-text">View Project</span>
                  </div>
                </div>

                
              </div>

              {/* Card Content */}
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="gallery-modal" onClick={closeProject}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-subtitle">
                  <span>{selectedProject.category}</span>
                </div>
              </div>
              <button onClick={closeProject} className="close-btn">
                <X className="close-icon" />
              </button>
            </div>

            {/* Image Display */}
            <div className="image-display">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="main-image"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop";
                }}
              />

              {/* Navigation Buttons */}
              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="nav-btn nav-prev">
                    <ChevronLeft className="nav-icon" />
                  </button>
                  <button onClick={nextImage} className="nav-btn nav-next">
                    <ChevronRight className="nav-icon" />
                  </button>

                  {/* Image Counter */}
                  <div className="image-counter">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {selectedProject.images.length > 1 && (
              <div className="thumbnail-strip">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`thumbnail-btn ${index === currentImageIndex ? 'active' : ''}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="thumbnail-image"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=100&fit=crop";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TwoDDesign;