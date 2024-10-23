import React from 'react';
import './Footer.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const whatsAppNo ='+919600848215'
  const phoneNumber = '9843247834';
  const email = 'farookali7711@gmail.com'; 

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `whatsapp://send?phone=${whatsAppNo}` 
      : `https://web.whatsapp.com/send?phone=${whatsAppNo}`;
    window.open(whatsappURL, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`);
  }

 
  const handleMailClick = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>GG-Gold</h2>  
          <a href="https://gg-gold.in/">gg-gold.in</a> 
        </div>

        <div className="footer-icons">

          <a href="#" onClick={handleMailClick}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
          </a>

          <a href="#" onClick={handleWhatsAppClick}>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon" />
          </a>

          <a href="#" onClick={handleCallClick}>
            <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© GG-Gold 2024. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a> 
      </div>
    </footer>
  );
};

export default Footer;
