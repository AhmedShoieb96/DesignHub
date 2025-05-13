import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBehance, FaCalendarAlt, FaUsers } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const foundedYear = 2020;
  const yearsInBusiness = currentYear - foundedYear;
  
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo & About */}
        <div className="footer__section footer__about">
          <img src={logo} alt="DesignHub logo" className="footer__logo" />
          <p className="footer__text">
            A leading company in Architectural and aesthetic designs. We work to convey the current 
            architectural level into a global aesthetic level, taking into consideration the customer's 
            budget and the nature of the Egyptian environment.
          </p>
          <div className="footer__icons">
            <a
              href="https://www.facebook.com/100064127791316?sk=photos&wtsid=rdr_0uhXZATBYQ4CSZsOJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DesignHub on Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/designhub946/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DesignHub on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https: ://www.behance.net/nourhanahmed1?fbclid=IwY2xjawKQgU4BHd_liy1Hp5llHncyHrriNTdb3U896qjjnQwwJbTLYGYowQbvXYNmMfa6-Q"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DesignHub on Behance"
              className="behance-icon"
            >
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        
        {/* Contact Information */}
        <div className="footer__section footer__social">
          <h4 className="footer__heading">Get in Touch</h4>
          <div className="footer__contact">
            <div className="footer__contact-item">
              <FaEnvelope className="footer__contact-icon" />
              <a href="mailto:designhub042020@gmail.com">designhub042020@gmail.com</a>
            </div>
            <div className="footer__contact-item">
              <FaPhone className="footer__contact-icon" />
              <span>+20 106 845 3899</span>
            </div>
            <div className="footer__contact-item">
              <FaMapMarkerAlt className="footer__contact-icon" />
              <span>El Helw Street, In front of Faculty of commerce, right next to KFC restaurant</span>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="footer__newsletter">
            <h4 className="footer__heading">Newsletter</h4>
            <p className="footer__text">Subscribe for design tips and updates</p>
            <form className="footer__form">
              <input 
                type="email" 
                placeholder="Your email" 
                className="footer__input" 
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="footer__button"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Company Information */}
        
      </div>

      <div className="footer__bottom">
        © {currentYear} Design Hub. All rights reserved. | Creating beautiful spaces for {yearsInBusiness} years
      </div>
    </footer>
  );
}