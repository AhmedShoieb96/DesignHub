import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  Calendar, 
  Tag, 
  Palette, 
  Maximize, 
  Download, 
  Layers, 
  Monitor, 
  Printer, 
  Image, 
  PenTool,
  Clock,
  User,
  Briefcase
} from 'lucide-react';

const TwoDDesign = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: "Luxury Brand Identity Package",
      category: "branding",
      year: "2024",
      client: "Premium Fashion Co.",
      software: ["Adobe Illustrator", "Photoshop", "InDesign"],
      description: "Complete brand identity design including logo, typography, color schemes, and comprehensive brand guidelines for a luxury fashion company.",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=800&fit=crop"
      ],
      deliverables: "Logo Design, Brand Guidelines, Business Cards, Letterhead",
      colorPalette: ["#379db6", "#3abf95", "#2c3e50", "#f39c12"],
      format: "Digital & Print",
      priority: "high",
      dimensions: "Various Formats",
      duration: "6 weeks"
    },
    {
      id: 2,
      title: "Modern Web UI Design System",
      category: "web",
      year: "2024",
      client: "Tech Startup Inc.",
      software: ["Figma", "Adobe XD", "Illustrator"],
      description: "Comprehensive web interface design system with components, layouts, and interactive elements for a modern SaaS platform.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop"
      ],
      deliverables: "UI Components, Design System, Prototypes, Style Guide",
      colorPalette: ["#379db6", "#3abf95", "#e74c3c", "#9b59b6"],
      format: "Digital",
      priority: "high",
      dimensions: "1920x1080, Mobile Responsive",
      duration: "8 weeks"
    },
    {
      id: 3,
      title: "Corporate Print Design Suite",
      category: "print",
      year: "2023",
      client: "Business Solutions Ltd.",
      software: ["InDesign", "Illustrator", "Photoshop"],
      description: "Professional print design collection including brochures, flyers, annual reports, and marketing materials for corporate communications.",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?w=1200&h=800&fit=crop"
      ],
      deliverables: "Brochures, Annual Report, Marketing Materials, Templates",
      colorPalette: ["#2c3e50", "#379db6", "#e67e22", "#95a5a6"],
      format: "Print",
      priority: "medium",
      dimensions: "A4, A3, Custom Sizes",
      duration: "4 weeks"
    },
    {
      id: 4,
      title: "Digital Illustration Portfolio",
      category: "illustration",
      year: "2024",
      client: "Creative Agency",
      software: ["Illustrator", "Procreate", "Photoshop"],
      description: "Custom digital illustrations for various media including web graphics, social media content, and editorial illustrations.",
      thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
      ],
      deliverables: "Digital Illustrations, Icon Sets, Graphics, Concepts",
      colorPalette: ["#3abf95", "#379db6", "#f39c12", "#e74c3c"],
      format: "Digital",
      priority: "medium",
      dimensions: "Various Digital Formats",
      duration: "3 weeks"
    },
    {
      id: 5,
      title: "Restaurant Brand Identity",
      category: "branding",
      year: "2023",
      client: "Gourmet Bistro",
      software: ["Illustrator", "Photoshop", "InDesign"],
      description: "Complete restaurant branding package including logo, menu design, signage, and promotional materials for an upscale dining establishment.",
      thumbnail: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200&h=800&fit=crop"
      ],
      deliverables: "Logo, Menu Design, Signage, Marketing Materials",
      colorPalette: ["#2c3e50", "#f39c12", "#379db6", "#27ae60"],
      format: "Digital & Print",
      priority: "high",
      dimensions: "Various Sizes",
      duration: "5 weeks"
    },
    {
      id: 6,
      title: "E-commerce Web Design",
      category: "web",
      year: "2024",
      client: "Online Retail Store",
      software: ["Figma", "Adobe XD", "Photoshop"],
      description: "Modern e-commerce website design with focus on user experience, product showcasing, and conversion optimization.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=800&fit=crop"
      ],
      deliverables: "Website Design, Mobile App UI, User Experience Flow",
      colorPalette: ["#3abf95", "#379db6", "#2c3e50", "#f1c40f"],
      format: "Digital",
      priority: "high",
      dimensions: "Responsive Design",
      duration: "7 weeks"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "80+", label: "Happy Clients" },
    { number: "6+", label: "Years Experience" },
    { number: "15+", label: "Awards Won" }
  ];

  const filterCategories = [
    { key: 'all', label: 'All Projects', icon: Layers },
    { key: 'branding', label: 'Branding', icon: Tag },
    { key: 'web', label: 'Web Design', icon: Monitor },
    { key: 'print', label: 'Print Design', icon: Printer },
    { key: 'illustration', label: 'Illustration', icon: PenTool }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
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

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading 2D Design Projects...</p>
      </div>
    );
  }

  return (
    <div className="twod-design-container">
      {/* Header Section */}
      <section className="header-section">
        <div className="header-content">
          <h1 className="main-title">2D Design Portfolio</h1>
          <p className="main-description">
            Creating compelling visual narratives through innovative 2D design solutions. 
            From brand identity to digital interfaces, we transform ideas into stunning visual experiences.
          </p>
          
          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        {filterCategories.map(category => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
            >
              <IconComponent className="filter-icon" />
              {category.label}
            </button>
          );
        })}
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            onClick={() => openProject(project)}
            className="project-card"
          >
            {/* Project Image */}
            <div className="project-image-container">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-image"
              />
              
              {/* Overlay */}
              <div className="project-overlay">
                <div className="overlay-content">
                  <Eye className="overlay-icon" />
                  <span className="overlay-text">View Project</span>
                </div>
              </div>

              {/* Badges */}
              <div className="project-badges">
                <span className={`badge brand-badge`}>
                  {project.category}
                </span>
                <span className={`badge priority-${project.priority}`}>
                  {project.priority}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="project-info">
              {/* Meta Info */}
              <div className="project-meta">
                <div className="meta-item">
                  <Calendar className="meta-icon" />
                  {project.year}
                </div>
                <div className="meta-item">
                  <User className="meta-icon" />
                  {project.client}
                </div>
              </div>

              {/* Title */}
              <h3 className="project-title">{project.title}</h3>

              {/* Description */}
              <p className="project-description">{project.description}</p>

              {/* Project Details */}
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Format:</span>
                  <span className="detail-value">{project.format}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{project.duration}</span>
                </div>
              </div>

              {/* Software Tags */}
              <div className="software-tags">
                {project.software.slice(0, 3).map((software, index) => (
                  <span key={index} className="software-tag">
                    {software}
                  </span>
                ))}
              </div>

              {/* Color Palette */}
              <div className="color-palette">
                {project.colorPalette.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="gallery-modal" onClick={closeProject}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-subtitle">
                  <span>{selectedProject.client}</span>
                  <span>•</span>
                  <span>{selectedProject.year}</span>
                  <span>•</span>
                  <span className="capitalize">{selectedProject.category}</span>
                </div>
              </div>
              <div className="modal-actions">
                <button className="action-btn">
                  <Maximize className="action-icon" />
                </button>
                <button className="action-btn">
                  <Download className="action-icon" />
                </button>
                <button onClick={closeProject} className="close-btn">
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

            {/* Details Panel */}
            <div className="details-panel">
              <div className="panel-section">
                <h3 className="panel-title">Project Description</h3>
                <p className="panel-description">{selectedProject.description}</p>
              </div>

              {/* Specifications */}
              <div className="panel-section">
                <h3 className="panel-title">Technical Specifications</h3>
                <div className="tech-specs">
                  {[
                    { label: 'Client', value: selectedProject.client },
                    { label: 'Year', value: selectedProject.year },
                    { label: 'Format', value: selectedProject.format },
                    { label: 'Dimensions', value: selectedProject.dimensions },
                    { label: 'Duration', value: selectedProject.duration },
                  ].map((spec, index) => (
                    <div key={index} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                  
                  <div className="spec-item">
                    <span className="spec-label">Colors</span>
                    <div className="spec-colors">
                      {selectedProject.colorPalette.map((color, index) => (
                        <div
                          key={index}
                          className="spec-color-swatch"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Software Used */}
              <div className="panel-section">
                <h3 className="panel-title">Software & Tools</h3>
                <p className="panel-description">{selectedProject.software.join(', ')}</p>
              </div>

              {/* Deliverables */}
              <div className="panel-section">
                <h3 className="panel-title">Deliverables</h3>
                <p className="panel-description">{selectedProject.deliverables}</p>
              </div>
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