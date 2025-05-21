import SharedHeroSection from "../components/SharedHeroSection/SharedHeroSection";
import office from '../images/COVER.jpg';
export default function AboutUs() {
    return (
        <div>
            <SharedHeroSection  >
                <h2>About Us</h2>
                <p>We are a company that specializes in...</p>
            </SharedHeroSection>
            <div className="about-us-first-container">
                <img src={office} className="img" alt="ABOUT US" />
                <p className="about-us-text">Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. Laborum voluptatum numquam sapiente perspiciatis.
                      Natus, dicta? Ad consequuntur, tempora assumenda, nihil incidunt 
                      asperiores id voluptatibus,
                    architecto porro officiis maiores magnam? Aperiam.
                </p>
            </div>
            <div className="about-us-second-container">
              <div className="about-us-second-container-card">
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptatibus.
                </p>
              </div>
                <div className="about-us-second-container-card">
                <h2>Our Vision</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptatibus.
                </p>
                </div>
                <div className="about-us-second-container-card">
                <h2>Our Values</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptatibus.
                </p>
                </div>  
    
            </div>
              
        </div>
        
    );
}