import React from 'react';
import './Construction.css';

const Construction = () => {
  const constructionServices = [
    {
      title: "Complete Construction",
      description: "Full-scale construction services from foundation to finishing, ensuring quality craftsmanship at every stage.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Design Implementation",
      description: "Expert execution of architectural designs with precision, bringing your vision to life with professional quality.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with comprehensive renovation services that enhance functionality and aesthetics.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Project Management",
      description: "Professional oversight of construction projects ensuring timely delivery, quality control, and budget management.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Quality Control",
      description: "Rigorous quality assurance processes and inspections to ensure every aspect meets our high standards.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Finishing Works",
      description: "Premium finishing services including flooring, painting, fixtures, and final touches for perfect completion.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const constructionProcess = [
    {
      step: "01",
      title: "Project Planning",
      description: "Comprehensive planning includes site assessment, permit acquisition, material sourcing, and timeline development."
    },
    {
      step: "02",
      title: "Foundation & Structure",
      description: "Expert construction of foundations, structural elements, and core building systems with quality materials."
    },
    {
      step: "03",
      title: "Building Systems",
      description: "Installation of electrical, plumbing, HVAC, and other essential systems by certified professionals."
    },
    {
      step: "04",
      title: "Finishing & Handover",
      description: "Final touches, quality inspections, and complete project handover with warranties and documentation."
    }
  ];

  const qualityFeatures = [
    "Licensed Contractors",
    "Quality Material Sourcing",
    "Safety Compliance",
    "Timeline Management",
    "Budget Control",
    "Warranty Coverage"
  ];



  return (
    <div className="construction">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional Construction Services</h1>
            <p>
              Transform your architectural dreams into reality with our comprehensive construction and 
              execution services. Our experienced team delivers exceptional quality, timely completion, 
              and professional craftsmanship for residential and commercial projects of all scales.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="./src/assets/images/sofra.jpg" alt="Construction Services" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Construction Services</h2>
            <p>Comprehensive construction solutions from concept to completion with professional expertise and quality assurance</p>
          </div>
          <div className="services-grid">
            {constructionServices.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Construction Process</h2>
            <p>A systematic approach to delivering exceptional construction results</p>
          </div>
          <div className="process-timeline">
            {constructionProcess.map((item, index) => (
              <div key={index} className="process-item">
                <div className="process-number">{item.step}</div>
                <div className="process-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {index < constructionProcess.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <h2>Why Choose Our Construction Services?</h2>
              <p>
                We combine technical expertise with proven project management methodologies to deliver 
                construction projects that exceed expectations. Our commitment to quality, safety, and 
                customer satisfaction sets us apart in the construction industry.
              </p>
              <div className="quality-list">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="quality-item">
                    <span className="quality-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="cta-button">Start Your Construction Project</button>
            </div>
            <div className="quality-visual">
              <div className="quality-highlight">
                <div className="highlight-item">
                  <h4>Professional Team</h4>
                  <p>Licensed contractors, skilled craftsmen, and experienced project managers</p>
                </div>
                <div className="highlight-item">
                  <h4>Quality Materials</h4>
                  <p>We source premium materials from trusted suppliers for lasting construction quality</p>
                </div>
                <div className="highlight-item">
                  <h4>Safety First</h4>
                  <p>Strict adherence to safety protocols and regulations for secure construction sites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Dream Project?</h2>
            <p>Let's discuss your construction needs and bring your architectural vision to life with professional execution</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Construction Quote</button>
              <button className="btn-secondary">View Our Projects</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;