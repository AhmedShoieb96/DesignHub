import SharedHeroSection from "../components/SharedHeroSection/SharedHeroSection";
import InternalDesign from "../components/InternalDesign/InternalDesign";
export default function AboutUs() {
    return (
        <div>
            <SharedHeroSection  >
                <h2>About Us</h2>
                <p>We are a company that specializes in...</p>
            </SharedHeroSection>
            <InternalDesign/>
            <h1>About Us</h1>
            <p>We are a company that specializes in...</p>
            <p>Our mission is to...</p>
            <p>Contact us for more information!</p>
        </div>
    );
}