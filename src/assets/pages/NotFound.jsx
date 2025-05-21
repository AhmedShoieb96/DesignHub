import SharedHeroSection from "../components/SharedHeroSection/SharedHeroSection";

export default function NotFound() {
    return (
        <div>
             <SharedHeroSection  >
                <h2>About Us</h2>
                <p>We are a company that specializes in...</p>
            </SharedHeroSection>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL or return to the home page.</p>
        </div>
    );
}