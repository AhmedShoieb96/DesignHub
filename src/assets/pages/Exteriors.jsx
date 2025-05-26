import SharedHeroSection from "../components/SharedHeroSection/SharedHeroSection";

export default function Exteriors() {
     const designServices = [
    {
      title: "Facade Design",
      description: "Create stunning and modern facades that enhance your building's architectural appeal and street presence.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Landscape Architecture",
      description: "Design beautiful outdoor spaces with gardens, pathways, and green areas that complement your property.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Outdoor Living Spaces",
      description: "Transform your outdoor areas into functional living spaces perfect for relaxation and entertainment.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Swimming Pool Design",
      description: "Create luxurious pool areas with modern design elements and resort-style landscaping.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Entrance Design",
      description: "Design impressive entrances and driveways that create a lasting first impression for your property.",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Rooftop Gardens",
      description: "Transform rooftops into green oases with sustainable design and urban gardening solutions.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Site Analysis",
      description: "We begin with thorough site evaluation, climate assessment, and understanding your outdoor lifestyle needs."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team creates innovative exterior design concepts with detailed sketches and material proposals."
    },
    {
      step: "03",
      title: "3D Visualization",
      description: "Advanced 3D renderings and virtual walkthroughs help you visualize the final exterior design."
    },
    {
      step: "04",
      title: "Construction & Installation",
      description: "Professional implementation with quality materials, expert craftsmen, and project management."
    }
  ];

  const features = [
    "Site Planning & Analysis",
    "3D Exterior Modeling",
    "Sustainable Design Solutions",
    "Climate-Responsive Design",
    "Material & Plant Selection",
    "Construction Supervision"
  ];
    return (
        <div>
             <SharedHeroSection  >
                <h2>Exterior Design</h2>
             
            </SharedHeroSection>
            <div className="exterior-design">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Exterior Design Mastery</h1>
            <p>
              Transform your property's exterior into a stunning showcase that combines architectural excellence 
              with landscape beauty. Our expert exterior designers create captivating outdoor environments 
              that enhance your property's value and curb appeal.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">300+</span>
                <span className="stat-label">Exterior Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="./src/assets/images/exterior.jpg" alt="Exterior Design" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Exterior Design Services</h2>
            <p>We specialize in creating breathtaking exteriors that blend architectural beauty with functional outdoor living</p>
          </div>
          <div className="services-grid">
            {designServices.map((service, index) => (
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
            <h2>Our Exterior Design Process</h2>
            <p>A comprehensive approach to creating stunning outdoor environments</p>
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
              <h2>Why Choose Our Exterior Design Services?</h2>
              <p>
                We combine architectural expertise with landscape design mastery to create exterior spaces 
                that are not only visually stunning but also sustainable, functional, and perfectly suited 
                to your climate and lifestyle needs.
              </p>
              <div className="features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="cta-button">Start Your Exterior Project</button>
            </div>
            <div className="features-visual">
              <div className="feature-highlight">
                <div className="highlight-item">
                  <h4>Climate-Smart Design</h4>
                  <p>Every exterior design considers local climate conditions for optimal performance</p>
                </div>
                <div className="highlight-item">
                  <h4>Sustainable Solutions</h4>
                  <p>We prioritize eco-friendly materials and water-efficient landscaping practices</p>
                </div>
                <div className="highlight-item">
                  <h4>Expert Execution</h4>
                  <p>Our certified landscape architects and designers ensure professional results</p>
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
            <h2>Ready to Transform Your Exterior?</h2>
            <p>Let's discuss your exterior design vision and create an outdoor space that exceeds your expectations</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Free Consultation</button>
              <button className="btn-secondary">View Our Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
        </div>
    );
}