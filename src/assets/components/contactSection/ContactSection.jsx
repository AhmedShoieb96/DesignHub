import React, { useState } from 'react';
import './ContactSection.css';
import { Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', // Added email field for better contact information
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Show success message
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>CONTACT US</h2>
        <div className="contact-info">
          <div className="info-item">
            <h3>DesignHub Studio</h3>
            <p>El Helw Street, In front of Faculty of commerce, right next to KFC restaurant</p>
          </div>
          
          <div className="info-item">
            <h3>Phone</h3>
            <p>+20 106 845 3899</p>
            {/* <div className="contact-phone-button">
              <a href="tel:+201068453899" className="phone-link">
                <Phone size={20} />
              </a>
            </div> */}
          </div>
          
          <div className="info-item">
            <h3>E-mail</h3>
            <p><a href="mailto:designhub042020@gmail.com">designhub042020@gmail.com</a></p>
          </div>
          
          <div className="info-item">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
<div className="Form-container"></div>

      <div className="contact-right">
        <h2>REQUEST A CALL</h2>
        {submitted ? (
          <div className="success-message">
            <p>Thank you for your message! We'll contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="How can we help you?" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="send-button">SEND REQUEST</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactSection;