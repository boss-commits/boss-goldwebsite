import React from 'react';
import './Navbar.css';
import gg from '../../assets/gg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const phoneNumber = '9843247834';  // Your WhatsApp number

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `whatsapp://send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <nav className='container'>
      <img src={gg} alt="Logo" className='logo' />
      <ul>
        <li className='navLink'>
          <a href="#" onClick={handleWhatsAppClick}>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp - {phoneNumber}
          </a>
        </li>
        <li className='navLink'>
          <a href="tel:9843247834">
            <FontAwesomeIcon icon={faPhoneAlt} /> Call - 9843247834
          </a>
        </li>
        <li className='navLink'>Buy/Sell Gold for Cash</li>
        <li>
          <button className='btn'>Contact us via Whatsapp/Call</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
