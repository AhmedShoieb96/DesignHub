import SharedHeroSection from "../components/SharedHeroSection/SharedHeroSection";

import livingModern from '../images/design/modern/living.jpg';
import masterModern from '../images/design/modern/masterModern.jpg';
import childModern from '../images/design/modern/childmoder.jpg';
import bathModern from '../images/design/modern/bath.jpg';
import cafeModern from '../images/design/تجاري/cafe.jpg';
import BakryShop from '../images/design/تجاري/bakry.jpg';
import commercial from '../images/design/تجاري/commercial.jpg';


import livingClassic from '../images/design/classic/4.jpg';
import masterClassic from '../images/design/classic/master bedroom/New folder (2)/1.jpg';

import childClassic from '../images/design/classic/children/New folder/2.jpg';

import ketchenClassic from '../images/design/classic/مطبخ/received_1500428047447270.jpeg';





export default function Interior() {
    const designServices = [
    {
      title: "Living Modern Spaces",

      image: livingModern,
    },
    {
      title: "Master Modern Bedrooms",
    
      image: masterModern,
    
    },
    {
      title: "Children's Modern Rooms",
    
      image: childModern,

    },
    {
      title: "Bathroom Retreats",
      description: "Transform bathrooms into spa-like retreats with modern fixtures and elegant design.",
      image: bathModern,

    },
    {
      title: "Cafe Spaces",
      description: "Design productive and inspiring workspaces that enhance creativity and focus.",
      image:cafeModern,

    },
    {
      title: "Living Classic Spaces",
      
      image: livingClassic,

    },
    {
      title: "Master Classic Bedrooms",
      
      image: masterClassic,

    },
    {
      title: "child Classic Rooms",
     
      image: childClassic,

    },
    {
      title: "kitchen Classic",
  
      image: ketchenClassic,

    },
    {
      title: "Bakry Shop",
      image: BakryShop,
      
      

    }
    ,
    {
      title: "commercial Spaces",
      image: commercial,
      
      

    }
    ,
  
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
        <div>
             <SharedHeroSection  >
                <h2>Interior Design</h2>
             
            </SharedHeroSection>    
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
              <div key={index} className="service-item">
                <h3>{service.title}</h3>
                <div key={index} className="service-card">
                

                <div className="service-image">
                    <img src={service.image} alt="" />
                </div>
               
                <div className="card-hover-effect"></div>
              </div>
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

    
    </div>
        </div>
    );
}