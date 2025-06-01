import SharedHeroSection from "../components/SharedHeroSection/SharedHeroSection";
import ContactForm from "../components/contactSection/ContactForm";
export default function Contact() {
    return (
        <div>
             <SharedHeroSection  >
                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Whether you have a question, need assistance, or just want to say hello, feel free to reach out.</p>
                
            </SharedHeroSection>
            <h1 style={{height: '100px'}}></h1>
            <ContactForm />
        </div>
    );
}