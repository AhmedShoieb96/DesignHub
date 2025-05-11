import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
export default function PhoneIcon() {
    return (
        <div className="phone-icon">
            <a href="tel:+201221159593">
                <FontAwesomeIcon icon={faPhone} className="fa-solid fa-phone"/>
            </a>
        </div>
    );
}   