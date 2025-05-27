import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Calendar, Tag, Play, Maximize, Download } from 'lucide-react';
import './ThreeDDesign.css';

const ThreeDDesign = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // 3D Design specific project data
  const projects = [
    {
      id: 1,
      title: "Architectural Visualization - Modern Villa",
      category: "architectural",
      year: "2024",
      client: "Private Client",
      software: ["3ds Max", "V-Ray", "Photoshop"],
      description: "Photorealistic 3D visualization of a contemporary villa with advanced lighting and material rendering",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop"
      ],
      isVideo: false,
      renderTime: "48 hours",
      complexity: "High"
    },
    {
      id: 2,
      title: "Product Visualization - Luxury Furniture",
      category: "product",
      year: "2024",
      client: "Furniture Studio",
      software: ["Blender", "Cycles", "Substance Painter"],
      description: "High-end furniture 3D modeling and rendering for e-commerce and marketing materials",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&brightness=0.9"
      ],
      isVideo: false,
      renderTime: "24 hours",
      complexity: "Medium"
    },
    {
      id: 3,
      title: "Interactive 3D Environment",
      category: "interactive",
      year: "2024",
      client: "Tech Company",
      software: ["Unity", "Maya", "Substance Designer"],
      description: "Real-time 3D environment for virtual showroom with interactive elements and animations",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=1200&h=800&fit=crop"
      ],
      isVideo: true,
      renderTime: "Real-time",
      complexity: "High"
    },
    {
      id: 4,
      title: "Commercial Space Walkthrough",
      category: "architectural",
      year: "2023",
      client: "Retail Chain",
      software: ["Cinema 4D", "Octane", "After Effects"],
      description: "360° virtual tour and animated walkthrough of commercial retail space",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1595814432314-90095f342694?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"
      ],
      isVideo: true,
      renderTime: "72 hours",
      complexity: "High"
    },
    {
      id: 5,
      title: "Industrial Equipment Modeling",
      category: "product",
      year: "2023",
      client: "Manufacturing Corp",
      software: ["SolidWorks", "KeyShot", "Photoshop"],
      description: "Technical 3D modeling and photorealistic rendering of industrial machinery",
      thumbnail: "https://images.unsplash.com/photo-1581092795442-2bb9f2830c53?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1581092795442-2bb9f2830c53?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1565087890569-067d7d9ec4e6?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop"
      ],
      isVideo: false,
      renderTime: "36 hours",
      complexity: "Medium"
    },
    {
      id: 6,
      title: "VR Experience Design",
      category: "interactive",
      year: "2024",
      client: "Real Estate Agency",
      software: ["Unreal Engine", "3ds Max", "Substance Suite"],
      description: "Immersive VR experience for real estate property visualization with interactive features",
      thumbnail: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1592832307747-8d18eea4b9de?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&h=800&fit=crop&brightness=0.8"
      ],
      isVideo: true,
      renderTime: "Real-time",
      complexity: "High"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const categories = [
    { key: 'all', label: 'All Projects', icon: '🎯' },
    { key: 'architectural', label: 'Architectural Viz', icon: '🏢' },
    { key: 'product', label: 'Product Rendering', icon: '📦' },
    { key: 'interactive', label: 'Interactive 3D', icon: '🎮' }
  ];

  const getComplexityColor = (complexity) => {
    switch(complexity) {
      case 'High': return 'complexity-high';
      case 'Medium': return 'complexity-medium';
      case 'Low': return 'complexity-low';
      default: return 'complexity-medium';
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading 3D Projects...</p>
      </div>
    );
  }

  return (
    <div className="threed-design-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <h1 className="main-title">3D Design & Visualization</h1>
          <p className="main-description">
            Cutting-edge 3D modeling, architectural visualization, and interactive experiences 
            crafted with industry-leading software and techniques.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Software Mastered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setFilter(category.key)}
            className={`filter-btn ${filter === category.key ? 'active' : ''}`}
          >
            <span className="filter-icon">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => openGallery(project)}
          >
            <div className="project-image-container">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="overlay-content">
                  {project.isVideo ? (
                    <Play className="overlay-icon" />
                  ) : (
                    <Eye className="overlay-icon" />
                  )}
                  <span className="overlay-text">
                    {project.isVideo ? 'Play Demo' : 'View Gallery'}
                  </span>
                </div>
              </div>
              <div className="project-badges">
                {project.isVideo && <span className="badge video-badge">Video</span>}
                <span className={`badge ${getComplexityColor(project.complexity)}`}>
                  {project.complexity}
                </span>
              </div>
            </div>
            
            <div className="project-info">
              <div className="project-meta">
                <div className="meta-item">
                  <Tag className="meta-icon" />
                  <span className="meta-text">{project.category}</span>
                </div>
                <div className="meta-item">
                  <Calendar className="meta-icon" />
                  <span className="meta-text">{project.year}</span>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Client:</span>
                  <span className="detail-value">{project.client}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Render Time:</span>
                  <span className="detail-value">{project.renderTime}</span>
                </div>
              </div>

              <div className="software-tags">
                {project.software.map((soft, index) => (
                  <span key={index} className="software-tag">{soft}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="gallery-modal">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-subtitle">{selectedProject.client} • {selectedProject.year}</p>
              </div>
              <div className="modal-actions">
                <button className="action-btn" title="Fullscreen">
                  <Maximize className="action-icon" />
                </button>
                <button className="action-btn" title="Download">
                  <Download className="action-icon" />
                </button>
                <button onClick={closeGallery} className="close-btn">
                  <X className="close-icon" />
                </button>
              </div>
            </div>

            {/* Image Display */}
            <div className="image-display">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="main-image"
              />
              
              {/* Navigation */}
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
            </div>

            {/* Project Details Panel */}
            <div className="details-panel">
              <div className="panel-section">
                <h4 className="panel-title">Project Details</h4>
                <p className="panel-description">{selectedProject.description}</p>
              </div>
              
              <div className="panel-section">
                <h4 className="panel-title">Technical Specifications</h4>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Software Used:</span>
                    <span className="spec-value">{selectedProject.software.join(', ')}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Render Time:</span>
                    <span className="spec-value">{selectedProject.renderTime}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Complexity:</span>
                    <span className={`spec-value ${getComplexityColor(selectedProject.complexity)}`}>
                      {selectedProject.complexity}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="thumbnail-strip">
              {selectedProject.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`thumbnail-btn ${index === currentImageIndex ? 'active' : ''}`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail-image" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDDesign;