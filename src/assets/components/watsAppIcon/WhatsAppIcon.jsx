import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function WhatsAppIcon() {
    const phoneNumber = "201221159593"; 
  const message = "Hello, I am interested in your services this massege is sent from the website Design hub need your help";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <div className="whatsapp-icon">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="faWhatsapp" alt="whatsapp-icon" /></a>
        </div>
    )
}