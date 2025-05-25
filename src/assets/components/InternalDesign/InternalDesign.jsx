import React from 'react';
import './InternalDesign.css';

const InternalDesign = () => {
  const designServices = [
    {
      title: "Living Spaces",
      description: "Transform your living room into a comfortable and stylish space that reflects your personality.",
      icon: "🛋️"
    },
    {
      title: "Kitchen Design",
      description: "Create functional and beautiful kitchens that serve as the heart of your home.",
      icon: "🍽️"
    },
    {
      title: "Bedroom Sanctuaries",
      description: "Design peaceful and luxurious bedrooms for ultimate relaxation and comfort.",
      icon: "🛏️"
    },
    {
      title: "Bathroom Retreats",
      description: "Transform bathrooms into spa-like retreats with modern fixtures and elegant design.",
      icon: "🛁"
    },
    {
      title: "Office Spaces",
      description: "Design productive and inspiring workspaces that enhance creativity and focus.",
      icon: "💼"
    },
    {
      title: "Dining Areas",
      description: "Create inviting dining spaces perfect for family gatherings and entertainment.",
      icon: "🍴"
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Consultation",
      description: "We start with understanding your vision, needs, and lifestyle requirements."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team creates initial design concepts and mood boards for your approval."
    },
    {
      step: "03",
      title: "Design Planning",
      description: "Detailed floor plans, 3D renderings, and material selections are prepared."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Professional execution of the design with quality materials and craftsmanship."
    }
  ];

  const features = [
    "Custom Space Planning",
    "3D Visualization",
    "Material Selection",
    "Lighting Design",
    "Furniture Coordination",
    "Project Management"
  ];

  return (
    <div className="internal-design">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Interior Design Excellence</h1>
            <p>
              Transform your spaces into beautiful, functional environments that reflect your unique style. 
              Our expert interior designers create personalized solutions for every room in your home or office.
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
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="./src/assets/images/sofra.jpg" alt="Interior Design" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Interior Design Services</h2>
            <p>We specialize in creating stunning interiors that combine functionality with aesthetic appeal</p>
          </div>
          <div className="services-grid">
            {designServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
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
            <h2>Our Design Process</h2>
            <p>A systematic approach to creating your perfect space</p>
          </div>
          <div className="process-timeline">
            {designProcess.map((item, index) => (
              <div key={index} className="process-item">
                <div className="process-number">{item.step}</div>
                <div className="process-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {index < designProcess.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2>Why Choose Our Interior Design Services?</h2>
              <p>
                We bring years of expertise and creative vision to every project, ensuring that your space 
                not only looks beautiful but also functions perfectly for your lifestyle.
              </p>
              <div className="features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="cta-button">Start Your Project</button>
            </div>
            <div className="features-visual">
              <div className="feature-highlight">
                <div className="highlight-item">
                  <h4>Personalized Approach</h4>
                  <p>Every design is tailored to your specific needs and preferences</p>
                </div>
                <div className="highlight-item">
                  <h4>Quality Materials</h4>
                  <p>We use only the finest materials and furnishings for lasting beauty</p>
                </div>
                <div className="highlight-item">
                  <h4>Professional Team</h4>
                  <p>Our certified designers bring creativity and expertise to every project</p>
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
            <h2>Ready to Transform Your Space?</h2>
            <p>Let's discuss your interior design project and bring your vision to life</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Free Consultation</button>
              <button className="btn-secondary">View Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternalDesign;